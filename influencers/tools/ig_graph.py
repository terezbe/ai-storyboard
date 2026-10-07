#!/usr/bin/env python3
"""ig_graph.py: a character's Instagram through the Meta Graph API, with no third-party tool.

Set in the cloud environment's settings (never pasted in chat), then start a new session:
  META_IG_TOKEN   long-lived token from the Meta app: Instagram > "API setup with Instagram login" > Generate access tokens
Optional:
  IG_USER_ID      the Instagram account ID (looked up from the token when missing)
  IG_CHAR         the character folder that gets the saved tables (default rosa)
  IG_GRAPH_HOST   graph.instagram.com (default); graph.facebook.com for a Facebook-login token, which also needs IG_USER_ID

Commands:
  python3 influencers/tools/ig_graph.py insights [N]                 the last N posts (default 20) as our 24 h / 72 h table
  python3 influencers/tools/ig_graph.py comments MEDIA_ID            the comments on one post
  python3 influencers/tools/ig_graph.py reply COMMENT_ID "text"      answer a comment, in the character's voice
  python3 influencers/tools/ig_graph.py publish VIDEO_URL CAPTION_FILE [COVER_URL]   post a Reel from a public mp4
  python3 influencers/tools/ig_graph.py refresh                      extend an Instagram-login token by 60 days

Captions go up exactly as in the package. The API can't switch on Instagram's AI label: the owner adds it by hand.
Also by hand (two minutes a day): pinning a comment, the bio link, a story with a link sticker, DMs.
"""
import datetime as dt
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

HOST = os.environ.get("IG_GRAPH_HOST", "graph.instagram.com")
VER = "v21.0"
TOKEN = os.environ.get("META_IG_TOKEN")
USER = os.environ.get("IG_USER_ID")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHAR = os.environ.get("IG_CHAR", "rosa")

REEL_METRICS = ["views", "reach", "saved", "shares", "likes", "comments", "total_interactions",
                "ig_reels_avg_watch_time", "follows", "profile_visits"]
FEED_METRICS = ["views", "reach", "saved", "shares", "likes", "comments", "total_interactions", "follows", "profile_visits"]
_supported = {}  # product type -> the metrics the API accepted for it


class GraphError(Exception):
    pass


def call(path, params=None, method="GET"):
    params = dict(params or {})
    params["access_token"] = TOKEN
    url = f"https://{HOST}/{VER}/{path.lstrip('/')}"
    body = urllib.parse.urlencode(params)
    req = urllib.request.Request(url, data=body.encode(), method="POST") if method == "POST" else urllib.request.Request(f"{url}?{body}")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        raise GraphError(f"Graph API {e.code} on {path}: {e.read().decode(errors='replace')[:600]}") from None


def user_id():
    global USER
    if not TOKEN:
        sys.exit("Set META_IG_TOKEN in the environment settings first, then start a new session (see the docstring).")
    if not USER:
        if HOST != "graph.instagram.com":
            sys.exit("A Facebook-login token also needs IG_USER_ID.")
        me = call("me", {"fields": "user_id,username"})
        USER = str(me.get("user_id") or me["id"])
    return USER


def _values(out):
    return {d["name"]: (d.get("values") or [{}])[0].get("value") for d in out.get("data", [])}


def media_insights(media_id, product_type):
    wanted = REEL_METRICS if product_type == "REELS" else FEED_METRICS
    metrics = _supported.get(product_type, wanted)
    if not metrics:
        return {}
    try:
        vals = _values(call(f"{media_id}/insights", {"metric": ",".join(metrics)}))
        _supported.setdefault(product_type, metrics)
        return vals
    except GraphError:
        if product_type in _supported:
            return {}  # this one post refused (too new, deleted): skip it
    vals, ok = {}, []  # first refusal for this type: find the metrics the API accepts, once
    for m in wanted:
        try:
            vals.update(_values(call(f"{media_id}/insights", {"metric": m})))
            ok.append(m)
        except GraphError:
            pass
    _supported[product_type] = ok
    return vals


def insights(n=20):
    uid = user_id()
    fields = "id,caption,timestamp,permalink,media_product_type,media_type,like_count,comments_count"
    posts = call(f"{uid}/media", {"fields": fields, "limit": n}).get("data", [])
    now = dt.datetime.now(dt.timezone.utc)
    rows = []
    for p in posts:
        ins = media_insights(p["id"], p.get("media_product_type"))
        ts = dt.datetime.strptime(p["timestamp"], "%Y-%m-%dT%H:%M:%S%z")
        reach = ins.get("reach") or 0
        per100 = lambda x: round(100 * (x or 0) / reach, 2) if reach else ""
        watch = ins.get("ig_reels_avg_watch_time")
        rows.append(dict(id=p["id"], posted=ts.astimezone().strftime("%Y-%m-%d %H:%M"),
                         age_h=round((now - ts).total_seconds() / 3600, 1),
                         hook=(p.get("caption") or "").split("\n")[0][:60], permalink=p.get("permalink"),
                         views=ins.get("views"), reach=reach, avg_watch_s=round(watch / 1000, 1) if watch else "",
                         likes=ins.get("likes", p.get("like_count")), comments=ins.get("comments", p.get("comments_count")),
                         saves=ins.get("saved"), shares=ins.get("shares"), follows=ins.get("follows"),
                         profile_visits=ins.get("profile_visits"), saves_100=per100(ins.get("saved")),
                         shares_100=per100(ins.get("shares"))))
    cols = ["posted", "age_h", "hook", "views", "reach", "avg_watch_s", "likes", "comments", "saves", "shares",
            "follows", "profile_visits", "saves_100", "shares_100"]
    print("| " + " | ".join(cols) + " |")
    print("|" + "---|" * len(cols))
    for r in rows:
        print("| " + " | ".join("" if r[c] is None else str(r[c]) for c in cols) + " |")
    out_dir = os.environ.get("IG_OUT_DIR", os.path.join(ROOT, CHAR, "instagram"))
    out = os.path.join(out_dir, f"insights-{now.strftime('%Y-%m-%d-%H%M')}.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(rows, fh, indent=1, ensure_ascii=False)
    print(f"\nsaved {out}")
    return rows


def comments(media_id):
    user_id()
    out = call(f"{media_id}/comments", {"fields": "id,text,username,timestamp,like_count", "limit": 100})
    for c in out.get("data", []):
        print(f"{c['id']}  {c.get('timestamp', '')[:16]}  @{c.get('username', '?')}: {c.get('text', '')}")


def reply(comment_id, text):
    user_id()
    print(call(f"{comment_id}/replies", {"message": text}, method="POST"))


def publish(video_url, caption_file, cover_url=None, poll_s=10):
    uid = user_id()
    caption = open(caption_file, encoding="utf-8").read().strip()
    params = {"media_type": "REELS", "video_url": video_url, "caption": caption, "share_to_feed": "true"}
    if cover_url:
        params["cover_url"] = cover_url
    container = call(f"{uid}/media", params, method="POST")["id"]
    for _ in range(60):  # up to ten minutes while Instagram fetches and processes the video
        st = call(container, {"fields": "status_code,status"})
        if st.get("status_code") == "FINISHED":
            break
        if st.get("status_code") in ("ERROR", "EXPIRED"):
            sys.exit(f"container {container}: {st}")
        time.sleep(poll_s)
    else:
        sys.exit(f"container {container} is still processing: publish it later with media_publish")
    media = call(f"{uid}/media_publish", {"creation_id": container}, method="POST")["id"]
    link = call(media, {"fields": "permalink"}).get("permalink")
    print("published", media, link)
    return media, link


def refresh():
    if not TOKEN:
        sys.exit("META_IG_TOKEN is not set")
    url = f"https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={urllib.parse.quote(TOKEN)}"
    with urllib.request.urlopen(url, timeout=60) as r:
        out = json.load(r)
    print(f"new token valid for {out.get('expires_in', 0) // 86400} days; replace META_IG_TOKEN in the environment settings with it:")
    print(out.get("access_token"))


if __name__ == "__main__":
    a = sys.argv[1:]
    cmds = {"insights": lambda: insights(int(a[1]) if len(a) > 1 else 20),
            "comments": lambda: comments(a[1]),
            "reply": lambda: reply(a[1], a[2]),
            "publish": lambda: publish(a[1], a[2], a[3] if len(a) > 3 else None),
            "refresh": refresh}
    if not a or a[0] not in cmds:
        sys.exit(__doc__)
    try:
        cmds[a[0]]()
    except GraphError as e:
        sys.exit(str(e))

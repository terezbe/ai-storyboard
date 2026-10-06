#!/usr/bin/env python3
"""ig_graph.py: a character's Instagram through the Meta Graph API, with no third-party tool.

Two environment variables, set in the cloud environment's settings (never pasted in chat):
  META_IG_TOKEN   a long-lived token from the Meta app: Instagram > "API setup with Instagram login" > Generate token
  IG_USER_ID      the Instagram account ID shown next to that token
Optional: IG_GRAPH_HOST (default graph.instagram.com; use graph.facebook.com for a Facebook-login token).

Commands:
  python3 influencers/tools/ig_graph.py insights [N]                 the last N posts (default 20) as our 24 h / 72 h table
  python3 influencers/tools/ig_graph.py comments MEDIA_ID            the comments on one post
  python3 influencers/tools/ig_graph.py reply COMMENT_ID "text"      answer a comment, in the character's voice
  python3 influencers/tools/ig_graph.py publish VIDEO_URL CAPTION_FILE [COVER_URL]   post a Reel from a public mp4
  python3 influencers/tools/ig_graph.py refresh                      extend an Instagram-login token by 60 days

What the API cannot do (still by hand, two minutes a day): pin a comment, edit the bio link, a story with a link sticker, DMs.
"""
import datetime as dt
import json
import os
import sys
import time
import urllib.parse
import urllib.request

HOST = os.environ.get("IG_GRAPH_HOST", "graph.instagram.com")
VER = "v21.0"
TOKEN = os.environ.get("META_IG_TOKEN")
USER = os.environ.get("IG_USER_ID")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REEL_METRICS = ["views", "reach", "saved", "shares", "likes", "comments", "total_interactions",
                "ig_reels_avg_watch_time", "follows", "profile_visits"]


def call(path, params=None, method="GET"):
    params = dict(params or {})
    params["access_token"] = TOKEN
    url = f"https://{HOST}/{VER}/{path.lstrip('/')}"
    data = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(url + ("" if method == "POST" else "?" + data.decode()),
                                 data=data if method == "POST" else None, method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        sys.exit(f"Graph API {e.code} on {path}: {body[:600]}")


def need_env():
    if not TOKEN or not USER:
        sys.exit("Set META_IG_TOKEN and IG_USER_ID in the environment settings first (see the docstring).")


def media_insights(media_id, product_type):
    metrics = list(REEL_METRICS) if product_type == "REELS" else ["views", "reach", "saved", "shares", "likes", "comments", "total_interactions"]
    while metrics:
        try:
            out = call(f"{media_id}/insights", {"metric": ",".join(metrics)})
            return {d["name"]: (d.get("values") or [{}])[0].get("value") for d in out.get("data", [])}
        except SystemExit as err:  # an unsupported metric: drop it and retry
            msg = str(err)
            dropped = [m for m in metrics if m in msg]
            if not dropped:
                raise
            metrics = [m for m in metrics if m not in dropped]
    return {}


def insights(n=20):
    need_env()
    fields = "id,caption,timestamp,permalink,media_product_type,media_type,like_count,comments_count"
    posts = call(f"{USER}/media", {"fields": fields, "limit": n}).get("data", [])
    now = dt.datetime.now(dt.timezone.utc)
    rows = []
    for p in posts:
        ins = media_insights(p["id"], p.get("media_product_type"))
        ts = dt.datetime.strptime(p["timestamp"], "%Y-%m-%dT%H:%M:%S%z")
        age_h = round((now - ts).total_seconds() / 3600, 1)
        reach = ins.get("reach") or 0
        per100 = lambda x: round(100 * (x or 0) / reach, 2) if reach else ""
        rows.append(dict(id=p["id"], posted=ts.astimezone().strftime("%Y-%m-%d %H:%M"), age_h=age_h,
                         hook=(p.get("caption") or "").split("\n")[0][:60], permalink=p.get("permalink"),
                         views=ins.get("views"), reach=reach, avg_watch_s=round(ins["ig_reels_avg_watch_time"] / 1000, 1) if ins.get("ig_reels_avg_watch_time") else "",
                         likes=ins.get("likes", p.get("like_count")), comments=ins.get("comments", p.get("comments_count")),
                         saves=ins.get("saved"), shares=ins.get("shares"), follows=ins.get("follows"),
                         profile_visits=ins.get("profile_visits"), saves_100=per100(ins.get("saved")), shares_100=per100(ins.get("shares"))))
    cols = ["posted", "age_h", "hook", "views", "reach", "avg_watch_s", "likes", "comments", "saves", "shares", "follows", "profile_visits", "saves_100", "shares_100"]
    print("| " + " | ".join(cols) + " |")
    print("|" + "---|" * len(cols))
    for r in rows:
        print("| " + " | ".join("" if r[c] is None else str(r[c]) for c in cols) + " |")
    out = os.path.join(ROOT, "rosa", "instagram", f"insights-{now.strftime('%Y-%m-%d-%H%M')}.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(rows, fh, indent=1, ensure_ascii=False)
    print(f"\nsaved {out}")


def comments(media_id):
    need_env()
    out = call(f"{media_id}/comments", {"fields": "id,text,username,timestamp,like_count", "limit": 100})
    for c in out.get("data", []):
        print(f"{c['id']}  {c.get('timestamp', '')[:16]}  @{c.get('username', '?')}: {c.get('text', '')}")


def reply(comment_id, text):
    need_env()
    print(call(f"{comment_id}/replies", {"message": text}, method="POST"))


def publish(video_url, caption_file, cover_url=None):
    need_env()
    caption = open(caption_file, encoding="utf-8").read().strip()
    params = {"media_type": "REELS", "video_url": video_url, "caption": caption, "share_to_feed": "true"}
    if cover_url:
        params["cover_url"] = cover_url
    container = call(f"{USER}/media", params, method="POST")["id"]
    for _ in range(60):  # up to ten minutes while Instagram fetches and processes the video
        st = call(container, {"fields": "status_code,status"})
        if st.get("status_code") == "FINISHED":
            break
        if st.get("status_code") in ("ERROR", "EXPIRED"):
            sys.exit(f"container {container}: {st}")
        time.sleep(10)
    else:
        sys.exit(f"container {container} still not ready: publish it later with media_publish")
    media = call(f"{USER}/media_publish", {"creation_id": container}, method="POST")["id"]
    print("published", media, call(media, {"fields": "permalink"}).get("permalink"))


def refresh():
    if not TOKEN:
        sys.exit("META_IG_TOKEN is not set")
    url = f"https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={urllib.parse.quote(TOKEN)}"
    with urllib.request.urlopen(url, timeout=60) as r:
        out = json.load(r)
    print(f"new token valid for {out.get('expires_in', 0) // 86400} days; store it as META_IG_TOKEN in the environment settings:")
    print(out.get("access_token"))


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a or a[0] not in ("insights", "comments", "reply", "publish", "refresh"):
        sys.exit(__doc__)
    {"insights": lambda: insights(int(a[1]) if len(a) > 1 else 20),
     "comments": lambda: comments(a[1]),
     "reply": lambda: reply(a[1], a[2]),
     "publish": lambda: publish(a[1], a[2], a[3] if len(a) > 3 else None),
     "refresh": refresh}[a[0]]()

#!/usr/bin/env python3
"""Build an upload package for one character: videos + caption + cover per post, plus instructions for ChatGPT.

Run:  python3 influencers/tools/make_instagram_package.py rosa

Reads the posting order, profile and comment replies from <c>/launch-kit.md and the post captions from
<c>/content-plan.md. Videos come from <c>/final/ (run finish_video.py first).
Writes:
  <c>/instagram/            GPT-INSTRUCTIONS.md, posts.csv, captions/  (small, tracked in git)
  <c>/final/instagram-package/ and <c>/final/<handle>-instagram-package.zip  (videos, not in git)
"""
import csv
import os
import zipfile
import re
import shutil
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from build_video_prompts import parse_plan  # noqa: E402

PRODUCT = {"rosa": "The 30-Day Morning Reset", "ray": "The Quiet Money Workbook", "lou": "Don't Text. Call."}
PRODUCT_SHORT = {"rosa": "My 30-Day Morning Reset", "ray": "The Quiet Money Workbook", "lou": "Don't Text. Call."}
DAY4_VARIANT = {"R4": "R4-day4"}   # finals cut for day 4, before the store link exists
LATER = {"R4": "R4 full version: ends with 'Giulia put it in the link.' Use it from day 5, as a story with the link sticker."}


def launch_kit(c):
    text = open(os.path.join(ROOT, c, "launch-kit.md"), encoding="utf-8").read()
    handle = re.search(r"\| Username \| `([^`]+)`", text).group(1)
    name = re.search(r"\| Name \| `([^`]+)`", text).group(1).replace("\\|", "|")
    bio = re.search(r"Bio \(4 lines\):\n\n```text\n(.+?)\n```", text, re.S).group(1).strip()
    order = re.findall(r"^\| (\d+) \| ([RYL]\d+) ([^|]+?) \|", text, re.M)
    pins = re.search(r"\*\*Pin 3 to the top of the grid:\*\* ([^.]+)\.", text).group(1)
    pins = re.findall(r"[RYL]\d+", pins)
    replies = re.findall(r"^\| (.+?) \| (.+?) \|$", text.split("## Replying to comments", 1)[1].split("## Story ideas")[0], re.M)
    replies = [(a, b) for a, b in replies if a not in ("Comment", "---")]
    stories = text.split("## Story ideas", 1)[1].split("## What to watch")[0].split("\n", 1)[1].strip()
    return dict(handle=handle, name=name, bio=bio, order=[(int(n), vid, t.strip()) for n, vid, t in order],
                pins=pins, replies=replies, stories=stories)


def caption_for(plan, vid):
    sec = open(os.path.join(ROOT, PREFIX[vid[0]], "content-plan.md"), encoding="utf-8").read()
    m = re.search(rf"### {vid}: .+?\*\*Post caption:\*\* (.+?)\n", sec, re.S)
    return m.group(1).strip()


PREFIX = {"R": "rosa", "Y": "ray", "L": "lou"}


def cover(src, out, t=1.0):
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(t), "-i", src, "-frames:v", "1", "-q:v", "2", out], check=True)


def instructions(c, kit, posts):
    n = len(posts)
    pins = kit["pins"]
    pin_order = list(reversed(pins))  # the last one pinned shows first
    L = []
    L.append(f"# Instructions for ChatGPT: launch the Instagram account @{kit['handle']}")
    L.append("")
    L.append("You are my Instagram assistant. I run an AI influencer account and I want you to post its first "
             f"{n} Reels and manage the launch. You have the {n} video files (`01-...mp4` to `{n:02d}-...mp4`) and a zip "
             "with this file, `posts.csv`, `captions/`, `covers/`, `profile/` and `later/`. Follow these steps in order, "
             "tell me when each step is done, and ask me before doing anything not listed here.")
    L.append("")
    L.append("## 0. Ground rules (always)")
    L.append("")
    L.append(f"- The account is an openly AI-generated character. Never hide it and never claim {kit['name'].split('|')[0].strip()} is a real person.")
    L.append("- Never ask me for my password in the chat. When a login is needed, hand the browser to me and I log in myself.")
    L.append("- Do not edit the videos: no filters, no trimming, no stickers and no music. The voice is the audio.")
    L.append("- Paste each caption exactly as written in its caption file. The hashtags are already included (3 to 5 is the right number).")
    L.append("- No location tags, no tagging people, no product tags.")
    L.append("- No medical advice in captions or replies. No buying followers, no follow/unfollow tricks, no giveaways.")
    L.append("- Go slowly on a new account: no mass liking or following. If Instagram shows a warning or a limit, stop and tell me.")
    L.append("")
    L.append("## 1. Check the profile (before the first post)")
    L.append("")
    L.append(f"Open Instagram as @{kit['handle']} and make sure:")
    L.append("")
    L.append("- **Account type:** Professional account > Creator > category \"Digital creator\".")
    L.append(f"- **Name:** `{kit['name']}`")
    L.append("- **Profile picture:** `profile/profile-picture.jpg` from this folder.")
    L.append("- **Bio** (4 lines, exactly):")
    L.append("")
    L.append("```text")
    L.append(kit["bio"])
    L.append("```")
    L.append("")
    L.append("- **AI label on the profile:** Edit profile > turn ON the \"AI-generated\" profile label (if Instagram offers it).")
    L.append("- **Link:** leave EMPTY for now. The store link is added on day 5 (see step 5).")
    L.append("")
    L.append(f"## 2. Post the {n} Reels (day 4)")
    L.append("")
    L.append(f"- **Order:** post them by the number at the start of the file name, 01 first and {n:02d} last. Instagram shows the newest post first, so the strongest video ({posts[-1]['vid']}) ends up at the top of the grid.")
    L.append("- **Timing:** one every 45–60 minutes, all on the same day. In the Instagram app you can schedule them in one sitting: last screen > Advanced settings / More options > Schedule. On a computer, post one by one.")
    L.append("")
    L.append("**For every Reel:**")
    L.append("")
    L.append("1. New post > Reel > upload the video file for that number (table below).")
    L.append("2. Cover: upload its cover image from `covers/` (or pick the first frame, where the white title text shows).")
    L.append("3. Caption: paste the full text of its caption file from `captions/` (also shown in the table).")
    L.append("4. **Turn ON the AI label:** Advanced settings > \"Add AI label\" (Instagram may call it \"AI info\"). Required for every post.")
    L.append("5. Music: none. Location: none. Tag people: none.")
    L.append("6. \"Also share to feed\": ON. Comments: ON.")
    L.append("7. Share (or schedule), then tick the post off in `posts.csv`.")
    L.append("")
    L.append("| # | Video file | Cover | Caption (paste exactly) |")
    L.append("|---|---|---|---|")
    for p in posts:
        L.append(f"| {p['n']} | `{p['video']}` | `{p['cover_file']}` | {p['caption']} |")
    L.append("")
    L.append("## 3. Pin the best 3 (after all posts are live)")
    L.append("")
    L.append("On each post: ··· > Pin to your profile. The post pinned last shows first, so pin in this order:")
    L.append("")
    for i, vid in enumerate(pin_order, 1):
        p = next(p for p in posts if p["vid"] == vid)
        L.append(f"{i}. {vid} (post #{p['n']}, `{p['video']}`)")
    L.append("")
    L.append(f"Result on the grid, from the left: {', '.join(pins)}.")
    L.append("")
    L.append("## 4. Stories and comments (every day)")
    L.append("")
    L.append("**Stories (2 to 3 a day):**")
    L.append("")
    L.append(kit["stories"])
    L.append("")
    L.append(f"**Comments:** reply to as many as you can in the first hour after each post, short and warm, in {kit['name'].split('|')[0].strip()}'s voice. Use these answers:")
    L.append("")
    L.append("| Comment | Reply |")
    L.append("|---|---|")
    for a, b in kit["replies"]:
        L.append(f"| {a} | {b} |")
    L.append("")
    L.append("Never argue. Delete abusive comments. If someone seems in danger or asks something medical or serious, reply only with the line above and tell me.")
    L.append("")
    L.append("## 5. The store link (day 5, when I send it)")
    L.append("")
    L.append(f"I sell a digital product: **{PRODUCT[c]}** ($12, regular $15.99) on Stan Store. When I send you the link (it looks like `https://stan.store/...`):")
    L.append("")
    L.append(f"- **Put it in the bio, and only there.** Edit profile > Links > Add external link > paste the URL > title `{PRODUCT_SHORT[c]}`. The bio's last line (\"{kit['bio'].splitlines()[-1]}\") points at it.")
    L.append("- **Do NOT add the link to the videos or type the URL into captions.** Links in Reels and captions aren't clickable and can lower reach. The videos are finished as they are.")
    L.append("- In captions and comment replies, say **\"it's in my bio\"** instead.")
    L.append(f"- **Story with a link sticker, once a day:** new story > sticker > Link > paste the URL > sticker text `{PRODUCT_SHORT[c]}`. Save the first one to a highlight called \"Reset\".")
    later = [p for p in posts if p.get("later")]
    if later:
        L.append(f"- For the first link story, use `later/{later[0]['later']}`: the full version of {later[0]['vid']}, which ends with the line about the link. Add the link sticker on top of it.")
    L.append("- When someone comments or DMs asking for the book, reply: \"It's in my bio, amore 🍋\" (never paste the URL in a comment).")
    L.append("- From then on I will send you 5 more Reels (batch 2), one a day. Their captions already end with the \"in my bio\" line.")
    L.append("")
    L.append("## 6. Report back (day 5 morning)")
    L.append("")
    L.append("For each of the 10 Reels, open Insights and send me a table: views, likes, comments, **saves**, **shares**, and follows from the post. Saves and shares matter most; tell me which video clearly won.")
    L.append("")
    return "\n".join(L) + "\n"


def readme_he(kit, n):
    return f"""תיקיית העלאה ל-@{kit['handle']}
====================================

מה יש כאן:
- {n} הסרטונים (videos/, ונשלחו אליך גם כקבצים נפרדים). המספר בתחילת השם הוא סדר ההעלאה, 01 עד {n:02d}.
- captions: הכיתוב עם ההאשטגים לכל סרטון, באותו מספר.
- covers: תמונת קאבר לכל סרטון, באותו מספר.
- GPT-INSTRUCTIONS.md: ההוראות המלאות ל-ChatGPT. שם כתוב לו מה לעשות, לפי הסדר.
- posts.csv: טבלה של כל הפוסטים (סדר, קובץ, כיתוב, הצמדה).
- profile: תמונת הפרופיל והביו.
- later: סרטון לשימוש מיום 5, אחרי שהחנות פתוחה.

איך עובדים עם GPT:
1. פותחים צ'אט חדש ב-ChatGPT. אם יש לך Agent mode, מפעילים אותו.
2. מעלים לצ'אט את 10 הסרטונים ואת קובץ ה-ZIP הקטן (ההוראות, הכיתובים והקאברים).
3. כותבים לו: "Read GPT-INSTRUCTIONS.md in the zip and do it step by step".
4. כשהוא צריך להתחבר לאינסטגרם, הוא אמור להעביר לך את הדפדפן כדי שתתחבר בעצמך. לא נותנים לו סיסמה בצ'אט.
5. אם GPT לא מצליח להעלות קבצים לאינסטגרם בעצמו, מעלים מהטלפון לפי אותן הוראות: לכל מספר יש סרטון, כיתוב להעתקה וקאבר.

הלינק לחנות:
- שמים אותו רק בביו של הפרופיל, ביום 5, אחרי שפתחת את Stan Store.
- לא מוסיפים אותו לסרטונים ולא כותבים אותו בכיתובים.
- כשיש לך את הלינק, שלח אותו ל-GPT. ההוראות מסבירות לו בדיוק מה לעשות איתו (ביו, סטורי עם מדבקת לינק, הייליט).
"""


def build(c):
    kit = launch_kit(c)
    plan = parse_plan(c)
    fdir = os.path.join(ROOT, c, "final")
    pkg = os.path.join(fdir, "instagram-package")
    if os.path.isdir(pkg):
        shutil.rmtree(pkg)
    os.makedirs(os.path.join(pkg, "profile"))
    tracked = os.path.join(ROOT, c, "instagram")
    os.makedirs(os.path.join(tracked, "captions"), exist_ok=True)
    posts = []
    for n, vid, title in kit["order"]:
        name = DAY4_VARIANT.get(vid, vid)
        src = os.path.join(fdir, f"{name}.mp4")
        if not os.path.exists(src):
            sys.exit(f"missing {src}: run finish_video.py first")
        video = f"{n:02d}-{c}-{vid}.mp4"
        for sub in ("videos", "captions", "covers"):
            os.makedirs(os.path.join(pkg, sub), exist_ok=True)
        shutil.copy(src, os.path.join(pkg, "videos", video))
        cover(src, os.path.join(pkg, "covers", f"{n:02d}-{vid}.jpg"))
        cap = caption_for(plan, vid)
        for path in (os.path.join(pkg, "captions", f"{n:02d}-{vid}.txt"), os.path.join(tracked, "captions", f"{n:02d}-{vid}.txt")):
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(cap + "\n")
        p = dict(n=n, vid=vid, video=video, caption_file=f"captions/{n:02d}-{vid}.txt", cover_file=f"covers/{n:02d}-{vid}.jpg",
                 title=plan[vid]["title"], caption=cap, pin=vid in kit["pins"])
        if vid in LATER and os.path.exists(os.path.join(fdir, f"{vid}.mp4")) and name != vid:
            os.makedirs(os.path.join(pkg, "later"), exist_ok=True)
            p["later"] = f"{vid}-full.mp4"
            shutil.copy(os.path.join(fdir, f"{vid}.mp4"), os.path.join(pkg, "later", p["later"]))
            with open(os.path.join(pkg, "later", "README.txt"), "a", encoding="utf-8") as fh:
                fh.write(LATER[vid] + "\n")
        posts.append(p)
    pic = os.path.join(ROOT, c, "profile-picture.jpg")
    shutil.copy(pic, os.path.join(pkg, "profile", "profile-picture.jpg"))
    with open(os.path.join(pkg, "profile", "bio.txt"), "w", encoding="utf-8") as fh:
        fh.write(f"Name: {kit['name']}\nUsername: @{kit['handle']}\n\nBio:\n{kit['bio']}\n")
    ins = instructions(c, kit, posts)
    for path in (os.path.join(pkg, "GPT-INSTRUCTIONS.md"), os.path.join(tracked, "GPT-INSTRUCTIONS.md")):
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(ins)
    for path in (os.path.join(pkg, "posts.csv"), os.path.join(tracked, "posts.csv")):
        with open(path, "w", encoding="utf-8", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(["order", "video_file", "caption_file", "cover_file", "title", "caption", "pin", "posted"])
            for p in posts:
                w.writerow([p["n"], p["video"], p["caption_file"], p["cover_file"], p["title"], p["caption"],
                            "yes" if p["pin"] else "", ""])
    with open(os.path.join(pkg, "READ-ME-FIRST-HE.txt"), "w", encoding="utf-8") as fh:
        fh.write(readme_he(kit, len(posts)))
    small = os.path.join(fdir, f"{kit['handle']}-instructions-captions-covers.zip")
    with zipfile.ZipFile(small, "w", zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(pkg):
            for f in files:
                if f.endswith(".mp4"):
                    continue
                full = os.path.join(root, f)
                z.write(full, os.path.relpath(full, fdir))
    print(f"wrote {pkg} (videos/, captions/, covers/, profile/, later/) and {small} "
          f"({os.path.getsize(small) / 1e6:.1f} MB, everything except the videos); texts also in {tracked}")


if __name__ == "__main__":
    for ch in sys.argv[1:] or ["rosa"]:
        build(ch)

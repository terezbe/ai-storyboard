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
import json
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

DAY4_VARIANT = {"R4": "R4-day4"}   # finals cut for day 4, before the store link exists
LATER = {"R4": "R4 full version: ends with 'Giulia put it in the link.' Use it from day 5, as a story with the link sticker."}

# Per-character selling details for the GPT instructions. Product facts come from <c>/product/sales-kit.md.
CHAR = {
    "rosa": dict(
        product="The 30-Day Morning Reset", link_title="My 30-Day Morning Reset", highlight="Reset",
        what="a 54-page printable PDF: 30 small morning habits, one a day, each with a short story, a tick-box and a line "
             "to write, plus a Day 1 and Day 30 self-score and five bonuses",
        caption_line="My 30-Day Morning Reset is in my bio 🍋", batch2="R11 to R15",
        no_advice="No medical advice in captions or replies.",
        serious="If someone seems in danger or asks something medical or serious, reply only with the line above and tell me.",
        no_promises="younger, healthier, cured, or any health result",
        dm=[("\"How do I get it?\" / \"Where's the book?\"", "It's in my bio, amore 🍋 Tap it, pay, and the book comes to your email straight away."),
            ("\"I paid but didn't get it\"", "Scusa, amore! Look in your spam folder first. Not there? Send me the email you used and Giulia fixes it today."),
            ("\"Can I get a discount?\"", "It's already the launch price, amore. That's as low as it goes."),
            ("\"Is it worth it?\"", "Thirty small mornings, one page a day. If it's not for you, write to me."),
            ("\"Is the book AI too?\"", "I'm an AI nonna, it says so on my page. The habits are old and real, and the book is a real PDF you keep."),
            ("\"I have a health condition, is it safe?\"", "It's small daily habits, not medicine, amore. Ask your doctor before you change anything."),
            ("\"I want a refund\"", "Of course, amore. Send me the email you used and it's done.")]),
    "ray": dict(
        product="The Quiet Money Workbook", link_title="The Quiet Money Workbook", highlight="Workbook",
        what="a 48-page printable PDF workbook: one guided evening to find where the money goes (the Leak Hunt), Ray's "
             "seven rules, and twelve weeks of fifteen-minute Sunday pages. General information, not financial advice",
        caption_line="The Quiet Money Workbook is in my bio 📓", batch2="Y11 to Y15",
        no_advice="No financial advice in captions or replies: Ray never says what to invest in and never recommends a bank, "
                  "app, card, loan or any money product.",
        serious="If someone seems in real money trouble (bailiffs, can't pay rent, gambling) or in danger, reply only with "
                "the debt line above (free debt charity) and tell me.",
        no_promises="savings, a debt-free date, or any money result",
        dm=[("\"How do I get it?\" / \"Where's the workbook?\"", "It's in my bio, love 📓 Tap it, pay, and it lands in your email straight after."),
            ("\"I paid but didn't get it\"", "Sorry about that, love. Check your spam first. Not there? Send me the email you used and I'll sort it today."),
            ("\"Can I get a discount?\"", "It's already on launch price, love. That's as low as it goes."),
            ("\"Is it worth it?\"", "It's a pencil and one evening with a brew. If it's not for you, message me."),
            ("\"Is the workbook AI too?\"", "Aye, I'm an AI grandad, it's on me page. The habits are real, and the workbook's a real PDF you keep."),
            ("\"Will it tell me what to invest in?\"", "No, love. It shows you where your money goes. Investing's for a proper adviser."),
            ("\"I'm in serious debt\"", "Then your first call is a free debt charity, love, not a book. The workbook lists where to find free help too."),
            ("\"I want a refund\"", "No bother, love. Send me the email you used and it's done.")]),
    "lou": dict(
        product="Don't Text. Call.", link_title="What to say, word for word", highlight="What to say",
        what="a 40-page PDF swipe file: 25 dating moments, each with the exact words to say on the phone, the one text "
             "to send, the line not to say, and what to do if they say no. General advice, not therapy",
        caption_line="The exact words for 25 moments like this are in my bio 📞", batch2="L11 to L15",
        no_advice="No therapy, medical or legal advice in captions or replies.",
        serious="If someone mentions abuse, fear or danger, reply only with the safety line above and tell me.",
        no_promises="that someone will call back, come back, fall in love or say yes",
        dm=[("\"How do I get it?\" / \"Where are the words?\"", "It's in my bio, sweetheart 📞 Tap it, pay, and it's in your email right after."),
            ("\"I paid but didn't get it\"", "Sorry, kid! Check your spam. Not there? Send me the email you used and Nicky sorts it today."),
            ("\"Can I get a discount?\"", "It's already the launch price, kid. Cheaper than the dinner you'd text your way out of."),
            ("\"Is it worth it?\"", "Twenty-five moments, the exact words for each. If it's not for you, tell me."),
            ("\"Is the file AI too?\"", "Yeah, I'm an AI grandpa, it says so on my page. The advice is old-school real, and the file is a real PDF you keep."),
            ("\"Will it make him/her come back?\"", "No script makes anybody want you, sweetheart. It gets the words out so you get a real answer."),
            ("\"I want a refund\"", "Sure, kid. Send me the email you used and it's done.")]),
}


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
    ch = CHAR[c]
    who = kit['name'].split('|')[0].strip()
    n = len(posts)
    pins = kit["pins"]
    pin_order = list(reversed(pins))  # the last one pinned shows first
    L = []
    L.append(f"# Instructions for ChatGPT: launch the Instagram account @{kit['handle']}")
    L.append("")
    folders = "`captions/`, `covers/`, `profile/` and `later/`" if any(p.get("later") for p in posts) else "`captions/`, `covers/` and `profile/`"
    L.append("You are my Instagram assistant. I run an AI influencer account and I want you to post its first "
             f"{n} Reels, manage the launch and help me sell. You have the {n} video files (`01-...mp4` to `{n:02d}-...mp4`) and a zip "
             f"with this file, `posts.csv`, {folders}. Follow these steps in order, "
             "tell me when each step is done, and ask me before doing anything not listed here.")
    if any(p.get("url") for p in posts):
        L.append("")
        L.append("**Every video is also online.** If you don't have the attached files (for example in Agent mode), download "
                 "each video from its link in the table in step 2. The same links are in `VIDEO-LINKS.txt`. Post the "
                 "downloaded file as it is.")
    L.append("")
    L.append("## 0. Ground rules (always)")
    L.append("")
    L.append(f"- The account is an openly AI-generated character. Never hide it and never claim {kit['name'].split('|')[0].strip()} is a real person.")
    L.append("- Never ask me for my password in the chat. When a login is needed, hand the browser to me and I log in myself.")
    L.append("- Do not edit the videos: no filters, no trimming, no stickers and no music. The voice is the audio.")
    L.append("- Paste each caption exactly as written in its caption file. The hashtags are already included (3 to 5 is the right number).")
    L.append("- No location tags, no tagging people, no product tags.")
    L.append(f"- {ch['no_advice']} No buying followers, no follow/unfollow tricks, no giveaways.")
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
    L.append("1. New post > Reel > upload the video file for that number (table below; no file? download it from its link first).")
    L.append("2. Cover: upload its cover image from `covers/` (or pick the first frame, where the white title text shows).")
    L.append("3. Caption: paste the full text of its caption file from `captions/` (also shown in the table).")
    L.append("4. **Turn ON the AI label:** Advanced settings > \"Add AI label\" (Instagram may call it \"AI info\"). Required for every post.")
    L.append("5. Music: none. Location: none. Tag people: none.")
    L.append("6. \"Also share to feed\": ON. Comments: ON.")
    L.append("7. Share (or schedule), then tick the post off in `posts.csv`.")
    L.append("")
    if any(p.get("url") for p in posts):
        L.append("| # | Video file | Download link | Cover | Caption (paste exactly) |")
        L.append("|---|---|---|---|---|")
        for p in posts:
            L.append(f"| {p['n']} | `{p['video']}` | {p.get('url') or '-'} | `{p['cover_file']}` | {p['caption']} |")
    else:
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
    L.append(f"Never argue. Delete abusive comments. {ch['serious']}")
    L.append("")
    L.append("## 5. The store link (day 5, when I send it)")
    L.append("")
    L.append(f"I sell a digital product: **{ch['product']}** ($12, regular $15.99) in a link-in-bio store (Stan Store or Payhip). When I send you the link:")
    L.append("")
    L.append(f"- **Put it in the bio, and only there.** Edit profile > Links > Add external link > paste the URL > title `{ch['link_title']}`. The bio's last line (\"{kit['bio'].splitlines()[-1]}\") points at it.")
    L.append("- **Do NOT add the link to the videos or type the URL into captions.** Links in Reels and captions aren't clickable and can lower reach. The videos are finished as they are.")
    L.append("- In captions and comment replies, say **\"it's in my bio\"** instead.")
    L.append(f"- **Story with a link sticker, once a day:** new story > sticker > Link > paste the URL > sticker text `{ch['link_title']}`. Save the first one to a highlight called \"{ch['highlight']}\".")
    later = [p for p in posts if p.get("later")]
    if later:
        link = f" (download: {later[0]['later_url']})" if later[0].get("later_url") else ""
        L.append(f"- For the first link story, use `later/{later[0]['later']}`{link}: the full version of {later[0]['vid']}, which ends with the line about the link. Add the link sticker on top of it.")
    L.append(f"- When someone comments asking for it, reply: \"{ch['dm'][0][1].split(' Tap')[0]}\" (never paste the URL in a comment).")
    L.append("")
    L.append("## 6. Sales strategy (how this account makes money)")
    L.append("")
    L.append(f"**The product:** \"{ch['product']}\": {ch['what']}. $12 (regular $15.99), delivered by email right after payment. "
             f"Describe it only with these facts. Never promise results ({ch['no_promises']}).")
    L.append("")
    L.append("**The plan:**")
    L.append("")
    L.append("| When | What happens | Your job |")
    L.append("|---|---|---|")
    L.append(f"| Day 4 | Batch 1: the {n} Reels in this folder. No selling at all: they build trust and followers. | Steps 1 to 4 |")
    L.append("| Day 5 | I read your report, choose which account gets the store first, and open the store. | Step 7, then step 5 when I send the link |")
    L.append(f"| Days 6 to 10 | Batch 2: 5 new Reels ({ch['batch2']}), one a day, sent by me with their own short instructions. A caption that mentions the product ends with \"{ch['caption_line']}\". | Post them like step 2. Daily link story. |")
    L.append("| Day 11 on | One Reel a day, new scripts from me. | The one-in-three rule below |")
    L.append("")
    L.append("**Rules for selling:**")
    L.append("")
    L.append("- **One in three:** after batch 2, at most one post in three mentions the product. The other two are pure value, with no product line. That is what keeps people following.")
    L.append("- **The link lives in two places only:** the bio and the daily link-sticker story (saved in the highlight). Never in comments, captions or videos.")
    L.append(f"- **Answer every buyer question within a day,** in {who}'s voice, with the replies below.")
    L.append("- **No pressure tricks:** no fake scarcity (\"last copies\", \"today only\"), no countdowns, no fake reviews or testimonials.")
    L.append("- **No extra discounts:** $12 is already the launch price. No coupon codes unless I give you one.")
    L.append("- **Never message people first.** Only answer people who wrote to us. No paid ads or boosting unless I say so.")
    L.append("")
    L.append("**Replies about the product (comments and DMs):**")
    L.append("")
    L.append("| They write | You reply |")
    L.append("|---|---|")
    for a, b in ch["dm"]:
        L.append(f"| {a} | {b} |")
    L.append("")
    L.append("**Refunds and delivery problems:** reply with the line above, then send me the email they gave you, so I fix it the same day in the store. "
             "Never argue and never ask why. A refund is $12; a payment dispute costs much more.")
    L.append("")
    L.append("**If nothing sells in the first week,** check these in order and tell me what you found:")
    L.append("")
    L.append("1. The bio link opens the store, and the price shows $12 with $15.99 crossed out.")
    L.append(f"2. The batch-2 captions that mention the product end with \"{ch['caption_line']}\", and the bio link works when they go live.")
    L.append(f"3. The link story is posted every day and saved in the \"{ch['highlight']}\" highlight.")
    L.append("4. Which Reels bring the most profile visits (Insights > the Reel > Profile activity). Tell me, and I'll write the next product video in that format.")
    L.append("5. Keep posting. Don't delete videos and don't change the bio or the link without asking me. Results are judged after a full week, not after two days.")
    L.append("")
    L.append("## 7. Report back")
    L.append("")
    L.append(f"**Day 5 morning:** for each of the {n} Reels, open Insights and send me a table: views, likes, comments, **saves**, **shares**, and follows from the post. Saves and shares matter most; tell me which video clearly won.")
    L.append("")
    L.append("**Every Monday after that:** followers, total views, the top 3 Reels by saves plus shares, profile visits, "
             "external link taps (Insights > Profile activity), link-sticker taps on stories, and how many people asked about the product. "
             "I check the sales myself in the store.")
    L.append("")
    return "\n".join(L) + "\n"


def readme_he(c, kit, n, has_later):
    ch = CHAR[c]
    later = "- later: סרטון לשימוש מיום 5, אחרי שהחנות פתוחה.\n" if has_later else ""
    return f"""תיקיית העלאה ל-@{kit['handle']}
====================================

מה יש כאן:
- {n} הסרטונים (videos/, ונשלחו אליך גם כקבצים נפרדים). המספר בתחילת השם הוא סדר ההעלאה, 01 עד {n:02d}.
- captions: הכיתוב עם ההאשטגים לכל סרטון, באותו מספר.
- covers: תמונת קאבר לכל סרטון, באותו מספר.
- GPT-INSTRUCTIONS.md: ההוראות המלאות ל-ChatGPT, לפי הסדר: פרופיל, העלאה, הצמדה, סטוריז ותגובות, הלינק לחנות,
  אסטרטגיית המכירות (סעיף 6) ודוחות (סעיף 7).
- posts.csv: טבלה של כל הפוסטים (סדר, קובץ, קישור, כיתוב, הצמדה).
- VIDEO-LINKS.txt: קישור הורדה לכל סרטון. אם GPT לא מקבל את הקבצים, הוא מוריד אותם מהקישורים.
- profile: תמונת הפרופיל והביו.
{later}
איך עובדים עם GPT:
1. פותחים צ'אט חדש ב-ChatGPT. אם יש לך Agent mode, מפעילים אותו.
2. מעלים לצ'אט את {n} הסרטונים ואת קובץ ה-ZIP הקטן (ההוראות, הכיתובים והקאברים).
3. כותבים לו: "Read GPT-INSTRUCTIONS.md in the zip and do it step by step".
4. כשהוא צריך להתחבר לאינסטגרם, הוא אמור להעביר לך את הדפדפן כדי שתתחבר בעצמך. לא נותנים לו סיסמה בצ'אט.
5. אם GPT לא מצליח להעלות קבצים לאינסטגרם בעצמו, מעלים מהטלפון לפי אותן הוראות: לכל מספר יש סרטון, כיתוב להעתקה וקאבר.

הלינק לחנות ({ch['product']}, $12 במקום $15.99):
- שמים אותו רק בביו של הפרופיל, ביום 5, אחרי שפתחת את החנות (Stan Store לדמות המנצחת, או Payhip). ההסבר המלא ב-SELLING-GUIDE.md.
- לא מוסיפים אותו לסרטונים ולא כותבים אותו בכיתובים.
- כשיש לך את הלינק, שלח אותו ל-GPT. ההוראות מסבירות לו בדיוק מה לעשות איתו: ביו, סטורי יומי עם מדבקת לינק, והייליט בשם "{ch['highlight']}".

מה נשאר עליך:
- ביום 5: לקרוא את הדוח של GPT, לבחור דמות מנצחת ולפתוח את החנות.
- לשלוח ל-GPT את 5 הסרטונים של הגל השני ({ch['batch2'].replace(' to ', '–')}) כשהם מוכנים, אחד ליום.
- החזרים ובעיות משלוח: GPT ישלח לך את המייל של הקונה, ואתה מטפל בזה באותו יום בחנות.
- המכירות עצמן: בודקים בחנות. GPT שולח לך כל יום שני דוח של אינסטגרם.
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
    links_path = os.path.join(tracked, "video-links.json")   # ID -> public URL of the final video (uploaded to Kolbo)
    links = json.load(open(links_path)) if os.path.exists(links_path) else {}
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
                 title=plan[vid]["title"], caption=cap, pin=vid in kit["pins"], url=links.get(vid))
        if vid in LATER and os.path.exists(os.path.join(fdir, f"{vid}.mp4")) and name != vid:
            os.makedirs(os.path.join(pkg, "later"), exist_ok=True)
            p["later"] = f"{vid}-full.mp4"
            p["later_url"] = links.get(f"{vid}-full")
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
            w.writerow(["order", "video_file", "video_url", "caption_file", "cover_file", "title", "caption", "pin", "posted"])
            for p in posts:
                w.writerow([p["n"], p["video"], p.get("url") or "", p["caption_file"], p["cover_file"], p["title"], p["caption"],
                            "yes" if p["pin"] else "", ""])
    if links:
        lines = [f"{p['n']:02d}  {p['video']}  {p.get('url') or '(no link)'}" for p in posts]
        lines += [f"later  {p['later']}  {p['later_url']}" for p in posts if p.get("later_url")]
        for path in (os.path.join(pkg, "VIDEO-LINKS.txt"), os.path.join(tracked, "VIDEO-LINKS.txt")):
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(f"@{kit['handle']}: download links for the videos, in posting order (01 first)\n\n" + "\n".join(lines) + "\n")
    with open(os.path.join(pkg, "READ-ME-FIRST-HE.txt"), "w", encoding="utf-8") as fh:
        fh.write(readme_he(c, kit, len(posts), any(p.get("later") for p in posts)))
    small = os.path.join(fdir, f"{kit['handle']}-instructions-captions-covers.zip")
    with zipfile.ZipFile(small, "w", zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(pkg):
            for f in files:
                if f.endswith(".mp4"):
                    continue
                full = os.path.join(root, f)
                z.write(full, os.path.relpath(full, fdir))
    subs = ", ".join(f"{d}/" for d in ("videos", "captions", "covers", "profile", "later") if os.path.isdir(os.path.join(pkg, d)))
    print(f"wrote {pkg} ({subs}) and {small} "
          f"({os.path.getsize(small) / 1e6:.1f} MB, everything except the videos); texts also in {tracked}")


# ---------------------------------------------------------------- batch 2
# One Reel a day from day 6. "tests" is the single thing each video changes, so the results can be read.
BATCHES = {
    2: {
        "rosa": [
            (6, "R11", "The winner's shape (the sea plus a clear decision) on a calm day: does the decision carry it?"),
            (7, "R13", "Part 3 of the second-best series, with the book in Rosa's own words (Day 6 and Day 1 of the book, her notebook, 'in the bio'); product caption"),
            (8, "R15", "A personal story that opens with the surprise, at the sea"),
            (9, "R12", "The winner's shape again, with dramatic weather (fog), a new rule and one soft line about the book at the end; product caption"),
            (10, "R14", "Hook test of R7 (post 07): same story and length; only the first line and the title text change"),
        ],
    },
    3: {
        "rosa": [
            (11, "R16", "Store-opening video: Day 1 of the book given away on camera (the window before the telephone), then 'twenty-nine more in my bio'; product caption"),
            (12, "R17", "The 'never' series, part 4, where every item is a page of the book (Day 15, Day 2, the recipe in the back), with one share line; product caption"),
            (13, "R18", "The winner's shape (the sea plus a statement) carrying the book's cover line, the 'lucky genes' objection and the pitch: no sea needed; product caption"),
        ],
    },
}

# the earlier videos each batch is compared with in the 24 h / 72 h table
COMPARE = {
    2: "R10 for R11 and R12, R1 and R9 for R13, R7 for R14",
    3: "R4 and R6 for R16; R1, R9 and R13 for R17; R10 and R2 for R18",
}

PIN_LINES = {
    "R16": "Day one is free, in the video. The other twenty-nine are in my bio, amore 🍋",
    "R17": "Thirty of these, one page each. In my bio 🍋",
    "R18": "No sea needed. The thirty mornings are in my bio 🍋",
}


def batch_instructions(c, kit, posts, n):
    ch = CHAR[c]
    L = [f"# Batch {n} for @{kit['handle']}: {len(posts)} new Reels, one a day", ""]
    L.append("Same account, same rules as `GPT-INSTRUCTIONS.md` from batch 1: AI label on every post, no music, no location, "
             "captions pasted exactly, the store link only in the bio and the link story. "
             + ("This file replaces the batch-2 line in that plan." if n == 2 else f"It comes after `GPT-INSTRUCTIONS-BATCH{n - 1}.md`."))
    L.append("")
    if n == 3:
        L.append("## 0. This batch sells the book")
        L.append("")
        L.append(f"These Reels are about the product itself, so the store link must be live in the bio before the first one goes up. "
                 f"{posts[0]['vid']} is the store-opening video: if the link goes live before its day, post it that day (even in the "
                 f"middle of batch 2) and push everything else by one day; tell me what you moved.")
        L.append("")
        L.append("For each of them:")
        L.append("")
        pins = "; ".join(f"{v}: \"{PIN_LINES[v]}\"" for v in (p["vid"] for p in posts) if v in PIN_LINES)
        L.append(f"- Right after posting, pin one comment from the account, in her voice. {pins}.")
        L.append("- Reply to every \"where do I get it\" / \"how much\" with the replies table in `GPT-INSTRUCTIONS.md` (the link is in my bio; "
                 "it's on launch price). Never paste the link in a comment or a DM.")
        L.append(f"- Story the same day: the Reel reshared with the link sticker on it, saved to the \"{ch['highlight']}\" highlight.")
        L.append("- In the 24 h and 72 h report, add that day's number of sales if the owner gives it to you. You can't see the store, "
                 "so ask for the number rather than guess it.")
        L.append("")
    L.append("Each video tests one thing, chosen from the batch-1 numbers. Don't change a caption, a cover or the order: "
             "otherwise we can't tell what worked.")
    L.append("")
    L.append("## 1. Post one a day")
    L.append("")
    L.append("Post at about the same time each day: the hour batch 1 got the most views (Insights > Total followers > "
             "Most active times, once it shows). Every video is attached, and also online at its link.")
    L.append("")
    L.append("| Day | Video file | Download link | Cover | Caption (paste exactly) |")
    L.append("|---|---|---|---|---|")
    for p in posts:
        L.append(f"| {p['n']} | `{p['video']}` | {p.get('url') or '-'} | `{p['cover_file']}` | {p['caption']} |")
    L.append("")
    prod = [p for p in posts if ch["caption_line"] in p["caption"]]
    if prod:
        names = ", ".join(f"{p['vid']} (day {p['n']})" for p in prod)
        verb = "ends" if len(prod) == 1 else "end"
        L.append(f"**Product caption:** {names} {verb} with \"{ch['caption_line']}\". Post it only when the store link "
                 "is already in the bio. If it isn't there yet, swap it with the next day's video and tell me.")
        L.append("")
    L.append("## 2. What each video tests")
    L.append("")
    L.append("| Day | Video | What it tests |")
    L.append("|---|---|---|")
    for p in posts:
        L.append(f"| {p['n']} | {p['vid']}: {p['title']} | {p['tests']} |")
    L.append("")
    L.append("## 3. Keep doing every day")
    L.append("")
    L.append("- Repost the new Reel to your story, reply to comments in the first hour (replies table in `GPT-INSTRUCTIONS.md`).")
    L.append(f"- Once the store is live: one story a day with the link sticker, saved to the \"{ch['highlight']}\" highlight.")
    L.append(f"- Keep the batch-1 pins. If a batch-{n} Reel clearly beats the pinned ones on saves plus shares after 72 hours, tell me before changing the pins.")
    L.append("")
    L.append("## 4. Measure it the same way for every video")
    L.append("")
    L.append("For each new Reel, open Insights **24 hours** after posting and again at **72 hours**, and write down:")
    L.append("")
    L.append("- views and accounts reached (viewers);")
    L.append("- average watch time, and the retention graph's drop point if Instagram shows it;")
    L.append("- likes, comments, saves, shares and follows from the post.")
    L.append("")
    L.append("Then work out **saves per 100 accounts reached** and **shares per 100 accounts reached**. If reach is missing, "
             "use views and say so; never mix the two in one table.")
    L.append("")
    L.append("Send me one table per check, like this:")
    L.append("")
    L.append("| Video | Age (h) | Views | Reached | Avg watch (s) | Likes | Comments | Saves | Shares | Follows | Saves/100 | Shares/100 |")
    L.append("|---|---|---|---|---|---|---|---|---|---|---|---|")
    L.append("")
    L.append(f"Add the same row for the earlier videos they are compared with ({COMPARE[n]}), from their insights now, with their age.")
    L.append("")
    L.append("**How we decide:** a format wins only if it repeats across videos and brings saves, shares or follows, not "
             "views alone. Don't call a video a failure before 72 hours. Nothing here tells us which Reel made a sale; "
             "I check sales in the store.")
    L.append("")
    return "\n".join(L) + "\n"


def readme_he_batch(c, kit, posts, n):
    ch = CHAR[c]
    rows = "\n".join(f"- יום {p['n']}: {p['video']} ({p['vid']})" for p in posts)
    prod = [p for p in posts if ch["caption_line"] in p["caption"]]
    if len(prod) == len(posts):
        prod_line = ("בכל הכיתובים של הגל הזה יש את שורת המוצר: אלה סרטוני מכירה. GPT מעלה אותם רק אחרי שהלינק לחנות כבר בביו. "
                     f"{posts[0]['vid']} הוא סרטון פתיחת החנות: אם הלינק עולה מוקדם יותר, מעלים אותו באותו יום ודוחים את השאר.")
    elif len(prod) == 1:
        prod_line = (f"רק בכיתוב של סרטון אחד ({prod[0]['vid']}, יום {prod[0]['n']}) יש את שורת המוצר. "
                     "GPT מעלה אותו רק אחרי שהלינק לחנות כבר בביו.")
    elif prod:
        names = " ו-".join(f"{p['vid']} (יום {p['n']})" for p in prod)
        prod_line = (f"שורת המוצר נמצאת רק בכיתובים של {names}. GPT מעלה אותם רק אחרי שהלינק לחנות כבר בביו; "
                     "שאר הכיתובים נקיים בכוונה.")
    else:
        prod_line = "באף כיתוב בגל הזה אין את שורת המוצר."
    return f"""גל {n} ל-@{kit['handle']}: {len(posts)} סרטונים חדשים, אחד ליום
==============================================

מה יש כאן:
- {len(posts)} הסרטונים (videos/, ונשלחו אליך גם בנפרד, וכל אחד גם בקישור ב-VIDEO-LINKS.txt).
- captions ו-covers: כיתוב וקאבר לכל סרטון.
- GPT-INSTRUCTIONS-BATCH{n}.md: ההוראות ל-GPT לגל הזה: לוח פרסום, מה כל סרטון בודק, ואיך מודדים אחרי 24 ו-72 שעות.
- posts.csv: טבלת הפוסטים.

סדר הפרסום:
{rows}

איך עובדים עם GPT:
1. באותו צ'אט של החשבון (או צ'אט חדש עם Agent mode), מעלים את הזיפ הקטן של גל {n}.
2. כותבים: "Read GPT-INSTRUCTIONS-BATCH{n}.md in the zip and do it, one video a day."

חשוב:
- {prod_line}
- לא משנים כיתובים או קאברים: כל סרטון בודק דבר אחד.
- אחרי 24 ו-72 שעות GPT שולח טבלה. תעביר לי אותה ואני אגיד מה עבד ומה עושים בגל הבא.
"""


def build_batch(c, n):
    kit = launch_kit(c)
    plan = parse_plan(c)
    fdir = os.path.join(ROOT, c, "final")
    pkg = os.path.join(fdir, f"batch{n}-package")
    if os.path.isdir(pkg):
        shutil.rmtree(pkg)
    for sub in ("videos", "captions", "covers"):
        os.makedirs(os.path.join(pkg, sub))
    tracked = os.path.join(ROOT, c, "instagram", f"batch{n}")
    os.makedirs(os.path.join(tracked, "captions"), exist_ok=True)
    links_path = os.path.join(ROOT, c, "instagram", "video-links.json")
    links = json.load(open(links_path)) if os.path.exists(links_path) else {}
    posts = []
    for day, vid, tests in BATCHES[n][c]:
        src = os.path.join(fdir, f"{vid}.mp4")
        if not os.path.exists(src):
            sys.exit(f"missing {src}: run finish_video.py first")
        video = f"day{day:02d}-{c}-{vid}.mp4"
        shutil.copy(src, os.path.join(pkg, "videos", video))
        cover(src, os.path.join(pkg, "covers", f"day{day:02d}-{vid}.jpg"))
        cap = caption_for(plan, vid)
        for path in (os.path.join(pkg, "captions", f"day{day:02d}-{vid}.txt"), os.path.join(tracked, "captions", f"day{day:02d}-{vid}.txt")):
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(cap + "\n")
        posts.append(dict(n=day, vid=vid, video=video, caption_file=f"captions/day{day:02d}-{vid}.txt",
                          cover_file=f"covers/day{day:02d}-{vid}.jpg", title=plan[vid]["title"], caption=cap,
                          tests=tests, url=links.get(vid)))
    ins = batch_instructions(c, kit, posts, n)
    for path in (os.path.join(pkg, f"GPT-INSTRUCTIONS-BATCH{n}.md"), os.path.join(tracked, f"GPT-INSTRUCTIONS-BATCH{n}.md")):
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(ins)
    for path in (os.path.join(pkg, "posts.csv"), os.path.join(tracked, "posts.csv")):
        with open(path, "w", encoding="utf-8", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(["day", "video_file", "video_url", "caption_file", "cover_file", "title", "tests", "caption", "posted"])
            for p in posts:
                w.writerow([p["n"], p["video"], p.get("url") or "", p["caption_file"], p["cover_file"], p["title"], p["tests"], p["caption"], ""])
    if links:
        lines = [f"day {p['n']:02d}  {p['video']}  {p.get('url') or '(no link)'}" for p in posts]
        for path in (os.path.join(pkg, "VIDEO-LINKS.txt"), os.path.join(tracked, "VIDEO-LINKS.txt")):
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(f"@{kit['handle']} batch {n}: download links, one video a day\n\n" + "\n".join(lines) + "\n")
    with open(os.path.join(pkg, "READ-ME-FIRST-HE.txt"), "w", encoding="utf-8") as fh:
        fh.write(readme_he_batch(c, kit, posts, n))
    small = os.path.join(fdir, f"{kit['handle']}-batch{n}-instructions-captions-covers.zip")
    with zipfile.ZipFile(small, "w", zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(pkg):
            for f in files:
                if f.endswith(".mp4"):
                    continue
                full = os.path.join(root, f)
                z.write(full, os.path.relpath(full, fdir))
    print(f"wrote {pkg} and {small} ({os.path.getsize(small) / 1e6:.1f} MB); texts also in {tracked}")


if __name__ == "__main__":
    flag = sys.argv[1:2]
    if flag and flag[0].startswith("--batch"):
        n = int(flag[0][len("--batch"):])
        for ch in sys.argv[2:]:
            build_batch(ch, n)
        sys.exit()
    for ch in sys.argv[1:] or ["rosa"]:
        build(ch)

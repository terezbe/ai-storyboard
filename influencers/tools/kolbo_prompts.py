#!/usr/bin/env python3
"""Build Kolbo / Seedance 2.5 prompts (Locked Intro shape) for every video.

Run:  python3 influencers/tools/kolbo_prompts.py              (all three characters)
      python3 influencers/tools/kolbo_prompts.py rosa         (writes rosa/kolbo-prompts.md and .json)
      python3 influencers/tools/kolbo_prompts.py --print R2   (print one prompt)

This is the shape that passed the Rosa R2 test on 2026-10-05:
- one continuous 9:16 phone take, at most 30 s;
- English dialogue performed natively by Seedance 2.5 (no TTS file, no lip-sync step);
- references in this order: @Image 1 = sheet.jpg, @Image 2 = profile-picture.jpg, @Image 3 = the location still;
- generate_elements, model seedance-2-5, duration = the Total line, resolution 480p-draft, multi_shots false;
- then upscale to 1080p (bytedance-upscaler) and run finish_video.py.

Scripts come from <character>/content-plan.md, direction from videos.py, constants from chars.py.
"""
import json
import math
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from build_video_prompts import find_phrase, needs_stability, parse_plan, relight, word_times  # noqa: E402
from chars import CHARS, LOCS  # noqa: E402
from videos import V  # noqa: E402

MAX_DUR = 30
PACE = 0.94       # Seedance 2.5 spoke R2 in about 94% of the time the wpm model predicts
MIN_BEAT = 2.0    # shorter beats merge into the next one


def tc(t):
    t = int(round(t))
    return f"{t // 60}:{t % 60:02d}"


def age(c):
    return re.search(r"(\d+)-year-old", CHARS[c]["identity"]).group(1)


def look_block(c):
    ch = CHARS[c]
    his = ch["his"]
    who = f"a real {age(c)}-year-old {ch['sex']}, {ch['phone_owner']}"
    if "older phone" in ch["look"]:
        return (
            f"Real social-media footage of {who}. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: "
            f"the background is as sharp as {his} face; mild wide-angle stretch toward the frame edges. Old-phone processing: "
            "720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white "
            "balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. "
            "Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged."
        )
    return (
        f"Real social-media footage of {who}. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the "
        f"room behind {his} is as sharp as {his} face; mild wide-angle stretch toward the frame edges. Modern-phone processing: "
        "computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened "
        "micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, "
        "no beauty mode. Skin at pore level, real and aged."
    ).replace(f"behind {his} is", f"behind {ch['him']} is")


def movement(c, v):
    ch = CHARS[c]
    n, his = ch["name"], ch["his"]
    kind, detail = v["cam"]
    if kind == "companion":
        return (f"one handheld phone held by {ch['companion_short']}, alive: constant small sway and micro-corrections, one late "
                "human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.")
    if kind == "propped":
        return ("a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a "
                "slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never "
                "a pan, zoom, dolly or orbit.")
    if kind == "selfie":
        return (f"{n}'s own handheld selfie: mild front-camera wide distortion, a gentle hand bob with {his} breathing and "
                f"gestures; any angle change comes only from {his} hand. Never a cut, zoom, gimbal glide or tripod stillness.")
    return ("the phone sits in a cheap dashboard clip mount: locked framing that carries the parked van's true micro-movement "
            "when he shifts his weight or a gust hits. Never a pan, zoom or dolly.")


def camera_setup(c, v):
    ch = CHARS[c]
    n, his = ch["name"], ch["his"]
    kind, detail = v["cam"]
    if kind == "companion":
        return (f"This is NOT a selfie: {n} is not holding the phone, no arm reaches toward the lens, and both of {his} hands are "
                f"free for {his} gestures. {ch['companion_short']} holds the phone {detail}.")
    if kind == "propped":
        return (f"Nobody holds the phone: it is propped against {detail}. {n} is not holding it; both of {his} hands are free "
                f"for {his} gestures.")
    if kind == "selfie":
        return f"{n} holds the phone {detail}; {his} free hand does the gestures."
    return f"The phone sits in the clip mount {detail}; {n} is alone in the cab with both hands free."


def camera_heading(c, v):
    ch = CHARS[c]
    kind = v["cam"][0]
    return {
        "companion": f"phone handheld by {ch['companion_short']}",
        "propped": "propped phone",
        "selfie": f"{ch['name']}'s handheld selfie",
        "mounted": "phone in a dashboard clip mount",
    }[kind]


def clean_action(a):
    if a.startswith("THE SIGNATURE: "):
        return a[len("THE SIGNATURE: "):] + " (the signature move: the only time in the whole video)"
    if a.startswith("COMIC MOVE: "):
        return a[len("COMIC MOVE: "):] + " (once only)"
    return a


def segments(c, v, script):
    """Split the script at the beat phrases and time each piece. Returns (beats, speech_end, compressed)."""
    words, times, end = word_times(script, CHARS[c]["speech_wpm"], 0.0)
    idx, last = [], 0
    for phrase, action in v["beats"]:
        i = find_phrase(words, phrase, last)
        if i is None:
            print(f"WARNING {v['id']}: beat phrase not found: {phrase!r}", file=sys.stderr)
            i = min(last + 1, len(words) - 1)
        idx.append(i)
        last = i
    idx[0] = 0
    # start each quoted piece at a clause boundary (after , . ? ! ; :) when one is within four words
    for k in range(1, len(idx)):
        for j in range(idx[k], max(idx[k - 1] + 1, idx[k] - 4) - 1, -1):
            if re.search(r"[,.?!;:]$", words[j - 1]):
                idx[k] = j
                break
    final_len = 2.0 if v.get("final") else 1.0
    scale = PACE
    compressed = False
    if end * scale + final_len > MAX_DUR:
        scale = (MAX_DUR - final_len) / end
        compressed = True
    raw = []
    for k, (phrase, action) in enumerate(v["beats"]):
        a, b = idx[k], (idx[k + 1] if k + 1 < len(idx) else len(words))
        t0 = times[a] * scale if k else 0.0
        t1 = times[b] * scale if b < len(words) else end * scale
        raw.append([t0, t1, " ".join(words[a:b]), clean_action(action)])
    merged = []
    for seg in raw:
        if merged and merged[-1][1] - merged[-1][0] < MIN_BEAT:
            prev = merged[-1]
            prev[1], prev[2], prev[3] = seg[1], prev[2] + " " + seg[2], prev[3] + ", then " + seg[3]
        else:
            merged.append(seg)
    if len(merged) > 1 and merged[-1][1] - merged[-1][0] < MIN_BEAT:
        last_seg = merged.pop()
        merged[-1][1], merged[-1][2] = last_seg[1], merged[-1][2] + " " + last_seg[2]
        merged[-1][3] += ", then " + last_seg[3]
    # whole-second boundaries, strictly increasing
    out, prev = [], 0
    for s in merged:
        t1 = max(prev + 1, int(round(s[1])))
        out.append((prev, t1, s[2], s[3]))
        prev = t1
    return out, prev, compressed


def scene_text(c, v):
    scene = LOCS[c][v["loc"]]["scene"]
    if v.get("light") == "windy":
        scene = scene.replace("calm turquoise water", "choppy grey-turquoise water with small whitecaps")
    elif v.get("light") == "glassy":
        scene = scene.replace("calm turquoise water", "perfectly calm, glassy turquoise water, flat as oil")
    elif v.get("light") == "fog":
        scene = scene.replace("calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats",
                              "flat grey-green water vanishing into thick white sea fog a few metres out, an old metal ladder bolted into the rock; the headland and the boats are hidden by the fog")
    return scene


def references(c, v):
    ch = CHARS[c]
    n, his, sex = ch["name"], ch["his"], ch["sex"]
    return [
        "[REFERENCES]",
        f"@Image 1 defines {n}'s face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on "
        f"a white studio background: use only the {sex}. Do not use its white background, its flat studio lighting or its "
        f"layout, and do not copy its outfit ({his} outfit for this video is written in CAST).",
        f"@Image 2 is a close-up photo of the same {sex}, {n}, at a natural angle: it confirms {his} face. Use only {his} face "
        "and hair; ignore its background, light and clothes.",
        f"@Image 3 defines the location: {scene_text(c, v)}. Use the place only.",
    ]


def locked_intro(c, v, speaking=True):
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    n, he, his, He, His = ch["name"], ch["he"], ch["his"], ch["He"], ch["His"]
    L = []
    L.append("[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]")
    L.append(look_block(c))
    stab = " The light state never changes: not a time-lapse, no sun movement, no clouds racing." if needs_stability(c, v) else ""
    L.append(f"Available light only, constant for the whole take: {relight(c, v)}{stab} {He} is relit by this scene, never by "
             f"the studio light of @Image 1: {he} is never brighter than {his} surroundings and never looks pasted in.")
    L.append("Movement grammar: " + movement(c, v))
    L.append("")
    L.append("[CAST – IDENTICAL FOR THE WHOLE TAKE]")
    ident = ch["identity"].replace(f"{n}, ", "", 1)
    L.append(f"{n} (@Image 1): {ident}. Identity marks, always visible and unchanged: {ch['anchors']}. {ch['gender_lock']} "
             f"{His} face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.")
    note = ch.get("outfit_not", {}).get(v["outfit"], "")
    L.append(f"Wardrobe (this video): {ch['outfits'][v['outfit']]}." + (f" {note}" if note else ""))
    L.append(f"PERSONA: {ch['persona']}.")
    if speaking:
        L.append(f"VOICE: English only. {ch['voice_kolbo']}.")
    else:
        L.append(f"{n} does not speak in this video.")
    kind = v["cam"][0]
    if kind == "companion" or v["fmt"] == "B":
        L.append(f"Off-screen: {ch['companion_age']}, {'holds the phone' if kind == 'companion' else 'sits out of frame just to the right of the phone'}. "
                 f"{ch['companion_short']} is never seen and never heard.")
    L.append("")
    L.append("[LOCATION]")
    extra = f" Real, untidy details that never move: {loc['clutter']}." if loc.get("clutter") else ""
    L.append(f"The place from @Image 3: {scene_text(c, v)}. No other people.{extra} No brands, no readable text, no signs.")
    L.append("")
    L.append("[LOCATION MAP]")
    L.append(v["framing"])
    L.append("")
    L.append("[CONTINUITY – LOCKED]")
    cont = (camera_setup(c, v) + " The lens is clean and clear: no finger, hand or object in front of it."
            " Framing constant after the opening second.")
    if v["fmt"] == "B":
        cont += (f" Interview set-up: {n} answers {ch['interviewer']}; {his} eyeline stays on {ch['companion_short']}, just "
                 f"off-lens to the right, and {he} NEVER looks into the camera. The question was asked before the clip starts and is "
                 "added later as on-screen text: there is no interviewer voice.")
    if v["fmt"] == "C":
        cont += f" TEXT-SAFE FRAME: the upper third of the frame stays visually calm; {n} lives in the lower two-thirds."
    if v.get("props"):
        cont += f" Props: {v['props']}. Every prop is there from the first frame and never appears, disappears or changes."
    else:
        cont += " No prop appears, disappears or changes."
    L.append(cont)
    L.append("")
    L.append("[PHYSICS]")
    L.append(f"{v['physics'][0].upper() + v['physics'][1:]}; true body weight where {he} sits; fabric moves with {his} movement.")
    return L


def avoid(c, v, speaking=True):
    ch = CHARS[c]
    n = ch["name"]
    kind = v["cam"][0]
    items = ([v["avoid"]] if v.get("avoid") else []) + [ch["avoid_extra"], "a finger, hand or blurred object in front of the lens"]
    if kind == "companion":
        items.append(f"a selfie arm or {n} holding the phone")
    if v["fmt"] == "B":
        items.append(f"{n} looking into the lens")
    if speaking:
        items.append("any language other than English")
    else:
        items.append("any speech, mouthed words or lip movement")
    items += [
        "anyone else in frame", "extra people", "a younger, smoother or made-up face", "waxy or plastic skin",
        f"missing identity marks ({ch['anchors_short']})",
        "outfit changes", "the white studio background or studio light of @Image 1",
        "a blurred background, bokeh or a film-look colour grade", "cuts, zooms, gimbal glide or tripod stillness",
        "subtitles, captions, on-screen text, logos or watermarks",
    ]
    return "AVOID: " + "; ".join(items) + "."


def kolbo_prompt(c, v, script):
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    n, he, his, He, His = ch["name"], ch["he"], ch["his"], ch["He"], ch["His"]
    beats, speech_end, compressed = segments(c, v, script)
    final = v.get("final")
    dur = min(MAX_DUR, max(4, speech_end + (2 if final else 1)))
    take = "handheld" if v["cam"][0] in ("companion", "selfie") else "phone"
    L = [f"Single continuous shot, {dur}s total, 9:16 vertical phone frame. One unbroken {take} take, no cuts.",
         f"Total: {dur}s / 1 shot / 9:16", ""]
    L += references(c, v)
    L += ["", "[EMOTIONAL INTENT]",
          f"{v['direction'][0].upper() + v['direction'][1:]}. Motive: {v['motive']}. Goal: {v['goal']}. Obstacle: "
          f"{v['obstacle']}. Tactic: {v['tactic']}. Mood and tempo: {v['mood']}. Every beat is played from this, never posed.",
          f"SIGNATURE MOMENT: {v['centerpiece'].replace('THE SIGNATURE', 'the signature move (' + ch['signature'] + ')')}.", ""]
    L += locked_intro(c, v)
    L.append("")
    size = v["framing"].split(".")[0]
    L.append(f"SHOT 1 — 0:00–{tc(dur)} — {size}, {camera_heading(c, v)}, one unbroken take, 9:16 vertical phone frame")
    for k, (t0, t1, quote, action) in enumerate(beats):
        if k == 0:
            action = re.sub(r"^(she|he) ", f"{n} ", action) if re.match(r"(she|he) ", action) else f"{n}, {action}"
        L.append(f"{tc(t0)}–{tc(t1)} — {action}: \"{quote}\"")
    if dur > speech_end:
        end_action = f"{final}" if final else "she holds the last expression, mid-thought"
        L.append(f"{tc(speech_end)}–{tc(dur)} — silence, lips still: {end_action}. Hold.")
    L.append("")
    sfx = v.get("sfx", loc["sfx"])
    extra = " No interviewer voice: the question is added later as on-screen text." if v["fmt"] == "B" else ""
    L.append(f"AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: {n}'s voice "
             f"close and clear, English only, exactly the quoted words and nothing added; {sfx}. {His} lips move only when "
             f"{he} speaks and stay still in every silence. No other voices.{extra}")
    L.append("")
    L.append(avoid(c, v))
    L.append("")
    L.append(f"Total: {dur}s / 1 shot / 9:16")
    sig = [b for b in v["beats"] if b[1].startswith("THE SIGNATURE")]
    sig_line = f", and {ch['signature']} only on \"{sig[0][0]}\"" if sig else ""
    lip = ", a woman with a smooth upper lip" if ch["sex"] == "woman" else ""
    L.append(f"POSITIVE LOCKS: One unbroken 9:16 vertical phone take of {n}. {His} face matches @Image 1 and @Image 2 exactly "
             f"for all {dur} seconds{lip}, relit by the scene's own light. {He} speaks only the quoted English words in {his} "
             f"{ch['accent_short']}{sig_line}.")
    text = "\n".join(L).replace("she holds the last expression", f"{he} holds the last expression")
    return text, dur, compressed


def broll_prompt(c, v):
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    n, he, his, He, His = ch["name"], ch["he"], ch["his"], ch["He"], ch["His"]
    parts = [p.strip() for p in re.split(r", then |, (?=sets|raises|puts|opens|picks|pours|looks|lifts)", v["action"]) if p.strip()]
    parts = [re.sub(r"^(she|he) ", "", p) for p in parts]
    dur = max(int(v.get("duration", 10)), 2 * len(parts) + 2)
    L = [f"Single continuous shot, {dur}s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.",
         f"Total: {dur}s / 1 shot / 9:16", ""]
    L += references(c, v)
    L += ["", "[EMOTIONAL INTENT]",
          f"{v['direction'][0].upper() + v['direction'][1:]}. Mood and tempo: {v['mood']}. {He} is absorbed in the task, "
          "never posing, eyes on what {he} is doing, never on the lens.".replace("{he}", he), ""]
    L += locked_intro(c, v, speaking=False)
    L.append("")
    size = v["framing"].split(".")[0]
    L.append(f"SHOT 1 — 0:00–{tc(dur)} — {size}, {camera_heading(c, v)}, one unbroken take, 9:16 vertical phone frame")
    span = (dur - 2) / max(1, len(parts))
    t = 0.0
    for k, p in enumerate(parts):
        t1 = t + span
        L.append(f"{tc(t)}–{tc(t1)} — {(n + ' ') if k == 0 else ''}{p}.")
        t = t1
    L.append(f"{tc(t)}–{tc(dur)} — {he} settles and holds still, ready to loop ({v['loop']}). Hold.")
    L.append("")
    L.append(f"AUDIO: No music. No musical score. No dialogue: {n} never speaks or mouths words. Ambient sound from the "
             f"phone's own mic only: {v.get('sfx', loc['sfx'])}.")
    L.append("")
    L.append(avoid(c, v, speaking=False))
    L.append("")
    L.append(f"Total: {dur}s / 1 shot / 9:16")
    L.append(f"POSITIVE LOCKS: One unbroken 9:16 vertical phone take of {n}, silent, the upper third calm for text. {His} face "
             f"matches @Image 1 and @Image 2 exactly for all {dur} seconds, relit by the scene's own light.")
    return "\n".join(L), dur, False


def prompt_for(c, v, plan):
    if v["fmt"] == "C":
        return broll_prompt(c, v)
    return kolbo_prompt(c, v, plan[v["id"]]["script"])


def build(c, batch=None):
    plan = parse_plan(c)
    vids = V[c] if batch is None else [v for v in V[c] if v["id"] in batch]
    data, md = {}, []
    md += [f"# Kolbo prompts: {CHARS[c]['name']}", "",
           "> **פרומפטים ל-Kolbo (Seedance 2.5).** נבנה אוטומטית על ידי `tools/kolbo_prompts.py`, לא עורכים ידנית.",
           "> הצורה הזו עברה את ניסיון R2 של רוזה (5.10.2026): צילום אחד רציף, 9:16, הקול והדיבור נוצרים ישירות ב-Seedance.",
           ">",
           "> **איך מפיקים סרטון:**",
           "> - כלי: `generate_elements`, מודל `seedance-2-5`, `aspect_ratio` 9:16, `multi_shots` false, `resolution` `480p-draft`.",
           "> - `duration` = המספר בשורת ה-Total.",
           "> - רפרנסים לפי הסדר: `sheet.jpg`, ואז `profile-picture.jpg`, ואז קובץ הלוקיישן.",
           "> - אחרי אישור: `edit_video` עם `upscale` (`bytedance-upscaler/upscale/video`, 1080p), ואז `finish_video.py`.",
           "",
           "| ID | Title | Format | Location | Length |", "|---|---|---|---|---|"]
    body = []
    for v in vids:
        p = plan[v["id"]]
        prompt, dur, compressed = prompt_for(c, v, plan)
        loc = LOCS[c][v["loc"]]
        fmt = {"A": "Talking", "B": "Interview", "C": "Silent b-roll"}[v["fmt"]]
        md.append(f"| {v['id']} | {p['title']} | {fmt} | `{loc['file']}` | {dur} s{' (tight)' if compressed else ''} |")
        data[v["id"]] = dict(title=p["title"], fmt=v["fmt"], duration=dur, compressed=compressed,
                             refs=["sheet.jpg", "profile-picture.jpg", loc["file"]], prompt=prompt, chars=len(prompt))
        body += [f"## {v['id']}: {p['title']}", "",
                 f"- **Length:** {dur} s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `{loc['file']}` · {len(prompt)} characters",
                 "", "```text", prompt, "```", ""]
    md.append("")
    md += body
    with open(os.path.join(ROOT, c, "kolbo-prompts.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(md).rstrip() + "\n")
    with open(os.path.join(ROOT, c, "kolbo-prompts.json"), "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=1)
    print(f"wrote {c}/kolbo-prompts.md and .json ({len(data)} videos)")


def print_one(vid):
    for c, vids in V.items():
        for v in vids:
            if v["id"] == vid:
                prompt, dur, compressed = prompt_for(c, v, parse_plan(c))
                print(prompt)
                print(f"\n[{dur} s, {len(prompt)} chars{', compressed to fit 30 s' if compressed else ''}]", file=sys.stderr)
                return
    sys.exit(f"unknown video id {vid}")


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "--print":
        print_one(args[1])
    else:
        for ch in (args or ["rosa", "ray", "lou"]):
            build(ch)

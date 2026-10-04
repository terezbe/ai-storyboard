#!/usr/bin/env python3
"""Build influencers/<character>/video-prompts.md from content plans + direction data.

Run:  python3 influencers/tools/build_video_prompts.py            (all three)
      python3 influencers/tools/build_video_prompts.py rosa       (one character)
      python3 influencers/tools/build_video_prompts.py --print R2 [--part 1|2]
                                                                    (print one prompt)
Edit scripts in <character>/content-plan.md, direction in tools/videos.py,
character/location constants in tools/chars.py, then re-run.
"""
import math
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from chars import CHARS, LOCS, camera_text  # noqa: E402
from videos import V  # noqa: E402

SETTLE = {"propped": 0.8, "companion": 0.5, "selfie": 0.6, "mounted": 0.6}
FINAL_BEAT = 1.2
CAP = 30
HEB = {"rosa": "רוזה", "ray": "ריי", "lou": "לו"}


# ------------------------------------------------------------------ parsing / timing

def parse_plan(c):
    text = open(os.path.join(ROOT, c, "content-plan.md"), encoding="utf-8").read()
    out = {}
    for sec in re.split(r"\n### ", text)[1:]:
        m = re.match(r"([RYL]\d+): (.+)", sec)
        if not m:
            continue
        vid, title = m.group(1), m.group(2).strip()
        sm = re.search(r"\*\*Script:\*\*\n  > (.+)", sec)
        om = re.search(r'\*\*On-screen text[^*]*\*\*:? ?"?([^"\n]*)"?', sec)
        overlay = re.findall(r"\n  \d\. (.+)", sec)
        out[vid] = dict(title=title, script=sm.group(1).strip() if sm else None,
                        onscreen=om.group(1).strip() if om else "", overlay=overlay)
    return out


def norm(w):
    return re.sub(r"[^a-z0-9']", "", w.lower().replace("’", "'"))


def norm_s(x):
    return " ".join(norm(w) for w in x.split() if norm(w))


def word_times(script, wpm, settle):
    words = script.split()
    wps = wpm / 60.0
    times, t = [], settle
    for w in words:
        times.append(t)
        t += 1.0 / wps
        if w.endswith("..."):
            t += 0.3
        elif w[-1:] in ".?!":
            t += 0.1
    return words, times, t


def find_phrase(words, phrase, start):
    pw = [norm(x) for x in phrase.split() if norm(x)]
    k = min(3, len(pw))
    nw = [norm(x) for x in words]
    for i in range(start, len(words)):
        if nw[i:i + k] == pw[:k]:
            return i
    return None


def timed_beats(c, v, script, beats, settle):
    words, times, end = word_times(script, CHARS[c]["speech_wpm"], settle)
    idx, last = [], 0
    for phrase, action in beats:
        i = find_phrase(words, phrase, last)
        if i is None:
            print(f"WARNING {v['id']}: beat phrase not found: {phrase!r}", file=sys.stderr)
            i = min(last + 1, len(words) - 1)
        idx.append(i)
        last = i
    out = []
    for n, ((phrase, action), i) in enumerate(zip(beats, idx)):
        t1 = times[idx[n + 1]] if n + 1 < len(idx) else end
        out.append((settle if n == 0 else times[i], t1, phrase, action))
    return out, end


def split_script(script, split_phrase):
    idx = script.find(split_phrase) if split_phrase else -1
    if idx < 0:
        if split_phrase:
            print(f"WARNING split phrase not found: {split_phrase!r}", file=sys.stderr)
        return None
    cut = idx + len(split_phrase)
    return script[:cut].strip(), script[cut:].strip()


def centerpiece_index(v, beats):
    cp = v.get("centerpiece", "")
    for q in re.findall(r"'([^']+)'", cp):
        for k, (phrase, action) in enumerate(beats):
            a, b = norm_s(q), norm_s(phrase)
            if a and b and (a.startswith(b[:14]) or b.startswith(a[:14])):
                return k
    if "SIGNATURE" in cp:
        for k, (phrase, action) in enumerate(beats):
            if action.startswith("THE SIGNATURE"):
                return k
    words = [w for w in re.sub(r"[^a-z ]", " ", cp.split(":")[0].lower().replace("the ", " ")).split() if len(w) > 3]
    for k, (phrase, action) in enumerate(beats):
        if words and any(w in (phrase + " " + action).lower() for w in words):
            return k
    for k, (phrase, action) in enumerate(beats):
        if "register" in action:
            return k
    return None


def bare_action(v):
    return re.sub(r"^(she|he) ", "", v["action"])


def f1(x):
    return f"{x:.1f}"


# ------------------------------------------------------------------ text helpers

def relight(c, v):
    return LOCS[c][v["loc"]]["light"][v["light"]]


def needs_stability(c, v):
    return v["loc"] in ("rocks", "stoop") or " sun" in relight(c, v).lower()


def opening_line(c, v, part):
    ch = CHARS[c]
    if part == 2:
        return f"a natural jump cut from Part 1: the same set-up, framing a touch closer; {ch['name']} is already mid-energy"
    kind = v["cam"][0]
    if kind == "propped":
        return "the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted"
    if kind == "companion":
        return f"{ch['companion_short']} brings the phone into a steady hold; one tiny reframe"
    if kind == "selfie":
        return f"{ch['name']} lifts the phone out to arm's length; the frame bobs once and settles"
    return "the clip mount settles with one tiny shake; the cab is still"


def camera_short(c, v):
    ch = CHARS[c]
    return {
        "propped": "A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing",
        "companion": "Handheld by someone just off-frame: gentle micro-sway and one small reframe",
        "selfie": f"{ch['His']} own handheld selfie: mild wide-angle distortion and a gentle hand bob",
        "mounted": "Phone in a dashboard clip mount: locked framing with the parked van's very slight movement",
    }[v["cam"][0]]


def look_still(c):
    if "older phone" in CHARS[c]["look"]:
        return ("The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows "
                "or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, "
                "no beauty filter, no cinematic grade.")
    return ("The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and "
            "liver spots; no smoothing, no beauty filter, no cinematic grade.")


def camsum(c, v):
    ch = CHARS[c]
    kind, detail = v["cam"]
    return {
        "propped": f"casually PROPPED against {detail.split(',')[0].split(';')[0]}",
        "companion": f"HANDHELD by {ch['companion_short']}",
        "selfie": f"{ch['name']}'s own HANDHELD SELFIE",
        "mounted": "in a cheap dashboard clip mount",
    }[kind]


def priorities(c, v, beats, part):
    ch = CHARS[c]
    n, he, his = ch["name"], ch["he"], ch["his"]
    kind = v["cam"][0]
    p = []
    if v["fmt"] == "C":
        p.append(f"NO dialogue anywhere: {n} never speaks or mouths words; ambient sound only.")
        p.append(f"The phone is {camsum(c, v)}, NOT a tripod: living UGC framing.")
        p.append(f"TEXT-SAFE FRAME: the upper third of the frame stays visually calm; {n} lives in the lower two-thirds.")
        p.append(f"ONE micro-action with a small arc ({v['action'].split(',')[0]}...), unhurried; loop-friendly ending.")
    else:
        p.append(f"{n} speaks ONLY English throughout, never Chinese or any other language.")
        if part == 2:
            p.append("This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera "
                     "style; framing a touch closer; no new settle-wobble.")
        else:
            p.append(f"The phone is {camsum(c, v)}, NOT a tripod: living UGC framing"
                     + (" with a settle-wobble at the start." if kind == "propped" else "."))
        if v["fmt"] == "B":
            p.append(f"Interview excerpt: {his} eyeline stays on {ch['interviewer']}; {he} NEVER looks into the camera.")
        p.append("Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words.")
        sig = [b for b in beats if b[1].startswith("THE SIGNATURE")]
        if sig:
            p.append(f"The signature move ({ch['signature']}) happens ONCE, exactly on «{sig[0][0]}», and nowhere else.")
        else:
            p.append(f"The centerpiece is {v['centerpiece']}: give it room." if part != 1 or centerpiece_index(v, beats) is not None
                     else "Keep the energy rising to the cut; the payoff comes in Part 2.")
    p.append(f"Face and identity match @image1 100% for the entire take; {ch['anchors_short']} always visible and unchanged.")
    p.append("Real aged skin texture; waxiness and smoothing strictly forbidden.")
    return p


# ------------------------------------------------------------------ prompt builders

def video_prompt(c, v, script=None, beats=None, part=0, final=None):
    """part: 0 = single clip, 1 = first of two, 2 = second of two."""
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    n, N = ch["name"], ch["name"].upper()
    he, his, him, He = ch["he"], ch["his"], ch["him"], ch["He"]
    outfit = ch["outfits"][v["outfit"]]
    beats = beats if beats is not None else v.get("beats", [])
    final = final if final is not None else v.get("final")
    settle = 0.3 if part == 2 else SETTLE[v["cam"][0]]
    L = []
    pr = priorities(c, v, beats, part)
    L.append("TOP PRIORITY (read first): " + " ".join(f"{i+1}) {x}" for i, x in enumerate(pr)))
    L.append("")
    L.append("=== REFERENCE KEY (attach in this order) ===")
    L.append(f"@image1 = {ch['role']} ({ch['identity']}; identity anchors: {ch['anchors']}; in this video wearing {outfit}) "
             "— identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting")
    L.append(f"@image2 = THE SCENE ({loc['scene']}) — scene reference only, generic, no brands, no readable text")
    if v["fmt"] != "C":
        L.append(f"@audio1 = VOICE TRACK{' (Part ' + str(part) + ' audio)' if part else ''} — this audio file is the ONLY spoken "
                 f"content; use it exactly as recorded ({ch['voice_register']})")
    L.append("=== END KEY ===")
    L.append("")
    L.append(f"CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight {him} from scratch to the "
             f"scene. {relight(c, v)} {He} must look physically present and photographed in the location — never a cut-out "
             "pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and "
             "outfit; derive all lighting from @image2 and this description.")
    if needs_stability(c, v):
        L.append("LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, "
                 "no clouds racing.")
    L.append("")
    L.append(ch["look"])
    L.append("")
    L.append(ch["style"])
    L.append("")
    cam = camera_text(v["cam"][0], c, v["cam"][1])
    if part == 2:
        cam = cam.replace("The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks",
                          "The frame is already settled (this is Part 2 after a jump cut): it holds")
    L.append(cam)
    L.append("")
    L.append(f"Composition: 9:16. {v['framing']}" + (" Framing a touch closer than Part 1." if part == 2 else ""))
    L.append("")
    if v["fmt"] == "C":
        L.append(f"Performance (one micro-action with a small arc, always believable): {v['direction']}. {n} {bare_action(v)}. "
                 f"Unhurried and real; {his} eyes stay engaged with the task, never on the lens; natural blinks; "
                 "never staged, never stiff, never puppet-like.")
    else:
        L.append(f"ACTING TASK — {N} (fully invested; the work reads through the eyes, the stillness and the brow line):")
        L.append(f"SCENE DIRECTION (unspoken): {v['direction']}.")
        L.append(f"MOTIVE (fuel): {v['motive']}.")
        L.append(f"GOAL: {v['goal']}.")
        L.append(f"OBSTACLE: {v['obstacle']}.")
        L.append(f"TACTIC: {v['tactic']}.")
        L.append("Moment to moment: " + "; ".join(f"«{p}» — {a}" for p, a in beats) + ".")
        if v["fmt"] == "B":
            L.append(f"The question was just asked by {ch['interviewer']} (it appears as on-screen text in post): {he} answers "
                     f"{ch['companion_short']}, never the lens.")
        L.append("(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, "
                 "never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)")
    L.append("")
    if v.get("props"):
        L.append(f"PROPS: {v['props']}. PROP RULE: every prop exists from frame one; it does not appear, disappear or change "
                 "design, and it moves only in the scripted beat(s).")
    L.append(f"Other people: none in frame. {ch['companion_short']} is never seen; nobody else is heard.")
    L.append("")
    L.append(f"Physics: {v['physics']}; true weight where {he} sits; fabric breathing with {his} movement.")
    L.append("")
    L.append(f"Consistency: {n} matches @image1 exactly (relit) for the entire take; {ch['anchors_short']} visible and "
             "unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.")
    L.append("")
    sfx = v.get("sfx", loc["sfx"])
    if v["fmt"] == "C":
        dur = v.get("duration", 10)
    else:
        tb, end = timed_beats(c, v, script, beats, settle)
        dur = math.ceil(end + (FINAL_BEAT if final else 0.6))
    L.append(f"Editing: none — one continuous take, clean finish at ~{dur} s.")
    L.append("")
    L.append(f"Technical: 9:16 vertical, 1080x1920, {ch['look_word']} video as described, honest casual framing.")
    L.append("")
    L.append("ON-SCREEN TEXT: none. (Added in post by the team.)")
    L.append("")
    if v["fmt"] == "C":
        L.append(f"Audio: NO dialogue anywhere — ambient SFX only: {sfx}, all quiet and natural. Music: none. Fully original.")
    else:
        L.append("Audio (English ONLY):")
        L.append(f"- Dialogue: {n}'s voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely "
                 "still when the audio is silent; no added words, no other voices, no humming. Verbatim:")
        L.append(f"{N}: \"{script}\"")
        if v["fmt"] == "B":
            L.append(f"- There is NO interviewer audio: the question appears as on-screen text in post; {he} reacts as if "
                     f"{he} has just heard it.")
        L.append(f"- Sound design: {sfx}, quiet and ducked under the voice.")
        L.append("- Music: none. Fully original.")
    L.append("")
    L.append(f"Mood & tempo: {v['mood']}; ~{dur} seconds, 9:16, one take, no subtitles.")
    L.append("")
    if v["fmt"] == "C":
        L.append(f"SHOT BREAKDOWN (one take, {dur} s, 9:16, no subtitles, loop-friendly):")
        parts = [p.strip() for p in re.split(r", then |, (?=sets|raises|puts|opens|picks|pours|looks|lifts)", v["action"]) if p.strip()]
        span = (dur - 1.5 - settle) / max(1, len(parts))
        L.append(f"0.0–{f1(settle)}s — {opening_line(c, v, 0)}.")
        t = settle
        for p in parts:
            L.append(f"{f1(t)}–{f1(t + span)}s — {p}.")
            t += span
        L.append(f"{f1(t)}–{f1(dur)}s — {he} settles into the loop pose: {v['loop']}. End.")
    else:
        L.append(f"SHOT BREAKDOWN (one take, ~{dur} s, 9:16, no subtitles; timings approximate — follow @audio1):")
        L.append(f"0.0–{f1(settle)}s — {opening_line(c, v, part)}.")
        cp = centerpiece_index(v, beats)
        for k, (t0, t1, phrase, action) in enumerate(tb):
            L.append(f"{f1(t0)}–{f1(t1)}s — «{phrase}…» {action}{' (THE CENTERPIECE)' if k == cp else ''}.")
        endt = tb[-1][1] if tb else settle
        if final:
            L.append(f"{f1(endt)}–{f1(dur)}s — FINAL BEAT (audio has ended, lips still): {final}. End.")
        else:
            L.append(f"{f1(endt)}–{f1(dur)}s — {he} holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.")
    return "\n".join(L), dur


def first_frame_prompt(c, v):
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    return (
        "Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for "
        "the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. "
        f"{ch['identity']}. Identity anchors, all clearly visible: {ch['anchors']}. Wearing {ch['outfits'][v['outfit']]}. "
        f"{ch['name']} is {v['first_frame']}. The place: {loc['scene']}. "
        f"Lighting: {relight(c, v)} Relit to the scene, never pasted from a white studio background; real contact shadows. "
        f"{look_still(c)} One person only; anyone else is out of frame. No text, no captions, no logos, no brands."
    )


def lipsync_prompt(c, v):
    ch = CHARS[c]
    n, his = ch["name"], ch["his"]
    who = ("talks to the camera" if v["fmt"] == "A"
           else f"answers {ch['companion_short']} just beside the lens, never looking into the camera")
    key = [b for b in v["beats"] if b[1].startswith("THE SIGNATURE") or b[1].startswith("COMIC")]
    picks = (key + [b for b in v["beats"] if b not in key])[:4]
    picks.sort(key=lambda b: v["beats"].index(b))
    acts = "; ".join(f"on “{p}” {a.replace('THE SIGNATURE: ', '').replace('COMIC MOVE: ', '')}" for p, a in picks)
    return (
        f"{n} {who} with natural, invested delivery that matches the voice exactly: {acts}. Natural blinks, small head "
        f"movements, eyebrows active on key words, real breathing. {camera_short(c, v)}. Lips match the audio exactly and stay "
        f"still in silences. No other people, no text, no music. Keep {his} face, anchors, outfit and the lighting exactly as "
        "in the image."
    )


def broll_short(c, v):
    ch = CHARS[c]
    loc = LOCS[c][v["loc"]]
    return (
        f"Silent phone video, 9:16, about 10 seconds, starting from this first frame. {ch['name']} {bare_action(v)}. Unhurried and "
        f"real, eyes on the task, never at the camera. {camera_short(c, v)}, never a tripod look. Keep the upper third calm and "
        "empty for text added later. Relit to the scene with real contact shadows; identity, outfit and anchors exactly as in "
        f"the frame. Ambient sound only: {v.get('sfx', loc['sfx'])}. No speech, no music, no text, no logos. "
        "Ends close to the first pose so it loops."
    )


def voice_block(c):
    prof = open(os.path.join(ROOT, c, "profile.md"), encoding="utf-8").read()
    vm = re.search(r"## Voice.*?```\n(.+?)\n```.*?Seed line[^\n]*\n\n> (.+?)\n", prof, re.S)
    return vm.group(1).strip(), vm.group(2).strip()


def parts_for(c, v, script):
    sp = split_script(script, v.get("split"))
    if not sp:
        return None
    p1, p2 = sp
    words1 = len(p1.split())
    b1, b2 = [], []
    words, _, _ = word_times(script, CHARS[c]["speech_wpm"], 0)
    last = 0
    for phrase, action in v["beats"]:
        i = find_phrase(words, phrase, last)
        i = last if i is None else i
        last = i
        (b1 if i < words1 else b2).append((phrase, action))
    return (p1, b1), (p2, b2)


# ------------------------------------------------------------------ file assembly

def build(c):
    ch = CHARS[c]
    plan = parse_plan(c)
    heb = HEB[c]
    voice, seed = voice_block(c)
    out = [f"# Video prompts: {ch['name']}", ""]
    out += [
        f"> **קובץ הפרומפטים לווידאו של {heb}.** כל הפרומפטים באנגלית, מוכנים להדבקה.",
        ">",
        "> הקובץ נבנה אוטומטית מ-`content-plan.md` ומ-`tools/videos.py`, ולכן לא עורכים אותו ידנית.",
        "> כדי לשנות משהו, משנים שם ומריצים `python3 influencers/tools/build_video_prompts.py`.",
        ">",
        "> **הסדר:**",
        ">",
        "> 1. **קול**",
        ">    - בונים את הקול פעם אחת, לפי סעיף 1, ונועלים אותו.",
        ">    - מקליטים כל תסריט כקובץ נפרד בשם ה-ID שלו, למשל `R1.mp3`.",
        "> 2. **מסלול A (הכי טוב, כמו בסרטון): Seedance 2.x עם רפרנסים**",
        ">    - מצרפים @image1 = `sheet.jpg`, @image2 = הלוקיישן, @audio1 = קובץ הקול.",
        ">    - מדביקים את ה-FULL PROMPT.",
        ">    - אם הקול ארוך מ-28 שניות, או שהכלי מוגבל ל-15 שניות: משתמשים ב-TWO-PART.",
        ">    - מייצרים שני קטעים ומחברים ב-jump cut, שזה רגיל לגמרי ברילס.",
        "> 3. **מסלול B (אם אין Seedance עם קול)**",
        ">    - יוצרים FIRST FRAME עם מודל תמונה.",
        ">    - מכניסים למודל lip-sync או avatar (Kling Avatar / Hedra / OmniHuman): פריים ראשון, קובץ קול ו-LIP-SYNC PROMPT.",
        ">    - במסלול הזה אין מגבלת 30 שניות.",
        "> 4. **B-roll שקט:** FIRST FRAME, ואז image-to-video עם ה-SHORT PROMPT.",
        "",
        "## 1. Voice (generate once, lock it, reuse it)",
        "",
        "Voice description (ElevenLabs Voice Design, or the voice-details box in any voice tool):",
        "",
        "```text", voice, "```",
        "",
        "Seed line to audition the voice:",
        "",
        "```text", seed, "```",
        "",
        "Workflow:",
        "",
        "- **Lock the voice.** Generate the seed line until it sounds right, then SAVE the voice. Every script uses this same saved voice; never regenerate it.",
        "- **Paste each script exactly as written.** The punctuation is the pacing.",
        "- **Export.** Save as MP3 and name each file after its video ID.",
        f"- **Timing estimates.** Most scripts run about {29 if c == 'rosa' else 31}–35 s. This file gives every talking clip both a single-clip prompt and a two-part version.",
        "  - Use the single-clip prompt when the voice file is ≤ 28 s and your generator allows 30 s.",
        "  - Otherwise, use the two-part version.",
        "",
        "## 2. Index",
        "",
        "| ID | Video | Format | Location | ~Length |",
        "|---|---|---|---|---|",
    ]
    sections = []
    for v in V[c]:
        p = plan[v["id"]]
        loc = LOCS[c][v["loc"]]
        fmt_name = {"A": "Talking clip", "B": "Interview", "C": "Silent b-roll"}[v["fmt"]]
        s = [f"## {v['id']}: {p['title']}", ""]
        if v["fmt"] == "C":
            prompt, dur = video_prompt(c, v)
        else:
            prompt, dur = video_prompt(c, v, p["script"])
        out.append(f"| {v['id']} | {p['title']} | {fmt_name} | `{loc['file']}` | {dur} s |")
        attach = f"@image1 `sheet.jpg` · @image2 `{loc['file']}`" + ("" if v["fmt"] == "C" else f" · @audio1 `{v['id']}.mp3`")
        s.append(f"- **Format:** {fmt_name} · **~Length:** {dur} s · **Attach:** {attach}")
        if p["onscreen"]:
            s.append(f"- **On-screen text (add in post):** \"{p['onscreen']}\"")
        if v["fmt"] == "C" and p["overlay"]:
            s.append("- **Overlay beats (add in post):** " + " / ".join(p["overlay"]))
        if v["fmt"] != "C" and dur > CAP:
            s.append(f"- **Length:** ~{dur} s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.")
        s += ["", "**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**", "",
              "```text", first_frame_prompt(c, v), "```", ""]
        s += ["**FULL PROMPT (single clip, Seedance 2.x multi-reference):**", "", "```text", prompt, "```", ""]
        if v["fmt"] == "C":
            s += ["**SHORT PROMPT (image-to-video from the first frame: Kling / Veo / Seedance):**", "",
                  "```text", broll_short(c, v), "```", ""]
        else:
            s += ["**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**", "",
                  "```text", lipsync_prompt(c, v), "```", ""]
            pp = parts_for(c, v, p["script"])
            if pp:
                (t1, b1), (t2, b2) = pp
                pr1, d1 = video_prompt(c, v, t1, b1, part=1, final="")
                pr2, d2 = video_prompt(c, v, t2, b2, part=2)
                s += ["<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>", "",
                      f"Record the voice as two files: `{v['id']}-1.mp3` and `{v['id']}-2.mp3`.",
                      "",
                      f"- **Part 1 audio (~{d1} s):** {t1}",
                      f"- **Part 2 audio (~{d2} s):** {t2}",
                      "",
                      "Join the two clips with a straight jump cut in CapCut or Edits.",
                      "Part 2 frames a touch closer, so the cut looks intentional.",
                      "",
                      "**PART 1 PROMPT:**", "", "```text", pr1, "```", "",
                      "**PART 2 PROMPT:**", "", "```text", pr2, "```", "", "</details>", ""]
        sections.append("\n".join(s))
    out.append("")
    out += sections
    path = os.path.join(ROOT, c, "video-prompts.md")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(out).rstrip() + "\n")
    print(f"wrote {path}")


def print_one(vid, part):
    for c, vids in V.items():
        for v in vids:
            if v["id"] == vid:
                p = parse_plan(c)[vid]
                if v["fmt"] == "C":
                    print(video_prompt(c, v)[0])
                    return
                if part:
                    (t1, b1), (t2, b2) = parts_for(c, v, p["script"])
                    print(video_prompt(c, v, t1, b1, part=1, final="")[0] if part == 1 else video_prompt(c, v, t2, b2, part=2)[0])
                else:
                    print(video_prompt(c, v, p["script"])[0])
                return
    sys.exit(f"unknown video id {vid}")


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "--print":
        part = int(args[3]) if len(args) > 3 and args[2] == "--part" else 0
        print_one(args[1], part)
    else:
        for c in (args or ["rosa", "ray", "lou"]):
            build(c)

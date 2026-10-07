# Video prompts: Ray

> **קובץ הפרומפטים לווידאו של ריי.** כל הפרומפטים באנגלית, מוכנים להדבקה.
>
> הקובץ נבנה אוטומטית מ-`content-plan.md` ומ-`tools/videos.py`, ולכן לא עורכים אותו ידנית.
> כדי לשנות משהו, משנים שם ומריצים `python3 influencers/tools/build_video_prompts.py`.
>
> **הסדר:**
>
> 1. **קול**
>    - בונים את הקול פעם אחת, לפי סעיף 1, ונועלים אותו.
>    - מקליטים כל תסריט כקובץ נפרד בשם ה-ID שלו, למשל `R1.mp3`.
> 2. **מסלול A (הכי טוב, כמו בסרטון): Seedance 2.x עם רפרנסים**
>    - מצרפים @image1 = `sheet.jpg`, @image2 = הלוקיישן, @audio1 = קובץ הקול.
>    - מדביקים את ה-FULL PROMPT.
>    - אם הקול ארוך מ-28 שניות, או שהכלי מוגבל ל-15 שניות: משתמשים ב-TWO-PART.
>    - מייצרים שני קטעים ומחברים ב-jump cut, שזה רגיל לגמרי ברילס.
> 3. **מסלול B (אם אין Seedance עם קול)**
>    - יוצרים FIRST FRAME עם מודל תמונה.
>    - מכניסים למודל lip-sync או avatar (Kling Avatar / Hedra / OmniHuman): פריים ראשון, קובץ קול ו-LIP-SYNC PROMPT.
>    - במסלול הזה אין מגבלת 30 שניות.
> 4. **B-roll שקט:** FIRST FRAME, ואז image-to-video עם ה-SHORT PROMPT.

## 1. Voice (generate once, lock it, reuse it)

Voice description (ElevenLabs Voice Design, or the voice-details box in any voice tool):

```text
[voice: elderly man, early 70s, speaking English only, natural working-class Northern English accent (Yorkshire, warm, not posh, not exaggerated), dry low baritone with slight gravel, slow deadpan delivery with pauses before the punchline, understated, never shouty, a faint chuckle on jokes, says "love" casually; recorded on an old phone in a small kitchen, close and a little boxy]
```

Seed line to audition the voice:

```text
Right. Forty-one notebooks, love. Every penny since nineteen eighty-three... and people still ask me what the secret is. There isn't one. Rich is quiet.
```

Workflow:

- **Lock the voice.** Generate the seed line until it sounds right, then SAVE the voice. Every script uses this same saved voice; never regenerate it.
- **Paste each script exactly as written.** The punctuation is the pacing.
- **Export.** Save as MP3 and name each file after its video ID.
- **Timing estimates.** Most scripts run about 31–35 s. This file gives every talking clip both a single-clip prompt and a two-part version.
  - Use the single-clip prompt when the voice file is ≤ 28 s and your generator allows 30 s.
  - Otherwise, use the two-part version.

## 2. Index

| ID | Video | Format | Location | ~Length |
|---|---|---|---|---|
| Y1 | Red flags your money's got a leak | Talking clip | `locations/1-kitchen-table.jpg` | 35 s |
| Y2 | Ray's Rules, things I've never paid for (part one) | Talking clip | `locations/1-kitchen-table.jpg` | 34 s |
| Y3 | You lot call it loud budgeting | Talking clip | `locations/2-shed.jpg` | 34 s |
| Y4 | How I paid off my house at forty-one | Interview | `locations/1-kitchen-table.jpg` | 33 s |
| Y5 | The Notebook (episode 1, March 1987) | Talking clip | `locations/1-kitchen-table.jpg` | 34 s |
| Y6 | My van is twenty-two years old | Talking clip | `locations/3-van.jpg` | 32 s |
| Y7 | The richest man on my street | Talking clip | `locations/3-van.jpg` | 31 s |
| Y8 | Twenty-five and skint | Talking clip | `locations/1-kitchen-table.jpg` | 33 s |
| Y9 | Ray's Rules (part two) | Talking clip | `locations/1-kitchen-table.jpg` | 30 s |
| Y10 | Sunday Sums (silent b-roll) | Silent b-roll | `locations/1-kitchen-table.jpg` | 10 s |
| Y11 | The Leak Hunt | Talking clip | `locations/1-kitchen-table.jpg` | 34 s |
| Y12 | The Thirty-Day Wait | Talking clip | `locations/2-shed.jpg` | 34 s |
| Y13 | The Notebook (episode 2, Christmas 1991) | Talking clip | `locations/1-kitchen-table.jpg` | 31 s |
| Y14 | Kelly asks what Sunday Sums is | Interview | `locations/1-kitchen-table.jpg` | 34 s |
| Y15 | What I'd tell myself at twenty-seven | Talking clip | `locations/1-kitchen-table.jpg` | 31 s |

## Y1: Red flags your money's got a leak

- **Format:** Talking clip · **~Length:** 35 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y1.mp3`
- **On-screen text (add in post):** "Red flags your money has a leak 🚩"
- **Length:** ~35 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the small Formica kitchen table, forearms on the table, a mug of tea by his hand, an open notebook and old calculator beside it, a level deadpan look into the lens, net curtains behind. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE KNUCKLE-TAP on the wall: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy, a little below his eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. He sits at the small Formica table, a touch off-center; the net curtains and pale green cupboards soft behind him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a plumber's home visit, but for your money.
MOTIVE (fuel): forty-six years of finding leaks people swore weren't there.
GOAL: the viewer realises they have the leak.
OBSTACLE: he refuses to raise his voice, so it has to land deadpan.
TACTIC: he diagnoses calmly, pauses, and lets the viewer convict themselves; eyes check the lens after each flag.
Moment to moment: «Red flags your money's got a leak» — a level look at the lens, almost bored; «From a plumber.» — a tiny nod, as if showing his ID; «that's a horror film» — deadpan, one eyebrow lifts; «Your subscriptions have got subscriptions» — a slow blink; «no, this one's not a flag» — he stops himself and leans in: the register breaks; «Not even roughly.» — a small headshake; «It's just in the wall» — he taps the wall beside the table twice with a knuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the open spiral notebook (illegible pencil columns), the old calculator and a mug of tea on the table (static until the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cosy's wool flattening where the phone leans, steam curling off the mug, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~35 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Red flags your money's got a leak. From a plumber. Red flag. You don't open the bank app on a Friday. You don't want to know. That's not a budget, love, that's a horror film. Red flag. Your subscriptions have got subscriptions. Red flag... no, this one's not a flag, it's the whole flood. You can't say where last month's money went. Not even roughly. A leak you can't see is still a leak. It's just in the wall."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, deadpan, quietly devastating; ~35 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~35 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.6s — «Red flags your money's got a leak…» a level look at the lens, almost bored.
3.6–13.3s — «From a plumber.…» a tiny nod, as if showing his ID.
13.3–15.8s — «that's a horror film…» deadpan, one eyebrow lifts.
15.8–18.9s — «Your subscriptions have got subscriptions…» a slow blink.
18.9–26.1s — «no, this one's not a flag…» he stops himself and leans in: the register breaks.
26.1–30.9s — «Not even roughly.…» a small headshake.
30.9–33.0s — «It's just in the wall…» he taps the wall beside the table twice with a knuckle (THE CENTERPIECE).
33.0–35.0s — FINAL BEAT (audio has ended, lips still): he picks up the mug and sips, eyes on the lens over the rim. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “Red flags your money's got a leak” a level look at the lens, almost bored; on “From a plumber.” a tiny nod, as if showing his ID; on “that's a horror film” deadpan, one eyebrow lifts; on “Your subscriptions have got subscriptions” a slow blink. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y1-1.mp3` and `Y1-2.mp3`.

- **Part 1 audio (~19 s):** Red flags your money's got a leak. From a plumber. Red flag. You don't open the bank app on a Friday. You don't want to know. That's not a budget, love, that's a horror film. Red flag. Your subscriptions have got subscriptions.
- **Part 2 audio (~17 s):** Red flag... no, this one's not a flag, it's the whole flood. You can't say where last month's money went. Not even roughly. A leak you can't see is still a leak. It's just in the wall.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy, a little below his eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. He sits at the small Formica table, a touch off-center; the net curtains and pale green cupboards soft behind him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a plumber's home visit, but for your money.
MOTIVE (fuel): forty-six years of finding leaks people swore weren't there.
GOAL: the viewer realises they have the leak.
OBSTACLE: he refuses to raise his voice, so it has to land deadpan.
TACTIC: he diagnoses calmly, pauses, and lets the viewer convict themselves; eyes check the lens after each flag.
Moment to moment: «Red flags your money's got a leak» — a level look at the lens, almost bored; «From a plumber.» — a tiny nod, as if showing his ID; «that's a horror film» — deadpan, one eyebrow lifts; «Your subscriptions have got subscriptions» — a slow blink.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the open spiral notebook (illegible pencil columns), the old calculator and a mug of tea on the table (static until the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cosy's wool flattening where the phone leans, steam curling off the mug, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Red flags your money's got a leak. From a plumber. Red flag. You don't open the bank app on a Friday. You don't want to know. That's not a budget, love, that's a horror film. Red flag. Your subscriptions have got subscriptions."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, deadpan, quietly devastating; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.6s — «Red flags your money's got a leak…» a level look at the lens, almost bored.
3.6–13.3s — «From a plumber.…» a tiny nod, as if showing his ID.
13.3–15.8s — «that's a horror film…» deadpan, one eyebrow lifts.
15.8–17.9s — «Your subscriptions have got subscriptions…» a slow blink.
17.9–19.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE KNUCKLE-TAP on the wall: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy, a little below his eye level. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. He sits at the small Formica table, a touch off-center; the net curtains and pale green cupboards soft behind him. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a plumber's home visit, but for your money.
MOTIVE (fuel): forty-six years of finding leaks people swore weren't there.
GOAL: the viewer realises they have the leak.
OBSTACLE: he refuses to raise his voice, so it has to land deadpan.
TACTIC: he diagnoses calmly, pauses, and lets the viewer convict themselves; eyes check the lens after each flag.
Moment to moment: «no, this one's not a flag» — he stops himself and leans in: the register breaks; «Not even roughly.» — a small headshake; «It's just in the wall» — he taps the wall beside the table twice with a knuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the open spiral notebook (illegible pencil columns), the old calculator and a mug of tea on the table (static until the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cosy's wool flattening where the phone leans, steam curling off the mug, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Red flag... no, this one's not a flag, it's the whole flood. You can't say where last month's money went. Not even roughly. A leak you can't see is still a leak. It's just in the wall."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, deadpan, quietly devastating; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–8.5s — «no, this one's not a flag…» he stops himself and leans in: the register breaks.
8.5–13.4s — «Not even roughly.…» a small headshake.
13.4–15.4s — «It's just in the wall…» he taps the wall beside the table twice with a knuckle (THE CENTERPIECE).
15.4–17.0s — FINAL BEAT (audio has ended, lips still): he picks up the mug and sips, eyes on the lens over the rim. End.
```

</details>

## Y2: Ray's Rules, things I've never paid for (part one)

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y2.mp3`
- **On-screen text (add in post):** "Things I've never paid for in 71 years"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table holding a mug of tea in both hands, a level deadpan look into the lens, net curtains behind. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP LIFT on the haircut: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the mug held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an inventory of a lifetime of not paying.
MOTIVE (fuel): each item is a small victory he's proud of.
GOAL: make the viewer laugh, then think about the credit card line.
OBSTACLE: the haircut confession embarrasses him slightly.
TACTIC: he counts items on his fingers around the mug, with deadpan pauses.
Moment to moment: «Things I have never paid for» — a sip of tea, then a level look; «A car wash.» — one finger lifts off the mug; «I've got a Sunday» — a slight smile under the moustache; «since the Victorians» — a tiny proud nod; «A haircut. Well...» — he lifts his cap a centimetre and settles it back exactly as it was; sheepish, the register breaks; «With the chicken scissors» — a resigned blink; «Not once.» — serious, eyes steady on the lens; «Part two when Maureen lets me» — a glance off toward the door, Maureen's domain.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea held in both hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cap lifting and resettling over real hair, the mug steaming, jumper wool creasing; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Things I have never paid for in seventy-one years. A car wash. I've got a bucket, and I've got a Sunday. Bottled water. It comes out of the tap, love, it's been coming out of the tap since the Victorians. A haircut. Well... Maureen does it. With the chicken scissors. And interest on a credit card. Not once. If I couldn't pay it off that month, I didn't buy it that month. Part two when Maureen lets me."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, proud, a little sheepish; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.4s — «Things I have never paid for…» a sip of tea, then a level look.
4.4–5.6s — «A car wash.…» one finger lifts off the mug (THE CENTERPIECE).
5.6–15.5s — «I've got a Sunday…» a slight smile under the moustache.
15.5–16.8s — «since the Victorians…» a tiny proud nod.
16.8–19.6s — «A haircut. Well...…» he lifts his cap a centimetre and settles it back exactly as it was; sheepish, the register breaks.
19.6–23.7s — «With the chicken scissors…» a resigned blink.
23.7–30.1s — «Not once.…» serious, eyes steady on the lens.
30.1–32.5s — «Part two when Maureen lets me…» a glance off toward the door, Maureen's domain.
32.5–34.0s — FINAL BEAT (audio has ended, lips still): he sips the tea again. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “Things I have never paid for” a sip of tea, then a level look; on “A car wash.” one finger lifts off the mug; on “I've got a Sunday” a slight smile under the moustache; on “since the Victorians” a tiny proud nod. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y2-1.mp3` and `Y2-2.mp3`.

- **Part 1 audio (~18 s):** Things I have never paid for in seventy-one years. A car wash. I've got a bucket, and I've got a Sunday. Bottled water. It comes out of the tap, love, it's been coming out of the tap since the Victorians.
- **Part 2 audio (~18 s):** A haircut. Well... Maureen does it. With the chicken scissors. And interest on a credit card. Not once. If I couldn't pay it off that month, I didn't buy it that month. Part two when Maureen lets me.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP LIFT on the haircut: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the mug held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an inventory of a lifetime of not paying.
MOTIVE (fuel): each item is a small victory he's proud of.
GOAL: make the viewer laugh, then think about the credit card line.
OBSTACLE: the haircut confession embarrasses him slightly.
TACTIC: he counts items on his fingers around the mug, with deadpan pauses.
Moment to moment: «Things I have never paid for» — a sip of tea, then a level look; «A car wash.» — one finger lifts off the mug; «I've got a Sunday» — a slight smile under the moustache; «since the Victorians» — a tiny proud nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea held in both hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cap lifting and resettling over real hair, the mug steaming, jumper wool creasing; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Things I have never paid for in seventy-one years. A car wash. I've got a bucket, and I've got a Sunday. Bottled water. It comes out of the tap, love, it's been coming out of the tap since the Victorians."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, proud, a little sheepish; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.4s — «Things I have never paid for…» a sip of tea, then a level look.
4.4–5.6s — «A car wash.…» one finger lifts off the mug (THE CENTERPIECE).
5.6–15.5s — «I've got a Sunday…» a slight smile under the moustache.
15.5–16.8s — «since the Victorians…» a tiny proud nod.
16.8–18.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP LIFT on the haircut: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the mug held at chest height. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an inventory of a lifetime of not paying.
MOTIVE (fuel): each item is a small victory he's proud of.
GOAL: make the viewer laugh, then think about the credit card line.
OBSTACLE: the haircut confession embarrasses him slightly.
TACTIC: he counts items on his fingers around the mug, with deadpan pauses.
Moment to moment: «A haircut. Well...» — he lifts his cap a centimetre and settles it back exactly as it was; sheepish, the register breaks; «With the chicken scissors» — a resigned blink; «Not once.» — serious, eyes steady on the lens; «Part two when Maureen lets me» — a glance off toward the door, Maureen's domain.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea held in both hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the cap lifting and resettling over real hair, the mug steaming, jumper wool creasing; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "A haircut. Well... Maureen does it. With the chicken scissors. And interest on a credit card. Not once. If I couldn't pay it off that month, I didn't buy it that month. Part two when Maureen lets me."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, proud, a little sheepish; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–3.1s — «A haircut. Well...…» he lifts his cap a centimetre and settles it back exactly as it was; sheepish, the register breaks (THE CENTERPIECE).
3.1–7.2s — «With the chicken scissors…» a resigned blink.
7.2–13.6s — «Not once.…» serious, eyes steady on the lens.
13.6–16.0s — «Part two when Maureen lets me…» a glance off toward the door, Maureen's domain.
16.0–18.0s — FINAL BEAT (audio has ended, lips still): he sips the tea again. End.
```

</details>

## Y3: You lot call it loud budgeting

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-shed.jpg` · @audio1 `Y3.mp3`
- **On-screen text (add in post):** "Gen Z invented loud budgeting. We called it 'no'."
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers. Ray is sitting on a stool at the shed workbench in an old grey jumper with a darned elbow, a slight squint of disbelief at the lens, jam jars of screws and a pegboard of tools behind. The place: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. Lighting: Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a jam jar of screws on the workbench, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE FLAT 'No.': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits on a stool at the workbench, chest-up, the pegboard of tools soft behind him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an old man unimpressed by a 'new' trend.
MOTIVE (fuel): he's done this since 1983 without a name for it.
GOAL: make 'no' feel easy.
OBSTACLE: staying deadpan while it's funny.
TACTIC: he plays both sides of the conversation; each 'No.' lands like a flat stone.
Moment to moment: «You lot call it loud budgeting» — a slight squint of disbelief; «We called it no.» — a flat, final look; «it's forty quid. No.» — a tiny headshake; «it's got more telly» — a baffled frown; «That's the whole system. No.» — he spreads his hands: that's it; «You don't need a hashtag» — a dry blink; «people stop asking» — a small satisfied nod; the register softens; «Best money I never spent» — the faintest smile under the moustache.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a flat-head screwdriver lying on the bench from frame one (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching the window light, the darned elbow patch visible as he gestures, the bench creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "You lot call it loud budgeting. We called it no. Somebody says, Ray, are you coming to the races, it's forty quid. No. Somebody says, Ray, new telly's out, it's got... I don't know, it's got more telly. No. That's it. That's the whole system. No. You don't need an app for it. You don't need a hashtag. And here's the bit nobody tells you... after a while, people stop asking. Best money I never spent."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, wry; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.2s — «You lot call it loud budgeting…» a slight squint of disbelief.
3.2–8.4s — «We called it no.…» a flat, final look (THE CENTERPIECE).
8.4–14.7s — «it's forty quid. No.…» a tiny headshake.
14.7–17.7s — «it's got more telly…» a baffled frown.
17.7–19.8s — «That's the whole system. No.…» he spreads his hands: that's it.
19.8–28.8s — «You don't need a hashtag…» a dry blink.
28.8–30.1s — «people stop asking…» a small satisfied nod; the register softens.
30.1–32.1s — «Best money I never spent…» the faintest smile under the moustache.
32.1–34.0s — FINAL BEAT (audio has ended, lips still): he picks up the screwdriver and inspects the tip. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “You lot call it loud budgeting” a slight squint of disbelief; on “We called it no.” a flat, final look; on “it's forty quid. No.” a tiny headshake; on “it's got more telly” a baffled frown. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y3-1.mp3` and `Y3-2.mp3`.

- **Part 1 audio (~21 s):** You lot call it loud budgeting. We called it no. Somebody says, Ray, are you coming to the races, it's forty quid. No. Somebody says, Ray, new telly's out, it's got... I don't know, it's got more telly. No. That's it. That's the whole system. No.
- **Part 2 audio (~14 s):** You don't need an app for it. You don't need a hashtag. And here's the bit nobody tells you... after a while, people stop asking. Best money I never spent.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a jam jar of screws on the workbench, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE FLAT 'No.': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits on a stool at the workbench, chest-up, the pegboard of tools soft behind him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an old man unimpressed by a 'new' trend.
MOTIVE (fuel): he's done this since 1983 without a name for it.
GOAL: make 'no' feel easy.
OBSTACLE: staying deadpan while it's funny.
TACTIC: he plays both sides of the conversation; each 'No.' lands like a flat stone.
Moment to moment: «You lot call it loud budgeting» — a slight squint of disbelief; «We called it no.» — a flat, final look; «it's forty quid. No.» — a tiny headshake; «it's got more telly» — a baffled frown; «That's the whole system. No.» — he spreads his hands: that's it.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a flat-head screwdriver lying on the bench from frame one (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching the window light, the darned elbow patch visible as he gestures, the bench creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "You lot call it loud budgeting. We called it no. Somebody says, Ray, are you coming to the races, it's forty quid. No. Somebody says, Ray, new telly's out, it's got... I don't know, it's got more telly. No. That's it. That's the whole system. No."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, wry; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.2s — «You lot call it loud budgeting…» a slight squint of disbelief.
3.2–8.4s — «We called it no.…» a flat, final look (THE CENTERPIECE).
8.4–14.7s — «it's forty quid. No.…» a tiny headshake.
14.7–17.7s — «it's got more telly…» a baffled frown.
17.7–19.8s — «That's the whole system. No.…» he spreads his hands: that's it.
19.8–21.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE FLAT 'No.': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits on a stool at the workbench, chest-up, the pegboard of tools soft behind him. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): an old man unimpressed by a 'new' trend.
MOTIVE (fuel): he's done this since 1983 without a name for it.
GOAL: make 'no' feel easy.
OBSTACLE: staying deadpan while it's funny.
TACTIC: he plays both sides of the conversation; each 'No.' lands like a flat stone.
Moment to moment: «You don't need a hashtag» — a dry blink; «people stop asking» — a small satisfied nod; the register softens; «Best money I never spent» — the faintest smile under the moustache.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a flat-head screwdriver lying on the bench from frame one (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching the window light, the darned elbow patch visible as he gestures, the bench creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "You don't need an app for it. You don't need a hashtag. And here's the bit nobody tells you... after a while, people stop asking. Best money I never spent."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, wry; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–9.3s — «You don't need a hashtag…» a dry blink.
9.3–10.6s — «people stop asking…» a small satisfied nod; the register softens (THE CENTERPIECE).
10.6–12.6s — «Best money I never spent…» the faintest smile under the moustache.
12.6–14.0s — FINAL BEAT (audio has ended, lips still): he picks up the screwdriver and inspects the tip. End.
```

</details>

## Y4: How I paid off my house at forty-one

- **Format:** Interview · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y4.mp3`
- **On-screen text (add in post):** "Grandad, how did you pay off your house at 41?"
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers. Ray is sitting at the kitchen table in a navy V-neck over a blue-and-white checked shirt, looking to the side of the lens at someone off camera, eyes slightly up, remembering. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE CREDIT TO MAUREEN: give it room. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): Kelly asks the big question and he finds the answer boring.
MOTIVE (fuel): he's proud but allergic to showing off.
GOAL: make Kelly understand it was ordinary.
OBSTACLE: the number impresses people, and he dislikes that.
TACTIC: he underplays everything and gives Maureen the credit, eyes on Kelly.
Moment to moment: «Nineteen seventy-nine» — eyes up to the ceiling, remembering; «We did it in seventeen» — a small shrug; «Boring, love.» — a fond look at Kelly; «One car, and it was old» — one finger; «we lived on the old wage» — he taps the table with a fingertip, steady; «Your gran's idea» — he nods toward the door; the register breaks, warm; «I just wrote it down» — a small modest gesture at the notebook; «Boring's underrated» — the faintest smile.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar moving, his fingertip tapping the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Nineteen seventy-nine, we bought it for fourteen and a half thousand. Everybody said twenty-five years. We did it in seventeen. How? Boring, love. It's all boring. One car, and it was old. And every time I got a pay rise, we lived on the old wage and the new bit went on the house. Every time. Your gran's idea, that, not mine... I just wrote it down. Forty-one, the house was ours. Boring's underrated."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: modest, warm, dry; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.8s — «Nineteen seventy-nine…» eyes up to the ceiling, remembering.
6.8–9.3s — «We did it in seventeen…» a small shrug.
9.3–11.5s — «Boring, love.…» a fond look at Kelly.
11.5–17.0s — «One car, and it was old…» one finger.
17.0–23.4s — «we lived on the old wage…» he taps the table with a fingertip, steady.
23.4–26.0s — «Your gran's idea…» he nods toward the door; the register breaks, warm (THE CENTERPIECE).
26.0–30.1s — «I just wrote it down…» a small modest gesture at the notebook.
30.1–30.9s — «Boring's underrated…» the faintest smile.
30.9–33.0s — FINAL BEAT (audio has ended, lips still): he raises his eyebrows at Kelly: next question. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray answers Kelly just off-lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “Nineteen seventy-nine” eyes up to the ceiling, remembering; on “We did it in seventeen” a small shrug; on “Boring, love.” a fond look at Kelly; on “One car, and it was old” one finger. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y4-1.mp3` and `Y4-2.mp3`.

- **Part 1 audio (~13 s):** Nineteen seventy-nine, we bought it for fourteen and a half thousand. Everybody said twenty-five years. We did it in seventeen. How? Boring, love. It's all boring.
- **Part 2 audio (~21 s):** One car, and it was old. And every time I got a pay rise, we lived on the old wage and the new bit went on the house. Every time. Your gran's idea, that, not mine... I just wrote it down. Forty-one, the house was ours. Boring's underrated.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) Keep the energy rising to the cut; the payoff comes in Part 2. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): Kelly asks the big question and he finds the answer boring.
MOTIVE (fuel): he's proud but allergic to showing off.
GOAL: make Kelly understand it was ordinary.
OBSTACLE: the number impresses people, and he dislikes that.
TACTIC: he underplays everything and gives Maureen the credit, eyes on Kelly.
Moment to moment: «Nineteen seventy-nine» — eyes up to the ceiling, remembering; «We did it in seventeen» — a small shrug; «Boring, love.» — a fond look at Kelly.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar moving, his fingertip tapping the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~13 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Nineteen seventy-nine, we bought it for fourteen and a half thousand. Everybody said twenty-five years. We did it in seventeen. How? Boring, love. It's all boring."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: modest, warm, dry; ~13 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~13 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.8s — «Nineteen seventy-nine…» eyes up to the ceiling, remembering.
6.8–9.3s — «We did it in seventeen…» a small shrug.
9.3–11.5s — «Boring, love.…» a fond look at Kelly.
11.5–13.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE CREDIT TO MAUREEN: give it room. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): Kelly asks the big question and he finds the answer boring.
MOTIVE (fuel): he's proud but allergic to showing off.
GOAL: make Kelly understand it was ordinary.
OBSTACLE: the number impresses people, and he dislikes that.
TACTIC: he underplays everything and gives Maureen the credit, eyes on Kelly.
Moment to moment: «One car, and it was old» — one finger; «we lived on the old wage» — he taps the table with a fingertip, steady; «Your gran's idea» — he nods toward the door; the register breaks, warm; «I just wrote it down» — a small modest gesture at the notebook; «Boring's underrated» — the faintest smile.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar moving, his fingertip tapping the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "One car, and it was old. And every time I got a pay rise, we lived on the old wage and the new bit went on the house. Every time. Your gran's idea, that, not mine... I just wrote it down. Forty-one, the house was ours. Boring's underrated."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: modest, warm, dry; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–5.8s — «One car, and it was old…» one finger.
5.8–12.2s — «we lived on the old wage…» he taps the table with a fingertip, steady.
12.2–14.8s — «Your gran's idea…» he nods toward the door; the register breaks, warm (THE CENTERPIECE).
14.8–18.9s — «I just wrote it down…» a small modest gesture at the notebook.
18.9–19.8s — «Boring's underrated…» the faintest smile.
19.8–21.0s — FINAL BEAT (audio has ended, lips still): he raises his eyebrows at Kelly: next question. End.
```

</details>

## Y5: The Notebook (episode 1, March 1987)

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y5.mp3`
- **On-screen text (add in post):** "The Notebook, ep. 1: March 1987"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table holding an old spiral notebook open, a finger on a line, the reading glasses still hooked in his collar, reading, the teapot in the near foreground. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «I've written next to it», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading an old entry like a court record.
MOTIVE (fuel): the notebooks are his life's evidence.
GOAL: the viewer recognises boredom-spending.
OBSTACLE: he still regrets that pasty.
TACTIC: he reads, peers at the lens over the glasses, deadpans.
Moment to moment: «March, nineteen eighty-seven» — he reads from the notebook, a finger on the line; «On a pasty I didn't even want» — a slow look up at the lens; «I've written next to it» — THE SIGNATURE: he unhooks the reading glasses from his collar, puts them on and peers at the page; «hungry? No. Bored.» — he reads it flatly, then looks over the glasses at the lens; «it's boredom» — a small nod; «with your card saved in it» — a raised eyebrow; «I can still taste it» — a faint grimace under the moustache; «It wasn't even a good pasty» — deadpan disgust: the punchline.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: old paper pages lifting slightly, the glasses' arms unfolding, illegible pencil marks; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "March, nineteen eighty-seven. Two pounds forty. On a pasty I didn't even want. I've written next to it, in pencil... hungry? No. Bored. Forty years later, still the best lesson in this whole notebook. So much of what goes out isn't hunger, love, it's boredom. Bored at the till, bored on your phone at eleven at night with your card saved in it. Two pounds forty. I can still taste it. It wasn't even a good pasty."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, rueful; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.3s — «March, nineteen eighty-seven…» he reads from the notebook, a finger on the line.
3.3–6.1s — «On a pasty I didn't even want…» a slow look up at the lens.
6.1–9.1s — «I've written next to it…» THE SIGNATURE: he unhooks the reading glasses from his collar, puts them on and peers at the page (THE CENTERPIECE).
9.1–18.4s — «hungry? No. Bored.…» he reads it flatly, then looks over the glasses at the lens.
18.4–24.0s — «it's boredom…» a small nod.
24.0–27.6s — «with your card saved in it…» a raised eyebrow.
27.6–29.7s — «I can still taste it…» a faint grimace under the moustache.
29.7–32.1s — «It wasn't even a good pasty…» deadpan disgust: the punchline.
32.1–34.0s — FINAL BEAT (audio has ended, lips still): he closes the notebook with a soft pat. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “March, nineteen eighty-seven” he reads from the notebook, a finger on the line; on “On a pasty I didn't even want” a slow look up at the lens; on “I've written next to it” he unhooks the reading glasses from his collar, puts them on and peers at the page; on “hungry? No. Bored.” he reads it flatly, then looks over the glasses at the lens. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y5-1.mp3` and `Y5-2.mp3`.

- **Part 1 audio (~16 s):** March, nineteen eighty-seven. Two pounds forty. On a pasty I didn't even want. I've written next to it, in pencil... hungry? No. Bored. Forty years later, still the best lesson in this whole notebook.
- **Part 2 audio (~19 s):** So much of what goes out isn't hunger, love, it's boredom. Bored at the till, bored on your phone at eleven at night with your card saved in it. Two pounds forty. I can still taste it. It wasn't even a good pasty.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «I've written next to it», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading an old entry like a court record.
MOTIVE (fuel): the notebooks are his life's evidence.
GOAL: the viewer recognises boredom-spending.
OBSTACLE: he still regrets that pasty.
TACTIC: he reads, peers at the lens over the glasses, deadpans.
Moment to moment: «March, nineteen eighty-seven» — he reads from the notebook, a finger on the line; «On a pasty I didn't even want» — a slow look up at the lens; «I've written next to it» — THE SIGNATURE: he unhooks the reading glasses from his collar, puts them on and peers at the page; «hungry? No. Bored.» — he reads it flatly, then looks over the glasses at the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: old paper pages lifting slightly, the glasses' arms unfolding, illegible pencil marks; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "March, nineteen eighty-seven. Two pounds forty. On a pasty I didn't even want. I've written next to it, in pencil... hungry? No. Bored. Forty years later, still the best lesson in this whole notebook."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, rueful; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.3s — «March, nineteen eighty-seven…» he reads from the notebook, a finger on the line.
3.3–6.1s — «On a pasty I didn't even want…» a slow look up at the lens.
6.1–9.1s — «I've written next to it…» THE SIGNATURE: he unhooks the reading glasses from his collar, puts them on and peers at the page (THE CENTERPIECE).
9.1–15.0s — «hungry? No. Bored.…» he reads it flatly, then looks over the glasses at the lens.
15.0–16.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SIGNATURE and the over-the-glasses look: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading an old entry like a court record.
MOTIVE (fuel): the notebooks are his life's evidence.
GOAL: the viewer recognises boredom-spending.
OBSTACLE: he still regrets that pasty.
TACTIC: he reads, peers at the lens over the glasses, deadpans.
Moment to moment: «it's boredom» — a small nod; «with your card saved in it» — a raised eyebrow; «I can still taste it» — a faint grimace under the moustache; «It wasn't even a good pasty» — deadpan disgust: the punchline.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: old paper pages lifting slightly, the glasses' arms unfolding, illegible pencil marks; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "So much of what goes out isn't hunger, love, it's boredom. Bored at the till, bored on your phone at eleven at night with your card saved in it. Two pounds forty. I can still taste it. It wasn't even a good pasty."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, rueful; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–9.3s — «it's boredom…» a small nod.
9.3–13.0s — «with your card saved in it…» a raised eyebrow.
13.0–15.0s — «I can still taste it…» a faint grimace under the moustache.
15.0–17.4s — «It wasn't even a good pasty…» deadpan disgust: the punchline.
17.4–19.0s — FINAL BEAT (audio has ended, lips still): he closes the notebook with a soft pat. End.
```

</details>

## Y6: My van is twenty-two years old

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-van.jpg` · @audio1 `Y6.mp3`
- **On-screen text (add in post):** "My van is 22 years old. Here's why."
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing the navy canvas work jacket zipped up over the cream jumper. Ray is sitting in the driver's seat of the old van's cab, jacket zipped up, one hand on the steering wheel, turned slightly toward the lens, rain on the windscreen. The place: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. Lighting: Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is in a cheap dashboard clip mount, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DASHBOARD PAT: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing the navy canvas work jacket zipped up over the cream jumper) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits in the driver's seat turned slightly toward the phone, one hand on the wheel; the rainy windscreen and the blurred terraced street beside him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending an old van like an old friend.
MOTIVE (fuel): she's paid for and she has never let him down.
GOAL: make 'paid for' feel prettier than new.
OBSTACLE: the heater joke, and an affection he won't admit.
TACTIC: he pats the van and deadpans the numbers.
Moment to moment: «My van is twenty-two years old» — he pats the steering wheel; «When she stops.» — a flat look; «a hundred and ninety-one thousand» — a slow proud nod; «The heater only works on full» — a tiny wince; «I'm warm.» — deadpan; «three hundred a month?» — eyebrows up, incredulous; «She's not pretty. She's paid for.» — he pats the dashboard; the register warms; «the prettiest thing» — the faintest smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: raindrops sliding down the windscreen, the fabric seat compressing, the cab rocking slightly when he shifts; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "My van is twenty-two years old, and people keep asking when I'll get a new one. When she stops. That's when. She's done a hundred and ninety-one thousand miles. The heater only works on full, so... I'm warm. A new one is, what, three hundred a month? For what? To sit in the same traffic in a nicer seat. She's not pretty. She's paid for. That's the prettiest thing a van can be."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, fond; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — the clip mount settles with one tiny shake; the cab is still.
0.6–6.9s — «My van is twenty-two years old…» he pats the steering wheel.
6.9–9.8s — «When she stops.…» a flat look.
9.8–12.2s — «a hundred and ninety-one thousand…» a slow proud nod.
12.2–15.2s — «The heater only works on full…» a tiny wince.
15.2–18.0s — «I'm warm.…» deadpan.
18.0–24.5s — «three hundred a month?…» eyebrows up, incredulous.
24.5–27.4s — «She's not pretty. She's paid for.…» he pats the dashboard; the register warms (THE CENTERPIECE).
27.4–30.3s — «the prettiest thing…» the faintest smile.
30.3–32.0s — FINAL BEAT (audio has ended, lips still): he looks out at the rain. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “My van is twenty-two years old” he pats the steering wheel; on “When she stops.” a flat look; on “a hundred and ninety-one thousand” a slow proud nod; on “The heater only works on full” a tiny wince. Natural blinks, small head movements, eyebrows active on key words, real breathing. Phone in a dashboard clip mount: locked framing with the parked van's very slight movement. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y6-1.mp3` and `Y6-2.mp3`.

- **Part 1 audio (~17 s):** My van is twenty-two years old, and people keep asking when I'll get a new one. When she stops. That's when. She's done a hundred and ninety-one thousand miles. The heater only works on full, so... I'm warm.
- **Part 2 audio (~16 s):** A new one is, what, three hundred a month? For what? To sit in the same traffic in a nicer seat. She's not pretty. She's paid for. That's the prettiest thing a van can be.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is in a cheap dashboard clip mount, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing the navy canvas work jacket zipped up over the cream jumper) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits in the driver's seat turned slightly toward the phone, one hand on the wheel; the rainy windscreen and the blurred terraced street beside him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending an old van like an old friend.
MOTIVE (fuel): she's paid for and she has never let him down.
GOAL: make 'paid for' feel prettier than new.
OBSTACLE: the heater joke, and an affection he won't admit.
TACTIC: he pats the van and deadpans the numbers.
Moment to moment: «My van is twenty-two years old» — he pats the steering wheel; «When she stops.» — a flat look; «a hundred and ninety-one thousand» — a slow proud nod; «The heater only works on full» — a tiny wince; «I'm warm.» — deadpan.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: raindrops sliding down the windscreen, the fabric seat compressing, the cab rocking slightly when he shifts; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "My van is twenty-two years old, and people keep asking when I'll get a new one. When she stops. That's when. She's done a hundred and ninety-one thousand miles. The heater only works on full, so... I'm warm."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, fond; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — the clip mount settles with one tiny shake; the cab is still.
0.6–6.9s — «My van is twenty-two years old…» he pats the steering wheel.
6.9–9.8s — «When she stops.…» a flat look.
9.8–12.2s — «a hundred and ninety-one thousand…» a slow proud nod.
12.2–15.2s — «The heater only works on full…» a tiny wince.
15.2–16.1s — «I'm warm.…» deadpan.
16.1–17.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DASHBOARD PAT: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing the navy canvas work jacket zipped up over the cream jumper) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up. He sits in the driver's seat turned slightly toward the phone, one hand on the wheel; the rainy windscreen and the blurred terraced street beside him. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending an old van like an old friend.
MOTIVE (fuel): she's paid for and she has never let him down.
GOAL: make 'paid for' feel prettier than new.
OBSTACLE: the heater joke, and an affection he won't admit.
TACTIC: he pats the van and deadpans the numbers.
Moment to moment: «three hundred a month?» — eyebrows up, incredulous; «She's not pretty. She's paid for.» — he pats the dashboard; the register warms; «the prettiest thing» — the faintest smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: raindrops sliding down the windscreen, the fabric seat compressing, the cab rocking slightly when he shifts; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "A new one is, what, three hundred a month? For what? To sit in the same traffic in a nicer seat. She's not pretty. She's paid for. That's the prettiest thing a van can be."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, fond; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–8.7s — «three hundred a month?…» eyebrows up, incredulous.
8.7–11.6s — «She's not pretty. She's paid for.…» he pats the dashboard; the register warms (THE CENTERPIECE).
11.6–14.4s — «the prettiest thing…» the faintest smile.
14.4–16.0s — FINAL BEAT (audio has ended, lips still): he looks out at the rain. End.
```

</details>

## Y7: The richest man on my street

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-van.jpg` · @audio1 `Y7.mp3`
- **On-screen text (add in post):** "The richest man on my street"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting in the driver's seat, navy work jacket open over the cream jumper, a level deadpan look into the lens, rain on the windscreen. The place: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. Lighting: Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is in a cheap dashboard clip mount, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP TOUCH and the final look: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he sits in the driver's seat, turned toward the phone.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): describing a mysterious neighbour who is obviously himself.
MOTIVE (fuel): the quiet pride of a man nobody would guess.
GOAL: the reveal lands without him saying it.
OBSTACLE: he mustn't smirk too early.
TACTIC: he stays deadpan and pauses; one sideways glance at the end.
Moment to moment: «The richest man on my street» — a level look into the lens; «Same cap since» — he touches the brim of his cap: a tiny tell; «hides them from him» — a slight eyebrow; «House paid off at forty-one» — a small nod; «Nobody on the street knows» — a glance out of the side window at the street; «a face like a wet weekend» — deadpan; «I'm not saying who it is» — he holds back a smile; «Rich is quiet.» — a quiet steady look, then the faintest smile under the moustache.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: rain sliding, the cab's micro-movement, the cap brim; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "The richest man on my street drives a two thousand and four van. Same cap since, ooh, nineteen ninety-something. His wife buys the nice biscuits and hides them from him. No car payment. House paid off at forty-one. Nobody on the street knows. Fella at number twelve has a new car every three years and a face like a wet weekend. Now then... I'm not saying who it is. Rich is quiet."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, sly, quiet; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — the clip mount settles with one tiny shake; the cab is still.
0.6–5.7s — «The richest man on my street…» a level look into the lens (THE CENTERPIECE).
5.7–10.9s — «Same cap since…» he touches the brim of his cap: a tiny tell.
10.9–13.8s — «hides them from him…» a slight eyebrow.
13.8–15.8s — «House paid off at forty-one…» a small nod.
15.8–22.5s — «Nobody on the street knows…» a glance out of the side window at the street.
22.5–26.0s — «a face like a wet weekend…» deadpan.
26.0–28.4s — «I'm not saying who it is…» he holds back a smile.
28.4–29.7s — «Rich is quiet.…» a quiet steady look, then the faintest smile under the moustache.
29.7–31.0s — FINAL BEAT (audio has ended, lips still): he settles the cap brim and looks out at the rain. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “The richest man on my street” a level look into the lens; on “Same cap since” he touches the brim of his cap: a tiny tell; on “hides them from him” a slight eyebrow; on “House paid off at forty-one” a small nod. Natural blinks, small head movements, eyebrows active on key words, real breathing. Phone in a dashboard clip mount: locked framing with the parked van's very slight movement. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y7-1.mp3` and `Y7-2.mp3`.

- **Part 1 audio (~19 s):** The richest man on my street drives a two thousand and four van. Same cap since, ooh, nineteen ninety-something. His wife buys the nice biscuits and hides them from him. No car payment. House paid off at forty-one. Nobody on the street knows.
- **Part 2 audio (~14 s):** Fella at number twelve has a new car every three years and a face like a wet weekend. Now then... I'm not saying who it is. Rich is quiet.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is in a cheap dashboard clip mount, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP TOUCH and the final look: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he sits in the driver's seat, turned toward the phone.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): describing a mysterious neighbour who is obviously himself.
MOTIVE (fuel): the quiet pride of a man nobody would guess.
GOAL: the reveal lands without him saying it.
OBSTACLE: he mustn't smirk too early.
TACTIC: he stays deadpan and pauses; one sideways glance at the end.
Moment to moment: «The richest man on my street» — a level look into the lens; «Same cap since» — he touches the brim of his cap: a tiny tell; «hides them from him» — a slight eyebrow; «House paid off at forty-one» — a small nod; «Nobody on the street knows» — a glance out of the side window at the street.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: rain sliding, the cab's micro-movement, the cap brim; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "The richest man on my street drives a two thousand and four van. Same cap since, ooh, nineteen ninety-something. His wife buys the nice biscuits and hides them from him. No car payment. House paid off at forty-one. Nobody on the street knows."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, sly, quiet; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — the clip mount settles with one tiny shake; the cab is still.
0.6–5.7s — «The richest man on my street…» a level look into the lens (THE CENTERPIECE).
5.7–10.9s — «Same cap since…» he touches the brim of his cap: a tiny tell.
10.9–13.8s — «hides them from him…» a slight eyebrow.
13.8–15.8s — «House paid off at forty-one…» a small nod.
15.8–17.8s — «Nobody on the street knows…» a glance out of the side window at the street.
17.8–19.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CAP TOUCH and the final look: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount on the dashboard in front of the passenger seat, angled at the driver's seat. Locked framing, but it carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he sits in the driver's seat, turned toward the phone. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): describing a mysterious neighbour who is obviously himself.
MOTIVE (fuel): the quiet pride of a man nobody would guess.
GOAL: the reveal lands without him saying it.
OBSTACLE: he mustn't smirk too early.
TACTIC: he stays deadpan and pauses; one sideways glance at the end.
Moment to moment: «a face like a wet weekend» — deadpan; «I'm not saying who it is» — he holds back a smile; «Rich is quiet.» — a quiet steady look, then the faintest smile under the moustache.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: rain sliding, the cab's micro-movement, the cap brim; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Fella at number twelve has a new car every three years and a face like a wet weekend. Now then... I'm not saying who it is. Rich is quiet."
- Sound design: rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, sly, quiet; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–8.4s — «a face like a wet weekend…» deadpan.
8.4–10.9s — «I'm not saying who it is…» he holds back a smile.
10.9–12.1s — «Rich is quiet.…» a quiet steady look, then the faintest smile under the moustache (THE CENTERPIECE).
12.1–14.0s — FINAL BEAT (audio has ended, lips still): he settles the cap brim and looks out at the rain. End.
```

</details>

## Y8: Twenty-five and skint

- **Format:** Talking clip · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y8.mp3`
- **On-screen text (add in post):** "If you're 25 and broke, listen to an old man"
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table, leaning slightly toward the lens with a kind level look, a round biscuit tin in the near foreground. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a round biscuit tin on the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CONFESSION 'I was skint': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a round biscuit tin on the kitchen table. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he leans slightly toward the lens over the table; the tin's rim soft in the near foreground.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): talking to his younger self in the viewer.
MOTIVE (fuel): January 1983 still stings.
GOAL: make one viewer buy a notebook and look.
OBSTACLE: the shame he's admitting to.
TACTIC: plain-spoken, leaning in, eyes steady on the lens.
Moment to moment: «If you're twenty-five and skint» — he leans in slightly, kind; «I was skint.» — a small nod: a confession; «A plumber!» — a dry disbelieving look, the faint chuckle; «So I bought a notebook.» — finger and thumb show something tiny; «I just looked» — palms flat on the table; «They want the plan» — a small headshake; «Look first, love.» — softer, eyes kind; «Then it stops hurting» — a slow nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the biscuit tin lid catching the window light, his palms on the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "If you're twenty-five and skint, listen to an old man for thirty seconds. I was skint. January nineteen eighty-three, we couldn't pay the gas bill, and I was a plumber. A plumber! So I bought a notebook. Ten pence. Wrote down every penny for one month, and I didn't change a thing, I just looked. That's the bit people skip. They want the plan before they've looked. Look first, love. It'll hurt. Then it stops hurting."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: plain, kind, honest; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.9s — «If you're twenty-five and skint…» he leans in slightly, kind.
5.9–11.8s — «I was skint.…» a small nod: a confession (THE CENTERPIECE).
11.8–13.6s — «A plumber!…» a dry disbelieving look, the faint chuckle.
13.6–21.5s — «So I bought a notebook.…» finger and thumb show something tiny.
21.5–24.8s — «I just looked…» palms flat on the table.
24.8–27.6s — «They want the plan…» a small headshake.
27.6–29.8s — «Look first, love.…» softer, eyes kind.
29.8–31.4s — «Then it stops hurting…» a slow nod.
31.4–33.0s — FINAL BEAT (audio has ended, lips still): he sits back, arms folded. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “If you're twenty-five and skint” he leans in slightly, kind; on “I was skint.” a small nod: a confession; on “A plumber!” a dry disbelieving look, the faint chuckle; on “So I bought a notebook.” finger and thumb show something tiny. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y8-1.mp3` and `Y8-2.mp3`.

- **Part 1 audio (~15 s):** If you're twenty-five and skint, listen to an old man for thirty seconds. I was skint. January nineteen eighty-three, we couldn't pay the gas bill, and I was a plumber. A plumber!
- **Part 2 audio (~20 s):** So I bought a notebook. Ten pence. Wrote down every penny for one month, and I didn't change a thing, I just looked. That's the bit people skip. They want the plan before they've looked. Look first, love. It'll hurt. Then it stops hurting.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a round biscuit tin on the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CONFESSION 'I was skint': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a round biscuit tin on the kitchen table. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he leans slightly toward the lens over the table; the tin's rim soft in the near foreground.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): talking to his younger self in the viewer.
MOTIVE (fuel): January 1983 still stings.
GOAL: make one viewer buy a notebook and look.
OBSTACLE: the shame he's admitting to.
TACTIC: plain-spoken, leaning in, eyes steady on the lens.
Moment to moment: «If you're twenty-five and skint» — he leans in slightly, kind; «I was skint.» — a small nod: a confession; «A plumber!» — a dry disbelieving look, the faint chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the biscuit tin lid catching the window light, his palms on the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~15 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "If you're twenty-five and skint, listen to an old man for thirty seconds. I was skint. January nineteen eighty-three, we couldn't pay the gas bill, and I was a plumber. A plumber!"
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: plain, kind, honest; ~15 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~15 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.9s — «If you're twenty-five and skint…» he leans in slightly, kind.
5.9–11.8s — «I was skint.…» a small nod: a confession (THE CENTERPIECE).
11.8–13.6s — «A plumber!…» a dry disbelieving look, the faint chuckle.
13.6–15.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CONFESSION 'I was skint': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a round biscuit tin on the kitchen table. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, he leans slightly toward the lens over the table; the tin's rim soft in the near foreground. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): talking to his younger self in the viewer.
MOTIVE (fuel): January 1983 still stings.
GOAL: make one viewer buy a notebook and look.
OBSTACLE: the shame he's admitting to.
TACTIC: plain-spoken, leaning in, eyes steady on the lens.
Moment to moment: «So I bought a notebook.» — finger and thumb show something tiny; «I just looked» — palms flat on the table; «They want the plan» — a small headshake; «Look first, love.» — softer, eyes kind; «Then it stops hurting» — a slow nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the biscuit tin lid catching the window light, his palms on the Formica; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~20 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "So I bought a notebook. Ten pence. Wrote down every penny for one month, and I didn't change a thing, I just looked. That's the bit people skip. They want the plan before they've looked. Look first, love. It'll hurt. Then it stops hurting."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: plain, kind, honest; ~20 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~20 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–8.2s — «So I bought a notebook.…» finger and thumb show something tiny.
8.2–11.5s — «I just looked…» palms flat on the table.
11.5–14.3s — «They want the plan…» a small headshake.
14.3–16.5s — «Look first, love.…» softer, eyes kind.
16.5–18.1s — «Then it stops hurting…» a slow nod.
18.1–20.0s — FINAL BEAT (audio has ended, lips still): he sits back, arms folded. End.
```

</details>

## Y9: Ray's Rules (part two)

- **Format:** Talking clip · **~Length:** 30 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y9.mp3`
- **On-screen text (add in post):** "Things I've never paid for, part 2"

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers. Ray is sitting at the kitchen table in a navy V-neck over a checked shirt, glancing to the side toward a door, a mug of tea by his hand. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CHEST TAP 'I am the warranty': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, Maureen-approved.
MOTIVE (fuel): he loves the bit.
GOAL: land 'I am the warranty'.
OBSTACLE: the gym item draws arguments.
TACTIC: he re-enacts the shop conversation, deadpan.
Moment to moment: «Maureen says I'm allowed» — a glance off toward the door; «An extended warranty» — one finger; «lovely lad» — a generous nod; «I am the warranty» — he taps his own chest twice: the punchline, deadpan; «people argue with me about» — a weary blink; «a gym.» — eyebrows up; «I've got stairs» — he points up at the ceiling; «wants the shed moved again» — a resigned look toward the window.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea on the table by his hand (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar, the mug steaming; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~30 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Things I've never paid for, part two. Maureen says I'm allowed. An extended warranty. Young lad in the shop, lovely lad, he says, it covers you for three years. I says, son, I'm a plumber, I am the warranty. And this one people argue with me about... a gym. Eighty-odd quid a month. I've got stairs, and I've got a wife who wants the shed moved again."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, playful; ~30 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~30 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.3s — «Maureen says I'm allowed…» a glance off toward the door.
5.3–8.5s — «An extended warranty…» one finger.
8.5–14.7s — «lovely lad…» a generous nod.
14.7–17.6s — «I am the warranty…» he taps his own chest twice: the punchline, deadpan (THE CENTERPIECE).
17.6–19.8s — «people argue with me about…» a weary blink.
19.8–22.3s — «a gym.…» eyebrows up.
22.3–25.8s — «I've got stairs…» he points up at the ceiling.
25.8–27.8s — «wants the shed moved again…» a resigned look toward the window.
27.8–30.0s — FINAL BEAT (audio has ended, lips still): he lifts the mug and sips. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “Maureen says I'm allowed” a glance off toward the door; on “An extended warranty” one finger; on “lovely lad” a generous nod; on “I am the warranty” he taps his own chest twice: the punchline, deadpan. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y9-1.mp3` and `Y9-2.mp3`.

- **Part 1 audio (~17 s):** Things I've never paid for, part two. Maureen says I'm allowed. An extended warranty. Young lad in the shop, lovely lad, he says, it covers you for three years. I says, son, I'm a plumber, I am the warranty.
- **Part 2 audio (~13 s):** And this one people argue with me about... a gym. Eighty-odd quid a month. I've got stairs, and I've got a wife who wants the shed moved again.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CHEST TAP 'I am the warranty': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, Maureen-approved.
MOTIVE (fuel): he loves the bit.
GOAL: land 'I am the warranty'.
OBSTACLE: the gym item draws arguments.
TACTIC: he re-enacts the shop conversation, deadpan.
Moment to moment: «Maureen says I'm allowed» — a glance off toward the door; «An extended warranty» — one finger; «lovely lad» — a generous nod; «I am the warranty» — he taps his own chest twice: the punchline, deadpan.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea on the table by his hand (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar, the mug steaming; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Things I've never paid for, part two. Maureen says I'm allowed. An extended warranty. Young lad in the shop, lovely lad, he says, it covers you for three years. I says, son, I'm a plumber, I am the warranty."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, playful; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.3s — «Maureen says I'm allowed…» a glance off toward the door.
5.3–8.5s — «An extended warranty…» one finger.
8.5–14.7s — «lovely lad…» a generous nod.
14.7–16.4s — «I am the warranty…» he taps his own chest twice: the punchline, deadpan (THE CENTERPIECE).
16.4–17.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CHEST TAP 'I am the warranty': give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, Maureen-approved.
MOTIVE (fuel): he loves the bit.
GOAL: land 'I am the warranty'.
OBSTACLE: the gym item draws arguments.
TACTIC: he re-enacts the shop conversation, deadpan.
Moment to moment: «people argue with me about» — a weary blink; «a gym.» — eyebrows up; «I've got stairs» — he points up at the ceiling; «wants the shed moved again» — a resigned look toward the window.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea on the table by his hand (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the checked shirt collar, the mug steaming; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~13 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "And this one people argue with me about... a gym. Eighty-odd quid a month. I've got stairs, and I've got a wife who wants the shed moved again."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: deadpan, playful; ~13 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~13 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–3.7s — «people argue with me about…» a weary blink.
3.7–6.2s — «a gym.…» eyebrows up.
6.2–9.7s — «I've got stairs…» he points up at the ceiling.
9.7–11.7s — «wants the shed moved again…» a resigned look toward the window.
11.7–13.0s — FINAL BEAT (audio has ended, lips still): he lifts the mug and sips. End.
```

</details>

## Y10: Sunday Sums (silent b-roll)

- **Format:** Silent b-roll · **~Length:** 10 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg`
- **On-screen text (add in post):** "(4 beats of about 2.5 s, added in post):"
- **Overlay beats (add in post):** Every Sunday since 1983 / 15 minutes, a brew and the notebook. / Last week's money. Then next week's. / Rich is quiet.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers. Ray is sitting at the kitchen table on a late Sunday afternoon at a 45-degree angle, hands resting on a closed spiral notebook with a pencil beside it, a brown teapot and a mug, the reading glasses hooked in his collar, the upper third calm net curtains and pale green cupboards. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) NO dialogue anywhere: Ray never speaks or mouths words; ambient sound only. 2) The phone is casually PROPPED against the biscuit tin at a 45-degree side angle, NOT a tripod: living UGC framing. 3) TEXT-SAFE FRAME: the upper third of the frame stays visually calm; Ray lives in the lower two-thirds. 4) ONE micro-action with a small arc (he unhooks the reading glasses from his collar...), unhurried; loop-friendly ending. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the biscuit tin at a 45-degree side angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. He sits at the table in the LOWER two-thirds of the frame; the upper third is the calm net curtains and cupboards (text-safe).

Performance (one micro-action with a small arc, always believable): the weekly ritual, unhurried. Ray unhooks the reading glasses from his collar, puts them on, opens the notebook to a fresh page, picks up the pencil and pauses with it just above the page. Unhurried and real; his eyes stay engaged with the task, never on the lens; natural blinks; never staged, never stiff, never puppet-like.

PROPS: a closed spiral notebook, a pencil, the brown teapot and a mug on the table from frame one; the reading glasses hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: glasses' arms unfolding, notebook pages turning with a soft paper sound, steam from the mug; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~10 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio: NO dialogue anywhere — ambient SFX only: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, all quiet and natural. Music: none. Fully original.

Mood & tempo: calm, ritual, Sunday-quiet; ~10 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, 10 s, 9:16, no subtitles, loop-friendly):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.7s — he unhooks the reading glasses from his collar.
2.7–4.7s — puts them on.
4.7–6.6s — opens the notebook to a fresh page.
6.6–8.5s — picks up the pencil and pauses with it just above the page.
8.5–10.0s — he settles into the loop pose: the last pose (pencil poised above the page, eyes down) sits close to the first pose (hands on the closed notebook, eyes down). End.
```

**SHORT PROMPT (image-to-video from the first frame: Kling / Veo / Seedance):**

```text
Silent phone video, 9:16, about 10 seconds, starting from this first frame. Ray unhooks the reading glasses from his collar, puts them on, opens the notebook to a fresh page, picks up the pencil and pauses with it just above the page. Unhurried and real, eyes on the task, never at the camera. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing, never a tripod look. Keep the upper third calm and empty for text added later. Relit to the scene with real contact shadows; identity, outfit and anchors exactly as in the frame. Ambient sound only: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. No speech, no music, no text, no logos. Ends close to the first pose so it loops.
```

## Y11: The Leak Hunt

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y11.mp3`
- **On-screen text (add in post):** "Find your money leak in one sitting"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table with an open notebook and a pencil in front of him, the reading glasses hooked in his collar, tapping the pencil, a level look at the lens. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «would I buy this again today?», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the open notebook on the table in front of him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teaching the one-sitting method like training an apprentice.
MOTIVE (fuel): it's how he has found every leak for forty-six years.
GOAL: make the viewer book the evening.
OBSTACLE: it sounds like homework; he has to make it sound like common sense.
TACTIC: he demonstrates with the pencil on the notebook and checks the lens after the key question.
Moment to moment: «When I find a leak» — he taps the pencil on the table; «I turn the water off» — a stopcock-turning motion with his hand; «Same with money.» — a level look; «One sitting, kettle on.» — a nod toward the kettle off-frame; «would I buy this again today?» — THE SIGNATURE: the glasses go on; he peers at the lens over them; «Not, do I need it.» — a small headshake; «a few you forgot you had» — the faint chuckle; «It's in my bio» — a modest nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an open spiral notebook and a pencil on the table from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the pencil tapping, paper pages lifting, the glasses' arms unfolding; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "When I find a leak in a house, I don't start fixing. I turn the water off and I look. Same with money. One sitting, kettle on. Every statement, every little drip. And next to each one, one question... would I buy this again today? Not, do I need it. Would I buy it again. You'll find a few you forgot you had. Everybody does. I put the whole sitting in a workbook. It's in my bio."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, practical, kind; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.5s — «When I find a leak…» he taps the pencil on the table.
5.5–8.7s — «I turn the water off…» a stopcock-turning motion with his hand (THE CENTERPIECE).
8.7–10.0s — «Same with money.…» a level look.
10.0–16.7s — «One sitting, kettle on.…» a nod toward the kettle off-frame.
16.7–19.1s — «would I buy this again today?…» THE SIGNATURE: the glasses go on; he peers at the lens over them.
19.1–24.0s — «Not, do I need it.…» a small headshake.
24.0–30.5s — «a few you forgot you had…» the faint chuckle.
30.5–32.1s — «It's in my bio…» a modest nod.
32.1–34.0s — FINAL BEAT (audio has ended, lips still): he writes one small tick on the page. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “When I find a leak” he taps the pencil on the table; on “I turn the water off” a stopcock-turning motion with his hand; on “Same with money.” a level look; on “would I buy this again today?” the glasses go on; he peers at the lens over them. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y11-1.mp3` and `Y11-2.mp3`.

- **Part 1 audio (~11 s):** When I find a leak in a house, I don't start fixing. I turn the water off and I look. Same with money.
- **Part 2 audio (~24 s):** One sitting, kettle on. Every statement, every little drip. And next to each one, one question... would I buy this again today? Not, do I need it. Would I buy it again. You'll find a few you forgot you had. Everybody does. I put the whole sitting in a workbook. It's in my bio.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE QUESTION with the over-the-glasses look: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the open notebook on the table in front of him.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teaching the one-sitting method like training an apprentice.
MOTIVE (fuel): it's how he has found every leak for forty-six years.
GOAL: make the viewer book the evening.
OBSTACLE: it sounds like homework; he has to make it sound like common sense.
TACTIC: he demonstrates with the pencil on the notebook and checks the lens after the key question.
Moment to moment: «When I find a leak» — he taps the pencil on the table; «I turn the water off» — a stopcock-turning motion with his hand; «Same with money.» — a level look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an open spiral notebook and a pencil on the table from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the pencil tapping, paper pages lifting, the glasses' arms unfolding; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "When I find a leak in a house, I don't start fixing. I turn the water off and I look. Same with money."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, practical, kind; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.5s — «When I find a leak…» he taps the pencil on the table.
5.5–8.7s — «I turn the water off…» a stopcock-turning motion with his hand (THE CENTERPIECE).
8.7–10.0s — «Same with money.…» a level look.
10.0–11.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «would I buy this again today?», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the open notebook on the table in front of him. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teaching the one-sitting method like training an apprentice.
MOTIVE (fuel): it's how he has found every leak for forty-six years.
GOAL: make the viewer book the evening.
OBSTACLE: it sounds like homework; he has to make it sound like common sense.
TACTIC: he demonstrates with the pencil on the notebook and checks the lens after the key question.
Moment to moment: «One sitting, kettle on.» — a nod toward the kettle off-frame; «would I buy this again today?» — THE SIGNATURE: the glasses go on; he peers at the lens over them; «Not, do I need it.» — a small headshake; «a few you forgot you had» — the faint chuckle; «It's in my bio» — a modest nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an open spiral notebook and a pencil on the table from frame one (handwriting illegible); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the pencil tapping, paper pages lifting, the glasses' arms unfolding; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~24 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "One sitting, kettle on. Every statement, every little drip. And next to each one, one question... would I buy this again today? Not, do I need it. Would I buy it again. You'll find a few you forgot you had. Everybody does. I put the whole sitting in a workbook. It's in my bio."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, practical, kind; ~24 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~24 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–7.0s — «One sitting, kettle on.…» a nod toward the kettle off-frame.
7.0–9.4s — «would I buy this again today?…» THE SIGNATURE: the glasses go on; he peers at the lens over them (THE CENTERPIECE).
9.4–14.3s — «Not, do I need it.…» a small headshake.
14.3–20.8s — «a few you forgot you had…» the faint chuckle.
20.8–22.4s — «It's in my bio…» a modest nod.
22.4–24.0s — FINAL BEAT (audio has ended, lips still): he writes one small tick on the page. End.
```

</details>

## Y12: The Thirty-Day Wait

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-shed.jpg` · @audio1 `Y12.mp3`
- **On-screen text (add in post):** "Ray's Rule: the 30-day wait"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers. Ray is sitting on a stool at the shed workbench in an old grey jumper, an old metal bucket by his boot, a level look at the lens. The place: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. Lighting: Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a jam jar of screws on the workbench, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE PRESSURE WASHER confession: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on a stool at the workbench; an old metal bucket by his boot at the bottom of frame.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining a rule he invented and is proud of.
MOTIVE (fuel): the pressure-washer saga.
GOAL: make the thirty-day list sound like freedom, not denial.
OBSTACLE: the pressure washer embarrassment.
TACTIC: he points to the door, counts days on his fingers, and ends deadpan.
Moment to moment: «Ray's rule.» — a level look; «goes on a list» — he mimes writing in the air; «on the shed door» — he points off-frame to the door; «no guilt, no fuss» — a flat-hand smoothing gesture; «day nine, day ten» — counting on his fingers, then trailing off; «a pressure washer» — eyebrows up, a guilty look; «Still got a bucket.» — deadpan, then the faint chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old metal bucket on the floor by his boot from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching window light, rain on the roof, the stool creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Ray's rule. Anything over fifty quid that I want but don't need goes on a list. Pinned up in here, on the shed door. And it waits thirty days. If I still want it after thirty days, I buy it, no guilt, no fuss. Most of it, though... day nine, day ten, I can't remember why I wanted it. There was a pressure washer on there in two thousand and twelve. Still haven't got one. Still got a bucket."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, amused; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.5s — «Ray's rule.…» a level look.
5.5–8.7s — «goes on a list…» he mimes writing in the air.
8.7–16.7s — «on the shed door…» he points off-frame to the door.
16.7–20.2s — «no guilt, no fuss…» a flat-hand smoothing gesture.
20.2–25.3s — «day nine, day ten…» counting on his fingers, then trailing off.
25.3–30.9s — «a pressure washer…» eyebrows up, a guilty look (THE CENTERPIECE).
30.9–32.6s — «Still got a bucket.…» deadpan, then the faint chuckle.
32.6–34.0s — FINAL BEAT (audio has ended, lips still): he glances down at the bucket by his boot. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “Ray's rule.” a level look; on “goes on a list” he mimes writing in the air; on “on the shed door” he points off-frame to the door; on “no guilt, no fuss” a flat-hand smoothing gesture. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y12-1.mp3` and `Y12-2.mp3`.

- **Part 1 audio (~19 s):** Ray's rule. Anything over fifty quid that I want but don't need goes on a list. Pinned up in here, on the shed door. And it waits thirty days. If I still want it after thirty days, I buy it, no guilt, no fuss.
- **Part 2 audio (~16 s):** Most of it, though... day nine, day ten, I can't remember why I wanted it. There was a pressure washer on there in two thousand and twelve. Still haven't got one. Still got a bucket.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a jam jar of screws on the workbench, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on a stool at the workbench; an old metal bucket by his boot at the bottom of frame.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining a rule he invented and is proud of.
MOTIVE (fuel): the pressure-washer saga.
GOAL: make the thirty-day list sound like freedom, not denial.
OBSTACLE: the pressure washer embarrassment.
TACTIC: he points to the door, counts days on his fingers, and ends deadpan.
Moment to moment: «Ray's rule.» — a level look; «goes on a list» — he mimes writing in the air; «on the shed door» — he points off-frame to the door; «no guilt, no fuss» — a flat-hand smoothing gesture.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old metal bucket on the floor by his boot from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching window light, rain on the roof, the stool creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Ray's rule. Anything over fifty quid that I want but don't need goes on a list. Pinned up in here, on the shed door. And it waits thirty days. If I still want it after thirty days, I buy it, no guilt, no fuss."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, amused; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.5s — «Ray's rule.…» a level look.
5.5–8.7s — «goes on a list…» he mimes writing in the air.
8.7–16.7s — «on the shed door…» he points off-frame to the door.
16.7–18.3s — «no guilt, no fuss…» a flat-hand smoothing gesture.
18.3–19.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE PRESSURE WASHER confession: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jam jar of screws on the workbench. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on a stool at the workbench; an old metal bucket by his boot at the bottom of frame. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining a rule he invented and is proud of.
MOTIVE (fuel): the pressure-washer saga.
GOAL: make the thirty-day list sound like freedom, not denial.
OBSTACLE: the pressure washer embarrassment.
TACTIC: he points to the door, counts days on his fingers, and ends deadpan.
Moment to moment: «day nine, day ten» — counting on his fingers, then trailing off; «a pressure washer» — eyebrows up, a guilty look; «Still got a bucket.» — deadpan, then the faint chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old metal bucket on the floor by his boot from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the jam jars catching window light, rain on the roof, the stool creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Most of it, though... day nine, day ten, I can't remember why I wanted it. There was a pressure washer on there in two thousand and twelve. Still haven't got one. Still got a bucket."
- Sound design: light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: dry, amused; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–7.3s — «day nine, day ten…» counting on his fingers, then trailing off.
7.3–12.9s — «a pressure washer…» eyebrows up, a guilty look (THE CENTERPIECE).
12.9–14.5s — «Still got a bucket.…» deadpan, then the faint chuckle.
14.5–16.0s — FINAL BEAT (audio has ended, lips still): he glances down at the bucket by his boot. End.
```

</details>

## Y13: The Notebook (episode 2, Christmas 1991)

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y13.mp3`
- **On-screen text (add in post):** "The Notebook, ep. 2: Christmas 1991"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table in the evening under the warm ceiling bulb, holding an open spiral notebook, the reading glasses in his collar, a small fond smile. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «I've drawn a little star», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading two Christmases side by side.
MOTIVE (fuel): Gary's bike was a proud moment; the year before was a shame.
GOAL: the viewer feels the difference between saved-for and borrowed.
OBSTACLE: the emotion about Gary that he won't show.
TACTIC: he reads flatly, shows the star, and lets the contrast land quietly.
Moment to moment: «December, nineteen ninety-one» — he reads from the page; «Bike for our Gary» — a small fond smile under the moustache; «ten pound a month» — he taps the page; «I've drawn a little star» — THE SIGNATURE: the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible); «till it fell to bits» — a warm chuckle; «on the never-never» — his face hardens slightly: the register breaks; «March!» — dry disbelief; «Same boy. Different January.» — a quiet steady look over the glasses.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible, one tiny pencil star doodle in the margin); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: pages turning, the warm bulb glinting on the glasses; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "December, nineteen ninety-one. Bike for our Gary. Sixty-two pounds. Written down, saved for since June, ten pound a month in an envelope. Look, I've drawn a little star next to it. He rode that bike till it fell to bits. Now, the year before, I'd done Christmas on the never-never, and I was still paying for it in March. March! No star next to that one. Same boy. Different January."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond, quiet, wise; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.1s — «December, nineteen ninety-one…» he reads from the page.
2.1–6.9s — «Bike for our Gary…» a small fond smile under the moustache.
6.9–10.1s — «ten pound a month…» he taps the page.
10.1–14.8s — «I've drawn a little star…» THE SIGNATURE: the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible) (THE CENTERPIECE).
14.8–19.6s — «till it fell to bits…» a warm chuckle.
19.6–23.9s — «on the never-never…» his face hardens slightly: the register breaks.
23.9–27.2s — «March!…» dry disbelief.
27.2–29.0s — «Same boy. Different January.…» a quiet steady look over the glasses.
29.0–31.0s — FINAL BEAT (audio has ended, lips still): he closes the notebook gently. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “December, nineteen ninety-one” he reads from the page; on “Bike for our Gary” a small fond smile under the moustache; on “ten pound a month” he taps the page; on “I've drawn a little star” the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible). Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y13-1.mp3` and `Y13-2.mp3`.

- **Part 1 audio (~18 s):** December, nineteen ninety-one. Bike for our Gary. Sixty-two pounds. Written down, saved for since June, ten pound a month in an envelope. Look, I've drawn a little star next to it. He rode that bike till it fell to bits.
- **Part 2 audio (~14 s):** Now, the year before, I'd done Christmas on the never-never, and I was still paying for it in March. March! No star next to that one. Same boy. Different January.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «I've drawn a little star», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading two Christmases side by side.
MOTIVE (fuel): Gary's bike was a proud moment; the year before was a shame.
GOAL: the viewer feels the difference between saved-for and borrowed.
OBSTACLE: the emotion about Gary that he won't show.
TACTIC: he reads flatly, shows the star, and lets the contrast land quietly.
Moment to moment: «December, nineteen ninety-one» — he reads from the page; «Bike for our Gary» — a small fond smile under the moustache; «ten pound a month» — he taps the page; «I've drawn a little star» — THE SIGNATURE: the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible); «till it fell to bits» — a warm chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible, one tiny pencil star doodle in the margin); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: pages turning, the warm bulb glinting on the glasses; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "December, nineteen ninety-one. Bike for our Gary. Sixty-two pounds. Written down, saved for since June, ten pound a month in an envelope. Look, I've drawn a little star next to it. He rode that bike till it fell to bits."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond, quiet, wise; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.1s — «December, nineteen ninety-one…» he reads from the page.
2.1–6.9s — «Bike for our Gary…» a small fond smile under the moustache.
6.9–10.1s — «ten pound a month…» he taps the page.
10.1–14.8s — «I've drawn a little star…» THE SIGNATURE: the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible) (THE CENTERPIECE).
14.8–16.9s — «till it fell to bits…» a warm chuckle.
16.9–18.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE STAR shown to the lens: give it room. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the notebook held at chest height. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): reading two Christmases side by side.
MOTIVE (fuel): Gary's bike was a proud moment; the year before was a shame.
GOAL: the viewer feels the difference between saved-for and borrowed.
OBSTACLE: the emotion about Gary that he won't show.
TACTIC: he reads flatly, shows the star, and lets the contrast land quietly.
Moment to moment: «on the never-never» — his face hardens slightly: the register breaks; «March!» — dry disbelief; «Same boy. Different January.» — a quiet steady look over the glasses.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: an old spiral notebook held open in his hands from frame one (handwriting illegible, one tiny pencil star doodle in the margin); the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: pages turning, the warm bulb glinting on the glasses; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Now, the year before, I'd done Christmas on the never-never, and I was still paying for it in March. March! No star next to that one. Same boy. Different January."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond, quiet, wise; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–7.3s — «on the never-never…» his face hardens slightly: the register breaks (THE CENTERPIECE).
7.3–10.7s — «March!…» dry disbelief.
10.7–12.4s — «Same boy. Different January.…» a quiet steady look over the glasses.
12.4–14.0s — FINAL BEAT (audio has ended, lips still): he closes the notebook gently. End.
```

</details>

## Y14: Kelly asks what Sunday Sums is

- **Format:** Interview · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y14.mp3`
- **On-screen text (add in post):** "Grandad, what's Sunday Sums?"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers. Ray is sitting at the kitchen table in a navy V-neck over a checked shirt, a mug of tea in hand, looking to the side of the lens at someone off camera with a fond look. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE MONSTER-VERSUS-DRIP gesture: give it room. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining the ritual to his granddaughter, who should be doing it.
MOTIVE (fuel): he wants Kelly never to have a January 1983.
GOAL: make it sound small enough to start.
OBSTACLE: Maureen's role: he wants the credit, but she checks it.
TACTIC: gentle and teaching; he gestures at the notebook, eyes on Kelly.
Moment to moment: «Sunday Sums.» — a fond look at Kelly; «a brew and the notebook» — he lifts the mug slightly; «Last week's money» — one hand to the left, then the other to the right: two piles; «well, I do everything else» — a self-correcting smirk; «but she checks it» — a glance toward the door; «a big monster» — hands wide; «It's a drip you never look at» — finger and thumb close together: tiny; «It's in my bio» — a nod.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: steam from the mug, the checked shirt collar; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Sunday Sums. After me dinner, a brew and the notebook. Fifteen minutes. Last week's money, then next week's money. Your gran does the shopping column, I do... well, I do everything else, but she checks it. Fifteen minutes, love. That's it. People think money stress is a big monster. It's not. It's a drip you never look at. Look at it every Sunday and it's just a drip. I wrote the whole thing down. It's in my bio."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gentle, fond, practical; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.8s — «Sunday Sums.…» a fond look at Kelly.
2.8–5.7s — «a brew and the notebook…» he lifts the mug slightly.
5.7–12.0s — «Last week's money…» one hand to the left, then the other to the right: two piles.
12.0–13.9s — «well, I do everything else…» a self-correcting smirk.
13.9–19.6s — «but she checks it…» a glance toward the door.
19.6–21.7s — «a big monster…» hands wide (THE CENTERPIECE).
21.7–30.9s — «It's a drip you never look at…» finger and thumb close together: tiny.
30.9–32.6s — «It's in my bio…» a nod.
32.6–34.0s — FINAL BEAT (audio has ended, lips still): he sips the tea. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray answers Kelly just off-lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “Sunday Sums.” a fond look at Kelly; on “a brew and the notebook” he lifts the mug slightly; on “Last week's money” one hand to the left, then the other to the right: two piles; on “well, I do everything else” a self-correcting smirk. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y14-1.mp3` and `Y14-2.mp3`.

- **Part 1 audio (~17 s):** Sunday Sums. After me dinner, a brew and the notebook. Fifteen minutes. Last week's money, then next week's money. Your gran does the shopping column, I do... well, I do everything else, but she checks it.
- **Part 2 audio (~19 s):** Fifteen minutes, love. That's it. People think money stress is a big monster. It's not. It's a drip you never look at. Look at it every Sunday and it's just a drip. I wrote the whole thing down. It's in my bio.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) Keep the energy rising to the cut; the payoff comes in Part 2. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining the ritual to his granddaughter, who should be doing it.
MOTIVE (fuel): he wants Kelly never to have a January 1983.
GOAL: make it sound small enough to start.
OBSTACLE: Maureen's role: he wants the credit, but she checks it.
TACTIC: gentle and teaching; he gestures at the notebook, eyes on Kelly.
Moment to moment: «Sunday Sums.» — a fond look at Kelly; «a brew and the notebook» — he lifts the mug slightly; «Last week's money» — one hand to the left, then the other to the right: two piles; «well, I do everything else» — a self-correcting smirk; «but she checks it» — a glance toward the door.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: steam from the mug, the checked shirt collar; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Sunday Sums. After me dinner, a brew and the notebook. Fifteen minutes. Last week's money, then next week's money. Your gran does the shopping column, I do... well, I do everything else, but she checks it."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gentle, fond, practical; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.8s — «Sunday Sums.…» a fond look at Kelly.
2.8–5.7s — «a brew and the notebook…» he lifts the mug slightly.
5.7–12.0s — «Last week's money…» one hand to the left, then the other to the right: two piles.
12.0–13.9s — «well, I do everything else…» a self-correcting smirk.
13.9–15.5s — «but she checks it…» a glance toward the door.
15.5–17.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: his eyeline stays on Kelly, his granddaughter, sitting out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE MONSTER-VERSUS-DRIP gesture: give it room. 6) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot at a 45-degree angle; Kelly sits at the table out of frame, just to the right of the phone. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): explaining the ritual to his granddaughter, who should be doing it.
MOTIVE (fuel): he wants Kelly never to have a January 1983.
GOAL: make it sound small enough to start.
OBSTACLE: Maureen's role: he wants the credit, but she checks it.
TACTIC: gentle and teaching; he gestures at the notebook, eyes on Kelly.
Moment to moment: «a big monster» — hands wide; «It's a drip you never look at» — finger and thumb close together: tiny; «It's in my bio» — a nod.
The question was just asked by Kelly, his granddaughter, sitting out of frame just to the right of the phone (it appears as on-screen text in post): he answers Kelly, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a mug of tea in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: steam from the mug, the checked shirt collar; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "Fifteen minutes, love. That's it. People think money stress is a big monster. It's not. It's a drip you never look at. Look at it every Sunday and it's just a drip. I wrote the whole thing down. It's in my bio."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gentle, fond, practical; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–6.5s — «a big monster…» hands wide (THE CENTERPIECE).
6.5–15.7s — «It's a drip you never look at…» finger and thumb close together: tiny.
15.7–17.4s — «It's in my bio…» a nod.
17.4–19.0s — FINAL BEAT (audio has ended, lips still): he sips the tea. End.
```

</details>

## Y15: What I'd tell myself at twenty-seven

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen-table.jpg` · @audio1 `Y15.mp3`
- **On-screen text (add in post):** "What I'd tell myself at 27"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity anchors, all clearly visible: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. Wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers. Ray is sitting at the kitchen table, eyes drifting off to the side, remembering, the teapot in the near foreground, the reading glasses hooked in his collar. The place: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Lighting: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «Then I'd give him a notebook», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a message to his twenty-seven-year-old self.
MOTIVE (fuel): he remembers the embarrassment more than the debt.
GOAL: take the shame away from the viewer.
OBSTACLE: his own emotion, and the math/maths slip.
TACTIC: he speaks to the lens as if it were young Ray, with one small self-correction joke.
Moment to moment: «If I could go back» — his eyes drift off, remembering; «I'd say, lad» — eyes back to the lens, gentle; «the forty little things» — his fingers count tiny things; «stop being embarrassed» — firm and kind; «it's a math problem. Maths.» — he corrects himself with a tiny wince: the register breaks, comic; «Then I'd give him a notebook» — THE SIGNATURE: the glasses go on; «He'd have probably lost it» — the faint chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the glasses' arms unfolding, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "If I could go back to nineteen eighty-two, before the gas bill, and tell meself one thing... I'd say, lad, it's not the big stuff. It's the forty little things you don't write down. That's where it goes. And I'd say, stop being embarrassed. Being skint isn't a character flaw, it's a math problem. Maths. It's a maths problem. Then I'd give him a notebook. He'd have probably lost it."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, dry, wise; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–7.7s — «If I could go back…» his eyes drift off, remembering.
7.7–11.3s — «I'd say, lad…» eyes back to the lens, gentle.
11.3–17.3s — «the forty little things…» his fingers count tiny things.
17.3–20.9s — «stop being embarrassed…» firm and kind.
20.9–24.6s — «it's a math problem. Maths.…» he corrects himself with a tiny wince: the register breaks, comic (THE CENTERPIECE).
24.6–27.1s — «Then I'd give him a notebook…» THE SIGNATURE: the glasses go on.
27.1–29.1s — «He'd have probably lost it…» the faint chuckle.
29.1–31.0s — FINAL BEAT (audio has ended, lips still): he looks down at the table, then back up with a small nod. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Ray talks to the camera with natural, invested delivery that matches the voice exactly: on “If I could go back” his eyes drift off, remembering; on “I'd say, lad” eyes back to the lens, gentle; on “the forty little things” his fingers count tiny things; on “Then I'd give him a notebook” the glasses go on. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `Y15-1.mp3` and `Y15-2.mp3`.

- **Part 1 audio (~17 s):** If I could go back to nineteen eighty-two, before the gas bill, and tell meself one thing... I'd say, lad, it's not the big stuff. It's the forty little things you don't write down. That's where it goes.
- **Part 2 audio (~15 s):** And I'd say, stop being embarrassed. Being skint isn't a character flaw, it's a math problem. Maths. It's a maths problem. Then I'd give him a notebook. He'd have probably lost it.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the brown teapot under its knitted cosy, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a message to his twenty-seven-year-old self.
MOTIVE (fuel): he remembers the embarrassment more than the debt.
GOAL: take the shame away from the viewer.
OBSTACLE: his own emotion, and the math/maths slip.
TACTIC: he speaks to the lens as if it were young Ray, with one small self-correction joke.
Moment to moment: «If I could go back» — his eyes drift off, remembering; «I'd say, lad» — eyes back to the lens, gentle; «the forty little things» — his fingers count tiny things.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the glasses' arms unfolding, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "If I could go back to nineteen eighty-two, before the gas bill, and tell meself one thing... I'd say, lad, it's not the big stuff. It's the forty little things you don't write down. That's where it goes."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, dry, wise; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–7.7s — «If I could go back…» his eyes drift off, remembering.
7.7–11.3s — «I'd say, lad…» eyes back to the lens, gentle.
11.3–16.1s — «the forty little things…» his fingers count tiny things.
16.1–17.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Ray speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) happens ONCE, exactly on «Then I'd give him a notebook», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build; identity anchors: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest; in this video wearing a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the brown teapot under its knitted cosy. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up. Framing a touch closer than Part 1.

ACTING TASK — RAY (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a message to his twenty-seven-year-old self.
MOTIVE (fuel): he remembers the embarrassment more than the debt.
GOAL: take the shame away from the viewer.
OBSTACLE: his own emotion, and the math/maths slip.
TACTIC: he speaks to the lens as if it were young Ray, with one small self-correction joke.
Moment to moment: «stop being embarrassed» — firm and kind; «it's a math problem. Maths.» — he corrects himself with a tiny wince: the register breaks, comic; «Then I'd give him a notebook» — THE SIGNATURE: the glasses go on; «He'd have probably lost it» — the faint chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the reading glasses start hooked in his collar. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Kelly is never seen; nobody else is heard.

Physics: the glasses' arms unfolding, the moustache moving with his words; true weight where he sits; fabric breathing with his movement.

Consistency: Ray matches @image1 exactly (relit) for the entire take; the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~15 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Ray's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
RAY: "And I'd say, stop being embarrassed. Being skint isn't a character flaw, it's a math problem. Maths. It's a maths problem. Then I'd give him a notebook. He'd have probably lost it."
- Sound design: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, dry, wise; ~15 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~15 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Ray is already mid-energy.
0.3–5.0s — «stop being embarrassed…» firm and kind.
5.0–8.8s — «it's a math problem. Maths.…» he corrects himself with a tiny wince: the register breaks, comic (THE CENTERPIECE).
8.8–11.3s — «Then I'd give him a notebook…» THE SIGNATURE: the glasses go on.
11.3–13.3s — «He'd have probably lost it…» the faint chuckle.
13.3–15.0s — FINAL BEAT (audio has ended, lips still): he looks down at the table, then back up with a small nod. End.
```

</details>

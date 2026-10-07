# Video prompts: Lou

> **קובץ הפרומפטים לווידאו של לו.** כל הפרומפטים באנגלית, מוכנים להדבקה.
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
[voice: elderly man, 90, speaking English only, American, warm Brooklyn Italian-American accent (natural, not a mobster caricature, not exaggerated), soft gravelly voice with an audible age rasp, strong enough, never frail or shaky, slower pace with deliberate pauses, a twinkle and a chuckle in the voice, gentle but blunt, calls people "kid" and "sweetheart"; recorded on a modern phone at a dining table, warm room tone]
```

Seed line to audition the voice:

```text
Listen to me, kid. Sixty-five years I was married to my Angie... and not once, not once did I text her. You want somebody? Don't text. Call.
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
| L1 | Lou's Rules #1, after eleven | Talking clip | `locations/1-armchair.jpg` | 32 s |
| L2 | What's a situationship? | Interview | `locations/2-sunday-lunch.jpg` | 32 s |
| L3 | Eleven cents | Talking clip | `locations/3-stoop.jpg` | 34 s |
| L4 | Red flags from 1955 that still work | Talking clip | `locations/1-armchair.jpg` | 34 s |
| L5 | If he wanted to, he'd call | Talking clip | `locations/2-sunday-lunch.jpg` | 35 s |
| L6 | Rizz in 1955 | Interview | `locations/2-sunday-lunch.jpg` | 33 s |
| L7 | Ghosting | Talking clip | `locations/3-stoop.jpg` | 34 s |
| L8 | The ring on the chain | Talking clip | `locations/1-armchair.jpg` | 33 s |
| L9 | Lou's Rules #2, first date on a Tuesday | Talking clip | `locations/3-stoop.jpg` | 34 s |
| L10 | Ask Grandpa Lou: should I text first? | Talking clip | `locations/1-armchair.jpg` | 35 s |
| L11 | They went quiet | Talking clip | `locations/2-sunday-lunch.jpg` | 33 s |
| L12 | How to ask somebody out | Talking clip | `locations/3-stoop.jpg` | 34 s |
| L13 | Ask Grandpa Lou: how do I end a situationship? | Talking clip | `locations/1-armchair.jpg` | 35 s |
| L14 | The first phone call | Talking clip | `locations/2-sunday-lunch.jpg` | 33 s |
| L15 | Lou's Rules #3, the phone goes face down | Talking clip | `locations/2-sunday-lunch.jpg` | 34 s |

## L1: Lou's Rules #1, after eleven

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-armchair.jpg` · @audio1 `L1.mp3`
- **On-screen text (add in post):** "Lou's rule #1"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers. Lou is sitting in the worn brown leather armchair at a 45-degree angle, chest-up, one finger raised, twinkling eyes on the lens, warm late-afternoon light. The place: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Lighting: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Hey is not a question», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up. He sits in the brown leather armchair; the lamp and the wall photos are soft behind him.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the first rule, delivered like an old judge.
MOTIVE (fuel): he courted Angie properly, and it worked for sixty-five years.
GOAL: the viewer stops answering 11pm 'hey's.
OBSTACLE: he mixes up Monday and Tuesday.
TACTIC: one finger raised like a gavel; he corrects himself, then lands 'Hey is not a question'.
Moment to moment: «Lou's rule number one» — one finger up, eyes twinkling; «you're not a plan» — a slow headshake; «You're the leftovers» — a small apologetic shrug; «no, a Tuesday» — he corrects himself, eyes up, remembering, a chuckle; «like a court date» — a mock-official nod; «with a hey» — a disdainful little wave; «Hey is not a question» — THE SIGNATURE: he touches the gold wedding band on the chain; steady eyes on the lens; «Rule number two next week» — a twinkle, one finger up again.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting, cardigan buttons catching the light; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number one. If somebody only texts you after eleven o'clock... sweetheart, you're not a plan. You're the leftovers. When I wanted to see Angie, I asked her on a Monday... no, a Tuesday, it was a Tuesday, for a Saturday. Four days' notice, like a court date. Nobody who's serious about you shows up at midnight with a hey. Hey is not a question. Rule number two next week."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm authority, twinkly; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.4s — «Lou's rule number one…» one finger up, eyes twinkling.
6.4–8.1s — «you're not a plan…» a slow headshake.
8.1–14.5s — «You're the leftovers…» a small apologetic shrug.
14.5–19.8s — «no, a Tuesday…» he corrects himself, eyes up, remembering, a chuckle.
19.8–25.1s — «like a court date…» a mock-official nod.
25.1–26.4s — «with a hey…» a disdainful little wave.
26.4–28.5s — «Hey is not a question…» THE SIGNATURE: he touches the gold wedding band on the chain; steady eyes on the lens (THE CENTERPIECE).
28.5–30.6s — «Rule number two next week…» a twinkle, one finger up again.
30.6–32.0s — FINAL BEAT (audio has ended, lips still): he settles back into the armchair. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Lou's rule number one” one finger up, eyes twinkling; on “you're not a plan” a slow headshake; on “You're the leftovers” a small apologetic shrug; on “Hey is not a question” he touches the gold wedding band on the chain; steady eyes on the lens. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L1-1.mp3` and `L1-2.mp3`.

- **Part 1 audio (~11 s):** Lou's rule number one. If somebody only texts you after eleven o'clock... sweetheart, you're not a plan. You're the leftovers.
- **Part 2 audio (~23 s):** When I wanted to see Angie, I asked her on a Monday... no, a Tuesday, it was a Tuesday, for a Saturday. Four days' notice, like a court date. Nobody who's serious about you shows up at midnight with a hey. Hey is not a question. Rule number two next week.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up. He sits in the brown leather armchair; the lamp and the wall photos are soft behind him.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the first rule, delivered like an old judge.
MOTIVE (fuel): he courted Angie properly, and it worked for sixty-five years.
GOAL: the viewer stops answering 11pm 'hey's.
OBSTACLE: he mixes up Monday and Tuesday.
TACTIC: one finger raised like a gavel; he corrects himself, then lands 'Hey is not a question'.
Moment to moment: «Lou's rule number one» — one finger up, eyes twinkling; «you're not a plan» — a slow headshake; «You're the leftovers» — a small apologetic shrug.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting, cardigan buttons catching the light; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number one. If somebody only texts you after eleven o'clock... sweetheart, you're not a plan. You're the leftovers."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm authority, twinkly; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.4s — «Lou's rule number one…» one finger up, eyes twinkling.
6.4–8.1s — «you're not a plan…» a slow headshake.
8.1–9.4s — «You're the leftovers…» a small apologetic shrug.
9.4–11.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Hey is not a question», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up. He sits in the brown leather armchair; the lamp and the wall photos are soft behind him. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the first rule, delivered like an old judge.
MOTIVE (fuel): he courted Angie properly, and it worked for sixty-five years.
GOAL: the viewer stops answering 11pm 'hey's.
OBSTACLE: he mixes up Monday and Tuesday.
TACTIC: one finger raised like a gavel; he corrects himself, then lands 'Hey is not a question'.
Moment to moment: «no, a Tuesday» — he corrects himself, eyes up, remembering, a chuckle; «like a court date» — a mock-official nod; «with a hey» — a disdainful little wave; «Hey is not a question» — THE SIGNATURE: he touches the gold wedding band on the chain; steady eyes on the lens; «Rule number two next week» — a twinkle, one finger up again.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting, cardigan buttons catching the light; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~23 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "When I wanted to see Angie, I asked her on a Monday... no, a Tuesday, it was a Tuesday, for a Saturday. Four days' notice, like a court date. Nobody who's serious about you shows up at midnight with a hey. Hey is not a question. Rule number two next week."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm authority, twinkly; ~23 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~23 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–10.7s — «no, a Tuesday…» he corrects himself, eyes up, remembering, a chuckle.
10.7–16.0s — «like a court date…» a mock-official nod.
16.0–17.3s — «with a hey…» a disdainful little wave.
17.3–19.4s — «Hey is not a question…» THE SIGNATURE: he touches the gold wedding band on the chain; steady eyes on the lens (THE CENTERPIECE).
19.4–21.5s — «Rule number two next week…» a twinkle, one finger up again.
21.5–23.0s — FINAL BEAT (audio has ended, lips still): he settles back into the armchair. End.
```

</details>

## L2: What's a situationship?

- **Format:** Interview · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L2.mp3`
- **On-screen text (add in post):** "Asked my 90-year-old grandpa what a situationship is"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table, a white paper napkin tucked into his collar, a fork in hand, leaning toward someone across the table just off-camera with a puzzled frown. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE QUIET LEAN on 'it already hurts': give it room. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens. The red sauce and rigatoni are soft in the foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa decoding a modern word at the lunch table.
MOTIVE (fuel): he hates seeing his grandkids hurt by vague people.
GOAL: Nicky, and the viewer, will ask the question.
OBSTACLE: he genuinely mishears the word.
TACTIC: he taps his hearing aid, translates the word into 1955, and delivers a verdict, eyes on Nicky.
Moment to moment: «A what-ship?» — COMIC MOVE: he taps his hearing aid and leans toward Nicky; «A situation-ship. Okay.» — a slow nod, processing; «you go to the sister's birthday» — he counts on his fingers, puzzled; «nobody's allowed to ask» — eyebrows up, incredulous; «We called it, he's not serious» — a flat, knowing look; «Took two seconds to say» — a chuckle; «it already hurts» — the register breaks: quiet and kind, leaning in; «The answer's free» — he points the fork gently at Nicky.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a fork held in his right hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper napkin in his collar, the fork tines catching light, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "A what-ship? A situation-ship. Okay. So you see each other, you go to the sister's birthday... but you're not together. And nobody's allowed to ask. In my day we had a word for that, kid. We called it, he's not serious. Took two seconds to say. Lemme tell you something. If you have to give it a new name so it doesn't hurt, it already hurts. Ask the question. The answer's free."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: funny, then tender; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–1.4s — «A what-ship?…» COMIC MOVE: he taps his hearing aid and leans toward Nicky.
1.4–4.8s — «A situation-ship. Okay.…» a slow nod, processing.
4.8–9.6s — «you go to the sister's birthday…» he counts on his fingers, puzzled.
9.6–15.4s — «nobody's allowed to ask…» eyebrows up, incredulous.
15.4–17.9s — «We called it, he's not serious…» a flat, knowing look.
17.9–26.9s — «Took two seconds to say…» a chuckle.
26.9–29.5s — «it already hurts…» the register breaks: quiet and kind, leaning in (THE CENTERPIECE).
29.5–30.8s — «The answer's free…» he points the fork gently at Nicky.
30.8–32.0s — FINAL BEAT (audio has ended, lips still): he goes back to his rigatoni. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou answers Nicky just off-lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “A what-ship?” he taps his hearing aid and leans toward Nicky; on “A situation-ship. Okay.” a slow nod, processing; on “you go to the sister's birthday” he counts on his fingers, puzzled; on “nobody's allowed to ask” eyebrows up, incredulous. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L2-1.mp3` and `L2-2.mp3`.

- **Part 1 audio (~12 s):** A what-ship? A situation-ship. Okay. So you see each other, you go to the sister's birthday... but you're not together. And nobody's allowed to ask.
- **Part 2 audio (~21 s):** In my day we had a word for that, kid. We called it, he's not serious. Took two seconds to say. Lemme tell you something. If you have to give it a new name so it doesn't hurt, it already hurts. Ask the question. The answer's free.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE QUIET LEAN on 'it already hurts': give it room. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens. The red sauce and rigatoni are soft in the foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa decoding a modern word at the lunch table.
MOTIVE (fuel): he hates seeing his grandkids hurt by vague people.
GOAL: Nicky, and the viewer, will ask the question.
OBSTACLE: he genuinely mishears the word.
TACTIC: he taps his hearing aid, translates the word into 1955, and delivers a verdict, eyes on Nicky.
Moment to moment: «A what-ship?» — COMIC MOVE: he taps his hearing aid and leans toward Nicky; «A situation-ship. Okay.» — a slow nod, processing; «you go to the sister's birthday» — he counts on his fingers, puzzled; «nobody's allowed to ask» — eyebrows up, incredulous.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a fork held in his right hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper napkin in his collar, the fork tines catching light, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~12 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "A what-ship? A situation-ship. Okay. So you see each other, you go to the sister's birthday... but you're not together. And nobody's allowed to ask."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: funny, then tender; ~12 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~12 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–1.4s — «A what-ship?…» COMIC MOVE: he taps his hearing aid and leans toward Nicky (THE CENTERPIECE).
1.4–4.8s — «A situation-ship. Okay.…» a slow nod, processing.
4.8–9.6s — «you go to the sister's birthday…» he counts on his fingers, puzzled.
9.6–11.3s — «nobody's allowed to ask…» eyebrows up, incredulous.
11.3–12.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE QUIET LEAN on 'it already hurts': give it room. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens. The red sauce and rigatoni are soft in the foreground. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa decoding a modern word at the lunch table.
MOTIVE (fuel): he hates seeing his grandkids hurt by vague people.
GOAL: Nicky, and the viewer, will ask the question.
OBSTACLE: he genuinely mishears the word.
TACTIC: he taps his hearing aid, translates the word into 1955, and delivers a verdict, eyes on Nicky.
Moment to moment: «We called it, he's not serious» — a flat, knowing look; «Took two seconds to say» — a chuckle; «it already hurts» — the register breaks: quiet and kind, leaning in; «The answer's free» — he points the fork gently at Nicky.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a fork held in his right hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper napkin in his collar, the fork tines catching light, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "In my day we had a word for that, kid. We called it, he's not serious. Took two seconds to say. Lemme tell you something. If you have to give it a new name so it doesn't hurt, it already hurts. Ask the question. The answer's free."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: funny, then tender; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–6.9s — «We called it, he's not serious…» a flat, knowing look.
6.9–15.9s — «Took two seconds to say…» a chuckle.
15.9–18.5s — «it already hurts…» the register breaks: quiet and kind, leaning in (THE CENTERPIECE).
18.5–19.8s — «The answer's free…» he points the fork gently at Nicky.
19.8–21.0s — FINAL BEAT (audio has ended, lips still): he goes back to his rigatoni. End.
```

</details>

## L3: Eleven cents

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-stoop.jpg` · @audio1 `L3.mp3`
- **On-screen text (add in post):** "I asked my wife out with 11 cents"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers. Lou is sitting on the top brownstone step at golden hour in a camel car coat over a moss-green cardigan, patting his coat pocket, a twinkly grin at the lens. The place: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Lighting: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Sixty-five years, kid», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting two steps below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on the top step, a touch off-center; the iron handrail and the potted chrysanthemum are beside him.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the origin story, told on the stoop.
MOTIVE (fuel): Angie, the best decision of his life.
GOAL: the viewer learns 'a day and a time'.
OBSTACLE: the ache of telling it without her.
TACTIC: he tells it like a joke until the last line.
Moment to moment: «eleven cents in my pocket» — he pats his coat pocket; «A dime and a penny» — two fingers, then one; «she works at the bakery» — a nod down the street; «My mother thought I was sick» — a laugh; «Angie, Saturday, two o'clock» — he sits up straighter, playing his younger self; «One soda, two straws» — two fingers held up like straws; «I left the penny for a tip» — a proud chuckle; «Sixty-five years, kid» — THE SIGNATURE: he touches the ring on the chain; quieter; «a day and a time» — a steady look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering on the steps, the camel coat folding, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "I asked my wife out with eleven cents in my pocket. A dime and a penny. Nineteen fifty-five, she works at the bakery. Three weeks, I buy bread every morning, I don't say a word. My mother thought I was sick. Then one day... Angie, Saturday, two o'clock, can I take you for a soda? One soda, two straws. I left the penny for a tip. Sixty-five years, kid. It started with a day and a time."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: charming, then quietly moving; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.0s — «eleven cents in my pocket…» he pats his coat pocket.
5.0–7.9s — «A dime and a penny…» two fingers, then one.
7.9–14.9s — «she works at the bakery…» a nod down the street.
14.9–18.9s — «My mother thought I was sick…» a laugh.
18.9–23.4s — «Angie, Saturday, two o'clock…» he sits up straighter, playing his younger self.
23.4–25.1s — «One soda, two straws…» two fingers held up like straws.
25.1–28.0s — «I left the penny for a tip…» a proud chuckle.
28.0–30.5s — «Sixty-five years, kid…» THE SIGNATURE: he touches the ring on the chain; quieter (THE CENTERPIECE).
30.5–32.6s — «a day and a time…» a steady look.
32.6–34.0s — FINAL BEAT (audio has ended, lips still): he looks down the street with a small smile. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “eleven cents in my pocket” he pats his coat pocket; on “A dime and a penny” two fingers, then one; on “she works at the bakery” a nod down the street; on “Sixty-five years, kid” he touches the ring on the chain; quieter. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L3-1.mp3` and `L3-2.mp3`.

- **Part 1 audio (~19 s):** I asked my wife out with eleven cents in my pocket. A dime and a penny. Nineteen fifty-five, she works at the bakery. Three weeks, I buy bread every morning, I don't say a word. My mother thought I was sick.
- **Part 2 audio (~17 s):** Then one day... Angie, Saturday, two o'clock, can I take you for a soda? One soda, two straws. I left the penny for a tip. Sixty-five years, kid. It started with a day and a time.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting two steps below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on the top step, a touch off-center; the iron handrail and the potted chrysanthemum are beside him.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the origin story, told on the stoop.
MOTIVE (fuel): Angie, the best decision of his life.
GOAL: the viewer learns 'a day and a time'.
OBSTACLE: the ache of telling it without her.
TACTIC: he tells it like a joke until the last line.
Moment to moment: «eleven cents in my pocket» — he pats his coat pocket; «A dime and a penny» — two fingers, then one; «she works at the bakery» — a nod down the street; «My mother thought I was sick» — a laugh.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering on the steps, the camel coat folding, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "I asked my wife out with eleven cents in my pocket. A dime and a penny. Nineteen fifty-five, she works at the bakery. Three weeks, I buy bread every morning, I don't say a word. My mother thought I was sick."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: charming, then quietly moving; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.0s — «eleven cents in my pocket…» he pats his coat pocket.
5.0–7.9s — «A dime and a penny…» two fingers, then one.
7.9–14.9s — «she works at the bakery…» a nod down the street.
14.9–17.4s — «My mother thought I was sick…» a laugh.
17.4–19.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Sixty-five years, kid», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting two steps below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. He sits on the top step, a touch off-center; the iron handrail and the potted chrysanthemum are beside him. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the origin story, told on the stoop.
MOTIVE (fuel): Angie, the best decision of his life.
GOAL: the viewer learns 'a day and a time'.
OBSTACLE: the ache of telling it without her.
TACTIC: he tells it like a joke until the last line.
Moment to moment: «Angie, Saturday, two o'clock» — he sits up straighter, playing his younger self; «One soda, two straws» — two fingers held up like straws; «I left the penny for a tip» — a proud chuckle; «Sixty-five years, kid» — THE SIGNATURE: he touches the ring on the chain; quieter; «a day and a time» — a steady look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering on the steps, the camel coat folding, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Then one day... Angie, Saturday, two o'clock, can I take you for a soda? One soda, two straws. I left the penny for a tip. Sixty-five years, kid. It started with a day and a time."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: charming, then quietly moving; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–6.3s — «Angie, Saturday, two o'clock…» he sits up straighter, playing his younger self.
6.3–8.0s — «One soda, two straws…» two fingers held up like straws.
8.0–10.9s — «I left the penny for a tip…» a proud chuckle.
10.9–13.4s — «Sixty-five years, kid…» THE SIGNATURE: he touches the ring on the chain; quieter (THE CENTERPIECE).
13.4–15.5s — «a day and a time…» a steady look.
15.5–17.0s — FINAL BEAT (audio has ended, lips still): he looks down the street with a small smile. End.
```

</details>

## L4: Red flags from 1955 that still work

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-armchair.jpg` · @audio1 `L4.mp3`
- **On-screen text (add in post):** "Red flags from 1955 that still work 🚩"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers. Lou is sitting in the leather armchair with a mock-serious face at the lens, one finger raised, the framed wedding photo on the side table seen from the side. The place: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Lighting: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SHEEPISH 'well, most times': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot; the framed wedding photo on the side table is visible from the side (no faces).

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): red flags passed down from Angie.
MOTIVE (fuel): Angie's wisdom deserves an audience.
GOAL: two flags and a green one, cleanly.
OBSTACLE: admitting he was wrong four thousand times.
TACTIC: he counts on his fingers, quotes Angie in a softer voice, and makes a sheepish correction.
Moment to moment: «Red flags from nineteen fifty-five» — a mock-serious face; «rude to the waiter» — one finger; «Angie used to say» — his eyes soften, a glance at the framed photo; «They're never wrong. Never!» — a scoff; «I was wrong maybe four thousand times» — a hand up, guilty; «well, most times» — a sheepish correction, a chuckle; «Green flag?» — he brightens; «Not one day.» — a steady, quiet look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Red flags from nineteen fifty-five that still work. Red flag. They're rude to the waiter. Angie used to say, watch how he talks to the waiter, that's how he'll talk to you in ten years. Red flag. They're never wrong. Never! Sixty-five years, I was wrong maybe four thousand times, and I said so every time... well, most times. Green flag? You don't have to wonder. Angie never made me wonder. Not one day."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.4s — «Red flags from nineteen fifty-five…» a mock-serious face.
5.4–7.1s — «rude to the waiter…» one finger.
7.1–16.1s — «Angie used to say…» his eyes soften, a glance at the framed photo.
16.1–18.7s — «They're never wrong. Never!…» a scoff.
18.7–24.2s — «I was wrong maybe four thousand times…» a hand up, guilty.
24.2–25.5s — «well, most times…» a sheepish correction, a chuckle (THE CENTERPIECE).
25.5–30.6s — «Green flag?…» he brightens.
30.6–31.9s — «Not one day.…» a steady, quiet look.
31.9–34.0s — FINAL BEAT (audio has ended, lips still): a small nod at the framed photo. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Red flags from nineteen fifty-five” a mock-serious face; on “rude to the waiter” one finger; on “Angie used to say” his eyes soften, a glance at the framed photo; on “They're never wrong. Never!” a scoff. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L4-1.mp3` and `L4-2.mp3`.

- **Part 1 audio (~27 s):** Red flags from nineteen fifty-five that still work. Red flag. They're rude to the waiter. Angie used to say, watch how he talks to the waiter, that's how he'll talk to you in ten years. Red flag. They're never wrong. Never! Sixty-five years, I was wrong maybe four thousand times, and I said so every time... well, most times.
- **Part 2 audio (~8 s):** Green flag? You don't have to wonder. Angie never made me wonder. Not one day.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SHEEPISH 'well, most times': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot; the framed wedding photo on the side table is visible from the side (no faces).

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): red flags passed down from Angie.
MOTIVE (fuel): Angie's wisdom deserves an audience.
GOAL: two flags and a green one, cleanly.
OBSTACLE: admitting he was wrong four thousand times.
TACTIC: he counts on his fingers, quotes Angie in a softer voice, and makes a sheepish correction.
Moment to moment: «Red flags from nineteen fifty-five» — a mock-serious face; «rude to the waiter» — one finger; «Angie used to say» — his eyes soften, a glance at the framed photo; «They're never wrong. Never!» — a scoff; «I was wrong maybe four thousand times» — a hand up, guilty; «well, most times» — a sheepish correction, a chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~27 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Red flags from nineteen fifty-five that still work. Red flag. They're rude to the waiter. Angie used to say, watch how he talks to the waiter, that's how he'll talk to you in ten years. Red flag. They're never wrong. Never! Sixty-five years, I was wrong maybe four thousand times, and I said so every time... well, most times."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~27 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~27 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–5.4s — «Red flags from nineteen fifty-five…» a mock-serious face.
5.4–7.1s — «rude to the waiter…» one finger.
7.1–16.1s — «Angie used to say…» his eyes soften, a glance at the framed photo.
16.1–18.7s — «They're never wrong. Never!…» a scoff.
18.7–24.2s — «I was wrong maybe four thousand times…» a hand up, guilty.
24.2–25.5s — «well, most times…» a sheepish correction, a chuckle (THE CENTERPIECE).
25.5–27.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SHEEPISH 'well, most times': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot; the framed wedding photo on the side table is visible from the side (no faces). Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): red flags passed down from Angie.
MOTIVE (fuel): Angie's wisdom deserves an audience.
GOAL: two flags and a green one, cleanly.
OBSTACLE: admitting he was wrong four thousand times.
TACTIC: he counts on his fingers, quotes Angie in a softer voice, and makes a sheepish correction.
Moment to moment: «Green flag?» — he brightens; «Not one day.» — a steady, quiet look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the leather creaking, the chain glinting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~8 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Green flag? You don't have to wonder. Angie never made me wonder. Not one day."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~8 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~8 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–5.4s — «Green flag?…» he brightens.
5.4–6.7s — «Not one day.…» a steady, quiet look.
6.7–8.0s — FINAL BEAT (audio has ended, lips still): a small nod at the framed photo. End.
```

</details>

## L5: If he wanted to, he'd call

- **Format:** Talking clip · **~Length:** 35 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L5.mp3`
- **On-screen text (add in post):** "If he wanted to, he would. Grandpa's version:"
- **Length:** ~35 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table in a cream cable-knit cardigan with a napkin tucked into his collar, looking at the lens about to speak, red sauce and rigatoni on the table. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Don't text, sweetheart. Call.», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens; plates and the sauce pot soft in the foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): upgrading a slogan for his grandkids.
MOTIVE (fuel): he called Angie every night at seven.
GOAL: brand the viewer with 'Don't text. Call.'.
OBSTACLE: Nicky's generation's fear of the phone.
TACTIC: he fixes the phrase like an editor, then does the cord gesture.
Moment to moment: «If he wanted to, he would» — he repeats it slowly, testing it; «It's close.» — a so-so hand wobble; «Not text. Call.» — he taps the table on each word; «from the bathroom» — a disgusted little face; «you have to mean it» — he restarts, leaning in; «with the cord this long» — he holds his hands apart, measuring the cord; «Don't text, sweetheart. Call.» — THE SIGNATURE: he touches the ring on the chain; steady eyes on the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a piece of crusty bread on his plate (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cutlery, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~35 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "If he wanted to, he would. That's what you kids say, right? It's close. Lemme fix it for you. If he wanted to, he'd call. Not text. Call. A text you can send from the bathroom while you're watching the game. A call, you have to stop. You have to... you have to mean it. I called Angie every night at seven, on the phone in the kitchen, with the cord this long. Don't text, sweetheart. Call."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm, firm, charming; ~35 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~35 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.5s — «If he wanted to, he would…» he repeats it slowly, testing it.
5.5–11.0s — «It's close.…» a so-so hand wobble.
11.0–14.4s — «Not text. Call.…» he taps the table on each word.
14.4–18.5s — «from the bathroom…» a disgusted little face.
18.5–29.0s — «you have to mean it…» he restarts, leaning in.
29.0–31.1s — «with the cord this long…» he holds his hands apart, measuring the cord.
31.1–32.9s — «Don't text, sweetheart. Call.…» THE SIGNATURE: he touches the ring on the chain; steady eyes on the lens (THE CENTERPIECE).
32.9–35.0s — FINAL BEAT (audio has ended, lips still): he picks up the bread. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “If he wanted to, he would” he repeats it slowly, testing it; on “It's close.” a so-so hand wobble; on “Not text. Call.” he taps the table on each word; on “Don't text, sweetheart. Call.” he touches the ring on the chain; steady eyes on the lens. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L5-1.mp3` and `L5-2.mp3`.

- **Part 1 audio (~14 s):** If he wanted to, he would. That's what you kids say, right? It's close. Lemme fix it for you. If he wanted to, he'd call. Not text. Call.
- **Part 2 audio (~22 s):** A text you can send from the bathroom while you're watching the game. A call, you have to stop. You have to... you have to mean it. I called Angie every night at seven, on the phone in the kitchen, with the cord this long. Don't text, sweetheart. Call.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens; plates and the sauce pot soft in the foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): upgrading a slogan for his grandkids.
MOTIVE (fuel): he called Angie every night at seven.
GOAL: brand the viewer with 'Don't text. Call.'.
OBSTACLE: Nicky's generation's fear of the phone.
TACTIC: he fixes the phrase like an editor, then does the cord gesture.
Moment to moment: «If he wanted to, he would» — he repeats it slowly, testing it; «It's close.» — a so-so hand wobble; «Not text. Call.» — he taps the table on each word.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a piece of crusty bread on his plate (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cutlery, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "If he wanted to, he would. That's what you kids say, right? It's close. Lemme fix it for you. If he wanted to, he'd call. Not text. Call."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm, firm, charming; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.5s — «If he wanted to, he would…» he repeats it slowly, testing it.
5.5–11.0s — «It's close.…» a so-so hand wobble.
11.0–12.4s — «Not text. Call.…» he taps the table on each word.
12.4–14.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «Don't text, sweetheart. Call.», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens; plates and the sauce pot soft in the foreground. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): upgrading a slogan for his grandkids.
MOTIVE (fuel): he called Angie every night at seven.
GOAL: brand the viewer with 'Don't text. Call.'.
OBSTACLE: Nicky's generation's fear of the phone.
TACTIC: he fixes the phrase like an editor, then does the cord gesture.
Moment to moment: «from the bathroom» — a disgusted little face; «you have to mean it» — he restarts, leaning in; «with the cord this long» — he holds his hands apart, measuring the cord; «Don't text, sweetheart. Call.» — THE SIGNATURE: he touches the ring on the chain; steady eyes on the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a piece of crusty bread on his plate (picked up only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cutlery, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~22 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "A text you can send from the bathroom while you're watching the game. A call, you have to stop. You have to... you have to mean it. I called Angie every night at seven, on the phone in the kitchen, with the cord this long. Don't text, sweetheart. Call."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: warm, firm, charming; ~22 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~22 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–6.4s — «from the bathroom…» a disgusted little face.
6.4–16.9s — «you have to mean it…» he restarts, leaning in.
16.9–19.0s — «with the cord this long…» he holds his hands apart, measuring the cord.
19.0–20.8s — «Don't text, sweetheart. Call.…» THE SIGNATURE: he touches the ring on the chain; steady eyes on the lens (THE CENTERPIECE).
20.8–22.0s — FINAL BEAT (audio has ended, lips still): he picks up the bread. End.
```

</details>

## L6: Rizz in 1955

- **Format:** Interview · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L6.mp3`
- **On-screen text (add in post):** "Asked my 90-year-old grandpa about his rizz"
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table with a napkin in his collar, leaning toward someone across the table just off-camera, a hand cupped near his hearing aid. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE SHIMMY: give it room. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa asked about his 'rizz'.
MOTIVE (fuel): he was a charmer, and he knows it.
GOAL: make 'showing up and shutting up' the answer.
OBSTACLE: he mishears 'rizz' as 'rice'.
TACTIC: he taps his hearing aid, then shares a proud memory, eyes on Nicky.
Moment to moment: «My what?» — COMIC MOVE: he taps his hearing aid and leans toward Nicky; «Like rice?» — he points at the bowl of rigatoni; «Oh. Rizz.» — a dawning, amused look; «With my shoes shined» — he brushes his cardigan front proudly; «I had hair then» — a rueful pat of his thin hair; «in case of wind» — a comb mime at the back pocket; «Showing up and shutting up» — a satisfied nod; «for that and the dancing» — a little shoulder shimmy, a chuckle.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cardigan cables shifting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "My what? Riz? Like rice? Oh. Rizz. My rizz, kid. I showed up. On time. With my shoes shined, and my hair, I had hair then, with the comb in my back pocket in case of wind. I asked her questions and then I shut up and listened to the answers. That's it. That's the rizz. Showing up and shutting up. Your grandmother married me for it. Well... for that and the dancing."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, proud; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–1.9s — «My what?…» COMIC MOVE: he taps his hearing aid and leans toward Nicky.
1.9–2.8s — «Like rice?…» he points at the bowl of rigatoni.
2.8–7.3s — «Oh. Rizz.…» a dawning, amused look.
7.3–10.1s — «With my shoes shined…» he brushes his cardigan front proudly.
10.1–14.5s — «I had hair then…» a rueful pat of his thin hair.
14.5–24.1s — «in case of wind…» a comb mime at the back pocket.
24.1–29.4s — «Showing up and shutting up…» a satisfied nod.
29.4–31.5s — «for that and the dancing…» a little shoulder shimmy, a chuckle (THE CENTERPIECE).
31.5–33.0s — FINAL BEAT (audio has ended, lips still): he laughs and waves Nicky off. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou answers Nicky just off-lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “My what?” he taps his hearing aid and leans toward Nicky; on “Like rice?” he points at the bowl of rigatoni; on “Oh. Rizz.” a dawning, amused look; on “With my shoes shined” he brushes his cardigan front proudly. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L6-1.mp3` and `L6-2.mp3`.

- **Part 1 audio (~17 s):** My what? Riz? Like rice? Oh. Rizz. My rizz, kid. I showed up. On time. With my shoes shined, and my hair, I had hair then, with the comb in my back pocket in case of wind.
- **Part 2 audio (~17 s):** I asked her questions and then I shut up and listened to the answers. That's it. That's the rizz. Showing up and shutting up. Your grandmother married me for it. Well... for that and the dancing.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) Keep the energy rising to the cut; the payoff comes in Part 2. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa asked about his 'rizz'.
MOTIVE (fuel): he was a charmer, and he knows it.
GOAL: make 'showing up and shutting up' the answer.
OBSTACLE: he mishears 'rizz' as 'rice'.
TACTIC: he taps his hearing aid, then shares a proud memory, eyes on Nicky.
Moment to moment: «My what?» — COMIC MOVE: he taps his hearing aid and leans toward Nicky; «Like rice?» — he points at the bowl of rigatoni; «Oh. Rizz.» — a dawning, amused look; «With my shoes shined» — he brushes his cardigan front proudly; «I had hair then» — a rueful pat of his thin hair; «in case of wind» — a comb mime at the back pocket.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cardigan cables shifting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "My what? Riz? Like rice? Oh. Rizz. My rizz, kid. I showed up. On time. With my shoes shined, and my hair, I had hair then, with the comb in my back pocket in case of wind."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, proud; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–1.9s — «My what?…» COMIC MOVE: he taps his hearing aid and leans toward Nicky.
1.9–2.8s — «Like rice?…» he points at the bowl of rigatoni.
2.8–7.3s — «Oh. Rizz.…» a dawning, amused look.
7.3–10.1s — «With my shoes shined…» he brushes his cardigan front proudly.
10.1–14.5s — «I had hair then…» a rueful pat of his thin hair.
14.5–16.2s — «in case of wind…» a comb mime at the back pocket.
16.2–17.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: his eyeline stays on Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; he NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE SHIMMY: give it room. 6) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): grandpa asked about his 'rizz'.
MOTIVE (fuel): he was a charmer, and he knows it.
GOAL: make 'showing up and shutting up' the answer.
OBSTACLE: he mishears 'rizz' as 'rice'.
TACTIC: he taps his hearing aid, then shares a proud memory, eyes on Nicky.
Moment to moment: «Showing up and shutting up» — a satisfied nod; «for that and the dancing» — a little shoulder shimmy, a chuckle.
The question was just asked by Nicky, his grandson, sitting across the table, out of frame just to the right of the phone (it appears as on-screen text in post): he answers Nicky, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the cardigan cables shifting; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "I asked her questions and then I shut up and listened to the answers. That's it. That's the rizz. Showing up and shutting up. Your grandmother married me for it. Well... for that and the dancing."
- There is NO interviewer audio: the question appears as on-screen text in post; he reacts as if he has just heard it.
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, proud; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–13.5s — «Showing up and shutting up…» a satisfied nod.
13.5–15.6s — «for that and the dancing…» a little shoulder shimmy, a chuckle (THE CENTERPIECE).
15.6–17.0s — FINAL BEAT (audio has ended, lips still): he laughs and waves Nicky off. End.
```

</details>

## L7: Ghosting

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-stoop.jpg` · @audio1 `L7.mp3`
- **On-screen text (add in post):** "My grandson explained ghosting to me"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers. Lou is a too-close selfie held in both hands on the brownstone stoop at golden hour, a squinting, baffled look, the camel coat collar visible. The place: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Lighting: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is Lou's own HANDHELD SELFIE, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEPOT ANNOUNCEMENT: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Lou holds the phone close to his face in both hands, a little too close and slightly below his chin. Mild front-camera wide distortion, a gentle hand bob with his breathing and gestures. Any angle change comes only from Lou raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. A too-close selfie: his face fills much of the frame, the stoop steps and golden street tilting behind.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): genuinely upset about ghosting.
MOTIVE (fuel): thirty-eight years of announcing his stops.
GOAL: the viewer sends the one sentence.
OBSTACLE: he isn't good with the phone; the selfie wobbles.
TACTIC: he uses bus-driver authority and the depot line.
Moment to moment: «Ghosting.» — he squints into the too-close phone; «I'm still upset» — a wounded look; «you just... disappear?» — eyebrows up, baffled; «I drove a bus» — a proud chin lift; «this bus is going to the depot» — an announcer voice; he lets go with one hand and holds it as if at a microphone; «You owe them one sentence» — one finger up, both hands back on the phone after; «I wish you well» — gentle; «get off at your stop» — a firm nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: close front-camera wide distortion, the phone shaking slightly in his hands, golden light flaring at the frame edge; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Ghosting. Nicky explained it to me. I'm still upset. You go on three dates with somebody, and then you just... disappear? Kid, I drove a bus for thirty-eight years. If I wasn't gonna make your stop, I told you. I said, sorry, folks, this bus is going to the depot. You don't owe anybody a speech. You owe them one sentence. I'm not feeling it, I wish you well. Say it, and get off at your stop."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: indignant, warm, funny; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — Lou lifts the phone out to arm's length; the frame bobs once and settles.
0.6–3.2s — «Ghosting.…» he squints into the too-close phone.
3.2–8.1s — «I'm still upset…» a wounded look.
8.1–10.1s — «you just... disappear?…» eyebrows up, baffled.
10.1–18.7s — «I drove a bus…» a proud chin lift.
18.7–24.1s — «this bus is going to the depot…» an announcer voice; he lets go with one hand and holds it as if at a microphone (THE CENTERPIECE).
24.1–27.8s — «You owe them one sentence…» one finger up, both hands back on the phone after.
27.8–30.7s — «I wish you well…» gentle.
30.7–32.8s — «get off at your stop…» a firm nod.
32.8–34.0s — FINAL BEAT (audio has ended, lips still): he fumbles for the button to stop recording; the frame tilts. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Ghosting.” he squints into the too-close phone; on “I'm still upset” a wounded look; on “you just... disappear?” eyebrows up, baffled; on “I drove a bus” a proud chin lift. Natural blinks, small head movements, eyebrows active on key words, real breathing. His own handheld selfie: mild wide-angle distortion and a gentle hand bob. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L7-1.mp3` and `L7-2.mp3`.

- **Part 1 audio (~18 s):** Ghosting. Nicky explained it to me. I'm still upset. You go on three dates with somebody, and then you just... disappear? Kid, I drove a bus for thirty-eight years. If I wasn't gonna make your stop, I told you.
- **Part 2 audio (~18 s):** I said, sorry, folks, this bus is going to the depot. You don't owe anybody a speech. You owe them one sentence. I'm not feeling it, I wish you well. Say it, and get off at your stop.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is Lou's own HANDHELD SELFIE, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Lou holds the phone close to his face in both hands, a little too close and slightly below his chin. Mild front-camera wide distortion, a gentle hand bob with his breathing and gestures. Any angle change comes only from Lou raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. A too-close selfie: his face fills much of the frame, the stoop steps and golden street tilting behind.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): genuinely upset about ghosting.
MOTIVE (fuel): thirty-eight years of announcing his stops.
GOAL: the viewer sends the one sentence.
OBSTACLE: he isn't good with the phone; the selfie wobbles.
TACTIC: he uses bus-driver authority and the depot line.
Moment to moment: «Ghosting.» — he squints into the too-close phone; «I'm still upset» — a wounded look; «you just... disappear?» — eyebrows up, baffled; «I drove a bus» — a proud chin lift.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: close front-camera wide distortion, the phone shaking slightly in his hands, golden light flaring at the frame edge; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Ghosting. Nicky explained it to me. I'm still upset. You go on three dates with somebody, and then you just... disappear? Kid, I drove a bus for thirty-eight years. If I wasn't gonna make your stop, I told you."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: indignant, warm, funny; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — Lou lifts the phone out to arm's length; the frame bobs once and settles.
0.6–3.2s — «Ghosting.…» he squints into the too-close phone.
3.2–8.1s — «I'm still upset…» a wounded look.
8.1–10.1s — «you just... disappear?…» eyebrows up, baffled.
10.1–17.1s — «I drove a bus…» a proud chin lift.
17.1–18.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEPOT ANNOUNCEMENT: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Lou holds the phone close to his face in both hands, a little too close and slightly below his chin. Mild front-camera wide distortion, a gentle hand bob with his breathing and gestures. Any angle change comes only from Lou raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. A too-close selfie: his face fills much of the frame, the stoop steps and golden street tilting behind. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): genuinely upset about ghosting.
MOTIVE (fuel): thirty-eight years of announcing his stops.
GOAL: the viewer sends the one sentence.
OBSTACLE: he isn't good with the phone; the selfie wobbles.
TACTIC: he uses bus-driver authority and the depot line.
Moment to moment: «this bus is going to the depot» — an announcer voice; he lets go with one hand and holds it as if at a microphone; «You owe them one sentence» — one finger up, both hands back on the phone after; «I wish you well» — gentle; «get off at your stop» — a firm nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: close front-camera wide distortion, the phone shaking slightly in his hands, golden light flaring at the frame edge; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "I said, sorry, folks, this bus is going to the depot. You don't owe anybody a speech. You owe them one sentence. I'm not feeling it, I wish you well. Say it, and get off at your stop."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: indignant, warm, funny; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–7.3s — «this bus is going to the depot…» an announcer voice; he lets go with one hand and holds it as if at a microphone (THE CENTERPIECE).
7.3–11.0s — «You owe them one sentence…» one finger up, both hands back on the phone after.
11.0–13.9s — «I wish you well…» gentle.
13.9–16.0s — «get off at your stop…» a firm nod.
16.0–18.0s — FINAL BEAT (audio has ended, lips still): he fumbles for the button to stop recording; the frame tilts. End.
```

</details>

## L8: The ring on the chain

- **Format:** Talking clip · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-armchair.jpg` · @audio1 `L8.mp3`
- **On-screen text (add in post):** "Why I wear my wedding ring on a chain"
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a navy wool cardigan over the light blue collared shirt. Lou is sitting in the leather armchair in evening lamp light in a navy cardigan, two fingers lifting the gold wedding band on its thin chain, a gentle look at the lens. The place: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Lighting: Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the glass of water on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «This is my wedding ring», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the glass of water on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium close-up, chest-up, the ring and chain clearly visible on his cardigan.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the story of the ring.
MOTIVE (fuel): Angie's laugh.
GOAL: share the secret without self-pity.
OBSTACLE: grief.
TACTIC: he keeps it light with the sheriff joke, then lets it go quiet.
Moment to moment: «This is my wedding ring» — THE SIGNATURE: he lifts the ring on the chain between two fingers; «so it lives here» — he lets it rest back on his chest; «I got bigger» — a self-deprecating chuckle; «Angie laughed so hard» — a warm smile, eyes glistening but bright; «like a sheriff's badge» — he searches for the words, then taps the ring like a badge; «She passed two years later» — the register breaks: quiet, eyes drop; «We said goodnight every night» — his eyes come back up, steady; «through the bathroom door» — a small laugh through it.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the thin gold chain catching the lamp light, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "This is my wedding ring. It doesn't fit anymore, so it lives here. Twenty nineteen, my knuckles got big. The ring didn't get smaller, I got bigger. Angie laughed so hard. She said, Louie, now it's closer to your heart, like a... like a sheriff's badge. She passed two years later. Sixty-five years. People ask me the secret. We said goodnight every night. Even when we were fighting. Even through the bathroom door."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, wry, warm; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.5s — «This is my wedding ring…» THE SIGNATURE: he lifts the ring on the chain between two fingers.
4.5–10.7s — «so it lives here…» he lets it rest back on his chest.
10.7–12.0s — «I got bigger…» a self-deprecating chuckle.
12.0–18.4s — «Angie laughed so hard…» a warm smile, eyes glistening but bright.
18.4–20.1s — «like a sheriff's badge…» he searches for the words, then taps the ring like a badge.
20.1–25.2s — «She passed two years later…» the register breaks: quiet, eyes drop (THE CENTERPIECE).
25.2–29.8s — «We said goodnight every night…» his eyes come back up, steady.
29.8–31.5s — «through the bathroom door…» a small laugh through it.
31.5–33.0s — FINAL BEAT (audio has ended, lips still): he glances at the framed photo on the side table. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “This is my wedding ring” he lifts the ring on the chain between two fingers; on “so it lives here” he lets it rest back on his chest; on “I got bigger” a self-deprecating chuckle; on “Angie laughed so hard” a warm smile, eyes glistening but bright. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L8-1.mp3` and `L8-2.mp3`.

- **Part 1 audio (~13 s):** This is my wedding ring. It doesn't fit anymore, so it lives here. Twenty nineteen, my knuckles got big. The ring didn't get smaller, I got bigger.
- **Part 2 audio (~21 s):** Angie laughed so hard. She said, Louie, now it's closer to your heart, like a... like a sheriff's badge. She passed two years later. Sixty-five years. People ask me the secret. We said goodnight every night. Even when we were fighting. Even through the bathroom door.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the glass of water on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (he touches the gold wedding band on the chain at his chest) happens ONCE, exactly on «This is my wedding ring», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the glass of water on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium close-up, chest-up, the ring and chain clearly visible on his cardigan.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the story of the ring.
MOTIVE (fuel): Angie's laugh.
GOAL: share the secret without self-pity.
OBSTACLE: grief.
TACTIC: he keeps it light with the sheriff joke, then lets it go quiet.
Moment to moment: «This is my wedding ring» — THE SIGNATURE: he lifts the ring on the chain between two fingers; «so it lives here» — he lets it rest back on his chest; «I got bigger» — a self-deprecating chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the thin gold chain catching the lamp light, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~13 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "This is my wedding ring. It doesn't fit anymore, so it lives here. Twenty nineteen, my knuckles got big. The ring didn't get smaller, I got bigger."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, wry, warm; ~13 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~13 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.5s — «This is my wedding ring…» THE SIGNATURE: he lifts the ring on the chain between two fingers.
4.5–10.7s — «so it lives here…» he lets it rest back on his chest.
10.7–12.0s — «I got bigger…» a self-deprecating chuckle.
12.0–13.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE QUIET TURN on 'She passed two years later': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the glass of water on the side table, at a 45-degree angle. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium close-up, chest-up, the ring and chain clearly visible on his cardigan. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the story of the ring.
MOTIVE (fuel): Angie's laugh.
GOAL: share the secret without self-pity.
OBSTACLE: grief.
TACTIC: he keeps it light with the sheriff joke, then lets it go quiet.
Moment to moment: «Angie laughed so hard» — a warm smile, eyes glistening but bright; «like a sheriff's badge» — he searches for the words, then taps the ring like a badge; «She passed two years later» — the register breaks: quiet, eyes drop; «We said goodnight every night» — his eyes come back up, steady; «through the bathroom door» — a small laugh through it.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the thin gold chain catching the lamp light, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Angie laughed so hard. She said, Louie, now it's closer to your heart, like a... like a sheriff's badge. She passed two years later. Sixty-five years. People ask me the secret. We said goodnight every night. Even when we were fighting. Even through the bathroom door."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: tender, wry, warm; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–6.7s — «Angie laughed so hard…» a warm smile, eyes glistening but bright.
6.7–8.4s — «like a sheriff's badge…» he searches for the words, then taps the ring like a badge.
8.4–13.5s — «She passed two years later…» the register breaks: quiet, eyes drop (THE CENTERPIECE).
13.5–18.1s — «We said goodnight every night…» his eyes come back up, steady.
18.1–19.8s — «through the bathroom door…» a small laugh through it.
19.8–21.0s — FINAL BEAT (audio has ended, lips still): he glances at the framed photo on the side table. End.
```

</details>

## L9: Lou's Rules #2, first date on a Tuesday

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-stoop.jpg` · @audio1 `L9.mp3`
- **On-screen text (add in post):** "Lou's rule #2: first date on a Tuesday"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers. Lou is sitting on the brownstone stoop at golden hour in a camel coat, two fingers raised, a twinkly look at the lens. The place: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Lighting: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SHEEPISH CONFESSION: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step, a touch off-center.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the Tuesday rule.
MOTIVE (fuel): low-pressure honesty.
GOAL: make Tuesday dates sound obviously smart.
OBSTACLE: admitting his own first date was a Saturday.
TACTIC: two fingers up, mock-weary of Saturdays, a sheepish ending.
Moment to moment: «Lou's rule number two» — two fingers up; «Not Saturday. Tuesday.» — a firm little headshake, then a nod; «Saturday's a whole production» — hands spread like a big show; «Nobody expects nothing» — a relaxed shrug; «A coffee and a walk» — one finger; «home by eight for your programs» — a contented pat on his knee; «our first was a Saturday» — a sheepish look away; «do as I say, not as I did» — a wagging finger and a chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number two. First date on a Tuesday. Not Saturday. Tuesday. Saturday's a whole production, everybody's pretending. Tuesday? Nobody expects nothing. A coffee and a walk. One hour. If it's good, you'll know, and you got the whole week to look forward to the next one. If it's bad... hey, you're home by eight for your programs. Angie and me, our first was a Saturday. So... do as I say, not as I did."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: easy, twinkly; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–4.3s — «Lou's rule number two…» two fingers up.
4.3–5.7s — «Not Saturday. Tuesday.…» a firm little headshake, then a nod.
5.7–8.7s — «Saturday's a whole production…» hands spread like a big show.
8.7–10.0s — «Nobody expects nothing…» a relaxed shrug.
10.0–22.6s — «A coffee and a walk…» one finger.
22.6–26.3s — «home by eight for your programs…» a contented pat on his knee.
26.3–29.1s — «our first was a Saturday…» a sheepish look away (THE CENTERPIECE).
29.1–32.4s — «do as I say, not as I did…» a wagging finger and a chuckle.
32.4–34.0s — FINAL BEAT (audio has ended, lips still): he leans back on his elbows on the step. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Lou's rule number two” two fingers up; on “Not Saturday. Tuesday.” a firm little headshake, then a nod; on “Saturday's a whole production” hands spread like a big show; on “Nobody expects nothing” a relaxed shrug. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L9-1.mp3` and `L9-2.mp3`.

- **Part 1 audio (~11 s):** Lou's rule number two. First date on a Tuesday. Not Saturday. Tuesday. Saturday's a whole production, everybody's pretending. Tuesday? Nobody expects nothing.
- **Part 2 audio (~24 s):** A coffee and a walk. One hour. If it's good, you'll know, and you got the whole week to look forward to the next one. If it's bad... hey, you're home by eight for your programs. Angie and me, our first was a Saturday. So... do as I say, not as I did.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step, a touch off-center.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the Tuesday rule.
MOTIVE (fuel): low-pressure honesty.
GOAL: make Tuesday dates sound obviously smart.
OBSTACLE: admitting his own first date was a Saturday.
TACTIC: two fingers up, mock-weary of Saturdays, a sheepish ending.
Moment to moment: «Lou's rule number two» — two fingers up; «Not Saturday. Tuesday.» — a firm little headshake, then a nod; «Saturday's a whole production» — hands spread like a big show; «Nobody expects nothing» — a relaxed shrug.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number two. First date on a Tuesday. Not Saturday. Tuesday. Saturday's a whole production, everybody's pretending. Tuesday? Nobody expects nothing."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: easy, twinkly; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–4.3s — «Lou's rule number two…» two fingers up.
4.3–5.7s — «Not Saturday. Tuesday.…» a firm little headshake, then a nod.
5.7–8.7s — «Saturday's a whole production…» hands spread like a big show.
8.7–10.0s — «Nobody expects nothing…» a relaxed shrug.
10.0–11.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SHEEPISH CONFESSION: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step, a touch off-center. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the Tuesday rule.
MOTIVE (fuel): low-pressure honesty.
GOAL: make Tuesday dates sound obviously smart.
OBSTACLE: admitting his own first date was a Saturday.
TACTIC: two fingers up, mock-weary of Saturdays, a sheepish ending.
Moment to moment: «A coffee and a walk» — one finger; «home by eight for your programs» — a contented pat on his knee; «our first was a Saturday» — a sheepish look away; «do as I say, not as I did» — a wagging finger and a chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~24 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "A coffee and a walk. One hour. If it's good, you'll know, and you got the whole week to look forward to the next one. If it's bad... hey, you're home by eight for your programs. Angie and me, our first was a Saturday. So... do as I say, not as I did."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: easy, twinkly; ~24 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~24 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–12.9s — «A coffee and a walk…» one finger.
12.9–16.6s — «home by eight for your programs…» a contented pat on his knee.
16.6–19.4s — «our first was a Saturday…» a sheepish look away (THE CENTERPIECE).
19.4–22.7s — «do as I say, not as I did…» a wagging finger and a chuckle.
22.7–24.0s — FINAL BEAT (audio has ended, lips still): he leans back on his elbows on the step. End.
```

</details>

## L10: Ask Grandpa Lou: should I text first?

- **Format:** Talking clip · **~Length:** 35 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-armchair.jpg` · @audio1 `L10.mp3`
- **On-screen text (add in post):** "Ask Grandpa Lou: should I text first?"
- **Length:** ~35 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers. Lou is sitting in the leather armchair holding a folded sheet of paper with illegible writing, peering at it, warm afternoon light. The place: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Lighting: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SCANDALISED MEMORY: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): answering a viewer's question from the comments.
MOTIVE (fuel): Angie went first, and it changed his life.
GOAL: give the viewer permission to go first.
OBSTACLE: the embarrassing story.
TACTIC: he reads the question off the paper, then answers to the lens.
Moment to moment: «Somebody wrote» — he lifts the folded paper and peers at it; «will I look desperate?» — he lowers the paper, a pitying look over it; «Desperate is waiting three days» — one finger up; «Text first. Call first! Whatever.» — a self-correction, then a dismissive wave; «the one with the guts» — a fist to his chest; «left a message with my boss» — eyes wide, scandalised all over again; «I married her» — a soft, proud grin; «I'll answer the good ones» — he waggles the paper.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a folded sheet of paper with illegible printed writing (Nicky printed the comment), held in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper crinkling, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~35 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Ask Grandpa Lou. Somebody wrote, should I text first, or will I look desperate? Sweetheart. Desperate is waiting three days to answer a message you read in three seconds. Text first. Call first! Whatever. Whoever goes first isn't the loser, they're the one with the guts. Angie went first once. She called the garage and left a message with my boss. Biggest embarrassment of my life. I married her. Send your questions, I'll answer the good ones."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, encouraging; ~35 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~35 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.9s — «Somebody wrote…» he lifts the folded paper and peers at it.
4.9–7.1s — «will I look desperate?…» he lowers the paper, a pitying look over it.
7.1–12.8s — «Desperate is waiting three days…» one finger up.
12.8–17.9s — «Text first. Call first! Whatever.…» a self-correction, then a dismissive wave.
17.9–23.7s — «the one with the guts…» a fist to his chest.
23.7–28.3s — «left a message with my boss…» eyes wide, scandalised all over again (THE CENTERPIECE).
28.3–30.8s — «I married her…» a soft, proud grin.
30.8–32.9s — «I'll answer the good ones…» he waggles the paper.
32.9–35.0s — FINAL BEAT (audio has ended, lips still): he folds the paper and tucks it into his cardigan pocket. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Somebody wrote” he lifts the folded paper and peers at it; on “will I look desperate?” he lowers the paper, a pitying look over it; on “Desperate is waiting three days” one finger up; on “Text first. Call first! Whatever.” a self-correction, then a dismissive wave. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L10-1.mp3` and `L10-2.mp3`.

- **Part 1 audio (~21 s):** Ask Grandpa Lou. Somebody wrote, should I text first, or will I look desperate? Sweetheart. Desperate is waiting three days to answer a message you read in three seconds. Text first. Call first! Whatever. Whoever goes first isn't the loser, they're the one with the guts.
- **Part 2 audio (~15 s):** Angie went first once. She called the garage and left a message with my boss. Biggest embarrassment of my life. I married her. Send your questions, I'll answer the good ones.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): answering a viewer's question from the comments.
MOTIVE (fuel): Angie went first, and it changed his life.
GOAL: give the viewer permission to go first.
OBSTACLE: the embarrassing story.
TACTIC: he reads the question off the paper, then answers to the lens.
Moment to moment: «Somebody wrote» — he lifts the folded paper and peers at it; «will I look desperate?» — he lowers the paper, a pitying look over it; «Desperate is waiting three days» — one finger up; «Text first. Call first! Whatever.» — a self-correction, then a dismissive wave; «the one with the guts» — a fist to his chest.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a folded sheet of paper with illegible printed writing (Nicky printed the comment), held in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper crinkling, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Ask Grandpa Lou. Somebody wrote, should I text first, or will I look desperate? Sweetheart. Desperate is waiting three days to answer a message you read in three seconds. Text first. Call first! Whatever. Whoever goes first isn't the loser, they're the one with the guts."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, encouraging; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.9s — «Somebody wrote…» he lifts the folded paper and peers at it.
4.9–7.1s — «will I look desperate?…» he lowers the paper, a pitying look over it.
7.1–12.8s — «Desperate is waiting three days…» one finger up.
12.8–17.9s — «Text first. Call first! Whatever.…» a self-correction, then a dismissive wave.
17.9–20.0s — «the one with the guts…» a fist to his chest.
20.0–21.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SCANDALISED MEMORY: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): answering a viewer's question from the comments.
MOTIVE (fuel): Angie went first, and it changed his life.
GOAL: give the viewer permission to go first.
OBSTACLE: the embarrassing story.
TACTIC: he reads the question off the paper, then answers to the lens.
Moment to moment: «left a message with my boss» — eyes wide, scandalised all over again; «I married her» — a soft, proud grin; «I'll answer the good ones» — he waggles the paper.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a folded sheet of paper with illegible printed writing (Nicky printed the comment), held in his hand from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the paper crinkling, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~15 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Angie went first once. She called the garage and left a message with my boss. Biggest embarrassment of my life. I married her. Send your questions, I'll answer the good ones."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, encouraging; ~15 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~15 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–8.6s — «left a message with my boss…» eyes wide, scandalised all over again (THE CENTERPIECE).
8.6–11.1s — «I married her…» a soft, proud grin.
11.1–13.2s — «I'll answer the good ones…» he waggles the paper.
13.2–15.0s — FINAL BEAT (audio has ended, lips still): he folds the paper and tucks it into his cardigan pocket. End.
```

</details>

## L11: They went quiet

- **Format:** Talking clip · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L11.mp3`
- **On-screen text (add in post):** "They stopped texting back. Say this."
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table with a napkin tucked into his collar, a sympathetic look at the lens. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DRAWER: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a calm crisis protocol for a silent phone.
MOTIVE (fuel): he hates seeing kids wait by the phone.
GOAL: the viewer sends one message, then puts the phone away.
OBSTACLE: the viewer's panic.
TACTIC: slow, calming, word for word, and the drawer gesture.
Moment to moment: «They went quiet.» — a sympathetic look; «Don't send fifteen question marks» — a headshake, a little wince; «Call once.» — one finger; «exactly this» — he leans in, deliberate; «I'd love to see you Thursday» — he says the words slowly, like dictating; «the phone goes in a drawer» — he mimes sliding a drawer shut; «both are answers» — kind eyes; «Link in my bio» — a small nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "They went quiet. Two days, three days, nothing. Don't send fifteen question marks. Call once. No answer? You send one message, exactly this. Hey, I've enjoyed getting to know you. If you're still interested, I'd love to see you Thursday. If not, no hard feelings. Then the phone goes in a drawer. An answer, or no answer... both are answers, sweetheart. I wrote you the exact words for the rest. Link in my bio."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, kind, firm; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–3.9s — «They went quiet.…» a sympathetic look.
3.9–6.0s — «Don't send fifteen question marks…» a headshake, a little wince.
6.0–9.4s — «Call once.…» one finger.
9.4–14.8s — «exactly this…» he leans in, deliberate.
14.8–19.8s — «I'd love to see you Thursday…» he says the words slowly, like dictating.
19.8–24.6s — «the phone goes in a drawer…» he mimes sliding a drawer shut (THE CENTERPIECE).
24.6–30.0s — «both are answers…» kind eyes.
30.0–31.7s — «Link in my bio…» a small nod.
31.7–33.0s — FINAL BEAT (audio has ended, lips still): he pats the table: done. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “They went quiet.” a sympathetic look; on “Don't send fifteen question marks” a headshake, a little wince; on “Call once.” one finger; on “exactly this” he leans in, deliberate. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L11-1.mp3` and `L11-2.mp3`.

- **Part 1 audio (~11 s):** They went quiet. Two days, three days, nothing. Don't send fifteen question marks. Call once. No answer? You send one message, exactly this.
- **Part 2 audio (~23 s):** Hey, I've enjoyed getting to know you. If you're still interested, I'd love to see you Thursday. If not, no hard feelings. Then the phone goes in a drawer. An answer, or no answer... both are answers, sweetheart. I wrote you the exact words for the rest. Link in my bio.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a calm crisis protocol for a silent phone.
MOTIVE (fuel): he hates seeing kids wait by the phone.
GOAL: the viewer sends one message, then puts the phone away.
OBSTACLE: the viewer's panic.
TACTIC: slow, calming, word for word, and the drawer gesture.
Moment to moment: «They went quiet.» — a sympathetic look; «Don't send fifteen question marks» — a headshake, a little wince; «Call once.» — one finger; «exactly this» — he leans in, deliberate.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "They went quiet. Two days, three days, nothing. Don't send fifteen question marks. Call once. No answer? You send one message, exactly this."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, kind, firm; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–3.9s — «They went quiet.…» a sympathetic look.
3.9–6.0s — «Don't send fifteen question marks…» a headshake, a little wince.
6.0–9.4s — «Call once.…» one finger.
9.4–10.3s — «exactly this…» he leans in, deliberate.
10.3–11.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DRAWER: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a calm crisis protocol for a silent phone.
MOTIVE (fuel): he hates seeing kids wait by the phone.
GOAL: the viewer sends one message, then puts the phone away.
OBSTACLE: the viewer's panic.
TACTIC: slow, calming, word for word, and the drawer gesture.
Moment to moment: «I'd love to see you Thursday» — he says the words slowly, like dictating; «the phone goes in a drawer» — he mimes sliding a drawer shut; «both are answers» — kind eyes; «Link in my bio» — a small nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, family murmur off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~23 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Hey, I've enjoyed getting to know you. If you're still interested, I'd love to see you Thursday. If not, no hard feelings. Then the phone goes in a drawer. An answer, or no answer... both are answers, sweetheart. I wrote you the exact words for the rest. Link in my bio."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: calm, kind, firm; ~23 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~23 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–9.8s — «I'd love to see you Thursday…» he says the words slowly, like dictating.
9.8–14.6s — «the phone goes in a drawer…» he mimes sliding a drawer shut (THE CENTERPIECE).
14.6–20.0s — «both are answers…» kind eyes.
20.0–21.7s — «Link in my bio…» a small nod.
21.7–23.0s — FINAL BEAT (audio has ended, lips still): he pats the table: done. End.
```

</details>

## L12: How to ask somebody out

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-stoop.jpg` · @audio1 `L12.mp3`
- **On-screen text (add in post):** "How to ask someone out (from a man married 65 years)"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers. Lou is sitting on the brownstone stoop at golden hour in a camel coat, a businesslike look at the lens. The place: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Lighting: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEMONSTRATION: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a masterclass in asking someone out.
MOTIVE (fuel): eleven cents, and a day and a time.
GOAL: the viewer asks someone this week.
OBSTACLE: 'sometime' culture.
TACTIC: he kills 'sometime', then dictates the words.
Moment to moment: «How to ask somebody out» — a businesslike look; «with eleven cents» — he pats his pocket; «we should hang out sometime» — a vague, limp hand; «Sometime is never, kid» — a flat look; «I like talking to you» — he softens, demonstrating; «on Tuesday, around six?» — one finger, then two; «A day and a time.» — he taps his knee twice; «thanks for being straight with me» — a gracious nod; «And you mean it» — steady.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "How to ask somebody out. Word for word, from a man who did it with eleven cents. You don't say, we should hang out sometime. Sometime is never, kid. You say... I like talking to you. Would you like to get a coffee with me on Tuesday, around six? A day and a time. If they say yes, great. If they say no, you say, no problem, thanks for being straight with me. And you mean it."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: practical, warm; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–6.2s — «How to ask somebody out…» a businesslike look.
6.2–8.7s — «with eleven cents…» he pats his pocket.
8.7–10.8s — «we should hang out sometime…» a vague, limp hand.
10.8–13.6s — «Sometime is never, kid…» a flat look.
13.6–19.3s — «I like talking to you…» he softens, demonstrating.
19.3–21.0s — «on Tuesday, around six?…» one finger, then two.
21.0–28.4s — «A day and a time.…» he taps his knee twice.
28.4–30.9s — «thanks for being straight with me…» a gracious nod.
30.9–32.6s — «And you mean it…» steady.
32.6–34.0s — FINAL BEAT (audio has ended, lips still): he raises his eyebrows: got it?. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “How to ask somebody out” a businesslike look; on “with eleven cents” he pats his pocket; on “we should hang out sometime” a vague, limp hand; on “Sometime is never, kid” a flat look. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L12-1.mp3` and `L12-2.mp3`.

- **Part 1 audio (~14 s):** How to ask somebody out. Word for word, from a man who did it with eleven cents. You don't say, we should hang out sometime. Sometime is never, kid.
- **Part 2 audio (~22 s):** You say... I like talking to you. Would you like to get a coffee with me on Tuesday, around six? A day and a time. If they say yes, great. If they say no, you say, no problem, thanks for being straight with me. And you mean it.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a masterclass in asking someone out.
MOTIVE (fuel): eleven cents, and a day and a time.
GOAL: the viewer asks someone this week.
OBSTACLE: 'sometime' culture.
TACTIC: he kills 'sometime', then dictates the words.
Moment to moment: «How to ask somebody out» — a businesslike look; «with eleven cents» — he pats his pocket; «we should hang out sometime» — a vague, limp hand; «Sometime is never, kid» — a flat look.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "How to ask somebody out. Word for word, from a man who did it with eleven cents. You don't say, we should hang out sometime. Sometime is never, kid."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: practical, warm; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–6.2s — «How to ask somebody out…» a businesslike look.
6.2–8.7s — «with eleven cents…» he pats his pocket.
8.7–10.8s — «we should hang out sometime…» a vague, limp hand.
10.8–12.5s — «Sometime is never, kid…» a flat look.
12.5–14.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEMONSTRATION: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone at his eye level, sitting on the step below him. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, he sits on the top step. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a masterclass in asking someone out.
MOTIVE (fuel): eleven cents, and a day and a time.
GOAL: the viewer asks someone this week.
OBSTACLE: 'sometime' culture.
TACTIC: he kills 'sometime', then dictates the words.
Moment to moment: «I like talking to you» — he softens, demonstrating; «on Tuesday, around six?» — one finger, then two; «A day and a time.» — he taps his knee twice; «thanks for being straight with me» — a gracious nod; «And you mean it» — steady.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: leaves skittering, the coat folds, long golden shadows; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~22 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "You say... I like talking to you. Would you like to get a coffee with me on Tuesday, around six? A day and a time. If they say yes, great. If they say no, you say, no problem, thanks for being straight with me. And you mean it."
- Sound design: dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: practical, warm; ~22 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~22 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–7.1s — «I like talking to you…» he softens, demonstrating.
7.1–8.8s — «on Tuesday, around six?…» one finger, then two.
8.8–16.2s — «A day and a time.…» he taps his knee twice.
16.2–18.7s — «thanks for being straight with me…» a gracious nod.
18.7–20.4s — «And you mean it…» steady.
20.4–22.0s — FINAL BEAT (audio has ended, lips still): he raises his eyebrows: got it?. End.
```

</details>

## L13: Ask Grandpa Lou: how do I end a situationship?

- **Format:** Talking clip · **~Length:** 35 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-armchair.jpg` · @audio1 `L13.mp3`
- **On-screen text (add in post):** "Ask Grandpa Lou: how do I end a situationship?"
- **Length:** ~35 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a navy wool cardigan over the light blue collared shirt. Lou is sitting in the leather armchair in evening lamp light in a navy cardigan, a firm kind look at the lens, a glass of water on the side table. The place: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Lighting: Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE FLAT HAND 'Then you stop.': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up; the glass of water on the side table at frame edge.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the kind exit.
MOTIVE (fuel): the legend of Angie's one-sentence breakup.
GOAL: the viewer ends it kindly and briefly.
OBSTACLE: people over-explain, and he has to keep it short himself.
TACTIC: he dictates the words, then 'Then you stop' with a flat hand.
Moment to moment: «Like a grown-up, kid» — a firm look; «Not with a meme» — a disgusted little headshake; «I've realized» — slow, dictating; «I wish you well» — gentle; «Then you stop.» — a flat hand: stop; «don't apologize six times» — fingers flicking away; «Short is kind» — a quiet nod; «a Christmas card for forty years» — a delighted chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a glass of water on the side table (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the lamp light on the chain, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~35 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "How do I end a situationship? Like a grown-up, kid. On the phone, or better, in person. Not with a meme. You say... I've realized I want something more serious, and I don't think it's going to be us. I wish you well. Then you stop. Don't explain for twenty minutes, don't apologize six times. Short is kind. Angie ended it with a fella before me in one sentence. He sent her a Christmas card for forty years."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: firm, kind, wry; ~35 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~35 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–7.9s — «Like a grown-up, kid…» a firm look.
7.9–10.7s — «Not with a meme…» a disgusted little headshake.
10.7–17.2s — «I've realized…» slow, dictating.
17.2–18.9s — «I wish you well…» gentle.
18.9–22.2s — «Then you stop.…» a flat hand: stop (THE CENTERPIECE).
22.2–23.9s — «don't apologize six times…» fingers flicking away.
23.9–30.9s — «Short is kind…» a quiet nod.
30.9–33.4s — «a Christmas card for forty years…» a delighted chuckle.
33.4–35.0s — FINAL BEAT (audio has ended, lips still): he sips from the glass of water. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Like a grown-up, kid” a firm look; on “Not with a meme” a disgusted little headshake; on “I've realized” slow, dictating; on “I wish you well” gentle. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L13-1.mp3` and `L13-2.mp3`.

- **Part 1 audio (~20 s):** How do I end a situationship? Like a grown-up, kid. On the phone, or better, in person. Not with a meme. You say... I've realized I want something more serious, and I don't think it's going to be us. I wish you well.
- **Part 2 audio (~17 s):** Then you stop. Don't explain for twenty minutes, don't apologize six times. Short is kind. Angie ended it with a fella before me in one sentence. He sent her a Christmas card for forty years.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a short stack of hardback books on the side table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up; the glass of water on the side table at frame edge.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the kind exit.
MOTIVE (fuel): the legend of Angie's one-sentence breakup.
GOAL: the viewer ends it kindly and briefly.
OBSTACLE: people over-explain, and he has to keep it short himself.
TACTIC: he dictates the words, then 'Then you stop' with a flat hand.
Moment to moment: «Like a grown-up, kid» — a firm look; «Not with a meme» — a disgusted little headshake; «I've realized» — slow, dictating; «I wish you well» — gentle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a glass of water on the side table (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the lamp light on the chain, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~20 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "How do I end a situationship? Like a grown-up, kid. On the phone, or better, in person. Not with a meme. You say... I've realized I want something more serious, and I don't think it's going to be us. I wish you well."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: firm, kind, wry; ~20 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~20 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–7.9s — «Like a grown-up, kid…» a firm look.
7.9–10.7s — «Not with a meme…» a disgusted little headshake.
10.7–17.2s — «I've realized…» slow, dictating.
17.2–18.9s — «I wish you well…» gentle.
18.9–20.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE FLAT HAND 'Then you stop.': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a navy wool cardigan over the light blue collared shirt) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a short stack of hardback books on the side table, at a 45-degree angle. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot, chest-up; the glass of water on the side table at frame edge. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the kind exit.
MOTIVE (fuel): the legend of Angie's one-sentence breakup.
GOAL: the viewer ends it kindly and briefly.
OBSTACLE: people over-explain, and he has to keep it short himself.
TACTIC: he dictates the words, then 'Then you stop' with a flat hand.
Moment to moment: «Then you stop.» — a flat hand: stop; «don't apologize six times» — fingers flicking away; «Short is kind» — a quiet nod; «a Christmas card for forty years» — a delighted chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a glass of water on the side table (lifted only in the final beat). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the lamp light on the chain, the leather creaking; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Then you stop. Don't explain for twenty minutes, don't apologize six times. Short is kind. Angie ended it with a fella before me in one sentence. He sent her a Christmas card for forty years."
- Sound design: a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: firm, kind, wry; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–3.6s — «Then you stop.…» a flat hand: stop (THE CENTERPIECE).
3.6–5.3s — «don't apologize six times…» fingers flicking away.
5.3–12.3s — «Short is kind…» a quiet nod.
12.3–14.8s — «a Christmas card for forty years…» a delighted chuckle.
14.8–17.0s — FINAL BEAT (audio has ended, lips still): he sips from the glass of water. End.
```

</details>

## L14: The first phone call

- **Format:** Talking clip · **~Length:** 33 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L14.mp3`
- **On-screen text (add in post):** "Scared of phone calls? Say this in the first 30 seconds"
- **Length:** ~33 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table with a napkin tucked into his collar, a pitying, teasing look at the lens. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE POINT AT NICKY: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens (and teases Nicky behind it).

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teasing Nicky while teaching the first thirty seconds.
MOTIVE (fuel): his grandkids' fear of the phone baffles him.
GOAL: make calling feel doable.
OBSTACLE: Nicky, filming, embarrassed.
TACTIC: he teases Nicky, then dictates the opener.
Moment to moment: «You kids are scared of the phone» — a pitying look; «Nicky, you are» — he points at Nicky behind the phone; «word for word» — a lean in; «no, your name» — a self-correcting chuckle; «Is now a good time?» — polite, demonstrating; «I wanted to hear your voice» — a soft smile; «you need a reason» — one finger; «when's better?» — a gracious shrug.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, cutlery sounds off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~33 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "You kids are scared of the phone. Nicky's scared of the phone. Nicky, you are. Here's the first thirty seconds, word for word. Hi, it's Lou... no, your name, use your own name. Is now a good time? I was thinking about Saturday and I wanted to hear your voice. You don't need a speech, you need a reason. Bad time? No problem, when's better? I wrote down the rest. Link's in my bio."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, warm, practical; ~33 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~33 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.5s — «You kids are scared of the phone…» a pitying look.
5.5–8.8s — «Nicky, you are…» he points at Nicky behind the phone (THE CENTERPIECE).
8.8–11.6s — «word for word…» a lean in.
11.6–14.5s — «no, your name…» a self-correcting chuckle.
14.5–19.0s — «Is now a good time?…» polite, demonstrating.
19.0–23.5s — «I wanted to hear your voice…» a soft smile.
23.5–26.9s — «you need a reason…» one finger.
26.9–31.6s — «when's better?…» a gracious shrug.
31.6–33.0s — FINAL BEAT (audio has ended, lips still): he winks at Nicky. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “You kids are scared of the phone” a pitying look; on “Nicky, you are” he points at Nicky behind the phone; on “word for word” a lean in; on “no, your name” a self-correcting chuckle. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L14-1.mp3` and `L14-2.mp3`.

- **Part 1 audio (~16 s):** You kids are scared of the phone. Nicky's scared of the phone. Nicky, you are. Here's the first thirty seconds, word for word. Hi, it's Lou... no, your name, use your own name.
- **Part 2 audio (~19 s):** Is now a good time? I was thinking about Saturday and I wanted to hear your voice. You don't need a speech, you need a reason. Bad time? No problem, when's better? I wrote down the rest. Link's in my bio.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Nicky, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE POINT AT NICKY: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens (and teases Nicky behind it).

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teasing Nicky while teaching the first thirty seconds.
MOTIVE (fuel): his grandkids' fear of the phone baffles him.
GOAL: make calling feel doable.
OBSTACLE: Nicky, filming, embarrassed.
TACTIC: he teases Nicky, then dictates the opener.
Moment to moment: «You kids are scared of the phone» — a pitying look; «Nicky, you are» — he points at Nicky behind the phone; «word for word» — a lean in; «no, your name» — a self-correcting chuckle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, cutlery sounds off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "You kids are scared of the phone. Nicky's scared of the phone. Nicky, you are. Here's the first thirty seconds, word for word. Hi, it's Lou... no, your name, use your own name."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, warm, practical; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Nicky brings the phone into a steady hold; one tiny reframe.
0.5–5.5s — «You kids are scared of the phone…» a pitying look.
5.5–8.8s — «Nicky, you are…» he points at Nicky behind the phone (THE CENTERPIECE).
8.8–11.6s — «word for word…» a lean in.
11.6–14.5s — «no, your name…» a self-correcting chuckle.
14.5–16.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE POINT AT NICKY: give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Nicky, alive): Nicky holds the phone across the table at chest height, sitting. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Nicky is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot across the table, he speaks to the lens (and teases Nicky behind it). Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): teasing Nicky while teaching the first thirty seconds.
MOTIVE (fuel): his grandkids' fear of the phone baffles him.
GOAL: make calling feel doable.
OBSTACLE: Nicky, filming, embarrassed.
TACTIC: he teases Nicky, then dictates the opener.
Moment to moment: «Is now a good time?» — polite, demonstrating; «I wanted to hear your voice» — a soft smile; «you need a reason» — one finger; «when's better?» — a gracious shrug.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, cutlery sounds off-frame; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Is now a good time? I was thinking about Saturday and I wanted to hear your voice. You don't need a speech, you need a reason. Bad time? No problem, when's better? I wrote down the rest. Link's in my bio."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, warm, practical; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–4.8s — «Is now a good time?…» polite, demonstrating.
4.8–9.3s — «I wanted to hear your voice…» a soft smile.
9.3–12.7s — «you need a reason…» one finger.
12.7–17.4s — «when's better?…» a gracious shrug.
17.4–19.0s — FINAL BEAT (audio has ended, lips still): he winks at Nicky. End.
```

</details>

## L15: Lou's Rules #3, the phone goes face down

- **Format:** Talking clip · **~Length:** 34 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sunday-lunch.jpg` · @audio1 `L15.mp3`
- **On-screen text (add in post):** "Lou's rule #3"
- **Length:** ~34 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity anchors, all clearly visible: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. Wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. Lou is sitting at the Sunday lunch table with a napkin tucked into his collar, three fingers raised, a sugar bowl in the near foreground. The place: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Lighting: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from a new phone: clean, sharp, true-to-life color. Real aged skin with pores, wrinkles and liver spots; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the sugar bowl on the table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN 'He messed it up.': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the sugar bowl on the table, a little below his eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the sugar bowl's rim soft in the near foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): rule three, with a family story.
MOTIVE (fuel): Nicky's lost chance.
GOAL: the viewer turns their phone face down.
OBSTACLE: he's still annoyed at Nicky.
TACTIC: he demonstrates with an imaginary phone, tells the story, and ends deadpan.
Moment to moment: «Lou's rule number three» — three fingers up; «the phone goes face down» — he flips an imaginary phone face down on the cloth; «like a little TV» — a mocking little frame made with his fingers; «she put her phone in her bag» — an approving nod; «She asked my sister about her hip!» — a delighted, impressed look; «kid, don't mess this up» — a stern whisper; «He messed it up.» — a deadpan look straight into the lens; «Rule number four next week» — four fingers, a twinkle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the lace cloth under his hands; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~34 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number three. On a date, the phone goes face down. Not on the table screen up like a little TV. Face down, or in the pocket. Nicky brought a girl to Sunday lunch, and she put her phone in her bag the whole time. She asked my sister about her hip! I took Nicky in the kitchen and I said, kid, don't mess this up. He messed it up. Rule number four next week."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~34 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~34 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.7s — «Lou's rule number three…» three fingers up.
3.7–8.2s — «the phone goes face down…» he flips an imaginary phone face down on the cloth.
8.2–15.6s — «like a little TV…» a mocking little frame made with his fingers.
15.6–19.7s — «she put her phone in her bag…» an approving nod.
19.7–26.2s — «She asked my sister about her hip!…» a delighted, impressed look.
26.2–28.3s — «kid, don't mess this up…» a stern whisper.
28.3–30.0s — «He messed it up.…» a deadpan look straight into the lens (THE CENTERPIECE).
30.0–32.1s — «Rule number four next week…» four fingers, a twinkle.
32.1–34.0s — FINAL BEAT (audio has ended, lips still): he shakes his head slowly. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Lou talks to the camera with natural, invested delivery that matches the voice exactly: on “Lou's rule number three” three fingers up; on “the phone goes face down” he flips an imaginary phone face down on the cloth; on “like a little TV” a mocking little frame made with his fingers; on “she put her phone in her bag” an approving nod. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep his face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `L15-1.mp3` and `L15-2.mp3`.

- **Part 1 audio (~11 s):** Lou's rule number three. On a date, the phone goes face down. Not on the table screen up like a little TV.
- **Part 2 audio (~24 s):** Face down, or in the pocket. Nicky brought a girl to Sunday lunch, and she put her phone in her bag the whole time. She asked my sister about her hip! I took Nicky in the kitchen and I said, kid, don't mess this up. He messed it up. Rule number four next week.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the sugar bowl on the table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the sugar bowl on the table, a little below his eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the sugar bowl's rim soft in the near foreground.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): rule three, with a family story.
MOTIVE (fuel): Nicky's lost chance.
GOAL: the viewer turns their phone face down.
OBSTACLE: he's still annoyed at Nicky.
TACTIC: he demonstrates with an imaginary phone, tells the story, and ends deadpan.
Moment to moment: «Lou's rule number three» — three fingers up; «the phone goes face down» — he flips an imaginary phone face down on the cloth; «like a little TV» — a mocking little frame made with his fingers.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the lace cloth under his hands; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Lou's rule number three. On a date, the phone goes face down. Not on the table screen up like a little TV."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.7s — «Lou's rule number three…» three fingers up.
3.7–8.2s — «the phone goes face down…» he flips an imaginary phone face down on the cloth.
8.2–9.9s — «like a little TV…» a mocking little frame made with his fingers.
9.9–11.0s — he holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Lou speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN 'He messed it up.': give it room. 5) Face and identity match @image1 100% for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE MAN (Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build; identity anchors: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan; in this video wearing a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight him from scratch to the scene. Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face.

Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the sugar bowl on the table, a little below his eye level. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the sugar bowl's rim soft in the near foreground. Framing a touch closer than Part 1.

ACTING TASK — LOU (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): rule three, with a family story.
MOTIVE (fuel): Nicky's lost chance.
GOAL: the viewer turns their phone face down.
OBSTACLE: he's still annoyed at Nicky.
TACTIC: he demonstrates with an imaginary phone, tells the story, and ends deadpan.
Moment to moment: «she put her phone in her bag» — an approving nod; «She asked my sister about her hip!» — a delighted, impressed look; «kid, don't mess this up» — a stern whisper; «He messed it up.» — a deadpan look straight into the lens; «Rule number four next week» — four fingers, a twinkle.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Nicky is never seen; nobody else is heard.

Physics: the napkin in his collar, the lace cloth under his hands; true weight where he sits; fabric breathing with his movement.

Consistency: Lou matches @image1 exactly (relit) for the entire take; the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~24 s.

Technical: 9:16 vertical, 1080x1920, clean modern-phone video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Lou's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
LOU: "Face down, or in the pocket. Nicky brought a girl to Sunday lunch, and she put her phone in her bag the whole time. She asked my sister about her hip! I took Nicky in the kitchen and I said, kid, don't mess this up. He messed it up. Rule number four next week."
- Sound design: cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: wry, warm; ~24 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~24 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Lou is already mid-energy.
0.3–10.1s — «she put her phone in her bag…» an approving nod.
10.1–16.6s — «She asked my sister about her hip!…» a delighted, impressed look.
16.6–18.7s — «kid, don't mess this up…» a stern whisper.
18.7–20.4s — «He messed it up.…» a deadpan look straight into the lens (THE CENTERPIECE).
20.4–22.5s — «Rule number four next week…» four fingers, a twinkle.
22.5–24.0s — FINAL BEAT (audio has ended, lips still): he shakes his head slowly. End.
```

</details>

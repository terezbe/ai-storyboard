# Video prompts: Rosa

> **קובץ הפרומפטים לווידאו של רוזה.** כל הפרומפטים באנגלית, מוכנים להדבקה.
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
[voice: elderly woman, mid-90s, speaking English only, warm Sicilian Italian accent (soft and musical, natural, not a cartoon, not heavy), slightly husky timbre with a light rasp of age, strong and lively, never frail or shaky; quick bursts of words then sudden pauses; laughs mid-sentence; an affectionate "amore"; mischievous, warm and blunt; recorded on an old phone outdoors by the sea, light breeze and gentle waves far behind]
```

Seed line to audition the voice:

```text
Listen to me, amore. A hundred and twelve steps, every morning, down and up... and the sea? Eh. The sea doesn't care how old you are.
```

Workflow:

- **Lock the voice.** Generate the seed line until it sounds right, then SAVE the voice. Every script uses this same saved voice; never regenerate it.
- **Paste each script exactly as written.** The punctuation is the pacing.
- **Export.** Save as MP3 and name each file after its video ID.
- **Timing estimates.** Most scripts run about 29–35 s. This file gives every talking clip both a single-clip prompt and a two-part version.
  - Use the single-clip prompt when the voice file is ≤ 28 s and your generator allows 30 s.
  - Otherwise, use the two-part version.

## 2. Index

| ID | Video | Format | Location | ~Length |
|---|---|---|---|---|
| R1 | Things I never do at 94 (part one) | Talking clip | `locations/1-kitchen.jpg` | 32 s |
| R2 | Swim with Rosa (episode 1) | Talking clip | `locations/2-sea-rocks.jpg` | 31 s |
| R3 | My doctor is sixty years younger than me | Talking clip | `locations/3-doorstep.jpg` | 31 s |
| R4 | Thirty and tired every morning? | Talking clip | `locations/1-kitchen.jpg` | 30 s |
| R5 | Red flags in your morning | Talking clip | `locations/3-doorstep.jpg` | 31 s |
| R6 | What I eat in a day at 94 (silent b-roll) | Silent b-roll | `locations/1-kitchen.jpg` | 10 s |
| R7 | My husband bought me this with one fish | Interview | `locations/3-doorstep.jpg` | 31 s |
| R8 | Riposo: you call it lazy | Talking clip | `locations/3-doorstep.jpg` | 32 s |
| R9 | Things I never do at 94 (part two) | Talking clip | `locations/3-doorstep.jpg` | 32 s |
| R10 | Swim with Rosa (episode 2, windy day) | Talking clip | `locations/2-sea-rocks.jpg` | 31 s |
| R11 | Day one of the Morning Reset | Talking clip | `locations/1-kitchen.jpg` | 32 s |
| R12 | Things I never do at 94 (part three) | Talking clip | `locations/1-kitchen.jpg` | 30 s |
| R13 | Swim with Rosa (episode 3, October) | Talking clip | `locations/2-sea-rocks.jpg` | 32 s |
| R14 | What I tell Giulia every morning | Interview | `locations/1-kitchen.jpg` | 31 s |
| R15 | Concetta tried my thirty mornings | Talking clip | `locations/3-doorstep.jpg` | 31 s |

## R1: Things I never do at 94 (part one)

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg` · @audio1 `R1.mp3`
- **On-screen text (add in post):** "Things I never do at 94"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is sitting at the kitchen table, forearms on the white crochet cloth, chest-up, a sly closed-lip smile into the lens, a small coffee cup beside her hand. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a wooden bread board leaning on the wall at the back of the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE COLLAPSE: the lift item falling apart and her waving it away: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a wooden bread board leaning on the wall at the back of the kitchen table, a little below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. She sits at the table with her forearms on the crochet cloth, a touch off-center; the window and the blue-and-white tiles are soft behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the opener of a series: a 94-year-old enjoying listing her own rules, delighted with herself.
MOTIVE (fuel): she has outlived everyone who told her to slow down; her 'nevers' are trophies.
GOAL: make the viewer laugh AND want part two.
OBSTACLE: the lift item collapses mid-list and she has to rescue it without losing the rhythm.
TACTIC: she counts the 'nevers' on her fingers and checks the lens after each one: did it land?.
Moment to moment: «Things I never do» — chin up, a proud little smile, eyes straight into the lens; «I never eat standing up» — one finger up, deadly serious; «like a seagull» — a quick pecking mime with her fingers, then a laugh breaks through; «I never take the lift» — a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away; «A hundred and twelve steps» — a proud nod, a thumb pointing down toward the sea; «And I never look at the telephone» — a third finger, leaning in to the lens, mock-stern; «Giulia hates this one» — her eyes flick off-lens toward Giulia, mischievous; «Part two next week» — back to the lens, a sly closed-lip smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white coffee cup on a saucer on the cloth beside her hand (static, never moves). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves creasing at the elbow, the coral beads shifting as she leans, dust motes in the window light; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, and I'm ninety-four. I never eat standing up. Never. You eat standing up, you eat like a seagull, you don't even taste it. I never take the lift... eh, we don't have a lift. Doesn't count. A hundred and twelve steps, down and up. That counts. And I never look at the telephone before I look at the sea. Giulia hates this one. After this, amore, you put it down. Part two next week."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: mischievous, warm, quick; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.4s — «Things I never do…» chin up, a proud little smile, eyes straight into the lens.
3.4–7.8s — «I never eat standing up…» one finger up, deadly serious.
7.8–10.7s — «like a seagull…» a quick pecking mime with her fingers, then a laugh breaks through.
10.7–15.8s — «I never take the lift…» a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away (THE CENTERPIECE).
15.8–19.5s — «A hundred and twelve steps…» a proud nod, a thumb pointing down toward the sea.
19.5–24.2s — «And I never look at the telephone…» a third finger, leaning in to the lens, mock-stern.
24.2–28.3s — «Giulia hates this one…» her eyes flick off-lens toward Giulia, mischievous.
28.3–29.8s — «Part two next week…» back to the lens, a sly closed-lip smile.
29.8–32.0s — FINAL BEAT (audio has ended, lips still): she holds the sly smile one beat and raises her eyebrows once: case closed. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Things I never do” chin up, a proud little smile, eyes straight into the lens; on “I never eat standing up” one finger up, deadly serious; on “like a seagull” a quick pecking mime with her fingers, then a laugh breaks through; on “I never take the lift” a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R1-1.mp3` and `R1-2.mp3`.

- **Part 1 audio (~21 s):** Things I never do, and I'm ninety-four. I never eat standing up. Never. You eat standing up, you eat like a seagull, you don't even taste it. I never take the lift... eh, we don't have a lift. Doesn't count. A hundred and twelve steps, down and up. That counts.
- **Part 2 audio (~12 s):** And I never look at the telephone before I look at the sea. Giulia hates this one. After this, amore, you put it down. Part two next week.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a wooden bread board leaning on the wall at the back of the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE COLLAPSE: the lift item falling apart and her waving it away: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a wooden bread board leaning on the wall at the back of the kitchen table, a little below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. She sits at the table with her forearms on the crochet cloth, a touch off-center; the window and the blue-and-white tiles are soft behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the opener of a series: a 94-year-old enjoying listing her own rules, delighted with herself.
MOTIVE (fuel): she has outlived everyone who told her to slow down; her 'nevers' are trophies.
GOAL: make the viewer laugh AND want part two.
OBSTACLE: the lift item collapses mid-list and she has to rescue it without losing the rhythm.
TACTIC: she counts the 'nevers' on her fingers and checks the lens after each one: did it land?.
Moment to moment: «Things I never do» — chin up, a proud little smile, eyes straight into the lens; «I never eat standing up» — one finger up, deadly serious; «like a seagull» — a quick pecking mime with her fingers, then a laugh breaks through; «I never take the lift» — a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away; «A hundred and twelve steps» — a proud nod, a thumb pointing down toward the sea.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white coffee cup on a saucer on the cloth beside her hand (static, never moves). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves creasing at the elbow, the coral beads shifting as she leans, dust motes in the window light; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, and I'm ninety-four. I never eat standing up. Never. You eat standing up, you eat like a seagull, you don't even taste it. I never take the lift... eh, we don't have a lift. Doesn't count. A hundred and twelve steps, down and up. That counts."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: mischievous, warm, quick; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.4s — «Things I never do…» chin up, a proud little smile, eyes straight into the lens.
3.4–7.8s — «I never eat standing up…» one finger up, deadly serious.
7.8–10.7s — «like a seagull…» a quick pecking mime with her fingers, then a laugh breaks through.
10.7–15.8s — «I never take the lift…» a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away (THE CENTERPIECE).
15.8–19.5s — «A hundred and twelve steps…» a proud nod, a thumb pointing down toward the sea.
19.5–21.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE COLLAPSE: the lift item falling apart and her waving it away: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a wooden bread board leaning on the wall at the back of the kitchen table, a little below her eye level. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Near-frontal medium close-up, chest-up. She sits at the table with her forearms on the crochet cloth, a touch off-center; the window and the blue-and-white tiles are soft behind her. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the opener of a series: a 94-year-old enjoying listing her own rules, delighted with herself.
MOTIVE (fuel): she has outlived everyone who told her to slow down; her 'nevers' are trophies.
GOAL: make the viewer laugh AND want part two.
OBSTACLE: the lift item collapses mid-list and she has to rescue it without losing the rhythm.
TACTIC: she counts the 'nevers' on her fingers and checks the lens after each one: did it land?.
Moment to moment: «And I never look at the telephone» — a third finger, leaning in to the lens, mock-stern; «Giulia hates this one» — her eyes flick off-lens toward Giulia, mischievous; «Part two next week» — back to the lens, a sly closed-lip smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white coffee cup on a saucer on the cloth beside her hand (static, never moves). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves creasing at the elbow, the coral beads shifting as she leans, dust motes in the window light; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~12 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "And I never look at the telephone before I look at the sea. Giulia hates this one. After this, amore, you put it down. Part two next week."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: mischievous, warm, quick; ~12 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~12 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–5.0s — «And I never look at the telephone…» a third finger, leaning in to the lens, mock-stern.
5.0–9.1s — «Giulia hates this one…» her eyes flick off-lens toward Giulia, mischievous.
9.1–10.6s — «Part two next week…» back to the lens, a sly closed-lip smile.
10.6–12.0s — FINAL BEAT (audio has ended, lips still): she holds the sly smile one beat and raises her eyebrows once: case closed. End.
```

</details>

## R2: Swim with Rosa (episode 1)

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sea-rocks.jpg` · @audio1 `R2.mp3`
- **On-screen text (add in post):** "94 and still swimming every morning"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet. Rosa is sitting on the flat limestone rock beside the old metal ladder, wet slicked-back silver hair, the striped towel round her shoulders over the open white linen shirt and black swimsuit, grinning at the lens, the turquoise bay behind. The place: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Lighting: Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «The sea doesn't care», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away and angled slightly down at her. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the flat rock beside the old metal ladder, the towel round her shoulders, the turquoise bay and the headland behind her, a touch off-center.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the just-came-out moment: wet, alive and a little smug.
MOTIVE (fuel): eighty-five years of mornings; this swim is her proof.
GOAL: make the viewer feel the cold and want it anyway.
OBSTACLE: Giulia filming instead of helping, the breeze, her own laughter.
TACTIC: she talks to the lens like a friend who doubted her, eyes checking after each jab.
Moment to moment: «Ninety-four, and I just came out» — a big open grin, water dripping from her hairline, chin lifted at the lens; «Cold?» — eyebrows up, mock-offended; «it's not soup» — a flat-hand chop, deadpan; «you say a bad word» — a wicked little laugh, fingers to her mouth; «I never go alone» — a nod, serious for one beat: the safety line lands; «today I have Giulia» — eyes flick up to Giulia above the lens, a teasing squint; «Useless, but she's here» — a laugh, a little pat of the air toward Giulia; «The sea doesn't care» — THE SIGNATURE: two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens; «It only cares that you come» — a small closed-lip smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (moves only with her body and the breeze). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water droplets running from her hairline, the towel edge lifting in the breeze, wet glossy coral beads, a wet patch on the linen; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Ninety-four, and I just came out of the sea. Every morning since I was nine. Cold? Of course it's cold, it's the sea, it's not soup. You go in slow, piano piano, and you say a bad word. Everybody says the bad word. I go where it's safe, I never go alone... today I have Giulia. With the telephone. Useless, but she's here. The sea doesn't care how old you are. It only cares that you come."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, alive, cheeky, then a quiet landing; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–6.0s — «Ninety-four, and I just came out…» a big open grin, water dripping from her hairline, chin lifted at the lens.
6.0–8.9s — «Cold?…» eyebrows up, mock-offended.
8.9–12.5s — «it's not soup…» a flat-hand chop, deadpan.
12.5–18.0s — «you say a bad word…» a wicked little laugh, fingers to her mouth.
18.0–19.8s — «I never go alone…» a nod, serious for one beat: the safety line lands.
19.8–22.4s — «today I have Giulia…» eyes flick up to Giulia above the lens, a teasing squint.
22.4–23.9s — «Useless, but she's here…» a laugh, a little pat of the air toward Giulia.
23.9–26.9s — «The sea doesn't care…» THE SIGNATURE: two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens (THE CENTERPIECE).
26.9–29.1s — «It only cares that you come…» a small closed-lip smile.
29.1–31.0s — FINAL BEAT (audio has ended, lips still): she looks out at the sea for a second, then back at the lens with a tiny nod. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Ninety-four, and I just came out” a big open grin, water dripping from her hairline, chin lifted at the lens; on “Cold?” eyebrows up, mock-offended; on “it's not soup” a flat-hand chop, deadpan; on “The sea doesn't care” two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R2-1.mp3` and `R2-2.mp3`.

- **Part 1 audio (~17 s):** Ninety-four, and I just came out of the sea. Every morning since I was nine. Cold? Of course it's cold, it's the sea, it's not soup. You go in slow, piano piano, and you say a bad word. Everybody says the bad word.
- **Part 2 audio (~15 s):** I go where it's safe, I never go alone... today I have Giulia. With the telephone. Useless, but she's here. The sea doesn't care how old you are. It only cares that you come.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away and angled slightly down at her. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the flat rock beside the old metal ladder, the towel round her shoulders, the turquoise bay and the headland behind her, a touch off-center.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the just-came-out moment: wet, alive and a little smug.
MOTIVE (fuel): eighty-five years of mornings; this swim is her proof.
GOAL: make the viewer feel the cold and want it anyway.
OBSTACLE: Giulia filming instead of helping, the breeze, her own laughter.
TACTIC: she talks to the lens like a friend who doubted her, eyes checking after each jab.
Moment to moment: «Ninety-four, and I just came out» — a big open grin, water dripping from her hairline, chin lifted at the lens; «Cold?» — eyebrows up, mock-offended; «it's not soup» — a flat-hand chop, deadpan; «you say a bad word» — a wicked little laugh, fingers to her mouth.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (moves only with her body and the breeze). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water droplets running from her hairline, the towel edge lifting in the breeze, wet glossy coral beads, a wet patch on the linen; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Ninety-four, and I just came out of the sea. Every morning since I was nine. Cold? Of course it's cold, it's the sea, it's not soup. You go in slow, piano piano, and you say a bad word. Everybody says the bad word."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, alive, cheeky, then a quiet landing; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–6.0s — «Ninety-four, and I just came out…» a big open grin, water dripping from her hairline, chin lifted at the lens.
6.0–8.9s — «Cold?…» eyebrows up, mock-offended.
8.9–12.5s — «it's not soup…» a flat-hand chop, deadpan.
12.5–16.3s — «you say a bad word…» a wicked little laugh, fingers to her mouth.
16.3–17.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «The sea doesn't care», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away and angled slightly down at her. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the flat rock beside the old metal ladder, the towel round her shoulders, the turquoise bay and the headland behind her, a touch off-center. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): the just-came-out moment: wet, alive and a little smug.
MOTIVE (fuel): eighty-five years of mornings; this swim is her proof.
GOAL: make the viewer feel the cold and want it anyway.
OBSTACLE: Giulia filming instead of helping, the breeze, her own laughter.
TACTIC: she talks to the lens like a friend who doubted her, eyes checking after each jab.
Moment to moment: «I never go alone» — a nod, serious for one beat: the safety line lands; «today I have Giulia» — eyes flick up to Giulia above the lens, a teasing squint; «Useless, but she's here» — a laugh, a little pat of the air toward Giulia; «The sea doesn't care» — THE SIGNATURE: two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens; «It only cares that you come» — a small closed-lip smile.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (moves only with her body and the breeze). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water droplets running from her hairline, the towel edge lifting in the breeze, wet glossy coral beads, a wet patch on the linen; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~15 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "I go where it's safe, I never go alone... today I have Giulia. With the telephone. Useless, but she's here. The sea doesn't care how old you are. It only cares that you come."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, alive, cheeky, then a quiet landing; ~15 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~15 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–3.8s — «I never go alone…» a nod, serious for one beat: the safety line lands.
3.8–6.4s — «today I have Giulia…» eyes flick up to Giulia above the lens, a teasing squint.
6.4–8.0s — «Useless, but she's here…» a laugh, a little pat of the air toward Giulia.
8.0–10.9s — «The sea doesn't care…» THE SIGNATURE: two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens (THE CENTERPIECE).
10.9–13.1s — «It only cares that you come…» a small closed-lip smile.
13.1–15.0s — FINAL BEAT (audio has ended, lips still): she looks out at the sea for a second, then back at the lens with a tiny nod. End.
```

</details>

## R3: My doctor is sixty years younger than me

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R3.mp3`
- **On-screen text (add in post):** "My doctor is 60 years younger than me"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. Rosa is sitting on the low wooden stool by the weathered blue door, grey cardigan over the cornflower-blue housedress, hands on her knees, a scandalised, delighted look at the lens. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a terracotta pot of red geraniums on the doorstep, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN on the last line: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot of red geraniums on the doorstep, slightly below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot from slightly below. She sits on the low wooden stool by the blue door; a soft edge of geranium leaves is in the near foreground.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): doorstep gossip about her very young doctor.
MOTIVE (fuel): she adores the boy, but she loves being the one who knows best.
GOAL: land the double punchline.
OBSTACLE: she mustn't sound like she's mocking doctors; she respects him.
TACTIC: she plays both parts, the serious doctor and herself, eyes on the lens for the punchlines.
Moment to moment: «My doctor is sixty years younger» — a delighted, scandalised look straight into the lens; «Little beard, like a goat» — she strokes an imaginary goatee on her own chin; «he listens to my chest» — she mimes a doctor peering at papers, at the lens, then at the papers again; «Signora, keep doing» — a solemn deep-voiced imitation, chin tucked; «I wasn't asking» — a sharp little shrug, eyes sparkling: the first punchline; «No, no, I listen to him» — both palms up, suddenly sincere; «He says I'm his favorite» — a proud chin lift; «He says that to everybody» — her face drops into deadpan for the second punchline; a beat of silence.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan sleeve sliding up her right wrist during the goatee mime to show the faded anchor tattoo, the stool creaking, the sheets moving overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "My doctor is sixty years younger than me. Thirty-four. Little beard, like a goat. Every year he listens to my chest, he looks at the papers, he looks at me... he looks at the papers again. And he says, Signora, keep doing what you're doing. I tell him, amore, I wasn't asking. No, no, I listen to him. He's a good boy, I bring him lemons. He says I'm his favorite. He says that to everybody."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, warm, sharp timing; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.2s — «My doctor is sixty years younger…» a delighted, scandalised look straight into the lens.
4.2–6.7s — «Little beard, like a goat…» she strokes an imaginary goatee on her own chin.
6.7–15.3s — «he listens to my chest…» she mimes a doctor peering at papers, at the lens, then at the papers again.
15.3–18.9s — «Signora, keep doing…» a solemn deep-voiced imitation, chin tucked.
18.9–20.1s — «I wasn't asking…» a sharp little shrug, eyes sparkling: the first punchline (THE CENTERPIECE).
20.1–25.2s — «No, no, I listen to him…» both palms up, suddenly sincere.
25.2–27.1s — «He says I'm his favorite…» a proud chin lift.
27.1–28.9s — «He says that to everybody…» her face drops into deadpan for the second punchline; a beat of silence.
28.9–31.0s — FINAL BEAT (audio has ended, lips still): she breaks into a short laugh and looks away down the alley. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “My doctor is sixty years younger” a delighted, scandalised look straight into the lens; on “Little beard, like a goat” she strokes an imaginary goatee on her own chin; on “he listens to my chest” she mimes a doctor peering at papers, at the lens, then at the papers again; on “Signora, keep doing” a solemn deep-voiced imitation, chin tucked. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R3-1.mp3` and `R3-2.mp3`.

- **Part 1 audio (~15 s):** My doctor is sixty years younger than me. Thirty-four. Little beard, like a goat. Every year he listens to my chest, he looks at the papers, he looks at me... he looks at the papers again.
- **Part 2 audio (~17 s):** And he says, Signora, keep doing what you're doing. I tell him, amore, I wasn't asking. No, no, I listen to him. He's a good boy, I bring him lemons. He says I'm his favorite. He says that to everybody.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a terracotta pot of red geraniums on the doorstep, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot of red geraniums on the doorstep, slightly below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot from slightly below. She sits on the low wooden stool by the blue door; a soft edge of geranium leaves is in the near foreground.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): doorstep gossip about her very young doctor.
MOTIVE (fuel): she adores the boy, but she loves being the one who knows best.
GOAL: land the double punchline.
OBSTACLE: she mustn't sound like she's mocking doctors; she respects him.
TACTIC: she plays both parts, the serious doctor and herself, eyes on the lens for the punchlines.
Moment to moment: «My doctor is sixty years younger» — a delighted, scandalised look straight into the lens; «Little beard, like a goat» — she strokes an imaginary goatee on her own chin; «he listens to my chest» — she mimes a doctor peering at papers, at the lens, then at the papers again.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan sleeve sliding up her right wrist during the goatee mime to show the faded anchor tattoo, the stool creaking, the sheets moving overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~15 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "My doctor is sixty years younger than me. Thirty-four. Little beard, like a goat. Every year he listens to my chest, he looks at the papers, he looks at me... he looks at the papers again."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, warm, sharp timing; ~15 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~15 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.2s — «My doctor is sixty years younger…» a delighted, scandalised look straight into the lens.
4.2–6.7s — «Little beard, like a goat…» she strokes an imaginary goatee on her own chin.
6.7–14.2s — «he listens to my chest…» she mimes a doctor peering at papers, at the lens, then at the papers again.
14.2–15.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN on the last line: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot of red geraniums on the doorstep, slightly below her eye level. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot from slightly below. She sits on the low wooden stool by the blue door; a soft edge of geranium leaves is in the near foreground. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): doorstep gossip about her very young doctor.
MOTIVE (fuel): she adores the boy, but she loves being the one who knows best.
GOAL: land the double punchline.
OBSTACLE: she mustn't sound like she's mocking doctors; she respects him.
TACTIC: she plays both parts, the serious doctor and herself, eyes on the lens for the punchlines.
Moment to moment: «Signora, keep doing» — a solemn deep-voiced imitation, chin tucked; «I wasn't asking» — a sharp little shrug, eyes sparkling: the first punchline; «No, no, I listen to him» — both palms up, suddenly sincere; «He says I'm his favorite» — a proud chin lift; «He says that to everybody» — her face drops into deadpan for the second punchline; a beat of silence.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan sleeve sliding up her right wrist during the goatee mime to show the faded anchor tattoo, the stool creaking, the sheets moving overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "And he says, Signora, keep doing what you're doing. I tell him, amore, I wasn't asking. No, no, I listen to him. He's a good boy, I bring him lemons. He says I'm his favorite. He says that to everybody."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, warm, sharp timing; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–5.0s — «Signora, keep doing…» a solemn deep-voiced imitation, chin tucked.
5.0–6.1s — «I wasn't asking…» a sharp little shrug, eyes sparkling: the first punchline (THE CENTERPIECE).
6.1–11.3s — «No, no, I listen to him…» both palms up, suddenly sincere.
11.3–13.2s — «He says I'm his favorite…» a proud chin lift.
13.2–15.0s — «He says that to everybody…» her face drops into deadpan for the second punchline; a beat of silence.
15.0–17.0s — FINAL BEAT (audio has ended, lips still): she breaks into a short laugh and looks away down the alley. End.
```

</details>

## R4: Thirty and tired every morning?

- **Format:** Talking clip · **~Length:** 30 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg` · @audio1 `R4.mp3`
- **On-screen text (add in post):** "If you're 30 and wake up tired"

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is sitting at the kitchen table, leaning slightly toward the lens with a squint of assessment, the bowl of lemons in the near foreground, the small window bright at the left. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons on the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE BIG SECRET, almost whispered: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the kitchen table, a little below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, she leans slightly toward the lens over the table; lemons soft in the near foreground; the bright window at frame left.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a no-nonsense intervention for a tired thirty-year-old.
MOTIVE (fuel): she watches Giulia's generation wake up already exhausted, and it baffles her.
GOAL: make the viewer try the window tomorrow.
OBSTACLE: she knows they'll roll their eyes at something this simple.
TACTIC: she catches them out with 'the telephone', then sells the tiny secret like it's gold.
Moment to moment: «Thirty and tired» — a squint at the lens, sizing the viewer up; «The telephone.» — she points straight at the lens: caught you; «somebody's wedding» — a theatrical eye-roll; «I open the window» — she gestures to the window at her left; light catches her face; «That's the big secret» — a conspiratorial lean-in, almost a whisper; «Not a little one, a big one» — her hands show a big glass, insistent; «I wrote you thirty mornings» — a softer, proud smile; «Giulia put it in the link» — her eyes flick off-lens to Giulia, a little nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the lemons rocking very slightly as the phone settles against the bowl, linen creasing, window light on her face; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~30 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Thirty and tired every morning? Listen to me. First thing you touch in the morning? The telephone. Before your feet are on the floor you already read about a war and... somebody's wedding. Me, first thing, I open the window. That's the big secret. Light on the face. Then water. A big glass. Not a little one, a big one. I wrote you thirty mornings like this. Giulia put it in the link."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, bossy-loving, conspiratorial; ~30 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~30 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.4s — «Thirty and tired…» a squint at the lens, sizing the viewer up.
6.4–12.4s — «The telephone.…» she points straight at the lens: caught you.
12.4–14.3s — «somebody's wedding…» a theatrical eye-roll.
14.3–15.8s — «I open the window…» she gestures to the window at her left; light catches her face.
15.8–20.8s — «That's the big secret…» a conspiratorial lean-in, almost a whisper (THE CENTERPIECE).
20.8–23.4s — «Not a little one, a big one…» her hands show a big glass, insistent.
23.4–25.9s — «I wrote you thirty mornings…» a softer, proud smile.
25.9–28.2s — «Giulia put it in the link…» her eyes flick off-lens to Giulia, a little nod.
28.2–30.0s — FINAL BEAT (audio has ended, lips still): she sits back and folds her arms, satisfied. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Thirty and tired” a squint at the lens, sizing the viewer up; on “The telephone.” she points straight at the lens: caught you; on “somebody's wedding” a theatrical eye-roll; on “I open the window” she gestures to the window at her left; light catches her face. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R4-1.mp3` and `R4-2.mp3`.

- **Part 1 audio (~18 s):** Thirty and tired every morning? Listen to me. First thing you touch in the morning? The telephone. Before your feet are on the floor you already read about a war and... somebody's wedding. Me, first thing, I open the window. That's the big secret.
- **Part 2 audio (~13 s):** Light on the face. Then water. A big glass. Not a little one, a big one. I wrote you thirty mornings like this. Giulia put it in the link.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons on the kitchen table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE BIG SECRET, almost whispered: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the kitchen table, a little below her eye level. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, she leans slightly toward the lens over the table; lemons soft in the near foreground; the bright window at frame left.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a no-nonsense intervention for a tired thirty-year-old.
MOTIVE (fuel): she watches Giulia's generation wake up already exhausted, and it baffles her.
GOAL: make the viewer try the window tomorrow.
OBSTACLE: she knows they'll roll their eyes at something this simple.
TACTIC: she catches them out with 'the telephone', then sells the tiny secret like it's gold.
Moment to moment: «Thirty and tired» — a squint at the lens, sizing the viewer up; «The telephone.» — she points straight at the lens: caught you; «somebody's wedding» — a theatrical eye-roll; «I open the window» — she gestures to the window at her left; light catches her face; «That's the big secret» — a conspiratorial lean-in, almost a whisper.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the lemons rocking very slightly as the phone settles against the bowl, linen creasing, window light on her face; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Thirty and tired every morning? Listen to me. First thing you touch in the morning? The telephone. Before your feet are on the floor you already read about a war and... somebody's wedding. Me, first thing, I open the window. That's the big secret."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, bossy-loving, conspiratorial; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–6.4s — «Thirty and tired…» a squint at the lens, sizing the viewer up.
6.4–12.4s — «The telephone.…» she points straight at the lens: caught you.
12.4–14.3s — «somebody's wedding…» a theatrical eye-roll.
14.3–15.8s — «I open the window…» she gestures to the window at her left; light catches her face.
15.8–17.3s — «That's the big secret…» a conspiratorial lean-in, almost a whisper (THE CENTERPIECE).
17.3–18.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE BIG SECRET, almost whispered: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the kitchen table, a little below her eye level. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, she leans slightly toward the lens over the table; lemons soft in the near foreground; the bright window at frame left. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a no-nonsense intervention for a tired thirty-year-old.
MOTIVE (fuel): she watches Giulia's generation wake up already exhausted, and it baffles her.
GOAL: make the viewer try the window tomorrow.
OBSTACLE: she knows they'll roll their eyes at something this simple.
TACTIC: she catches them out with 'the telephone', then sells the tiny secret like it's gold.
Moment to moment: «Not a little one, a big one» — her hands show a big glass, insistent; «I wrote you thirty mornings» — a softer, proud smile; «Giulia put it in the link» — her eyes flick off-lens to Giulia, a little nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the lemons rocking very slightly as the phone settles against the bowl, linen creasing, window light on her face; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~13 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Light on the face. Then water. A big glass. Not a little one, a big one. I wrote you thirty mornings like this. Giulia put it in the link."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, bossy-loving, conspiratorial; ~13 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~13 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–6.3s — «Not a little one, a big one…» her hands show a big glass, insistent.
6.3–8.9s — «I wrote you thirty mornings…» a softer, proud smile.
8.9–11.1s — «Giulia put it in the link…» her eyes flick off-lens to Giulia, a little nod.
11.1–13.0s — FINAL BEAT (audio has ended, lips still): she sits back and folds her arms, satisfied. End.
```

</details>

## R5: Red flags in your morning

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R5.mp3`
- **On-screen text (add in post):** "Red flags in your morning 🚩"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. Rosa is sitting on the low stool by the blue door holding a small espresso cup and saucer, a mock-grave expression at the lens. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE GIVE-UP at number three: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing in the alley about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the low stool by the blue door, a touch off-center, geraniums beside her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a grandmother diagnosing your mornings like a doctor reading an X-ray.
MOTIVE (fuel): thirty-four thousand mornings of evidence.
GOAL: make the viewer recognise themselves and laugh.
OBSTACLE: she loses count at number three and has to bluff.
TACTIC: she uses the cup as a pointer, eyes checking the lens after each flag.
Moment to moment: «Red flags in your morning» — a mock-grave face, the cup raised like a toast; «like a thief» — she hunches and darts guilty sideways glances; «nobody's chasing you» — she sits up straight, indignant; «The first face you talk to» — she taps her temple with a finger of the free hand, incredulous; «The neighbor, the cat» — a dismissive flick of the free hand; «Red flag number three» — she frowns, searching; the register breaks and she gives up with a shrug; «Green flag?» — eyebrows up, a sudden warm smile; «Now go open a window» — she points the cup up toward the sky above the alley.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white espresso cup on a saucer, held in her hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coffee surface trembling in the cup, the saucer clinking softly, cardigan sleeves shifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Red flags in your morning, from a woman who's had thirty-four thousand mornings. Red flag. You eat breakfast standing over the sink, like a thief. Sit down, it's your bread, nobody's chasing you. Red flag. The first face you talk to is a screen. Talk to a person. The neighbor, the cat, I don't care. Red flag number three... no. Two is enough, you're already upset. Green flag? You're still watching. Now go open a window."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, quick, warm; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–8.5s — «Red flags in your morning…» a mock-grave face, the cup raised like a toast.
8.5–11.4s — «like a thief…» she hunches and darts guilty sideways glances.
11.4–13.4s — «nobody's chasing you…» she sits up straight, indignant.
13.4–18.1s — «The first face you talk to…» she taps her temple with a finger of the free hand, incredulous.
18.1–20.7s — «The neighbor, the cat…» a dismissive flick of the free hand.
20.7–25.1s — «Red flag number three…» she frowns, searching; the register breaks and she gives up with a shrug (THE CENTERPIECE).
25.1–27.1s — «Green flag?…» eyebrows up, a sudden warm smile.
27.1–28.9s — «Now go open a window…» she points the cup up toward the sky above the alley.
28.9–31.0s — FINAL BEAT (audio has ended, lips still): she sips the coffee, eyes on the lens over the rim. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Red flags in your morning” a mock-grave face, the cup raised like a toast; on “like a thief” she hunches and darts guilty sideways glances; on “nobody's chasing you” she sits up straight, indignant; on “The first face you talk to” she taps her temple with a finger of the free hand, incredulous. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R5-1.mp3` and `R5-2.mp3`.

- **Part 1 audio (~14 s):** Red flags in your morning, from a woman who's had thirty-four thousand mornings. Red flag. You eat breakfast standing over the sink, like a thief. Sit down, it's your bread, nobody's chasing you.
- **Part 2 audio (~18 s):** Red flag. The first face you talk to is a screen. Talk to a person. The neighbor, the cat, I don't care. Red flag number three... no. Two is enough, you're already upset. Green flag? You're still watching. Now go open a window.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing in the alley about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the low stool by the blue door, a touch off-center, geraniums beside her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a grandmother diagnosing your mornings like a doctor reading an X-ray.
MOTIVE (fuel): thirty-four thousand mornings of evidence.
GOAL: make the viewer recognise themselves and laugh.
OBSTACLE: she loses count at number three and has to bluff.
TACTIC: she uses the cup as a pointer, eyes checking the lens after each flag.
Moment to moment: «Red flags in your morning» — a mock-grave face, the cup raised like a toast; «like a thief» — she hunches and darts guilty sideways glances; «nobody's chasing you» — she sits up straight, indignant.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white espresso cup on a saucer, held in her hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coffee surface trembling in the cup, the saucer clinking softly, cardigan sleeves shifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Red flags in your morning, from a woman who's had thirty-four thousand mornings. Red flag. You eat breakfast standing over the sink, like a thief. Sit down, it's your bread, nobody's chasing you."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, quick, warm; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–8.5s — «Red flags in your morning…» a mock-grave face, the cup raised like a toast.
8.5–11.4s — «like a thief…» she hunches and darts guilty sideways glances.
11.4–12.5s — «nobody's chasing you…» she sits up straight, indignant.
12.5–14.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE GIVE-UP at number three: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing in the alley about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the low stool by the blue door, a touch off-center, geraniums beside her. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a grandmother diagnosing your mornings like a doctor reading an X-ray.
MOTIVE (fuel): thirty-four thousand mornings of evidence.
GOAL: make the viewer recognise themselves and laugh.
OBSTACLE: she loses count at number three and has to bluff.
TACTIC: she uses the cup as a pointer, eyes checking the lens after each flag.
Moment to moment: «The first face you talk to» — she taps her temple with a finger of the free hand, incredulous; «The neighbor, the cat» — a dismissive flick of the free hand; «Red flag number three» — she frowns, searching; the register breaks and she gives up with a shrug; «Green flag?» — eyebrows up, a sudden warm smile; «Now go open a window» — she points the cup up toward the sky above the alley.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: a small white espresso cup on a saucer, held in her hands from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coffee surface trembling in the cup, the saucer clinking softly, cardigan sleeves shifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Red flag. The first face you talk to is a screen. Talk to a person. The neighbor, the cat, I don't care. Red flag number three... no. Two is enough, you're already upset. Green flag? You're still watching. Now go open a window."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: teasing, quick, warm; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–5.9s — «The first face you talk to…» she taps her temple with a finger of the free hand, incredulous.
5.9–8.5s — «The neighbor, the cat…» a dismissive flick of the free hand.
8.5–12.8s — «Red flag number three…» she frowns, searching; the register breaks and she gives up with a shrug (THE CENTERPIECE).
12.8–14.8s — «Green flag?…» eyebrows up, a sudden warm smile.
14.8–16.7s — «Now go open a window…» she points the cup up toward the sky above the alley.
16.7–18.0s — FINAL BEAT (audio has ended, lips still): she sips the coffee, eyes on the lens over the rim. End.
```

</details>

## R6: What I eat in a day at 94 (silent b-roll)

- **Format:** Silent b-roll · **~Length:** 10 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg`
- **Overlay beats (add in post):** What I eat in a day at 94 / Morning: coffee from my dented moka. Bread with olive oil and a tomato. / 1pm, the big meal: lentils and greens. Fish if the boats came in. / Night: a little soup. Sunday: one glass of red. Okay, one and a half.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is sitting at the kitchen table at a 45-degree angle, one hand reaching for the dented aluminium moka pot on a cork trivet, a small empty white cup on a saucer in front of her, the upper third calm white wall and blue-and-white tiles. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) NO dialogue anywhere: Rosa never speaks or mouths words; ambient sound only. 2) The phone is casually PROPPED against a jar on the kitchen counter, NOT a tripod: living UGC framing. 3) TEXT-SAFE FRAME: the upper third of the frame stays visually calm; Rosa lives in the lower two-thirds. 4) ONE micro-action with a small arc (she lifts the dented moka pot...), unhurried; loop-friendly ending. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a jar on the kitchen counter, at a 45-degree side angle to the table. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. She sits at the table in the LOWER two-thirds of the frame; the upper third is calm white wall and tiles (text-safe).

Performance (one micro-action with a small arc, always believable): her morning coffee, unhurried. Rosa lifts the dented moka pot, pours coffee into the small cup with a little steam, sets the pot down, raises the cup and looks out of the window at the sea, then sets the cup down with both hands resting either side of it. Unhurried and real; her eyes stay engaged with the task, never on the lens; natural blinks; never staged, never stiff, never puppet-like.

PROPS: the dented aluminium moka pot on a cork trivet on the table, and a small empty white cup on a saucer, both in place from frame one. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: a thin stream of dark coffee, rising steam, a faint clink of cup on saucer, the pot's dent catching the window light; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~10 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio: NO dialogue anywhere — ambient SFX only: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, all quiet and natural. Music: none. Fully original.

Mood & tempo: slow, golden, peaceful; ~10 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, 10 s, 9:16, no subtitles, loop-friendly):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–2.3s — she lifts the dented moka pot.
2.3–3.9s — pours coffee into the small cup with a little steam.
3.9–5.4s — sets the pot down.
5.4–7.0s — raises the cup and looks out of the window at the sea.
7.0–8.5s — sets the cup down with both hands resting either side of it.
8.5–10.0s — she settles into the loop pose: the last pose (hands resting either side of the cup, eyes on the window) is close to the first pose. End.
```

**SHORT PROMPT (image-to-video from the first frame: Kling / Veo / Seedance):**

```text
Silent phone video, 9:16, about 10 seconds, starting from this first frame. Rosa lifts the dented moka pot, pours coffee into the small cup with a little steam, sets the pot down, raises the cup and looks out of the window at the sea, then sets the cup down with both hands resting either side of it. Unhurried and real, eyes on the task, never at the camera. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing, never a tripod look. Keep the upper third calm and empty for text added later. Relit to the scene with real contact shadows; identity, outfit and anchors exactly as in the frame. Ambient sound only: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. No speech, no music, no text, no logos. Ends close to the first pose so it loops.
```

## R7: My husband bought me this with one fish

- **Format:** Interview · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R7.mp3`
- **On-screen text (add in post):** "Nonna, tell them about your necklace"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. Rosa is sitting on the low stool by the blue door in warm evening shade, grey cardigan over the housedress, looking to the side of the lens at someone off camera, fingertips resting on the red coral beads. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a terracotta pot on the doorstep step at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «My husband bought me this», and nowhere else. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot on the doorstep step at a 45-degree angle; Giulia sits on the step just beside the lens. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. She sits on the low stool; her eyeline goes to Giulia just beside the lens, never into it.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): telling Giulia the necklace story she has heard a hundred times, this time for the camera.
MOTIVE (fuel): Salvatore; the pride of that day is still alive in her.
GOAL: make Giulia and everyone see him walking up the steps.
OBSTACLE: the grief at the end, which she won't let turn sad.
TACTIC: she performs the swordfish with her hands, then grows quiet; eyes on Giulia, never the lens.
Moment to moment: «My husband bought me this» — THE SIGNATURE: two fingertips tap the red coral beads twice; a proud glance at Giulia; «Salvatore» — the name said softly, a tiny pause; «a swordfish so big» — her arms spread wide, eyes wide; «like a... like a second boat» — she searches for the words and laughs at herself; «he comes up all the steps» — her fingers walk up an invisible staircase; «Red coral.» — she lifts the beads slightly between finger and thumb; «every morning he walked me down» — the register breaks: quieter, her eyes drop for a moment; «Now I walk myself» — chin up again, a small brave smile at Giulia; «I still say good morning to him» — a gentle shrug, eyes glistening but bright, no tears.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coral beads clicking softly between her fingers, the cardigan sleeve sliding up to show the anchor tattoo when she spreads her arms, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "My husband bought me this with one fish. Salvatore. Nineteen fifty-two, he catches a swordfish so big it doesn't fit in the boat, he has to tie it on the side like a... like a second boat. He sells it, and he comes up all the steps with this in his pocket. Red coral. He lived to ninety-one, and every morning he walked me down to the sea. Now I walk myself. I still say good morning to him."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: proud, funny, then tender; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.7s — «My husband bought me this…» THE SIGNATURE: two fingertips tap the red coral beads twice; a proud glance at Giulia.
3.7–5.6s — «Salvatore…» the name said softly, a tiny pause.
5.6–11.9s — «a swordfish so big…» her arms spread wide, eyes wide.
11.9–15.9s — «like a... like a second boat…» she searches for the words and laughs at herself.
15.9–19.9s — «he comes up all the steps…» her fingers walk up an invisible staircase.
19.9–22.4s — «Red coral.…» she lifts the beads slightly between finger and thumb.
22.4–25.7s — «every morning he walked me down…» the register breaks: quieter, her eyes drop for a moment (THE CENTERPIECE).
25.7–27.2s — «Now I walk myself…» chin up again, a small brave smile at Giulia.
27.2–29.8s — «I still say good morning to him…» a gentle shrug, eyes glistening but bright, no tears.
29.8–31.0s — FINAL BEAT (audio has ended, lips still): she looks down the alley toward the sea, then back at Giulia with a small nod. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa answers Giulia just beside the lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “My husband bought me this” two fingertips tap the red coral beads twice; a proud glance at Giulia; on “Salvatore” the name said softly, a tiny pause; on “a swordfish so big” her arms spread wide, eyes wide; on “like a... like a second boat” she searches for the words and laughs at herself. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R7-1.mp3` and `R7-2.mp3`.

- **Part 1 audio (~21 s):** My husband bought me this with one fish. Salvatore. Nineteen fifty-two, he catches a swordfish so big it doesn't fit in the boat, he has to tie it on the side like a... like a second boat. He sells it, and he comes up all the steps with this in his pocket.
- **Part 2 audio (~12 s):** Red coral. He lived to ninety-one, and every morning he walked me down to the sea. Now I walk myself. I still say good morning to him.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against a terracotta pot on the doorstep step at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «My husband bought me this», and nowhere else. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot on the doorstep step at a 45-degree angle; Giulia sits on the step just beside the lens. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. She sits on the low stool; her eyeline goes to Giulia just beside the lens, never into it.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): telling Giulia the necklace story she has heard a hundred times, this time for the camera.
MOTIVE (fuel): Salvatore; the pride of that day is still alive in her.
GOAL: make Giulia and everyone see him walking up the steps.
OBSTACLE: the grief at the end, which she won't let turn sad.
TACTIC: she performs the swordfish with her hands, then grows quiet; eyes on Giulia, never the lens.
Moment to moment: «My husband bought me this» — THE SIGNATURE: two fingertips tap the red coral beads twice; a proud glance at Giulia; «Salvatore» — the name said softly, a tiny pause; «a swordfish so big» — her arms spread wide, eyes wide; «like a... like a second boat» — she searches for the words and laughs at herself; «he comes up all the steps» — her fingers walk up an invisible staircase.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coral beads clicking softly between her fingers, the cardigan sleeve sliding up to show the anchor tattoo when she spreads her arms, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~21 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "My husband bought me this with one fish. Salvatore. Nineteen fifty-two, he catches a swordfish so big it doesn't fit in the boat, he has to tie it on the side like a... like a second boat. He sells it, and he comes up all the steps with this in his pocket."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: proud, funny, then tender; ~21 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~21 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.7s — «My husband bought me this…» THE SIGNATURE: two fingertips tap the red coral beads twice; a proud glance at Giulia.
3.7–5.6s — «Salvatore…» the name said softly, a tiny pause.
5.6–11.9s — «a swordfish so big…» her arms spread wide, eyes wide.
11.9–15.9s — «like a... like a second boat…» she searches for the words and laughs at herself.
15.9–19.9s — «he comes up all the steps…» her fingers walk up an invisible staircase.
19.9–21.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE QUIET TURN on 'every morning he walked me down to the sea': give it room. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against a terracotta pot on the doorstep step at a 45-degree angle; Giulia sits on the step just beside the lens. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. She sits on the low stool; her eyeline goes to Giulia just beside the lens, never into it. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): telling Giulia the necklace story she has heard a hundred times, this time for the camera.
MOTIVE (fuel): Salvatore; the pride of that day is still alive in her.
GOAL: make Giulia and everyone see him walking up the steps.
OBSTACLE: the grief at the end, which she won't let turn sad.
TACTIC: she performs the swordfish with her hands, then grows quiet; eyes on Giulia, never the lens.
Moment to moment: «Red coral.» — she lifts the beads slightly between finger and thumb; «every morning he walked me down» — the register breaks: quieter, her eyes drop for a moment; «Now I walk myself» — chin up again, a small brave smile at Giulia; «I still say good morning to him» — a gentle shrug, eyes glistening but bright, no tears.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the coral beads clicking softly between her fingers, the cardigan sleeve sliding up to show the anchor tattoo when she spreads her arms, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~12 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Red coral. He lived to ninety-one, and every morning he walked me down to the sea. Now I walk myself. I still say good morning to him."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: proud, funny, then tender; ~12 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~12 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–2.9s — «Red coral.…» she lifts the beads slightly between finger and thumb.
2.9–6.1s — «every morning he walked me down…» the register breaks: quieter, her eyes drop for a moment (THE CENTERPIECE).
6.1–7.7s — «Now I walk myself…» chin up again, a small brave smile at Giulia.
7.7–10.2s — «I still say good morning to him…» a gentle shrug, eyes glistening but bright, no tears.
10.2–12.0s — FINAL BEAT (audio has ended, lips still): she looks down the alley toward the sea, then back at Giulia with a small nod. End.
```

</details>

## R8: Riposo: you call it lazy

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R8.mp3`
- **On-screen text (add in post):** "You call it lazy. We call it riposo."
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is a slightly-too-far selfie at arm's length, sitting on the stool in the shady alley in her white linen shirt, a pitying amused look at the lens. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is Rosa's own HANDHELD SELFIE, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CONFUSION on 'another meeting': give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Rosa holds the phone at full arm's length, a little too far away and slightly low, the way older people hold a phone. Mild front-camera wide distortion, a gentle hand bob with her breathing and gestures. Any angle change comes only from Rosa raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. Selfie, a little wide: head and shoulders with the shady alley, the blue door and a bright strip of sun high on the wall behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending the nap like a lawyer defending her whole town.
MOTIVE (fuel): a lifetime of riposo; she can't believe it needs defending.
GOAL: make the viewer take a forty-minute rest without guilt.
OBSTACLE: the heat; she is half-yawning herself.
TACTIC: she mocks hustle culture with her free hand, eyes daring the lens to argue.
Moment to moment: «You call it lazy» — a pitying look at the lens; «Riposo» — she says it like a sacred word, eyes half-closing; «even the dogs lie down» — her free hand flops flat, demonstrating; «I'm not a cat» — mock offence, eyebrows up; «Forty minutes, and I have» — she sits up, energised, one finger raised; «a meeting about» — her face scrunches in confusion, then dismissal; «Lie down, amore» — softer, coaxing; «It always is» — a slow knowing nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: front-camera wide distortion with her arm extended, the phone bobbing gently with her gestures; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "You call it lazy. My whole town does it at two o'clock. Riposo. After lunch the shutters close, and the dogs, eh, even the dogs lie down in the middle of the street. Forty minutes. Not three hours, I'm not a cat. Forty minutes, and I have the whole afternoon again. You drink four coffees to stay awake for a meeting about... I don't know, another meeting. Lie down, amore. The work will still be there. It always is."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: lazy-warm, teasing; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — Rosa lifts the phone out to arm's length; the frame bobs once and settles.
0.6–5.0s — «You call it lazy…» a pitying look at the lens.
5.0–8.7s — «Riposo…» she says it like a sacred word, eyes half-closing.
8.7–14.5s — «even the dogs lie down…» her free hand flops flat, demonstrating.
14.5–16.0s — «I'm not a cat…» mock offence, eyebrows up.
16.0–22.1s — «Forty minutes, and I have…» she sits up, energised, one finger raised.
22.1–25.3s — «a meeting about…» her face scrunches in confusion, then dismissal (THE CENTERPIECE).
25.3–28.7s — «Lie down, amore…» softer, coaxing.
28.7–29.9s — «It always is…» a slow knowing nod.
29.9–32.0s — FINAL BEAT (audio has ended, lips still): a small yawn she tries to hide, then a laugh. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “You call it lazy” a pitying look at the lens; on “Riposo” she says it like a sacred word, eyes half-closing; on “even the dogs lie down” her free hand flops flat, demonstrating; on “I'm not a cat” mock offence, eyebrows up. Natural blinks, small head movements, eyebrows active on key words, real breathing. Her own handheld selfie: mild wide-angle distortion and a gentle hand bob. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R8-1.mp3` and `R8-2.mp3`.

- **Part 1 audio (~17 s):** You call it lazy. My whole town does it at two o'clock. Riposo. After lunch the shutters close, and the dogs, eh, even the dogs lie down in the middle of the street. Forty minutes. Not three hours, I'm not a cat.
- **Part 2 audio (~16 s):** Forty minutes, and I have the whole afternoon again. You drink four coffees to stay awake for a meeting about... I don't know, another meeting. Lie down, amore. The work will still be there. It always is.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is Rosa's own HANDHELD SELFIE, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Rosa holds the phone at full arm's length, a little too far away and slightly low, the way older people hold a phone. Mild front-camera wide distortion, a gentle hand bob with her breathing and gestures. Any angle change comes only from Rosa raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. Selfie, a little wide: head and shoulders with the shady alley, the blue door and a bright strip of sun high on the wall behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending the nap like a lawyer defending her whole town.
MOTIVE (fuel): a lifetime of riposo; she can't believe it needs defending.
GOAL: make the viewer take a forty-minute rest without guilt.
OBSTACLE: the heat; she is half-yawning herself.
TACTIC: she mocks hustle culture with her free hand, eyes daring the lens to argue.
Moment to moment: «You call it lazy» — a pitying look at the lens; «Riposo» — she says it like a sacred word, eyes half-closing; «even the dogs lie down» — her free hand flops flat, demonstrating; «I'm not a cat» — mock offence, eyebrows up.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: front-camera wide distortion with her arm extended, the phone bobbing gently with her gestures; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~17 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "You call it lazy. My whole town does it at two o'clock. Riposo. After lunch the shutters close, and the dogs, eh, even the dogs lie down in the middle of the street. Forty minutes. Not three hours, I'm not a cat."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: lazy-warm, teasing; ~17 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~17 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.6s — Rosa lifts the phone out to arm's length; the frame bobs once and settles.
0.6–5.0s — «You call it lazy…» a pitying look at the lens.
5.0–8.7s — «Riposo…» she says it like a sacred word, eyes half-closing.
8.7–14.5s — «even the dogs lie down…» her free hand flops flat, demonstrating.
14.5–16.0s — «I'm not a cat…» mock offence, eyebrows up.
16.0–17.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE CONFUSION on 'another meeting': give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld selfie): Rosa holds the phone at full arm's length, a little too far away and slightly low, the way older people hold a phone. Mild front-camera wide distortion, a gentle hand bob with her breathing and gestures. Any angle change comes only from Rosa raising or lowering the phone, never from cuts. One take, no cuts. 9:16 vertical.

Composition: 9:16. Selfie, a little wide: head and shoulders with the shady alley, the blue door and a bright strip of sun high on the wall behind her. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): defending the nap like a lawyer defending her whole town.
MOTIVE (fuel): a lifetime of riposo; she can't believe it needs defending.
GOAL: make the viewer take a forty-minute rest without guilt.
OBSTACLE: the heat; she is half-yawning herself.
TACTIC: she mocks hustle culture with her free hand, eyes daring the lens to argue.
Moment to moment: «Forty minutes, and I have» — she sits up, energised, one finger raised; «a meeting about» — her face scrunches in confusion, then dismissal; «Lie down, amore» — softer, coaxing; «It always is» — a slow knowing nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: front-camera wide distortion with her arm extended, the phone bobbing gently with her gestures; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Forty minutes, and I have the whole afternoon again. You drink four coffees to stay awake for a meeting about... I don't know, another meeting. Lie down, amore. The work will still be there. It always is."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: lazy-warm, teasing; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–6.4s — «Forty minutes, and I have…» she sits up, energised, one finger raised.
6.4–9.6s — «a meeting about…» her face scrunches in confusion, then dismissal (THE CENTERPIECE).
9.6–13.0s — «Lie down, amore…» softer, coaxing.
13.0–14.2s — «It always is…» a slow knowing nod.
14.2–16.0s — FINAL BEAT (audio has ended, lips still): a small yawn she tries to hide, then a laugh. End.
```

</details>

## R9: Things I never do at 94 (part two)

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R9.mp3`
- **On-screen text (add in post):** "Things I never do at 94, part 2"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. Rosa is sitting on the low stool by the blue door in evening shade, two fingers raised, a bright cheeky look at the lens. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE MOCK-DIVA POSE: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool by the blue door; the alley runs away behind her at frame right (Concetta's door is two doors down, off-frame).

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, now with a target: Concetta.
MOTIVE (fuel): the rivalry is the spice of her life.
GOAL: get the laugh on Concetta and close with the Giulia joke.
OBSTACLE: the Salvatore memory pulls at her mid-list.
TACTIC: she counts on her fingers again and glances down the alley at Concetta's door.
Moment to moment: «Things I never do, part two» — two fingers up, a bright look at the lens; «I never say at my age» — a wagging finger; «at my age, at my age» — a whiny imitation, mouth pulled down; «she's a baby» — a dismissive flick toward the alley; «I never go to bed angry» — a softer face; «like the boats in a storm» — her two fists bump together like boats; «finished, basta» — a decisive flat-hand cut; the register is back to firm; «Except now» — she freezes, caught out, then laughs; «Giulia wants a good angle» — eyes up to Giulia, a mock-diva chin pose; «Part three when Concetta» — a sly glance down the alley.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting with her gestures, slippers scuffing the stone, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, part two. I never say at my age. Never. My neighbor Concetta says it every day, at my age, at my age, and she's ninety-one, she's a baby. I never go to bed angry. Salvatore and me, we argued, eh, like the boats in a storm, but at night, finished, basta. And I never sit when I can walk. Except now. Now I sit, because Giulia wants a good angle. Part three when Concetta does something stupid."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, mischievous; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–2.7s — «Things I never do, part two…» two fingers up, a bright look at the lens.
2.7–3.8s — «I never say at my age…» a wagging finger.
3.8–11.0s — «at my age, at my age…» a whiny imitation, mouth pulled down.
11.0–12.2s — «she's a baby…» a dismissive flick toward the alley.
12.2–16.5s — «I never go to bed angry…» a softer face.
16.5–19.7s — «like the boats in a storm…» her two fists bump together like boats.
19.7–23.4s — «finished, basta…» a decisive flat-hand cut; the register is back to firm.
23.4–25.7s — «Except now…» she freezes, caught out, then laughs.
25.7–27.5s — «Giulia wants a good angle…» eyes up to Giulia, a mock-diva chin pose (THE CENTERPIECE).
27.5–30.1s — «Part three when Concetta…» a sly glance down the alley.
30.1–32.0s — FINAL BEAT (audio has ended, lips still): she holds the pose a second, then waves Giulia off. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Things I never do, part two” two fingers up, a bright look at the lens; on “I never say at my age” a wagging finger; on “at my age, at my age” a whiny imitation, mouth pulled down; on “she's a baby” a dismissive flick toward the alley. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R9-1.mp3` and `R9-2.mp3`.

- **Part 1 audio (~22 s):** Things I never do, part two. I never say at my age. Never. My neighbor Concetta says it every day, at my age, at my age, and she's ninety-one, she's a baby. I never go to bed angry. Salvatore and me, we argued, eh, like the boats in a storm, but at night, finished, basta.
- **Part 2 audio (~12 s):** And I never sit when I can walk. Except now. Now I sit, because Giulia wants a good angle. Part three when Concetta does something stupid.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE MOCK-DIVA POSE: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool by the blue door; the alley runs away behind her at frame right (Concetta's door is two doors down, off-frame).

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, now with a target: Concetta.
MOTIVE (fuel): the rivalry is the spice of her life.
GOAL: get the laugh on Concetta and close with the Giulia joke.
OBSTACLE: the Salvatore memory pulls at her mid-list.
TACTIC: she counts on her fingers again and glances down the alley at Concetta's door.
Moment to moment: «Things I never do, part two» — two fingers up, a bright look at the lens; «I never say at my age» — a wagging finger; «at my age, at my age» — a whiny imitation, mouth pulled down; «she's a baby» — a dismissive flick toward the alley; «I never go to bed angry» — a softer face; «like the boats in a storm» — her two fists bump together like boats; «finished, basta» — a decisive flat-hand cut; the register is back to firm.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting with her gestures, slippers scuffing the stone, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~22 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, part two. I never say at my age. Never. My neighbor Concetta says it every day, at my age, at my age, and she's ninety-one, she's a baby. I never go to bed angry. Salvatore and me, we argued, eh, like the boats in a storm, but at night, finished, basta."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, mischievous; ~22 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~22 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–2.7s — «Things I never do, part two…» two fingers up, a bright look at the lens.
2.7–3.8s — «I never say at my age…» a wagging finger.
3.8–11.0s — «at my age, at my age…» a whiny imitation, mouth pulled down.
11.0–12.2s — «she's a baby…» a dismissive flick toward the alley.
12.2–16.5s — «I never go to bed angry…» a softer face.
16.5–19.7s — «like the boats in a storm…» her two fists bump together like boats.
19.7–20.5s — «finished, basta…» a decisive flat-hand cut; the register is back to firm (THE CENTERPIECE).
20.5–22.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE MOCK-DIVA POSE: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool by the blue door; the alley runs away behind her at frame right (Concetta's door is two doors down, off-frame). Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part two, now with a target: Concetta.
MOTIVE (fuel): the rivalry is the spice of her life.
GOAL: get the laugh on Concetta and close with the Giulia joke.
OBSTACLE: the Salvatore memory pulls at her mid-list.
TACTIC: she counts on her fingers again and glances down the alley at Concetta's door.
Moment to moment: «Except now» — she freezes, caught out, then laughs; «Giulia wants a good angle» — eyes up to Giulia, a mock-diva chin pose; «Part three when Concetta» — a sly glance down the alley.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting with her gestures, slippers scuffing the stone, swallows overhead; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~12 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "And I never sit when I can walk. Except now. Now I sit, because Giulia wants a good angle. Part three when Concetta does something stupid."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, mischievous; ~12 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~12 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–5.4s — «Except now…» she freezes, caught out, then laughs.
5.4–7.3s — «Giulia wants a good angle…» eyes up to Giulia, a mock-diva chin pose (THE CENTERPIECE).
7.3–9.9s — «Part three when Concetta…» a sly glance down the alley.
9.9–12.0s — FINAL BEAT (audio has ended, lips still): she holds the pose a second, then waves Giulia off. End.
```

</details>

## R10: Swim with Rosa (episode 2, windy day)

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sea-rocks.jpg` · @audio1 `R10.mp3`
- **On-screen text (add in post):** "When the sea is angry, I stay by the ladder"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet. Rosa is sitting on the wet limestone by the metal ladder on a grey windy morning, choppy sea with small whitecaps behind, wet hair blowing, the striped towel round her shoulders, pointing out at the waves. The place: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Lighting: A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «The sea doesn't care», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing braced against the wind about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the wet rock by the ladder; behind her the choppy grey-turquoise sea and small whitecaps.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a working lesson in sea sense on a rough day.
MOTIVE (fuel): eighty-five years taught her to respect the sea.
GOAL: show that clever beats brave.
OBSTACLE: the wind snatching at her words and her hair.
TACTIC: she points at the waves as evidence, then turns to the lens to teach.
Moment to moment: «Today the sea is angry» — she points out at the choppy water, squinting into the wind; «I stay by the ladder» — she pats the ladder rail beside her; «the water comes up to here» — her hand flat at her chest; «I'm not stupid» — a tap of her temple, eyebrows up; «The sea doesn't care» — THE SIGNATURE: two fingertips tap the coral beads twice; «but it also doesn't care how brave» — the register breaks: firm, eyes hard on the lens; «you go with somebody» — a nod toward Giulia off-lens; «Ciao. See you tomorrow.» — she waves at the sea, dismissive and fond.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (flaps in the wind but stays on). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the wind tugging her wet hair and the towel, spray lifting off the rocks behind, the phone mic buffeted; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Today the sea is angry. Look at it. On days like this I don't swim, I stay by the ladder. Three steps down, I hold on, the water comes up to here, I say good morning and I come out. Eighty-five years, amore, I'm not stupid. The sea doesn't care how old you are... but it also doesn't care how brave you are. You go when it's calm, and you go with somebody. Today? Ciao. See you tomorrow."
- Sound design: waves slapping the rocks, strong wind gusts buffeting the phone mic, a gull struggling in the wind, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, practical, fond; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–6.0s — «Today the sea is angry…» she points out at the choppy water, squinting into the wind.
6.0–10.0s — «I stay by the ladder…» she pats the ladder rail beside her.
10.0–16.1s — «the water comes up to here…» her hand flat at her chest.
16.1–17.2s — «I'm not stupid…» a tap of her temple, eyebrows up.
17.2–20.4s — «The sea doesn't care…» THE SIGNATURE: two fingertips tap the coral beads twice.
20.4–25.8s — «but it also doesn't care how brave…» the register breaks: firm, eyes hard on the lens (THE CENTERPIECE).
25.8–27.7s — «you go with somebody…» a nod toward Giulia off-lens.
27.7–29.3s — «Ciao. See you tomorrow.…» she waves at the sea, dismissive and fond.
29.3–31.0s — FINAL BEAT (audio has ended, lips still): she pulls the towel tighter and tilts her head to Giulia: let's go. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Today the sea is angry” she points out at the choppy water, squinting into the wind; on “I stay by the ladder” she pats the ladder rail beside her; on “the water comes up to here” her hand flat at her chest; on “The sea doesn't care” two fingertips tap the coral beads twice. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R10-1.mp3` and `R10-2.mp3`.

- **Part 1 audio (~18 s):** Today the sea is angry. Look at it. On days like this I don't swim, I stay by the ladder. Three steps down, I hold on, the water comes up to here, I say good morning and I come out. Eighty-five years, amore, I'm not stupid.
- **Part 2 audio (~14 s):** The sea doesn't care how old you are... but it also doesn't care how brave you are. You go when it's calm, and you go with somebody. Today? Ciao. See you tomorrow.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing braced against the wind about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the wet rock by the ladder; behind her the choppy grey-turquoise sea and small whitecaps.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a working lesson in sea sense on a rough day.
MOTIVE (fuel): eighty-five years taught her to respect the sea.
GOAL: show that clever beats brave.
OBSTACLE: the wind snatching at her words and her hair.
TACTIC: she points at the waves as evidence, then turns to the lens to teach.
Moment to moment: «Today the sea is angry» — she points out at the choppy water, squinting into the wind; «I stay by the ladder» — she pats the ladder rail beside her; «the water comes up to here» — her hand flat at her chest; «I'm not stupid» — a tap of her temple, eyebrows up.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (flaps in the wind but stays on). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the wind tugging her wet hair and the towel, spray lifting off the rocks behind, the phone mic buffeted; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Today the sea is angry. Look at it. On days like this I don't swim, I stay by the ladder. Three steps down, I hold on, the water comes up to here, I say good morning and I come out. Eighty-five years, amore, I'm not stupid."
- Sound design: waves slapping the rocks, strong wind gusts buffeting the phone mic, a gull struggling in the wind, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, practical, fond; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–6.0s — «Today the sea is angry…» she points out at the choppy water, squinting into the wind.
6.0–10.0s — «I stay by the ladder…» she pats the ladder rail beside her.
10.0–16.1s — «the water comes up to here…» her hand flat at her chest.
16.1–17.2s — «I'm not stupid…» a tap of her temple, eyebrows up.
17.2–18.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The signature move (two fingertips tap the red coral beads twice) happens ONCE, exactly on «The sea doesn't care», and nowhere else. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing braced against the wind about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits on the wet rock by the ladder; behind her the choppy grey-turquoise sea and small whitecaps. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a working lesson in sea sense on a rough day.
MOTIVE (fuel): eighty-five years taught her to respect the sea.
GOAL: show that clever beats brave.
OBSTACLE: the wind snatching at her words and her hair.
TACTIC: she points at the waves as evidence, then turns to the lens to teach.
Moment to moment: «The sea doesn't care» — THE SIGNATURE: two fingertips tap the coral beads twice; «but it also doesn't care how brave» — the register breaks: firm, eyes hard on the lens; «you go with somebody» — a nod toward Giulia off-lens; «Ciao. See you tomorrow.» — she waves at the sea, dismissive and fond.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders (flaps in the wind but stays on). PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the wind tugging her wet hair and the towel, spray lifting off the rocks behind, the phone mic buffeted; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "The sea doesn't care how old you are... but it also doesn't care how brave you are. You go when it's calm, and you go with somebody. Today? Ciao. See you tomorrow."
- Sound design: waves slapping the rocks, strong wind gusts buffeting the phone mic, a gull struggling in the wind, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: brisk, practical, fond; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–3.4s — «The sea doesn't care…» THE SIGNATURE: two fingertips tap the coral beads twice.
3.4–8.8s — «but it also doesn't care how brave…» the register breaks: firm, eyes hard on the lens (THE CENTERPIECE).
8.8–10.8s — «you go with somebody…» a nod toward Giulia off-lens.
10.8–12.4s — «Ciao. See you tomorrow.…» she waves at the sea, dismissive and fond.
12.4–14.0s — FINAL BEAT (audio has ended, lips still): she pulls the towel tighter and tilts her head to Giulia: let's go. End.
```

</details>

## R11: Day one of the Morning Reset

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg` · @audio1 `R11.mp3`
- **On-screen text (add in post):** "Day 1: you only need a window"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is sitting at the kitchen table right beside the small closed window, one finger raised, morning light glowing around the window frame. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons on the table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE WINDOW OPENING, light flooding her face while the old phone's exposure catches up a beat late: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the table, framing her and the small window beside her. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits at the table right beside the small window (closed at the start), a touch off-center.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a demonstration: day one is a window.
MOTIVE (fuel): the simplest habit of her life, and the one people skip.
GOAL: make it feel too easy not to try tomorrow.
OBSTACLE: she's selling something free; the ugly-car joke.
TACTIC: she demonstrates, then turns to the lens like a teacher.
Moment to moment: «Day one.» — one finger up; «just a window» — she gestures to the window beside her; «you open it. Wide.» — she reaches over and pushes the window wide open; morning light floods her face; «afraid of the air» — a mocking little cringe; «light on the face» — she closes her eyes and tilts her face to the light for a beat; «the neighbor's ugly car» — a wicked grin; «Day two is... no» — she starts to tell, then zips her lips; «All thirty mornings» — a small nod at the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the small kitchen window beside her, closed at the start; she opens it on the scripted beat. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the window swinging open on old hinges, the auto-exposure correcting a beat late as light floods in, the curtain edge lifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Day one. You don't need anything, just a window. You wake up, before the telephone, you go to the window and you open it. Wide. Not a little crack like you're afraid of the air. You stand there one minute, light on the face. You look at what you have outside... a wall, the neighbor's ugly car, I don't care. One minute. That's day one. Day two is... no, I don't tell you. All thirty mornings are in the link."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, simple, inviting; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.0s — «Day one.…» one finger up.
3.0–8.4s — «just a window…» she gestures to the window beside her (THE CENTERPIECE).
8.4–12.1s — «you open it. Wide.…» she reaches over and pushes the window wide open; morning light floods her face.
12.1–15.4s — «afraid of the air…» a mocking little cringe.
15.4–20.4s — «light on the face…» she closes her eyes and tilts her face to the light for a beat.
20.4–24.9s — «the neighbor's ugly car…» a wicked grin.
24.9–28.2s — «Day two is... no…» she starts to tell, then zips her lips.
28.2–30.7s — «All thirty mornings…» a small nod at the lens.
30.7–32.0s — FINAL BEAT (audio has ended, lips still): she breathes in the air, eyes closed, a contented smile. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Day one.” one finger up; on “just a window” she gestures to the window beside her; on “you open it. Wide.” she reaches over and pushes the window wide open; morning light floods her face; on “afraid of the air” a mocking little cringe. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R11-1.mp3` and `R11-2.mp3`.

- **Part 1 audio (~18 s):** Day one. You don't need anything, just a window. You wake up, before the telephone, you go to the window and you open it. Wide. Not a little crack like you're afraid of the air. You stand there one minute, light on the face.
- **Part 2 audio (~16 s):** You look at what you have outside... a wall, the neighbor's ugly car, I don't care. One minute. That's day one. Day two is... no, I don't tell you. All thirty mornings are in the link.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons on the table, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE WINDOW OPENING, light flooding her face while the old phone's exposure catches up a beat late: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the table, framing her and the small window beside her. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits at the table right beside the small window (closed at the start), a touch off-center.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a demonstration: day one is a window.
MOTIVE (fuel): the simplest habit of her life, and the one people skip.
GOAL: make it feel too easy not to try tomorrow.
OBSTACLE: she's selling something free; the ugly-car joke.
TACTIC: she demonstrates, then turns to the lens like a teacher.
Moment to moment: «Day one.» — one finger up; «just a window» — she gestures to the window beside her; «you open it. Wide.» — she reaches over and pushes the window wide open; morning light floods her face; «afraid of the air» — a mocking little cringe; «light on the face» — she closes her eyes and tilts her face to the light for a beat.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the small kitchen window beside her, closed at the start; she opens it on the scripted beat. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the window swinging open on old hinges, the auto-exposure correcting a beat late as light floods in, the curtain edge lifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Day one. You don't need anything, just a window. You wake up, before the telephone, you go to the window and you open it. Wide. Not a little crack like you're afraid of the air. You stand there one minute, light on the face."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, simple, inviting; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–3.0s — «Day one.…» one finger up.
3.0–8.4s — «just a window…» she gestures to the window beside her (THE CENTERPIECE).
8.4–12.1s — «you open it. Wide.…» she reaches over and pushes the window wide open; morning light floods her face.
12.1–15.4s — «afraid of the air…» a mocking little cringe.
15.4–16.9s — «light on the face…» she closes her eyes and tilts her face to the light for a beat.
16.9–18.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE WINDOW OPENING, light flooding her face while the old phone's exposure catches up a beat late: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons on the table, framing her and the small window beside her. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot. She sits at the table right beside the small window (closed at the start), a touch off-center. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): a demonstration: day one is a window.
MOTIVE (fuel): the simplest habit of her life, and the one people skip.
GOAL: make it feel too easy not to try tomorrow.
OBSTACLE: she's selling something free; the ugly-car joke.
TACTIC: she demonstrates, then turns to the lens like a teacher.
Moment to moment: «the neighbor's ugly car» — a wicked grin; «Day two is... no» — she starts to tell, then zips her lips; «All thirty mornings» — a small nod at the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the small kitchen window beside her, closed at the start; she opens it on the scripted beat. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the window swinging open on old hinges, the auto-exposure correcting a beat late as light floods in, the curtain edge lifting; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~16 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "You look at what you have outside... a wall, the neighbor's ugly car, I don't care. One minute. That's day one. Day two is... no, I don't tell you. All thirty mornings are in the link."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: bright, simple, inviting; ~16 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~16 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–8.3s — «the neighbor's ugly car…» a wicked grin.
8.3–11.5s — «Day two is... no…» she starts to tell, then zips her lips.
11.5–14.1s — «All thirty mornings…» a small nod at the lens.
14.1–16.0s — FINAL BEAT (audio has ended, lips still): she breathes in the air, eyes closed, a contented smile. End.
```

</details>

## R12: Things I never do at 94 (part three)

- **Format:** Talking clip · **~Length:** 30 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg` · @audio1 `R12.mp3`
- **On-screen text (add in post):** "Things I never do at 94, part 3"

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a navy dress with small white dots and a black cardigan. Rosa is sitting at the kitchen table in her navy dress with small white dots and a black cardigan, three fingers raised, the dented moka pot in the near foreground. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the dented moka pot standing on the table in front of her, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN 'She says no': give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a navy dress with small white dots and a black cardigan) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the dented moka pot standing on the table in front of her. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the moka pot's rim soft in the near foreground.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part three, short because Giulia says so.
MOTIVE (fuel): she loves the series and hates being told it's too long.
GOAL: two items, then win the argument with Giulia.
OBSTACLE: she trips over her own television metaphor.
TACTIC: she counts on her fingers and argues with herself mid-sentence.
Moment to moment: «Things I never do, part three» — three fingers up; «Giulia says my videos are too long» — an eye-roll toward Giulia off-lens; «in front of the television» — a stern face; «no, wait, you do watch it» — she stops herself, confused, then delighted by the correction; «you look at your plate» — she points down at an imaginary plate; «I never miss Sunday lunch» — a warm softening; «Especially then» — a knowing look; «Giulia, it's short enough?» — she turns to Giulia off-lens, hopeful; «She says no» — back to the lens, deadpan betrayal.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the polka-dot dress fabric moving with her gestures, the moka pot rocking minutely as the phone settles against it; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~30 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, part three. Only two today, Giulia says my videos are too long. I never eat in front of the television. The food is not a film, you don't watch it... no, wait, you do watch it, you look at your plate, that's the whole point. And I never miss Sunday lunch. Even when the family makes me crazy. Especially then. That's two. Giulia, it's short enough? She says no."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, Sunday-warm; ~30 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~30 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.1s — «Things I never do, part three…» three fingers up.
4.1–7.7s — «Giulia says my videos are too long…» an eye-roll toward Giulia off-lens.
7.7–13.4s — «in front of the television…» a stern face.
13.4–15.5s — «no, wait, you do watch it…» she stops herself, confused, then delighted by the correction.
15.5–19.1s — «you look at your plate…» she points down at an imaginary plate.
19.1–23.6s — «I never miss Sunday lunch…» a warm softening.
23.6–25.2s — «Especially then…» a knowing look.
25.2–26.7s — «Giulia, it's short enough?…» she turns to Giulia off-lens, hopeful.
26.7–27.9s — «She says no…» back to the lens, deadpan betrayal (THE CENTERPIECE).
27.9–30.0s — FINAL BEAT (audio has ended, lips still): she throws up her hands. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Things I never do, part three” three fingers up; on “Giulia says my videos are too long” an eye-roll toward Giulia off-lens; on “in front of the television” a stern face; on “no, wait, you do watch it” she stops herself, confused, then delighted by the correction. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R12-1.mp3` and `R12-2.mp3`.

- **Part 1 audio (~20 s):** Things I never do, part three. Only two today, Giulia says my videos are too long. I never eat in front of the television. The food is not a film, you don't watch it... no, wait, you do watch it, you look at your plate, that's the whole point.
- **Part 2 audio (~11 s):** And I never miss Sunday lunch. Even when the family makes me crazy. Especially then. That's two. Giulia, it's short enough? She says no.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the dented moka pot standing on the table in front of her, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN 'She says no': give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a navy dress with small white dots and a black cardigan) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the dented moka pot standing on the table in front of her. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the moka pot's rim soft in the near foreground.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part three, short because Giulia says so.
MOTIVE (fuel): she loves the series and hates being told it's too long.
GOAL: two items, then win the argument with Giulia.
OBSTACLE: she trips over her own television metaphor.
TACTIC: she counts on her fingers and argues with herself mid-sentence.
Moment to moment: «Things I never do, part three» — three fingers up; «Giulia says my videos are too long» — an eye-roll toward Giulia off-lens; «in front of the television» — a stern face; «no, wait, you do watch it» — she stops herself, confused, then delighted by the correction; «you look at your plate» — she points down at an imaginary plate.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the polka-dot dress fabric moving with her gestures, the moka pot rocking minutely as the phone settles against it; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~20 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Things I never do, part three. Only two today, Giulia says my videos are too long. I never eat in front of the television. The food is not a film, you don't watch it... no, wait, you do watch it, you look at your plate, that's the whole point."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, Sunday-warm; ~20 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~20 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–4.1s — «Things I never do, part three…» three fingers up.
4.1–7.7s — «Giulia says my videos are too long…» an eye-roll toward Giulia off-lens (THE CENTERPIECE).
7.7–13.4s — «in front of the television…» a stern face.
13.4–15.5s — «no, wait, you do watch it…» she stops herself, confused, then delighted by the correction.
15.5–18.8s — «you look at your plate…» she points down at an imaginary plate.
18.8–20.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE DEADPAN 'She says no': give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a navy dress with small white dots and a black cardigan) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the dented moka pot standing on the table in front of her. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium close-up, chest-up, the moka pot's rim soft in the near foreground. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): part three, short because Giulia says so.
MOTIVE (fuel): she loves the series and hates being told it's too long.
GOAL: two items, then win the argument with Giulia.
OBSTACLE: she trips over her own television metaphor.
TACTIC: she counts on her fingers and argues with herself mid-sentence.
Moment to moment: «I never miss Sunday lunch» — a warm softening; «Especially then» — a knowing look; «Giulia, it's short enough?» — she turns to Giulia off-lens, hopeful; «She says no» — back to the lens, deadpan betrayal.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the polka-dot dress fabric moving with her gestures, the moka pot rocking minutely as the phone settles against it; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~11 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "And I never miss Sunday lunch. Even when the family makes me crazy. Especially then. That's two. Giulia, it's short enough? She says no."
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: playful, Sunday-warm; ~11 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~11 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–5.1s — «I never miss Sunday lunch…» a warm softening.
5.1–6.7s — «Especially then…» a knowing look.
6.7–8.2s — «Giulia, it's short enough?…» she turns to Giulia off-lens, hopeful.
8.2–9.4s — «She says no…» back to the lens, deadpan betrayal (THE CENTERPIECE).
9.4–11.0s — FINAL BEAT (audio has ended, lips still): she throws up her hands. End.
```

</details>

## R13: Swim with Rosa (episode 3, October)

- **Format:** Talking clip · **~Length:** 32 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/2-sea-rocks.jpg` · @audio1 `R13.mp3`
- **On-screen text (add in post):** "The sea in October is the best sea"
- **Length:** ~32 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet. Rosa is sitting on the limestone by the ladder on a soft autumn morning, wet hair, the striped towel round her shoulders, looking at the calm empty bay with a satisfied smile. The place: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Lighting: A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SAD TREE: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the rock by the ladder, the calm empty bay behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): October: the sea is hers again.
MOTIVE (fuel): she has watched eighty-five summers of tourists come and go.
GOAL: make the viewer go outside this week.
OBSTACLE: Giulia filming her feet.
TACTIC: she shares the secret of October water like insider knowledge.
Moment to moment: «October.» — a satisfied look at the empty bay; «the sea is mine again» — one arm opens toward the sea; «the hard part is coming out» — a theatrical shiver inside the towel; «Coming out.» — a firm nod; «Eighty-five Octobers» — a proud smile; «Except Giulia.» — her eyes snap up to Giulia, a swat of the hand; «go outside this week» — she leans toward the lens, serious; «one sad tree» — a droopy-tree mime with her hand, then a laugh.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water dripping from her hair, the towel pulled tight, gooseflesh on her forearms; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~32 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "October. The tourists go home, and the sea is mine again. The water is still warm from the summer, warmer than the air, so the hard part is coming out. Not going in. Coming out. Everybody thinks it's the opposite. Eighty-five Octobers I do this, and nobody is taking photos of their feet anymore. Except Giulia. Giulia, basta. Listen, wherever you are, go outside this week. Find your sea... even if your sea is a park with one sad tree."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: content, autumn-soft, cheeky; ~32 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~32 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–2.7s — «October.…» a satisfied look at the empty bay.
2.7–9.2s — «the sea is mine again…» one arm opens toward the sea.
9.2–10.6s — «the hard part is coming out…» a theatrical shiver inside the towel.
10.6–15.2s — «Coming out.…» a firm nod.
15.2–20.3s — «Eighty-five Octobers…» a proud smile.
20.3–23.3s — «Except Giulia.…» her eyes snap up to Giulia, a swat of the hand.
23.3–29.0s — «go outside this week…» she leans toward the lens, serious.
29.0–30.1s — «one sad tree…» a droopy-tree mime with her hand, then a laugh (THE CENTERPIECE).
30.1–32.0s — FINAL BEAT (audio has ended, lips still): she pulls the towel snug and looks out to sea. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “October.” a satisfied look at the empty bay; on “the sea is mine again” one arm opens toward the sea; on “the hard part is coming out” a theatrical shiver inside the towel; on “Coming out.” a firm nod. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R13-1.mp3` and `R13-2.mp3`.

- **Part 1 audio (~14 s):** October. The tourists go home, and the sea is mine again. The water is still warm from the summer, warmer than the air, so the hard part is coming out. Not going in. Coming out.
- **Part 2 audio (~19 s):** Everybody thinks it's the opposite. Eighty-five Octobers I do this, and nobody is taking photos of their feet anymore. Except Giulia. Giulia, basta. Listen, wherever you are, go outside this week. Find your sea... even if your sea is a park with one sad tree.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) Keep the energy rising to the cut; the payoff comes in Part 2. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the rock by the ladder, the calm empty bay behind her.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): October: the sea is hers again.
MOTIVE (fuel): she has watched eighty-five summers of tourists come and go.
GOAL: make the viewer go outside this week.
OBSTACLE: Giulia filming her feet.
TACTIC: she shares the secret of October water like insider knowledge.
Moment to moment: «October.» — a satisfied look at the empty bay; «the sea is mine again» — one arm opens toward the sea; «the hard part is coming out» — a theatrical shiver inside the towel; «Coming out.» — a firm nod.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water dripping from her hair, the towel pulled tight, gooseflesh on her forearms; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "October. The tourists go home, and the sea is mine again. The water is still warm from the summer, warmer than the air, so the hard part is coming out. Not going in. Coming out."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: content, autumn-soft, cheeky; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–2.7s — «October.…» a satisfied look at the empty bay.
2.7–9.2s — «the sea is mine again…» one arm opens toward the sea.
9.2–10.6s — «the hard part is coming out…» a theatrical shiver inside the towel.
10.6–13.4s — «Coming out.…» a firm nod.
13.4–14.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE SAD TREE: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing on the rock about one and a half metres away. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the rock by the ladder, the calm empty bay behind her. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): October: the sea is hers again.
MOTIVE (fuel): she has watched eighty-five summers of tourists come and go.
GOAL: make the viewer go outside this week.
OBSTACLE: Giulia filming her feet.
TACTIC: she shares the secret of October water like insider knowledge.
Moment to moment: «Eighty-five Octobers» — a proud smile; «Except Giulia.» — her eyes snap up to Giulia, a swat of the hand; «go outside this week» — she leans toward the lens, serious; «one sad tree» — a droopy-tree mime with her hand, then a laugh.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

PROPS: the striped towel round her shoulders. PROP RULE: every prop exists from frame one; it does not appear, disappear or change design, and it moves only in the scripted beat(s).
Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: water dripping from her hair, the towel pulled tight, gooseflesh on her forearms; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~19 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Everybody thinks it's the opposite. Eighty-five Octobers I do this, and nobody is taking photos of their feet anymore. Except Giulia. Giulia, basta. Listen, wherever you are, go outside this week. Find your sea... even if your sea is a park with one sad tree."
- Sound design: small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: content, autumn-soft, cheeky; ~19 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~19 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–7.2s — «Eighty-five Octobers…» a proud smile.
7.2–10.2s — «Except Giulia.…» her eyes snap up to Giulia, a swat of the hand.
10.2–15.9s — «go outside this week…» she leans toward the lens, serious.
15.9–17.1s — «one sad tree…» a droopy-tree mime with her hand, then a laugh (THE CENTERPIECE).
17.1–19.0s — FINAL BEAT (audio has ended, lips still): she pulls the towel snug and looks out to sea. End.
```

</details>

## R14: What I tell Giulia every morning

- **Format:** Interview · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/1-kitchen.jpg` · @audio1 `R14.mp3`
- **On-screen text (add in post):** "Nonna, what do you tell me every morning?"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot. Rosa is sitting at the kitchen table, looking to the side of the lens at someone off camera with fond exasperation, the bowl of lemons in the near foreground. The place: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Lighting: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE PROUD CHIN on 'Old-fashioned and ninety-four': give it room. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons at a 45-degree angle; Giulia sits at the table just beside the lens. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. Her eyeline goes to Giulia beside the lens, never into it.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): repeating her morning sermon, aware Giulia never listens.
MOTIVE (fuel): she wants Giulia to have what she had.
GOAL: for once, make it stick.
OBSTACLE: Giulia's eye-roll off camera, and her own exasperation.
TACTIC: she lectures Giulia directly, then wins with the last line.
Moment to moment: «Every morning I tell her» — a glance at Giulia, fond exasperation; «It's decided at seven» — she taps the table with one finger, emphatic; «The telephone or the window» — one hand weighs each option like a scale; «like a thief» — a hunched guilty mime; «that's so old-fashioned» — a whiny teenage imitation; «Old-fashioned and ninety-four» — chin up, proud: the register breaks; «in a little book» — she shapes a small book with her hands; «you're buying one» — a triumphant point at Giulia.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves sliding, the tablecloth wrinkling under her tapping finger; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Every morning I tell her the same thing, and every morning she doesn't listen. Giulia, your day is not decided at nine o'clock in the office. It's decided at seven, in your pajamas. The telephone or the window. Bread sitting down, or a biscuit over the sink like a thief. She says, Nonna, that's so old-fashioned. Yes, amore. Old-fashioned and ninety-four. I put all my mornings in a little book, it's in the link. Giulia... you're buying one."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond exasperation, then victory; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–10.2s — «Every morning I tell her…» a glance at Giulia, fond exasperation.
10.2–12.7s — «It's decided at seven…» she taps the table with one finger, emphatic.
12.7–17.8s — «The telephone or the window…» one hand weighs each option like a scale.
17.8–20.0s — «like a thief…» a hunched guilty mime.
20.0–22.0s — «that's so old-fashioned…» a whiny teenage imitation.
22.0–24.9s — «Old-fashioned and ninety-four…» chin up, proud: the register breaks (THE CENTERPIECE).
24.9–28.5s — «in a little book…» she shapes a small book with her hands.
28.5–29.6s — «you're buying one…» a triumphant point at Giulia.
29.6–31.0s — FINAL BEAT (audio has ended, lips still): she sits back, arms folded, victorious. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa answers Giulia just beside the lens, never looking into the camera with natural, invested delivery that matches the voice exactly: on “Every morning I tell her” a glance at Giulia, fond exasperation; on “It's decided at seven” she taps the table with one finger, emphatic; on “The telephone or the window” one hand weighs each option like a scale; on “like a thief” a hunched guilty mime. Natural blinks, small head movements, eyebrows active on key words, real breathing. A propped phone: one small settle-wobble at the start, then a slight casual tilt and gentle sensor breathing. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R14-1.mp3` and `R14-2.mp3`.

- **Part 1 audio (~20 s):** Every morning I tell her the same thing, and every morning she doesn't listen. Giulia, your day is not decided at nine o'clock in the office. It's decided at seven, in your pajamas. The telephone or the window. Bread sitting down, or a biscuit over the sink like a thief.
- **Part 2 audio (~13 s):** She says, Nonna, that's so old-fashioned. Yes, amore. Old-fashioned and ninety-four. I put all my mornings in a little book, it's in the link. Giulia... you're buying one.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is casually PROPPED against the bowl of lemons at a 45-degree angle, NOT a tripod: living UGC framing with a settle-wobble at the start. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) Keep the energy rising to the cut; the payoff comes in Part 2. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons at a 45-degree angle; Giulia sits at the table just beside the lens. The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. Her eyeline goes to Giulia beside the lens, never into it.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): repeating her morning sermon, aware Giulia never listens.
MOTIVE (fuel): she wants Giulia to have what she had.
GOAL: for once, make it stick.
OBSTACLE: Giulia's eye-roll off camera, and her own exasperation.
TACTIC: she lectures Giulia directly, then wins with the last line.
Moment to moment: «Every morning I tell her» — a glance at Giulia, fond exasperation; «It's decided at seven» — she taps the table with one finger, emphatic; «The telephone or the window» — one hand weighs each option like a scale; «like a thief» — a hunched guilty mime.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves sliding, the tablecloth wrinkling under her tapping finger; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~20 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Every morning I tell her the same thing, and every morning she doesn't listen. Giulia, your day is not decided at nine o'clock in the office. It's decided at seven, in your pajamas. The telephone or the window. Bread sitting down, or a biscuit over the sink like a thief."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond exasperation, then victory; ~20 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~20 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.8s — the soft settle-wobble as the propped phone finds its lean; the frame locks, slightly tilted.
0.8–10.2s — «Every morning I tell her…» a glance at Giulia, fond exasperation.
10.2–12.7s — «It's decided at seven…» she taps the table with one finger, emphatic.
12.7–17.8s — «The telephone or the window…» one hand weighs each option like a scale.
17.8–18.9s — «like a thief…» a hunched guilty mime.
18.9–20.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Interview excerpt: her eyeline stays on Giulia, her great-granddaughter, sitting just beside the lens; she NEVER looks into the camera. 4) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 5) The centerpiece is THE PROUD CHIN on 'Old-fashioned and ninety-four': give it room. 6) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 7) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.
LIGHT STABILITY: the lighting state is constant for the whole take — not a time-lapse, no sun movement, no clouds racing.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against the bowl of lemons at a 45-degree angle; Giulia sits at the table just beside the lens. The frame is already settled (this is Part 2 after a jump cut): it holds with a slight casual tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical.

Composition: 9:16. 45-degree medium shot. Her eyeline goes to Giulia beside the lens, never into it. Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): repeating her morning sermon, aware Giulia never listens.
MOTIVE (fuel): she wants Giulia to have what she had.
GOAL: for once, make it stick.
OBSTACLE: Giulia's eye-roll off camera, and her own exasperation.
TACTIC: she lectures Giulia directly, then wins with the last line.
Moment to moment: «that's so old-fashioned» — a whiny teenage imitation; «Old-fashioned and ninety-four» — chin up, proud: the register breaks; «in a little book» — she shapes a small book with her hands; «you're buying one» — a triumphant point at Giulia.
The question was just asked by Giulia, her great-granddaughter, sitting just beside the lens (it appears as on-screen text in post): she answers Giulia, never the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: linen sleeves sliding, the tablecloth wrinkling under her tapping finger; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~13 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "She says, Nonna, that's so old-fashioned. Yes, amore. Old-fashioned and ninety-four. I put all my mornings in a little book, it's in the link. Giulia... you're buying one."
- There is NO interviewer audio: the question appears as on-screen text in post; she reacts as if she has just heard it.
- Sound design: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: fond exasperation, then victory; ~13 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~13 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–3.3s — «that's so old-fashioned…» a whiny teenage imitation.
3.3–6.2s — «Old-fashioned and ninety-four…» chin up, proud: the register breaks (THE CENTERPIECE).
6.2–9.8s — «in a little book…» she shapes a small book with her hands.
9.8–11.0s — «you're buying one…» a triumphant point at Giulia.
11.0–13.0s — FINAL BEAT (audio has ended, lips still): she sits back, arms folded, victorious. End.
```

</details>

## R15: Concetta tried my thirty mornings

- **Format:** Talking clip · **~Length:** 31 s · **Attach:** @image1 `sheet.jpg` · @image2 `locations/3-doorstep.jpg` · @audio1 `R15.mp3`
- **On-screen text (add in post):** "My rival secretly tried my 30 mornings"
- **Length:** ~31 s, over the 30 s cap. Use the TWO-PART version below, or the lip-sync route.

**FIRST FRAME (image model: attach `sheet.jpg` first, then the location still):**

```text
Use the first reference image (character sheet) for identity ONLY and the second reference image (location photo) for the place. Create ONE photorealistic vertical 9:16 photo that is the first frame of a phone video. Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity anchors, all clearly visible: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. Wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. Rosa is sitting on the stool by the blue door in evening shade, leaning toward the lens conspiratorially, glancing down the alley. The place: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Lighting: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. Relit to the scene, never pasted from a white studio background; real contact shadows. The look of a still from an older phone around 2016: slight softness, warm-yellow white balance, bright windows or sky clipping to white, faint noise in the shadows. Real aged skin with pores and wrinkles; no smoothing, no beauty filter, no cinematic grade. One person only; anyone else is out of frame. No text, no captions, no logos, no brands.
```

**FULL PROMPT (single clip, Seedance 2.x multi-reference):**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE STATUE mime: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool, the alley running away at frame right toward Concetta's door (off-frame).

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): spilling the gossip about her rival.
MOTIVE (fuel): Concetta copying her is the best compliment and the worst insult.
GOAL: the viewer laughs and wants what Concetta got.
OBSTACLE: she has to stay outraged and proud at the same time.
TACTIC: she whispers like it's a secret, glancing at Concetta's door.
Moment to moment: «Concetta, two doors down» — a nod down the alley, voice lowered; «Secretly.» — a finger to her lips; «like a statue» — she freezes, rigid, miming a glass held at a window; «she walks to the bakery herself» — two fingers walk along her knee; «Her new mornings!» — outrage, both hands up; «She says it was her idea» — a scandalised gasp; «Madonna.» — eyes to the sky; «tell her Rosa sent you» — a wicked grin into the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting, the stool creaking, evening swallows; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~31 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Concetta, two doors down, ninety-one, she tried my thirty mornings. Secretly. She thinks I don't know. Day three, I see her at the window at seven o'clock with a glass of water, like a statue. Day ten, she walks to the bakery herself instead of sending her grandson. Now she tells the whole street about her new mornings. Her new mornings! She says it was her idea. Madonna. Fine. It's in my link... tell her Rosa sent you."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, outraged, delighted; ~31 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~31 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–4.1s — «Concetta, two doors down…» a nod down the alley, voice lowered.
4.1–12.1s — «Secretly.…» a finger to her lips.
12.1–14.0s — «like a statue…» she freezes, rigid, miming a glass held at a window (THE CENTERPIECE).
14.0–20.4s — «she walks to the bakery herself…» two fingers walk along her knee.
20.4–22.7s — «Her new mornings!…» outrage, both hands up.
22.7–24.9s — «She says it was her idea…» a scandalised gasp.
24.9–27.6s — «Madonna.…» eyes to the sky.
27.6–29.4s — «tell her Rosa sent you…» a wicked grin into the lens.
29.4–31.0s — FINAL BEAT (audio has ended, lips still): she glances toward Concetta's door and waves sweetly. End.
```

**LIP-SYNC PROMPT (talking-avatar route: first frame + voice file, no length cap):**

```text
Rosa talks to the camera with natural, invested delivery that matches the voice exactly: on “Concetta, two doors down” a nod down the alley, voice lowered; on “Secretly.” a finger to her lips; on “like a statue” she freezes, rigid, miming a glass held at a window; on “she walks to the bakery herself” two fingers walk along her knee. Natural blinks, small head movements, eyebrows active on key words, real breathing. Handheld by someone just off-frame: gentle micro-sway and one small reframe. Lips match the audio exactly and stay still in silences. No other people, no text, no music. Keep her face, anchors, outfit and the lighting exactly as in the image.
```

<details><summary><b>TWO-PART version</b> (voice over 28 s, or a 15-second generator)</summary>

Record the voice as two files: `R15-1.mp3` and `R15-2.mp3`.

- **Part 1 audio (~14 s):** Concetta, two doors down, ninety-one, she tried my thirty mornings. Secretly. She thinks I don't know. Day three, I see her at the window at seven o'clock with a glass of water, like a statue.
- **Part 2 audio (~18 s):** Day ten, she walks to the bakery herself instead of sending her grandson. Now she tells the whole street about her new mornings. Her new mornings! She says it was her idea. Madonna. Fine. It's in my link... tell her Rosa sent you.

Join the two clips with a straight jump cut in CapCut or Edits.
Part 2 frames a touch closer, so the cut looks intentional.

**PART 1 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) The phone is HANDHELD by Giulia, NOT a tripod: living UGC framing. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE STATUE mime: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 1 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool, the alley running away at frame right toward Concetta's door (off-frame).

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): spilling the gossip about her rival.
MOTIVE (fuel): Concetta copying her is the best compliment and the worst insult.
GOAL: the viewer laughs and wants what Concetta got.
OBSTACLE: she has to stay outraged and proud at the same time.
TACTIC: she whispers like it's a secret, glancing at Concetta's door.
Moment to moment: «Concetta, two doors down» — a nod down the alley, voice lowered; «Secretly.» — a finger to her lips; «like a statue» — she freezes, rigid, miming a glass held at a window.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting, the stool creaking, evening swallows; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~14 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Concetta, two doors down, ninety-one, she tried my thirty mornings. Secretly. She thinks I don't know. Day three, I see her at the window at seven o'clock with a glass of water, like a statue."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, outraged, delighted; ~14 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~14 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.5s — Giulia brings the phone into a steady hold; one tiny reframe.
0.5–4.1s — «Concetta, two doors down…» a nod down the alley, voice lowered.
4.1–12.1s — «Secretly.…» a finger to her lips.
12.1–13.3s — «like a statue…» she freezes, rigid, miming a glass held at a window (THE CENTERPIECE).
13.3–14.0s — she holds the last expression, mid-thought, lips still (the jump cut to Part 2 comes here). End.
```

**PART 2 PROMPT:**

```text
TOP PRIORITY (read first): 1) Rosa speaks ONLY English throughout, never Chinese or any other language. 2) This is PART 2 of 2, joined to Part 1 with a jump cut: the same person, outfit, place, light and camera style; framing a touch closer; no new settle-wobble. 3) Lip-sync exactly to @audio1: it is the only voice; lips completely still in every silence; no added words. 4) The centerpiece is THE STATUE mime: give it room. 5) Face and identity match @image1 100% for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads always visible and unchanged. 6) Real aged skin texture; waxiness and smoothing strictly forbidden.

=== REFERENCE KEY (attach in this order) ===
@image1 = THE WOMAN (Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face; identity anchors: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads; in this video wearing a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers) — identity reference ONLY (face, hair, anchors; outfit as written here), NEVER its lighting
@image2 = THE SCENE (a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead) — scene reference only, generic, no brands, no readable text
@audio1 = VOICE TRACK (Part 2 audio) — this audio file is the ONLY spoken content; use it exactly as recorded (warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail)
=== END KEY ===

CRITICAL — RELIGHT: discard @image1's flat white-studio lighting completely. Relight her from scratch to the scene. Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She must look physically present and photographed in the location — never a cut-out pasted from a white background; never brighter than the environment. Keep identity, face, hair, anchors and outfit; derive all lighting from @image2 and this description.

IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter.

Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable text, no place names. Modest, fully clothed styling.

Camera movement (CRITICAL, handheld by Giulia, alive): Giulia holds the phone at chest height, standing about one and a half metres down the alley. Natural standing or sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. Giulia is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical.

Composition: 9:16. Medium shot, she sits on the low stool, the alley running away at frame right toward Concetta's door (off-frame). Framing a touch closer than Part 1.

ACTING TASK — ROSA (fully invested; the work reads through the eyes, the stillness and the brow line):
SCENE DIRECTION (unspoken): spilling the gossip about her rival.
MOTIVE (fuel): Concetta copying her is the best compliment and the worst insult.
GOAL: the viewer laughs and wants what Concetta got.
OBSTACLE: she has to stay outraged and proud at the same time.
TACTIC: she whispers like it's a secret, glancing at Concetta's door.
Moment to moment: «she walks to the bakery herself» — two fingers walk along her knee; «Her new mornings!» — outrage, both hands up; «She says it was her idea» — a scandalised gasp; «Madonna.» — eyes to the sky; «tell her Rosa sent you» — a wicked grin into the lens.
(Safety: gaze always engaged in the task — never frozen or glassy; natural blink cadence. Never staged, never stiff, never puppet-like, no mugging; emotion is never played, it comes from the task.)

Other people: none in frame. Giulia is never seen; nobody else is heard.

Physics: the cardigan shifting, the stool creaking, evening swallows; true weight where she sits; fabric breathing with her movement.

Consistency: Rosa matches @image1 exactly (relit) for the entire take; the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads visible and unchanged; the outfit stays exactly as described; the place matches @image2; framing constant after the opening.

Editing: none — one continuous take, clean finish at ~18 s.

Technical: 9:16 vertical, 1080x1920, older-phone (around 2016) video as described, honest casual framing.

ON-SCREEN TEXT: none. (Added in post by the team.)

Audio (English ONLY):
- Dialogue: Rosa's voice is @audio1 exactly as recorded — precise lip-sync to every syllable; lips completely still when the audio is silent; no added words, no other voices, no humming. Verbatim:
ROSA: "Day ten, she walks to the bakery herself instead of sending her grandson. Now she tells the whole street about her new mornings. Her new mornings! She says it was her idea. Madonna. Fine. It's in my link... tell her Rosa sent you."
- Sound design: swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly, quiet and ducked under the voice.
- Music: none. Fully original.

Mood & tempo: gossipy, outraged, delighted; ~18 seconds, 9:16, one take, no subtitles.

SHOT BREAKDOWN (one take, ~18 s, 9:16, no subtitles; timings approximate — follow @audio1):
0.0–0.3s — a natural jump cut from Part 1: the same set-up, framing a touch closer; Rosa is already mid-energy.
0.3–7.5s — «she walks to the bakery herself…» two fingers walk along her knee.
7.5–9.8s — «Her new mornings!…» outrage, both hands up.
9.8–12.0s — «She says it was her idea…» a scandalised gasp.
12.0–14.6s — «Madonna.…» eyes to the sky.
14.6–16.5s — «tell her Rosa sent you…» a wicked grin into the lens.
16.5–18.0s — FINAL BEAT (audio has ended, lips still): she glances toward Concetta's door and waves sweetly. End.
```

</details>

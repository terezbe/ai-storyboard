# Kolbo prompts: Rosa

> **פרומפטים ל-Kolbo (Seedance 2.5).** נבנה אוטומטית על ידי `tools/kolbo_prompts.py`, לא עורכים ידנית.
> הצורה הזו עברה את ניסיון R2 של רוזה (5.10.2026): צילום אחד רציף, 9:16, הקול והדיבור נוצרים ישירות ב-Seedance.
>
> **איך מפיקים סרטון:**
> - כלי: `generate_elements`, מודל `seedance-2-5`, `aspect_ratio` 9:16, `multi_shots` false, `resolution` `480p-draft`.
> - `duration` = המספר בשורת ה-Total.
> - רפרנסים לפי הסדר: `sheet.jpg`, ואז `profile-picture.jpg`, ואז קובץ הלוקיישן.
> - אחרי אישור: `edit_video` עם `upscale` (`bytedance-upscaler/upscale/video`, 1080p), ואז `finish_video.py`.

| ID | Title | Format | Location | Length |
|---|---|---|---|---|
| R1 | Things I never do at 94 (part one) | Talking | `locations/1-kitchen.jpg` | 29 s |
| R2 | Swim with Rosa (episode 1) | Talking | `locations/2-sea-rocks.jpg` | 29 s |
| R3 | My doctor is sixty years younger than me | Talking | `locations/3-doorstep.jpg` | 28 s |
| R4 | Thirty and tired every morning? | Talking | `locations/1-kitchen.jpg` | 28 s |
| R5 | Red flags in your morning | Talking | `locations/3-doorstep.jpg` | 29 s |
| R6 | What I eat in a day at 94 (silent b-roll) | Silent b-roll | `locations/1-kitchen.jpg` | 12 s |
| R7 | My husband bought me this with one fish | Interview | `locations/3-doorstep.jpg` | 29 s |
| R8 | Riposo: you call it lazy | Talking | `locations/3-doorstep.jpg` | 30 s |
| R9 | Things I never do at 94 (part two) | Talking | `locations/3-doorstep.jpg` | 30 s |
| R10 | Swim with Rosa (episode 2, windy day) | Talking | `locations/2-sea-rocks.jpg` | 29 s |
| R11 | Day one of the Morning Reset | Talking | `locations/1-kitchen.jpg` | 30 s (tight) |
| R12 | Things I never do at 94 (part three) | Talking | `locations/1-kitchen.jpg` | 27 s |
| R13 | Swim with Rosa (episode 3, October) | Talking | `locations/2-sea-rocks.jpg` | 30 s |
| R14 | What I tell Giulia every morning | Interview | `locations/1-kitchen.jpg` | 29 s |
| R15 | Concetta tried my thirty mornings | Talking | `locations/3-doorstep.jpg` | 29 s |

## R1: Things I never do at 94 (part one)

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 8476 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
The opener of a series: a 94-year-old enjoying listing her own rules, delighted with herself. Motive: she has outlived everyone who told her to slow down; her 'nevers' are trophies. Goal: make the viewer laugh AND want part two. Obstacle: the lift item collapses mid-list and she has to rescue it without losing the rhythm. Tactic: she counts the 'nevers' on her fingers and checks the lens after each one: did it land?. Mood and tempo: mischievous, warm, quick. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE COLLAPSE: the lift item falling apart and her waving it away.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Near-frontal medium close-up, chest-up. She sits at the table with her forearms on the crochet cloth, a touch off-center; the window and the blue-and-white tiles are soft behind her.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a wooden bread board leaning on the wall at the back of the kitchen table, a little below her eye level. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: a small white coffee cup on a saucer on the cloth beside her hand (static, never moves). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Linen sleeves creasing at the elbow, the coral beads shifting as she leans, dust motes in the window light; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — Near-frontal medium close-up, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Rosa, chin up, a proud little smile, eyes straight into the lens: "Things I never do, and I'm ninety-four."
0:02–0:06 — one finger up, deadly serious: "I never eat standing up. Never. You eat standing up,"
0:06–0:09 — a quick pecking mime with her fingers, then a laugh breaks through: "you eat like a seagull, you don't even taste it."
0:09–0:14 — a second finger goes up, then her face falls as she realises; the register breaks and she waves the point away: "I never take the lift... eh, we don't have a lift. Doesn't count."
0:14–0:18 — a proud nod, a thumb pointing down toward the sea: "A hundred and twelve steps, down and up. That counts."
0:18–0:22 — a third finger, leaning in to the lens, mock-stern: "And I never look at the telephone before I look at the sea."
0:22–0:27 — her eyes flick off-lens toward Giulia, mischievous, then back to the lens, a sly closed-lip smile: "Giulia hates this one. After this, amore, you put it down. Part two next week."
0:27–0:29 — silence, lips still: she holds the sly smile one beat and raises her eyebrows once: case closed. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R2: Swim with Rosa (episode 1)

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sea-rocks.jpg` · 8636 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Use the place only.

[EMOTIONAL INTENT]
The just-came-out moment: wet, alive and a little smug. Motive: eighty-five years of mornings; this swim is her proof. Goal: make the viewer feel the cold and want it anyway. Obstacle: Giulia filming instead of helping, the breeze, her own laughter. Tactic: she talks to the lens like a friend who doubted her, eyes checking after each jab. Mood and tempo: bright, alive, cheeky, then a quiet landing. Every beat is played from this, never posed.
SIGNATURE MOMENT: the signature move (two fingertips tap the red coral beads twice) on the catchphrase.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. No other people. Real, untidy details that never move: her worn rubber sandals and a small faded canvas bag on the rock beside her. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. She sits on the flat rock beside the old metal ladder, the towel round her shoulders, the turquoise bay and the headland behind her, a touch off-center.

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing on the rock about one and a half metres away and angled slightly down at her. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: the striped towel round her shoulders (moves only with her body and the breeze). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Water droplets running from her hairline, the towel edge lifting in the breeze, wet glossy coral beads, a wet patch on the linen; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — Medium shot, phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Rosa, a big open grin, water dripping from her hairline, chin lifted at the lens: "Ninety-four, and I just came out of the sea. Every morning since I was nine."
0:05–0:08 — eyebrows up, mock-offended: "Cold? Of course it's cold, it's the sea,"
0:08–0:11 — a flat-hand chop, deadpan: "it's not soup. You go in slow, piano piano,"
0:11–0:16 — a wicked little laugh, fingers to her mouth: "and you say a bad word. Everybody says the bad word. I go where it's safe,"
0:16–0:21 — a nod, serious for one beat: the safety line lands, then eyes flick up to Giulia above the lens, a teasing squint: "I never go alone... today I have Giulia. With the telephone."
0:21–0:25 — a laugh, a little pat of the air toward Giulia, then two fingertips tap the red coral beads twice; her voice drops, eyes steady on the lens (the signature move: the only time in the whole video): "Useless, but she's here. The sea doesn't care how old you are."
0:25–0:27 — a small closed-lip smile: "It only cares that you come."
0:27–0:29 — silence, lips still: she looks out at the sea for a second, then back at the lens with a tiny nod. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent, and two fingertips tap the red coral beads twice only on "The sea doesn't care".
```

## R3: My doctor is sixty years younger than me

- **Length:** 28 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 8288 characters

```text
Single continuous shot, 28s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 28s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
Doorstep gossip about her very young doctor. Motive: she adores the boy, but she loves being the one who knows best. Goal: land the double punchline. Obstacle: she mustn't sound like she's mocking doctors; she respects him. Tactic: she plays both parts, the serious doctor and herself, eyes on the lens for the punchlines. Mood and tempo: gossipy, warm, sharp timing. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DEADPAN on the last line.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot at chest height. She sits on the low wooden stool by the blue door, a pot of red geraniums at the edge of the frame.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against an upturned wooden crate about one and a half metres in front of her, at her chest height. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The cardigan sleeve sliding up her right wrist as she draws the beard in the air, showing the faded anchor tattoo, the stool creaking, the sheets moving overhead; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:28 — Medium shot at chest height, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Rosa, a delighted, scandalised look straight into the lens: "My doctor is sixty years younger than me. Thirty-four."
0:03–0:14 — she draws the doctor's little pointed beard in the air with one finger, a hand's width in front of her own chin, which stays smooth and bare, then she mimes a doctor peering at papers, at the lens, then at the papers again: "Little beard, like a goat. Every year he listens to my chest, he looks at the papers, he looks at me... he looks at the papers again. And he says,"
0:14–0:17 — a solemn deep-voiced imitation, chin tucked: "Signora, keep doing what you're doing. I tell him, amore,"
0:17–0:23 — a sharp little shrug, eyes sparkling: the first punchline, then both palms up, suddenly sincere: "I wasn't asking. No, no, I listen to him. He's a good boy, I bring him lemons."
0:23–0:26 — a proud chin lift, then her face drops into deadpan for the second punchline; a beat of silence: "He says I'm his favorite. He says that to everybody."
0:26–0:28 — silence, lips still: she breaks into a short laugh and looks away down the alley. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a beard or goatee on Rosa: the little beard she talks about belongs to the doctor, who is never seen; a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 28s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 28 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R4: Thirty and tired every morning?

- **Length:** 28 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 8110 characters

```text
Single continuous shot, 28s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 28s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
A no-nonsense intervention for a tired thirty-year-old. Motive: she watches Giulia's generation wake up already exhausted, and it baffles her. Goal: make the viewer try the window tomorrow. Obstacle: she knows they'll roll their eyes at something this simple. Tactic: she catches them out with 'the telephone', then sells the tiny secret like it's gold. Mood and tempo: brisk, bossy-loving, conspiratorial. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE BIG SECRET, almost whispered.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, she leans slightly toward the lens over the table; lemons soft in the near foreground; the bright window at frame left.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the bowl of lemons on the kitchen table, a little below her eye level. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The lemons rocking very slightly as the phone settles against the bowl, linen creasing, window light on her face; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:28 — Medium close-up, chest-up, she leans slightly toward the lens over the table; lemons soft in the near foreground; the bright window at frame left, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Rosa, a squint at the lens, sizing the viewer up: "Thirty and tired every morning? Listen to me. First thing you touch in the morning?"
0:05–0:11 — she points straight at the lens: caught you: "The telephone. Before your feet are on the floor you already read about a war and..."
0:11–0:14 — a theatrical eye-roll, then she gestures to the window at her left; light catches her face: "somebody's wedding. Me, first thing, I open the window."
0:14–0:19 — a conspiratorial lean-in, almost a whisper: "That's the big secret. Light on the face. Then water. A big glass."
0:19–0:21 — her hands show a big glass, insistent: "Not a little one, a big one."
0:21–0:24 — a softer, proud smile: "I wrote you thirty mornings like this."
0:24–0:26 — her eyes flick off-lens to Giulia, a little nod: "Giulia put it in the link."
0:26–0:28 — silence, lips still: she sits back and folds her arms, satisfied. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 28s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 28 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R5: Red flags in your morning

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 8213 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
A grandmother diagnosing your mornings like a doctor reading an X-ray. Motive: thirty-four thousand mornings of evidence. Goal: make the viewer recognise themselves and laugh. Obstacle: she loses count at number three and has to bluff. Tactic: she uses the cup as a pointer, eyes checking the lens after each flag. Mood and tempo: teasing, quick, warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE GIVE-UP at number three.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. She sits on the low stool by the blue door, a touch off-center, geraniums beside her.

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing in the alley about one and a half metres away. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: a small white espresso cup on a saucer, held in her hands from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The coffee surface trembling in the cup, the saucer clinking softly, cardigan sleeves shifting; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — Medium shot, phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:07 — Rosa, a mock-grave face, the cup raised like a toast: "Red flags in your morning, from a woman who's had thirty-four thousand mornings. Red flag. You eat breakfast standing over the sink,"
0:07–0:10 — she hunches and darts guilty sideways glances: "like a thief. Sit down, it's your bread,"
0:10–0:17 — she sits up straight, indignant, then she taps her temple with a finger of the free hand, incredulous: "nobody's chasing you. Red flag. The first face you talk to is a screen. Talk to a person."
0:17–0:19 — a dismissive flick of the free hand: "The neighbor, the cat, I don't care."
0:19–0:23 — she frowns, searching; the register breaks and she gives up with a shrug: "Red flag number three... no. Two is enough, you're already upset."
0:23–0:27 — eyebrows up, a sudden warm smile, then she points the cup up toward the sky above the alley: "Green flag? You're still watching. Now go open a window."
0:27–0:29 — silence, lips still: she sips the coffee, eyes on the lens over the rim. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R6: What I eat in a day at 94 (silent b-roll)

- **Length:** 12 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 7029 characters

```text
Single continuous shot, 12s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 12s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
Her morning coffee, unhurried. Mood and tempo: slow, golden, peaceful. She is absorbed in the task, never posing, eyes on what she is doing, never on the lens.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
Rosa does not speak in this video.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. She sits at the table in the LOWER two-thirds of the frame; the upper third is calm white wall and tiles (text-safe).

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a jar on the kitchen counter, at a 45-degree side angle to the table. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. TEXT-SAFE FRAME: the upper third of the frame stays visually calm; Rosa lives in the lower two-thirds. Props: the dented aluminium moka pot on a cork trivet on the table, and a small empty white cup on a saucer, both in place from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
A thin stream of dark coffee, rising steam, a faint clink of cup on saucer, the pot's dent catching the window light; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:12 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Rosa lifts the dented moka pot.
0:02–0:04 — pours coffee into the small cup with a little steam.
0:04–0:06 — sets the pot down.
0:06–0:08 — raises the cup and looks out of the window at the sea.
0:08–0:10 — sets the cup down with both hands resting either side of it.
0:10–0:12 — she settles and holds still, ready to loop (the last pose (hands resting either side of the cup, eyes on the window) is close to the first pose). Hold.

AUDIO: No music. No musical score. No dialogue: Rosa never speaks or mouths words. Ambient sound from the phone's own mic only: the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any speech, mouthed words or lip movement; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 12s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa, silent, the upper third calm for text. Her face matches @Image 1 and @Image 2 exactly for all 12 seconds, relit by the scene's own light.
```

## R7: My husband bought me this with one fish

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 8868 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
Telling Giulia the necklace story she has heard a hundred times, this time for the camera. Motive: Salvatore; the pride of that day is still alive in her. Goal: make Giulia and everyone see him walking up the steps. Obstacle: the grief at the end, which she won't let turn sad. Tactic: she performs the swordfish with her hands, then grows quiet; eyes on Giulia, never the lens. Mood and tempo: proud, funny, then tender. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE QUIET TURN on 'every morning he walked me down to the sea'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, sits out of frame just to the right of the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. She sits on the low stool; her eyeline goes to Giulia, just off-lens to the right, never into the lens.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a terracotta pot on the step about one and a half metres from her, at a 45-degree angle; Giulia sits on the step out of frame, to the right of the phone. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Interview set-up: Rosa answers Giulia, her great-granddaughter, sitting out of frame just to the right of the phone; her eyeline stays on Giulia, just off-lens to the right, and she NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. No prop appears, disappears or changes.

[PHYSICS]
The coral beads clicking softly between her fingers, the cardigan sleeve sliding up to show the anchor tattoo when she spreads her arms, swallows overhead; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Rosa, two fingertips tap the red coral beads twice; a proud glance at Giulia (the signature move: the only time in the whole video): "My husband bought me this with one fish."
0:03–0:10 — the name said softly, a tiny pause, then her arms spread wide, eyes wide: "Salvatore. Nineteen fifty-two, he catches a swordfish so big it doesn't fit in the boat, he has to tie it on the side"
0:10–0:14 — she searches for the words and laughs at herself: "like a... like a second boat. He sells it,"
0:14–0:18 — her fingers walk up an invisible staircase: "and he comes up all the steps with this in his pocket."
0:18–0:20 — she lifts the beads slightly between finger and thumb: "Red coral. He lived to ninety-one,"
0:20–0:23 — the register breaks: quieter, her eyes drop for a moment: "and every morning he walked me down to the sea."
0:23–0:27 — chin up again, a small brave smile at Giulia, then a gentle shrug, eyes glistening but bright, no tears: "Now I walk myself. I still say good morning to him."
0:27–0:29 — silence, lips still: she looks down the alley toward the sea, then back at Giulia with a small nod. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; Rosa looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent, and two fingertips tap the red coral beads twice only on "My husband bought me this".
```

## R8: Riposo: you call it lazy

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 7838 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
Defending the nap like a lawyer defending her whole town. Motive: a lifetime of riposo; she can't believe it needs defending. Goal: make the viewer take a forty-minute rest without guilt. Obstacle: the heat; she is half-yawning herself. Tactic: she mocks hustle culture with her free hand, eyes daring the lens to argue. Mood and tempo: lazy-warm, teasing. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CONFUSION on 'another meeting'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: Rosa's own handheld selfie: mild front-camera wide distortion, a gentle hand bob with her breathing and gestures; any angle change comes only from her hand. Never a cut, zoom, gimbal glide or tripod stillness.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
Selfie, a little wide: head and shoulders with the shady alley, the blue door and a bright strip of sun high on the wall behind her.

[CONTINUITY – LOCKED]
Rosa holds the phone at full arm's length, a little too far away and slightly low, the way older people hold a phone; her free hand does the gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Front-camera wide distortion with her arm extended, the phone bobbing gently with her gestures; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:30 — Selfie, a little wide: head and shoulders with the shady alley, the blue door and a bright strip of sun high on the wall behind her, Rosa's handheld selfie, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Rosa, a pitying look at the lens: "You call it lazy. My whole town does it at two o'clock."
0:04–0:08 — she says it like a sacred word, eyes half-closing: "Riposo. After lunch the shutters close, and the dogs, eh,"
0:08–0:13 — her free hand flops flat, demonstrating: "even the dogs lie down in the middle of the street. Forty minutes. Not three hours,"
0:13–0:20 — mock offence, eyebrows up, then she sits up, energised, one finger raised: "I'm not a cat. Forty minutes, and I have the whole afternoon again. You drink four coffees to stay awake for"
0:20–0:23 — her face scrunches in confusion, then dismissal: "a meeting about... I don't know, another meeting."
0:23–0:28 — softer, coaxing, then a slow knowing nod: "Lie down, amore. The work will still be there. It always is."
0:28–0:30 — silence, lips still: a small yawn she tries to hide, then a laugh. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 30 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R9: Things I never do at 94 (part two)

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 8063 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
Part two, now with a target: Concetta. Motive: the rivalry is the spice of her life. Goal: get the laugh on Concetta and close with the Giulia joke. Obstacle: the Salvatore memory pulls at her mid-list. Tactic: she counts on her fingers again and glances down the alley at Concetta's door. Mood and tempo: gossipy, mischievous. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE MOCK-DIVA POSE.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot, she sits on the low stool by the blue door; the alley runs away behind her at frame right (Concetta's door is two doors down, off-frame).

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing about one and a half metres down the alley. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The cardigan shifting with her gestures, slippers scuffing the stone, swallows overhead; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:30 — Medium shot, she sits on the low stool by the blue door; the alley runs away behind her at frame right (Concetta's door is two doors down, off-frame), phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Rosa, two fingers up, a bright look at the lens: "Things I never do, part two."
0:02–0:10 — a wagging finger, then a whiny imitation, mouth pulled down: "I never say at my age. Never. My neighbor Concetta says it every day, at my age, at my age, and she's ninety-one,"
0:10–0:15 — a dismissive flick toward the alley, then a softer face: "she's a baby. I never go to bed angry. Salvatore and me, we argued, eh,"
0:15–0:18 — her two fists bump together like boats: "like the boats in a storm, but at night,"
0:18–0:22 — a decisive flat-hand cut; the register is back to firm: "finished, basta. And I never sit when I can walk."
0:22–0:25 — she freezes, caught out, then laughs, then eyes up to Giulia, a mock-diva chin pose: "Except now. Now I sit, because Giulia wants a good angle."
0:25–0:28 — a sly glance down the alley: "Part three when Concetta does something stupid."
0:28–0:30 — silence, lips still: she holds the pose a second, then waves Giulia off. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 30 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R10: Swim with Rosa (episode 2, windy day)

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sea-rocks.jpg` · 8307 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: flat pale limestone rocks stepping down into choppy grey-turquoise water with small whitecaps, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Use the place only.

[EMOTIONAL INTENT]
A working lesson in sea sense on a rough day. Motive: eighty-five years taught her to respect the sea. Goal: show that clever beats brave. Obstacle: the wind snatching at her words and her hair. Tactic: she points at the waves as evidence, then turns to the lens to teach. Mood and tempo: brisk, practical, fond. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE TURN from catchphrase to warning.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: flat pale limestone rocks stepping down into choppy grey-turquoise water with small whitecaps, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. No other people. Real, untidy details that never move: her worn rubber sandals and a small faded canvas bag on the rock beside her. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. She sits on the wet rock by the ladder; behind her the choppy grey-turquoise sea and small whitecaps.

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing braced against the wind about one and a half metres away. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: the striped towel round her shoulders (flaps in the wind but stays on). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The wind tugging her wet hair and the towel, spray lifting off the rocks behind, the phone mic buffeted; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — Medium shot, phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Rosa points out at the choppy water, squinting into the wind: "Today the sea is angry. Look at it. On days like this I don't swim,"
0:05–0:09 — she pats the ladder rail beside her: "I stay by the ladder. Three steps down, I hold on,"
0:09–0:15 — her hand flat at her chest: "the water comes up to here, I say good morning and I come out. Eighty-five years, amore,"
0:15–0:19 — a tap of her temple, eyebrows up, then two fingertips tap the coral beads twice (the signature move: the only time in the whole video): "I'm not stupid. The sea doesn't care how old you are..."
0:19–0:23 — the register breaks: firm, eyes hard on the lens: "but it also doesn't care how brave you are. You go when it's calm,"
0:23–0:27 — a nod toward Giulia off-lens, then she waves at the sea, dismissive and fond: "and you go with somebody. Today? Ciao. See you tomorrow."
0:27–0:29 — silence, lips still: she pulls the towel tighter and tilts her head to Giulia: let's go. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; waves slapping the rocks, strong wind gusts buffeting the phone mic, a gull struggling in the wind. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent, and two fingertips tap the red coral beads twice only on "The sea doesn't care".
```

## R11: Day one of the Morning Reset

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 8093 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
A demonstration: day one is a window. Motive: the simplest habit of her life, and the one people skip. Goal: make it feel too easy not to try tomorrow. Obstacle: she's selling something free; the ugly-car joke. Tactic: she demonstrates, then turns to the lens like a teacher. Mood and tempo: bright, simple, inviting. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE WINDOW OPENING, light flooding her face while the old phone's exposure catches up a beat late.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. She sits at the table right beside the small window (closed at the start), a touch off-center.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the bowl of lemons on the table, framing her and the small window beside her. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: the small kitchen window beside her, closed at the start; she opens it on the scripted beat. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The window swinging open on old hinges, the auto-exposure correcting a beat late as light floods in, the curtain edge lifting; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:30 — Medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Rosa, one finger up: "Day one. You don't need anything,"
0:02–0:07 — she gestures to the window beside her: "just a window. You wake up, before the telephone, you go to the window and"
0:07–0:11 — she reaches over and pushes the window wide open; morning light floods her face: "you open it. Wide. Not a little crack like you're"
0:11–0:14 — a mocking little cringe: "afraid of the air. You stand there one minute,"
0:14–0:18 — she closes her eyes and tilts her face to the light for a beat: "light on the face. You look at what you have outside... a wall,"
0:18–0:23 — a wicked grin: "the neighbor's ugly car, I don't care. One minute. That's day one."
0:23–0:26 — she starts to tell, then zips her lips: "Day two is... no, I don't tell you."
0:26–0:28 — a small nod at the lens: "All thirty mornings are in the link."
0:28–0:30 — silence, lips still: she breathes in the air, eyes closed, a contented smile. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 30 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R12: Things I never do at 94 (part three)

- **Length:** 27 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 7805 characters

```text
Single continuous shot, 27s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 27s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
Part three, short because Giulia says so. Motive: she loves the series and hates being told it's too long. Goal: two items, then win the argument with Giulia. Obstacle: she trips over her own television metaphor. Tactic: she counts on her fingers and argues with herself mid-sentence. Mood and tempo: playful, Sunday-warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DEADPAN 'She says no'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy dress with small white dots and a black cardigan. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the moka pot's rim soft in the near foreground.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the dented moka pot standing on the table in front of her. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The polka-dot dress fabric moving with her gestures, the moka pot rocking minutely as the phone settles against it; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:27 — Medium close-up, chest-up, the moka pot's rim soft in the near foreground, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Rosa, three fingers up: "Things I never do, part three. Only two today,"
0:03–0:05 — an eye-roll toward Giulia off-lens: "Giulia says my videos are too long."
0:05–0:12 — a stern face: "I never eat in front of the television. The food is not a film, you don't watch it..."
0:12–0:17 — she stops herself, confused, then delighted by the correction, then she points down at an imaginary plate: "no, wait, you do watch it, you look at your plate, that's the whole point."
0:17–0:21 — a warm softening: "And I never miss Sunday lunch. Even when the family makes me crazy."
0:21–0:25 — a knowing look, then she turns to Giulia off-lens, hopeful, then back to the lens, deadpan betrayal: "Especially then. That's two. Giulia, it's short enough? She says no."
0:25–0:27 — silence, lips still: she throws up her hands. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 27s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 27 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R13: Swim with Rosa (episode 3, October)

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sea-rocks.jpg` · 7891 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. Use the place only.

[EMOTIONAL INTENT]
October: the sea is hers again. Motive: she has watched eighty-five summers of tourists come and go. Goal: make the viewer go outside this week. Obstacle: Giulia filming her feet. Tactic: she shares the secret of October water like insider knowledge. Mood and tempo: content, autumn-soft, cheeky. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE SAD TREE.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats. No other people. Real, untidy details that never move: her worn rubber sandals and a small faded canvas bag on the rock beside her. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot, she sits on the rock by the ladder, the calm empty bay behind her.

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing on the rock about one and a half metres away. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: the striped towel round her shoulders. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Water dripping from her hair, the towel pulled tight, gooseflesh on her forearms; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:30 — Medium shot, she sits on the rock by the ladder, the calm empty bay behind her, phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:08 — Rosa, a satisfied look at the empty bay, then one arm opens toward the sea: "October. The tourists go home, and the sea is mine again. The water is still warm from the summer, warmer than the air,"
0:08–0:14 — a theatrical shiver inside the towel, then a firm nod: "so the hard part is coming out. Not going in. Coming out. Everybody thinks it's the opposite."
0:14–0:19 — a proud smile: "Eighty-five Octobers I do this, and nobody is taking photos of their feet anymore."
0:19–0:21 — her eyes snap up to Giulia, a swat of the hand: "Except Giulia. Giulia, basta. Listen, wherever you are,"
0:21–0:28 — she leans toward the lens, serious, then a droopy-tree mime with her hand, then a laugh: "go outside this week. Find your sea... even if your sea is a park with one sad tree."
0:28–0:30 — silence, lips still: she pulls the towel snug and looks out to sea. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 30 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R14: What I tell Giulia every morning

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen.jpg` · 8408 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. Use the place only.

[EMOTIONAL INTENT]
Repeating her morning sermon, aware Giulia never listens. Motive: she wants Giulia to have what she had. Goal: for once, make it stick. Obstacle: Giulia's eye-roll off camera, and her own exasperation. Tactic: she lectures Giulia directly, then wins with the last line. Mood and tempo: fond exasperation, then victory. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE PROUD CHIN on 'Old-fashioned and ninety-four'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot. The light state never changes: not a time-lapse, no sun movement, no clouds racing. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, sits out of frame just to the right of the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. Her eyeline goes to Giulia beside the lens, never into it.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the bowl of lemons at a 45-degree angle; Giulia sits at the table out of frame, just to the right of the phone. Rosa is not holding it; both of her hands are free for her gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Interview set-up: Rosa answers Giulia, her great-granddaughter, sitting out of frame just to the right of the phone; her eyeline stays on Giulia, just off-lens to the right, and she NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. No prop appears, disappears or changes.

[PHYSICS]
Linen sleeves sliding, the tablecloth wrinkling under her tapping finger; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:09 — Rosa, a glance at Giulia, fond exasperation: "Every morning I tell her the same thing, and every morning she doesn't listen. Giulia, your day is not decided at nine o'clock in the office."
0:09–0:11 — she taps the table with one finger, emphatic: "It's decided at seven, in your pajamas."
0:11–0:16 — one hand weighs each option like a scale: "The telephone or the window. Bread sitting down, or a biscuit over the sink"
0:16–0:18 — a hunched guilty mime: "like a thief. She says, Nonna,"
0:18–0:23 — a whiny teenage imitation, then chin up, proud: the register breaks: "that's so old-fashioned. Yes, amore. Old-fashioned and ninety-four. I put all my mornings"
0:23–0:27 — she shapes a small book with her hands, then a triumphant point at Giulia: "in a little book, it's in the link. Giulia... you're buying one."
0:27–0:29 — silence, lips still: she sits back, arms folded, victorious. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell. Her lips move only when she speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; Rosa looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

## R15: Concetta tried my thirty mornings

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-doorstep.jpg` · 7847 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Rosa's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the woman. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (her outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same woman, Rosa, at a natural angle: it confirms her face. Use only her face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. Use the place only.

[EMOTIONAL INTENT]
Spilling the gossip about her rival. Motive: Concetta copying her is the best compliment and the worst insult. Goal: the viewer laughs and wants what Concetta got. Obstacle: she has to stay outraged and proud at the same time. Tactic: she whispers like it's a secret, glancing at Concetta's door. Mood and tempo: gossipy, outraged, delighted. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE STATUE mime.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 94-year-old woman, filmed by her great-granddaughter on Rosa's old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as her face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers. She is relit by this scene, never by the studio light of @Image 1: she is never brighter than her surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Giulia, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Rosa (@Image 1): a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face. Identity marks, always visible and unchanged: a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of her right wrist; exactly one necklace, a single strand of red coral beads. She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble. Her face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers. This replaces her usual white linen shirt and navy trousers: she is NOT wearing them in this video.
PERSONA: warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke.
VOICE: English only. An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of words, then sudden pauses.
Off-screen: Giulia (20), her great-granddaughter, holds the phone. Giulia is never seen and never heard.

[LOCATION]
The place from @Image 3: a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead. No other people. Real, untidy details that never move: a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot, she sits on the low stool, the alley running away at frame right toward Concetta's door (off-frame).

[CONTINUITY – LOCKED]
This is NOT a selfie: Rosa is not holding the phone, no arm reaches toward the lens, and both of her hands are free for her gestures. Giulia holds the phone at chest height, standing about one and a half metres down the alley. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The cardigan shifting, the stool creaking, evening swallows; true body weight where she sits; fabric moves with her movement.

SHOT 1 — 0:00–0:29 — Medium shot, she sits on the low stool, the alley running away at frame right toward Concetta's door (off-frame), phone handheld by Giulia, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Rosa, a nod down the alley, voice lowered: "Concetta, two doors down, ninety-one, she tried my thirty mornings."
0:03–0:11 — a finger to her lips: "Secretly. She thinks I don't know. Day three, I see her at the window at seven o'clock with a glass of water,"
0:11–0:19 — she freezes, rigid, miming a glass held at a window, then two fingers walk along her knee: "like a statue. Day ten, she walks to the bakery herself instead of sending her grandson. Now she tells the whole street about"
0:19–0:21 — outrage, both hands up: "her new mornings. Her new mornings!"
0:21–0:23 — a scandalised gasp: "She says it was her idea."
0:23–0:27 — eyes to the sky, then a wicked grin into the lens: "Madonna. Fine. It's in my link... tell her Rosa sent you."
0:27–0:29 — silence, lips still: she glances toward Concetta's door and waves sweetly. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Rosa's voice close and clear, English only, exactly the quoted words and nothing added; swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly. Her lips move only when she speaks and stay still in every silence. No other voices.

AVOID: a moustache, upper-lip hair or any facial hair; a masculine face; a finger, hand or blurred object in front of the lens; a selfie arm or Rosa holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Rosa. Her face matches @Image 1 and @Image 2 exactly for all 29 seconds, a woman with a smooth upper lip, relit by the scene's own light. She speaks only the quoted English words in her warm Sicilian accent.
```

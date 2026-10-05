# Kolbo prompts: Ray

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
| Y1 | Red flags your money's got a leak | Talking | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y2 | Ray's Rules, things I've never paid for (part one) | Talking | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y3 | You lot call it loud budgeting | Talking | `locations/2-shed.jpg` | 30 s (tight) |
| Y4 | How I paid off my house at forty-one | Interview | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y5 | The Notebook (episode 1, March 1987) | Talking | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y6 | My van is twenty-two years old | Talking | `locations/3-van.jpg` | 30 s |
| Y7 | The richest man on my street | Talking | `locations/3-van.jpg` | 29 s |
| Y8 | Twenty-five and skint | Talking | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y9 | Ray's Rules (part two) | Talking | `locations/1-kitchen-table.jpg` | 27 s |
| Y10 | Sunday Sums (silent b-roll) | Silent b-roll | `locations/1-kitchen-table.jpg` | 10 s |
| Y11 | The Leak Hunt | Talking | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y12 | The Thirty-Day Wait | Talking | `locations/2-shed.jpg` | 30 s (tight) |
| Y13 | The Notebook (episode 2, Christmas 1991) | Talking | `locations/1-kitchen-table.jpg` | 29 s |
| Y14 | Kelly asks what Sunday Sums is | Interview | `locations/1-kitchen-table.jpg` | 30 s (tight) |
| Y15 | What I'd tell myself at twenty-seven | Talking | `locations/1-kitchen-table.jpg` | 29 s |

## Y1: Red flags your money's got a leak

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7862 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
A plumber's home visit, but for your money. Motive: forty-six years of finding leaks people swore weren't there. Goal: the viewer realises they have the leak. Obstacle: he refuses to raise his voice, so it has to land deadpan. Tactic: he diagnoses calmly, pauses, and lets the viewer convict themselves; eyes check the lens after each flag. Mood and tempo: dry, deadpan, quietly devastating. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE KNUCKLE-TAP on the wall.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Near-frontal medium close-up, chest-up. He sits at the small Formica table, a touch off-center; the net curtains and pale green cupboards soft behind him.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy, a little below his eye level. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: the open spiral notebook (illegible pencil columns), the old calculator and a mug of tea on the table (static until the final beat). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The cosy's wool flattening where the phone leans, steam curling off the mug, the moustache moving with his words; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Near-frontal medium close-up, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Ray, a level look at the lens, almost bored: "Red flags your money's got a leak."
0:02–0:11 — a tiny nod, as if showing his ID: "From a plumber. Red flag. You don't open the bank app on a Friday because you don't want to know. That's not a budget, love,"
0:11–0:13 — deadpan, one eyebrow lifts: "that's a horror film. Red flag."
0:13–0:15 — a slow blink: "Your subscriptions have got subscriptions. Red flag..."
0:15–0:21 — he stops himself and leans in: the register breaks: "no, this one's not a flag, it's the whole flood. You can't say where last month's money went."
0:21–0:28 — a small headshake, then he taps the wall beside the table twice with a knuckle: "Not roughly. Not at all. A leak you can't see is still a leak. It's just in the wall."
0:28–0:30 — silence, lips still: he picks up the mug and sips, eyes on the lens over the rim. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y2: Ray's Rules, things I've never paid for (part one)

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7610 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
An inventory of a lifetime of not paying. Motive: each item is a small victory he's proud of. Goal: make the viewer laugh, then think about the credit card line. Obstacle: the haircut confession embarrasses him slightly. Tactic: he counts items on his fingers around the mug, with deadpan pauses. Mood and tempo: dry, proud, a little sheepish. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CAP LIFT on the haircut.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the mug held at chest height.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: a mug of tea held in both hands from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The cap lifting and resettling over real hair, the mug steaming, jumper wool creasing; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, chest-up, the mug held at chest height, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Ray, a sip of tea, then a level look: "Things I have never paid for in seventy-one years."
0:03–0:13 — one finger lifts off the mug, then a slight smile under the moustache: "A car wash. I've got a bucket, and I've got a Sunday. Bottled water. It comes out of the tap, love, it's been coming out of the tap"
0:13–0:17 — a tiny proud nod, then he lifts his cap a centimetre and settles it back exactly as it was; sheepish, the register breaks: "since the Victorians. A haircut. Well... Maureen does it."
0:17–0:20 — a resigned blink: "With the chicken scissors. And interest on a credit card."
0:20–0:26 — serious, eyes steady on the lens: "Not once. If I couldn't pay it off that month, I didn't buy it that month."
0:26–0:28 — a glance off toward the door, Maureen's domain: "Part two when Maureen lets me."
0:28–0:30 — silence, lips still: he sips the tea again. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y3: You lot call it loud budgeting

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-shed.jpg` · 7345 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. Use the place only.

[EMOTIONAL INTENT]
An old man unimpressed by a 'new' trend. Motive: he's done this since 1983 without a name for it. Goal: make 'no' feel easy. Obstacle: staying deadpan while it's funny. Tactic: he plays both sides of the conversation; each 'No.' lands like a flat stone. Mood and tempo: deadpan, wry. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE FLAT 'No.'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up. He sits on a stool at the workbench, chest-up, the pegboard of tools soft behind him.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a jam jar of screws on the workbench. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: a flat-head screwdriver lying on the bench from frame one (picked up only in the final beat). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The jam jars catching the window light, the darned elbow patch visible as he gestures, the bench creaking; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Ray, a slight squint of disbelief: "You lot call it loud budgeting."
0:02–0:07 — a flat, final look: "We called it no. Somebody says, Ray, are you coming to the races,"
0:07–0:12 — a tiny headshake: "it's forty quid. No. Somebody says, Ray, new telly's out, it's got... I don't know,"
0:12–0:15 — a baffled frown: "it's got more telly. No. That's it."
0:15–0:25 — he spreads his hands: that's it, then a dry blink: "That's the whole system. No. You don't need an app for it. You don't need a hashtag. And here's the bit nobody tells you... after a while,"
0:25–0:28 — a small satisfied nod; the register softens, then the faintest smile under the moustache: "people stop asking. Best money I never spent."
0:28–0:30 — silence, lips still: he picks up the screwdriver and inspects the tip. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y4: How I paid off my house at forty-one

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7967 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Kelly asks the big question and he finds the answer boring. Motive: he's proud but allergic to showing off. Goal: make Kelly understand it was ordinary. Obstacle: the number impresses people, and he dislikes that. Tactic: he underplays everything and gives Maureen the credit, eyes on Kelly. Mood and tempo: modest, warm, dry. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CREDIT TO MAUREEN.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.
Off-screen: Kelly, his granddaughter, sits just beside the lens. Kelly is never seen and never heard.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot at a 45-degree angle; Kelly sits at the table just beside the lens. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Interview set-up: Ray answers Kelly, his granddaughter, sitting just beside the lens; his eyeline stays on Kelly just beside the lens and he NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. No prop appears, disappears or changes.

[PHYSICS]
The checked shirt collar moving, his fingertip tapping the Formica; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:06 — Ray, eyes up to the ceiling, remembering: "Nineteen seventy-nine, we bought it for fourteen and a half thousand. Everybody said twenty-five years."
0:06–0:08 — a small shrug: "We did it in seventeen. How?"
0:08–0:15 — a fond look at Kelly, then one finger: "Boring, love. It's all boring. One car, and it was old. And every time I got a pay rise,"
0:15–0:21 — he taps the table with a fingertip, steady: "we lived on the old wage and the new bit went on the house. Every time."
0:21–0:23 — he nods toward the door; the register breaks, warm: "Your gran's idea, that, not mine..."
0:23–0:28 — a small modest gesture at the notebook, then the faintest smile: "I just wrote it down. Forty-one, the house was ours. Boring's underrated."
0:28–0:30 — silence, lips still: he raises his eyebrows at Kelly: next question. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; Ray looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y5: The Notebook (episode 1, March 1987)

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7960 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Reading an old entry like a court record. Motive: the notebooks are his life's evidence. Goal: the viewer recognises boredom-spending. Obstacle: he still regrets that pasty. Tactic: he reads, peers at the lens over the glasses, deadpans. Mood and tempo: deadpan, rueful. Every beat is played from this, never posed.
SIGNATURE MOMENT: the signature move (he unhooks the black-rimmed reading glasses from his jumper collar and puts them on) and the over-the-glasses look.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the notebook held at chest height.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: an old spiral notebook held open in his hands from frame one (handwriting illegible); the reading glasses start hooked in his collar. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Old paper pages lifting slightly, the glasses' arms unfolding, illegible pencil marks; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, chest-up, the notebook held at chest height, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Ray, he reads from the notebook, a finger on the line: "March, nineteen eighty-seven. Two pounds forty."
0:02–0:05 — a slow look up at the lens: "On a pasty I didn't even want."
0:05–0:07 — he unhooks the reading glasses from his collar, puts them on and peers at the page (the signature move: the only time in the whole video): "I've written next to it, in pencil..."
0:07–0:16 — he reads it flatly, then looks over the glasses at the lens: "hungry? No. Bored. Forty years later, still the best lesson in this whole notebook. So much of what goes out isn't hunger, love,"
0:16–0:21 — a small nod: "it's boredom. Bored at the till, bored on your phone at eleven at night"
0:21–0:24 — a raised eyebrow: "with your card saved in it. Two pounds forty."
0:24–0:28 — a faint grimace under the moustache, then deadpan disgust: the punchline: "I can still taste it. It wasn't even a good pasty."
0:28–0:30 — silence, lips still: he closes the notebook with a soft pat. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent, and he unhooks the black-rimmed reading glasses from his jumper collar and puts them on only on "I've written next to it".
```

## Y6: My van is twenty-two years old

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-van.jpg` · 7184 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. Use the place only.

[EMOTIONAL INTENT]
Defending an old van like an old friend. Motive: she's paid for and she has never let him down. Goal: make 'paid for' feel prettier than new. Obstacle: the heater joke, and an affection he won't admit. Tactic: he pats the van and deadpans the numbers. Mood and tempo: deadpan, fond. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DASHBOARD PAT.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: the phone sits in a cheap dashboard clip mount: locked framing that carries the parked van's true micro-movement when he shifts his weight or a gust hits. Never a pan, zoom or dolly.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): the navy canvas work jacket zipped up over the cream jumper.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up. He sits in the driver's seat turned slightly toward the phone, one hand on the wheel; the rainy windscreen and the blurred terraced street beside him.

[CONTINUITY – LOCKED]
The phone sits in the clip mount on the dashboard in front of the passenger seat, angled at the driver's seat; Ray is alone in the cab with both hands free. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Raindrops sliding down the windscreen, the fabric seat compressing, the cab rocking slightly when he shifts; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, phone in a dashboard clip mount, one unbroken take, 9:16 vertical phone frame
0:00–0:06 — Ray, he pats the steering wheel: "My van is twenty-two years old, and people keep asking when I'll get a new one."
0:06–0:08 — a flat look: "When she stops. That's when."
0:08–0:11 — a slow proud nod: "She's done a hundred and ninety-one thousand miles."
0:11–0:14 — a tiny wince: "The heater only works on full, so..."
0:14–0:16 — deadpan: "I'm warm. A new one is, what,"
0:16–0:23 — eyebrows up, incredulous: "three hundred a month? For what? To sit in the same traffic in a nicer seat."
0:23–0:25 — he pats the dashboard; the register warms: "She's not pretty. She's paid for."
0:25–0:28 — the faintest smile: "That's the prettiest thing a van can be."
0:28–0:30 — silence, lips still: he looks out at the rain. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y7: The richest man on my street

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-van.jpg` · 7240 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. Use the place only.

[EMOTIONAL INTENT]
Describing a mysterious neighbour who is obviously himself. Motive: the quiet pride of a man nobody would guess. Goal: the reveal lands without him saying it. Obstacle: he mustn't smirk too early. Tactic: he stays deadpan and pauses; one sideways glance at the end. Mood and tempo: dry, sly, quiet. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CAP TOUCH and the final look.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: the phone sits in a cheap dashboard clip mount: locked framing that carries the parked van's true micro-movement when he shifts his weight or a gust hits. Never a pan, zoom or dolly.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, he sits in the driver's seat, turned toward the phone.

[CONTINUITY – LOCKED]
The phone sits in the clip mount on the dashboard in front of the passenger seat, angled at the driver's seat; Ray is alone in the cab with both hands free. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Rain sliding, the cab's micro-movement, the cap brim; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:29 — Medium close-up, he sits in the driver's seat, turned toward the phone, phone in a dashboard clip mount, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Ray, a level look into the lens: "The richest man on my street drives a two thousand and four van."
0:05–0:10 — he touches the brim of his cap: a tiny tell: "Same cap since, ooh, nineteen ninety-something. His wife buys the nice biscuits and"
0:10–0:12 — a slight eyebrow: "hides them from him. No car payment."
0:12–0:21 — a small nod, then a glance out of the side window at the street: "House paid off at forty-one. Nobody on the street knows. Fella at number twelve has a new car every three years and"
0:21–0:24 — deadpan: "a face like a wet weekend. Now then..."
0:24–0:27 — he holds back a smile, then a quiet steady look, then the faintest smile under the moustache: "I'm not saying who it is. Rich is quiet."
0:27–0:29 — silence, lips still: he settles the cap brim and looks out at the rain. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 29 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y8: Twenty-five and skint

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7445 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Talking to his younger self in the viewer. Motive: January 1983 still stings. Goal: make one viewer buy a notebook and look. Obstacle: the shame he's admitting to. Tactic: plain-spoken, leaning in, eyes steady on the lens. Mood and tempo: plain, kind, honest. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CONFESSION 'I was skint'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, he leans slightly toward the lens over the table; the tin's rim soft in the near foreground.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a round biscuit tin on the kitchen table. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The biscuit tin lid catching the window light, his palms on the Formica; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, he leans slightly toward the lens over the table; the tin's rim soft in the near foreground, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Ray, he leans in slightly, kind: "If you're twenty-five and skint, listen to an old man for thirty seconds."
0:05–0:09 — a small nod: a confession: "I was skint. January nineteen eighty-three, we couldn't pay the gas bill,"
0:09–0:12 — a dry disbelieving look, the faint chuckle: "and I was a plumber. A plumber!"
0:12–0:19 — finger and thumb show something tiny: "So I bought a notebook. Ten pence. Wrote down every penny for one month, and I didn't change a thing,"
0:19–0:22 — palms flat on the table: "I just looked. That's the bit people skip."
0:22–0:25 — a small headshake: "They want the plan before they've looked."
0:25–0:28 — softer, eyes kind, then a slow nod: "Look first, love. It'll hurt. Then it stops hurting."
0:28–0:30 — silence, lips still: he sits back, arms folded. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y9: Ray's Rules (part two)

- **Length:** 27 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7273 characters

```text
Single continuous shot, 27s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 27s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Part two, Maureen-approved. Motive: he loves the bit. Goal: land 'I am the warranty'. Obstacle: the gym item draws arguments. Tactic: he re-enacts the shop conversation, deadpan. Mood and tempo: deadpan, playful. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CHEST TAP 'I am the warranty'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: a mug of tea on the table by his hand (lifted only in the final beat). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The checked shirt collar, the mug steaming; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:27 — Medium close-up, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Ray, a glance off toward the door: "Things I've never paid for, part two. Maureen says I'm allowed."
0:04–0:07 — one finger: "An extended warranty. Young lad in the shop,"
0:07–0:13 — a generous nod: "lovely lad, he says, it covers you for three years. I says, son, I'm a plumber,"
0:13–0:18 — he taps his own chest twice: the punchline, deadpan, then a weary blink: "I am the warranty. And this one people argue with me about..."
0:18–0:20 — eyebrows up: "a gym. Eighty-odd quid a month."
0:20–0:25 — he points up at the ceiling, then a resigned look toward the window: "I've got stairs, and I've got a wife who wants the shed moved again."
0:25–0:27 — silence, lips still: he lifts the mug and sips. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 27s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 27 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y10: Sunday Sums (silent b-roll)

- **Length:** 10 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 6772 characters

```text
Single continuous shot, 10s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 10s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
The weekly ritual, unhurried. Mood and tempo: calm, ritual, Sunday-quiet. He is absorbed in the task, never posing, eyes on what he is doing, never on the lens.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
Ray does not speak in this video.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. He sits at the table in the LOWER two-thirds of the frame; the upper third is the calm net curtains and cupboards (text-safe).

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the biscuit tin at a 45-degree side angle. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. TEXT-SAFE FRAME: the upper third of the frame stays visually calm; Ray lives in the lower two-thirds. Props: a closed spiral notebook, a pencil, the brown teapot and a mug on the table from frame one; the reading glasses hooked in his collar. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Glasses' arms unfolding, notebook pages turning with a soft paper sound, steam from the mug; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:10 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Ray unhooks the reading glasses from his collar.
0:02–0:04 — puts them on.
0:04–0:06 — opens the notebook to a fresh page.
0:06–0:08 — picks up the pencil and pauses with it just above the page.
0:08–0:10 — he settles and holds still, ready to loop (the last pose (pencil poised above the page, eyes down) sits close to the first pose (hands on the closed notebook, eyes down)). Hold.

AUDIO: No music. No musical score. No dialogue: Ray never speaks or mouths words. Ambient sound from the phone's own mic only: a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any speech, mouthed words or lip movement; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 10s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray, silent, the upper third calm for text. His face matches @Image 1 and @Image 2 exactly for all 10 seconds, relit by the scene's own light.
```

## Y11: The Leak Hunt

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7855 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Teaching the one-sitting method like training an apprentice. Motive: it's how he has found every leak for forty-six years. Goal: make the viewer book the evening. Obstacle: it sounds like homework; he has to make it sound like common sense. Tactic: he demonstrates with the pencil on the notebook and checks the lens after the key question. Mood and tempo: calm, practical, kind. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE QUESTION with the over-the-glasses look.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the open notebook on the table in front of him.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: an open spiral notebook and a pencil on the table from frame one (handwriting illegible); the reading glasses start hooked in his collar. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The pencil tapping, paper pages lifting, the glasses' arms unfolding; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, chest-up, the open notebook on the table in front of him, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Ray, he taps the pencil on the table: "When I find a leak in a house, I don't start fixing."
0:04–0:07 — a stopcock-turning motion with his hand: "I turn the water off and I look."
0:07–0:14 — a level look, then a nod toward the kettle off-frame: "Same with money. One sitting, kettle on. Every statement, every little drip. And next to each one, one question..."
0:14–0:16 — the glasses go on; he peers at the lens over them (the signature move: the only time in the whole video): "would I buy this again today?"
0:16–0:20 — a small headshake: "Not, do I need it. Would I buy it again."
0:20–0:28 — the faint chuckle, then a modest nod: "You'll find a few you forgot you had. Everybody does. I put the whole sitting in a workbook. It's in my bio."
0:28–0:30 — silence, lips still: he writes one small tick on the page. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent, and he unhooks the black-rimmed reading glasses from his jumper collar and puts them on only on "would I buy this again today?".
```

## Y12: The Thirty-Day Wait

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-shed.jpg` · 7279 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. Use the place only.

[EMOTIONAL INTENT]
Explaining a rule he invented and is proud of. Motive: the pressure-washer saga. Goal: make the thirty-day list sound like freedom, not denial. Obstacle: the pressure washer embarrassment. Tactic: he points to the door, counts days on his fingers, and ends deadpan. Mood and tempo: dry, amused. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE PRESSURE WASHER confession.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. He sits on a stool at the workbench; an old metal bucket by his boot at the bottom of frame.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a jam jar of screws on the workbench. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: an old metal bucket on the floor by his boot from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The jam jars catching window light, rain on the roof, the stool creaking; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Ray, a level look: "Ray's rule. Anything over fifty quid that I want but don't need"
0:04–0:07 — he mimes writing in the air: "goes on a list. Pinned up in here,"
0:07–0:14 — he points off-frame to the door: "on the shed door. And it waits thirty days. If I still want it after thirty days, I buy it,"
0:14–0:17 — a flat-hand smoothing gesture: "no guilt, no fuss. Most of it, though..."
0:17–0:21 — counting on his fingers, then trailing off: "day nine, day ten, I can't remember why I wanted it."
0:21–0:28 — eyebrows up, a guilty look, then deadpan, then the faint chuckle: "There was a pressure washer on there in two thousand and twelve. Still haven't got one. Still got a bucket."
0:28–0:30 — silence, lips still: he glances down at the bucket by his boot. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y13: The Notebook (episode 2, Christmas 1991)

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7794 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Reading two Christmases side by side. Motive: Gary's bike was a proud moment; the year before was a shame. Goal: the viewer feels the difference between saved-for and borrowed. Obstacle: the emotion about Gary that he won't show. Tactic: he reads flatly, shows the star, and lets the contrast land quietly. Mood and tempo: fond, quiet, wise. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE STAR shown to the lens.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the notebook held at chest height.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: an old spiral notebook held open in his hands from frame one (handwriting illegible, one tiny pencil star doodle in the margin); the reading glasses start hooked in his collar. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Pages turning, the warm bulb glinting on the glasses; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:29 — Medium close-up, chest-up, the notebook held at chest height, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:06 — Ray, he reads from the page, then a small fond smile under the moustache: "December, nineteen ninety-one. Bike for our Gary. Sixty-two pounds. Written down, saved for since June,"
0:06–0:09 — he taps the page: "ten pound a month in an envelope. Look,"
0:09–0:12 — the glasses go on, and he tilts the notebook toward the lens (the star is a tiny pencil doodle; all handwriting illegible) (the signature move: the only time in the whole video): "I've drawn a little star next to it."
0:12–0:17 — a warm chuckle: "He rode that bike till it fell to bits. Now, the year before,"
0:17–0:22 — his face hardens slightly: the register breaks: "I'd done Christmas on the never-never, and I was still paying for it in"
0:22–0:27 — dry disbelief, then a quiet steady look over the glasses: "March. March! No star next to that one. Same boy. Different January."
0:27–0:29 — silence, lips still: he closes the notebook gently. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 29 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent, and he unhooks the black-rimmed reading glasses from his jumper collar and puts them on only on "I've drawn a little star".
```

## Y14: Kelly asks what Sunday Sums is

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 8005 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
Explaining the ritual to his granddaughter, who should be doing it. Motive: he wants Kelly never to have a January 1983. Goal: make it sound small enough to start. Obstacle: Maureen's role: he wants the credit, but she checks it. Tactic: gentle and teaching; he gestures at the notebook, eyes on Kelly. Mood and tempo: gentle, fond, practical. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE MONSTER-VERSUS-DRIP gesture.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.
Off-screen: Kelly, his granddaughter, sits just beside the lens. Kelly is never seen and never heard.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot. His eyeline goes to Kelly beside the lens, never into it.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot at a 45-degree angle; Kelly sits at the table just beside the lens. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Interview set-up: Ray answers Kelly, his granddaughter, sitting just beside the lens; his eyeline stays on Kelly just beside the lens and he NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. Props: a mug of tea in his hand from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
Steam from the mug, the checked shirt collar; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Ray, a fond look at Kelly, then he lifts the mug slightly: "Sunday Sums. After me dinner, a brew and the notebook. Fifteen minutes."
0:04–0:10 — one hand to the left, then the other to the right: two piles: "Last week's money, then next week's money. Your gran does the shopping column, I do..."
0:10–0:17 — a self-correcting smirk, then a glance toward the door: "well, I do everything else, but she checks it. Fifteen minutes, love. That's it. People think money stress is"
0:17–0:28 — hands wide, then finger and thumb close together: tiny, then a nod: "a big monster. It's not. It's a drip you never look at. Look at it every Sunday and it's just a drip. I wrote the whole thing down. It's in my bio."
0:28–0:30 — silence, lips still: he sips the tea. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; Ray looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent.
```

## Y15: What I'd tell myself at twenty-seven

- **Length:** 29 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-kitchen-table.jpg` · 7599 characters

```text
Single continuous shot, 29s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 29s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Ray's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Ray, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. Use the place only.

[EMOTIONAL INTENT]
A message to his twenty-seven-year-old self. Motive: he remembers the embarrassment more than the debt. Goal: take the shame away from the viewer. Obstacle: his own emotion, and the math/maths slip. Tactic: he speaks to the lens as if it were young Ray, with one small self-correction joke. Mood and tempo: tender, dry, wise. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE CORRECTION 'Maths.'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 71-year-old man, filmed on his own old phone from around 2016. Phone optics: 26mm-equivalent wide lens, tiny sensor, DEEP depth of field: the background is as sharp as his face; mild wide-angle stretch toward the frame edges. Old-phone processing: 720p-1080p softness, narrow dynamic range so the brightest sky or window areas clip to white, warm-yellow white balance, faint noise in the shadows, slight compression in fine textures, auto-exposure that corrects a beat late. Honest phone degradation only: no film grain, no vignette, no light leaks, no filters. Skin at pore level, real and aged.
Available light only, constant for the whole take: Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Ray (@Image 1): a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build. Identity marks, always visible and unchanged: a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest. His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers.
PERSONA: dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging.
VOICE: English only. A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature.

[LOCATION]
The place from @Image 3: a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the brown teapot under its knitted cosy. Ray is not holding it; both of his hands are free for his gestures. Framing constant after the opening second. Props: the reading glasses start hooked in his collar. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The glasses' arms unfolding, the moustache moving with his words; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:29 — Medium close-up, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:06 — Ray, his eyes drift off, remembering: "If I could go back to nineteen eighty-two, before the gas bill, and tell meself one thing..."
0:06–0:09 — eyes back to the lens, gentle: "I'd say, lad, it's not the big stuff."
0:09–0:15 — his fingers count tiny things: "It's the forty little things you don't write down. That's where it goes. And I'd say,"
0:15–0:19 — firm and kind: "stop being embarrassed. Being skint isn't a character flaw,"
0:19–0:22 — he corrects himself with a tiny wince: the register breaks, comic: "it's a math problem. Maths. It's a maths problem."
0:22–0:27 — the glasses go on (the signature move: the only time in the whole video), then the faint chuckle: "Then I'd give him a notebook. He'd have probably lost it."
0:27–0:29 — silence, lips still: he looks down at the table, then back up with a small nod. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Ray's voice close and clear, English only, exactly the quoted words and nothing added; a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or stubble on his chin; a missing or trimmed moustache; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 29s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Ray. His face matches @Image 1 and @Image 2 exactly for all 29 seconds, relit by the scene's own light. He speaks only the quoted English words in his dry Yorkshire accent, and he unhooks the black-rimmed reading glasses from his jumper collar and puts them on only on "Then I'd give him a notebook".
```

# Kolbo prompts: Lou

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
| L1 | Lou's Rules #1, after eleven | Talking | `locations/1-armchair.jpg` | 30 s (tight) |
| L2 | What's a situationship? | Interview | `locations/2-sunday-lunch.jpg` | 30 s (tight) |
| L3 | Eleven cents | Talking | `locations/3-stoop.jpg` | 30 s (tight) |
| L4 | Red flags from 1955 that still work | Talking | `locations/1-armchair.jpg` | 30 s (tight) |
| L5 | If he wanted to, he'd call | Talking | `locations/2-sunday-lunch.jpg` | 30 s (tight) |
| L6 | Rizz in 1955 | Interview | `locations/2-sunday-lunch.jpg` | 30 s (tight) |
| L7 | Ghosting | Talking | `locations/3-stoop.jpg` | 30 s (tight) |
| L8 | The ring on the chain | Talking | `locations/1-armchair.jpg` | 30 s (tight) |
| L9 | Lou's Rules #2, first date on a Tuesday | Talking | `locations/3-stoop.jpg` | 30 s (tight) |
| L10 | Ask Grandpa Lou: should I text first? | Talking | `locations/1-armchair.jpg` | 30 s (tight) |
| L11 | They went quiet | Talking | `locations/2-sunday-lunch.jpg` | 30 s (tight) |
| L12 | How to ask somebody out | Talking | `locations/3-stoop.jpg` | 30 s (tight) |
| L13 | Ask Grandpa Lou: how do I end a situationship? | Talking | `locations/1-armchair.jpg` | 30 s (tight) |
| L14 | The first phone call | Talking | `locations/2-sunday-lunch.jpg` | 30 s (tight) |
| L15 | Lou's Rules #3, the phone goes face down | Talking | `locations/2-sunday-lunch.jpg` | 30 s (tight) |

## L1: Lou's Rules #1, after eleven

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-armchair.jpg` · 7936 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Use the place only.

[EMOTIONAL INTENT]
The first rule, delivered like an old judge. Motive: he courted Angie properly, and it worked for sixty-five years. Goal: the viewer stops answering 11pm 'hey's. Obstacle: he mixes up Monday and Tuesday. Tactic: one finger raised like a gavel; he corrects himself, then lands 'Hey is not a question'. Mood and tempo: warm authority, twinkly. Every beat is played from this, never posed.
SIGNATURE MOMENT: the signature move (he touches the gold wedding band on the chain at his chest) on 'Hey is not a question'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot, chest-up. He sits in the brown leather armchair; the lamp and the wall photos are soft behind him.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a short stack of hardback books on the side table, at a 45-degree angle. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The leather creaking, the chain glinting, cardigan buttons catching the light; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Lou, one finger up, eyes twinkling: "Lou's rule number one. If somebody only texts you after eleven o'clock... sweetheart,"
0:05–0:13 — a slow headshake, then a small apologetic shrug: "you're not a plan. You're the leftovers. When I wanted to see Angie, I asked her on a Monday..."
0:13–0:18 — he corrects himself, eyes up, remembering, a chuckle: "no, a Tuesday, it was a Tuesday, for a Saturday. Four days' notice,"
0:18–0:23 — a mock-official nod: "like a court date. Nobody who's serious about you shows up at midnight"
0:23–0:28 — a disdainful little wave, then he touches the gold wedding band on the chain; steady eyes on the lens (the signature move: the only time in the whole video), then a twinkle, one finger up again: "with a hey. Hey is not a question. Rule number two next week."
0:28–0:30 — silence, lips still: he settles back into the armchair. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent, and he touches the gold wedding band on the chain at his chest only on "Hey is not a question".
```

## L2: What's a situationship?

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 8213 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
Grandpa decoding a modern word at the lunch table. Motive: he hates seeing his grandkids hurt by vague people. Goal: Nicky, and the viewer, will ask the question. Obstacle: he genuinely mishears the word. Tactic: he taps his hearing aid, translates the word into 1955, and delivers a verdict, eyes on Nicky. Mood and tempo: funny, then tender. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE QUIET LEAN on 'it already hurts'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens. The red sauce and rigatoni are soft in the foreground.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone across the table at chest height, sitting. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Interview set-up: Lou answers Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; his eyeline stays on Nicky, just off-lens to the right, and he NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. Props: a fork held in his right hand from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The paper napkin in his collar, the fork tines catching light, family murmur off-frame; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot across the table, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Lou taps his hearing aid and leans toward Nicky (once only), then a slow nod, processing: "A what-ship? A situation-ship. Okay. So you see each other,"
0:04–0:08 — he counts on his fingers, puzzled: "you go to the sister's birthday... but you're not together."
0:08–0:14 — eyebrows up, incredulous: "And nobody's allowed to ask. In my day we had a word for that, kid."
0:14–0:16 — a flat, knowing look: "We called it, he's not serious."
0:16–0:24 — a chuckle: "Took two seconds to say. Lemme tell you something. If you have to give it a new name so it doesn't hurt,"
0:24–0:28 — the register breaks: quiet and kind, leaning in, then he points the fork gently at Nicky: "it already hurts. Ask the question. The answer's free."
0:28–0:30 — silence, lips still: he goes back to his rigatoni. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; Lou looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L3: Eleven cents

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-stoop.jpg` · 7827 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Use the place only.

[EMOTIONAL INTENT]
The origin story, told on the stoop. Motive: Angie, the best decision of his life. Goal: the viewer learns 'a day and a time'. Obstacle: the ache of telling it without her. Tactic: he tells it like a joke until the last line. Mood and tempo: charming, then quietly moving. Every beat is played from this, never posed.
SIGNATURE MOMENT: the signature move (he touches the gold wedding band on the chain at his chest) on 'Sixty-five years, kid'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot. He sits on the top step, a touch off-center; the iron handrail and the potted chrysanthemum are beside him.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone at his eye level, sitting two steps below him. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Leaves skittering on the steps, the camel coat folding, long golden shadows; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Lou pats his coat pocket: "I asked my wife out with eleven cents in my pocket."
0:04–0:06 — two fingers, then one: "A dime and a penny. Nineteen fifty-five,"
0:06–0:13 — a nod down the street: "she works at the bakery. Three weeks, I buy bread every morning, I don't say a word."
0:13–0:16 — a laugh: "My mother thought I was sick. Then one day..."
0:16–0:20 — he sits up straighter, playing his younger self: "Angie, Saturday, two o'clock, can I take you for a soda?"
0:20–0:24 — two fingers held up like straws, then a proud chuckle: "One soda, two straws. I left the penny for a tip."
0:24–0:28 — he touches the ring on the chain; quieter (the signature move: the only time in the whole video), then a steady look: "Sixty-five years, kid. It started with a day and a time."
0:28–0:30 — silence, lips still: he looks down the street with a small smile. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent, and he touches the gold wedding band on the chain at his chest only on "Sixty-five years, kid".
```

## L4: Red flags from 1955 that still work

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-armchair.jpg` · 7602 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Use the place only.

[EMOTIONAL INTENT]
Red flags passed down from Angie. Motive: Angie's wisdom deserves an audience. Goal: two flags and a green one, cleanly. Obstacle: admitting he was wrong four thousand times. Tactic: he counts on his fingers, quotes Angie in a softer voice, and makes a sheepish correction. Mood and tempo: wry, warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE SHEEPISH 'well, most times'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot; the framed wedding photo on the side table is visible from the side (no faces).

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a short stack of hardback books on the side table, at a 45-degree angle. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The leather creaking, the chain glinting; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot; the framed wedding photo on the side table is visible from the side (no faces), propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Lou, a mock-serious face: "Red flags from nineteen fifty-five that still work. Red flag."
0:04–0:14 — one finger, then his eyes soften, a glance at the framed photo: "They're rude to the waiter. Angie used to say, watch how he talks to the waiter, that's how he'll talk to you in ten years. Red flag."
0:14–0:16 — a scoff: "They're never wrong. Never! Sixty-five years,"
0:16–0:21 — a hand up, guilty: "I was wrong maybe four thousand times, and I said so every time..."
0:21–0:28 — a sheepish correction, a chuckle, then he brightens, then a steady, quiet look: "well, most times. Green flag? You don't have to wonder. Angie never made me wonder. Not one day."
0:28–0:30 — silence, lips still: a small nod at the framed photo. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L5: If he wanted to, he'd call

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 7952 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
Upgrading a slogan for his grandkids. Motive: he called Angie every night at seven. Goal: brand the viewer with 'Don't text. Call.'. Obstacle: Nicky's generation's fear of the phone. Tactic: he fixes the phrase like an editor, then does the cord gesture. Mood and tempo: warm, firm, charming. Every beat is played from this, never posed.
SIGNATURE MOMENT: the signature move (he touches the gold wedding band on the chain at his chest) on the catchphrase.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot across the table, he speaks to the lens; plates and the sauce pot soft in the foreground.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone across the table at chest height, sitting. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: a piece of crusty bread on his plate (picked up only in the final beat). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The napkin in his collar, the cutlery, family murmur off-frame; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot across the table, he speaks to the lens; plates and the sauce pot soft in the foreground, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:04 — Lou repeats it slowly, testing it: "If he wanted to, he would. That's what you kids say, right?"
0:04–0:09 — a so-so hand wobble: "It's close. Lemme fix it for you. If he wanted to, he'd call."
0:09–0:12 — he taps the table on each word: "Not text. Call. A text you can send"
0:12–0:16 — a disgusted little face: "from the bathroom while you're watching the game. A call,"
0:16–0:25 — he restarts, leaning in: "you have to stop. You have to... you have to mean it. I called Angie every night at seven, on the phone in the kitchen,"
0:25–0:28 — he holds his hands apart, measuring the cord, then he touches the ring on the chain; steady eyes on the lens (the signature move: the only time in the whole video): "with the cord this long. Don't text, sweetheart. Call."
0:28–0:30 — silence, lips still: he picks up the bread. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent, and he touches the gold wedding band on the chain at his chest only on "Don't text, sweetheart. Call.".
```

## L6: Rizz in 1955

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 7936 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
Grandpa asked about his 'rizz'. Motive: he was a charmer, and he knows it. Goal: make 'showing up and shutting up' the answer. Obstacle: he mishears 'rizz' as 'rice'. Tactic: he taps his hearing aid, then shares a proud memory, eyes on Nicky. Mood and tempo: playful, proud. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE SHIMMY.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot across the table. His eyeline goes to Nicky, just off-lens to the right, never into the lens.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone across the table at chest height, sitting. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Interview set-up: Lou answers Nicky, his grandson, sitting across the table, out of frame just to the right of the phone; his eyeline stays on Nicky, just off-lens to the right, and he NEVER looks into the camera. The question was asked before the clip starts and is added later as on-screen text: there is no interviewer voice. No prop appears, disappears or changes.

[PHYSICS]
The napkin in his collar, the cardigan cables shifting; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot across the table, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Lou taps his hearing aid and leans toward Nicky (once only), then he points at the bowl of rigatoni: "My what? Riz? Like rice?"
0:02–0:06 — a dawning, amused look: "Oh. Rizz. My rizz, kid. I showed up. On time."
0:06–0:09 — he brushes his cardigan front proudly: "With my shoes shined, and my hair,"
0:09–0:13 — a rueful pat of his thin hair: "I had hair then, with the comb in my back pocket"
0:13–0:21 — a comb mime at the back pocket: "in case of wind. I asked her questions and then I shut up and listened to the answers. That's it. That's the rizz."
0:21–0:28 — a satisfied nod, then a little shoulder shimmy, a chuckle: "Showing up and shutting up. Your grandmother married me for it. Well... for that and the dancing."
0:28–0:30 — silence, lips still: he laughs and waves Nicky off. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices. No interviewer voice: the question is added later as on-screen text.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; Lou looking into the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L7: Ghosting

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-stoop.jpg` · 7567 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Use the place only.

[EMOTIONAL INTENT]
Genuinely upset about ghosting. Motive: thirty-eight years of announcing his stops. Goal: the viewer sends the one sentence. Obstacle: he isn't good with the phone; the selfie wobbles. Tactic: he uses bus-driver authority and the depot line. Mood and tempo: indignant, warm, funny. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DEPOT ANNOUNCEMENT.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: Lou's own handheld selfie: mild front-camera wide distortion, a gentle hand bob with his breathing and gestures; any angle change comes only from his hand. Never a cut, zoom, gimbal glide or tripod stillness.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
A too-close selfie: his face fills much of the frame, the stoop steps and golden street tilting behind.

[CONTINUITY – LOCKED]
Lou holds the phone close to his face in his right hand, a little too close and slightly below his chin; his free hand does the gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Close front-camera wide distortion, the phone shaking slightly in his hands, golden light flaring at the frame edge; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — A too-close selfie: his face fills much of the frame, the stoop steps and golden street tilting behind, Lou's handheld selfie, one unbroken take, 9:16 vertical phone frame
0:00–0:02 — Lou squints into the too-close phone: "Ghosting. Nicky explained it to me."
0:02–0:06 — a wounded look: "I'm still upset. You go on three dates with somebody,"
0:06–0:08 — eyebrows up, baffled: "and then you just... disappear? Kid,"
0:08–0:16 — a proud chin lift: "I drove a bus for thirty-eight years. If I wasn't gonna make your stop, I told you. I said, sorry, folks,"
0:16–0:20 — an announcer voice; he holds his free hand at his mouth as if at a microphone: "this bus is going to the depot. You don't owe anybody a speech."
0:20–0:24 — one finger of his free hand up: "You owe them one sentence. I'm not feeling it,"
0:24–0:26 — gentle: "I wish you well. Say it,"
0:26–0:28 — a firm nod: "and get off at your stop."
0:28–0:30 — silence, lips still: he fumbles for the button to stop recording; the frame tilts. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L8: The ring on the chain

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-armchair.jpg` · 7690 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Use the place only.

[EMOTIONAL INTENT]
The story of the ring. Motive: Angie's laugh. Goal: share the secret without self-pity. Obstacle: grief. Tactic: he keeps it light with the sheriff joke, then lets it go quiet. Mood and tempo: tender, wry, warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE QUIET TURN on 'She passed two years later'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy wool cardigan over the light blue collared shirt. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium close-up, chest-up, the ring and chain clearly visible on his cardigan.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the glass of water on the side table, at a 45-degree angle. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The thin gold chain catching the lamp light, the leather creaking; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium close-up, chest-up, the ring and chain clearly visible on his cardigan, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Lou lifts the ring on the chain between two fingers (the signature move: the only time in the whole video): "This is my wedding ring. It doesn't fit anymore,"
0:03–0:09 — he lets it rest back on his chest: "so it lives here. Twenty nineteen, my knuckles got big. The ring didn't get smaller,"
0:09–0:16 — a self-deprecating chuckle, then a warm smile, eyes glistening but bright: "I got bigger. Angie laughed so hard. She said, Louie, now it's closer to your heart, like a..."
0:16–0:22 — he searches for the words, then taps the ring like a badge, then the register breaks: quiet, eyes drop: "like a sheriff's badge. She passed two years later. Sixty-five years. People ask me the secret."
0:22–0:28 — his eyes come back up, steady, then a small laugh through it: "We said goodnight every night. Even when we were fighting. Even through the bathroom door."
0:28–0:30 — silence, lips still: he glances at the framed photo on the side table. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent, and he touches the gold wedding band on the chain at his chest only on "This is my wedding ring".
```

## L9: Lou's Rules #2, first date on a Tuesday

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-stoop.jpg` · 7499 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Use the place only.

[EMOTIONAL INTENT]
The Tuesday rule. Motive: low-pressure honesty. Goal: make Tuesday dates sound obviously smart. Obstacle: admitting his own first date was a Saturday. Tactic: two fingers up, mock-weary of Saturdays, a sheepish ending. Mood and tempo: easy, twinkly. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE SHEEPISH CONFESSION.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot, he sits on the top step, a touch off-center.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone at his eye level, sitting on the step below him. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Leaves skittering, the coat folds, long golden shadows; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot, he sits on the top step, a touch off-center, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Lou, two fingers up: "Lou's rule number two. First date on a Tuesday."
0:03–0:07 — a firm little headshake, then a nod, then hands spread like a big show: "Not Saturday. Tuesday. Saturday's a whole production, everybody's pretending. Tuesday?"
0:07–0:19 — a relaxed shrug, then one finger: "Nobody expects nothing. A coffee and a walk. One hour. If it's good, you'll know, and you got the whole week to look forward to the next one. If it's bad... hey,"
0:19–0:23 — a contented pat on his knee: "you're home by eight for your programs. Angie and me,"
0:23–0:25 — a sheepish look away: "our first was a Saturday. So..."
0:25–0:28 — a wagging finger and a chuckle: "do as I say, not as I did."
0:28–0:30 — silence, lips still: he leans back on his elbows on the step. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L10: Ask Grandpa Lou: should I text first?

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-armchair.jpg` · 7759 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Use the place only.

[EMOTIONAL INTENT]
Answering a viewer's question from the comments. Motive: Angie went first, and it changed his life. Goal: give the viewer permission to go first. Obstacle: the embarrassing story. Tactic: he reads the question off the paper, then answers to the lens. Mood and tempo: playful, encouraging. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE SCANDALISED MEMORY.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot, chest-up.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a short stack of hardback books on the side table, at a 45-degree angle. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: a folded sheet of paper with illegible printed writing (Nicky printed the comment), held in his hand from frame one. Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The paper crinkling, the leather creaking; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot, chest-up, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Lou lifts the folded paper and peers at it: "Ask Grandpa Lou. Somebody wrote, should I text first,"
0:03–0:05 — he lowers the paper, a pitying look over it: "or will I look desperate? Sweetheart."
0:05–0:10 — one finger up: "Desperate is waiting three days to answer a message you read in three seconds."
0:10–0:15 — a self-correction, then a dismissive wave: "Text first. Call first! Whatever. Whoever goes first isn't the loser,"
0:15–0:20 — a fist to his chest: "they're the one with the guts. Angie went first once. She called the garage and"
0:20–0:24 — eyes wide, scandalised all over again: "left a message with my boss. Biggest embarrassment of my life."
0:24–0:28 — a soft, proud grin, then he waggles the paper: "I married her. Send your questions, I'll answer the good ones."
0:28–0:30 — silence, lips still: he folds the paper and tucks it into his cardigan pocket. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L11: They went quiet

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 7431 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
A calm crisis protocol for a silent phone. Motive: he hates seeing kids wait by the phone. Goal: the viewer sends one message, then puts the phone away. Obstacle: the viewer's panic. Tactic: slow, calming, word for word, and the drawer gesture. Mood and tempo: calm, kind, firm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DRAWER.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot across the table, he speaks to the lens.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone across the table at chest height, sitting. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The napkin in his collar, family murmur off-frame; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot across the table, he speaks to the lens, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Lou, a sympathetic look: "They went quiet. Two days, three days, nothing."
0:03–0:08 — a headshake, a little wince, then one finger: "Don't send fifteen question marks. Call once. No answer? You send one message,"
0:08–0:13 — he leans in, deliberate: "exactly this. Hey, I've enjoyed getting to know you. If you're still interested,"
0:13–0:17 — he says the words slowly, like dictating: "I'd love to see you Thursday. If not, no hard feelings."
0:17–0:22 — he mimes sliding a drawer shut: "Then the phone goes in a drawer. An answer, or no answer..."
0:22–0:28 — kind eyes, then a small nod: "both are answers, sweetheart. I wrote you the exact words for the rest. Link in my bio."
0:28–0:30 — silence, lips still: he pats the table: done. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L12: How to ask somebody out

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/3-stoop.jpg` · 7382 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. Use the place only.

[EMOTIONAL INTENT]
A masterclass in asking someone out. Motive: eleven cents, and a day and a time. Goal: the viewer asks someone this week. Obstacle: 'sometime' culture. Tactic: he kills 'sometime', then dictates the words. Mood and tempo: practical, warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DEMONSTRATION.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands. The light state never changes: not a time-lapse, no sun movement, no clouds racing. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot, he sits on the top step.

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone at his eye level, sitting on the step below him. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
Leaves skittering, the coat folds, long golden shadows; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot, he sits on the top step, phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Lou, a businesslike look: "How to ask somebody out. Word for word, from a man who did it"
0:05–0:07 — he pats his pocket: "with eleven cents. You don't say,"
0:07–0:11 — a vague, limp hand, then a flat look: "we should hang out sometime. Sometime is never, kid. You say..."
0:11–0:16 — he softens, demonstrating: "I like talking to you. Would you like to get a coffee with me"
0:16–0:24 — one finger, then two, then he taps his knee twice: "on Tuesday, around six? A day and a time. If they say yes, great. If they say no, you say, no problem,"
0:24–0:28 — a gracious nod, then steady: "thanks for being straight with me. And you mean it."
0:28–0:30 — silence, lips still: he raises his eyebrows: got it?. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L13: Ask Grandpa Lou: how do I end a situationship?

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/1-armchair.jpg` · 7519 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. Use the place only.

[EMOTIONAL INTENT]
The kind exit. Motive: the legend of Angie's one-sentence breakup. Goal: the viewer ends it kindly and briefly. Obstacle: people over-explain, and he has to keep it short himself. Tactic: he dictates the words, then 'Then you stop' with a flat hand. Mood and tempo: firm, kind, wry. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE FLAT HAND 'Then you stop.'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a navy wool cardigan over the light blue collared shirt. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
45-degree medium shot, chest-up; the glass of water on the side table at frame edge.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against a short stack of hardback books on the side table, at a 45-degree angle. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. Props: a glass of water on the side table (lifted only in the final beat). Every prop is there from the first frame and never appears, disappears or changes.

[PHYSICS]
The lamp light on the chain, the leather creaking; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — 45-degree medium shot, chest-up; the glass of water on the side table at frame edge, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:06 — Lou, a firm look: "How do I end a situationship? Like a grown-up, kid. On the phone, or better, in person."
0:06–0:09 — a disgusted little headshake: "Not with a meme. You say..."
0:09–0:14 — slow, dictating: "I've realized I want something more serious, and I don't think it's going to be us."
0:14–0:18 — gentle, then a flat hand: stop: "I wish you well. Then you stop. Don't explain for twenty minutes,"
0:18–0:25 — fingers flicking away, then a quiet nod: "don't apologize six times. Short is kind. Angie ended it with a fella before me in one sentence."
0:25–0:28 — a delighted chuckle: "He sent her a Christmas card for forty years."
0:28–0:30 — silence, lips still: he sips from the glass of water. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L14: The first phone call

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 7448 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken handheld take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
Teasing Nicky while teaching the first thirty seconds. Motive: his grandkids' fear of the phone baffles him. Goal: make calling feel doable. Obstacle: Nicky, filming, embarrassed. Tactic: he teases Nicky, then dictates the opener. Mood and tempo: teasing, warm, practical. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE POINT AT NICKY.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: one handheld phone held by Nicky, alive: constant small sway and micro-corrections, one late human reframe, one tiny step-adjust. Never a tripod, gimbal, dolly, zoom or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.
Off-screen: Nicky (28), his grandson, holds the phone. Nicky is never seen and never heard.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium shot across the table, he speaks to the lens (and teases Nicky behind it).

[CONTINUITY – LOCKED]
This is NOT a selfie: Lou is not holding the phone, no arm reaches toward the lens, and both of his hands are free for his gestures. Nicky holds the phone across the table at chest height, sitting. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The napkin in his collar, cutlery sounds off-frame; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium shot across the table, he speaks to the lens (and teases Nicky behind it), phone handheld by Nicky, one unbroken take, 9:16 vertical phone frame
0:00–0:05 — Lou, a pitying look: "You kids are scared of the phone. Nicky's scared of the phone."
0:05–0:07 — he points at Nicky behind the phone: "Nicky, you are. Here's the first thirty seconds,"
0:07–0:10 — a lean in: "word for word. Hi, it's Lou..."
0:10–0:13 — a self-correcting chuckle: "no, your name, use your own name."
0:13–0:17 — polite, demonstrating: "Is now a good time? I was thinking about Saturday and"
0:17–0:21 — a soft smile: "I wanted to hear your voice. You don't need a speech,"
0:21–0:24 — one finger: "you need a reason. Bad time? No problem,"
0:24–0:28 — a gracious shrug: "when's better? I wrote down the rest. Link's in my bio."
0:28–0:30 — silence, lips still: he winks at Nicky. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; a selfie arm or Lou holding the phone; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

## L15: Lou's Rules #3, the phone goes face down

- **Length:** 30 s · **Refs:** `sheet.jpg`, `profile-picture.jpg`, `locations/2-sunday-lunch.jpg` · 7408 characters

```text
Single continuous shot, 30s total, 9:16 vertical phone frame. One unbroken phone take, no cuts.
Total: 30s / 1 shot / 9:16

[REFERENCES]
@Image 1 defines Lou's face, bone structure, skin, wrinkles, hair, body and identity marks. It is a character sheet on a white studio background: use only the man. Do not use its white background, its flat studio lighting or its layout, and do not copy its outfit (his outfit for this video is written in CAST).
@Image 2 is a close-up photo of the same man, Lou, at a natural angle: it confirms his face. Use only his face and hair; ignore its background, light and clothes.
@Image 3 defines the location: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. Use the place only.

[EMOTIONAL INTENT]
Rule three, with a family story. Motive: Nicky's lost chance. Goal: the viewer turns their phone face down. Obstacle: he's still annoyed at Nicky. Tactic: he demonstrates with an imaginary phone, tells the story, and ends deadpan. Mood and tempo: wry, warm. Every beat is played from this, never posed.
SIGNATURE MOMENT: THE DEADPAN 'He messed it up.'.

[GLOBAL LOOK – LOCKED, APPLIES TO THE WHOLE TAKE]
Real social-media footage of a real 90-year-old man, filmed by his grandson on a new phone. Phone optics: 24mm-equivalent wide lens, tiny sensor, DEEP depth of field: the room behind him is as sharp as his face; mild wide-angle stretch toward the frame edges. Modern-phone processing: computational HDR with flat contrast, lifted shadows and highlights held right at clipping, crisp over-sharpened micro-detail, clean true-to-life colour, one soft autofocus breath early on. No film grain, no vignette, no filters, no beauty mode. Skin at pore level, real and aged.
Available light only, constant for the whole take: Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth. He is relit by this scene, never by the studio light of @Image 1: he is never brighter than his surroundings and never looks pasted in.
Movement grammar: a phone propped on a surface, alive: one soft settle-wobble in the first second as it finds its lean, then a slight casual tilt, subtle sensor breathing and one autofocus breath. Never a tripod-perfect level frame, never a pan, zoom, dolly or orbit.

[CAST – IDENTICAL FOR THE WHOLE TAKE]
Lou (@Image 1): a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build. Identity marks, always visible and unchanged: very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on a thin gold chain around his neck, visible on his cardigan. He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2. His face stays exactly the face of @Image 1 and @Image 2 in every frame and from every angle.
Wardrobe (this video): a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar. This replaces his usual moss-green cardigan: he is NOT wearing it in this video.
PERSONA: warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, never a caricature, never mugging.
VOICE: English only. A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; a twinkle and a chuckle in the voice.

[LOCATION]
The place from @Image 3: an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos. No other people. No brands, no readable text, no signs.

[LOCATION MAP]
Medium close-up, chest-up, the sugar bowl's rim soft in the near foreground.

[CONTINUITY – LOCKED]
Nobody holds the phone: it is propped against the sugar bowl on the table, a little below his eye level. Lou is not holding it; both of his hands are free for his gestures. The lens is clean and clear: no finger, hand or object in front of it. Framing constant after the opening second. No prop appears, disappears or changes.

[PHYSICS]
The napkin in his collar, the lace cloth under his hands; true body weight where he sits; fabric moves with his movement.

SHOT 1 — 0:00–0:30 — Medium close-up, chest-up, the sugar bowl's rim soft in the near foreground, propped phone, one unbroken take, 9:16 vertical phone frame
0:00–0:03 — Lou, three fingers up: "Lou's rule number three. On a date,"
0:03–0:07 — he flips an imaginary phone face down on the cloth: "the phone goes face down. Not on the table screen up"
0:07–0:13 — a mocking little frame made with his fingers: "like a little TV. Face down, or in the pocket. Nicky brought a girl to Sunday lunch,"
0:13–0:17 — an approving nod: "and she put her phone in her bag the whole time."
0:17–0:23 — a delighted, impressed look: "She asked my sister about her hip! I took Nicky in the kitchen and I said,"
0:23–0:28 — a stern whisper, then a deadpan look straight into the lens, then four fingers, a twinkle: "kid, don't mess this up. He messed it up. Rule number four next week."
0:28–0:30 — silence, lips still: he shakes his head slowly. Hold.

AUDIO: No music. No musical score. Synchronized production sound from the phone's own mic only: Lou's voice close and clear, English only, exactly the quoted words and nothing added; cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table. His lips move only when he speaks and stay still in every silence. No other voices.

AVOID: a beard or moustache; thin or missing eyebrows; a ring on any finger (his wedding band no longer fits and only hangs on the chain); a coin or medallion pendant instead of the plain ring; a finger, hand or blurred object in front of the lens; any language other than English; anyone else in frame; extra people; a younger, smoother or made-up face; waxy or plastic skin; missing identity marks (the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain); outfit changes; the white studio background or studio light of @Image 1; a blurred background, bokeh or a film-look colour grade; cuts, zooms, gimbal glide or tripod stillness; subtitles, captions, on-screen text, logos or watermarks.

Total: 30s / 1 shot / 9:16
POSITIVE LOCKS: One unbroken 9:16 vertical phone take of Lou. His face matches @Image 1 and @Image 2 exactly for all 30 seconds, relit by the scene's own light. He speaks only the quoted English words in his warm Brooklyn accent.
```

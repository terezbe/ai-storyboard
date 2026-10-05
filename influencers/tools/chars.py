"""Character and location constants for the video-prompt builder.

Identity lines and anchors are copied verbatim from each character's profile.md.
Change them there first, then here, so every prompt stays identical.
"""

LOOK_RETRO = (
    "IMAGE QUALITY (fixed for the whole series: an older phone, around 2016): 720p-1080p softness; "
    "narrow dynamic range, so the brightest window or sky areas clip to white; warm-yellow white balance; "
    "faint noise in the shadows; slight compression in fine textures; slow auto-exposure that corrects a beat late "
    "when brightness changes. Honest phone degradation, NEVER film grain, vignette, light leaks or aged filters. "
    "Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face, no beauty filter."
)

LOOK_CLEAN = (
    "IMAGE QUALITY (fixed for the whole series: clean modern flagship phone): clean, bright and sharp, like the newest "
    "phone in good natural light, but honestly casual framing, headroom a touch off, one soft autofocus breath early on. "
    "No noise, no haze, no vignette, no cinematic grade, no film grain, no beauty filter. "
    "Skin at pore level, real and aged; no waxiness, no plastic, no AI-smooth face."
)

CHARS = {
    "rosa": {
        "name": "Rosa",
        "he": "she", "his": "her", "him": "her", "He": "She", "His": "Her",
        "role": "THE WOMAN",
        "identity": (
            "Rosa, a genuinely elderly 94-year-old Southern Italian woman, NOT young, NOT middle-aged, deeply sun-browned "
            "olive skin with real aged texture, deep sun creases and crow's feet, age spots, short cropped silver-white hair, "
            "a strong nose, sharp lively dark brown eyes, a lean wiry frame with upright posture, a completely bare no-makeup face"
        ),
        "anchors": (
            "a small pale scar through the outer end of her left eyebrow; a faded small blue anchor tattoo on the inside of "
            "her right wrist; exactly one necklace, a single strand of red coral beads"
        ),
        "anchors_short": "the pale scar through her left eyebrow, the faded blue anchor tattoo on her inner right wrist, the single strand of red coral beads",
        "outfits": {
            "default": "an oversized faded white men's linen shirt with sleeves rolled to the elbow, buttoned modestly, rolled navy cotton trousers, barefoot",
            "swim": "a plain black modest one-piece swimsuit under the open oversized white linen shirt, wet slicked-back silver hair, a faded striped cotton towel round her shoulders, bare feet",
            "doorstep": "a faded cornflower-blue cotton housedress with a grey knitted cardigan, worn black slippers",
            "sunday": "a navy dress with small white dots and a black cardigan",
        },
        "look": LOOK_RETRO,
        "look_word": "older-phone (around 2016)",
        "style": (
            "Style: photoreal social-media footage of a real 94-year-old, filmed by her great-granddaughter on Rosa's old phone. "
            "Pure UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no readable "
            "text, no place names. Modest, fully clothed styling."
        ),
        "voice_register": "warm Sicilian-accented English from a lively 94-year-old woman: husky, quick bursts of words then sudden pauses, a laugh mid-sentence, never frail",
        "voice_id_line": "elderly woman, mid-90s, warm natural Sicilian Italian accent speaking English",
        "signature": "two fingertips tap the red coral beads twice",
        "companion": "Giulia (her great-granddaughter)",
        "companion_short": "Giulia",
        "companion_age": "Giulia (20), her great-granddaughter",
        "interviewer": "Giulia, her great-granddaughter, sitting just beside the lens",
        "speech_wpm": 170,
        # Kolbo / Seedance 2.5 (native voice, Locked Intro). Approved in the R2 test on 2026-10-05.
        "sex": "woman",
        "persona": (
            "warm, mischievous and blunt; quick and lively, never frail; upright and wiry, she sits square; she talks with "
            "her hands in short, sharp gestures (a flat-hand chop, a finger wag, a pat of the air), sized small to medium, "
            "never mugging; she laughs in the middle of her own sentences; her eyes check the viewer after each joke"
        ),
        "voice_kolbo": (
            "An elderly woman in her mid-90s with a warm Sicilian Italian accent, soft and musical, natural, not a cartoon, "
            "not heavy; a slightly husky timbre with a light rasp of age, strong and lively, never shaky; quick bursts of "
            "words, then sudden pauses"
        ),
        "accent_short": "warm Sicilian accent",
        "gender_lock": "She is a woman: a smooth upper lip and chin, NO moustache, no facial hair, no stubble.",
        "avoid_extra": "a moustache, upper-lip hair or any facial hair; a masculine face",
        "phone_owner": "filmed by her great-granddaughter on Rosa's old phone from around 2016",
    },
    "ray": {
        "name": "Ray",
        "he": "he", "his": "his", "him": "him", "He": "He", "His": "His",
        "role": "THE MAN",
        "identity": (
            "Ray, a genuinely elderly 71-year-old English working-class man, NOT young, NOT middle-aged, ruddy fair weathered "
            "skin with visible pores, deep forehead lines, a lean angular face (not round, no double chin), kind sceptical grey "
            "eyes, short grey hair at the sides, clean-shaven chin, a lean wiry build"
        ),
        "anchors": (
            "a thick bushy grey walrus moustache covering his upper lip; a brown herringbone tweed flat cap; a pair of "
            "black-rimmed reading glasses folded and hooked into the collar of his jumper at the chest"
        ),
        "anchors_short": "the thick bushy grey walrus moustache, the brown herringbone flat cap, the black-rimmed reading glasses hooked into his jumper collar",
        "outfits": {
            "default": "a navy canvas work jacket worn open over a cream knitted wool jumper, dark grey work trousers",
            "sunday": "a navy V-neck jumper over a blue-and-white checked shirt, dark grey trousers",
            "shed": "an old grey wool jumper with a small darned patch on the elbow, dark grey work trousers",
            "van": "the navy canvas work jacket zipped up over the cream jumper",
        },
        "look": LOOK_RETRO,
        "look_word": "older-phone (around 2016)",
        "style": (
            "Style: photoreal social-media footage of a real retired plumber who films himself on his own old phone. Pure UGC "
            "register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no badges, no number "
            "plates, no readable text, no place names. Modest, fully clothed styling."
        ),
        "voice_register": "dry Yorkshire working-class baritone from a 71-year-old man: slow deadpan, pauses before the punchline, a faint chuckle, never shouty",
        "voice_id_line": "elderly man, early 70s, natural Northern English (Yorkshire) accent",
        "signature": "he unhooks the black-rimmed reading glasses from his jumper collar and puts them on",
        "companion": "Kelly (his granddaughter)",
        "companion_short": "Kelly",
        "companion_age": "Kelly, his granddaughter",
        "interviewer": "Kelly, his granddaughter, sitting just beside the lens",
        "speech_wpm": 155,
        "sex": "man",
        "persona": (
            "dry, patient and kind under a sceptical surface; slow and deliberate, never in a hurry; he sits still and "
            "upright with his hands folded or flat on the table; small precise gestures (one finger lifted, a tap of the "
            "pencil on the notebook); deadpan, with the smallest smile before a punchline; never shouty, never mugging"
        ),
        "voice_kolbo": (
            "A man in his early 70s with a natural Yorkshire (Northern English) working-class accent, a dry baritone, slow "
            "deadpan delivery with a pause before the punchline and a faint chuckle; never shouty, never a caricature"
        ),
        "accent_short": "dry Yorkshire accent",
        "gender_lock": "His thick walrus moustache stays exactly as in @Image 1 and @Image 2; his chin is clean-shaven.",
        "avoid_extra": "a beard or stubble on his chin; a missing or trimmed moustache",
        "phone_owner": "filmed on his own old phone from around 2016",
    },
    "lou": {
        "name": "Lou",
        "he": "he", "his": "his", "him": "him", "He": "He", "His": "His",
        "role": "THE MAN",
        "identity": (
            "Lou, a genuinely elderly 90-year-old Italian-American man, NOT young, NOT middle-aged, pale aged skin with liver "
            "spots on the temples, a lean face with deep laugh lines, big ears, thin wispy white hair combed back, twinkling "
            "eyes, a warm crooked grin with real aged teeth, clean-shaven, a slim frail-but-sharp build"
        ),
        "anchors": (
            "very bushy white eyebrows; a beige behind-the-ear hearing aid on his right ear; a plain gold wedding band worn on "
            "a thin gold chain around his neck, visible on his cardigan"
        ),
        "anchors_short": "the very bushy white eyebrows, the beige hearing aid behind his right ear, the plain gold wedding band on a thin gold chain",
        "outfits": {
            "default": "a moss-green button-up wool cardigan over a crisp light blue collared shirt, brown corduroy trousers",
            "sunday": "a cream cable-knit cardigan over the crisp light blue collared shirt, a white paper napkin tucked into his collar",
            "stoop": "a camel wool car coat over the moss-green cardigan and light blue shirt, brown corduroy trousers, brown leather loafers",
            "evening": "a navy wool cardigan over the light blue collared shirt",
        },
        "look": LOOK_CLEAN,
        "look_word": "clean modern-phone",
        "style": (
            "Style: photoreal social-media footage of a real 90-year-old grandpa, filmed by his grandson on a new phone. Pure "
            "UGC register: never cinematic, never produced, never an advert. No IP: no brands, no logos, no number plates, "
            "no readable text, no place names. Modest, fully clothed styling."
        ),
        "voice_register": "soft gravelly Brooklyn Italian-American voice of a 90-year-old man: slow, deliberate pauses, a twinkle and a chuckle, gentle but blunt, never a caricature",
        "voice_id_line": "elderly man, 90, warm natural Brooklyn Italian-American accent",
        "signature": "he touches the gold wedding band on the chain at his chest",
        "companion": "Nicky (his grandson)",
        "companion_short": "Nicky",
        "companion_age": "Nicky (28), his grandson",
        "interviewer": "Nicky, his grandson, sitting across the table just beside the lens",
        "speech_wpm": 150,
        "sex": "man",
        "persona": (
            "warm and twinkly, gentle but blunt; slow, with deliberate pauses; he leans forward a little when he means it; "
            "small open-palm gestures, a finger raised for the lesson; a chuckle never far away; respectful of everyone, "
            "never a caricature, never mugging"
        ),
        "voice_kolbo": (
            "A 90-year-old man with a warm, natural Brooklyn Italian-American accent (not a mobster caricature), a soft "
            "gravelly voice with an audible age rasp, strong enough and never frail; a slower pace with deliberate pauses; "
            "a twinkle and a chuckle in the voice"
        ),
        "accent_short": "warm Brooklyn accent",
        "gender_lock": "He is clean-shaven, with very bushy white eyebrows exactly as in @Image 1 and @Image 2.",
        "avoid_extra": "a beard or moustache; thin or missing eyebrows",
        "phone_owner": "filmed by his grandson on a new phone",
    },
}

# Locations: scene text for @image2, a relight block per light state, and ambient sound.
LOCS = {
    "rosa": {
        "kitchen": {
            "file": "locations/1-kitchen.jpg",
            "scene": "a tiny whitewashed Sicilian kitchen: a worn wooden table with a white crochet cloth, a dented aluminium moka pot on a two-ring gas stove, a bowl of lemons, blue-and-white majolica tiles, a small window open to the sea",
            "light": {
                "morning": "Low warm morning sun through the small window on the LEFT is the key, raking across her face and the crochet cloth. Soft fill from the whitewashed walls. A cool blue COLOR BOUNCE from the majolica tiles onto her shadow side, and a faint warm bounce from the wooden table under her chin. True contact shadows where her forearms rest on the cloth and under the moka pot.",
                "afternoon": "Afternoon: the shutters are half closed, so slatted warm light falls across the table and her shoulder from the LEFT as the key. A dim cool fill from the white walls. A cool blue COLOR BOUNCE from the tiles, and a warm bounce from the wood. True contact shadows under her arms and the cups.",
            },
            "sfx": "the moka pot ticking as it cools on the stove, a spoon on a saucer, distant gulls through the open window, one far-off church bell",
        },
        "rocks": {
            "file": "locations/2-sea-rocks.jpg",
            "scene": "flat pale limestone rocks stepping down into calm turquoise water, an old metal ladder bolted into the rock, a mountain headland across the bay, small generic fishing boats",
            "light": {
                "morning": "Soft low early-morning sun from the LEFT is the key, warm on her wet skin and hair. Open-sky fill from above. A turquoise COLOR BOUNCE from the water onto her chin and neck, and a pale warm bounce from the limestone. Water droplets catch tiny specular glints. True contact shadows where she sits on the rock and the towel presses down.",
                "windy": "A windy overcast morning: soft, flat, cool daylight from the sky as a broad key from above-left. The sea is choppy, with small whitecaps slapping the rocks. A grey-turquoise COLOR BOUNCE from the water, and a pale bounce from the wet limestone. True contact shadows under her on the rock. Her wet hair and the towel edge move in the wind.",
                "october": "A soft, clear autumn morning: low gentle sun from the LEFT, slightly softer and more golden than summer. A turquoise COLOR BOUNCE from the calm water, a warm bounce from the limestone, open-sky fill. True contact shadows where she sits.",
            },
            "sfx": "small waves lapping the rocks, light breeze on the phone mic, gulls, a distant boat engine",
            "clutter": "her worn rubber sandals and a small faded canvas bag on the rock beside her",
        },
        "doorstep": {
            "file": "locations/3-doorstep.jpg",
            "scene": "a narrow stone alley with ochre plaster walls, a weathered blue front door, pots of red geraniums and basil, a low wooden stool, a washing line with white sheets overhead",
            "light": {
                "morning": "The sun cuts across the top of the alley. She sits in cool shade at street level, keyed from the RIGHT by a warm OCHRE COLOR BOUNCE off the sunlit plaster wall opposite. Soft sky fill from above, and a faint blue bounce from the door behind her. True contact shadows under the stool and her feet.",
                "afternoon": "Early afternoon: the alley is in deep warm shade. A soft ochre bounce off the wall opposite is the key from the RIGHT, with a bright strip of sun high on the wall above her. A cool sky fill and a faint blue from the door. True contact shadows under the stool.",
                "evening": "Low evening light: a warm amber bounce from the ochre walls is the key from the RIGHT, the alley in soft deep shade, the sky above a pale glow. A faint blue from the door behind her. True contact shadows under the stool and her slippers.",
            },
            "sfx": "swallows, a neighbour's shutter creaking, a scooter far down the hill, the sheets on the washing line flapping softly",
            "clutter": "a worn straw broom leaning on the wall and a chipped saucer of water for the cats by the step",
        },
    },
    "ray": {
        "kitchen": {
            "file": "locations/1-kitchen-table.jpg",
            "scene": "a modest kitchen in an old English terraced house: a small Formica-topped table against the wall, a brown teapot under a knitted tea cosy, a chipped mug, an open spiral notebook with illegible handwritten columns, an old pocket calculator and a pencil, net curtains, pale green 1980s cupboards",
            "light": {
                "day": "Soft grey overcast window light through the net curtains from the RIGHT is the key. A warm tungsten glow from the ceiling bulb as a gentle top fill. A muted green COLOR BOUNCE from the 1980s cupboards onto his shadow side, and a cream bounce from the Formica under his chin. True contact shadows under the mug, the notebook and his forearms.",
                "sunday": "Late Sunday afternoon: low, soft, slightly warmer window light through the net curtains from the RIGHT is the key. The ceiling bulb is on, a warm top fill. A muted green COLOR BOUNCE from the cupboards and a cream bounce from the Formica. True contact shadows under the teapot, the notebook and his hands.",
                "evening": "Evening: the window is dark blue behind the net curtains, and the warm ceiling bulb is now the key, from above-front. A muted green bounce from the cupboards, and a cream bounce from the Formica. True contact shadows under his hands and the notebook.",
            },
            "sfx": "a wall clock ticking, wet tyres passing on the street outside, a teaspoon against a mug, the kettle ticking as it cools",
        },
        "shed": {
            "file": "locations/2-shed.jpg",
            "scene": "a tidy wooden garden shed: a sturdy workbench with a bench vice, jam jars of sorted screws, plain unbranded hand tools on a pegboard, a coil of copper pipe, an old kettle and two mugs on a shelf, a small dusty window onto a vegetable bed",
            "light": {
                "day": "Soft daylight through the small dusty window on the LEFT is the key. A warm wood-toned COLOR BOUNCE from the plank walls and the workbench. A faint cool green tint from the vegetable bed outside on the window side. True contact shadows of his hands, the jam jars and the vice on the bench.",
            },
            "sfx": "light rain pattering on the felt roof, a blackbird outside, the bench creaking, screws rattling in a jar",
        },
        "van": {
            "file": "locations/3-van.jpg",
            "scene": "the cab of an old generic white work van parked on a street of terraced houses: worn grey fabric seats, a tartan flask on the dashboard, a dog-eared notebook in the door pocket, raindrops on the windscreen, no badges, no number plates",
            "light": {
                "day": "Flat grey daylight through the windscreen and the side window is a soft broad key from the FRONT-LEFT. Faint travelling shadows of raindrops slide across his face. A cool grey COLOR BOUNCE from the dashboard, and a faint warm bounce from his navy jacket. True contact shadows where he sits in the worn fabric seat.",
            },
            "sfx": "rain drumming softly on the van roof, a car passing with wet tyres, the seat creaking, the indicator stalk clicking once when his elbow knocks it",
        },
    },
    "lou": {
        "armchair": {
            "file": "locations/1-armchair.jpg",
            "scene": "a 1970s-style living room in an old Brooklyn rowhouse: a worn brown leather armchair with a crocheted blanket, a small side table with a glass of water and a framed wedding photo seen from the side, a brass floor lamp, small indistinct family photos on the wall, a patterned rug, sheer curtains",
            "light": {
                "afternoon": "Warm late-afternoon sun through the sheer curtains from the LEFT is the key, soft and golden. The brass floor lamp adds a warm practical glow from behind-right. A warm brown COLOR BOUNCE from the leather armchair and the wood panelling. True contact shadows where he sinks into the chair and under his hands on the armrests.",
                "evening": "Evening: the brass floor lamp is the key, warm and low from the RIGHT. The window behind the sheer curtains is a dim blue. A warm brown COLOR BOUNCE from the leather. True contact shadows in the chair and under the glass on the side table.",
            },
            "sfx": "a clock ticking, the leather armchair creaking, a radiator clicking, a very distant siren on the avenue",
        },
        "lunch": {
            "file": "locations/2-sunday-lunch.jpg",
            "scene": "an Italian-American family dining room at Sunday lunch: a long table with a white lace tablecloth, a big pot of red sauce, rigatoni, meatballs, crusty bread, a carafe of red wine, mismatched glasses, a china cabinet, indistinct framed photos",
            "light": {
                "day": "Bright warm daylight from the side window on the LEFT is the key. A white COLOR BOUNCE from the lace tablecloth lifts under his chin, with a faint warm red bounce from the pot of sauce. A soft room fill. True contact shadows of his hands, the plates and the glasses on the cloth.",
            },
            "sfx": "cutlery on plates, a family murmur off-frame with no clear words, a chair scraping, a glass set down on the table",
        },
        "stoop": {
            "file": "locations/3-stoop.jpg",
            "scene": "the brownstone front stoop of an old Brooklyn rowhouse at golden hour in autumn: worn brownstone steps, a black iron handrail, a folding lawn chair on the top step, a potted orange chrysanthemum, fallen yellow leaves, generic parked cars softly blurred with no plates",
            "light": {
                "golden": "Warm low golden-hour sun from the RIGHT is the key, with long shadows. A warm brownstone COLOR BOUNCE from the steps and the facade onto his shadow side. A cool sky fill from above-left. True contact shadows where he sits on the step and under his hands.",
            },
            "sfx": "dry leaves skittering on the pavement, a car door far down the street, a dog barking once, wind in the street trees",
            "stable": True,
        },
    },
}

# Camera setups: (name for the TOP PRIORITY list, full camera paragraph).
def camera_text(kind, c, detail):
    n = CHARS[c]["name"]
    comp = CHARS[c]["companion_short"]
    his = CHARS[c]["his"]
    if kind == "propped":
        return (
            f"Camera movement (CRITICAL, casually propped and alive): the phone is PROPPED against {detail}. "
            "The take opens with one soft settle-wobble as the phone finds its lean. Then the frame locks with a slight casual "
            "tilt, subtle sensor breathing and one autofocus breath. No tripod steadiness, no pans, no zooms: the frame feels "
            "placed by a human in five seconds, not by a crew. One take, no cuts. 9:16 vertical."
        )
    if kind == "companion":
        return (
            f"Camera movement (CRITICAL, handheld by {comp}, alive): {comp} holds the phone {detail}. Natural standing or "
            "sitting micro-sway, one small human reframe mid-take, one tiny step-adjust. "
            f"{comp} is never in frame and never heard. No gimbal smoothness, no zooms. One take, no cuts. 9:16 vertical."
        )
    if kind == "selfie":
        return (
            f"Camera movement (CRITICAL, handheld selfie): {n} holds the phone {detail}. Mild front-camera wide distortion, "
            f"a gentle hand bob with {his} breathing and gestures. Any angle change comes only from {n} raising or lowering "
            "the phone, never from cuts. One take, no cuts. 9:16 vertical."
        )
    if kind == "mounted":
        return (
            f"Camera movement (CRITICAL, mounted in the van): the phone sits in a cheap clip mount {detail}. Locked framing, but it "
            "carries the parked van's true micro-movement: the cab rocks very slightly when he shifts his weight, and wind gusts "
            "nudge it. No tripod steadiness, no pans, no zooms. One take, no cuts. 9:16 vertical."
        )
    raise ValueError(kind)

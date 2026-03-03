import type { EnvironmentCategory, EnvironmentSetting } from '../types/environment-builder';

/** Top-level environment category options */
export const ENVIRONMENT_CATEGORIES: { id: EnvironmentCategory; labelKey: string; emoji: string }[] = [
  { id: 'indoor', labelKey: 'envBuilder.category.indoor', emoji: '\u{1F3E0}' },
  { id: 'outdoor', labelKey: 'envBuilder.category.outdoor', emoji: '\u{1F333}' },
  { id: 'urban', labelKey: 'envBuilder.category.urban', emoji: '\u{1F3D9}\uFE0F' },
  { id: 'nature', labelKey: 'envBuilder.category.nature', emoji: '\u{1F3DE}\uFE0F' },
  { id: 'studio', labelKey: 'envBuilder.category.studio', emoji: '\u{1F3AC}' },
  { id: 'fantasy', labelKey: 'envBuilder.category.fantasy', emoji: '\u{1FA84}' },
  { id: 'sci-fi', labelKey: 'envBuilder.category.sci-fi', emoji: '\u{1F680}' },
  { id: 'abstract', labelKey: 'envBuilder.category.abstract', emoji: '\u{1F300}' },
];

/**
 * Returns the environment settings that belong to a given category.
 */
export function getSettingsForCategory(category: EnvironmentCategory): EnvironmentSetting[] {
  return ENVIRONMENT_SETTINGS.filter((s) => s.category === category);
}

/** All environment setting presets, organized by category (~55 total, 6-8 per category) */
export const ENVIRONMENT_SETTINGS: EnvironmentSetting[] = [
  // ── Indoor (8) ──────────────────────────────────────
  {
    id: 'living-room',
    labelKey: 'envBuilder.setting.living-room',
    category: 'indoor',
    emoji: '\u{1F6CB}\uFE0F',
    promptFragment: 'cozy living room interior, plush sofa, warm ambient lighting, wooden floor, tasteful decor, potted plants',
  },
  {
    id: 'kitchen',
    labelKey: 'envBuilder.setting.kitchen',
    category: 'indoor',
    emoji: '\u{1F373}',
    promptFragment: 'modern kitchen interior, marble countertop, stainless steel appliances, pendant lighting, clean minimalist design',
  },
  {
    id: 'bedroom',
    labelKey: 'envBuilder.setting.bedroom',
    category: 'indoor',
    emoji: '\u{1F6CF}\uFE0F',
    promptFragment: 'comfortable bedroom, soft bed with pillows, warm bedside lamp, curtained window, peaceful and intimate atmosphere',
  },
  {
    id: 'office',
    labelKey: 'envBuilder.setting.office',
    category: 'indoor',
    emoji: '\u{1F4BC}',
    promptFragment: 'modern office space, desk with monitor, ergonomic chair, bookshelves, large window with city view, professional environment',
  },
  {
    id: 'restaurant',
    labelKey: 'envBuilder.setting.restaurant',
    category: 'indoor',
    emoji: '\u{1F37D}\uFE0F',
    promptFragment: 'elegant restaurant interior, white tablecloth dining table, candle centerpiece, wine glasses, warm ambient lighting, fine dining atmosphere',
  },
  {
    id: 'cafe',
    labelKey: 'envBuilder.setting.cafe',
    category: 'indoor',
    emoji: '\u2615',
    promptFragment: 'cozy cafe interior, exposed brick walls, wooden tables, espresso machine, warm pendant lights, inviting and relaxed vibe',
  },
  {
    id: 'library',
    labelKey: 'envBuilder.setting.library',
    category: 'indoor',
    emoji: '\u{1F4DA}',
    promptFragment: 'grand library interior, towering bookshelves, reading desks, warm reading lamps, ornate architecture, quiet scholarly atmosphere',
  },
  {
    id: 'gym',
    labelKey: 'envBuilder.setting.gym',
    category: 'indoor',
    emoji: '\u{1F4AA}',
    promptFragment: 'modern gym interior, weight racks, exercise machines, rubber floor, bright overhead lighting, motivational energetic space',
  },

  // ── Outdoor (6) ─────────────────────────────────────
  {
    id: 'garden',
    labelKey: 'envBuilder.setting.garden',
    category: 'outdoor',
    emoji: '\u{1F33B}',
    promptFragment: 'lush garden setting, blooming flowers, green hedges, stone pathway, garden bench, dappled sunlight through trees',
  },
  {
    id: 'park',
    labelKey: 'envBuilder.setting.park',
    category: 'outdoor',
    emoji: '\u{1F3DE}\uFE0F',
    promptFragment: 'public park, green lawn, large shade trees, walking path, park bench, open sky, people in the distance',
  },
  {
    id: 'rooftop',
    labelKey: 'envBuilder.setting.rooftop',
    category: 'outdoor',
    emoji: '\u{1F307}',
    promptFragment: 'urban rooftop terrace, panoramic city skyline view, string lights, modern outdoor furniture, open sky above',
  },
  {
    id: 'balcony',
    labelKey: 'envBuilder.setting.balcony',
    category: 'outdoor',
    emoji: '\u{1F3E2}',
    promptFragment: 'apartment balcony, railing with potted plants, city or nature view beyond, small table and chair, open air',
  },
  {
    id: 'courtyard',
    labelKey: 'envBuilder.setting.courtyard',
    category: 'outdoor',
    emoji: '\u26F2',
    promptFragment: 'stone courtyard, central fountain, arched colonnades, climbing ivy on walls, Mediterranean architecture feel',
  },
  {
    id: 'patio',
    labelKey: 'envBuilder.setting.patio',
    category: 'outdoor',
    emoji: '\u2600\uFE0F',
    promptFragment: 'backyard patio, wooden deck, outdoor dining table, string lights overhead, barbecue grill, relaxed outdoor living',
  },

  // ── Urban (7) ───────────────────────────────────────
  {
    id: 'city-street',
    labelKey: 'envBuilder.setting.city-street',
    category: 'urban',
    emoji: '\u{1F6E3}\uFE0F',
    promptFragment: 'busy city street, tall buildings on both sides, crosswalks, traffic lights, pedestrians walking, urban energy',
  },
  {
    id: 'alleyway',
    labelKey: 'envBuilder.setting.alleyway',
    category: 'urban',
    emoji: '\u{1F303}',
    promptFragment: 'narrow urban alleyway, brick walls, fire escapes, dumpsters, moody overhead light, gritty atmospheric feel',
  },
  {
    id: 'subway-station',
    labelKey: 'envBuilder.setting.subway-station',
    category: 'urban',
    emoji: '\u{1F687}',
    promptFragment: 'underground subway station, tiled walls, platform edge, fluorescent lighting, train arriving, commuters waiting',
  },
  {
    id: 'downtown-plaza',
    labelKey: 'envBuilder.setting.downtown-plaza',
    category: 'urban',
    emoji: '\u{1F3DB}\uFE0F',
    promptFragment: 'downtown plaza, open public square, modern architecture, water feature, benches, commercial buildings surrounding',
  },
  {
    id: 'bridge',
    labelKey: 'envBuilder.setting.bridge',
    category: 'urban',
    emoji: '\u{1F309}',
    promptFragment: 'city bridge, steel cables or stone arches, river below, city skyline in background, dramatic perspective',
  },
  {
    id: 'parking-garage',
    labelKey: 'envBuilder.setting.parking-garage',
    category: 'urban',
    emoji: '\u{1F697}',
    promptFragment: 'concrete parking garage, rows of parked cars, fluorescent tube lighting, ramps, industrial urban feel',
  },
  {
    id: 'night-market',
    labelKey: 'envBuilder.setting.night-market',
    category: 'urban',
    emoji: '\u{1F3EE}',
    promptFragment: 'vibrant night market, colorful food stalls, hanging lanterns, neon signs, crowded walkways, lively street food atmosphere',
  },

  // ── Nature (7) ──────────────────────────────────────
  {
    id: 'forest',
    labelKey: 'envBuilder.setting.forest',
    category: 'nature',
    emoji: '\u{1F332}',
    promptFragment: 'dense forest, tall pine and oak trees, moss-covered ground, sunlight filtering through canopy, natural woodland path',
  },
  {
    id: 'beach',
    labelKey: 'envBuilder.setting.beach',
    category: 'nature',
    emoji: '\u{1F3D6}\uFE0F',
    promptFragment: 'sandy beach, gentle ocean waves, clear blue water, seashells, driftwood, expansive horizon, coastal breeze',
  },
  {
    id: 'mountain',
    labelKey: 'envBuilder.setting.mountain',
    category: 'nature',
    emoji: '\u26F0\uFE0F',
    promptFragment: 'mountain peak, rocky terrain, snow-capped summit, panoramic valley view, thin clouds, majestic alpine landscape',
  },
  {
    id: 'lake',
    labelKey: 'envBuilder.setting.lake',
    category: 'nature',
    emoji: '\u{1F4A7}',
    promptFragment: 'serene lake, calm reflective water surface, surrounding trees mirrored in water, distant mountains, peaceful tranquility',
  },
  {
    id: 'desert',
    labelKey: 'envBuilder.setting.desert',
    category: 'nature',
    emoji: '\u{1F3DC}\uFE0F',
    promptFragment: 'vast desert landscape, golden sand dunes, clear blue sky, heat shimmer, sparse desert vegetation, endless horizon',
  },
  {
    id: 'waterfall',
    labelKey: 'envBuilder.setting.waterfall',
    category: 'nature',
    emoji: '\u{1F4A6}',
    promptFragment: 'majestic waterfall, cascading water over rocks, mist rising, lush green vegetation, rainbow in the spray, powerful natural beauty',
  },
  {
    id: 'meadow',
    labelKey: 'envBuilder.setting.meadow',
    category: 'nature',
    emoji: '\u{1F33C}',
    promptFragment: 'open meadow, wildflowers in bloom, tall grass swaying, rolling hills, butterflies, bright open sky',
  },

  // ── Studio (6) ──────────────────────────────────────
  {
    id: 'white-seamless',
    labelKey: 'envBuilder.setting.white-seamless',
    category: 'studio',
    emoji: '\u2B1C',
    promptFragment: 'clean white seamless studio backdrop, infinite white background, professional photography studio, even studio lighting',
  },
  {
    id: 'black-void',
    labelKey: 'envBuilder.setting.black-void',
    category: 'studio',
    emoji: '\u2B1B',
    promptFragment: 'pure black studio backdrop, dramatic dark background, single spotlight, void-like darkness, high contrast',
  },
  {
    id: 'colored-backdrop',
    labelKey: 'envBuilder.setting.colored-backdrop',
    category: 'studio',
    emoji: '\u{1F7E6}',
    promptFragment: 'solid colored studio backdrop, vibrant flat color background, professional studio setup, clean and bold',
  },
  {
    id: 'product-stage',
    labelKey: 'envBuilder.setting.product-stage',
    category: 'studio',
    emoji: '\u{1F4F7}',
    promptFragment: 'product photography stage, glossy reflective surface, gradient background, rim lighting, commercial photography setup',
  },
  {
    id: 'green-screen',
    labelKey: 'envBuilder.setting.green-screen',
    category: 'studio',
    emoji: '\u{1F7E9}',
    promptFragment: 'green screen chroma key studio, bright green backdrop, professional film set lighting, camera equipment visible',
  },
  {
    id: 'film-set',
    labelKey: 'envBuilder.setting.film-set',
    category: 'studio',
    emoji: '\u{1F3AC}',
    promptFragment: 'professional film set, camera rigs, boom microphone, director chair, lighting equipment, movie production environment',
  },

  // ── Fantasy (7) ─────────────────────────────────────
  {
    id: 'enchanted-forest',
    labelKey: 'envBuilder.setting.enchanted-forest',
    category: 'fantasy',
    emoji: '\u2728',
    promptFragment: 'enchanted magical forest, glowing mushrooms, floating particles of light, ancient twisted trees, fairy lights, mystical fog',
  },
  {
    id: 'castle-throne',
    labelKey: 'envBuilder.setting.castle-throne',
    category: 'fantasy',
    emoji: '\u{1F3F0}',
    promptFragment: 'grand castle throne room, massive stone columns, ornate golden throne, red velvet carpet, stained glass windows, torchlight',
  },
  {
    id: 'dragon-lair',
    labelKey: 'envBuilder.setting.dragon-lair',
    category: 'fantasy',
    emoji: '\u{1F409}',
    promptFragment: 'dragon lair cave, massive cavern, piles of gold and jewels, glowing embers, stalactites, smoky atmospheric haze',
  },
  {
    id: 'floating-islands',
    labelKey: 'envBuilder.setting.floating-islands',
    category: 'fantasy',
    emoji: '\u{1F3DD}\uFE0F',
    promptFragment: 'floating islands in the sky, waterfalls pouring off edges into clouds, rope bridges between islands, lush vegetation, magical fantasy world',
  },
  {
    id: 'crystal-cave',
    labelKey: 'envBuilder.setting.crystal-cave',
    category: 'fantasy',
    emoji: '\u{1F48E}',
    promptFragment: 'crystal cave, enormous glowing crystals jutting from walls and ceiling, prismatic light refraction, underground wonder, magical mineral formations',
  },
  {
    id: 'ancient-ruins',
    labelKey: 'envBuilder.setting.ancient-ruins',
    category: 'fantasy',
    emoji: '\u{1F3DB}\uFE0F',
    promptFragment: 'ancient mystical ruins, crumbling stone temples, overgrown with vines, glowing runes carved into pillars, forgotten civilization',
  },
  {
    id: 'fairy-village',
    labelKey: 'envBuilder.setting.fairy-village',
    category: 'fantasy',
    emoji: '\u{1F9DA}',
    promptFragment: 'tiny fairy village, mushroom houses, miniature lanterns, dewdrop decorations, whimsical garden setting, magical miniature world',
  },

  // ── Sci-Fi (6) ──────────────────────────────────────
  {
    id: 'spaceship-bridge',
    labelKey: 'envBuilder.setting.spaceship-bridge',
    category: 'sci-fi',
    emoji: '\u{1F6F8}',
    promptFragment: 'spaceship command bridge, holographic displays, captain chair, panoramic viewport showing stars, sleek futuristic control panels',
  },
  {
    id: 'cyberpunk-street',
    labelKey: 'envBuilder.setting.cyberpunk-street',
    category: 'sci-fi',
    emoji: '\u{1F30C}',
    promptFragment: 'cyberpunk city street, neon signs in multiple languages, rain-slicked roads, holographic advertisements, dense urban futurism, Blade Runner aesthetic',
  },
  {
    id: 'space-station',
    labelKey: 'envBuilder.setting.space-station',
    category: 'sci-fi',
    emoji: '\u{1F6F0}\uFE0F',
    promptFragment: 'orbital space station interior, curved white corridors, large observation windows showing Earth below, zero-gravity elements, advanced technology',
  },
  {
    id: 'lab-futuristic',
    labelKey: 'envBuilder.setting.lab-futuristic',
    category: 'sci-fi',
    emoji: '\u{1F52C}',
    promptFragment: 'futuristic research laboratory, holographic data screens, robotic arms, specimen containers with glowing liquids, clean sterile high-tech environment',
  },
  {
    id: 'alien-planet',
    labelKey: 'envBuilder.setting.alien-planet',
    category: 'sci-fi',
    emoji: '\u{1FA90}',
    promptFragment: 'alien planet surface, unusual colored sky, exotic alien vegetation, strange rock formations, multiple moons visible, otherworldly landscape',
  },
  {
    id: 'mech-hangar',
    labelKey: 'envBuilder.setting.mech-hangar',
    category: 'sci-fi',
    emoji: '\u{1F6E0}\uFE0F',
    promptFragment: 'massive mech hangar, giant robot suits in maintenance bays, sparks from welding, industrial catwalks, heavy machinery, military sci-fi base',
  },

  // ── Abstract (6) ────────────────────────────────────
  {
    id: 'gradient-void',
    labelKey: 'envBuilder.setting.gradient-void',
    category: 'abstract',
    emoji: '\u{1F308}',
    promptFragment: 'smooth gradient background, soft color transition from warm to cool tones, ethereal empty space, dreamlike minimalist void',
  },
  {
    id: 'geometric-space',
    labelKey: 'envBuilder.setting.geometric-space',
    category: 'abstract',
    emoji: '\u{1F4D0}',
    promptFragment: 'abstract geometric space, floating 3D shapes, cubes and spheres, clean lines, mathematical precision, modern art environment',
  },
  {
    id: 'particle-field',
    labelKey: 'envBuilder.setting.particle-field',
    category: 'abstract',
    emoji: '\u2728',
    promptFragment: 'swirling particle field, thousands of glowing dots and light streaks, cosmic dust, ethereal energy patterns, dynamic motion blur',
  },
  {
    id: 'watercolor-wash',
    labelKey: 'envBuilder.setting.watercolor-wash',
    category: 'abstract',
    emoji: '\u{1F3A8}',
    promptFragment: 'watercolor wash background, soft bleeding paint textures, pastel color splashes, artistic painted canvas effect, impressionistic abstract',
  },
  {
    id: 'neon-grid',
    labelKey: 'envBuilder.setting.neon-grid',
    category: 'abstract',
    emoji: '\u{1F7E3}',
    promptFragment: 'retro neon grid, synthwave infinite plane, glowing magenta and cyan gridlines stretching to horizon, 80s retro-futuristic, vaporwave aesthetic',
  },
  {
    id: 'bokeh-lights',
    labelKey: 'envBuilder.setting.bokeh-lights',
    category: 'abstract',
    emoji: '\u{1F4A1}',
    promptFragment: 'soft bokeh lights background, out-of-focus circular light orbs, warm golden and cool blue tones, dreamy blurred atmosphere, shallow depth of field',
  },
];

/** Time of day options */
export const TIME_OF_DAY_OPTIONS: { id: string; labelKey: string; emoji: string; promptFragment: string }[] = [
  {
    id: 'dawn',
    labelKey: 'envBuilder.time.dawn',
    emoji: '\u{1F305}',
    promptFragment: 'dawn light, early morning first light, soft pink and purple sky, pre-sunrise glow on the horizon',
  },
  {
    id: 'morning',
    labelKey: 'envBuilder.time.morning',
    emoji: '\u{1F304}',
    promptFragment: 'bright morning light, fresh and clear atmosphere, warm sunlight streaming in, long soft shadows',
  },
  {
    id: 'noon',
    labelKey: 'envBuilder.time.noon',
    emoji: '\u2600\uFE0F',
    promptFragment: 'midday sun, high noon lighting, bright and even illumination, minimal shadows, vivid colors',
  },
  {
    id: 'afternoon',
    labelKey: 'envBuilder.time.afternoon',
    emoji: '\u{1F324}\uFE0F',
    promptFragment: 'afternoon light, warm directional sunlight, moderate shadows, pleasant daytime atmosphere',
  },
  {
    id: 'golden-hour',
    labelKey: 'envBuilder.time.golden-hour',
    emoji: '\u{1F31F}',
    promptFragment: 'golden hour lighting, warm orange and amber tones, long dramatic shadows, magical glowing backlight, rich warm colors',
  },
  {
    id: 'sunset',
    labelKey: 'envBuilder.time.sunset',
    emoji: '\u{1F307}',
    promptFragment: 'sunset sky, vibrant orange, red, and purple sky gradient, sun low on the horizon, dramatic silhouettes, romantic atmosphere',
  },
  {
    id: 'dusk',
    labelKey: 'envBuilder.time.dusk',
    emoji: '\u{1F306}',
    promptFragment: 'dusk twilight, deep blue and purple sky, last traces of light on horizon, street lights beginning to glow, serene transition',
  },
  {
    id: 'night',
    labelKey: 'envBuilder.time.night',
    emoji: '\u{1F303}',
    promptFragment: 'nighttime, dark sky with stars, moonlight casting silver glow, artificial city lights, dramatic nocturnal atmosphere',
  },
];

/** Weather condition options */
export const WEATHER_OPTIONS: { id: string; labelKey: string; emoji: string; promptFragment: string }[] = [
  {
    id: 'clear',
    labelKey: 'envBuilder.weather.clear',
    emoji: '\u2600\uFE0F',
    promptFragment: 'clear sky, no clouds, bright and crisp visibility, clean atmosphere',
  },
  {
    id: 'cloudy',
    labelKey: 'envBuilder.weather.cloudy',
    emoji: '\u2601\uFE0F',
    promptFragment: 'overcast sky, thick cloud cover, soft diffused light, muted tones, even illumination without harsh shadows',
  },
  {
    id: 'rainy',
    labelKey: 'envBuilder.weather.rainy',
    emoji: '\u{1F327}\uFE0F',
    promptFragment: 'rain falling, wet glistening surfaces, puddles reflecting light, droplets in the air, moody and atmospheric',
  },
  {
    id: 'foggy',
    labelKey: 'envBuilder.weather.foggy',
    emoji: '\u{1F32B}\uFE0F',
    promptFragment: 'dense fog, low visibility, silhouettes fading into mist, mysterious and ethereal atmosphere, diffused light',
  },
  {
    id: 'snowy',
    labelKey: 'envBuilder.weather.snowy',
    emoji: '\u2744\uFE0F',
    promptFragment: 'snowfall, white snow covering surfaces, snowflakes in the air, cold winter atmosphere, frosty and serene',
  },
  {
    id: 'stormy',
    labelKey: 'envBuilder.weather.stormy',
    emoji: '\u26C8\uFE0F',
    promptFragment: 'dramatic storm, dark thunderclouds, lightning strikes, intense wind, turbulent dramatic sky, powerful elemental energy',
  },
  {
    id: 'windy',
    labelKey: 'envBuilder.weather.windy',
    emoji: '\u{1F32C}\uFE0F',
    promptFragment: 'strong wind blowing, hair and clothes billowing, leaves swirling in the air, dynamic movement in the scene',
  },
];

/** Lighting style options */
export const LIGHTING_OPTIONS: { id: string; labelKey: string; promptFragment: string }[] = [
  {
    id: 'natural',
    labelKey: 'envBuilder.lighting.natural',
    promptFragment: 'natural lighting, realistic ambient light, true-to-life illumination',
  },
  {
    id: 'dramatic',
    labelKey: 'envBuilder.lighting.dramatic',
    promptFragment: 'dramatic lighting, strong directional light, deep shadows, high contrast chiaroscuro, theatrical intensity',
  },
  {
    id: 'soft-diffused',
    labelKey: 'envBuilder.lighting.soft-diffused',
    promptFragment: 'soft diffused lighting, gentle even illumination, no harsh shadows, flattering beauty lighting, soft box effect',
  },
  {
    id: 'golden-warm',
    labelKey: 'envBuilder.lighting.golden-warm',
    promptFragment: 'warm golden lighting, amber tones, cozy inviting warmth, incandescent glow, rich warm color temperature',
  },
  {
    id: 'neon-glow',
    labelKey: 'envBuilder.lighting.neon-glow',
    promptFragment: 'neon glow lighting, vibrant cyan and magenta neon reflections, electric colors on skin and surfaces, futuristic club aesthetic',
  },
  {
    id: 'candlelight',
    labelKey: 'envBuilder.lighting.candlelight',
    promptFragment: 'candlelight, warm flickering flame illumination, soft orange glow, intimate and romantic, gentle dancing shadows',
  },
  {
    id: 'studio-3point',
    labelKey: 'envBuilder.lighting.studio-3point',
    promptFragment: 'professional three-point lighting setup, key light, fill light, and rim light, studio portrait quality, clean and flattering',
  },
  {
    id: 'silhouette',
    labelKey: 'envBuilder.lighting.silhouette',
    promptFragment: 'silhouette lighting, strong backlight, subject as dark outline against bright background, dramatic contour, artistic shadow',
  },
  {
    id: 'volumetric',
    labelKey: 'envBuilder.lighting.volumetric',
    promptFragment: 'volumetric lighting, visible light rays, god rays streaming through gaps, atmospheric fog catching light beams, cinematic depth',
  },
  {
    id: 'moonlit',
    labelKey: 'envBuilder.lighting.moonlit',
    promptFragment: 'moonlit scene, cool blue-silver moonlight, subtle shadows, nocturnal ambiance, serene and contemplative night lighting',
  },
];

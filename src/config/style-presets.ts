export interface VisualStylePreset {
  id: string;
  labelKey: string;
  emoji: string;
  promptFragment: string;
}

export const VISUAL_STYLE_PRESETS: VisualStylePreset[] = [
  {
    id: 'cinematic',
    labelKey: 'wizard.styles.cinematic',
    emoji: '🎬',
    promptFragment:
      'Cinematic photography style: film grain texture, anamorphic lens, dramatic chiaroscuro lighting, teal-orange color grading, shallow depth of field, shot on ARRI Alexa, professional film production look',
  },
  {
    id: 'fantasy-epic',
    labelKey: 'wizard.styles.fantasyEpic',
    emoji: '⚔️',
    promptFragment:
      'Fantasy epic style: magical glowing effects, ornate golden armor and jewelry, mystical forest/castle environments, ethereal lighting with volumetric fog, enchanted atmosphere, high fantasy character design like a video game cinematic',
  },
  {
    id: 'cute-3d',
    labelKey: 'wizard.styles.cute3d',
    emoji: '🧸',
    promptFragment:
      'Cute 3D character style: Pixar/Disney-inspired 3D render, soft rounded features, big expressive eyes, vibrant saturated colors, smooth plastic-like skin texture, playful lighting, adorable proportions',
  },
  {
    id: 'sci-fi',
    labelKey: 'wizard.styles.sciFi',
    emoji: '🚀',
    promptFragment:
      'Sci-Fi concept art style: futuristic technology, neon holographic UI elements, cyberpunk lighting with cyan and magenta, metallic surfaces, advanced armor/clothing, space station or dystopian city environment',
  },
  {
    id: 'anime',
    labelKey: 'wizard.styles.anime',
    emoji: '🌸',
    promptFragment:
      'Anime style: cel-shading with clean outlines, vibrant saturated colors, dynamic poses, expressive anime eyes, speed lines for motion, dramatic backlit scenes, Studio Ghibli / Makoto Shinkai quality',
  },
  {
    id: 'film-grain',
    labelKey: 'wizard.styles.filmGrain',
    emoji: '📽️',
    promptFragment:
      'Film grain vintage style: heavy analog film grain, warm desaturated tones, 70s/80s color palette, soft focus edges, nostalgic atmosphere, retro fashion and lighting, Kodak Portra film look',
  },
  {
    id: 'pop-art',
    labelKey: 'wizard.styles.popArt',
    emoji: '🎨',
    promptFragment:
      'Pop art style: bold flat colors, Ben-Day dots pattern, thick black outlines, comic book aesthetic, high contrast, Warhol/Lichtenstein inspired, vibrant primary colors, graphic novel quality',
  },
  {
    id: 'watercolor',
    labelKey: 'wizard.styles.watercolor',
    emoji: '🖌️',
    promptFragment:
      'Watercolor painting style: soft bleeding edges, painted texture on paper, gentle color washes, visible brush strokes, impressionistic details, delicate pastel palette, hand-painted artistic quality',
  },
  {
    id: 'realistic',
    labelKey: 'wizard.styles.realistic',
    emoji: '📸',
    promptFragment:
      'Photorealistic style: natural lighting, accurate skin textures and pores, DSLR photograph quality at f/2.8, subtle bokeh, real-world environments, no stylization, documentary-like authenticity',
  },
];

export type VisualStyleId = (typeof VISUAL_STYLE_PRESETS)[number]['id'];

export const SHOT_COUNT_OPTIONS = [
  { id: '4-6' as const, labelKey: 'wizard.shotCounts.short', min: 4, max: 6 },
  { id: '6-8' as const, labelKey: 'wizard.shotCounts.medium', min: 6, max: 8 },
  { id: '8-12' as const, labelKey: 'wizard.shotCounts.long', min: 8, max: 12 },
];

export type ShotCountRange = '4-6' | '6-8' | '8-12';

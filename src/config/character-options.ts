import type { CharacterOption } from '../types/character-builder';

/** Character type options */
export const CHARACTER_TYPES: CharacterOption[] = [
  {
    id: 'human',
    labelKey: 'charBuilder.type.human',
    emoji: '\u{1F9D1}',
    promptFragment: 'realistic human person, photorealistic skin texture, natural proportions',
  },
  {
    id: 'cartoon',
    labelKey: 'charBuilder.type.cartoon',
    emoji: '\u{1F3A8}',
    promptFragment: 'cartoon character, stylized proportions, bold outlines, vibrant colors, animated style',
  },
  {
    id: 'anime',
    labelKey: 'charBuilder.type.anime',
    emoji: '\u{1F338}',
    promptFragment: 'anime character, cel-shaded, large expressive eyes, clean linework, Japanese animation style',
  },
  {
    id: 'animal',
    labelKey: 'charBuilder.type.animal',
    emoji: '\u{1F43E}',
    promptFragment: 'anthropomorphic animal character, expressive face, standing upright, detailed fur texture',
  },
  {
    id: 'fantasy',
    labelKey: 'charBuilder.type.fantasy',
    emoji: '\u{1FA84}',
    promptFragment: 'fantasy character, magical aura, ethereal features, enchanted appearance, mythical being',
  },
  {
    id: 'robot',
    labelKey: 'charBuilder.type.robot',
    emoji: '\u{1F916}',
    promptFragment: 'robotic character, metallic body, glowing LED accents, mechanical joints, futuristic android design',
  },
];

/** Gender options */
export const GENDERS: CharacterOption[] = [
  {
    id: 'male',
    labelKey: 'charBuilder.gender.male',
    promptFragment: 'male, masculine features, broad shoulders',
  },
  {
    id: 'female',
    labelKey: 'charBuilder.gender.female',
    promptFragment: 'female, feminine features, soft jawline',
  },
  {
    id: 'neutral',
    labelKey: 'charBuilder.gender.neutral',
    promptFragment: 'androgynous, gender-neutral features, balanced proportions',
  },
];

/** Age range options */
export const AGE_RANGES: CharacterOption[] = [
  {
    id: 'child',
    labelKey: 'charBuilder.age.child',
    promptFragment: 'young child, approximately 6-10 years old, small stature, youthful round face',
  },
  {
    id: 'teen',
    labelKey: 'charBuilder.age.teen',
    promptFragment: 'teenager, approximately 14-17 years old, youthful appearance',
  },
  {
    id: 'young-adult',
    labelKey: 'charBuilder.age.young-adult',
    promptFragment: 'young adult, approximately 22-30 years old, fresh and vibrant look',
  },
  {
    id: 'adult',
    labelKey: 'charBuilder.age.adult',
    promptFragment: 'mature adult, approximately 35-50 years old, defined facial features',
  },
  {
    id: 'elderly',
    labelKey: 'charBuilder.age.elderly',
    promptFragment: 'elderly person, approximately 65+ years old, wrinkles, wisdom in expression, silver features',
  },
];

/** Body type options */
export const BODY_TYPES: CharacterOption[] = [
  {
    id: 'slim',
    labelKey: 'charBuilder.body.slim',
    promptFragment: 'slim build, lean figure, slender frame',
  },
  {
    id: 'average',
    labelKey: 'charBuilder.body.average',
    promptFragment: 'average build, normal proportions, balanced figure',
  },
  {
    id: 'athletic',
    labelKey: 'charBuilder.body.athletic',
    promptFragment: 'athletic build, toned muscles, fit physique, strong posture',
  },
  {
    id: 'curvy',
    labelKey: 'charBuilder.body.curvy',
    promptFragment: 'curvy build, full figure, pronounced curves, voluptuous silhouette',
  },
  {
    id: 'stocky',
    labelKey: 'charBuilder.body.stocky',
    promptFragment: 'stocky build, broad and solid frame, wide shoulders, powerful stature',
  },
  {
    id: 'petite',
    labelKey: 'charBuilder.body.petite',
    promptFragment: 'petite build, small and delicate frame, compact proportions',
  },
];

/** Hair style options */
export const HAIR_STYLES: CharacterOption[] = [
  {
    id: 'short-straight',
    labelKey: 'charBuilder.hairStyle.short-straight',
    promptFragment: 'short straight hair, neatly trimmed, clean cut',
  },
  {
    id: 'short-curly',
    labelKey: 'charBuilder.hairStyle.short-curly',
    promptFragment: 'short curly hair, tight curls, voluminous texture',
  },
  {
    id: 'medium-wavy',
    labelKey: 'charBuilder.hairStyle.medium-wavy',
    promptFragment: 'medium-length wavy hair, natural waves flowing to shoulders',
  },
  {
    id: 'long-straight',
    labelKey: 'charBuilder.hairStyle.long-straight',
    promptFragment: 'long straight hair, sleek and flowing past shoulders, silky texture',
  },
  {
    id: 'long-curly',
    labelKey: 'charBuilder.hairStyle.long-curly',
    promptFragment: 'long curly hair, cascading ringlets, voluminous and flowing',
  },
  {
    id: 'bob',
    labelKey: 'charBuilder.hairStyle.bob',
    promptFragment: 'bob haircut, chin-length, clean lines, modern and sharp',
  },
  {
    id: 'ponytail',
    labelKey: 'charBuilder.hairStyle.ponytail',
    promptFragment: 'hair pulled back in a ponytail, tied neatly, practical style',
  },
  {
    id: 'bun',
    labelKey: 'charBuilder.hairStyle.bun',
    promptFragment: 'hair styled in a bun, neatly pulled up, elegant updo',
  },
  {
    id: 'braids',
    labelKey: 'charBuilder.hairStyle.braids',
    promptFragment: 'braided hair, intricate braids, detailed woven pattern',
  },
  {
    id: 'buzz',
    labelKey: 'charBuilder.hairStyle.buzz',
    promptFragment: 'buzz cut, very short cropped hair, military-style close trim',
  },
  {
    id: 'afro',
    labelKey: 'charBuilder.hairStyle.afro',
    promptFragment: 'afro hairstyle, big and natural, voluminous rounded shape, textured curls',
  },
  {
    id: 'bald',
    labelKey: 'charBuilder.hairStyle.bald',
    promptFragment: 'bald head, clean-shaven scalp, smooth head',
  },
];

/** Hair color options with color hex values */
export const HAIR_COLORS: CharacterOption[] = [
  {
    id: 'black',
    labelKey: 'charBuilder.hairColor.black',
    colorHex: '#1a1a1a',
    promptFragment: 'jet black hair',
  },
  {
    id: 'dark-brown',
    labelKey: 'charBuilder.hairColor.dark-brown',
    colorHex: '#3b2314',
    promptFragment: 'dark brown hair, rich chocolate brown',
  },
  {
    id: 'light-brown',
    labelKey: 'charBuilder.hairColor.light-brown',
    colorHex: '#8b6f47',
    promptFragment: 'light brown hair, warm chestnut tones',
  },
  {
    id: 'blonde',
    labelKey: 'charBuilder.hairColor.blonde',
    colorHex: '#f0d58c',
    promptFragment: 'blonde hair, golden highlights',
  },
  {
    id: 'red',
    labelKey: 'charBuilder.hairColor.red',
    colorHex: '#a52a2a',
    promptFragment: 'deep red hair, auburn tones',
  },
  {
    id: 'ginger',
    labelKey: 'charBuilder.hairColor.ginger',
    colorHex: '#d4652f',
    promptFragment: 'ginger hair, bright copper-orange color',
  },
  {
    id: 'gray',
    labelKey: 'charBuilder.hairColor.gray',
    colorHex: '#9e9e9e',
    promptFragment: 'gray hair, distinguished silver-gray',
  },
  {
    id: 'white',
    labelKey: 'charBuilder.hairColor.white',
    colorHex: '#f5f5f5',
    promptFragment: 'white hair, pure snow-white color',
  },
  {
    id: 'blue',
    labelKey: 'charBuilder.hairColor.blue',
    colorHex: '#4a90d9',
    promptFragment: 'vibrant blue hair, electric blue dyed color',
  },
  {
    id: 'pink',
    labelKey: 'charBuilder.hairColor.pink',
    colorHex: '#e991b8',
    promptFragment: 'pink hair, soft pastel pink dyed color',
  },
  {
    id: 'purple',
    labelKey: 'charBuilder.hairColor.purple',
    colorHex: '#7b4fa0',
    promptFragment: 'purple hair, deep violet dyed color',
  },
];

/** Skin tone options with color hex values */
export const SKIN_TONES: CharacterOption[] = [
  {
    id: 'very-light',
    labelKey: 'charBuilder.skin.very-light',
    colorHex: '#fde7d6',
    promptFragment: 'very light porcelain skin, fair complexion',
  },
  {
    id: 'light',
    labelKey: 'charBuilder.skin.light',
    colorHex: '#f5d0b0',
    promptFragment: 'light skin, fair complexion with warm undertones',
  },
  {
    id: 'medium-light',
    labelKey: 'charBuilder.skin.medium-light',
    colorHex: '#e8b88a',
    promptFragment: 'medium-light skin, warm beige complexion',
  },
  {
    id: 'medium',
    labelKey: 'charBuilder.skin.medium',
    colorHex: '#c8956c',
    promptFragment: 'medium skin tone, warm olive complexion',
  },
  {
    id: 'medium-dark',
    labelKey: 'charBuilder.skin.medium-dark',
    colorHex: '#a67452',
    promptFragment: 'medium-dark skin, warm caramel complexion',
  },
  {
    id: 'dark',
    labelKey: 'charBuilder.skin.dark',
    colorHex: '#7a5238',
    promptFragment: 'dark brown skin, rich deep complexion',
  },
  {
    id: 'very-dark',
    labelKey: 'charBuilder.skin.very-dark',
    colorHex: '#4a3228',
    promptFragment: 'very dark skin, deep ebony complexion',
  },
];

/** Clothing style options */
export const CLOTHING_STYLES: CharacterOption[] = [
  {
    id: 'casual',
    labelKey: 'charBuilder.clothing.casual',
    promptFragment: 'casual everyday clothing, relaxed fit, comfortable modern attire',
  },
  {
    id: 'formal',
    labelKey: 'charBuilder.clothing.formal',
    promptFragment: 'formal attire, well-tailored suit or dress, professional and polished look',
  },
  {
    id: 'streetwear',
    labelKey: 'charBuilder.clothing.streetwear',
    promptFragment: 'streetwear fashion, oversized hoodie, sneakers, urban trendy style',
  },
  {
    id: 'elegant',
    labelKey: 'charBuilder.clothing.elegant',
    promptFragment: 'elegant clothing, flowing fabrics, refined and sophisticated style, luxury fashion',
  },
  {
    id: 'sporty',
    labelKey: 'charBuilder.clothing.sporty',
    promptFragment: 'sporty athletic wear, track suit or gym clothes, active lifestyle look',
  },
  {
    id: 'traditional',
    labelKey: 'charBuilder.clothing.traditional',
    promptFragment: 'traditional cultural clothing, ornate ethnic garments, heritage-inspired attire',
  },
  {
    id: 'fantasy-armor',
    labelKey: 'charBuilder.clothing.fantasy-armor',
    promptFragment: 'fantasy armor, ornate plate armor with engravings, medieval warrior gear, epic battle-ready look',
  },
  {
    id: 'sci-fi-suit',
    labelKey: 'charBuilder.clothing.sci-fi-suit',
    promptFragment: 'futuristic sci-fi suit, sleek bodysuit with glowing accents, high-tech wearable technology',
  },
  {
    id: 'uniform',
    labelKey: 'charBuilder.clothing.uniform',
    promptFragment: 'professional uniform, crisp and clean, institutional or occupational clothing',
  },
];

/** Facial feature options (multi-select) */
export const FACIAL_FEATURES: CharacterOption[] = [
  {
    id: 'glasses',
    labelKey: 'charBuilder.features.glasses',
    promptFragment: 'wearing eyeglasses, clear lens glasses',
  },
  {
    id: 'sunglasses',
    labelKey: 'charBuilder.features.sunglasses',
    promptFragment: 'wearing sunglasses, tinted lenses, cool shades',
  },
  {
    id: 'beard',
    labelKey: 'charBuilder.features.beard',
    promptFragment: 'full beard, well-groomed facial hair',
  },
  {
    id: 'mustache',
    labelKey: 'charBuilder.features.mustache',
    promptFragment: 'mustache, groomed upper lip facial hair',
  },
  {
    id: 'freckles',
    labelKey: 'charBuilder.features.freckles',
    promptFragment: 'freckles scattered across cheeks and nose',
  },
  {
    id: 'scar',
    labelKey: 'charBuilder.features.scar',
    promptFragment: 'facial scar, visible mark across the face, battle-worn appearance',
  },
  {
    id: 'tattoo',
    labelKey: 'charBuilder.features.tattoo',
    promptFragment: 'facial tattoo, decorative ink markings on face',
  },
  {
    id: 'earrings',
    labelKey: 'charBuilder.features.earrings',
    promptFragment: 'wearing earrings, decorative ear jewelry',
  },
  {
    id: 'headband',
    labelKey: 'charBuilder.features.headband',
    promptFragment: 'wearing a headband across the forehead',
  },
];

/** Expression options */
export const EXPRESSIONS: CharacterOption[] = [
  {
    id: 'neutral',
    labelKey: 'charBuilder.expression.neutral',
    promptFragment: 'neutral expression, calm and composed face, relaxed features',
  },
  {
    id: 'smiling',
    labelKey: 'charBuilder.expression.smiling',
    promptFragment: 'warm smile, friendly expression, genuine happiness on face',
  },
  {
    id: 'laughing',
    labelKey: 'charBuilder.expression.laughing',
    promptFragment: 'laughing heartily, open mouth smile, joyful expression, eyes crinkled with laughter',
  },
  {
    id: 'serious',
    labelKey: 'charBuilder.expression.serious',
    promptFragment: 'serious expression, intense focused gaze, determined look',
  },
  {
    id: 'surprised',
    labelKey: 'charBuilder.expression.surprised',
    promptFragment: 'surprised expression, wide eyes, raised eyebrows, open mouth in shock',
  },
  {
    id: 'confident',
    labelKey: 'charBuilder.expression.confident',
    promptFragment: 'confident expression, slight smirk, self-assured powerful gaze',
  },
  {
    id: 'mysterious',
    labelKey: 'charBuilder.expression.mysterious',
    promptFragment: 'mysterious expression, enigmatic half-smile, knowing look in the eyes',
  },
  {
    id: 'playful',
    labelKey: 'charBuilder.expression.playful',
    promptFragment: 'playful expression, mischievous grin, fun and cheeky attitude',
  },
];

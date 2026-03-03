import type { CharacterDefinition } from '../types/character-builder';
import type { EnvironmentDefinition } from '../types/environment-builder';
import {
  CHARACTER_TYPES,
  GENDERS,
  AGE_RANGES,
  BODY_TYPES,
  HAIR_STYLES,
  HAIR_COLORS,
  SKIN_TONES,
  CLOTHING_STYLES,
  FACIAL_FEATURES,
  EXPRESSIONS,
} from '../config/character-options';
import {
  ENVIRONMENT_SETTINGS,
  TIME_OF_DAY_OPTIONS,
  WEATHER_OPTIONS,
  LIGHTING_OPTIONS,
} from '../config/environment-presets';
import { VISUAL_STYLE_PRESETS } from '../config/style-presets';

/** Look up promptFragment from an options array by id */
function lookup(
  options: { id: string; promptFragment: string }[],
  id: string,
): string {
  return options.find((o) => o.id === id)?.promptFragment ?? '';
}

/**
 * Convert structured CharacterDefinition into a text prompt for image generation.
 * Follows Flux prompt best practices: subject first, then identity details, then clothing.
 */
export function buildCharacterPrompt(char: CharacterDefinition): string {
  const parts: string[] = [];

  // Subject: age + gender + type
  const type = lookup(CHARACTER_TYPES, char.type);
  const gender = lookup(GENDERS, char.gender);
  const age = lookup(AGE_RANGES, char.ageRange);
  const body = lookup(BODY_TYPES, char.bodyType);

  const subjectParts = [age, gender, type].filter(Boolean);
  let subject = subjectParts.join(' ');
  if (body) subject += `, ${body} build`;
  parts.push(subject);

  // Skin tone
  const skin = lookup(SKIN_TONES, char.skinTone);
  if (skin) parts.push(skin);

  // Hair
  const hairColor = lookup(HAIR_COLORS, char.hairColor);
  const hairStyle = lookup(HAIR_STYLES, char.hairStyle);
  if (hairColor && hairStyle) {
    parts.push(`${hairColor}, ${hairStyle}`);
  } else if (hairColor) {
    parts.push(hairColor);
  } else if (hairStyle) {
    parts.push(hairStyle);
  }

  // Expression
  const expr = lookup(EXPRESSIONS, char.expression);
  if (expr) parts.push(expr);

  // Clothing
  const clothing = lookup(CLOTHING_STYLES, char.clothingStyle);
  if (clothing) parts.push(`wearing ${clothing}`);
  if (char.clothingDetails.trim()) parts.push(char.clothingDetails.trim());

  // Facial features / accessories
  const features = char.facialFeatures
    .map((f) => lookup(FACIAL_FEATURES, f))
    .filter(Boolean);
  if (features.length > 0) parts.push(features.join(', '));

  // Custom notes
  if (char.customNotes.trim()) parts.push(char.customNotes.trim());

  return parts.filter(Boolean).join(', ');
}

/**
 * Build a full reference-image prompt from character data + optional visual style.
 * Adds framing, quality, and studio boilerplate for Flux generation.
 */
export function buildCharacterReferencePrompt(
  char: CharacterDefinition,
  visualStyleId?: string,
): string {
  const characterDesc = buildCharacterPrompt(char);
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === visualStyleId);

  const parts: string[] = [characterDesc];
  if (stylePreset) parts.push(stylePreset.promptFragment);
  parts.push(
    'medium shot, facing camera, centered composition, looking at viewer',
  );
  parts.push('neutral background, studio lighting');
  parts.push('high detail, professional quality, 4K');
  parts.push('no text, no watermark, no frame, single character');

  return parts.join(', ');
}

/**
 * Convert structured EnvironmentDefinition into a text prompt for image generation.
 */
export function buildEnvironmentPrompt(env: EnvironmentDefinition): string {
  const parts: string[] = [];

  // Setting description (prefer custom text, fall back to preset)
  const setting = ENVIRONMENT_SETTINGS.find((s) => s.id === env.settingId);
  const settingText =
    env.customSetting.trim() || setting?.promptFragment || '';
  if (settingText) parts.push(settingText);

  // Time of day
  const time = TIME_OF_DAY_OPTIONS.find((t) => t.id === env.timeOfDay);
  if (time?.promptFragment) parts.push(time.promptFragment);

  // Weather (skip if clear — it is the default / empty fragment)
  if (env.weather !== 'clear') {
    const weather = WEATHER_OPTIONS.find((w) => w.id === env.weather);
    if (weather?.promptFragment) parts.push(weather.promptFragment);
  }

  // Lighting (skip if natural — defers to time of day)
  if (env.lighting !== 'natural') {
    const lighting = LIGHTING_OPTIONS.find((l) => l.id === env.lighting);
    if (lighting?.promptFragment) parts.push(lighting.promptFragment);
  }

  // Custom notes
  if (env.customNotes.trim()) parts.push(env.customNotes.trim());

  return parts.filter(Boolean).join(', ');
}

/**
 * Build a full environment reference-image prompt + visual style.
 * Designed for wide establishing shots without characters.
 */
export function buildEnvironmentReferencePrompt(
  env: EnvironmentDefinition,
  visualStyleId?: string,
): string {
  const envDesc = buildEnvironmentPrompt(env);
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === visualStyleId);

  const parts: string[] = [envDesc];
  if (stylePreset) parts.push(stylePreset.promptFragment);
  parts.push('wide establishing shot, cinematic composition');
  parts.push('high detail, professional cinematography, 4K quality');
  parts.push('no characters, no people, environment only');
  parts.push('no text, no watermark, no frame');

  return parts.join(', ');
}

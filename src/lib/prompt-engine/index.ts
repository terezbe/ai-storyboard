import type { Shot, StoryboardSection, Prompt } from '../../types/project';
import { v4 as uuid } from 'uuid';

const MOOD_MODIFIERS: Record<string, { lighting: string; palette: string; energy: string }> = {
  energetic: { lighting: 'dynamic neon lighting', palette: 'vibrant colors', energy: 'high energy' },
  romantic: { lighting: 'soft warm golden hour lighting', palette: 'warm pink and gold tones', energy: 'gentle' },
  dramatic: { lighting: 'high contrast chiaroscuro lighting', palette: 'deep rich colors', energy: 'intense' },
  festive: { lighting: 'colorful party lighting with bokeh', palette: 'purple and gold festive colors', energy: 'celebratory' },
  emotional: { lighting: 'soft diffused lighting', palette: 'muted warm tones', energy: 'moving' },
  funny: { lighting: 'bright even lighting', palette: 'playful vibrant colors', energy: 'cheerful' },
  elegant: { lighting: 'sophisticated studio lighting', palette: 'black white and gold palette', energy: 'refined' },
  mysterious: { lighting: 'moody low-key lighting with shadows', palette: 'dark blue and purple tones', energy: 'suspenseful' },
  calm: { lighting: 'natural soft daylight', palette: 'pastel colors', energy: 'peaceful' },
  exciting: { lighting: 'dynamic strobe lighting', palette: 'electric blue and red', energy: 'thrilling' },
};

const CAMERA_HINTS: Record<string, string> = {
  'wide-shot': 'wide angle establishing shot, full scene visible',
  'medium-shot': 'medium shot, waist-up framing',
  'close-up': 'close-up shot, face and shoulders',
  'extreme-close-up': 'extreme close-up, detailed focus',
  'over-the-shoulder': 'over the shoulder perspective',
  'birds-eye': 'top-down aerial view',
  'low-angle': 'low angle looking up, powerful perspective',
  'high-angle': 'high angle looking down',
  'dutch-angle': 'tilted dutch angle, dynamic composition',
  'tracking': 'tracking shot, following motion',
  'pan': 'horizontal panning shot',
  'zoom-in': 'zooming in, increasing focus',
  'zoom-out': 'zooming out, revealing scene',
};

function buildQualitySuffix(quality: 'draft' | 'standard' | 'high'): string {
  if (quality === 'high') return ', ultra detailed, 8K resolution, photorealistic, cinematic lighting, masterpiece';
  if (quality === 'standard') return ', detailed, high quality, professional, cinematic';
  return '';
}

export function generateEnvironmentPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { environment, mood, cameraAngle } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;
  const cameraHint = CAMERA_HINTS[cameraAngle] || '';

  let text = environment.setting || 'scene';
  if (environment.lighting) text += `, ${environment.lighting}`;
  else text += `, ${moodMod.lighting}`;
  if (environment.props) text += `, ${environment.props}`;
  if (environment.atmosphere) text += `, ${environment.atmosphere}`;
  else text += `, ${moodMod.palette}, ${moodMod.energy} atmosphere`;
  text += `, ${cameraHint}`;
  text += buildQualitySuffix(quality);

  if (modelId === 'midjourney') text += ' --ar 16:9 --v 6.1 --style raw';

  return {
    id: uuid(),
    type: 'environment',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateCharacterPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { character, mood } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;

  let text = character.appearance || 'character';
  if (character.outfit) text += `, wearing ${character.outfit}`;
  if (character.expression) text += `, ${character.expression}`;
  if (character.action) text += `, ${character.action}`;
  text += `, ${moodMod.energy} mood`;
  text += buildQualitySuffix(quality);

  if (modelId === 'midjourney') text += ' --ar 16:9 --v 6.1';

  return {
    id: uuid(),
    type: 'character',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateMusicPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { mood, duration } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;

  let text = `${moodMod.energy} music, ${mood} mood`;
  text += `, ${duration} seconds`;
  if (mood === 'energetic' || mood === 'exciting') text += ', 128 BPM, electronic dance';
  else if (mood === 'romantic') text += ', 80 BPM, piano and strings';
  else if (mood === 'dramatic') text += ', 100 BPM, orchestral';
  else if (mood === 'festive') text += ', 120 BPM, upbeat pop';
  else if (mood === 'funny') text += ', 110 BPM, playful';
  else if (mood === 'elegant') text += ', 90 BPM, jazz lounge';
  else if (mood === 'calm') text += ', 70 BPM, ambient';
  else text += ', 100 BPM';

  return {
    id: uuid(),
    type: 'music',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateVideoPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { environment, character, cameraAngle, duration, mood } = shot;
  const cameraHint = CAMERA_HINTS[cameraAngle] || '';
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;

  let text = environment.setting || 'scene';
  if (character.appearance) text += `, ${character.appearance}`;
  if (character.action) text += ` ${character.action}`;
  text += `. ${cameraHint}`;
  text += `. ${moodMod.lighting}`;
  text += `. Duration: ${duration}s`;
  if (quality === 'high') text += ', cinematic quality, smooth motion, professional';

  return {
    id: uuid(),
    type: 'video',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateAllPromptsForShot(
  shot: Shot,
  imageModel: string,
  videoModel: string,
  musicModel: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
) {
  return {
    environment: generateEnvironmentPrompt(shot, imageModel, quality),
    character: generateCharacterPrompt(shot, imageModel, quality),
    music: generateMusicPrompt(shot, musicModel, quality),
    video: generateVideoPrompt(shot, videoModel, quality),
  };
}

export function generateSectionPrompt(
  section: StoryboardSection,
  imageModel: string,
  musicModel: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
) {
  let bgText = section.backgroundDescription || `${section.type} scene`;
  bgText += buildQualitySuffix(quality);
  if (imageModel === 'midjourney') bgText += ' --ar 16:9 --v 6.1';

  const background: Prompt = {
    id: uuid(),
    type: 'environment',
    text: bgText,
    targetModel: imageModel,
    quality,
    isManuallyEdited: false,
  };

  const music: Prompt = {
    id: uuid(),
    type: 'music',
    text: section.musicReference || `${section.type} music, ${section.duration} seconds`,
    targetModel: musicModel,
    quality,
    isManuallyEdited: false,
  };

  return { background, music };
}

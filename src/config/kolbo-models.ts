import type { KolboModelConfig } from '../types/project';

export const KOLBO_MODELS: Record<string, KolboModelConfig> = {
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    maxPromptLength: 6000,
    supportsNegativePrompt: true,
    promptTemplate: '{description}, {style}, {quality} --ar 16:9 --v 6.1',
    tips: [
      'Use comma-separated descriptors',
      'Add --ar 16:9 for widescreen',
      'Add --style raw for photorealistic',
    ],
  },
  'flux-1-pro': {
    id: 'flux-1-pro',
    name: 'Flux.1 Pro',
    category: 'image',
    maxPromptLength: 4000,
    supportsNegativePrompt: true,
    promptTemplate: '{description}, {style}, {quality}',
    tips: ['Detailed descriptions work best', 'Specify aspect ratio in prompt'],
  },
  ideogram: {
    id: 'ideogram',
    name: 'Ideogram',
    category: 'image',
    maxPromptLength: 4000,
    supportsNegativePrompt: false,
    promptTemplate: '{description}, {style}',
    tips: ['Great for text in images', 'Specify typography style'],
  },
  'sora-2': {
    id: 'sora-2',
    name: 'Sora 2',
    category: 'video',
    maxPromptLength: 3000,
    supportsNegativePrompt: false,
    promptTemplate: '{scene}. {motion}. {camera}. Duration: {duration}s.',
    tips: ['Describe motion explicitly', 'Specify camera movement'],
  },
  'kling-2.1': {
    id: 'kling-2.1',
    name: 'Kling 2.1',
    category: 'video',
    maxPromptLength: 2500,
    supportsNegativePrompt: true,
    promptTemplate: '{scene}. {motion}. {camera}. Duration: {duration}s.',
    tips: ['Keep descriptions concise', 'Mention duration in seconds'],
  },
  'runway-gen4': {
    id: 'runway-gen4',
    name: 'Runway Gen4',
    category: 'video',
    maxPromptLength: 2000,
    supportsNegativePrompt: false,
    promptTemplate: '{scene}, {motion}, {camera}, {duration}s',
    tips: ['Short focused prompts work best', 'Describe key motion'],
  },
  luma: {
    id: 'luma',
    name: 'Luma Dream Machine',
    category: 'video',
    maxPromptLength: 2000,
    supportsNegativePrompt: false,
    promptTemplate: '{scene}. {motion}. {camera}.',
    tips: ['Focus on one main action', 'Describe lighting'],
  },
  'suno-v4.5': {
    id: 'suno-v4.5',
    name: 'Suno V4.5',
    category: 'music',
    maxPromptLength: 3000,
    supportsNegativePrompt: false,
    promptTemplate: '{genre}, {mood}, {instruments}, {bpm} BPM, {duration} seconds',
    tips: ['Specify genre and sub-genre', 'Include BPM', 'Mention instruments'],
  },
  udio: {
    id: 'udio',
    name: 'Udio',
    category: 'music',
    maxPromptLength: 3000,
    supportsNegativePrompt: false,
    promptTemplate: '{genre}, {mood}, {instruments}, {bpm} BPM',
    tips: ['Describe energy progression', 'Specify style references'],
  },
  'elevenlabs-v3': {
    id: 'elevenlabs-v3',
    name: 'ElevenLabs V3',
    category: 'voice',
    maxPromptLength: 5000,
    supportsNegativePrompt: false,
    promptTemplate: '{text}',
    tips: ['Use natural speech patterns', 'Add emotion cues in brackets'],
  },
};

export const IMAGE_MODELS = Object.values(KOLBO_MODELS).filter(
  (m) => m.category === 'image'
);
export const VIDEO_MODELS = Object.values(KOLBO_MODELS).filter(
  (m) => m.category === 'video'
);
export const MUSIC_MODELS = Object.values(KOLBO_MODELS).filter(
  (m) => m.category === 'music'
);
export const VOICE_MODELS = Object.values(KOLBO_MODELS).filter(
  (m) => m.category === 'voice'
);

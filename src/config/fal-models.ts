export interface FalModelConfig {
  id: string;
  name: string;
  category: 'image' | 'video';
  cost: string;
  defaultParams?: Record<string, unknown>;
  /** Whether this model is image-to-video (requires imageUrl input) */
  isImg2Vid?: boolean;
  /** Whether this model handles talking/dialogue well (lip movement, speech) */
  supportsDialogue?: boolean;
  /** Whether this model can generate audio alongside video (e.g. Kling v2.6+) */
  supportsAudio?: boolean;
}

export const FAL_IMAGE_MODELS: FalModelConfig[] = [
  {
    id: 'fal-ai/flux/schnell',
    name: 'Flux Schnell',
    category: 'image',
    cost: '~$0.003',
    defaultParams: { image_size: 'landscape_16_9', num_images: 1 },
  },
  {
    id: 'fal-ai/flux/dev',
    name: 'Flux Dev',
    category: 'image',
    cost: '~$0.025',
    defaultParams: { image_size: 'landscape_16_9', num_images: 1 },
  },
  {
    id: 'fal-ai/flux-pro/v1.1',
    name: 'Flux Pro 1.1',
    category: 'image',
    cost: '~$0.05',
    defaultParams: { image_size: 'landscape_16_9', num_images: 1 },
  },
];

export const FAL_VIDEO_MODELS: FalModelConfig[] = [
  {
    id: 'fal-ai/minimax/video-01',
    name: 'Minimax Video-01',
    category: 'video',
    cost: '~$0.50',
    defaultParams: {},
    isImg2Vid: false,
    supportsDialogue: true,
  },
  {
    id: 'fal-ai/minimax/video-01-live',
    name: 'Minimax Video-01 Live',
    category: 'video',
    cost: '~$0.25',
    defaultParams: {},
    isImg2Vid: false,
    supportsDialogue: true,
  },
  {
    id: 'fal-ai/kling-video/v2/master/image-to-video',
    name: 'Kling 2.0 Master (img2vid)',
    category: 'video',
    cost: '~$0.70',
    defaultParams: { duration: '5', negative_prompt: 'blur, distort, low quality' },
    isImg2Vid: true,
    supportsDialogue: false,
  },
  {
    id: 'fal-ai/kling-video/v2.1/master/image-to-video',
    name: 'Kling 2.1 Master (img2vid)',
    category: 'video',
    cost: '~$0.70',
    defaultParams: { duration: '5', negative_prompt: 'blur, distort, low quality' },
    isImg2Vid: true,
    supportsDialogue: false,
  },
  {
    id: 'fal-ai/kling-video/v2.6/pro/image-to-video',
    name: 'Kling 2.6 Pro (img2vid + audio)',
    category: 'video',
    cost: '~$0.14/sec',
    defaultParams: { duration: '5', negative_prompt: 'blur, distort, low quality' },
    isImg2Vid: true,
    supportsDialogue: true,
    supportsAudio: true,
  },
];

/** VEED Fabric — TTS + lip-sync talking head model (image + text → talking video) */
export const FAL_DIALOGUE_MODEL: FalModelConfig = {
  id: 'veed/fabric-1.0/text',
  name: 'VEED Fabric (Talking Head + TTS)',
  category: 'video',
  cost: '~$0.15/sec @720p',
  defaultParams: { resolution: '720p' },
  isImg2Vid: true,
  supportsDialogue: true,
  supportsAudio: true,
};

/** Angle variation model — takes existing image and changes camera perspective */
export const FAL_ANGLE_MODEL: FalModelConfig = {
  id: 'fal-ai/qwen-image-edit-2511-multiple-angles',
  name: 'Qwen Multi-Angle',
  category: 'image',
  cost: '~$0.03',
  defaultParams: {
    lora_scale: 1,
    guidance_scale: 4.5,
    num_inference_steps: 28,
    output_format: 'jpeg',
    num_images: 1,
  },
};

/** Flux Kontext — purpose-built for character consistency, preserves identity across scenes */
export const FAL_KONTEXT_MODEL: FalModelConfig = {
  id: 'fal-ai/flux-pro/kontext',
  name: 'Flux Kontext Pro',
  category: 'image',
  cost: '~$0.04',
  defaultParams: {
    guidance_scale: 3.5,
    num_images: 1,
    output_format: 'jpeg',
  },
};

/** Flux Dev img2img fallback — lower strength for character preservation */
export const FAL_IMG2IMG_MODEL: FalModelConfig = {
  id: 'fal-ai/flux/dev/image-to-image',
  name: 'Flux Dev (img2img)',
  category: 'image',
  cost: '~$0.025',
  defaultParams: {
    strength: 0.65,
    num_inference_steps: 40,
    guidance_scale: 3.5,
    num_images: 1,
    output_format: 'jpeg',
  },
};

export const ALL_FAL_MODELS = [...FAL_IMAGE_MODELS, ...FAL_VIDEO_MODELS, FAL_DIALOGUE_MODEL, FAL_ANGLE_MODEL, FAL_KONTEXT_MODEL, FAL_IMG2IMG_MODEL];

export function getFalModel(id: string): FalModelConfig | undefined {
  return ALL_FAL_MODELS.find((m) => m.id === id);
}

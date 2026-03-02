export interface FalModelConfig {
  id: string;
  name: string;
  category: 'image' | 'video';
  cost: string;
  defaultParams?: Record<string, unknown>;
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
  },
  {
    id: 'fal-ai/minimax/video-01-live',
    name: 'Minimax Video-01 Live',
    category: 'video',
    cost: '~$0.25',
    defaultParams: {},
  },
  {
    id: 'fal-ai/kling-video/v2/master/image-to-video',
    name: 'Kling 2.0 Master (img2vid)',
    category: 'video',
    cost: '~$0.70',
    defaultParams: { duration: '5' },
  },
];

export const ALL_FAL_MODELS = [...FAL_IMAGE_MODELS, ...FAL_VIDEO_MODELS];

export function getFalModel(id: string): FalModelConfig | undefined {
  return ALL_FAL_MODELS.find((m) => m.id === id);
}

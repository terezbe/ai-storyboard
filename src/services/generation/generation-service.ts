import { getProviderForModel } from './provider-registry';
import type { ImageGenerationResult, VideoGenerationResult } from './types';

export async function generateImageForShot(
  prompt: string,
  modelId: string
): Promise<ImageGenerationResult> {
  const provider = getProviderForModel(modelId);
  return provider.generateImage({ prompt, modelId });
}

export async function generateVideoForShot(
  prompt: string,
  modelId: string,
  imageUrl?: string,
  duration?: number
): Promise<VideoGenerationResult> {
  const provider = getProviderForModel(modelId);
  return provider.generateVideo({ prompt, modelId, imageUrl, duration });
}

export async function testProviderConnection(modelId: string): Promise<boolean> {
  const provider = getProviderForModel(modelId);
  return provider.testConnection();
}

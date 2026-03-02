import { getProviderForModel } from './provider-registry';
import type { ImageGenerationResult, VideoGenerationResult } from './types';
import { FAL_ANGLE_MODEL } from '../../config/fal-models';

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

/**
 * Generate an angle variation of an existing image.
 * Sends the image to Qwen Multi-Angle model which changes perspective while preserving content.
 */
export async function generateAngleVariation(
  imageUrl: string,
  horizontalAngle: number,
  verticalAngle: number,
  zoom: number
): Promise<ImageGenerationResult> {
  const modelId = FAL_ANGLE_MODEL.id;
  const provider = getProviderForModel(modelId);
  if (!provider.generateAngleVariation) {
    throw new Error('Angle variation not supported by this provider');
  }
  return provider.generateAngleVariation({
    imageUrl,
    modelId,
    horizontalAngle,
    verticalAngle,
    zoom,
  });
}

export async function testProviderConnection(modelId: string): Promise<boolean> {
  const provider = getProviderForModel(modelId);
  return provider.testConnection();
}

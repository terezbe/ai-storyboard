import { getProviderForModel } from './provider-registry';
import type { ImageGenerationResult, VideoGenerationResult } from './types';
import { FAL_ANGLE_MODEL, FAL_KONTEXT_MODEL, FAL_IMG2IMG_MODEL } from '../../config/fal-models';

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

/**
 * Generate a character-in-scene image using Flux Kontext.
 * Kontext preserves character identity (98%) while changing the scene.
 * The prompt should describe ONLY the scene/action, NOT the character.
 */
export async function generateCharacterShot(
  scenePrompt: string,
  referenceImageUrl: string
): Promise<ImageGenerationResult> {
  const modelId = FAL_KONTEXT_MODEL.id;
  const provider = getProviderForModel(modelId);
  if (!provider.generateImageToImage) {
    throw new Error('Kontext not supported by this provider');
  }
  return provider.generateImageToImage({
    prompt: scenePrompt,
    modelId,
    imageUrl: referenceImageUrl,
  });
}

/**
 * Fallback: Generate using Flux Dev img2img with lower strength.
 */
export async function generateImageToImageForShot(
  prompt: string,
  referenceImageUrl: string,
  strength?: number
): Promise<ImageGenerationResult> {
  const modelId = FAL_IMG2IMG_MODEL.id;
  const provider = getProviderForModel(modelId);
  if (!provider.generateImageToImage) {
    throw new Error('Image-to-image not supported by this provider');
  }
  return provider.generateImageToImage({
    prompt,
    modelId,
    imageUrl: referenceImageUrl,
    strength,
  });
}

export async function testProviderConnection(modelId: string): Promise<boolean> {
  const provider = getProviderForModel(modelId);
  return provider.testConnection();
}

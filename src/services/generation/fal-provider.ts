import type {
  GenerationProvider,
  ImageGenerationRequest,
  ImageGenerationResult,
  ImageToImageRequest,
  VideoGenerationRequest,
  VideoGenerationResult,
  AngleVariationRequest,
} from './types';
import { getFalModel } from '../../config/fal-models';
import { useSettingsStore } from '../../store/settings-store';

const POLL_INTERVAL = 5000;
/** Kling can take longer — use 10 minutes for image-to-video, 5 minutes otherwise */
const POLL_TIMEOUT_DEFAULT = 5 * 60 * 1000;
const POLL_TIMEOUT_KLING = 10 * 60 * 1000;

function getAuthHeaders(): Record<string, string> {
  const key = useSettingsStore.getState().falApiKey;
  if (key) {
    return { Authorization: `Key ${key}` };
  }
  return {};
}

/** Extract video URL from various FAL response shapes */
function extractVideoUrl(data: Record<string, unknown>): string | undefined {
  const d = data as any;
  return (
    d?.video?.url ??
    d?.output?.video?.url ??
    d?.response?.video?.url ??
    d?.video_url ??
    d?.response?.video_url ??
    d?.output?.video_url
  );
}

export class FalProvider implements GenerationProvider {
  id = 'fal';
  name = 'FAL.ai';

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const model = getFalModel(request.modelId);
    const body = {
      prompt: request.prompt,
      ...model?.defaultParams,
      ...request.params,
    };

    const res = await fetch(`/api/fal/${request.modelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`FAL image generation failed (${res.status}): ${text}`);
    }

    const data = await res.json();

    // FAL returns images in data.images[0].url or data.output.images[0].url
    const imageUrl =
      data?.images?.[0]?.url ??
      data?.output?.images?.[0]?.url ??
      data?.image?.url;

    if (!imageUrl) {
      throw new Error('No image URL in FAL response');
    }

    return { imageUrl };
  }

  async generateVideo(request: VideoGenerationRequest): Promise<VideoGenerationResult> {
    const model = getFalModel(request.modelId);
    const isImg2Vid = request.modelId.includes('image-to-video');

    const body: Record<string, unknown> = {
      prompt: request.prompt,
      ...model?.defaultParams,
      ...request.params,
    };

    if (request.imageUrl) {
      body.image_url = request.imageUrl;
    }
    if (request.duration) {
      // Kling image-to-video only accepts '5' or '10' — snap to nearest valid value
      // eslint-disable-next-line no-console
      if (isImg2Vid) {
        body.duration = request.duration <= 7 ? '5' : '10';
      } else {
        body.duration = String(request.duration);
      }
    }

    // Debug: log the request being sent to FAL
    console.log('[FAL Video Request]', {
      model: request.modelId,
      hasImageUrl: !!body.image_url,
      imageUrl: body.image_url,
      duration: body.duration,
      prompt: (body.prompt as string)?.substring(0, 80) + '...',
    });

    const res = await fetch(`/api/fal/${request.modelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`FAL video generation failed (${res.status}): ${text}`);
    }

    const data = await res.json();

    // Check if this is an async/queued response
    if (data.request_id && !data.video) {
      const timeout = isImg2Vid ? POLL_TIMEOUT_KLING : POLL_TIMEOUT_DEFAULT;
      return this.pollForVideo(data.request_id, request.modelId, timeout);
    }

    const videoUrl = extractVideoUrl(data);

    if (!videoUrl) {
      throw new Error('No video URL in FAL response');
    }

    return { videoUrl };
  }

  private async pollForVideo(
    requestId: string,
    modelId: string,
    timeout: number
  ): Promise<VideoGenerationResult> {
    const start = Date.now();
    const timeoutMinutes = Math.round(timeout / 60000);

    while (Date.now() - start < timeout) {
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));

      // Try both queue-style and direct-style status endpoints
      const statusRes = await this.tryFetchStatus(modelId, requestId);
      if (!statusRes) continue;

      const data = statusRes;

      if (data.status === 'COMPLETED') {
        // Try extracting video URL from the status response itself
        const videoUrl = extractVideoUrl(data);
        if (videoUrl) return { videoUrl };

        // Also check nested response object
        if (data.response) {
          const nestedUrl = extractVideoUrl(data.response as Record<string, unknown>);
          if (nestedUrl) return { videoUrl: nestedUrl };
        }

        // If completed but no video in status, fetch the full result
        const resultUrl = await this.fetchResult(modelId, requestId);
        if (resultUrl) return { videoUrl: resultUrl };

        throw new Error('Video generation completed but no video URL found');
      }

      if (data.status === 'FAILED') {
        throw new Error(`Video generation failed: ${data.error || 'Unknown error'}`);
      }
    }

    throw new Error(`Video generation timed out (${timeoutMinutes} minutes)`);
  }

  /** Try fetching status from queue endpoint, fall back to direct endpoint */
  private async tryFetchStatus(
    modelId: string,
    requestId: string
  ): Promise<any | null> {
    const headers = { 'Content-Type': 'application/json', ...getAuthHeaders() };

    // Try queue-style endpoint first (FAL's standard queue API)
    const queueRes = await fetch(
      `/api/fal/queue/${modelId}/requests/${requestId}/status`,
      { method: 'GET', headers }
    );
    if (queueRes.ok) return queueRes.json();

    // Fall back to direct endpoint
    const directRes = await fetch(
      `/api/fal/${modelId}/requests/${requestId}/status`,
      { method: 'GET', headers }
    );
    if (directRes.ok) return directRes.json();

    return null;
  }

  /** Fetch the full result after polling shows COMPLETED */
  private async fetchResult(
    modelId: string,
    requestId: string
  ): Promise<string | null> {
    const headers = { 'Content-Type': 'application/json', ...getAuthHeaders() };

    // Try queue-style result endpoint first
    for (const prefix of ['queue/', '']) {
      const res = await fetch(
        `/api/fal/${prefix}${modelId}/requests/${requestId}`,
        { method: 'GET', headers }
      );
      if (res.ok) {
        const data = await res.json();
        const url = extractVideoUrl(data);
        if (url) return url;
      }
    }
    return null;
  }

  async generateAngleVariation(request: AngleVariationRequest): Promise<ImageGenerationResult> {
    const model = getFalModel(request.modelId);
    const body = {
      image_urls: [request.imageUrl],
      horizontal_angle: request.horizontalAngle,
      vertical_angle: request.verticalAngle,
      zoom: request.zoom,
      ...model?.defaultParams,
      ...request.params,
    };

    console.log('[FAL Angle Variation]', {
      model: request.modelId,
      horizontal: request.horizontalAngle,
      vertical: request.verticalAngle,
      zoom: request.zoom,
    });

    const res = await fetch(`/api/fal/${request.modelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`FAL angle variation failed (${res.status}): ${text}`);
    }

    const data = await res.json();
    const imageUrl =
      data?.images?.[0]?.url ??
      data?.output?.images?.[0]?.url ??
      data?.image?.url;

    if (!imageUrl) {
      throw new Error('No image URL in FAL angle variation response');
    }

    return { imageUrl };
  }

  async generateImageToImage(request: ImageToImageRequest): Promise<ImageGenerationResult> {
    const model = getFalModel(request.modelId);
    const body: Record<string, unknown> = {
      prompt: request.prompt,
      image_url: request.imageUrl,
      ...model?.defaultParams,
      ...request.params,
    };

    // Override strength if explicitly provided
    if (request.strength !== undefined) {
      body.strength = request.strength;
    }

    console.log('[FAL img2img Request]', {
      model: request.modelId,
      imageUrl: (request.imageUrl)?.substring(0, 60) + '...',
      strength: body.strength,
      prompt: (request.prompt)?.substring(0, 80) + '...',
    });

    const res = await fetch(`/api/fal/${request.modelId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`FAL img2img generation failed (${res.status}): ${text}`);
    }

    const data = await res.json();
    const imageUrl =
      data?.images?.[0]?.url ??
      data?.output?.images?.[0]?.url ??
      data?.image?.url;

    if (!imageUrl) {
      throw new Error('No image URL in FAL img2img response');
    }

    return { imageUrl };
  }

  async testConnection(): Promise<boolean> {
    try {
      const res = await fetch('/api/fal/fal-ai/flux/schnell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify({ prompt: 'test', image_size: 'square', num_images: 1 }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }
}

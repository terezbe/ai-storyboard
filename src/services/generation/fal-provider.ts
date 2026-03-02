import type {
  GenerationProvider,
  ImageGenerationRequest,
  ImageGenerationResult,
  VideoGenerationRequest,
  VideoGenerationResult,
} from './types';
import { getFalModel } from '../../config/fal-models';
import { useSettingsStore } from '../../store/settings-store';

const POLL_INTERVAL = 5000;
const POLL_TIMEOUT = 5 * 60 * 1000;

function getAuthHeaders(): Record<string, string> {
  const key = useSettingsStore.getState().falApiKey;
  if (key) {
    return { Authorization: `Key ${key}` };
  }
  return {};
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
    const body: Record<string, unknown> = {
      prompt: request.prompt,
      ...model?.defaultParams,
      ...request.params,
    };

    if (request.imageUrl) {
      body.image_url = request.imageUrl;
    }
    if (request.duration) {
      body.duration = String(request.duration);
    }

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
      return this.pollForVideo(data.request_id, request.modelId);
    }

    const videoUrl =
      data?.video?.url ??
      data?.output?.video?.url ??
      data?.video_url;

    if (!videoUrl) {
      throw new Error('No video URL in FAL response');
    }

    return { videoUrl };
  }

  private async pollForVideo(
    requestId: string,
    modelId: string
  ): Promise<VideoGenerationResult> {
    const start = Date.now();

    while (Date.now() - start < POLL_TIMEOUT) {
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));

      const res = await fetch(`/api/fal/${modelId}/requests/${requestId}/status`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      });

      if (!res.ok) continue;

      const data = await res.json();

      if (data.status === 'COMPLETED') {
        const videoUrl =
          data?.response?.video?.url ??
          data?.response?.video_url ??
          data?.video?.url;

        if (videoUrl) return { videoUrl };

        // If completed but no video, try fetching the result
        const resultRes = await fetch(
          `/api/fal/${modelId}/requests/${requestId}`,
          { method: 'GET', headers: { 'Content-Type': 'application/json', ...getAuthHeaders() } }
        );
        if (resultRes.ok) {
          const resultData = await resultRes.json();
          const url =
            resultData?.video?.url ??
            resultData?.output?.video?.url ??
            resultData?.video_url;
          if (url) return { videoUrl: url };
        }

        throw new Error('Video generation completed but no video URL found');
      }

      if (data.status === 'FAILED') {
        throw new Error(`Video generation failed: ${data.error || 'Unknown error'}`);
      }
    }

    throw new Error('Video generation timed out (5 minutes)');
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

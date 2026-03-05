/**
 * Video frame extraction using FAL's server-side FFmpeg API.
 *
 * Browser-side canvas extraction fails due to CORS restrictions on FAL CDN videos.
 * Instead, we use FAL's `ffmpeg-api/extract-frame` endpoint which runs server-side
 * and returns a publicly accessible image URL.
 *
 * Cost: ~$0.001 per extraction (negligible).
 */

import { useSettingsStore } from '../store/settings-store';

function getAuthHeaders(): Record<string, string> {
  const key = useSettingsStore.getState().falApiKey;
  if (key) {
    return { Authorization: `Key ${key}` };
  }
  return {};
}

/**
 * Extract the last frame from a video URL using FAL's FFmpeg API.
 *
 * @param videoUrl - URL of the video (FAL CDN or any public URL)
 * @returns A publicly accessible URL of the extracted frame image
 */
export async function extractLastFrame(videoUrl: string): Promise<string> {
  if (!videoUrl) {
    throw new Error('videoUrl is required');
  }

  const res = await fetch('/api/fal/fal-ai/ffmpeg-api/extract-frame', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify({
      video_url: videoUrl,
      frame_type: 'last',
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Frame extraction failed (${res.status}): ${text}`);
  }

  const data = await res.json();

  // Handle async/queued response
  if (data.request_id && !data.images) {
    return pollForFrame(data.request_id);
  }

  const imageUrl = data?.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error('No frame URL in FFmpeg response');
  }

  return imageUrl;
}

const POLL_INTERVAL = 2000;
const POLL_TIMEOUT = 60_000; // 1 minute max

async function pollForFrame(requestId: string): Promise<string> {
  const start = Date.now();
  const headers = { 'Content-Type': 'application/json', ...getAuthHeaders() };

  while (Date.now() - start < POLL_TIMEOUT) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL));

    const res = await fetch(
      `/api/fal/queue/fal-ai/ffmpeg-api/extract-frame/requests/${requestId}/status`,
      { method: 'GET', headers }
    );

    if (!res.ok) continue;
    const data = await res.json();

    if (data.status === 'COMPLETED') {
      const imageUrl = data?.images?.[0]?.url ?? data?.response?.images?.[0]?.url;
      if (imageUrl) return imageUrl;

      // Fetch full result
      const resultRes = await fetch(
        `/api/fal/queue/fal-ai/ffmpeg-api/extract-frame/requests/${requestId}`,
        { method: 'GET', headers }
      );
      if (resultRes.ok) {
        const resultData = await resultRes.json();
        const url = resultData?.images?.[0]?.url;
        if (url) return url;
      }

      throw new Error('Frame extraction completed but no image URL found');
    }

    if (data.status === 'FAILED') {
      throw new Error(`Frame extraction failed: ${data.error || 'Unknown error'}`);
    }
  }

  throw new Error('Frame extraction timed out (60s)');
}

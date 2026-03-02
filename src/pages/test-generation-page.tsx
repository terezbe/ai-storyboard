import { useState, useRef } from 'react';
import { Loader2, ImagePlus, Video, ArrowRight } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { FAL_IMAGE_MODELS, FAL_VIDEO_MODELS } from '../config/fal-models';

type Tab = 'image' | 'video' | 'img2vid';

const POLL_INTERVAL = 5000;
const POLL_TIMEOUT = 10 * 60 * 1000;

export function TestGenerationPage() {
  const { falApiKey, setFalApiKey } = useSettingsStore();
  const [tab, setTab] = useState<Tab>('img2vid');
  const [prompt, setPrompt] = useState('A cozy coffee shop interior, warm lighting, cinematic, 16:9');
  const [imageModel, setImageModel] = useState(FAL_IMAGE_MODELS[0].id);
  const [videoModel, setVideoModel] = useState(
    FAL_VIDEO_MODELS.find((m) => m.id.includes('image-to-video'))?.id || FAL_VIDEO_MODELS[0].id
  );
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultType, setResultType] = useState<'image' | 'video'>('image');
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<string | null>(null);

  // img2vid flow state
  const [img2vidStep, setImg2vidStep] = useState<'idle' | 'generating-image' | 'image-ready' | 'generating-video' | 'done'>('idle');
  const [img2vidImageUrl, setImg2vidImageUrl] = useState<string | null>(null);
  const [img2vidVideoUrl, setImg2vidVideoUrl] = useState<string | null>(null);
  const [img2vidStatus, setImg2vidStatus] = useState('');
  const abortRef = useRef(false);

  const getHeaders = (): Record<string, string> => {
    const h: Record<string, string> = { 'Content-Type': 'application/json' };
    if (falApiKey) h['Authorization'] = `Key ${falApiKey}`;
    return h;
  };

  // Poll for video completion
  const pollForVideo = async (requestId: string, modelId: string): Promise<string> => {
    const start = Date.now();
    while (Date.now() - start < POLL_TIMEOUT) {
      if (abortRef.current) throw new Error('Cancelled');
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));

      const elapsed = Math.round((Date.now() - start) / 1000);
      setImg2vidStatus(`Polling video status... (${elapsed}s)`);

      // Try queue endpoint first, then direct
      for (const prefix of ['queue/', '']) {
        const res = await fetch(`/api/fal/${prefix}${modelId}/requests/${requestId}/status`, {
          method: 'GET',
          headers: getHeaders(),
        });
        if (!res.ok) continue;
        const data = await res.json();

        if (data.status === 'COMPLETED') {
          // Try to get video URL from status response
          const url = data?.video?.url ?? data?.response?.video?.url ?? data?.video_url ?? data?.response?.video_url;
          if (url) return url;

          // Fetch full result
          for (const p2 of ['queue/', '']) {
            const resultRes = await fetch(`/api/fal/${p2}${modelId}/requests/${requestId}`, {
              method: 'GET',
              headers: getHeaders(),
            });
            if (resultRes.ok) {
              const rd = await resultRes.json();
              const u = rd?.video?.url ?? rd?.output?.video?.url ?? rd?.video_url;
              if (u) return u;
            }
          }
          throw new Error('Video completed but no URL found');
        }
        if (data.status === 'FAILED') {
          throw new Error(`Video failed: ${data.error || 'Unknown'}`);
        }
        // Still in progress, break inner loop and wait
        break;
      }
    }
    throw new Error('Video generation timed out (10 min)');
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);
    setResultUrl(null);
    setRawResponse(null);

    try {
      const model = FAL_IMAGE_MODELS.find((m) => m.id === imageModel);
      const body = { prompt, ...model?.defaultParams };

      const res = await fetch(`/api/fal/${imageModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setRawResponse(JSON.stringify(data, null, 2));

      if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(data)}`);

      const url = data?.images?.[0]?.url ?? data?.output?.images?.[0]?.url ?? data?.image?.url;
      if (url) {
        setResultUrl(url);
        setResultType('image');
      } else {
        setError('Response OK but no image URL found.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateVideo = async () => {
    setLoading(true);
    setError(null);
    setResultUrl(null);
    setRawResponse(null);

    try {
      const model = FAL_VIDEO_MODELS.find((m) => m.id === videoModel);
      const body: Record<string, unknown> = { prompt, ...model?.defaultParams };
      if (imageUrlInput.trim()) body.image_url = imageUrlInput.trim();

      const res = await fetch(`/api/fal/${videoModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setRawResponse(JSON.stringify(data, null, 2));

      if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(data)}`);

      const url = data?.video?.url ?? data?.output?.video?.url ?? data?.video_url;
      if (url) {
        setResultUrl(url);
        setResultType('video');
      } else if (data.request_id) {
        // Poll for completion
        const videoUrl = await pollForVideo(data.request_id, videoModel);
        setResultUrl(videoUrl);
        setResultType('video');
      } else {
        setError('Response OK but no video URL found.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  // ---- Image → Video combined flow ----
  const handleImg2VidFlow = async () => {
    abortRef.current = false;
    setImg2vidStep('generating-image');
    setImg2vidImageUrl(null);
    setImg2vidVideoUrl(null);
    setError(null);
    setRawResponse(null);
    setImg2vidStatus('Generating image...');

    try {
      // Step 1: Generate image
      const imgModel = FAL_IMAGE_MODELS.find((m) => m.id === imageModel);
      const imgBody = { prompt, ...imgModel?.defaultParams };

      const imgRes = await fetch(`/api/fal/${imageModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(imgBody),
      });

      const imgData = await imgRes.json();
      if (!imgRes.ok) throw new Error(`Image failed (${imgRes.status}): ${JSON.stringify(imgData)}`);

      const imgUrl = imgData?.images?.[0]?.url ?? imgData?.output?.images?.[0]?.url ?? imgData?.image?.url;
      if (!imgUrl) throw new Error('No image URL in response');

      setImg2vidImageUrl(imgUrl);
      setImg2vidStep('image-ready');
      setImg2vidStatus('Image ready! Generating video from image...');

      if (abortRef.current) return;

      // Step 2: Generate video from image
      setImg2vidStep('generating-video');
      const vidModel = FAL_VIDEO_MODELS.find((m) => m.id === videoModel);
      const isImg2Vid = videoModel.includes('image-to-video');
      const vidBody: Record<string, unknown> = {
        prompt,
        ...vidModel?.defaultParams,
        image_url: imgUrl,
      };
      // Snap duration for Kling
      if (isImg2Vid && vidBody.duration) {
        const dur = Number(vidBody.duration);
        if (dur && dur <= 7) vidBody.duration = '5';
        else if (dur) vidBody.duration = '10';
      }

      console.log('[Test img2vid] Video request body:', vidBody);

      const vidRes = await fetch(`/api/fal/${videoModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(vidBody),
      });

      const vidData = await vidRes.json();
      setRawResponse(JSON.stringify(vidData, null, 2));

      if (!vidRes.ok) throw new Error(`Video failed (${vidRes.status}): ${JSON.stringify(vidData)}`);

      let videoUrl = vidData?.video?.url ?? vidData?.output?.video?.url ?? vidData?.video_url;

      if (!videoUrl && vidData.request_id) {
        setImg2vidStatus('Video queued, polling for result...');
        videoUrl = await pollForVideo(vidData.request_id, videoModel);
      }

      if (!videoUrl) throw new Error('No video URL in response');

      setImg2vidVideoUrl(videoUrl);
      setImg2vidStep('done');
      setImg2vidStatus('Done! Video generated from image.');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setImg2vidStep(img2vidImageUrl ? 'image-ready' : 'idle');
      setImg2vidStatus('');
    }
  };

  const handleImg2VidVideoOnly = async () => {
    if (!img2vidImageUrl) return;
    abortRef.current = false;
    setImg2vidStep('generating-video');
    setImg2vidVideoUrl(null);
    setError(null);
    setRawResponse(null);
    setImg2vidStatus('Generating video from image...');

    try {
      const vidModel = FAL_VIDEO_MODELS.find((m) => m.id === videoModel);
      const isImg2Vid = videoModel.includes('image-to-video');
      const vidBody: Record<string, unknown> = {
        prompt,
        ...vidModel?.defaultParams,
        image_url: img2vidImageUrl,
      };
      if (isImg2Vid && vidBody.duration) {
        const dur = Number(vidBody.duration);
        if (dur && dur <= 7) vidBody.duration = '5';
        else if (dur) vidBody.duration = '10';
      }

      console.log('[Test img2vid] Video request body:', vidBody);

      const vidRes = await fetch(`/api/fal/${videoModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(vidBody),
      });

      const vidData = await vidRes.json();
      setRawResponse(JSON.stringify(vidData, null, 2));

      if (!vidRes.ok) throw new Error(`Video failed (${vidRes.status}): ${JSON.stringify(vidData)}`);

      let videoUrl = vidData?.video?.url ?? vidData?.output?.video?.url ?? vidData?.video_url;

      if (!videoUrl && vidData.request_id) {
        setImg2vidStatus('Video queued, polling for result...');
        videoUrl = await pollForVideo(vidData.request_id, videoModel);
      }

      if (!videoUrl) throw new Error('No video URL in response');

      setImg2vidVideoUrl(videoUrl);
      setImg2vidStep('done');
      setImg2vidStatus('Done! Video generated from image.');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setImg2vidStep('image-ready');
      setImg2vidStatus('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-text">FAL.ai Test Page</h2>
      <p className="text-sm text-text-muted">
        Test image and video generation directly. The <b>Image → Video</b> tab generates an image and then creates a video from it.
      </p>

      {/* API Key */}
      <div className="bg-surface-light border border-border rounded-xl p-4">
        <label className="block text-xs font-medium text-text-muted mb-1">FAL API Key</label>
        <input
          type="password"
          placeholder="fal-..."
          value={falApiKey || ''}
          onChange={(e) => setFalApiKey(e.target.value || null)}
          className="input-field"
          dir="ltr"
        />
        {falApiKey && (
          <span className="text-xs text-green-400 mt-1 block">
            Key set ({falApiKey.slice(0, 8)}...)
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('image')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'image' ? 'bg-primary-600 text-white' : 'bg-surface-lighter text-text-muted hover:text-text'
          }`}
        >
          Image
        </button>
        <button
          onClick={() => setTab('video')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'video' ? 'bg-purple-600 text-white' : 'bg-surface-lighter text-text-muted hover:text-text'
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setTab('img2vid')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
            tab === 'img2vid' ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white' : 'bg-surface-lighter text-text-muted hover:text-text'
          }`}
        >
          <ImagePlus className="w-3.5 h-3.5" />
          <ArrowRight className="w-3 h-3" />
          <Video className="w-3.5 h-3.5" />
          Image → Video
        </button>
      </div>

      {/* ============= Image Tab ============= */}
      {tab === 'image' && (
        <div className="bg-surface-light border border-border rounded-xl p-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">Model</label>
            <select value={imageModel} onChange={(e) => setImageModel(e.target.value)} className="input-field">
              {FAL_IMAGE_MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">Prompt</label>
            <textarea rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="input-field" />
          </div>
          <button
            onClick={handleGenerateImage}
            disabled={loading || !prompt.trim() || !falApiKey}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors disabled:opacity-40"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Generating...' : 'Generate Image'}
          </button>
        </div>
      )}

      {/* ============= Video Tab ============= */}
      {tab === 'video' && (
        <div className="bg-surface-light border border-border rounded-xl p-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">Model</label>
            <select value={videoModel} onChange={(e) => setVideoModel(e.target.value)} className="input-field">
              {FAL_VIDEO_MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">Prompt</label>
            <textarea rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="input-field" />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">Image URL (optional, for img2vid)</label>
            <input value={imageUrlInput} onChange={(e) => setImageUrlInput(e.target.value)} className="input-field" placeholder="https://..." dir="ltr" />
          </div>
          <button
            onClick={handleGenerateVideo}
            disabled={loading || !prompt.trim() || !falApiKey}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors disabled:opacity-40"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Generating...' : 'Generate Video'}
          </button>
        </div>
      )}

      {/* ============= Image → Video Tab ============= */}
      {tab === 'img2vid' && (
        <div className="space-y-4">
          {/* Models */}
          <div className="bg-surface-light border border-border rounded-xl p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-text-muted mb-1">Image Model</label>
                <select value={imageModel} onChange={(e) => setImageModel(e.target.value)} className="input-field">
                  {FAL_IMAGE_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-muted mb-1">Video Model (img2vid)</label>
                <select value={videoModel} onChange={(e) => setVideoModel(e.target.value)} className="input-field">
                  {FAL_VIDEO_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">Prompt</label>
              <textarea rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="input-field" />
            </div>
            <button
              onClick={handleImg2VidFlow}
              disabled={img2vidStep === 'generating-image' || img2vidStep === 'generating-video' || !prompt.trim() || !falApiKey}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transition-all disabled:opacity-40"
            >
              {(img2vidStep === 'generating-image' || img2vidStep === 'generating-video') && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              Generate Image → Video
            </button>
            {!falApiKey && <p className="text-xs text-yellow-400">Enter your FAL API key above first</p>}
          </div>

          {/* Status */}
          {img2vidStatus && (
            <div className="bg-primary-900/20 border border-primary-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
              {(img2vidStep === 'generating-image' || img2vidStep === 'generating-video') && (
                <Loader2 className="w-5 h-5 text-primary-400 animate-spin shrink-0" />
              )}
              <span className="text-sm text-primary-300">{img2vidStatus}</span>
            </div>
          )}

          {/* Results side by side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image result */}
            <div className="bg-surface-light border border-border rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold text-text flex items-center gap-2">
                <ImagePlus className="w-4 h-4 text-primary-400" />
                Step 1: Image (First Frame)
              </h3>
              {img2vidImageUrl ? (
                <>
                  <img src={img2vidImageUrl} alt="Generated frame" className="w-full rounded-lg" />
                  <input value={img2vidImageUrl} readOnly className="input-field text-[10px]" dir="ltr" onClick={(e) => (e.target as HTMLInputElement).select()} />
                  {img2vidStep === 'image-ready' && (
                    <button
                      onClick={handleImg2VidVideoOnly}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                    >
                      <Video className="w-4 h-4" />
                      Generate Video from this Image
                    </button>
                  )}
                </>
              ) : (
                <div className="h-48 flex items-center justify-center text-text-muted text-sm rounded-lg bg-surface-lighter">
                  {img2vidStep === 'generating-image' ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Generating...</span>
                  ) : (
                    'Image will appear here'
                  )}
                </div>
              )}
            </div>

            {/* Video result */}
            <div className="bg-surface-light border border-border rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold text-text flex items-center gap-2">
                <Video className="w-4 h-4 text-purple-400" />
                Step 2: Video (from Image)
              </h3>
              {img2vidVideoUrl ? (
                <>
                  <video src={img2vidVideoUrl} controls className="w-full rounded-lg" />
                  <input value={img2vidVideoUrl} readOnly className="input-field text-[10px]" dir="ltr" onClick={(e) => (e.target as HTMLInputElement).select()} />
                </>
              ) : (
                <div className="h-48 flex items-center justify-center text-text-muted text-sm rounded-lg bg-surface-lighter">
                  {img2vidStep === 'generating-video' ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Generating video...</span>
                  ) : (
                    'Video will appear here'
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Single-tab results (image/video tabs only) */}
      {tab !== 'img2vid' && resultUrl && (
        <div className="bg-surface-light border border-green-500/30 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold text-green-400">Result</h3>
          {resultType === 'image' ? (
            <img src={resultUrl} alt="Generated" className="w-full rounded-lg" />
          ) : (
            <video src={resultUrl} controls className="w-full rounded-lg" />
          )}
          <input value={resultUrl} readOnly className="input-field text-xs" dir="ltr" onClick={(e) => (e.target as HTMLInputElement).select()} />
        </div>
      )}

      {/* Raw response */}
      {rawResponse && (
        <details className="bg-surface-light border border-border rounded-xl p-4">
          <summary className="text-xs font-medium text-text-muted cursor-pointer">Raw API Response</summary>
          <pre className="mt-2 text-xs text-text-muted overflow-x-auto whitespace-pre-wrap max-h-80 overflow-y-auto">
            {rawResponse}
          </pre>
        </details>
      )}
    </div>
  );
}

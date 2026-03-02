import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { FAL_IMAGE_MODELS, FAL_VIDEO_MODELS } from '../config/fal-models';

type Tab = 'image' | 'video';

export function TestGenerationPage() {
  const { falApiKey, setFalApiKey } = useSettingsStore();
  const [tab, setTab] = useState<Tab>('image');
  const [prompt, setPrompt] = useState('A cozy coffee shop interior, warm lighting, cinematic, 16:9');
  const [imageModel, setImageModel] = useState(FAL_IMAGE_MODELS[0].id);
  const [videoModel, setVideoModel] = useState(FAL_VIDEO_MODELS[0].id);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultType, setResultType] = useState<'image' | 'video'>('image');
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<string | null>(null);

  const getHeaders = (): Record<string, string> => {
    const h: Record<string, string> = { 'Content-Type': 'application/json' };
    if (falApiKey) h['Authorization'] = `Key ${falApiKey}`;
    return h;
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);
    setResultUrl(null);
    setRawResponse(null);

    try {
      const model = FAL_IMAGE_MODELS.find((m) => m.id === imageModel);
      const body = {
        prompt,
        ...model?.defaultParams,
      };

      const res = await fetch(`/api/fal/${imageModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setRawResponse(JSON.stringify(data, null, 2));

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${JSON.stringify(data)}`);
      }

      const url =
        data?.images?.[0]?.url ??
        data?.output?.images?.[0]?.url ??
        data?.image?.url;

      if (url) {
        setResultUrl(url);
        setResultType('image');
      } else {
        setError('Response OK but no image URL found. Check raw response below.');
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
      const body: Record<string, unknown> = {
        prompt,
        ...model?.defaultParams,
      };
      if (imageUrlInput.trim()) {
        body.image_url = imageUrlInput.trim();
      }

      const res = await fetch(`/api/fal/${videoModel}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setRawResponse(JSON.stringify(data, null, 2));

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${JSON.stringify(data)}`);
      }

      // Check for immediate video result
      const url =
        data?.video?.url ??
        data?.output?.video?.url ??
        data?.video_url;

      if (url) {
        setResultUrl(url);
        setResultType('video');
      } else if (data.request_id) {
        setError(`Queued! request_id: ${data.request_id}. Polling not implemented on test page — check raw response.`);
      } else {
        setError('Response OK but no video URL found. Check raw response below.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-text">FAL.ai Test Page</h2>
      <p className="text-sm text-text-muted">
        Test image and video generation directly. Results and raw API responses are shown below.
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
      </div>

      {/* Form */}
      <div className="bg-surface-light border border-border rounded-xl p-4 space-y-4">
        {/* Model selector */}
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1">Model</label>
          {tab === 'image' ? (
            <select
              value={imageModel}
              onChange={(e) => setImageModel(e.target.value)}
              className="input-field"
            >
              {FAL_IMAGE_MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
              ))}
            </select>
          ) : (
            <select
              value={videoModel}
              onChange={(e) => setVideoModel(e.target.value)}
              className="input-field"
            >
              {FAL_VIDEO_MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.name} ({m.cost})</option>
              ))}
            </select>
          )}
        </div>

        {/* Prompt */}
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1">Prompt</label>
          <textarea
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="input-field"
            placeholder="Describe what you want to generate..."
          />
        </div>

        {/* Image URL for video (optional) */}
        {tab === 'video' && (
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1">
              Image URL (optional, for img2vid models)
            </label>
            <input
              value={imageUrlInput}
              onChange={(e) => setImageUrlInput(e.target.value)}
              className="input-field"
              placeholder="https://..."
              dir="ltr"
            />
          </div>
        )}

        {/* Generate button */}
        <button
          onClick={tab === 'image' ? handleGenerateImage : handleGenerateVideo}
          disabled={loading || !prompt.trim() || !falApiKey}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-40 ${
            tab === 'image'
              ? 'bg-primary-600 hover:bg-primary-700'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Generating...' : tab === 'image' ? 'Generate Image' : 'Generate Video'}
        </button>
        {!falApiKey && (
          <p className="text-xs text-yellow-400">Enter your FAL API key above first</p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Result */}
      {resultUrl && (
        <div className="bg-surface-light border border-green-500/30 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold text-green-400">Result</h3>
          {resultType === 'image' ? (
            <img src={resultUrl} alt="Generated" className="w-full rounded-lg" />
          ) : (
            <video src={resultUrl} controls className="w-full rounded-lg" />
          )}
          <input
            value={resultUrl}
            readOnly
            className="input-field text-xs"
            dir="ltr"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
        </div>
      )}

      {/* Raw response */}
      {rawResponse && (
        <details className="bg-surface-light border border-border rounded-xl p-4">
          <summary className="text-xs font-medium text-text-muted cursor-pointer">
            Raw API Response
          </summary>
          <pre className="mt-2 text-xs text-text-muted overflow-x-auto whitespace-pre-wrap max-h-80 overflow-y-auto">
            {rawResponse}
          </pre>
        </details>
      )}
    </div>
  );
}

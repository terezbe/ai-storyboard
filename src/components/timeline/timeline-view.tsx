import { useTranslation } from 'react-i18next';
import {
  Loader2, ImagePlus, Video, CheckCircle, AlertCircle, MessageCircle,
  Volume2, VolumeX,
} from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import { useSettingsStore } from '../../store/settings-store';
import {
  useGenerationStore,
  useShotImageStatus,
  useShotVideoStatus,
  useShotImageError,
} from '../../store/generation-store';
import { useGeneration } from '../../hooks/use-generation';
import { MOOD_COLORS } from '../storyboard/shot-constants';
import { TimelineInlineEditor } from './timeline-inline-editor';
import type { Shot } from '../../types/project';

const PIXELS_PER_SECOND = 20;
const MIN_CLIP_WIDTH = 80;
const TRACK_HEIGHT = 96;

function TimelineClip({ shot, isSelected, onSelect }: {
  shot: Shot;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const { t } = useTranslation();
  const { generateImage, generateVideo } = useGeneration();
  const imageStatus = useShotImageStatus(shot.id);
  const videoStatus = useShotVideoStatus(shot.id);
  const imageError = useShotImageError(shot.id);

  const isGeneratingImage = imageStatus === 'generating';
  const isGeneratingVideo = videoStatus === 'generating';
  const hasImage = !!shot.imageUrl;
  const hasPrompts = !!(shot.prompts.environment?.text || shot.prompts.character?.text);
  const hasVideoPrompt = !!(shot.prompts.video?.text || shot.videoPrompt);
  const clipWidth = Math.max(shot.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH);
  const moodColor = MOOD_COLORS[shot.mood] || '#a855f7';

  return (
    <div
      onClick={onSelect}
      style={{
        width: clipWidth,
        height: TRACK_HEIGHT,
        borderColor: moodColor,
        backgroundImage: hasImage ? `url(${shot.imageUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: hasImage ? undefined : `${moodColor}${isSelected ? 'cc' : '44'}`,
      }}
      className={`relative rounded-lg cursor-pointer transition-all shrink-0 border overflow-hidden group ${
        isSelected ? 'ring-2 ring-white/30' : 'hover:opacity-90'
      }`}
    >
      {/* Dark overlay on image for readability */}
      {hasImage && (
        <div className={`absolute inset-0 transition-colors ${
          isSelected ? 'bg-black/20' : 'bg-black/30 group-hover:bg-black/40'
        }`} />
      )}

      {/* Shot number */}
      <div className="absolute top-1 start-1.5 z-10">
        <span className="px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">
          {shot.orderIndex + 1}
        </span>
      </div>

      {/* Title (only if clip wide enough) */}
      {clipWidth >= 100 && (
        <div className="absolute bottom-1 start-1.5 end-1.5 z-10">
          <span className="text-[10px] text-white truncate block drop-shadow-lg">
            {shot.title}
          </span>
        </div>
      )}

      {/* Status indicators (top-end) */}
      <div className="absolute top-1 end-1.5 z-10 flex items-center gap-1">
        {isGeneratingImage && (
          <Loader2 className="w-3.5 h-3.5 text-primary-400 animate-spin" />
        )}
        {imageStatus === 'completed' && hasImage && (
          <CheckCircle className="w-3.5 h-3.5 text-green-400 drop-shadow-lg" />
        )}
        {imageStatus === 'error' && (
          <span title={imageError}><AlertCircle className="w-3.5 h-3.5 text-red-400" /></span>
        )}
        {shot.videoUrl && (
          <Video className="w-3.5 h-3.5 text-purple-400 drop-shadow-lg" />
        )}
        {/* Dialogue indicator */}
        {shot.dialogue?.text?.trim() && (
          <MessageCircle className="w-3.5 h-3.5 text-amber-400 drop-shadow-lg" />
        )}
      </div>

      {/* Generate Image button on hover (no image, has prompts) */}
      {!hasImage && !isGeneratingImage && imageStatus !== 'error' && hasPrompts && (
        <button
          onClick={(e) => { e.stopPropagation(); generateImage(shot); }}
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity"
          title={t('generation.generateImage')}
        >
          <ImagePlus className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Generate Video button on hover (has image, has video prompt) */}
      {hasImage && hasVideoPrompt && !isGeneratingVideo && !shot.videoUrl && (
        <button
          onClick={(e) => { e.stopPropagation(); generateVideo(shot); }}
          className="absolute bottom-1 end-1.5 z-10 opacity-0 group-hover:opacity-100 flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-600/80 text-white text-[9px] font-medium transition-opacity"
          title={t('generation.generateVideo')}
        >
          <Video className="w-3 h-3" />
        </button>
      )}

      {/* Video generating spinner */}
      {isGeneratingVideo && (
        <div className="absolute bottom-1 end-1.5 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-600/60 text-white text-[9px]">
          <Loader2 className="w-3 h-3 animate-spin" />
        </div>
      )}
    </div>
  );
}

export function TimelineView() {
  const { t } = useTranslation();
  const { currentProject } = useProjectStore();
  const { selectedShotId, setSelectedShotId } = useEditorStore();
  const { generateAllImages, generateAllVideos } = useGeneration();
  const enableAudio = useSettingsStore((s) => s.enableAudioGeneration);
  const setEnableAudio = useSettingsStore((s) => s.setEnableAudioGeneration);
  const batch = useGenerationStore((s) => s.batch);
  const videoBatch = useGenerationStore((s) => s.videoBatch);
  if (!currentProject) return null;
  const { intro, shots, outro } = currentProject.storyboard;
  const selectedShot = shots.find((s) => s.id === selectedShotId) || null;

  const totalDuration =
    (intro?.duration || 0) + shots.reduce((s, sh) => s + sh.duration, 0) + (outro?.duration || 0);

  // Calculate actual timeline width respecting min clip widths
  const introWidth = intro ? Math.max(intro.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH) : 0;
  const outroWidth = outro ? Math.max(outro.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH) : 0;
  const shotsWidth = shots.reduce(
    (sum, sh) => sum + Math.max(sh.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH), 0
  );
  const clipCount = shots.length + (intro ? 1 : 0) + (outro ? 1 : 0);
  const gapPixels = Math.max(clipCount - 1, 0);
  const timelineWidth = Math.max(introWidth + shotsWidth + outroWidth + gapPixels + 40, 800);

  // Time markers
  const markers: number[] = [];
  for (let i = 0; i <= totalDuration; i += 5) markers.push(i);

  // Shots needing generation
  const shotsWithPrompts = shots.filter(
    (s) => !s.imageUrl && (s.prompts.environment?.text || s.prompts.character?.text)
  );

  // Shots needing video generation
  const shotsWithVideoPrompts = shots.filter(
    (s) => !s.videoUrl && (s.prompts.video?.text || s.videoPrompt)
  );

  return (
    <div className="flex flex-col h-full">
      {/* Top toolbar: Batch generate + progress */}
      <div className="px-6 pt-4 pb-2 shrink-0">
        {batch.isRunning ? (
          <div className="bg-primary-900/30 border border-primary-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-primary-400 animate-spin shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-primary-300">
                  {t('generation.generateAllImages')}
                </span>
                <span className="text-xs text-primary-400 font-mono">
                  {batch.completed}/{batch.total}
                </span>
              </div>
              <div className="h-2 bg-surface-lighter rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${batch.total > 0 ? (batch.completed / batch.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        ) : shotsWithPrompts.length > 0 ? (
          <button
            onClick={generateAllImages}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-colors"
          >
            <ImagePlus className="w-4 h-4" />
            {t('generation.generateAllImages')} ({shotsWithPrompts.length})
          </button>
        ) : null}

        {/* Video batch generate */}
        <div className="mt-2" />
        {videoBatch.isRunning ? (
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-purple-400 animate-spin shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-purple-300">
                  {t('generation.generateAllVideos')}
                </span>
                <span className="text-xs text-purple-400 font-mono">
                  {videoBatch.completed}/{videoBatch.total}
                </span>
              </div>
              <div className="h-2 bg-surface-lighter rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${videoBatch.total > 0 ? (videoBatch.completed / videoBatch.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        ) : shotsWithVideoPrompts.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => generateAllVideos()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              <Video className="w-4 h-4" />
              {t('generation.generateAllVideos')} ({shotsWithVideoPrompts.length})
            </button>
            {/* Audio toggle */}
            <button
              onClick={() => setEnableAudio(!enableAudio)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                enableAudio
                  ? 'bg-amber-600/20 border-amber-500/40 text-amber-300 hover:bg-amber-600/30'
                  : 'bg-surface-lighter border-border text-text-muted hover:bg-surface-light'
              }`}
              title={enableAudio ? t('generation.audioOn') : t('generation.audioOff')}
            >
              {enableAudio ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
              <span className="text-xs">
                {enableAudio ? t('generation.audioOn') : t('generation.audioOff')}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Scrollable timeline tracks */}
      <div className="flex-1 overflow-auto px-6 pb-4">
        <div style={{ width: timelineWidth }} className="min-w-full">
          {/* Time ruler */}
          <div className="h-6 relative mb-2 border-b border-border">
            {markers.map((sec) => (
              <div
                key={sec}
                className="absolute text-[10px] text-text-muted"
                style={{ left: sec * PIXELS_PER_SECOND }}
              >
                <div className="w-px h-2 bg-border mb-0.5" />
                {sec}s
              </div>
            ))}
          </div>

          {/* Video track */}
          <div className="flex gap-px mb-2" style={{ minHeight: TRACK_HEIGHT }}>
            {/* Intro clip */}
            {intro && (
              <div
                onClick={() => setSelectedShotId('__intro__')}
                style={{
                  width: Math.max(intro.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH),
                  height: TRACK_HEIGHT,
                  backgroundImage: intro.imageUrl ? `url(${intro.imageUrl})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={`rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all shrink-0 overflow-hidden relative ${
                  selectedShotId === '__intro__'
                    ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                    : 'bg-primary-600/30 text-primary-300 hover:bg-primary-600/50'
                }`}
              >
                {intro.imageUrl && <div className="absolute inset-0 bg-black/30" />}
                <span className="relative z-10">{t('editor.intro')}</span>
              </div>
            )}

            {/* Shot clips */}
            {shots.map((shot) => (
              <TimelineClip
                key={shot.id}
                shot={shot}
                isSelected={selectedShotId === shot.id}
                onSelect={() => setSelectedShotId(shot.id)}
              />
            ))}

            {/* Outro clip */}
            {outro && (
              <div
                onClick={() => setSelectedShotId('__outro__')}
                style={{
                  width: Math.max(outro.duration * PIXELS_PER_SECOND, MIN_CLIP_WIDTH),
                  height: TRACK_HEIGHT,
                  backgroundImage: outro.imageUrl ? `url(${outro.imageUrl})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={`rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all shrink-0 overflow-hidden relative ${
                  selectedShotId === '__outro__'
                    ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                    : 'bg-primary-600/30 text-primary-300 hover:bg-primary-600/50'
                }`}
              >
                {outro.imageUrl && <div className="absolute inset-0 bg-black/30" />}
                <span className="relative z-10">{t('editor.outro')}</span>
              </div>
            )}
          </div>

          {/* Music track placeholder */}
          <div className="h-8 bg-surface-lighter rounded-lg flex items-center px-3 text-xs text-text-muted">
            {t('timeline.musicTrack', 'Music Track')}
          </div>

          {/* Total duration */}
          <div className="mt-3 text-xs text-text-muted text-end">
            {t('shot.duration')}: {totalDuration}s
          </div>
        </div>
      </div>

      {/* Inline editor below timeline */}
      {selectedShot && <TimelineInlineEditor shot={selectedShot} />}
    </div>
  );
}

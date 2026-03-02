import { useTranslation } from 'react-i18next';
import { Camera, Clock, Sparkles, Film, Copy, Loader2, ImagePlus, Video, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import {
  useGenerationStore,
  useShotImageStatus,
  useShotVideoStatus,
  useShotImageError,
  useShotVideoError,
} from '../../store/generation-store';
import { useGeneration } from '../../hooks/use-generation';
import type { Shot, StoryboardSection } from '../../types/project';
import { useState } from 'react';

const MOOD_BG: Record<string, string> = {
  energetic: 'from-mood-energetic/20 to-mood-energetic/5',
  romantic: 'from-mood-romantic/20 to-mood-romantic/5',
  dramatic: 'from-mood-dramatic/20 to-mood-dramatic/5',
  festive: 'from-mood-festive/20 to-mood-festive/5',
  emotional: 'from-mood-emotional/20 to-mood-emotional/5',
  funny: 'from-mood-funny/20 to-mood-funny/5',
  elegant: 'from-mood-elegant/20 to-mood-elegant/5',
  mysterious: 'from-mood-mysterious/20 to-mood-mysterious/5',
  calm: 'from-mood-calm/20 to-mood-calm/5',
  exciting: 'from-mood-exciting/20 to-mood-exciting/5',
};

const MOOD_BORDER: Record<string, string> = {
  energetic: 'border-mood-energetic/30',
  romantic: 'border-mood-romantic/30',
  dramatic: 'border-mood-dramatic/30',
  festive: 'border-mood-festive/30',
  emotional: 'border-mood-emotional/30',
  funny: 'border-mood-funny/30',
  elegant: 'border-mood-elegant/30',
  mysterious: 'border-mood-mysterious/30',
  calm: 'border-mood-calm/30',
  exciting: 'border-mood-exciting/30',
};

function CopyVideoPromptBtn({ prompt }: { prompt?: string }) {
  const [copied, setCopied] = useState(false);
  if (!prompt) return null;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-1 px-2 py-1 rounded bg-primary-600/80 hover:bg-primary-500 text-white text-[10px] font-medium transition-colors"
      title="Copy video prompt"
    >
      {copied ? <Copy className="w-3 h-3" /> : <Film className="w-3 h-3" />}
      {copied ? 'Copied!' : 'Create Video'}
    </button>
  );
}

function SectionCard({ section, label }: { section: StoryboardSection; label: string }) {
  return (
    <div className="rounded-xl border border-primary-500/40 overflow-hidden">
      <div className="h-28 relative flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-primary-500/5">
        {section.imageUrl ? (
          <img src={section.imageUrl} alt={label} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white/10">{label}</span>
        )}
        <span className="absolute top-2 start-2 px-2 py-0.5 rounded bg-primary-600 text-white text-[10px] font-bold uppercase">
          {label}
        </span>
        {section.videoPrompt && (
          <div className="absolute bottom-2 end-2">
            <CopyVideoPromptBtn prompt={section.videoPrompt} />
          </div>
        )}
      </div>
      <div className="p-3 bg-surface-light">
        <h4 className="font-medium text-text text-sm truncate mb-1">{section.title}</h4>
        <p className="text-xs text-text-muted truncate">{section.textOverlay}</p>
        <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
          <Clock className="w-3 h-3" /> {section.duration}s
        </div>
      </div>
    </div>
  );
}

function ShotCard({ shot }: { shot: Shot }) {
  const { t } = useTranslation();
  const { selectedShotId, setSelectedShotId } = useEditorStore();
  const isSelected = selectedShotId === shot.id;
  const hasPrompts = !!(shot.prompts.environment || shot.prompts.character || shot.prompts.video);
  const { generateImage, generateVideo } = useGeneration();

  // Use primitive selectors so Zustand triggers re-renders on status changes
  const imageStatus = useShotImageStatus(shot.id);
  const videoStatus = useShotVideoStatus(shot.id);
  const imageError = useShotImageError(shot.id);
  const videoError = useShotVideoError(shot.id);

  const isGeneratingImage = imageStatus === 'generating';
  const isGeneratingVideo = videoStatus === 'generating';
  const imageCompleted = imageStatus === 'completed';

  return (
    <div
      onClick={() => setSelectedShotId(shot.id)}
      className={`rounded-xl border overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${
        isSelected
          ? 'border-primary-500 ring-2 ring-primary-500/30'
          : isGeneratingImage
            ? 'border-primary-500/50 ring-1 ring-primary-500/20'
            : imageStatus === 'error'
              ? 'border-red-500/50'
              : imageCompleted
                ? 'border-green-500/40'
                : `${MOOD_BORDER[shot.mood] || 'border-border'} hover:border-primary-500/50`
      }`}
    >
      <div className={`h-28 relative flex items-center justify-center ${
        shot.imageUrl ? '' : `bg-gradient-to-br ${MOOD_BG[shot.mood] || 'from-primary-500/20 to-primary-500/5'}`
      }`}>
        {shot.imageUrl ? (
          <img src={shot.imageUrl} alt={shot.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white/10">{shot.orderIndex + 1}</span>
        )}

        {/* Generating overlay with spinner + text */}
        {isGeneratingImage && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1.5">
            <Loader2 className="w-6 h-6 text-primary-400 animate-spin" />
            <span className="text-[10px] text-primary-300 font-medium animate-pulse">
              {t('generation.generating')}
            </span>
          </div>
        )}

        {/* Error overlay */}
        {imageStatus === 'error' && imageError && (
          <div className="absolute inset-0 bg-red-900/40 flex flex-col items-center justify-center gap-1 p-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-[9px] text-red-300 text-center line-clamp-2">{imageError}</span>
          </div>
        )}

        {/* Completed flash (shows briefly when image just arrived) */}
        {imageCompleted && shot.imageUrl && (
          <div className="absolute top-2 end-2">
            <CheckCircle className="w-4 h-4 text-green-400 drop-shadow-lg" />
          </div>
        )}

        {/* Generate Image button hover (on empty cards) */}
        {!shot.imageUrl && !isGeneratingImage && imageStatus !== 'error' && hasPrompts && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              generateImage(shot);
            }}
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity"
            title={t('generation.generateImage')}
          >
            <ImagePlus className="w-6 h-6 text-white" />
          </button>
        )}

        {shot.imageUrl && !imageCompleted && (
          <span className="absolute top-2 start-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">
            {shot.orderIndex + 1}
          </span>
        )}
        {hasPrompts && !isGeneratingImage && imageStatus !== 'error' && !imageCompleted && (
          <div className="absolute top-2 end-2">
            <Sparkles className="w-4 h-4 text-primary-400" />
          </div>
        )}

        {/* Bottom action buttons */}
        <div className="absolute bottom-2 end-2 flex items-center gap-1">
          {shot.imageUrl && (shot.prompts.video?.text || shot.videoPrompt) && !isGeneratingVideo && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                generateVideo(shot);
              }}
              className="flex items-center gap-1 px-2 py-1 rounded bg-purple-600/80 hover:bg-purple-500 text-white text-[10px] font-medium transition-colors"
              title={t('generation.generateVideo')}
            >
              <Video className="w-3 h-3" />
              {t('generation.generateVideo')}
            </button>
          )}
          {isGeneratingVideo && (
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-purple-600/60 text-white text-[10px]">
              <Loader2 className="w-3 h-3 animate-spin" />
              {t('generation.generating')}
            </span>
          )}
          {videoStatus === 'error' && videoError && (
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-red-600/80 text-white text-[10px]" title={videoError}>
              <AlertCircle className="w-3 h-3" />
            </span>
          )}
          {!isGeneratingVideo && !shot.imageUrl && shot.videoPrompt && (
            <CopyVideoPromptBtn prompt={shot.videoPrompt} />
          )}
        </div>

        {!shot.imageUrl && shot.environment.setting && !isGeneratingImage && imageStatus !== 'error' && (
          <p className="absolute bottom-2 inset-x-2 text-xs text-text-muted truncate text-center">
            {shot.environment.setting}
          </p>
        )}
      </div>

      {/* Card footer */}
      <div className="p-3 bg-surface-light">
        <h4 className="font-medium text-text text-sm truncate mb-2">
          {shot.title || `Shot ${shot.orderIndex + 1}`}
        </h4>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {shot.duration}s
          </span>
          <span className="flex items-center gap-1">
            <Camera className="w-3 h-3" /> {t(`shot.cameraAngles.${shot.cameraAngle}`)}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-lighter text-text-muted">
            {t(`shot.moods.${shot.mood}`)}
          </span>
          {isGeneratingImage && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary-900/40 text-primary-300 flex items-center gap-1">
              <Loader2 className="w-2.5 h-2.5 animate-spin" />
              generating
            </span>
          )}
          {imageCompleted && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-900/40 text-green-300">
              done
            </span>
          )}
          {imageStatus === 'error' && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 text-red-300">
              failed
            </span>
          )}
          {shot.videoUrl && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-900/40 text-purple-300">
              video
            </span>
          )}
        </div>
        {/* Regenerate Image button — visible when shot already has an image */}
        {shot.imageUrl && hasPrompts && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              generateImage(shot);
            }}
            disabled={isGeneratingImage}
            className="mt-2 w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium bg-surface-lighter hover:bg-primary-600/30 text-text-muted hover:text-primary-300 border border-border hover:border-primary-500/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingImage ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                {t('generation.generating')}
              </>
            ) : (
              <>
                <RefreshCw className="w-3.5 h-3.5" />
                {t('generation.regenerateImage', 'Regenerate Image')}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function CardView() {
  const { t } = useTranslation();
  const { currentProject } = useProjectStore();
  const { generateAllImages } = useGeneration();
  const batch = useGenerationStore((s) => s.batch);

  if (!currentProject) return null;
  const { intro, shots, outro } = currentProject.storyboard;

  if (shots.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-text-muted">
        {t('editor.noShots')}
      </div>
    );
  }

  const shotsWithPrompts = shots.filter(
    (s) => !s.imageUrl && (s.prompts.environment?.text || s.prompts.character?.text)
  );

  return (
    <div>
      {/* Batch generation banner — always visible while running */}
      {batch.isRunning && (
        <div className="px-6 pt-4 pb-2">
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
        </div>
      )}

      {/* Generate All button — shown when not already running and there are shots to generate */}
      {!batch.isRunning && shotsWithPrompts.length > 0 && (
        <div className="px-6 pt-4 flex items-center gap-3">
          <button
            onClick={generateAllImages}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-colors"
          >
            <ImagePlus className="w-4 h-4" />
            {t('generation.generateAllImages')} ({shotsWithPrompts.length})
          </button>
        </div>
      )}

      <div className="p-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {intro && <SectionCard section={intro} label="Intro" />}
        {shots.map((shot) => (
          <ShotCard key={shot.id} shot={shot} />
        ))}
        {outro && <SectionCard section={outro} label="Outro" />}
      </div>
    </div>
  );
}

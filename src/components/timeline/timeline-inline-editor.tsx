import { useTranslation } from 'react-i18next';
import {
  X, Sparkles, Loader2, ImagePlus, RefreshCw, Video, AlertCircle,
} from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useSettingsStore } from '../../store/settings-store';
import { useEditorStore } from '../../store/editor-store';
import {
  useShotImageStatus, useShotVideoStatus,
  useShotImageError, useShotVideoError,
} from '../../store/generation-store';
import { useGeneration } from '../../hooks/use-generation';
import { generateAllPromptsForShot } from '../../lib/prompt-engine';
import { CAMERA_ANGLES, MOODS, TRANSITIONS } from '../storyboard/shot-constants';
import type { Shot, CameraAngle, Mood, TransitionType } from '../../types/project';

export function TimelineInlineEditor({ shot }: { shot: Shot }) {
  const { t } = useTranslation();
  const { updateShot, updateShotPrompts } = useProjectStore();
  const { setSelectedShotId } = useEditorStore();
  const settings = useSettingsStore();
  const { generateImage, generateVideo } = useGeneration();

  const imageStatus = useShotImageStatus(shot.id);
  const videoStatus = useShotVideoStatus(shot.id);
  const imageError = useShotImageError(shot.id);
  const videoError = useShotVideoError(shot.id);

  const isGeneratingImage = imageStatus === 'generating';
  const isGeneratingVideo = videoStatus === 'generating';
  const hasImagePrompt = !!(shot.prompts.environment?.text || shot.prompts.character?.text);
  const hasVideoPrompt = !!(shot.prompts.video?.text || shot.videoPrompt);

  const update = (updates: Partial<Shot>) => updateShot(shot.id, updates);

  const handleGenerateAll = () => {
    const prompts = generateAllPromptsForShot(
      shot,
      settings.preferredImageModel,
      settings.preferredVideoModel,
      settings.preferredMusicModel,
      'standard'
    );
    updateShotPrompts(shot.id, prompts);
  };

  return (
    <div className="border-t border-border bg-surface-light shrink-0">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <h3 className="font-semibold text-sm text-text">
          {shot.title || `Shot ${shot.orderIndex + 1}`}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleGenerateAll}
            className="flex items-center gap-1 text-xs bg-primary-600 hover:bg-primary-700 text-white px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t('prompt.generateAll')}
          </button>
          <button
            onClick={() => setSelectedShotId(null)}
            className="p-1 rounded hover:bg-surface-lighter text-text-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="grid grid-cols-[240px_1fr_1fr] gap-4 p-4 max-h-[400px] overflow-y-auto">
        {/* Column 1: Media */}
        <div className="space-y-3">
          {/* Image preview / generate */}
          <div className="rounded-lg overflow-hidden border border-border">
            {shot.imageUrl ? (
              <div className="relative group">
                <img src={shot.imageUrl} alt={shot.title} className="w-full h-36 object-cover" />
                <button
                  onClick={() => generateImage(shot)}
                  disabled={isGeneratingImage || !hasImagePrompt}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity disabled:cursor-not-allowed"
                >
                  {isGeneratingImage ? (
                    <Loader2 className="w-6 h-6 text-white animate-spin" />
                  ) : (
                    <RefreshCw className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            ) : (
              <div className="h-36 flex flex-col items-center justify-center gap-2 bg-surface-lighter">
                {isGeneratingImage ? (
                  <>
                    <Loader2 className="w-6 h-6 text-primary-400 animate-spin" />
                    <span className="text-xs text-text-muted">{t('generation.generating')}</span>
                  </>
                ) : (
                  <button
                    onClick={() => generateImage(shot)}
                    disabled={!hasImagePrompt}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-primary-600 hover:bg-primary-700 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ImagePlus className="w-4 h-4" />
                    {t('generation.generateImage')}
                  </button>
                )}
                {!hasImagePrompt && !isGeneratingImage && (
                  <span className="text-[10px] text-text-muted">{t('generation.noPrompt')}</span>
                )}
              </div>
            )}
            {imageError && (
              <div className="px-3 py-1.5 bg-red-900/30 text-red-300 text-xs flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {imageError}
              </div>
            )}
          </div>

          {/* Video preview / generate */}
          <div className="rounded-lg border border-border overflow-hidden">
            {shot.videoUrl ? (
              <video src={shot.videoUrl} controls className="w-full h-36 object-cover bg-black" />
            ) : (
              <div className="p-3 flex items-center justify-between bg-surface-lighter">
                <span className="text-xs text-text-muted">
                  {settings.language === 'he' ? 'וידאו' : 'Video'}
                </span>
                {isGeneratingVideo ? (
                  <span className="flex items-center gap-1.5 text-xs text-purple-300">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    {t('generation.generating')}
                  </span>
                ) : (
                  <button
                    onClick={() => generateVideo(shot)}
                    disabled={!hasVideoPrompt}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs bg-purple-600 hover:bg-purple-700 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Video className="w-3.5 h-3.5" />
                    {t('generation.generateVideo')}
                  </button>
                )}
              </div>
            )}
            {videoError && (
              <div className="px-3 py-1.5 bg-red-900/30 text-red-300 text-xs flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {videoError}
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Basic fields */}
        <div className="space-y-3">
          <Field label={t('shot.title')}>
            <input
              value={shot.title}
              onChange={(e) => update({ title: e.target.value })}
              className="input-field"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label={t('shot.duration')}>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={300}
                  value={shot.duration}
                  onChange={(e) => update({ duration: Number(e.target.value) || 1 })}
                  className="input-field w-20"
                />
                <span className="text-xs text-text-muted">{t('shot.seconds')}</span>
              </div>
            </Field>

            <Field label={t('shot.mood')}>
              <select
                value={shot.mood}
                onChange={(e) => update({ mood: e.target.value as Mood })}
                className="input-field"
              >
                {MOODS.map((m) => (
                  <option key={m} value={m}>{t(`shot.moods.${m}`)}</option>
                ))}
              </select>
            </Field>

            <Field label={t('shot.camera')}>
              <select
                value={shot.cameraAngle}
                onChange={(e) => update({ cameraAngle: e.target.value as CameraAngle })}
                className="input-field"
              >
                {CAMERA_ANGLES.map((a) => (
                  <option key={a} value={a}>{t(`shot.cameraAngles.${a}`)}</option>
                ))}
              </select>
            </Field>

            <Field label={t('shot.transition')}>
              <select
                value={shot.transition}
                onChange={(e) => update({ transition: e.target.value as TransitionType })}
                className="input-field"
              >
                {TRANSITIONS.map((tr) => (
                  <option key={tr} value={tr}>{t(`shot.transitions.${tr}`)}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Dialogue */}
          <fieldset className="border border-border rounded-lg p-3 space-y-2">
            <legend className="text-xs font-semibold text-primary-300 px-1">
              {t('shot.dialogue')}
            </legend>
            <SmallField label={t('shot.text')}>
              <textarea
                rows={2}
                value={shot.dialogue.text}
                onChange={(e) =>
                  update({ dialogue: { ...shot.dialogue, text: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.voiceStyle')}>
              <input
                value={shot.dialogue.voiceStyle}
                onChange={(e) =>
                  update({ dialogue: { ...shot.dialogue, voiceStyle: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
          </fieldset>
        </div>

        {/* Column 3: Detail fields */}
        <div className="space-y-3">
          {/* Environment */}
          <fieldset className="border border-border rounded-lg p-3 space-y-2">
            <legend className="text-xs font-semibold text-primary-300 px-1">
              {t('shot.environment')}
            </legend>
            <SmallField label={t('shot.setting')}>
              <textarea
                rows={2}
                value={shot.environment.setting}
                onChange={(e) =>
                  update({ environment: { ...shot.environment, setting: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.lighting')}>
              <input
                value={shot.environment.lighting}
                onChange={(e) =>
                  update({ environment: { ...shot.environment, lighting: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.props')}>
              <input
                value={shot.environment.props}
                onChange={(e) =>
                  update({ environment: { ...shot.environment, props: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.atmosphere')}>
              <input
                value={shot.environment.atmosphere}
                onChange={(e) =>
                  update({ environment: { ...shot.environment, atmosphere: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
          </fieldset>

          {/* Character */}
          <fieldset className="border border-border rounded-lg p-3 space-y-2">
            <legend className="text-xs font-semibold text-primary-300 px-1">
              {t('shot.character')}
            </legend>
            <SmallField label={t('shot.appearance')}>
              <textarea
                rows={2}
                value={shot.character.appearance}
                onChange={(e) =>
                  update({ character: { ...shot.character, appearance: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.outfit')}>
              <input
                value={shot.character.outfit}
                onChange={(e) =>
                  update({ character: { ...shot.character, outfit: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.expression')}>
              <input
                value={shot.character.expression}
                onChange={(e) =>
                  update({ character: { ...shot.character, expression: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
            <SmallField label={t('shot.action')}>
              <input
                value={shot.character.action}
                onChange={(e) =>
                  update({ character: { ...shot.character, action: e.target.value } })
                }
                className="input-field"
              />
            </SmallField>
          </fieldset>

          {/* Notes */}
          <Field label={t('shot.notes')}>
            <textarea
              rows={2}
              value={shot.notes}
              onChange={(e) => update({ notes: e.target.value })}
              className="input-field"
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-text-muted mb-1">{label}</label>
      {children}
    </div>
  );
}

function SmallField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] text-text-muted mb-0.5">{label}</label>
      {children}
    </div>
  );
}

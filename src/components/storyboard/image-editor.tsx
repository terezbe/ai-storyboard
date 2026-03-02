/**
 * Image Editor — Kolbo-style Angle Variations UI.
 * Full-width panel with large image preview, rotation/tilt/zoom
 * sliders, 3D orientation cube, and generate button.
 */
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  ImagePlus,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useSettingsStore } from '../../store/settings-store';
import { useShotImageStatus, useShotImageError } from '../../store/generation-store';
import { useGeneration } from '../../hooks/use-generation';
import { generateEnvironmentPrompt, generateCharacterPrompt } from '../../lib/prompt-engine';
import { useEditorStore } from '../../store/editor-store';
import { AngleCube } from './angle-cube';
import type { Shot } from '../../types/project';

export function ImageEditor({ shot }: { shot: Shot }) {
  const { t } = useTranslation();
  const { updateShot, updateShotPrompts } = useProjectStore();
  const settings = useSettingsStore();
  const { generateImage, generateAngleVariation } = useGeneration();
  const { setSelectedShotId } = useEditorStore();
  const imageStatus = useShotImageStatus(shot.id);
  const imageError = useShotImageError(shot.id);

  const isGenerating = imageStatus === 'generating';
  const hasImagePrompt = !!(shot.prompts.environment?.text || shot.prompts.character?.text);

  // Angle values (default to 0)
  const rotation = shot.angleRotation ?? 0;
  const tilt = shot.angleTilt ?? 0;
  const zoom = shot.angleZoom ?? 0;

  /** Update a shot field without prompt regeneration */
  const updateAngle = (updates: Partial<Shot>) => {
    updateShot(shot.id, updates);
  };

  /** Reset all angles to 0 */
  const resetAngles = () => {
    updateShot(shot.id, {
      angleRotation: 0,
      angleTilt: 0,
      angleZoom: 0,
    });
  };

  /**
   * Generate button handler:
   * - If the shot already has an image AND angles are non-zero → use angle variation API
   *   (sends the existing image to Qwen Multi-Angle to change perspective)
   * - Otherwise → generate a new image from prompt (text-to-image)
   */
  const handleGenerate = () => {
    const freshShot = useProjectStore.getState().currentProject?.storyboard.shots.find(s => s.id === shot.id);
    if (!freshShot) return;

    const hasAngles = (freshShot.angleRotation ?? 0) !== 0
      || (freshShot.angleTilt ?? 0) !== 0
      || (freshShot.angleZoom ?? 0) !== 0;

    if (freshShot.imageUrl && hasAngles) {
      // Image-to-image angle variation — preserves the scene, changes perspective
      generateAngleVariation(freshShot);
    } else {
      // Text-to-image — regenerate prompt first, then generate
      const editOpts = { editMode: true };
      const envPrompt = generateEnvironmentPrompt(freshShot, settings.preferredImageModel, 'standard', editOpts);
      const charPrompt = generateCharacterPrompt(freshShot, settings.preferredImageModel, 'standard', editOpts);
      updateShotPrompts(shot.id, {
        environment: envPrompt,
        character: charPrompt,
        music: freshShot.prompts.music,
        video: freshShot.prompts.video,
      });

      setTimeout(() => {
        const updatedShot = useProjectStore.getState().currentProject?.storyboard.shots.find(s => s.id === shot.id);
        if (updatedShot) generateImage(updatedShot);
      }, 100);
    }
  };

  /** Go back to cards grid */
  const goBack = () => setSelectedShotId(null);

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* ── Top bar ── */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-surface-light shrink-0">
        <button
          onClick={goBack}
          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('imageEditor.backToStoryboard', 'Back to Storyboard')}
        </button>
        <div className="h-5 w-px bg-border" />
        <h2 className="text-sm font-semibold text-text">
          {shot.title || `Shot ${shot.orderIndex + 1}`}
        </h2>
      </div>

      {/* ── Main content: Image + Controls side by side ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Large Image Preview */}
        <div className="flex-1 flex items-center justify-center p-6 bg-black/20 overflow-hidden relative">
          {shot.imageUrl ? (
            <img
              src={shot.imageUrl}
              alt={shot.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable={false}
            />
          ) : (
            <div className="w-full max-w-lg aspect-video rounded-lg bg-surface-lighter border-2 border-dashed border-border flex flex-col items-center justify-center gap-3">
              {isGenerating ? (
                <>
                  <Loader2 className="w-10 h-10 text-primary-400 animate-spin" />
                  <span className="text-sm text-text-muted">{t('generation.generating')}</span>
                </>
              ) : (
                <>
                  <ImagePlus className="w-10 h-10 text-text-muted/40" />
                  <span className="text-sm text-text-muted">
                    {hasImagePrompt
                      ? t('imageEditor.adjustAndGenerate', 'Adjust angles and generate')
                      : t('generation.noPrompt')}
                  </span>
                </>
              )}
            </div>
          )}

          {/* Generating overlay on existing image */}
          {shot.imageUrl && isGenerating && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-10 h-10 text-primary-400 animate-spin" />
                <span className="text-sm text-white/80">{t('generation.generating')}</span>
              </div>
            </div>
          )}

          {/* Error bar */}
          {imageError && (
            <div className="absolute bottom-4 inset-x-6 px-4 py-2 bg-red-900/80 text-red-200 text-sm rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" /> {imageError}
            </div>
          )}
        </div>

        {/* Right: Controls Panel */}
        <div className="w-80 shrink-0 border-s border-border bg-surface-light flex flex-col overflow-y-auto">
          {/* Source thumbnail */}
          <div className="p-4 border-b border-border">
            <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-surface-lighter">
              {shot.imageUrl ? (
                <img src={shot.imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs text-text-muted">{t('imageEditor.noImage', 'No image')}</span>
                </div>
              )}
            </div>
          </div>

          {/* Adjust Angle & Perspective */}
          <div className="p-4 flex-1 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-text">
                {t('imageEditor.adjustAngle', 'Adjust Angle & Perspective')}
              </h3>
              <button
                onClick={resetAngles}
                className="flex items-center gap-1 text-xs text-text-muted hover:text-primary-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t('imageEditor.reset', 'Reset')}
              </button>
            </div>

            {/* Rotation slider */}
            <SliderControl
              label={t('imageEditor.rotation', 'Rotation')}
              value={rotation}
              min={-180}
              max={180}
              unit="°"
              onChange={(v) => updateAngle({ angleRotation: v })}
            />

            {/* Tilt slider */}
            <SliderControl
              label={t('imageEditor.tilt', 'Tilt')}
              value={tilt}
              min={-90}
              max={90}
              unit="°"
              onChange={(v) => updateAngle({ angleTilt: v })}
            />

            {/* Zoom slider */}
            <SliderControl
              label={t('imageEditor.zoom', 'Zoom')}
              value={zoom}
              min={-100}
              max={100}
              unit=""
              onChange={(v) => updateAngle({ angleZoom: v })}
            />

            {/* 3D Preview Cube */}
            <div className="flex justify-center py-2">
              <AngleCube
                imageUrl={shot.imageUrl}
                rotation={rotation}
                tilt={tilt}
                zoom={zoom}
                size={120}
              />
            </div>
          </div>

          {/* Generate button */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !hasImagePrompt}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary-900/30"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('generation.generating')}
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  {t('imageEditor.generate', 'Generate')}
                </>
              )}
            </button>
            {!hasImagePrompt && (
              <p className="text-[10px] text-text-muted text-center mt-2">
                {t('generation.noPrompt')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slider Control ── */
function SliderControl({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-muted">{label}</span>
        <span className="text-xs font-mono text-primary-300 min-w-[3.5rem] text-end">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full bg-surface-lighter appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-primary-500
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-primary-500
          [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:cursor-pointer"
      />
      <div className="flex justify-between text-[9px] text-text-muted/50">
        <span>{min}{unit}</span>
        <span>0{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { X, ArrowRight, RefreshCw, Check, User, Clock, Camera, ImageIcon } from 'lucide-react';
import { MOOD_COLORS } from '../storyboard/shot-constants';
import type { StoryboardImportSchema } from '../../types/project';

interface StoryboardPreviewProps {
  data: StoryboardImportSchema;
  characterDescription: string;
  styleName: string;
  referenceImageUrl?: string | null;
  onChange: (data: StoryboardImportSchema) => void;
  onApprove: () => void;
  onRegenerate: () => void;
  onBack: () => void;
}

export function StoryboardPreview({
  data,
  characterDescription,
  styleName,
  referenceImageUrl,
  onChange,
  onApprove,
  onRegenerate,
  onBack,
}: StoryboardPreviewProps) {
  const { t } = useTranslation();

  const removeShot = (index: number) => {
    const newShots = data.shots
      .filter((_, i) => i !== index)
      .map((shot, i) => ({ ...shot, orderIndex: i }));
    onChange({ ...data, shots: newShots });
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-surface-light border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-text">{data.projectName}</h3>
          <span className="text-xs text-text-muted">
            {t('wizard.preview.shotsCount', { count: data.shots.length })}
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary-600/20 text-primary-300 text-xs">
            {styleName}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface text-text-muted text-xs border border-border">
            {t(`project.types.talking-character`)}
          </span>
        </div>

        {/* Character summary */}
        <div className="flex items-start gap-2 text-xs text-text-muted bg-surface rounded-lg p-2.5">
          <User className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary-400" />
          <span>{characterDescription}</span>
        </div>
      </div>

      {/* Reference image */}
      {referenceImageUrl && (
        <div className="bg-surface-light border border-primary-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ImageIcon className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-text">{t('referenceImage.title')}</span>
            <span className="text-xs text-primary-300 bg-primary-600/20 px-2 py-0.5 rounded-md ms-auto">
              {t('referenceImage.badge')}
            </span>
          </div>
          <img
            src={referenceImageUrl}
            alt="Reference"
            className="w-full rounded-lg aspect-video object-cover"
          />
        </div>
      )}

      {/* Shot list */}
      <div className="space-y-2">
        {data.shots.map((shot, index) => (
          <div
            key={shot.id}
            className="bg-surface-light border border-border rounded-xl p-3 group hover:border-primary-500/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                {/* Title row */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-text-muted bg-surface px-1.5 py-0.5 rounded">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-text truncate">{shot.title}</span>
                </div>

                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                    <Camera className="w-3 h-3" />
                    {t(`shot.cameraAngles.${shot.cameraAngle}`)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: MOOD_COLORS[shot.mood] || '#888' }}
                    />
                    {t(`shot.moods.${shot.mood}`)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted">
                    <Clock className="w-3 h-3" />
                    {shot.duration}s
                  </span>
                </div>

                {/* Setting description */}
                <p className="text-xs text-text-muted truncate">
                  {shot.environment.setting}
                </p>
              </div>

              {/* Delete button */}
              {data.shots.length > 1 && (
                <button
                  onClick={() => removeShot(index)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-all shrink-0"
                  title={t('wizard.preview.removeShot')}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={onBack}
          className="px-4 py-2.5 rounded-xl text-sm text-text-muted hover:text-text hover:bg-surface-lighter transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <ArrowRight className="w-4 h-4 rotate-180" />
            {t('wizard.preview.backToEdit')}
          </span>
        </button>

        <button
          onClick={onRegenerate}
          className="px-4 py-2.5 rounded-xl text-sm border border-border text-text-muted hover:text-text hover:border-primary-500/50 transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <RefreshCw className="w-4 h-4" />
            {t('wizard.preview.regenerate')}
          </span>
        </button>

        <button
          onClick={onApprove}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-green-600/20"
        >
          <Check className="w-5 h-5" />
          {t('wizard.preview.approve')}
        </button>
      </div>
    </div>
  );
}

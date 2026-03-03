import { useTranslation } from 'react-i18next';
import { RefreshCw, SkipForward, Check, ImageIcon } from 'lucide-react';

interface ReferenceImageStepProps {
  imageUrl: string | null;
  loading: boolean;
  characterDescription: string;
  onRegenerate: () => void;
  onSkip: () => void;
  onApprove: () => void;
}

export function ReferenceImageStep({
  imageUrl,
  loading,
  characterDescription,
  onRegenerate,
  onSkip,
  onApprove,
}: ReferenceImageStepProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text">{t('referenceImage.title')}</h3>
        <p className="text-sm text-text-muted mt-1">{t('referenceImage.subtitle')}</p>
      </div>

      {/* Character description reminder */}
      <div className="bg-surface-light border border-border rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-text-muted">{t('wizard.characterLabel')}</span>
        </div>
        <p className="text-sm text-text leading-relaxed">{characterDescription}</p>
      </div>

      {/* Image area */}
      <div className="bg-surface-light border border-border rounded-xl overflow-hidden">
        {loading ? (
          /* Loading state */
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="relative">
              <div className="w-16 h-16 border-3 border-primary-500/30 rounded-full" />
              <div className="absolute inset-0 w-16 h-16 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
              <ImageIcon className="absolute inset-0 m-auto w-6 h-6 text-primary-400" />
            </div>
            <p className="text-sm text-text-muted animate-pulse">{t('referenceImage.generating')}</p>
          </div>
        ) : imageUrl ? (
          /* Image displayed */
          <img
            src={imageUrl}
            alt="Reference character"
            className="w-full aspect-video object-cover"
          />
        ) : (
          /* Error / no image */
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <ImageIcon className="w-12 h-12 text-text-muted/30" />
            <p className="text-sm text-text-muted">{t('generation.failed')}</p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        {/* Skip */}
        <button
          onClick={onSkip}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm border border-border text-text-muted hover:text-text hover:border-primary-500/50 transition-colors"
        >
          <SkipForward className="w-4 h-4" />
          {t('referenceImage.skip')}
        </button>

        {/* Regenerate */}
        <button
          onClick={onRegenerate}
          disabled={loading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm border border-border text-text-muted hover:text-text hover:border-primary-500/50 transition-colors disabled:opacity-40"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {t('referenceImage.regenerate')}
        </button>

        {/* Approve */}
        <button
          onClick={onApprove}
          disabled={loading || !imageUrl}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Check className="w-4 h-4" />
          {t('referenceImage.approve')}
        </button>
      </div>
    </div>
  );
}

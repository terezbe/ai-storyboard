import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { EventPromoData, AdType, AdPlatform } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface AdPlatformStepProps {
  data: EventPromoData;
  onChange: (d: EventPromoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const AD_TYPES: { id: AdType; emoji: string }[] = [
  { id: 'product', emoji: '\uD83D\uDCE6' },
  { id: 'service', emoji: '\uD83D\uDEE0\uFE0F' },
  { id: 'event', emoji: '\uD83C\uDF89' },
  { id: 'restaurant', emoji: '\uD83C\uDF7D\uFE0F' },
  { id: 'real-estate', emoji: '\uD83C\uDFE0' },
  { id: 'app', emoji: '\uD83D\uDCF1' },
];

const PLATFORMS: { id: AdPlatform; emoji: string }[] = [
  { id: 'instagram-reel', emoji: '\uD83D\uDCF7' },
  { id: 'tiktok', emoji: '\uD83C\uDFB5' },
  { id: 'youtube-short', emoji: '\u25B6\uFE0F' },
  { id: 'facebook', emoji: '\uD83D\uDC4D' },
  { id: 'linkedin', emoji: '\uD83D\uDCBC' },
  { id: 'general', emoji: '\uD83C\uDF10' },
];

export function AdPlatformStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: AdPlatformStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<EventPromoData>) => {
    onChange({ ...data, ...partial });
  };

  return (
    <div className="space-y-5">
      {/* Ad Type */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.adType.title')}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {AD_TYPES.map((item) => {
            const isSelected = data.adType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => update({ adType: item.id })}
                className={`flex flex-col items-start gap-2 p-4 rounded-xl text-start transition-all ${
                  isSelected
                    ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                    : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-bold text-white">
                  {t(`eventPromo.adType.${item.id}`)}
                </span>
                <span className="text-xs text-text-muted leading-relaxed">
                  {t(`eventPromo.adType.${item.id}Desc`)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Platform */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.platform.title')}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PLATFORMS.map((item) => {
            const isSelected = data.platform === item.id;
            return (
              <button
                key={item.id}
                onClick={() => update({ platform: item.id })}
                className={`flex flex-col items-start gap-2 p-4 rounded-xl text-start transition-all ${
                  isSelected
                    ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                    : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-bold text-white">
                  {t(`eventPromo.platform.${item.id}`)}
                </span>
                <span className="text-xs text-text-muted leading-relaxed">
                  {t(`eventPromo.platform.${item.id}Desc`)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="ad-platform"
      />

      {/* Action buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="px-4 py-2.5 rounded-xl text-sm text-text-muted hover:text-text hover:bg-surface-lighter transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <ArrowRight className="w-4 h-4 rotate-180" />
            {t('common.back')}
          </span>
        </button>

        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all"
        >
          {t('wizard.next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

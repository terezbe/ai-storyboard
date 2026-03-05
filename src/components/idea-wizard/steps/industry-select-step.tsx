import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { BrandRevealData, IndustryCategory } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface IndustrySelectStepProps {
  data: BrandRevealData;
  onChange: (d: BrandRevealData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const INDUSTRIES: { id: IndustryCategory; emoji: string }[] = [
  { id: 'technology', emoji: '💻' },
  { id: 'fashion', emoji: '👗' },
  { id: 'food', emoji: '🍕' },
  { id: 'health', emoji: '🏥' },
  { id: 'finance', emoji: '💰' },
  { id: 'education', emoji: '📚' },
  { id: 'entertainment', emoji: '🎬' },
  { id: 'real-estate', emoji: '🏠' },
  { id: 'automotive', emoji: '🚗' },
  { id: 'sports', emoji: '⚽' },
  { id: 'creative', emoji: '🎨' },
  { id: 'other', emoji: '📦' },
];

export function IndustrySelectStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: IndustrySelectStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<BrandRevealData>) => {
    onChange({ ...data, ...partial });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('brandReveal.industry.title')}</h3>
      </div>

      {/* Industry grid */}
      <div className="grid grid-cols-3 gap-2">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.id}
            onClick={() => update({ industry: ind.id })}
            className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 cursor-pointer transition-all ${
              data.industry === ind.id
                ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                : 'border-border bg-surface text-text-muted hover:border-primary-500/50'
            }`}
          >
            <span className="text-xl">{ind.emoji}</span>
            <span className="text-xs font-medium">
              {t(`brandReveal.industry.types.${ind.id}`)}
            </span>
          </button>
        ))}
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="industry-select"
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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all"
        >
          {t('common.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

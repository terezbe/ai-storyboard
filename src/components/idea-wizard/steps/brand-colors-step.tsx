import { useTranslation } from 'react-i18next';
import { Plus, X, ArrowRight, Palette } from 'lucide-react';
import type { BrandRevealData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface BrandColorsStepProps {
  data: BrandRevealData;
  onChange: (d: BrandRevealData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function BrandColorsStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: BrandColorsStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<BrandRevealData>) => {
    onChange({ ...data, ...partial });
  };

  const handleColorChange = (index: number, color: string) => {
    const next = [...data.brandColors];
    next[index] = color;
    update({ brandColors: next });
  };

  const addColor = () => {
    if (data.brandColors.length < 4) {
      update({ brandColors: [...data.brandColors, '#6366f1'] });
    }
  };

  const removeColor = (index: number) => {
    update({ brandColors: data.brandColors.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('brandReveal.colors.title')}</h3>
      </div>

      {/* Color swatches */}
      <div className="flex items-center gap-3">
        {data.brandColors.map((color, i) => (
          <div key={i} className="relative group">
            <label className="block cursor-pointer">
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(i, e.target.value)}
                className="sr-only"
              />
              <div
                className="w-10 h-10 rounded-full border-2 border-border transition-all hover:scale-110"
                style={{ backgroundColor: color }}
              />
            </label>
            {/* Delete button on hover */}
            <button
              onClick={() => removeColor(i)}
              className="absolute -top-1.5 -end-1.5 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Add color button */}
        {data.brandColors.length < 4 && (
          <button
            onClick={addColor}
            className="w-10 h-10 rounded-full border-2 border-dashed border-border flex items-center justify-center text-text-muted hover:border-primary-500 hover:text-primary-400 transition-all"
          >
            <Plus className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Auto-extract hint */}
      <p className="text-xs text-text-muted flex items-center gap-1.5">
        <Palette className="w-3.5 h-3.5" />
        {t('brandReveal.colors.autoExtract')}
      </p>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="brand-colors"
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

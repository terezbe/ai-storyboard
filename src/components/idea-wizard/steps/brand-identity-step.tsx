import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Upload, X, Plus } from 'lucide-react';
import { fileToBase64 } from '../../../lib/image-utils';
import type { EventPromoData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface BrandIdentityStepProps {
  data: EventPromoData;
  onChange: (d: EventPromoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const MAX_COLORS = 4;

export function BrandIdentityStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: BrandIdentityStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const colorInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const update = (partial: Partial<EventPromoData>) => {
    onChange({ ...data, ...partial });
  };

  // --- Logo upload ---
  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) return;
      const dataUrl = await fileToBase64(file);
      update({ logoUrl: dataUrl });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const removeLogo = () => {
    update({ logoUrl: null });
  };

  // --- Brand colors ---
  const addColor = () => {
    if (data.brandColors.length >= MAX_COLORS) return;
    update({ brandColors: [...data.brandColors, '#6366f1'] });
  };

  const updateColor = (index: number, value: string) => {
    const next = [...data.brandColors];
    next[index] = value;
    update({ brandColors: next });
  };

  const removeColor = (index: number) => {
    update({ brandColors: data.brandColors.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-5">
      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.brand.logo')}
        </label>

        {data.logoUrl ? (
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-border bg-surface">
            <img
              src={data.logoUrl}
              alt="Logo"
              className="w-full h-full object-contain"
            />
            <button
              onClick={removeLogo}
              className="absolute top-1 end-1 p-1 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
            className="w-32 h-32 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border hover:border-primary-500/50 bg-surface cursor-pointer transition-colors"
          >
            <Upload className="w-6 h-6 text-text-muted" />
            <span className="text-xs text-text-muted text-center px-2">
              {t('eventPromo.product.dropzone')}
            </span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = '';
          }}
        />
      </div>

      {/* Brand Colors */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.brand.colors')}
        </label>
        <div className="flex flex-wrap items-center gap-3">
          {data.brandColors.map((color, i) => (
            <div key={i} className="relative group">
              <input
                ref={(el) => { colorInputRefs.current[i] = el; }}
                type="color"
                value={color}
                onChange={(e) => updateColor(i, e.target.value)}
                className="w-10 h-10 rounded-full border-2 border-border cursor-pointer appearance-none bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-none"
              />
              <button
                onClick={() => removeColor(i)}
                className="absolute -top-1 -end-1 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </div>
          ))}

          {data.brandColors.length < MAX_COLORS && (
            <button
              onClick={addColor}
              className="w-10 h-10 rounded-full border-2 border-dashed border-border hover:border-primary-500/50 flex items-center justify-center text-text-muted hover:text-primary-400 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-xs text-text-muted mt-1.5">
          {t('eventPromo.brand.addColor')}
        </p>
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="brand-identity"
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

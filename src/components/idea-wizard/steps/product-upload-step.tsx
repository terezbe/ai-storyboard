import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Upload, X } from 'lucide-react';
import { fileToBase64 } from '../../../lib/image-utils';
import type { EventPromoData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface ProductUploadStepProps {
  data: EventPromoData;
  onChange: (d: EventPromoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function ProductUploadStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: ProductUploadStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (partial: Partial<EventPromoData>) => {
    onChange({ ...data, ...partial });
  };

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) return;
      const dataUrl = await fileToBase64(file);
      update({ productImageUrl: dataUrl });
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

  const removeImage = () => {
    update({ productImageUrl: null });
  };

  return (
    <div className="space-y-5">
      {/* Product Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.product.title')}
        </label>

        {data.productImageUrl ? (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-surface">
            <img
              src={data.productImageUrl}
              alt="Product"
              className="w-full h-full object-contain"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 end-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
            className="w-full aspect-video flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border hover:border-primary-500/50 bg-surface cursor-pointer transition-colors"
          >
            <Upload className="w-8 h-8 text-text-muted" />
            <span className="text-sm text-text-muted text-center px-4">
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

      {/* Brand Name */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.product.brandName')}
        </label>
        <input
          type="text"
          value={data.brandName}
          onChange={(e) => update({ brandName: e.target.value })}
          placeholder={t('eventPromo.product.brandNamePlaceholder')}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
        />
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="product-upload"
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

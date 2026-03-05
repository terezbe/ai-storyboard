import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, Image as ImageIcon, ArrowRight } from 'lucide-react';
import type { BrandRevealData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';
import { fileToBase64 } from '../../../lib/image-utils';

interface LogoUploadStepProps {
  data: BrandRevealData;
  onChange: (d: BrandRevealData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function LogoUploadStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: LogoUploadStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (partial: Partial<BrandRevealData>) => {
    onChange({ ...data, ...partial });
  };

  const handleFile = useCallback(
    async (file: File) => {
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
      if (file && file.type.startsWith('image/')) {
        handleFile(file);
      }
    },
    [handleFile],
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('brandReveal.logo.title')}</h3>
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary-500/50 transition-colors bg-surface"
      >
        {data.logoUrl ? (
          <img
            src={data.logoUrl}
            alt="Logo"
            className="max-h-20 max-w-[10rem] object-contain"
          />
        ) : (
          <>
            <Upload className="w-8 h-8 text-text-muted" />
            <p className="text-sm text-text-muted text-center">
              {t('brandReveal.logo.dropzone')}
            </p>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>

      {/* Preview on dark & light backgrounds */}
      {data.logoUrl && (
        <div className="flex gap-3">
          <div className="flex-1 flex items-center justify-center p-4 rounded-xl bg-gray-900 border border-border">
            <img
              src={data.logoUrl}
              alt="Logo on dark"
              className="max-h-12 max-w-full object-contain"
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-4 rounded-xl bg-white border border-border">
            <img
              src={data.logoUrl}
              alt="Logo on light"
              className="max-h-12 max-w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Brand Name */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('brandReveal.logo.brandName')}
        </label>
        <input
          type="text"
          value={data.brandName}
          onChange={(e) => update({ brandName: e.target.value })}
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Tagline */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('brandReveal.logo.tagline')}
        </label>
        <input
          type="text"
          value={data.tagline}
          onChange={(e) => update({ tagline: e.target.value })}
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="logo-upload"
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
          <ImageIcon className="w-4 h-4" />
          {t('common.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

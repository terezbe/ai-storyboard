import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Upload, X, ImageIcon } from 'lucide-react';
import type { InvitationData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';
import { fileToBase64 } from '../../../lib/image-utils';

interface CelebrantPhotoStepProps {
  data: InvitationData;
  onChange: (d: InvitationData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function CelebrantPhotoStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: CelebrantPhotoStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) return;
      const dataUrl = await fileToBase64(file);
      onChange({ ...data, celebrantPhotoUrl: dataUrl });
    },
    [data, onChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      e.target.value = '';
    },
    [handleFile],
  );

  const removePhoto = () => {
    onChange({ ...data, celebrantPhotoUrl: null });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text">{t('invitation.photo.title')}</h3>
      </div>

      {/* Drop zone / Preview */}
      {data.celebrantPhotoUrl ? (
        <div className="relative rounded-xl overflow-hidden border border-border">
          <img
            src={data.celebrantPhotoUrl}
            alt="Celebrant"
            className="w-full max-h-80 object-contain bg-surface"
          />
          <button
            onClick={removePhoto}
            className="absolute top-3 end-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full flex flex-col items-center justify-center gap-4 py-16 rounded-xl border-2 border-dashed transition-all cursor-pointer ${
            isDragging
              ? 'border-primary-500 bg-primary-500/10'
              : 'border-border hover:border-primary-500/50 bg-surface'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center">
            {isDragging ? (
              <ImageIcon className="w-7 h-7 text-primary-400" />
            ) : (
              <Upload className="w-7 h-7 text-primary-400" />
            )}
          </div>
          <p className="text-sm text-text-muted">{t('invitation.photo.dropzone')}</p>
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="celebrant-photo"
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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all"
        >
          {data.celebrantPhotoUrl
            ? t('invitation.photo.next', 'Next')
            : t('invitation.photo.skip')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

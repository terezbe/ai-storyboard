import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, ArrowRight, ImagePlus } from 'lucide-react';
import type { RecapVideoData, RecapPhoto } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';
import { fileToBase64 } from '../../../lib/image-utils';

const MIN_PHOTOS = 5;
const MAX_PHOTOS = 50;

interface PhotosUploadStepProps {
  data: RecapVideoData;
  onChange: (d: RecapVideoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function PhotosUploadStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: PhotosUploadStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files).filter((f) => f.type.startsWith('image/'));
      const remaining = MAX_PHOTOS - data.photos.length;
      const toAdd = fileArray.slice(0, remaining);

      const newPhotos: RecapPhoto[] = [];
      for (const file of toAdd) {
        const dataUrl = await fileToBase64(file);
        newPhotos.push({
          id: crypto.randomUUID(),
          url: dataUrl,
          fileName: file.name,
          selected: true,
          tag: 'general' as const,
          caption: '',
        });
      }

      onChange({ ...data, photos: [...data.photos, ...newPhotos] });
    },
    [data, onChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files);
      }
    },
    [addFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files);
        // Reset input so the same files can be selected again
        e.target.value = '';
      }
    },
    [addFiles],
  );

  const canProceed = data.photos.length >= MIN_PHOTOS;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text">{t('recapVideo.upload.title')}</h3>
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary-500/50 transition-colors min-h-[160px]"
      >
        <Upload className="w-10 h-10 text-text-muted" />
        <p className="text-sm text-text-muted text-center">{t('recapVideo.upload.dropzone')}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Photo count badge */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-muted">
          {t('recapVideo.upload.count', { count: data.photos.length, max: MAX_PHOTOS })}
        </span>
        {data.photos.length > 0 && data.photos.length < MIN_PHOTOS && (
          <span className="text-xs text-amber-400">
            {t('recapVideo.morePhotosNeeded', '{{count}} more needed', { count: MIN_PHOTOS - data.photos.length })}
          </span>
        )}
      </div>

      {/* Thumbnail grid */}
      {data.photos.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {data.photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square rounded-lg overflow-hidden border border-border"
            >
              <img
                src={photo.url}
                alt={photo.fileName}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Add more button if under max */}
          {data.photos.length < MAX_PHOTOS && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-primary-500/50 transition-colors"
            >
              <ImagePlus className="w-6 h-6 text-text-muted" />
            </button>
          )}
        </div>
      )}

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="photos-upload"
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
          disabled={!canProceed}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('common.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

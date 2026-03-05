import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';
import type { RecapVideoData, RecapPhoto } from '../../../types/wizard-data';
import { MOMENT_TAGS } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface PhotosCurateStepProps {
  data: RecapVideoData;
  onChange: (d: RecapVideoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function PhotosCurateStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: PhotosCurateStepProps) {
  const { t } = useTranslation();

  const updatePhoto = (id: string, partial: Partial<RecapPhoto>) => {
    onChange({
      ...data,
      photos: data.photos.map((p) => (p.id === id ? { ...p, ...partial } : p)),
    });
  };

  const toggleSelect = (id: string) => {
    const photo = data.photos.find((p) => p.id === id);
    if (photo) {
      updatePhoto(id, { selected: !photo.selected });
    }
  };

  const selectedCount = data.photos.filter((p) => p.selected).length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{t('recapVideo.curate.title')}</h3>
        <span className="text-sm text-text-muted">
          {t('recapVideo.curate.selected', {
            selected: selectedCount,
            total: data.photos.length,
          })}
        </span>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-3 gap-2">
        {data.photos.map((photo) => (
          <div
            key={photo.id}
            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
              photo.selected
                ? 'border-green-500 opacity-100'
                : 'border-border opacity-50'
            }`}
          >
            {/* Thumbnail */}
            <div className="relative aspect-square cursor-pointer" onClick={() => toggleSelect(photo.id)}>
              <img
                src={photo.url}
                alt={photo.fileName}
                className="w-full h-full object-cover"
              />
              {/* Checkbox overlay */}
              <div
                className={`absolute top-1.5 end-1.5 w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                  photo.selected
                    ? 'bg-green-500 text-white'
                    : 'bg-black/50 border border-white/30'
                }`}
              >
                {photo.selected && <Check className="w-4 h-4" />}
              </div>
            </div>

            {/* Tag selector */}
            <div className="flex flex-wrap gap-1 p-1.5">
              {MOMENT_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => updatePhoto(photo.id, { tag })}
                  className={`px-1.5 py-0.5 rounded-full text-[10px] transition-all ${
                    photo.tag === tag
                      ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                      : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
                  }`}
                >
                  {t(`recapVideo.curate.tags.${tag}`)}
                </button>
              ))}
            </div>

            {/* Caption input */}
            <div className="px-1.5 pb-1.5">
              <input
                type="text"
                value={photo.caption}
                onChange={(e) => updatePhoto(photo.id, { caption: e.target.value })}
                placeholder={t('recapVideo.curate.captionPlaceholder')}
                className="w-full bg-surface border border-border rounded px-2 py-1 text-[11px] text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary-500/50"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="photos-curate"
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
          {t('common.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

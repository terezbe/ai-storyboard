import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Upload, X, AlertCircle } from 'lucide-react';
import type { CustomData } from '../../../types/wizard-data';
import type { CharacterDefinition, CharacterType, Gender, AgeRange } from '../../../types/character-builder';
import { DEFAULT_CHARACTER } from '../../../types/character-builder';
import { fileToBase64 } from '../../../lib/image-utils';

const MAX_PHOTOS = 10;

const CHARACTER_TYPES: CharacterType[] = ['human', 'cartoon', 'anime', 'animal', 'fantasy', 'robot'];
const GENDERS: Gender[] = ['male', 'female', 'neutral'];
const AGE_RANGES: AgeRange[] = ['child', 'teen', 'young-adult', 'adult', 'elderly'];

interface CustomAssetsStepProps {
  data: CustomData;
  onChange: (d: CustomData) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CustomAssetsStep({ data, onChange, onNext, onBack }: CustomAssetsStepProps) {
  const { t } = useTranslation();
  const logoInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);

  const update = (partial: Partial<CustomData>) => {
    onChange({ ...data, ...partial });
  };

  const updateCharacter = (partial: Partial<CharacterDefinition>) => {
    const current = data.character ?? DEFAULT_CHARACTER;
    update({ character: { ...current, ...partial } });
  };

  const hasSections = data.sections.character || data.sections.logo || data.sections.photos || data.sections.videoRef;

  /* ── Logo upload ── */
  const handleLogoFile = useCallback(
    async (file: File) => {
      const dataUrl = await fileToBase64(file);
      update({ logoDataUrl: dataUrl });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  const handleLogoDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleLogoFile(file);
      }
    },
    [handleLogoFile],
  );

  const handleLogoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleLogoFile(file);
    e.target.value = '';
  };

  /* ── Photos upload ── */
  const handlePhotoFiles = useCallback(
    async (files: FileList | File[]) => {
      const current = data.photos ?? [];
      const remaining = MAX_PHOTOS - current.length;
      const toAdd = Array.from(files)
        .filter((f) => f.type.startsWith('image/'))
        .slice(0, remaining);

      const newPhotos = await Promise.all(
        toAdd.map(async (file) => ({
          dataUrl: await fileToBase64(file),
          label: file.name,
        })),
      );

      update({ photos: [...current, ...newPhotos] });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  const handlePhotosDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        handlePhotoFiles(e.dataTransfer.files);
      }
    },
    [handlePhotoFiles],
  );

  const handlePhotosInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handlePhotoFiles(e.target.files);
      e.target.value = '';
    }
  };

  const removePhoto = (index: number) => {
    const current = data.photos ?? [];
    update({ photos: current.filter((_, i) => i !== index) });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('custom.assets.title')}</h3>
      </div>

      {/* No sections message */}
      {!hasSections && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="text-sm text-amber-300">{t('custom.assets.noSections')}</p>
        </div>
      )}

      {/* ── Character section ── */}
      {data.sections.character && (
        <div className="space-y-3 p-4 rounded-xl border border-border bg-surface">
          <h4 className="text-sm font-semibold text-text">{t('custom.assets.characterSection')}</h4>

          {/* Character Type */}
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">
              {t('charBuilder.sections.type')}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {CHARACTER_TYPES.map((ct) => (
                <button
                  key={ct}
                  onClick={() => updateCharacter({ type: ct })}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    (data.character?.type ?? DEFAULT_CHARACTER.type) === ct
                      ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                      : 'bg-surface-lighter border border-border text-text-muted hover:border-primary-500/50'
                  }`}
                >
                  {t(`charBuilder.type.${ct}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">
              {t('charBuilder.sections.gender')}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {GENDERS.map((g) => (
                <button
                  key={g}
                  onClick={() => updateCharacter({ gender: g })}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    (data.character?.gender ?? DEFAULT_CHARACTER.gender) === g
                      ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                      : 'bg-surface-lighter border border-border text-text-muted hover:border-primary-500/50'
                  }`}
                >
                  {t(`charBuilder.gender.${g}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Age Range */}
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">
              {t('charBuilder.sections.age')}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {AGE_RANGES.map((a) => (
                <button
                  key={a}
                  onClick={() => updateCharacter({ ageRange: a })}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    (data.character?.ageRange ?? DEFAULT_CHARACTER.ageRange) === a
                      ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                      : 'bg-surface-lighter border border-border text-text-muted hover:border-primary-500/50'
                  }`}
                >
                  {t(`charBuilder.age.${a}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Custom notes */}
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">
              {t('charBuilder.sections.customNotes')}
            </label>
            <textarea
              value={data.character?.customNotes ?? ''}
              onChange={(e) => updateCharacter({ customNotes: e.target.value })}
              placeholder={t('charBuilder.customNotesPlaceholder')}
              rows={2}
              className="w-full bg-surface-lighter border border-border rounded-lg px-3 py-2 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors resize-none"
            />
          </div>
        </div>
      )}

      {/* ── Logo section ── */}
      {data.sections.logo && (
        <div className="space-y-3 p-4 rounded-xl border border-border bg-surface">
          <h4 className="text-sm font-semibold text-text">{t('custom.assets.logoSection')}</h4>

          <div
            onDrop={handleLogoDrop}
            onDragOver={handleDragOver}
            onClick={() => logoInputRef.current?.click()}
            className="flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary-500/50 transition-colors"
          >
            {data.logoDataUrl ? (
              <img
                src={data.logoDataUrl}
                alt="Logo"
                className="max-h-20 max-w-[10rem] object-contain"
              />
            ) : (
              <>
                <Upload className="w-8 h-8 text-text-muted" />
                <p className="text-xs text-text-muted text-center">{t('custom.assets.logoDropHint')}</p>
              </>
            )}
            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoInput}
              className="hidden"
            />
          </div>
        </div>
      )}

      {/* ── Photos section ── */}
      {data.sections.photos && (
        <div className="space-y-3 p-4 rounded-xl border border-border bg-surface">
          <h4 className="text-sm font-semibold text-text">{t('custom.assets.photosSection')}</h4>

          <div
            onDrop={handlePhotosDrop}
            onDragOver={handleDragOver}
            onClick={() => photosInputRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary-500/50 transition-colors"
          >
            <Upload className="w-8 h-8 text-text-muted" />
            <p className="text-xs text-text-muted text-center">{t('custom.assets.photosDropHint')}</p>
            <input
              ref={photosInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotosInput}
              className="hidden"
            />
          </div>

          {/* Count */}
          <p className="text-xs text-text-muted">
            {t('custom.assets.photosCount', { count: data.photos?.length ?? 0 })}
          </p>

          {/* Thumbnail grid */}
          {data.photos && data.photos.length > 0 && (
            <div className="grid grid-cols-5 gap-2">
              {data.photos.map((photo, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-border group">
                  <img
                    src={photo.dataUrl}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(idx);
                    }}
                    className="absolute top-1 end-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Video Reference section ── */}
      {data.sections.videoRef && (
        <div className="space-y-3 p-4 rounded-xl border border-border bg-surface">
          <h4 className="text-sm font-semibold text-text">{t('custom.assets.videoRefSection')}</h4>
          <input
            type="url"
            value={data.videoRefUrl ?? ''}
            onChange={(e) => update({ videoRefUrl: e.target.value })}
            placeholder={t('custom.assets.videoRefPlaceholder')}
            className="w-full bg-surface-lighter border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
      )}

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

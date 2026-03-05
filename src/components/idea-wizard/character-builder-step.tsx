import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { CharacterDefinition, FacialFeature } from '../../types/character-builder';
import type { ReferenceImage } from '../../types/project';
import {
  CHARACTER_TYPES,
  GENDERS,
  AGE_RANGES,
  BODY_TYPES,
  SKIN_TONES,
  HAIR_STYLES,
  HAIR_COLORS,
  CLOTHING_STYLES,
  EXPRESSIONS,
  FACIAL_FEATURES,
} from '../../config/character-options';
import { StepReferenceUpload } from './step-reference-upload';

interface CharacterBuilderStepProps {
  data: CharacterDefinition;
  onChange: (data: CharacterDefinition) => void;
  onNext: () => void;
  promptPreview: string;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function CharacterBuilderStep({ data, onChange, onNext, promptPreview, referenceImages, onReferenceChange }: CharacterBuilderStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<CharacterDefinition>) => {
    onChange({ ...data, ...partial });
  };

  const toggleFeature = (feature: string) => {
    const features = data.facialFeatures.includes(feature as FacialFeature)
      ? data.facialFeatures.filter((f) => f !== feature)
      : [...data.facialFeatures, feature as FacialFeature];
    update({ facialFeatures: features });
  };

  return (
    <div className="space-y-5">
      {/* Character Type — 3-col icon grid */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.type')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {CHARACTER_TYPES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ type: opt.id as CharacterDefinition['type'] })}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                data.type === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              <span>{opt.emoji}</span>
              <span>{t(opt.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gender — 3 segmented buttons */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.gender')}
        </label>
        <div className="flex gap-2">
          {GENDERS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ gender: opt.id as CharacterDefinition['gender'] })}
              className={`flex-1 px-3 py-2 rounded-lg text-xs text-center transition-all ${
                data.gender === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Age Range — segmented buttons */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.age')}
        </label>
        <div className="flex flex-wrap gap-2">
          {AGE_RANGES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ ageRange: opt.id as CharacterDefinition['ageRange'] })}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                data.ageRange === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Body Type — pill chips */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.body')}
        </label>
        <div className="flex flex-wrap gap-2">
          {BODY_TYPES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ bodyType: opt.id as CharacterDefinition['bodyType'] })}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                data.bodyType === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Skin Tone — color swatches */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.skin')}
        </label>
        <div className="flex gap-2">
          {SKIN_TONES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ skinTone: opt.id as CharacterDefinition['skinTone'] })}
              className={`w-8 h-8 rounded-full transition-all ${
                data.skinTone === opt.id
                  ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-surface'
                  : 'hover:ring-1 hover:ring-border'
              }`}
              style={{ backgroundColor: opt.colorHex }}
              title={t(opt.labelKey)}
            />
          ))}
        </div>
      </div>

      {/* Hair Style — wrap chips */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.hairStyle')}
        </label>
        <div className="flex flex-wrap gap-1.5">
          {HAIR_STYLES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ hairStyle: opt.id as CharacterDefinition['hairStyle'] })}
              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                data.hairStyle === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Hair Color — color swatches */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.hairColor')}
        </label>
        <div className="flex flex-wrap gap-2">
          {HAIR_COLORS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ hairColor: opt.id as CharacterDefinition['hairColor'] })}
              className={`w-7 h-7 rounded-full transition-all ${
                data.hairColor === opt.id
                  ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-surface'
                  : 'hover:ring-1 hover:ring-border'
              }`}
              style={{ backgroundColor: opt.colorHex }}
              title={t(opt.labelKey)}
            />
          ))}
        </div>
      </div>

      {/* Clothing Style — grid */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.clothing')}
        </label>
        <div className="flex flex-wrap gap-2">
          {CLOTHING_STYLES.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ clothingStyle: opt.id as CharacterDefinition['clothingStyle'] })}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                data.clothingStyle === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
        {/* Clothing details textarea */}
        <textarea
          value={data.clothingDetails}
          onChange={(e) => update({ clothingDetails: e.target.value })}
          placeholder={t('charBuilder.clothingDetailsPlaceholder')}
          rows={1}
          className="w-full mt-2 bg-surface border border-border rounded-lg px-3 py-2 text-xs text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
      </div>

      {/* Expression — pills */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.expression')}
        </label>
        <div className="flex flex-wrap gap-2">
          {EXPRESSIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ expression: opt.id as CharacterDefinition['expression'] })}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                data.expression === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Facial Features — multi-select chips */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.features')}
        </label>
        <div className="flex flex-wrap gap-2">
          {FACIAL_FEATURES.map((opt) => {
            const selected = data.facialFeatures.includes(opt.id as FacialFeature);
            return (
              <button
                key={opt.id}
                onClick={() => toggleFeature(opt.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  selected
                    ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                    : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
                }`}
              >
                {t(opt.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Notes */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('charBuilder.sections.customNotes')}
        </label>
        <textarea
          value={data.customNotes}
          onChange={(e) => update({ customNotes: e.target.value })}
          placeholder={t('charBuilder.customNotesPlaceholder')}
          rows={2}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
      </div>

      {/* Prompt Preview */}
      <div className="bg-surface rounded-lg p-3 border border-border">
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('charBuilder.promptPreview')}
        </label>
        <p className="text-xs text-text leading-relaxed">{promptPreview || '...'}</p>
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="character-builder"
      />

      {/* Next button */}
      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-all"
      >
        {t('charBuilder.next')}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

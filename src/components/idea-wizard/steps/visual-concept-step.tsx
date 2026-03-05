import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Camera, X, Plus, Palette, Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VISUAL_STYLE_PRESETS } from '../../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../../storyboard/shot-constants';
import type { MusicVideoData } from '../../../types/wizard-data';
import type { Mood, ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';
import { fileToBase64 } from '../../../lib/image-utils';

interface VisualConceptStepProps {
  data: MusicVideoData;
  onChange: (d: MusicVideoData) => void;
  onBack: () => void;
  onGenerate: () => void;
  claudeApiKey: string | null;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function VisualConceptStep({
  data,
  onChange,
  onBack,
  onGenerate,
  claudeApiKey,
  referenceImages,
  onReferenceChange,
}: VisualConceptStepProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) return;

      const currentCount = data.artistPhotoUrls.length;
      const remainingSlots = 5 - currentCount;
      const filesToProcess = Array.from(files).slice(0, remainingSlots);

      const newDataUrls = await Promise.all(
        filesToProcess.map((file) => fileToBase64(file)),
      );
      onChange({
        ...data,
        artistPhotoUrls: [...data.artistPhotoUrls, ...newDataUrls],
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [data, onChange],
  );

  const removePhoto = useCallback(
    (index: number) => {
      onChange({
        ...data,
        artistPhotoUrls: data.artistPhotoUrls.filter((_, i) => i !== index),
      });
    },
    [data, onChange],
  );

  const canGenerate = !!claudeApiKey;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary-400" />
          {t('musicVideo.concept.title')}
        </h3>
      </div>

      {/* API Key Warning */}
      {!claudeApiKey && (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
          <Settings className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-300 font-medium">
              {t('idea.noApiKey')}
            </p>
            <button
              onClick={() => navigate('/settings')}
              className="text-sm text-primary-400 hover:text-primary-300 mt-1 underline inline-flex items-center gap-1"
            >
              <Settings className="w-3.5 h-3.5" />
              {t('idea.goToSettings')}
            </button>
          </div>
        </div>
      )}

      {/* Artist Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          <span className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-text-muted" />
            {t('musicVideo.concept.photos')}
          </span>
        </label>

        <div className="grid grid-cols-5 gap-2">
          {data.artistPhotoUrls.map((url, index) => (
            <div
              key={`photo-${index}`}
              className="relative aspect-square rounded-lg overflow-hidden border border-border group"
            >
              <img
                src={url}
                alt={`Artist photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-1 end-1 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {data.artistPhotoUrls.length < 5 && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary-500/50 flex items-center justify-center text-text-muted hover:text-primary-400 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </div>

      {/* Visual Concept */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('musicVideo.concept.visualConcept')}
        </label>
        <textarea
          value={data.visualConcept}
          onChange={(e) => onChange({ ...data, visualConcept: e.target.value })}
          rows={4}
          placeholder={t('musicVideo.concept.placeholder')}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-y"
        />
      </div>

      {/* Visual Style Grid */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.styleLabel')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {VISUAL_STYLE_PRESETS.map((style) => (
            <button
              key={style.id}
              onClick={() => onChange({ ...data, visualStyle: style.id })}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                data.visualStyle === style.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              <span>{style.emoji}</span>
              <span>{t(style.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mood */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.moodLabel')}
        </label>
        <div className="flex flex-wrap gap-2">
          {MOODS.map((mood) => (
            <button
              key={mood}
              onClick={() => onChange({ ...data, mood: mood as Mood })}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                data.mood === mood
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: MOOD_COLORS[mood] || '#888' }}
              />
              {t(`shot.moods.${mood}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="visual-concept"
      />

      {/* Navigation */}
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
          onClick={onGenerate}
          disabled={!canGenerate}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" />
          {t('wizard.generateBtn')}
        </button>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight } from 'lucide-react';
import { VISUAL_STYLE_PRESETS } from '../../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../../storyboard/shot-constants';
import { MUSIC_MOODS } from '../../../types/wizard-data';
import type { RecapVideoData } from '../../../types/wizard-data';
import type { Mood, ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface NarrativeStepProps {
  data: RecapVideoData;
  onChange: (d: RecapVideoData) => void;
  onBack: () => void;
  onGenerate: () => void;
  claudeApiKey: string | null;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function NarrativeStep({ data, onChange, onBack, onGenerate, claudeApiKey, referenceImages, onReferenceChange }: NarrativeStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<RecapVideoData>) => {
    onChange({ ...data, ...partial });
  };

  const canGenerate = data.eventName.trim().length > 0 && !!claudeApiKey;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text">{t('recapVideo.narrative.title')}</h3>
      </div>

      {/* Event Name */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('recapVideo.narrative.eventName')}
        </label>
        <input
          type="text"
          value={data.eventName}
          onChange={(e) => update({ eventName: e.target.value })}
          placeholder={t('recapVideo.narrative.eventNamePlaceholder')}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
        />
      </div>

      {/* Voiceover / Narrative */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('recapVideo.narrative.voiceover')}
        </label>
        <textarea
          value={data.voiceoverText}
          onChange={(e) => update({ voiceoverText: e.target.value })}
          placeholder={t('recapVideo.narrative.voiceoverPlaceholder')}
          rows={6}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
      </div>

      {/* Music Mood */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('recapVideo.narrative.musicMood')}
        </label>
        <div className="flex flex-wrap gap-2">
          {MUSIC_MOODS.map((mood) => (
            <button
              key={mood}
              onClick={() => update({ musicMood: mood })}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                data.musicMood === mood
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(`recapVideo.narrative.musicMoods.${mood}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Style */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.styleLabel')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {VISUAL_STYLE_PRESETS.map((style) => (
            <button
              key={style.id}
              onClick={() => update({ visualStyle: style.id })}
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
              onClick={() => update({ mood: mood as Mood })}
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
        stepId="narrative"
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
          onClick={onGenerate}
          disabled={!canGenerate}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" />
          {t('recapVideo.narrative.generateStoryboard')}
        </button>
      </div>
    </div>
  );
}

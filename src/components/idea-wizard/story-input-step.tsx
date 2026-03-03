import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight } from 'lucide-react';
import { VISUAL_STYLE_PRESETS, SHOT_COUNT_OPTIONS } from '../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../storyboard/shot-constants';
import type { StoryInputData } from '../../types/idea-wizard';
import type { Mood } from '../../types/project';

interface StoryInputStepProps {
  data: StoryInputData;
  onChange: (data: StoryInputData) => void;
  onGenerate: () => void;
  onBack: () => void;
  claudeApiKey: string;
}

export function StoryInputStep({ data, onChange, onGenerate, onBack, claudeApiKey }: StoryInputStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<StoryInputData>) => {
    onChange({ ...data, ...partial });
  };

  const canGenerate = data.idea.trim().length > 0 && !!claudeApiKey;

  return (
    <div className="space-y-5">
      {/* Story / Script */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.ideaLabel')}
        </label>
        <textarea
          value={data.idea}
          onChange={(e) => update({ idea: e.target.value })}
          placeholder={t('wizard.ideaPlaceholder')}
          rows={4}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
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

      {/* Shot Count */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.shotCountLabel')}
        </label>
        <div className="flex gap-2">
          {SHOT_COUNT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ shotCountRange: opt.id })}
              className={`flex-1 px-3 py-2 rounded-lg text-xs text-center transition-all ${
                data.shotCountRange === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" />
          {t('wizard.generate')}
        </button>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { AlertCircle, Sparkles, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VISUAL_STYLE_PRESETS, SHOT_COUNT_OPTIONS } from '../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../storyboard/shot-constants';
import type { IdeaWizardInput } from '../../types/idea-wizard';
import type { Mood } from '../../types/project';

interface WizardFormProps {
  input: IdeaWizardInput;
  onChange: (input: IdeaWizardInput) => void;
  onSubmit: () => void;
  claudeApiKey: string | null;
}

export function WizardForm({ input, onChange, onSubmit, claudeApiKey }: WizardFormProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const update = <K extends keyof IdeaWizardInput>(key: K, value: IdeaWizardInput[K]) =>
    onChange({ ...input, [key]: value });

  const canSubmit = input.idea.trim() && input.characterDescription.trim() && claudeApiKey;

  return (
    <div className="space-y-6">
      {/* API Key Warning */}
      {!claudeApiKey && (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-300 font-medium">{t('idea.noApiKey')}</p>
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

      {/* 1. Script / Idea */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('wizard.ideaLabel')}
        </label>
        <textarea
          value={input.idea}
          onChange={(e) => update('idea', e.target.value)}
          rows={4}
          placeholder={t('wizard.ideaPlaceholder')}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-y"
        />
      </div>

      {/* 2. Character Description (required) */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('wizard.characterLabel')}{' '}
          <span className="text-xs text-orange-400 font-normal">({t('wizard.characterRequired')})</span>
        </label>
        <textarea
          value={input.characterDescription}
          onChange={(e) => update('characterDescription', e.target.value)}
          rows={2}
          placeholder={t('wizard.characterPlaceholder')}
          className={`w-full bg-surface border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-y ${
            !input.characterDescription.trim() ? 'border-orange-500/40' : 'border-border'
          }`}
        />
      </div>

      {/* 3. Visual Style (grid 3x3) */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.styleLabel')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {VISUAL_STYLE_PRESETS.map((style) => (
            <button
              key={style.id}
              onClick={() => update('visualStyle', style.id)}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-all text-center ${
                input.visualStyle === style.id
                  ? 'border-primary-500 bg-primary-600/20 text-primary-300'
                  : 'border-border bg-surface hover:border-primary-500/50 text-text-muted'
              }`}
            >
              <span className="text-xl">{style.emoji}</span>
              <span className="text-xs">{t(style.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Mood (pill buttons) */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.moodLabel')}
        </label>
        <div className="flex flex-wrap gap-2">
          {MOODS.map((mood) => (
            <button
              key={mood}
              onClick={() => update('mood', mood as Mood)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                input.mood === mood
                  ? 'bg-primary-600/30 text-primary-300 border border-primary-500'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: MOOD_COLORS[mood] }}
              />
              {t(`shot.moods.${mood}`)}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Shot Count */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('wizard.shotCountLabel')}
        </label>
        <div className="flex gap-2">
          {SHOT_COUNT_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => update('shotCountRange', option.id)}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                input.shotCountRange === option.id
                  ? 'bg-primary-600/30 text-primary-300 border border-primary-500'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(option.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={onSubmit}
        disabled={!canSubmit}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20"
      >
        <Sparkles className="w-5 h-5" />
        {t('wizard.generate')}
      </button>
    </div>
  );
}

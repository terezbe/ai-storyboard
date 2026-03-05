import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Plus, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VISUAL_STYLE_PRESETS } from '../../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../../storyboard/shot-constants';
import type { InvitationData } from '../../../types/wizard-data';
import type { Mood, ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface PersonalMessageStepProps {
  data: InvitationData;
  onChange: (d: InvitationData) => void;
  onNext: () => void;
  onBack: () => void;
  claudeApiKey: string | null;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function PersonalMessageStep({
  data,
  onChange,
  onNext,
  onBack,
  claudeApiKey,
  referenceImages,
  onReferenceChange,
}: PersonalMessageStepProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const update = (partial: Partial<InvitationData>) => {
    onChange({ ...data, ...partial });
  };

  const addColor = () => {
    if (data.colorScheme.length >= 4) return;
    update({ colorScheme: [...data.colorScheme, '#ffffff'] });
  };

  const updateColor = (index: number, color: string) => {
    const next = [...data.colorScheme];
    next[index] = color;
    update({ colorScheme: next });
  };

  const removeColor = (index: number) => {
    if (data.colorScheme.length <= 1) return;
    update({ colorScheme: data.colorScheme.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text">{t('invitation.message.title')}</h3>
      </div>

      {/* API Key Warning */}
      {!claudeApiKey && (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
          <Settings className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
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

      {/* Color Scheme */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('invitation.message.colors')}
        </label>
        <div className="flex items-center gap-3">
          {data.colorScheme.map((color, i) => (
            <div key={i} className="relative group">
              <label className="block cursor-pointer">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => updateColor(i, e.target.value)}
                  className="sr-only"
                />
                <span
                  className="block w-10 h-10 rounded-full border-2 border-border hover:border-primary-500/50 transition-colors"
                  style={{ backgroundColor: color }}
                />
              </label>
              {data.colorScheme.length > 1 && (
                <button
                  onClick={() => removeColor(i)}
                  className="absolute -top-1.5 -end-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  x
                </button>
              )}
            </div>
          ))}
          {data.colorScheme.length < 4 && (
            <button
              onClick={addColor}
              className="w-10 h-10 rounded-full border-2 border-dashed border-border hover:border-primary-500/50 flex items-center justify-center text-text-muted hover:text-primary-400 transition-colors"
              title={t('invitation.message.addColor')}
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
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

      {/* Personal Message */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.message.personalMessage')}
        </label>
        <textarea
          value={data.personalMessage}
          onChange={(e) => update({ personalMessage: e.target.value })}
          placeholder={t('invitation.message.placeholder')}
          rows={4}
          className="w-full rounded-lg px-3 py-2 text-sm bg-surface border border-border text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary-500 resize-none"
        />
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="personal-message"
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
          disabled={!claudeApiKey}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20"
        >
          <Sparkles className="w-5 h-5" />
          {t('wizard.generate')}
        </button>
      </div>
    </div>
  );
}

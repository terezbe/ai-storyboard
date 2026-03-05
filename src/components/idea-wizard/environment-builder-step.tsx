import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { EnvironmentDefinition } from '../../types/environment-builder';
import type { ReferenceImage } from '../../types/project';
import {
  ENVIRONMENT_CATEGORIES,
  TIME_OF_DAY_OPTIONS,
  WEATHER_OPTIONS,
  LIGHTING_OPTIONS,
  getSettingsForCategory,
} from '../../config/environment-presets';
import { StepReferenceUpload } from './step-reference-upload';

interface EnvironmentBuilderStepProps {
  data: EnvironmentDefinition;
  onChange: (data: EnvironmentDefinition) => void;
  onNext: () => void;
  onBack: () => void;
  promptPreview: string;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function EnvironmentBuilderStep({
  data,
  onChange,
  onNext,
  onBack,
  promptPreview,
  referenceImages,
  onReferenceChange,
}: EnvironmentBuilderStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<EnvironmentDefinition>) => {
    onChange({ ...data, ...partial });
  };

  const filteredSettings = getSettingsForCategory(data.category);

  return (
    <div className="space-y-5">
      {/* ── Category — icon grid, 4 cols ─────────────────────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.category')}
        </label>
        <div className="grid grid-cols-4 gap-2">
          {ENVIRONMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                update({ category: cat.id, settingId: '', customSetting: '' })
              }
              className={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg text-xs transition-all ${
                data.category === cat.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              <span>{t(cat.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Setting — 2-col grid filtered by category ────────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.setting')}
        </label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
          {filteredSettings.map((setting) => (
            <button
              key={setting.id}
              onClick={() =>
                update({ settingId: setting.id, customSetting: '' })
              }
              className={`p-2.5 rounded-lg text-start text-xs transition-all ${
                data.settingId === setting.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {setting.emoji && <span className="me-1">{setting.emoji}</span>}
              {t(setting.labelKey)}
            </button>
          ))}
        </div>
        {/* Custom setting input */}
        <input
          type="text"
          value={data.customSetting}
          onChange={(e) =>
            update({ customSetting: e.target.value, settingId: '' })
          }
          placeholder={t('envBuilder.customSettingPlaceholder')}
          className="w-full mt-2 bg-surface border border-border rounded-lg px-3 py-2 text-xs text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
        />
      </div>

      {/* ── Time of Day — horizontal chips with emoji ─────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.timeOfDay')}
        </label>
        <div className="flex flex-wrap gap-1.5">
          {TIME_OF_DAY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ timeOfDay: opt.id as EnvironmentDefinition['timeOfDay'] })}
              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                data.timeOfDay === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {opt.emoji && <span className="me-1">{opt.emoji}</span>}
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Weather — pill buttons ────────────────────────────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.weather')}
        </label>
        <div className="flex flex-wrap gap-2">
          {WEATHER_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ weather: opt.id as EnvironmentDefinition['weather'] })}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                data.weather === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {opt.emoji && <span className="me-1">{opt.emoji}</span>}
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Lighting — pill buttons ───────────────────────────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.lighting')}
        </label>
        <div className="flex flex-wrap gap-2">
          {LIGHTING_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => update({ lighting: opt.id as EnvironmentDefinition['lighting'] })}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                data.lighting === opt.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Custom Notes ──────────────────────────────────────────────── */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('envBuilder.sections.customNotes')}
        </label>
        <textarea
          value={data.customNotes}
          onChange={(e) => update({ customNotes: e.target.value })}
          placeholder={t('envBuilder.customNotesPlaceholder')}
          rows={2}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
      </div>

      {/* ── Prompt Preview ────────────────────────────────────────────── */}
      <div className="bg-surface rounded-lg p-3 border border-border">
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('envBuilder.promptPreview')}
        </label>
        <p className="text-xs text-text leading-relaxed">
          {promptPreview || '...'}
        </p>
      </div>

      {/* ── Reference Images ──────────────────────────────────────────── */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="environment-builder"
      />

      {/* ── Action buttons ────────────────────────────────────────────── */}
      <div className="flex gap-3">
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
          {t('envBuilder.next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Plus, X } from 'lucide-react';
import { VISUAL_STYLE_PRESETS } from '../../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../../storyboard/shot-constants';
import type { EventPromoData } from '../../../types/wizard-data';
import type { Mood, ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface MarketingContentStepProps {
  data: EventPromoData;
  onChange: (d: EventPromoData) => void;
  onNext: () => void;
  onBack: () => void;
  claudeApiKey: string | null;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const MAX_USPS = 5;

export function MarketingContentStep({
  data,
  onChange,
  onNext,
  onBack,
  claudeApiKey,
  referenceImages,
  onReferenceChange,
}: MarketingContentStepProps) {
  const { t } = useTranslation();
  const [uspInput, setUspInput] = useState('');

  const update = (partial: Partial<EventPromoData>) => {
    onChange({ ...data, ...partial });
  };

  // --- USPs ---
  const addUsp = () => {
    const trimmed = uspInput.trim();
    if (!trimmed || data.usps.length >= MAX_USPS) return;
    update({ usps: [...data.usps, trimmed] });
    setUspInput('');
  };

  const removeUsp = (index: number) => {
    update({ usps: data.usps.filter((_, i) => i !== index) });
  };

  const handleUspKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addUsp();
    }
  };

  const canGenerate = !!claudeApiKey;

  return (
    <div className="space-y-5">
      {/* USPs */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.marketing.usps')}
        </label>

        {/* USP chips */}
        {data.usps.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {data.usps.map((usp, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-primary-600/20 border border-primary-500 text-primary-300"
              >
                {usp}
                <button
                  onClick={() => removeUsp(i)}
                  className="hover:text-white transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* USP input */}
        {data.usps.length < MAX_USPS && (
          <div className="flex gap-2">
            <input
              type="text"
              value={uspInput}
              onChange={(e) => setUspInput(e.target.value)}
              onKeyDown={handleUspKeyDown}
              placeholder={t('eventPromo.marketing.uspPlaceholder')}
              className="flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
            />
            <button
              onClick={addUsp}
              disabled={!uspInput.trim()}
              className="px-3 py-2 rounded-lg bg-surface border border-border text-text-muted hover:border-primary-500/50 hover:text-primary-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
        <p className="text-xs text-text-muted mt-1">
          {t('eventPromo.marketing.addUsp')}
        </p>
      </div>

      {/* CTA */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.marketing.cta')}
        </label>
        <input
          type="text"
          value={data.cta}
          onChange={(e) => update({ cta: e.target.value })}
          placeholder={t('eventPromo.marketing.ctaPlaceholder')}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
        />
      </div>

      {/* Target Audience */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.marketing.target')}
        </label>
        <textarea
          value={data.targetAudience}
          onChange={(e) => update({ targetAudience: e.target.value })}
          rows={2}
          placeholder={t('eventPromo.marketing.targetPlaceholder')}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50 resize-none"
        />
      </div>

      {/* Pricing */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('eventPromo.marketing.pricing')}
        </label>
        <input
          type="text"
          value={data.pricing}
          onChange={(e) => update({ pricing: e.target.value })}
          placeholder={t('eventPromo.marketing.pricingPlaceholder')}
          className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text placeholder-text-muted/50 focus:outline-none focus:border-primary-500/50"
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

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="marketing-content"
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
          disabled={!canGenerate}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20"
        >
          <Sparkles className="w-5 h-5" />
          {t('wizard.generateBtn')}
        </button>
      </div>
    </div>
  );
}

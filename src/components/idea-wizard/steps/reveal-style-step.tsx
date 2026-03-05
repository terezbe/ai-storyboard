import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, AlertCircle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VISUAL_STYLE_PRESETS } from '../../../config/style-presets';
import { MOODS, MOOD_COLORS } from '../../storyboard/shot-constants';
import type { BrandRevealData, RevealStyle, LogoAnimationType, SoundDesign } from '../../../types/wizard-data';
import type { Mood, ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface RevealStyleStepProps {
  data: BrandRevealData;
  onChange: (d: BrandRevealData) => void;
  onGenerate: () => void;
  onBack: () => void;
  claudeApiKey: string | null;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const REVEAL_STYLES: { id: RevealStyle; emoji: string; descKey: string }[] = [
  { id: 'particles', emoji: '✨', descKey: 'brandReveal.reveal.styles.particles.desc' },
  { id: 'liquid', emoji: '💧', descKey: 'brandReveal.reveal.styles.liquid.desc' },
  { id: 'geometric', emoji: '🔷', descKey: 'brandReveal.reveal.styles.geometric.desc' },
  { id: 'nature', emoji: '🌿', descKey: 'brandReveal.reveal.styles.nature.desc' },
  { id: 'minimal', emoji: '◻️', descKey: 'brandReveal.reveal.styles.minimal.desc' },
  { id: 'explosive', emoji: '💥', descKey: 'brandReveal.reveal.styles.explosive.desc' },
  { id: 'elegant', emoji: '👑', descKey: 'brandReveal.reveal.styles.elegant.desc' },
  { id: 'glitch', emoji: '📟', descKey: 'brandReveal.reveal.styles.glitch.desc' },
];

const ANIMATION_TYPES: { id: LogoAnimationType; labelKey: string }[] = [
  { id: 'fade-in', labelKey: 'brandReveal.reveal.animationTypes.fade-in' },
  { id: 'scale-up', labelKey: 'brandReveal.reveal.animationTypes.scale-up' },
  { id: 'assemble', labelKey: 'brandReveal.reveal.animationTypes.assemble' },
  { id: 'emerge', labelKey: 'brandReveal.reveal.animationTypes.emerge' },
  { id: 'unfold', labelKey: 'brandReveal.reveal.animationTypes.unfold' },
  { id: 'dissolve-in', labelKey: 'brandReveal.reveal.animationTypes.dissolve-in' },
];

const SOUND_DESIGNS: { id: SoundDesign; labelKey: string }[] = [
  { id: 'cinematic', labelKey: 'brandReveal.reveal.soundTypes.cinematic' },
  { id: 'minimal', labelKey: 'brandReveal.reveal.soundTypes.minimal' },
  { id: 'epic', labelKey: 'brandReveal.reveal.soundTypes.epic' },
  { id: 'electronic', labelKey: 'brandReveal.reveal.soundTypes.electronic' },
  { id: 'organic', labelKey: 'brandReveal.reveal.soundTypes.organic' },
];

export function RevealStyleStep({
  data,
  onChange,
  onGenerate,
  onBack,
  claudeApiKey,
  referenceImages,
  onReferenceChange,
}: RevealStyleStepProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const update = (partial: Partial<BrandRevealData>) => {
    onChange({ ...data, ...partial });
  };

  const canGenerate = !!claudeApiKey;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('brandReveal.reveal.title')}</h3>
      </div>

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

      {/* Reveal Style grid (2-col) */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('brandReveal.reveal.style', 'Reveal Style')}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {REVEAL_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => update({ revealStyle: style.id })}
              className={`flex flex-col items-start gap-1 rounded-xl border p-3 cursor-pointer transition-all text-start ${
                data.revealStyle === style.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'border-border bg-surface text-text-muted hover:border-primary-500/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{style.emoji}</span>
                <span className="text-xs font-medium">
                  {t(`brandReveal.reveal.styles.${style.id}.label`)}
                </span>
              </div>
              <span className="text-[11px] opacity-70 leading-tight">
                {t(style.descKey)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Logo Animation */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('brandReveal.reveal.animation')}
        </label>
        <div className="flex flex-wrap gap-2">
          {ANIMATION_TYPES.map((anim) => (
            <button
              key={anim.id}
              onClick={() => update({ animationStyle: anim.id })}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                data.animationStyle === anim.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(anim.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Sound Design */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('brandReveal.reveal.sound')}
        </label>
        <div className="flex flex-wrap gap-2">
          {SOUND_DESIGNS.map((sd) => (
            <button
              key={sd.id}
              onClick={() => update({ soundDesign: sd.id })}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                data.soundDesign === sd.id
                  ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                  : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
              }`}
            >
              {t(sd.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Background Atmosphere */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('brandReveal.reveal.atmosphere')}
        </label>
        <textarea
          value={data.backgroundAtmosphere}
          onChange={(e) => update({ backgroundAtmosphere: e.target.value })}
          rows={2}
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-none transition-colors"
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
        stepId="reveal-style"
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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20"
        >
          <Sparkles className="w-5 h-5" />
          {t('wizard.generate')}
        </button>
      </div>
    </div>
  );
}

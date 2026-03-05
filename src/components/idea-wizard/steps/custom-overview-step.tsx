import { useTranslation } from 'react-i18next';
import { ArrowRight, User, Image, Images, Film } from 'lucide-react';
import type { CustomData } from '../../../types/wizard-data';

interface CustomOverviewStepProps {
  data: CustomData;
  onChange: (d: CustomData) => void;
  onNext: () => void;
  onBack: () => void;
}

type SectionKey = keyof CustomData['sections'];

const SECTION_CARDS: {
  key: SectionKey;
  icon: typeof User;
  labelKey: string;
  descKey: string;
}[] = [
  { key: 'character', icon: User, labelKey: 'custom.overview.character', descKey: 'custom.overview.characterDesc' },
  { key: 'logo', icon: Image, labelKey: 'custom.overview.logo', descKey: 'custom.overview.logoDesc' },
  { key: 'photos', icon: Images, labelKey: 'custom.overview.photos', descKey: 'custom.overview.photosDesc' },
  { key: 'videoRef', icon: Film, labelKey: 'custom.overview.videoRef', descKey: 'custom.overview.videoRefDesc' },
];

export function CustomOverviewStep({ data, onChange, onNext, onBack }: CustomOverviewStepProps) {
  const { t } = useTranslation();

  const update = (partial: Partial<CustomData>) => {
    onChange({ ...data, ...partial });
  };

  const toggleSection = (key: SectionKey) => {
    update({
      sections: { ...data.sections, [key]: !data.sections[key] },
    });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-text">{t('custom.overview.title')}</h3>
      </div>

      {/* Project Title */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('custom.overview.projectTitle')}
        </label>
        <input
          type="text"
          value={data.projectTitle}
          onChange={(e) => update({ projectTitle: e.target.value })}
          placeholder={t('custom.overview.projectTitlePlaceholder')}
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('custom.overview.description')}
        </label>
        <textarea
          value={data.projectDescription}
          onChange={(e) => update({ projectDescription: e.target.value })}
          placeholder={t('custom.overview.descriptionPlaceholder')}
          rows={5}
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 transition-colors resize-none"
        />
      </div>

      {/* Section toggles */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t('custom.overview.sections')}
        </label>
        <div className="grid grid-cols-2 gap-3">
          {SECTION_CARDS.map(({ key, icon: Icon, labelKey, descKey }) => {
            const isActive = data.sections[key];
            return (
              <button
                key={key}
                onClick={() => toggleSection(key)}
                className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all text-start ${
                  isActive
                    ? 'border-primary-500 bg-primary-600/10'
                    : 'border-border bg-surface hover:border-primary-500/30'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-primary-600/20 text-primary-400' : 'bg-surface-lighter text-text-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${isActive ? 'text-primary-300' : 'text-text'}`}>
                    {t(labelKey)}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{t(descKey)}</p>
                </div>
                {/* Toggle switch */}
                <div
                  className={`flex-shrink-0 w-9 h-5 rounded-full transition-colors relative mt-0.5 ${
                    isActive ? 'bg-primary-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${
                      isActive ? 'end-0.5' : 'start-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
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

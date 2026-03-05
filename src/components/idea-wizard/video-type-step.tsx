import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { VIDEO_TYPE_CONFIGS, VIDEO_TYPE_ORDER } from '../../config/video-type-configs';
import type { ProjectType } from '../../types/project';

interface VideoTypeStepProps {
  selected: ProjectType;
  onSelect: (type: ProjectType) => void;
  onNext: () => void;
}

export function VideoTypeStep({ selected, onSelect, onNext }: VideoTypeStepProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {VIDEO_TYPE_ORDER.map((type) => {
          const config = VIDEO_TYPE_CONFIGS[type];
          if (!config) return null;
          const isSelected = selected === type;

          return (
            <button
              key={type}
              onClick={() => onSelect(type)}
              className={`flex flex-col items-start gap-2 p-4 rounded-xl text-start transition-all ${
                isSelected
                  ? 'border-2 border-primary-500 bg-primary-500/10'
                  : 'border border-border hover:border-primary-400/50'
              }`}
            >
              <span className="text-3xl">{config.emoji}</span>

              <span className="text-sm font-bold text-white">
                {t(config.labelKey)}
              </span>

              <span className="text-xs text-text-muted leading-relaxed">
                {t(config.descriptionKey)}
              </span>

              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-surface border border-border text-text-muted">
                {config.recommendedShotRange}
              </span>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-all"
      >
        {t('wizard.videoType.next')}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

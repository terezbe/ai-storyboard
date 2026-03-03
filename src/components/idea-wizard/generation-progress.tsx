import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

interface GenerationProgressProps {
  step: 'analyzing' | 'building';
}

export function GenerationProgress({ step }: GenerationProgressProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-primary-600/20 flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-primary-400 animate-spin" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-text">{t('wizard.generating')}</h3>
        <p className="text-sm text-text-muted">
          {step === 'analyzing' ? t('wizard.analyzingCharacter') : t('wizard.buildingShots')}
        </p>
      </div>

      <div className="flex gap-1.5">
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            step === 'analyzing' ? 'bg-primary-500 animate-pulse' : 'bg-primary-500'
          }`}
        />
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            step === 'building' ? 'bg-primary-500 animate-pulse' : step === 'analyzing' ? 'bg-border' : 'bg-primary-500'
          }`}
        />
        <div className="w-2.5 h-2.5 rounded-full bg-border" />
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { User, MapPin, PenTool, Eye } from 'lucide-react';
import type { WizardStage } from '../../types/idea-wizard';

interface WizardStepIndicatorProps {
  currentStage: WizardStage;
}

const STEPS = [
  { key: 'character', icon: User, stages: ['character-builder', 'character-preview'] as WizardStage[] },
  { key: 'environment', icon: MapPin, stages: ['environment-builder', 'environment-preview'] as WizardStage[] },
  { key: 'story', icon: PenTool, stages: ['story-input', 'generating'] as WizardStage[] },
  { key: 'preview', icon: Eye, stages: ['preview', 'importing'] as WizardStage[] },
] as const;

export function WizardStepIndicator({ currentStage }: WizardStepIndicatorProps) {
  const { t } = useTranslation();

  const currentStepIndex = STEPS.findIndex((step) =>
    step.stages.includes(currentStage)
  );

  return (
    <div className="flex items-center justify-center gap-1 mb-6">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;

        return (
          <div key={step.key} className="flex items-center">
            {/* Step circle */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isCompleted
                    ? 'bg-green-600 text-white'
                    : isActive
                    ? 'bg-primary-600 text-white ring-2 ring-primary-400/50'
                    : 'bg-surface border border-border text-text-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? 'text-primary-400' : isCompleted ? 'text-green-400' : 'text-text-muted'
                }`}
              >
                {t(`wizard.steps.${step.key}`)}
              </span>
            </div>

            {/* Connector line */}
            {index < STEPS.length - 1 && (
              <div
                className={`w-8 h-0.5 mx-1 mb-4 ${
                  index < currentStepIndex ? 'bg-green-600' : 'bg-border'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

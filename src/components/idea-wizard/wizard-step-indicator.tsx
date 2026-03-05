import { useTranslation } from 'react-i18next';
import {
  Film, User, MapPin, PenTool, Eye, Target, Package, Palette, Megaphone, Sparkles,
  Calendar, Camera, Heart, Music, ListMusic, AlignLeft, Image, Building, Mic, Images, CheckSquare,
  Layers, Upload,
} from 'lucide-react';
import type { WizardStage } from '../../types/idea-wizard';
import type { ProjectType } from '../../types/project';
import { getStepGroups } from '../../config/wizard-flows';

/** Map icon name strings to Lucide components */
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Film, User, MapPin, PenTool, Eye, Target, Package, Palette, Megaphone, Sparkles,
  Calendar, Camera, Heart, Music, ListMusic, AlignLeft, Image, Building, Mic, Images, CheckSquare,
  Layers, Upload,
  PartyPopper: Sparkles, // fallback — no PartyPopper in lucide-react
};

interface WizardStepIndicatorProps {
  currentStage: WizardStage;
  videoType: ProjectType;
}

export function WizardStepIndicator({ currentStage, videoType }: WizardStepIndicatorProps) {
  const { t } = useTranslation();
  const groups = getStepGroups(videoType);

  const currentGroupIndex = groups.findIndex((g) =>
    g.stageIds.includes(currentStage)
  );

  return (
    <div className="flex items-center justify-center gap-1 mb-6">
      {groups.map((group, index) => {
        const Icon = ICON_MAP[group.icon] || Film;
        const isActive = index === currentGroupIndex;
        const isCompleted = index < currentGroupIndex;

        return (
          <div key={group.group} className="flex items-center">
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
                {t(group.labelKey)}
              </span>
            </div>

            {/* Connector line */}
            {index < groups.length - 1 && (
              <div
                className={`w-8 h-0.5 mx-1 mb-4 ${
                  index < currentGroupIndex ? 'bg-green-600' : 'bg-border'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

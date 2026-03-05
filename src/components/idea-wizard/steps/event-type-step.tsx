import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { InvitationData, InvitationEventType } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface EventTypeStepProps {
  data: InvitationData;
  onChange: (d: InvitationData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const EVENT_TYPES: { id: InvitationEventType; emoji: string }[] = [
  { id: 'birthday', emoji: '\uD83C\uDF82' },
  { id: 'wedding', emoji: '\uD83D\uDC8D' },
  { id: 'bar-mitzvah', emoji: '\u2721\uFE0F' },
  { id: 'bat-mitzvah', emoji: '\u2728' },
  { id: 'engagement', emoji: '\uD83D\uDC96' },
  { id: 'baby-shower', emoji: '\uD83D\uDC76' },
  { id: 'anniversary', emoji: '\uD83C\uDF89' },
  { id: 'graduation', emoji: '\uD83C\uDF93' },
  { id: 'conference', emoji: '\uD83C\uDFE2' },
  { id: 'custom', emoji: '\u270F\uFE0F' },
];

export function EventTypeStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: EventTypeStepProps) {
  const { t } = useTranslation();

  const select = (eventType: InvitationEventType) => {
    onChange({ ...data, eventType });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text">{t('invitation.eventType.title')}</h3>
      </div>

      {/* Event type grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {EVENT_TYPES.map((evt) => (
          <button
            key={evt.id}
            onClick={() => select(evt.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
              data.eventType === evt.id
                ? 'bg-primary-600/20 border-2 border-primary-500 text-primary-300'
                : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
            }`}
          >
            <span className="text-3xl">{evt.emoji}</span>
            <span className="text-sm font-medium">{t(`invitation.eventType.types.${evt.id}`)}</span>
          </button>
        ))}
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="event-type"
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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all"
        >
          {t('invitation.eventType.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

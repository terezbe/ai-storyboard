import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { InvitationData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface EventDetailsStepProps {
  data: InvitationData;
  onChange: (d: InvitationData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function EventDetailsStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: EventDetailsStepProps) {
  const { t } = useTranslation();
  const [attempted, setAttempted] = useState(false);

  const update = (partial: Partial<InvitationData>) => {
    onChange({ ...data, ...partial });
  };

  const allFilled =
    data.eventName.trim() !== '' &&
    data.date.trim() !== '' &&
    data.time.trim() !== '' &&
    data.location.trim() !== '' &&
    data.rsvpMethod.trim() !== '';

  const handleNext = () => {
    if (!allFilled) {
      setAttempted(true);
      return;
    }
    onNext();
  };

  const inputClass = (value: string) =>
    `w-full rounded-lg px-3 py-2 text-sm bg-surface border text-text focus:outline-none focus:border-primary-500 ${
      attempted && !value.trim() ? 'border-red-500' : 'border-border'
    }`;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-text">{t('invitation.details.title')}</h3>
      </div>

      {/* Event Name */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.details.eventName')}
          <span className="text-xs text-red-400 ms-1">*</span>
        </label>
        <input
          type="text"
          value={data.eventName}
          onChange={(e) => update({ eventName: e.target.value })}
          className={inputClass(data.eventName)}
        />
        {attempted && !data.eventName.trim() && (
          <p className="text-xs text-red-400 mt-1">{t('invitation.details.required')}</p>
        )}
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.details.date')}
          <span className="text-xs text-red-400 ms-1">*</span>
        </label>
        <input
          type="date"
          value={data.date}
          onChange={(e) => update({ date: e.target.value })}
          className={inputClass(data.date)}
        />
        {attempted && !data.date.trim() && (
          <p className="text-xs text-red-400 mt-1">{t('invitation.details.required')}</p>
        )}
      </div>

      {/* Time */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.details.time')}
          <span className="text-xs text-red-400 ms-1">*</span>
        </label>
        <input
          type="time"
          value={data.time}
          onChange={(e) => update({ time: e.target.value })}
          className={inputClass(data.time)}
        />
        {attempted && !data.time.trim() && (
          <p className="text-xs text-red-400 mt-1">{t('invitation.details.required')}</p>
        )}
      </div>

      {/* Location / Venue */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.details.location')}
          <span className="text-xs text-red-400 ms-1">*</span>
        </label>
        <textarea
          value={data.location}
          onChange={(e) => update({ location: e.target.value })}
          rows={2}
          className={inputClass(data.location) + ' resize-none'}
        />
        {attempted && !data.location.trim() && (
          <p className="text-xs text-red-400 mt-1">{t('invitation.details.required')}</p>
        )}
      </div>

      {/* RSVP Contact */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('invitation.details.rsvp')}
          <span className="text-xs text-red-400 ms-1">*</span>
        </label>
        <input
          type="text"
          value={data.rsvpMethod}
          onChange={(e) => update({ rsvpMethod: e.target.value })}
          className={inputClass(data.rsvpMethod)}
        />
        {attempted && !data.rsvpMethod.trim() && (
          <p className="text-xs text-red-400 mt-1">{t('invitation.details.required')}</p>
        )}
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="event-details"
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
          onClick={handleNext}
          disabled={!allFilled}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('invitation.details.next', 'Next')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useSettingsStore } from '../../store/settings-store';
import { generateAllPromptsForShot } from '../../lib/prompt-engine';
import type { Shot, CameraAngle, Mood, TransitionType } from '../../types/project';

const CAMERA_ANGLES: CameraAngle[] = [
  'wide-shot', 'medium-shot', 'close-up', 'extreme-close-up',
  'over-the-shoulder', 'birds-eye', 'low-angle', 'high-angle',
  'dutch-angle', 'tracking', 'pan', 'zoom-in', 'zoom-out',
];

const MOODS: Mood[] = [
  'energetic', 'romantic', 'dramatic', 'festive', 'emotional',
  'funny', 'elegant', 'mysterious', 'calm', 'exciting',
];

const TRANSITIONS: TransitionType[] = [
  'cut', 'fade', 'dissolve', 'wipe', 'slide', 'zoom', 'none',
];

export function ShotEditor({ shot }: { shot: Shot }) {
  const { t } = useTranslation();
  const { updateShot, updateShotPrompts } = useProjectStore();
  const settings = useSettingsStore();

  const update = (updates: Partial<Shot>) => updateShot(shot.id, updates);

  const handleGenerateAll = () => {
    const prompts = generateAllPromptsForShot(
      shot,
      settings.preferredImageModel,
      settings.preferredVideoModel,
      settings.preferredMusicModel,
      'standard'
    );
    updateShotPrompts(shot.id, prompts);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-text">{shot.title || `Shot ${shot.orderIndex + 1}`}</h3>
        <button
          onClick={handleGenerateAll}
          className="flex items-center gap-1 text-xs bg-primary-600 hover:bg-primary-700 text-white px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {t('prompt.generateAll')}
        </button>
      </div>

      {/* Title */}
      {/* Image Preview */}
      {shot.imageUrl && (
        <div className="rounded-lg overflow-hidden border border-border">
          <img src={shot.imageUrl} alt={shot.title} className="w-full h-40 object-cover" />
        </div>
      )}
      <Field label={t('shot.title')}>
        <input
          value={shot.title}
          onChange={(e) => update({ title: e.target.value })}
          className="input-field"
        />
      </Field>

      {/* Duration & Camera & Mood */}
      <div className="grid grid-cols-2 gap-3">
        <Field label={t('shot.duration')}>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={300}
              value={shot.duration}
              onChange={(e) => update({ duration: Number(e.target.value) || 1 })}
              className="input-field w-20"
            />
            <span className="text-xs text-text-muted">{t('shot.seconds')}</span>
          </div>
        </Field>

        <Field label={t('shot.mood')}>
          <select
            value={shot.mood}
            onChange={(e) => update({ mood: e.target.value as Mood })}
            className="input-field"
          >
            {MOODS.map((m) => (
              <option key={m} value={m}>{t(`shot.moods.${m}`)}</option>
            ))}
          </select>
        </Field>

        <Field label={t('shot.camera')}>
          <select
            value={shot.cameraAngle}
            onChange={(e) => update({ cameraAngle: e.target.value as CameraAngle })}
            className="input-field"
          >
            {CAMERA_ANGLES.map((a) => (
              <option key={a} value={a}>{t(`shot.cameraAngles.${a}`)}</option>
            ))}
          </select>
        </Field>

        <Field label={t('shot.transition')}>
          <select
            value={shot.transition}
            onChange={(e) => update({ transition: e.target.value as TransitionType })}
            className="input-field"
          >
            {TRANSITIONS.map((tr) => (
              <option key={tr} value={tr}>{t(`shot.transitions.${tr}`)}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Environment */}
      <fieldset className="border border-border rounded-lg p-3 space-y-2">
        <legend className="text-xs font-semibold text-primary-300 px-1">
          {t('shot.environment')}
        </legend>
        <SmallField label={t('shot.setting')}>
          <textarea
            rows={2}
            value={shot.environment.setting}
            onChange={(e) =>
              update({ environment: { ...shot.environment, setting: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.lighting')}>
          <input
            value={shot.environment.lighting}
            onChange={(e) =>
              update({ environment: { ...shot.environment, lighting: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.props')}>
          <input
            value={shot.environment.props}
            onChange={(e) =>
              update({ environment: { ...shot.environment, props: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.atmosphere')}>
          <input
            value={shot.environment.atmosphere}
            onChange={(e) =>
              update({ environment: { ...shot.environment, atmosphere: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
      </fieldset>

      {/* Character */}
      <fieldset className="border border-border rounded-lg p-3 space-y-2">
        <legend className="text-xs font-semibold text-primary-300 px-1">
          {t('shot.character')}
        </legend>
        <SmallField label={t('shot.appearance')}>
          <textarea
            rows={2}
            value={shot.character.appearance}
            onChange={(e) =>
              update({ character: { ...shot.character, appearance: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.outfit')}>
          <input
            value={shot.character.outfit}
            onChange={(e) =>
              update({ character: { ...shot.character, outfit: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.expression')}>
          <input
            value={shot.character.expression}
            onChange={(e) =>
              update({ character: { ...shot.character, expression: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.action')}>
          <input
            value={shot.character.action}
            onChange={(e) =>
              update({ character: { ...shot.character, action: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
      </fieldset>

      {/* Dialogue */}
      <fieldset className="border border-border rounded-lg p-3 space-y-2">
        <legend className="text-xs font-semibold text-primary-300 px-1">
          {t('shot.dialogue')}
        </legend>
        <SmallField label={t('shot.text')}>
          <textarea
            rows={2}
            value={shot.dialogue.text}
            onChange={(e) =>
              update({ dialogue: { ...shot.dialogue, text: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
        <SmallField label={t('shot.voiceStyle')}>
          <input
            value={shot.dialogue.voiceStyle}
            onChange={(e) =>
              update({ dialogue: { ...shot.dialogue, voiceStyle: e.target.value } })
            }
            className="input-field"
          />
        </SmallField>
      </fieldset>

      {/* Notes */}
      <Field label={t('shot.notes')}>
        <textarea
          rows={2}
          value={shot.notes}
          onChange={(e) => update({ notes: e.target.value })}
          className="input-field"
        />
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-text-muted mb-1">{label}</label>
      {children}
    </div>
  );
}

function SmallField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] text-text-muted mb-0.5">{label}</label>
      {children}
    </div>
  );
}

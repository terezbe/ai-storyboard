import { useTranslation } from 'react-i18next';
import { useProjectStore } from '../../store/project-store';

export function SectionPanel({ type }: { type: 'intro' | 'outro' }) {
  const { t } = useTranslation();
  const { currentProject, updateIntro, updateOutro } = useProjectStore();

  if (!currentProject) return null;
  const section = type === 'intro' ? currentProject.storyboard.intro : currentProject.storyboard.outro;
  if (!section) return null;
  const update = type === 'intro' ? updateIntro : updateOutro;

  return (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-text">
        {type === 'intro' ? t('editor.intro') : t('editor.outro')}
      </h3>

      <div>
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('section.title')}
        </label>
        <input
          value={section.title}
          onChange={(e) => update({ title: e.target.value })}
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('section.background')}
        </label>
        <textarea
          rows={3}
          value={section.backgroundDescription}
          onChange={(e) => update({ backgroundDescription: e.target.value })}
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('section.textOverlay')}
        </label>
        <textarea
          rows={2}
          value={section.textOverlay}
          onChange={(e) => update({ textOverlay: e.target.value })}
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-text-muted mb-1">
          {t('section.musicRef')}
        </label>
        <input
          value={section.musicReference}
          onChange={(e) => update({ musicReference: e.target.value })}
          className="input-field"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-text-muted mb-1">
            {t('shot.duration')}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={60}
              value={section.duration}
              onChange={(e) => update({ duration: Number(e.target.value) || 1 })}
              className="input-field w-20"
            />
            <span className="text-xs text-text-muted">{t('shot.seconds')}</span>
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer mt-4">
          <input
            type="checkbox"
            checked={section.showLogo}
            onChange={(e) => update({ showLogo: e.target.checked })}
            className="w-4 h-4 rounded border-border accent-primary-500"
          />
          <span className="text-xs text-text-muted">{t('section.showLogo')}</span>
        </label>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X, Film, Music, Video, PartyPopper, Mail, Clapperboard } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useSettingsStore } from '../../store/settings-store';
import type { ProjectType } from '../../types/project';

const PROJECT_TYPE_ICONS: Record<ProjectType, React.ReactNode> = {
  'talking-character': <Film className="w-6 h-6" />,
  'music-video': <Music className="w-6 h-6" />,
  'event-promo': <PartyPopper className="w-6 h-6" />,
  invitation: <Mail className="w-6 h-6" />,
  'recap-video': <Video className="w-6 h-6" />,
  custom: <Clapperboard className="w-6 h-6" />,
};

const PROJECT_TYPES: ProjectType[] = [
  'talking-character',
  'music-video',
  'event-promo',
  'invitation',
  'recap-video',
  'custom',
];

export function CreateProjectModal({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { createProject } = useProjectStore();
  const language = useSettingsStore((s) => s.language);
  const [name, setName] = useState('');
  const [type, setType] = useState<ProjectType>('talking-character');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    if (!name.trim()) return;
    const project = await createProject(name.trim(), type, description.trim(), language);
    onClose();
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-surface-light border border-border rounded-2xl w-full max-w-lg">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-bold text-text">{t('project.create')}</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              {t('project.name')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={language === 'he' ? 'דמות מדברת - אפטר חתונה' : 'Talking Character - Wedding After Party'}
              className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              {t('project.type')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {PROJECT_TYPES.map((pt) => (
                <button
                  key={pt}
                  onClick={() => setType(pt)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border transition-all text-center ${
                    type === pt
                      ? 'border-primary-500 bg-primary-600/20 text-primary-300'
                      : 'border-border bg-surface hover:border-primary-500/50 text-text-muted'
                  }`}
                >
                  {PROJECT_TYPE_ICONS[pt]}
                  <span className="text-xs">{t(`project.types.${pt}`)}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1.5">
              {t('project.description')}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder={language === 'he' ? 'תיאור קצר של הפרויקט...' : 'Short project description...'}
              className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-5 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-text-muted hover:text-text hover:bg-surface-lighter transition-colors"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('common.create')}
          </button>
        </div>
      </div>
    </div>
  );
}

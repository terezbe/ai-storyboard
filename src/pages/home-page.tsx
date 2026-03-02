import { useTranslation } from 'react-i18next';
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate } from 'react-router-dom';
import { Plus, Film, Trash2 } from 'lucide-react';
import { db } from '../db/database';
import { useEditorStore } from '../store/editor-store';
import { useProjectStore } from '../store/project-store';
import { CreateProjectModal } from '../components/project/create-project-modal';
import type { Project } from '../types/project';

const MOOD_COLORS: Record<string, string> = {
  energetic: 'bg-mood-energetic',
  romantic: 'bg-mood-romantic',
  dramatic: 'bg-mood-dramatic',
  festive: 'bg-mood-festive',
  emotional: 'bg-mood-emotional',
  funny: 'bg-mood-funny',
  elegant: 'bg-mood-elegant',
  mysterious: 'bg-mood-mysterious',
  calm: 'bg-mood-calm',
  exciting: 'bg-mood-exciting',
};

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { deleteProject } = useProjectStore();

  const shotCount = project.storyboard.shots.length;
  const totalDuration =
    (project.storyboard.intro?.duration || 0) +
    project.storyboard.shots.reduce((s, shot) => s + shot.duration, 0) +
    (project.storyboard.outro?.duration || 0);

  const mainMood = project.storyboard.shots[0]?.mood || 'festive';

  return (
    <div
      className="bg-surface-light border border-border rounded-xl overflow-hidden hover:border-primary-500 transition-all cursor-pointer group"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className={`h-2 ${MOOD_COLORS[mainMood] || 'bg-primary-500'}`} />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-text text-lg truncate flex-1">
            {project.name}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (confirm(t('project.deleteConfirm'))) deleteProject(project.id);
            }}
            className="text-text-muted hover:text-red-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-text-muted mb-3 truncate">
          {project.description || t(`project.types.${project.type}`)}
        </p>

        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="bg-surface-lighter px-2 py-1 rounded">
            {t(`project.types.${project.type}`)}
          </span>
          <span>{shotCount} {t('editor.shots')}</span>
          <span>{totalDuration}s</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              project.status === 'completed'
                ? 'bg-green-900/50 text-green-300'
                : project.status === 'prompts-ready'
                ? 'bg-primary-900/50 text-primary-300'
                : 'bg-surface-lighter text-text-muted'
            }`}
          >
            {t(`project.statuses.${project.status}`)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = useTranslation();
  const projects = useLiveQuery(() => db.projects.orderBy('updatedAt').reverse().toArray());
  const { showCreateModal, setShowCreateModal } = useEditorStore();

  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-text">{t('nav.home')}</h2>
          <p className="text-text-muted mt-1">{t('app.tagline')}</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          {t('project.create')}
        </button>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Film className="w-16 h-16 text-text-muted mb-4" />
          <p className="text-text-muted text-lg">{t('project.noProjects')}</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="mt-4 flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            {t('project.create')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}

      {showCreateModal && (
        <CreateProjectModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}

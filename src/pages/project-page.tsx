import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { useProjectStore } from '../store/project-store';
import { useEditorStore, type EditorView } from '../store/editor-store';
import { useSettingsStore } from '../store/settings-store';
import { StoryboardEditor } from '../components/storyboard/storyboard-editor';
import { ExportModal } from '../components/export/export-modal';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const language = useSettingsStore((s) => s.language);
  const { currentProject, loadProject, saveProject, unloadProject } = useProjectStore();
  const { activeView, setActiveView, showExportModal, setShowExportModal } = useEditorStore();
  const saveTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (id) loadProject(id);
    return () => unloadProject();
  }, [id]);

  // Auto-save every 3 seconds when project changes
  useEffect(() => {
    if (!currentProject) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveProject();
    }, 3000);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [currentProject]);

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-text-muted">{t('common.loading')}</p>
      </div>
    );
  }

  const BackArrow = language === 'he' ? ArrowRight : ArrowLeft;

  const views: { key: EditorView; label: string }[] = [
    { key: 'cards', label: t('editor.views.cards') },
    { key: 'timeline', label: t('editor.views.timeline') },
    { key: 'prompts', label: t('editor.views.prompts') },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-57px)]">
      {/* Project header */}
      <div className="bg-surface-light border-b border-border px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              saveProject();
              navigate('/');
            }}
            className="text-text-muted hover:text-text p-1"
          >
            <BackArrow className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-semibold text-text">{currentProject.name}</h2>
            <p className="text-xs text-text-muted">
              {t(`project.types.${currentProject.type}`)} &middot;{' '}
              {currentProject.storyboard.shots.length} {t('editor.shots')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle */}
          <div className="flex bg-surface rounded-lg p-0.5">
            {views.map((v) => (
              <button
                key={v.key}
                onClick={() => setActiveView(v.key)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeView === v.key
                    ? 'bg-primary-600 text-white'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ms-2"
          >
            <Download className="w-4 h-4" />
            {t('export.title')}
          </button>
        </div>
      </div>

      {/* Editor */}
      <StoryboardEditor />

      {showExportModal && (
        <ExportModal onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}

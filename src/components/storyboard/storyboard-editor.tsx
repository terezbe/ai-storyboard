import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import { ShotList } from './shot-list';
import { ShotEditor } from './shot-editor';
import { ImageEditor } from './image-editor';
import { SectionPanel } from './section-panel';
import { CardView } from './card-view';
import { TimelineView } from '../timeline/timeline-view';
import { PromptPanel } from '../prompts/prompt-panel';

export function StoryboardEditor() {
  const { t } = useTranslation();
  const { currentProject, addShot } = useProjectStore();
  const { activeView, selectedShotId, setSelectedShotId } = useEditorStore();

  if (!currentProject) return null;
  const { storyboard } = currentProject;
  const selectedShot = storyboard.shots.find((s) => s.id === selectedShotId) || null;

  // Cards view: when a shot is selected, show full-width ImageEditor (Kolbo-style)
  const isCardImageEditing = activeView === 'cards' && selectedShot != null;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar: Shot list — hidden when in card image editing mode */}
      {!isCardImageEditing && (
        <div className="w-56 bg-surface-light border-e border-border flex flex-col overflow-hidden shrink-0">
          <div className="p-3 border-b border-border">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
              {t('editor.shots')}
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {/* Intro */}
            {storyboard.intro && (
              <button
                onClick={() => setSelectedShotId('__intro__')}
                className={`w-full text-start px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedShotId === '__intro__'
                    ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                    : 'text-text-muted hover:bg-surface-lighter hover:text-text border border-transparent'
                }`}
              >
                {t('editor.intro')}
                <span className="text-xs ms-1 opacity-60">{storyboard.intro.duration}s</span>
              </button>
            )}

            {/* Shots */}
            <ShotList />

            {/* Outro */}
            {storyboard.outro && (
              <button
                onClick={() => setSelectedShotId('__outro__')}
                className={`w-full text-start px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedShotId === '__outro__'
                    ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                    : 'text-text-muted hover:bg-surface-lighter hover:text-text border border-transparent'
                }`}
              >
                {t('editor.outro')}
                <span className="text-xs ms-1 opacity-60">{storyboard.outro.duration}s</span>
              </button>
            )}
          </div>

          <div className="p-2 border-t border-border">
            <button
              onClick={addShot}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-primary-300 hover:bg-primary-600/20 transition-colors"
            >
              <Plus className="w-4 h-4" />
              {t('editor.addShot')}
            </button>
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 overflow-auto">
        {isCardImageEditing ? (
          /* Full-width Kolbo-style Image Editor */
          <ImageEditor shot={selectedShot} />
        ) : activeView === 'cards' ? (
          <CardView />
        ) : activeView === 'timeline' ? (
          <TimelineView />
        ) : activeView === 'prompts' ? (
          <PromptPanel />
        ) : null}
      </div>

      {/* Detail panel — only for non-cards views and intro/outro in cards */}
      {selectedShotId && !isCardImageEditing && activeView !== 'timeline' && (
        <div className="w-80 bg-surface-light border-s border-border overflow-y-auto shrink-0">
          {selectedShotId === '__intro__' && storyboard.intro ? (
            <SectionPanel type="intro" />
          ) : selectedShotId === '__outro__' && storyboard.outro ? (
            <SectionPanel type="outro" />
          ) : selectedShot ? (
            <ShotEditor shot={selectedShot} />
          ) : null}
        </div>
      )}
    </div>
  );
}

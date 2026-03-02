import { useTranslation } from 'react-i18next';
import { Camera, Clock, Sparkles, Film, Copy } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import type { Shot, StoryboardSection } from '../../types/project';
import { useState } from 'react';

const MOOD_BG: Record<string, string> = {
  energetic: 'from-mood-energetic/20 to-mood-energetic/5',
  romantic: 'from-mood-romantic/20 to-mood-romantic/5',
  dramatic: 'from-mood-dramatic/20 to-mood-dramatic/5',
  festive: 'from-mood-festive/20 to-mood-festive/5',
  emotional: 'from-mood-emotional/20 to-mood-emotional/5',
  funny: 'from-mood-funny/20 to-mood-funny/5',
  elegant: 'from-mood-elegant/20 to-mood-elegant/5',
  mysterious: 'from-mood-mysterious/20 to-mood-mysterious/5',
  calm: 'from-mood-calm/20 to-mood-calm/5',
  exciting: 'from-mood-exciting/20 to-mood-exciting/5',
};

const MOOD_BORDER: Record<string, string> = {
  energetic: 'border-mood-energetic/30',
  romantic: 'border-mood-romantic/30',
  dramatic: 'border-mood-dramatic/30',
  festive: 'border-mood-festive/30',
  emotional: 'border-mood-emotional/30',
  funny: 'border-mood-funny/30',
  elegant: 'border-mood-elegant/30',
  mysterious: 'border-mood-mysterious/30',
  calm: 'border-mood-calm/30',
  exciting: 'border-mood-exciting/30',
};

function CopyVideoPromptBtn({ prompt }: { prompt?: string }) {
  const [copied, setCopied] = useState(false);
  if (!prompt) return null;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-1 px-2 py-1 rounded bg-primary-600/80 hover:bg-primary-500 text-white text-[10px] font-medium transition-colors"
      title="Copy video prompt"
    >
      {copied ? <Copy className="w-3 h-3" /> : <Film className="w-3 h-3" />}
      {copied ? 'Copied!' : 'Create Video'}
    </button>
  );
}

function SectionCard({ section, label }: { section: StoryboardSection; label: string }) {
  return (
    <div className="rounded-xl border border-primary-500/40 overflow-hidden">
      <div className="h-28 relative flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-primary-500/5">
        {section.imageUrl ? (
          <img src={section.imageUrl} alt={label} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white/10">{label}</span>
        )}
        <span className="absolute top-2 start-2 px-2 py-0.5 rounded bg-primary-600 text-white text-[10px] font-bold uppercase">
          {label}
        </span>
        {section.videoPrompt && (
          <div className="absolute bottom-2 end-2">
            <CopyVideoPromptBtn prompt={section.videoPrompt} />
          </div>
        )}
      </div>
      <div className="p-3 bg-surface-light">
        <h4 className="font-medium text-text text-sm truncate mb-1">{section.title}</h4>
        <p className="text-xs text-text-muted truncate">{section.textOverlay}</p>
        <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
          <Clock className="w-3 h-3" /> {section.duration}s
        </div>
      </div>
    </div>
  );
}

function ShotCard({ shot }: { shot: Shot }) {
  const { t } = useTranslation();
  const { selectedShotId, setSelectedShotId } = useEditorStore();
  const isSelected = selectedShotId === shot.id;
  const hasPrompts = !!(shot.prompts.environment || shot.prompts.character || shot.prompts.video);

  return (
    <div
      onClick={() => setSelectedShotId(shot.id)}
      className={`rounded-xl border overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${
        isSelected
          ? 'border-primary-500 ring-2 ring-primary-500/30'
          : `${MOOD_BORDER[shot.mood] || 'border-border'} hover:border-primary-500/50`
      }`}
    >
      <div className={`h-28 relative flex items-center justify-center ${
        shot.imageUrl ? '' : `bg-gradient-to-br ${MOOD_BG[shot.mood] || 'from-primary-500/20 to-primary-500/5'}`
      }`}>
        {shot.imageUrl ? (
          <img src={shot.imageUrl} alt={shot.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white/10">{shot.orderIndex + 1}</span>
        )}
        {shot.imageUrl && (
          <span className="absolute top-2 start-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold">
            {shot.orderIndex + 1}
          </span>
        )}
        {hasPrompts && (
          <div className="absolute top-2 end-2">
            <Sparkles className="w-4 h-4 text-primary-400" />
          </div>
        )}
        {shot.videoPrompt && (
          <div className="absolute bottom-2 end-2">
            <CopyVideoPromptBtn prompt={shot.videoPrompt} />
          </div>
        )}
        {!shot.imageUrl && shot.environment.setting && (
          <p className="absolute bottom-2 inset-x-2 text-xs text-text-muted truncate text-center">
            {shot.environment.setting}
          </p>
        )}
      </div>
      <div className="p-3 bg-surface-light">
        <h4 className="font-medium text-text text-sm truncate mb-2">
          {shot.title || `Shot ${shot.orderIndex + 1}`}
        </h4>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {shot.duration}s
          </span>
          <span className="flex items-center gap-1">
            <Camera className="w-3 h-3" /> {t(`shot.cameraAngles.${shot.cameraAngle}`)}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-lighter text-text-muted">
            {t(`shot.moods.${shot.mood}`)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CardView() {
  const { t } = useTranslation();
  const { currentProject } = useProjectStore();

  if (!currentProject) return null;
  const { intro, shots, outro } = currentProject.storyboard;

  if (shots.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-text-muted">
        {t('editor.noShots')}
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <SectionCard section={intro} label="Intro" />
      {shots.map((shot) => (
        <ShotCard key={shot.id} shot={shot} />
      ))}
      <SectionCard section={outro} label="Outro" />
    </div>
  );
}

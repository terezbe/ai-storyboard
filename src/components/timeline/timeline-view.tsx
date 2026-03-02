import { useTranslation } from 'react-i18next';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';

const MOOD_COLORS: Record<string, string> = {
  energetic: '#f97316',
  romantic: '#ec4899',
  dramatic: '#dc2626',
  festive: '#a855f7',
  emotional: '#3b82f6',
  funny: '#facc15',
  elegant: '#a3a3a3',
  mysterious: '#6366f1',
  calm: '#22d3ee',
  exciting: '#ef4444',
};

const PIXELS_PER_SECOND = 12;

export function TimelineView() {
  const { t } = useTranslation();
  const { currentProject } = useProjectStore();
  const { selectedShotId, setSelectedShotId } = useEditorStore();

  if (!currentProject) return null;
  const { intro, shots, outro } = currentProject.storyboard;

  const totalDuration =
    intro.duration + shots.reduce((s, sh) => s + sh.duration, 0) + outro.duration;

  const timelineWidth = Math.max(totalDuration * PIXELS_PER_SECOND + 40, 800);

  // Generate time markers
  const markers: number[] = [];
  for (let i = 0; i <= totalDuration; i += 5) markers.push(i);

  return (
    <div className="p-6 overflow-x-auto">
      <div style={{ width: timelineWidth }} className="min-w-full">
        {/* Time ruler */}
        <div className="h-6 relative mb-2 border-b border-border">
          {markers.map((sec) => (
            <div
              key={sec}
              className="absolute text-[10px] text-text-muted"
              style={{ left: sec * PIXELS_PER_SECOND }}
            >
              <div className="w-px h-2 bg-border mb-0.5" />
              {sec}s
            </div>
          ))}
        </div>

        {/* Video track */}
        <div className="flex h-14 gap-px mb-2">
          {/* Intro clip */}
          <div
            onClick={() => setSelectedShotId('__intro__')}
            style={{ width: intro.duration * PIXELS_PER_SECOND }}
            className={`rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all shrink-0 ${
              selectedShotId === '__intro__'
                ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-primary-600/30 text-primary-300 hover:bg-primary-600/50'
            }`}
          >
            {t('editor.intro')}
          </div>

          {/* Shot clips */}
          {shots.map((shot) => (
            <div
              key={shot.id}
              onClick={() => setSelectedShotId(shot.id)}
              style={{
                width: shot.duration * PIXELS_PER_SECOND,
                backgroundColor: `${MOOD_COLORS[shot.mood] || '#a855f7'}${selectedShotId === shot.id ? 'cc' : '44'}`,
                borderColor: MOOD_COLORS[shot.mood] || '#a855f7',
              }}
              className={`rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all shrink-0 border ${
                selectedShotId === shot.id ? 'ring-2 ring-white/30 text-white' : 'text-text hover:opacity-80'
              }`}
            >
              <span className="truncate px-1">
                {shot.orderIndex + 1}
              </span>
            </div>
          ))}

          {/* Outro clip */}
          <div
            onClick={() => setSelectedShotId('__outro__')}
            style={{ width: outro.duration * PIXELS_PER_SECOND }}
            className={`rounded-lg flex items-center justify-center text-xs font-medium cursor-pointer transition-all shrink-0 ${
              selectedShotId === '__outro__'
                ? 'bg-primary-600 text-white ring-2 ring-primary-400'
                : 'bg-primary-600/30 text-primary-300 hover:bg-primary-600/50'
            }`}
          >
            {t('editor.outro')}
          </div>
        </div>

        {/* Music track placeholder */}
        <div className="h-8 bg-surface-lighter rounded-lg flex items-center px-3 text-xs text-text-muted">
          Music Track
        </div>

        {/* Total duration */}
        <div className="mt-3 text-xs text-text-muted text-end">
          {t('shot.duration')}: {totalDuration}s
        </div>
      </div>
    </div>
  );
}

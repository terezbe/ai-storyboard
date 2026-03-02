import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2 } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import type { Shot } from '../../types/project';

const MOOD_DOT_COLORS: Record<string, string> = {
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

function SortableShotItem({ shot }: { shot: Shot }) {
  const { selectedShotId, setSelectedShotId } = useEditorStore();
  const { removeShot } = useProjectStore();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: shot.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedShotId(shot.id)}
      className={`flex items-center gap-2 px-2 py-2 rounded-lg text-sm cursor-pointer group transition-colors ${
        selectedShotId === shot.id
          ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
          : 'text-text-muted hover:bg-surface-lighter hover:text-text border border-transparent'
      }`}
    >
      <button
        className="cursor-grab text-text-muted/50 hover:text-text-muted shrink-0"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="w-3.5 h-3.5" />
      </button>

      <span className={`w-2 h-2 rounded-full shrink-0 ${MOOD_DOT_COLORS[shot.mood] || 'bg-primary-500'}`} />

      <span className="truncate flex-1">
        {shot.title || `Shot ${shot.orderIndex + 1}`}
      </span>

      <span className="text-xs opacity-60 shrink-0">{shot.duration}s</span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          removeShot(shot.id);
          if (selectedShotId === shot.id) setSelectedShotId(null);
        }}
        className="text-text-muted/50 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export function ShotList() {
  const { currentProject, reorderShots } = useProjectStore();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  if (!currentProject) return null;
  const { shots } = currentProject.storyboard;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const fromIndex = shots.findIndex((s) => s.id === active.id);
    const toIndex = shots.findIndex((s) => s.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1) reorderShots(fromIndex, toIndex);
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={shots.map((s) => s.id)} strategy={verticalListSortingStrategy}>
        {shots.map((shot) => (
          <SortableShotItem key={shot.id} shot={shot} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { db } from '../db/database';
import type {
  Project,
  ProjectType,
  Shot,
  StoryboardSection,
  ShotPrompts,
  SectionPrompts,
} from '../types/project';

function createEmptySection(type: 'intro' | 'outro'): StoryboardSection {
  return {
    id: uuid(),
    type,
    title: type === 'intro' ? 'Intro' : 'Outro',
    backgroundDescription: '',
    textOverlay: '',
    duration: 5,
    musicReference: '',
    showLogo: true,
    prompts: { background: null, music: null },
  };
}

function createEmptyShot(orderIndex: number): Shot {
  return {
    id: uuid(),
    orderIndex,
    title: `Shot ${orderIndex + 1}`,
    environment: { setting: '', lighting: '', props: '', atmosphere: '' },
    character: { appearance: '', outfit: '', expression: '', action: '' },
    dialogue: { text: '', voiceStyle: '', language: 'he' },
    cameraAngle: 'medium-shot',
    duration: 8,
    mood: 'festive',
    transition: 'cut',
    notes: '',
    prompts: { environment: null, character: null, music: null, video: null },
  };
}

interface ProjectState {
  currentProject: Project | null;
  loadProject: (id: string) => Promise<void>;
  createProject: (name: string, type: ProjectType, description: string, language: 'en' | 'he') => Promise<Project>;
  saveProject: () => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  updateProjectMeta: (updates: Partial<Pick<Project, 'name' | 'description' | 'status'>>) => void;
  addShot: () => void;
  removeShot: (id: string) => void;
  updateShot: (id: string, updates: Partial<Shot>) => void;
  reorderShots: (fromIndex: number, toIndex: number) => void;
  updateIntro: (updates: Partial<StoryboardSection>) => void;
  updateOutro: (updates: Partial<StoryboardSection>) => void;
  updateShotPrompts: (shotId: string, prompts: Partial<ShotPrompts>) => void;
  updateSectionPrompts: (sectionType: 'intro' | 'outro', prompts: Partial<SectionPrompts>) => void;
  setReferenceImage: (url: string | null) => void;
  unloadProject: () => void;
}

export const useProjectStore = create<ProjectState>()((set, get) => ({
  currentProject: null,

  loadProject: async (id) => {
    const project = await db.projects.get(id);
    if (project) set({ currentProject: project });
  },

  createProject: async (name, type, description, language) => {
    const project: Project = {
      id: uuid(),
      name,
      type,
      description,
      status: 'draft',
      language,
      storyboard: {
        intro: createEmptySection('intro'),
        shots: [createEmptyShot(0)],
        outro: createEmptySection('outro'),
        musicTrack: null,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await db.projects.add(project);
    set({ currentProject: project });
    return project;
  },

  saveProject: async () => {
    const { currentProject } = get();
    if (!currentProject) return;
    const updated = { ...currentProject, updatedAt: new Date().toISOString() };
    await db.projects.put(updated);
    set({ currentProject: updated });
  },

  deleteProject: async (id) => {
    await db.projects.delete(id);
    const { currentProject } = get();
    if (currentProject?.id === id) set({ currentProject: null });
  },

  updateProjectMeta: (updates) => {
    const { currentProject } = get();
    if (!currentProject) return;
    set({ currentProject: { ...currentProject, ...updates } });
  },

  addShot: () => {
    const { currentProject } = get();
    if (!currentProject) return;
    const shots = [...currentProject.storyboard.shots];
    const newShot = createEmptyShot(shots.length);
    shots.push(newShot);
    set({
      currentProject: {
        ...currentProject,
        storyboard: { ...currentProject.storyboard, shots },
      },
    });
  },

  removeShot: (id) => {
    const { currentProject } = get();
    if (!currentProject) return;
    const shots = currentProject.storyboard.shots
      .filter((s) => s.id !== id)
      .map((s, i) => ({ ...s, orderIndex: i }));
    set({
      currentProject: {
        ...currentProject,
        storyboard: { ...currentProject.storyboard, shots },
      },
    });
  },

  updateShot: (id, updates) => {
    const { currentProject } = get();
    if (!currentProject) return;
    const shots = currentProject.storyboard.shots.map((s) =>
      s.id === id ? { ...s, ...updates } : s
    );
    set({
      currentProject: {
        ...currentProject,
        storyboard: { ...currentProject.storyboard, shots },
      },
    });
  },

  reorderShots: (fromIndex, toIndex) => {
    const { currentProject } = get();
    if (!currentProject) return;
    const shots = [...currentProject.storyboard.shots];
    const [moved] = shots.splice(fromIndex, 1);
    shots.splice(toIndex, 0, moved);
    const reindexed = shots.map((s, i) => ({ ...s, orderIndex: i }));
    set({
      currentProject: {
        ...currentProject,
        storyboard: { ...currentProject.storyboard, shots: reindexed },
      },
    });
  },

  updateIntro: (updates) => {
    const { currentProject } = get();
    if (!currentProject || !currentProject.storyboard.intro) return;
    set({
      currentProject: {
        ...currentProject,
        storyboard: {
          ...currentProject.storyboard,
          intro: { ...currentProject.storyboard.intro, ...updates },
        },
      },
    });
  },

  updateOutro: (updates) => {
    const { currentProject } = get();
    if (!currentProject || !currentProject.storyboard.outro) return;
    set({
      currentProject: {
        ...currentProject,
        storyboard: {
          ...currentProject.storyboard,
          outro: { ...currentProject.storyboard.outro, ...updates },
        },
      },
    });
  },

  updateShotPrompts: (shotId, prompts) => {
    const { currentProject } = get();
    if (!currentProject) return;
    const shots = currentProject.storyboard.shots.map((s) =>
      s.id === shotId ? { ...s, prompts: { ...s.prompts, ...prompts } } : s
    );
    set({
      currentProject: {
        ...currentProject,
        storyboard: { ...currentProject.storyboard, shots },
      },
    });
  },

  updateSectionPrompts: (sectionType, prompts) => {
    const { currentProject } = get();
    if (!currentProject) return;
    const section = currentProject.storyboard[sectionType];
    if (!section) return;
    set({
      currentProject: {
        ...currentProject,
        storyboard: {
          ...currentProject.storyboard,
          [sectionType]: {
            ...section,
            prompts: { ...section.prompts, ...prompts },
          },
        },
      },
    });
  },

  setReferenceImage: (url) => {
    const { currentProject } = get();
    if (!currentProject) return;
    set({
      currentProject: {
        ...currentProject,
        referenceImageUrl: url || undefined,
      },
    });
  },

  unloadProject: () => set({ currentProject: null }),
}));

export { createEmptyShot, createEmptySection };

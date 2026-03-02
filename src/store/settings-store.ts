import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AIMode } from '../types/project';

interface SettingsState {
  language: 'en' | 'he';
  aiMode: AIMode;
  apiKey: string | null;
  falApiKey: string | null;
  defaultDuration: number;
  defaultCameraAngle: string;
  preferredImageModel: string;
  preferredVideoModel: string;
  preferredMusicModel: string;
  setLanguage: (lang: 'en' | 'he') => void;
  setAiMode: (mode: AIMode) => void;
  setApiKey: (key: string | null) => void;
  setFalApiKey: (key: string | null) => void;
  setDefaultDuration: (d: number) => void;
  setPreferredImageModel: (m: string) => void;
  setPreferredVideoModel: (m: string) => void;
  setPreferredMusicModel: (m: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'he',
      aiMode: 'manual',
      apiKey: null,
      falApiKey: null,
      defaultDuration: 8,
      defaultCameraAngle: 'medium-shot',
      preferredImageModel: 'fal-ai/flux/schnell',
      preferredVideoModel: 'fal-ai/minimax/video-01',
      preferredMusicModel: 'suno-v4.5',
      setLanguage: (language) => set({ language }),
      setAiMode: (aiMode) => set({ aiMode }),
      setApiKey: (apiKey) => set({ apiKey }),
      setFalApiKey: (falApiKey) => set({ falApiKey }),
      setDefaultDuration: (defaultDuration) => set({ defaultDuration }),
      setPreferredImageModel: (preferredImageModel) => set({ preferredImageModel }),
      setPreferredVideoModel: (preferredVideoModel) => set({ preferredVideoModel }),
      setPreferredMusicModel: (preferredMusicModel) => set({ preferredMusicModel }),
    }),
    { name: 'storyboard-settings' }
  )
);

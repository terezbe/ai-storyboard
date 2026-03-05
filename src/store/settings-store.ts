import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AIMode } from '../types/project';

interface SettingsState {
  language: 'en' | 'he';
  aiMode: AIMode;
  apiKey: string | null;
  falApiKey: string | null;
  claudeApiKey: string | null;
  defaultDuration: number;
  defaultCameraAngle: string;
  preferredImageModel: string;
  preferredVideoModel: string;
  preferredMusicModel: string;
  enableAudioGeneration: boolean;
  setLanguage: (lang: 'en' | 'he') => void;
  setAiMode: (mode: AIMode) => void;
  setApiKey: (key: string | null) => void;
  setFalApiKey: (key: string | null) => void;
  setClaudeApiKey: (key: string | null) => void;
  setDefaultDuration: (d: number) => void;
  setPreferredImageModel: (m: string) => void;
  setPreferredVideoModel: (m: string) => void;
  setPreferredMusicModel: (m: string) => void;
  setEnableAudioGeneration: (v: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'he',
      aiMode: 'manual',
      apiKey: null,
      falApiKey: null,
      claudeApiKey: null,
      defaultDuration: 8,
      defaultCameraAngle: 'medium-shot',
      preferredImageModel: 'fal-ai/flux/schnell',
      preferredVideoModel: 'fal-ai/minimax/video-01',
      preferredMusicModel: 'suno-v4.5',
      enableAudioGeneration: true,
      setLanguage: (language) => set({ language }),
      setAiMode: (aiMode) => set({ aiMode }),
      setApiKey: (apiKey) => set({ apiKey }),
      setFalApiKey: (falApiKey) => set({ falApiKey }),
      setClaudeApiKey: (claudeApiKey) => set({ claudeApiKey }),
      setDefaultDuration: (defaultDuration) => set({ defaultDuration }),
      setPreferredImageModel: (preferredImageModel) => set({ preferredImageModel }),
      setPreferredVideoModel: (preferredVideoModel) => set({ preferredVideoModel }),
      setPreferredMusicModel: (preferredMusicModel) => set({ preferredMusicModel }),
      setEnableAudioGeneration: (enableAudioGeneration) => set({ enableAudioGeneration }),
    }),
    { name: 'storyboard-settings' }
  )
);

export type ProjectType =
  | 'talking-character'
  | 'music-video'
  | 'event-promo'
  | 'invitation'
  | 'recap-video'
  | 'custom';

export type ProjectStatus = 'draft' | 'in-progress' | 'prompts-ready' | 'completed';

export type CameraAngle =
  | 'wide-shot'
  | 'medium-shot'
  | 'close-up'
  | 'extreme-close-up'
  | 'over-the-shoulder'
  | 'birds-eye'
  | 'low-angle'
  | 'high-angle'
  | 'dutch-angle'
  | 'tracking'
  | 'pan'
  | 'zoom-in'
  | 'zoom-out';

export type Mood =
  | 'energetic'
  | 'romantic'
  | 'dramatic'
  | 'festive'
  | 'emotional'
  | 'funny'
  | 'elegant'
  | 'mysterious'
  | 'calm'
  | 'exciting';

export type TransitionType =
  | 'cut'
  | 'fade'
  | 'dissolve'
  | 'wipe'
  | 'slide'
  | 'zoom'
  | 'none';

export type PromptType = 'environment' | 'character' | 'music' | 'video';

export type AIMode = 'manual' | 'claude-code-import' | 'api';

export type ExportFormat = 'kolbo-prompts' | 'pdf' | 'json';

export interface EnvironmentDescription {
  setting: string;
  lighting: string;
  props: string;
  atmosphere: string;
}

export interface CharacterDescription {
  appearance: string;
  outfit: string;
  expression: string;
  action: string;
}

export interface DialogueDescription {
  text: string;
  voiceStyle: string;
  language: 'en' | 'he';
}

export interface Prompt {
  id: string;
  type: PromptType;
  text: string;
  targetModel: string;
  quality: 'draft' | 'standard' | 'high';
  isManuallyEdited: boolean;
}

export interface ShotPrompts {
  environment: Prompt | null;
  character: Prompt | null;
  music: Prompt | null;
  video: Prompt | null;
}

export interface SectionPrompts {
  background: Prompt | null;
  music: Prompt | null;
}

export interface Shot {
  id: string;
  orderIndex: number;
  title: string;
  environment: EnvironmentDescription;
  character: CharacterDescription;
  dialogue: DialogueDescription;
  cameraAngle: CameraAngle;
  duration: number;
  mood: Mood;
  transition: TransitionType;
  notes: string;
  prompts: ShotPrompts;
  imageUrl?: string;
  videoPrompt?: string;
}

export interface StoryboardSection {
  id: string;
  type: 'intro' | 'outro';
  title: string;
  backgroundDescription: string;
  textOverlay: string;
  duration: number;
  musicReference: string;
  showLogo: boolean;
  prompts: SectionPrompts;
  imageUrl?: string;
  videoPrompt?: string;
}

export interface MusicSyncPoint {
  id: string;
  timestamp: number;
  label: string;
  intensity: 'low' | 'medium' | 'high';
}

export interface MusicTrack {
  id: string;
  name: string;
  genre: string;
  bpm: number;
  duration: number;
  mood: Mood;
  syncPoints: MusicSyncPoint[];
}

export interface Storyboard {
  intro: StoryboardSection;
  shots: Shot[];
  outro: StoryboardSection;
  musicTrack: MusicTrack | null;
}

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  description: string;
  status: ProjectStatus;
  language: 'en' | 'he';
  storyboard: Storyboard;
  createdAt: string;
  updatedAt: string;
}

export interface KolboModelConfig {
  id: string;
  name: string;
  category: 'image' | 'video' | 'music' | 'voice';
  maxPromptLength: number;
  supportsNegativePrompt: boolean;
  promptTemplate: string;
  tips: string[];
}

export interface StoryboardImportSchema {
  version: string;
  projectName: string;
  projectType: ProjectType;
  language: 'en' | 'he';
  intro: StoryboardSection;
  shots: Shot[];
  outro: StoryboardSection;
}

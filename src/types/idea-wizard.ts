import type { Mood } from './project';
import type { ShotCountRange } from '../config/style-presets';
import type { CharacterDefinition } from './character-builder';
import type { EnvironmentDefinition } from './environment-builder';
import { DEFAULT_CHARACTER } from './character-builder';
import { DEFAULT_ENVIRONMENT } from './environment-builder';

export { DEFAULT_CHARACTER, DEFAULT_ENVIRONMENT };

export interface StoryInputData {
  idea: string;
  visualStyle: string;
  mood: Mood;
  shotCountRange: ShotCountRange;
}

export interface WizardInput {
  character: CharacterDefinition;
  environment: EnvironmentDefinition;
  story: StoryInputData;
}

export const DEFAULT_STORY: StoryInputData = {
  idea: '',
  visualStyle: 'cinematic',
  mood: 'festive',
  shotCountRange: '6-8',
};

export const DEFAULT_WIZARD_INPUT: WizardInput = {
  character: DEFAULT_CHARACTER,
  environment: DEFAULT_ENVIRONMENT,
  story: DEFAULT_STORY,
};

/** Legacy interface kept for backward compatibility with existing wizard form */
export interface IdeaWizardInput {
  /** The script/story idea (required) */
  idea: string;
  /** Character description — appearance, outfit, features (required) */
  characterDescription: string;
  /** Visual style preset ID from VISUAL_STYLE_PRESETS */
  visualStyle: string;
  /** Overall mood for the storyboard */
  mood: Mood;
  /** How many shots to generate */
  shotCountRange: ShotCountRange;
}

/** Wizard stage state machine */
export type WizardStage =
  | 'character-builder'
  | 'character-preview'
  | 'environment-builder'
  | 'environment-preview'
  | 'story-input'
  | 'generating'
  | 'preview'
  | 'importing'
  | 'error';

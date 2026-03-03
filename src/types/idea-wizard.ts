import type { Mood } from './project';
import type { ShotCountRange } from '../config/style-presets';

/** All structured fields collected by the idea wizard */
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
  | 'input'      // Filling out the form
  | 'generating' // Claude is working
  | 'preview'    // Reviewing generated shots
  | 'importing'  // Creating project in DB
  | 'error';     // Something failed

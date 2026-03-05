import type { Mood, ProjectType } from './project';
import type { ShotCountRange } from '../config/style-presets';
import type { CharacterDefinition } from './character-builder';
import type { EnvironmentDefinition } from './environment-builder';
import type { EventPromoData, InvitationData, MusicVideoData, RecapVideoData, BrandRevealData, CustomData } from './wizard-data';
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
  videoType: ProjectType;
  character: CharacterDefinition;
  environment: EnvironmentDefinition;
  story: StoryInputData;
  // Type-specific data (optional — only one is filled depending on videoType)
  eventPromo?: EventPromoData;
  invitation?: InvitationData;
  musicVideo?: MusicVideoData;
  recapVideo?: RecapVideoData;
  brandReveal?: BrandRevealData;
  customData?: CustomData;
}

export const DEFAULT_STORY: StoryInputData = {
  idea: '',
  visualStyle: 'cinematic',
  mood: 'festive',
  shotCountRange: '6-8',
};

export const DEFAULT_WIZARD_INPUT: WizardInput = {
  videoType: 'talking-character',
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

/** Wizard stage state machine — union of all stages across all video type flows */
export type WizardStage =
  // Shared
  | 'video-type'
  // Talking Character
  | 'character-builder'
  | 'character-preview'
  | 'environment-builder'
  | 'environment-preview'
  | 'story-input'
  // Event Promo
  | 'ad-platform'
  | 'product-upload'
  | 'brand-identity'
  | 'marketing-content'
  | 'visual-style'
  // Invitation
  | 'event-type'
  | 'event-details'
  | 'celebrant-photo'
  | 'invitation-style'
  | 'personal-message'
  // Music Video
  | 'music-upload'
  | 'song-structure'
  | 'lyrics-sync'
  | 'artist-photos'
  | 'visual-concept'
  // Recap Video
  | 'photos-upload'
  | 'photos-curate'
  | 'captions'
  | 'narrative'
  // Brand / Logo Reveal
  | 'logo-upload'
  | 'brand-colors'
  | 'industry-select'
  | 'reveal-style'
  | 'logo-animation'
  // Custom Freeform
  | 'custom-overview'
  | 'custom-assets'
  | 'custom-style'
  // Terminal (shared)
  | 'generating'
  | 'preview'
  | 'importing'
  | 'error';

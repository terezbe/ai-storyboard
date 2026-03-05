import type { ProjectType } from '../types/project';
import type { WizardStage } from '../types/idea-wizard';

/* ═══════════════════════════════════════════════════════════════
   Wizard Flow Registry
   Maps each ProjectType to its unique sequence of wizard steps.
   ═══════════════════════════════════════════════════════════════ */

export interface WizardStepDef {
  /** Stage ID — must match a WizardStage union member */
  id: WizardStage;
  /** i18n key for step indicator label */
  labelKey: string;
  /** Lucide icon name (resolved in step-indicator) */
  icon: string;
  /** Group key — stages in the same group share one indicator dot */
  group: string;
}

export interface WizardFlowDef {
  type: ProjectType;
  steps: WizardStepDef[];
}

export const WIZARD_FLOWS: Record<ProjectType, WizardFlowDef> = {
  'talking-character': {
    type: 'talking-character',
    steps: [
      { id: 'video-type',          labelKey: 'wizard.steps.videoType',    icon: 'Film',    group: 'type' },
      { id: 'character-builder',   labelKey: 'wizard.steps.character',    icon: 'User',    group: 'character' },
      { id: 'character-preview',   labelKey: 'wizard.steps.character',    icon: 'User',    group: 'character' },
      { id: 'environment-builder', labelKey: 'wizard.steps.environment',  icon: 'MapPin',  group: 'environment' },
      { id: 'environment-preview', labelKey: 'wizard.steps.environment',  icon: 'MapPin',  group: 'environment' },
      { id: 'story-input',         labelKey: 'wizard.steps.story',        icon: 'PenTool', group: 'story' },
    ],
  },

  'event-promo': {
    type: 'event-promo',
    steps: [
      { id: 'video-type',        labelKey: 'wizard.steps.videoType',   icon: 'Film',      group: 'type' },
      { id: 'ad-platform',       labelKey: 'wizard.steps.adPlatform',  icon: 'Target',    group: 'ad' },
      { id: 'product-upload',    labelKey: 'wizard.steps.product',     icon: 'Package',   group: 'product' },
      { id: 'brand-identity',    labelKey: 'wizard.steps.brand',       icon: 'Palette',   group: 'brand' },
      { id: 'marketing-content', labelKey: 'wizard.steps.marketing',   icon: 'Megaphone', group: 'marketing' },
    ],
  },

  invitation: {
    type: 'invitation',
    steps: [
      { id: 'video-type',       labelKey: 'wizard.steps.videoType',     icon: 'Film',       group: 'type' },
      { id: 'event-type',       labelKey: 'wizard.steps.eventType',     icon: 'PartyPopper',group: 'event' },
      { id: 'event-details',    labelKey: 'wizard.steps.eventDetails',  icon: 'Calendar',   group: 'details' },
      { id: 'celebrant-photo',  labelKey: 'wizard.steps.photo',         icon: 'Camera',     group: 'photo' },
      { id: 'personal-message', labelKey: 'wizard.steps.message',       icon: 'Heart',      group: 'message' },
    ],
  },

  'music-video': {
    type: 'music-video',
    steps: [
      { id: 'video-type',      labelKey: 'wizard.steps.videoType',   icon: 'Film',      group: 'type' },
      { id: 'music-upload',    labelKey: 'wizard.steps.music',       icon: 'Music',     group: 'music' },
      { id: 'song-structure',  labelKey: 'wizard.steps.structure',   icon: 'ListMusic', group: 'structure' },
      { id: 'lyrics-sync',    labelKey: 'wizard.steps.lyrics',       icon: 'AlignLeft', group: 'lyrics' },
      { id: 'visual-concept', labelKey: 'wizard.steps.concept',      icon: 'Eye',       group: 'concept' },
    ],
  },

  'recap-video': {
    type: 'recap-video',
    steps: [
      { id: 'video-type',     labelKey: 'wizard.steps.videoType',   icon: 'Film',        group: 'type' },
      { id: 'photos-upload',  labelKey: 'wizard.steps.photos',      icon: 'Images',      group: 'photos' },
      { id: 'photos-curate',  labelKey: 'wizard.steps.curate',      icon: 'CheckSquare', group: 'curate' },
      { id: 'narrative',      labelKey: 'wizard.steps.narrative',    icon: 'Mic',         group: 'narrative' },
    ],
  },

  'brand-reveal': {
    type: 'brand-reveal',
    steps: [
      { id: 'video-type',       labelKey: 'wizard.steps.videoType',     icon: 'Film',     group: 'type' },
      { id: 'logo-upload',      labelKey: 'wizard.steps.logo',          icon: 'Image',    group: 'logo' },
      { id: 'brand-colors',     labelKey: 'wizard.steps.brandColors',   icon: 'Palette',  group: 'colors' },
      { id: 'industry-select',  labelKey: 'wizard.steps.industry',      icon: 'Building', group: 'industry' },
      { id: 'reveal-style',     labelKey: 'wizard.steps.reveal',        icon: 'Sparkles', group: 'reveal' },
    ],
  },

  custom: {
    type: 'custom',
    steps: [
      { id: 'video-type',       labelKey: 'wizard.steps.videoType',      icon: 'Film',     group: 'type' },
      { id: 'custom-overview',  labelKey: 'wizard.steps.customOverview', icon: 'Layers',   group: 'overview' },
      { id: 'custom-assets',    labelKey: 'wizard.steps.customAssets',   icon: 'Upload',   group: 'assets' },
      { id: 'custom-style',     labelKey: 'wizard.steps.customStyle',    icon: 'Palette',  group: 'style' },
    ],
  },
};

/* ── Navigation helpers ────────────────────────────────── */

/** Get the next step ID, or 'generating' if we're at the last step */
export function getNextStepId(type: ProjectType, currentStepId: WizardStage): WizardStage | null {
  const flow = WIZARD_FLOWS[type];
  const idx = flow.steps.findIndex(s => s.id === currentStepId);
  if (idx === -1) return null;
  if (idx < flow.steps.length - 1) return flow.steps[idx + 1].id;
  return 'generating';
}

/** Get the previous step ID, or null if we're at the first step */
export function getPrevStepId(type: ProjectType, currentStepId: WizardStage): WizardStage | null {
  const flow = WIZARD_FLOWS[type];
  const idx = flow.steps.findIndex(s => s.id === currentStepId);
  if (idx <= 0) return null;
  return flow.steps[idx - 1].id;
}

/** Get unique step groups for the step indicator */
export interface StepGroup {
  group: string;
  labelKey: string;
  icon: string;
  stageIds: WizardStage[];
}

export function getStepGroups(type: ProjectType): StepGroup[] {
  const flow = WIZARD_FLOWS[type];
  const groups: Map<string, StepGroup> = new Map();

  for (const step of flow.steps) {
    if (!groups.has(step.group)) {
      groups.set(step.group, { group: step.group, labelKey: step.labelKey, icon: step.icon, stageIds: [] });
    }
    groups.get(step.group)!.stageIds.push(step.id);
  }

  // Terminal group always appended
  groups.set('preview', {
    group: 'preview',
    labelKey: 'wizard.steps.preview',
    icon: 'Eye',
    stageIds: ['generating', 'preview', 'importing'],
  });

  return Array.from(groups.values());
}

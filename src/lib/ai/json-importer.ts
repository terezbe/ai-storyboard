import type { StoryboardImportSchema } from '../../types/project';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  data: StoryboardImportSchema | null;
}

const PROJECT_TYPES = [
  'talking-character',
  'music-video',
  'event-promo',
  'invitation',
  'recap-video',
  'custom',
];

function validateSection(section: any, label: string): string[] {
  const errors: string[] = [];
  if (!section) {
    errors.push(`Missing ${label} section`);
    return errors;
  }
  if (typeof section.duration !== 'number' || section.duration < 0) {
    errors.push(`${label}: duration must be a positive number`);
  }
  return errors;
}

function validateShot(shot: any, index: number): string[] {
  const errors: string[] = [];
  if (!shot.title && !shot.environment?.setting) {
    errors.push(`Shot ${index + 1}: must have a title or environment setting`);
  }
  if (typeof shot.duration !== 'number' || shot.duration <= 0) {
    errors.push(`Shot ${index + 1}: duration must be a positive number`);
  }
  return errors;
}

export function validateStoryboardJson(raw: string): ValidationResult {
  let parsed: any;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { isValid: false, errors: ['Invalid JSON format'], data: null };
  }

  const errors: string[] = [];

  if (!parsed.projectName) errors.push('Missing projectName');
  if (!parsed.projectType || !PROJECT_TYPES.includes(parsed.projectType)) {
    errors.push(`Invalid or missing projectType. Must be one of: ${PROJECT_TYPES.join(', ')}`);
  }

  errors.push(...validateSection(parsed.intro, 'Intro'));
  errors.push(...validateSection(parsed.outro, 'Outro'));

  if (!Array.isArray(parsed.shots) || parsed.shots.length === 0) {
    errors.push('Must have at least one shot');
  } else {
    parsed.shots.forEach((shot: any, i: number) => {
      errors.push(...validateShot(shot, i));
    });
  }

  if (errors.length > 0) {
    return { isValid: false, errors, data: null };
  }

  // Normalize the data with defaults
  const normalized: StoryboardImportSchema = {
    version: parsed.version || '1.0',
    projectName: parsed.projectName,
    projectType: parsed.projectType,
    language: parsed.language || 'he',
    intro: {
      id: parsed.intro.id || crypto.randomUUID(),
      type: 'intro',
      title: parsed.intro.title || 'Intro',
      backgroundDescription: parsed.intro.backgroundDescription || '',
      textOverlay: parsed.intro.textOverlay || '',
      duration: parsed.intro.duration || 5,
      musicReference: parsed.intro.musicReference || '',
      showLogo: parsed.intro.showLogo ?? true,
      prompts: parsed.intro.prompts || { background: null, music: null },
      imageUrl: parsed.intro.imageUrl || undefined,
      videoPrompt: parsed.intro.videoPrompt || undefined,
    },
    shots: parsed.shots.map((s: any, i: number) => ({
      id: s.id || crypto.randomUUID(),
      orderIndex: i,
      title: s.title || `Shot ${i + 1}`,
      environment: {
        setting: s.environment?.setting || '',
        lighting: s.environment?.lighting || '',
        props: s.environment?.props || '',
        atmosphere: s.environment?.atmosphere || '',
      },
      character: {
        appearance: s.character?.appearance || '',
        outfit: s.character?.outfit || '',
        expression: s.character?.expression || '',
        action: s.character?.action || '',
      },
      dialogue: {
        text: s.dialogue?.text || '',
        voiceStyle: s.dialogue?.voiceStyle || '',
        language: s.dialogue?.language || 'he',
      },
      cameraAngle: s.cameraAngle || 'medium-shot',
      duration: s.duration || 8,
      mood: s.mood || 'festive',
      transition: s.transition || 'cut',
      notes: s.notes || '',
      prompts: s.prompts || { environment: null, character: null, music: null, video: null },
      imageUrl: s.imageUrl || undefined,
      videoPrompt: s.videoPrompt || undefined,
    })),
    outro: {
      id: parsed.outro.id || crypto.randomUUID(),
      type: 'outro',
      title: parsed.outro.title || 'Outro',
      backgroundDescription: parsed.outro.backgroundDescription || '',
      textOverlay: parsed.outro.textOverlay || '',
      duration: parsed.outro.duration || 5,
      musicReference: parsed.outro.musicReference || '',
      showLogo: parsed.outro.showLogo ?? true,
      prompts: parsed.outro.prompts || { background: null, music: null },
      imageUrl: parsed.outro.imageUrl || undefined,
      videoPrompt: parsed.outro.videoPrompt || undefined,
    },
  };

  return { isValid: true, errors: [], data: normalized };
}

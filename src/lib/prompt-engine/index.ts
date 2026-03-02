import type { Shot, StoryboardSection, Prompt } from '../../types/project';
import { v4 as uuid } from 'uuid';

const MOOD_MODIFIERS: Record<string, { lighting: string; palette: string; energy: string }> = {
  energetic: {
    lighting: 'vivid neon rim lighting with cyan and magenta edge glow, strong specular highlights, lens flare accents',
    palette: 'saturated electric blue (#00D4FF), hot pink (#FF2D7B), and acid green (#39FF14) color palette',
    energy: 'high-energy dynamic motion, frozen mid-action intensity',
  },
  romantic: {
    lighting: 'soft golden hour backlighting with warm lens flare, gentle diffused fill light, subtle halo glow around subjects',
    palette: 'warm rose gold (#B76E79), blush pink (#FFB6C1), champagne (#F7E7CE), and honey amber (#D4A017) tones',
    energy: 'intimate tender atmosphere, dreamy soft-focus bokeh background',
  },
  dramatic: {
    lighting: 'high-contrast chiaroscuro lighting with deep shadows, single hard key light from side, volumetric light shafts cutting through darkness',
    palette: 'deep crimson (#8B0000), midnight black, burnished gold (#C5961B), and steel blue (#4682B4) palette',
    energy: 'intense brooding tension, sharp shadow edges, cinematic gravity',
  },
  festive: {
    lighting: 'warm multi-colored practical lights with rich bokeh circles, string light glow, golden sparkle highlights and lens flares',
    palette: 'royal purple (#6A0DAD), metallic gold (#FFD700), ruby red (#E0115F), and champagne white (#FFFDD0) festive colors',
    energy: 'joyful celebratory energy, confetti-like sparkle, vibrant party atmosphere',
  },
  emotional: {
    lighting: 'soft diffused window light with gentle shadows, naturalistic fill, subtle warm practicals in background',
    palette: 'desaturated warm ochre (#C4A35A), dusty rose (#DCAE96), soft ivory (#FFFFF0), and muted sage (#9CAF88) tones',
    energy: 'poignant stillness, contemplative quiet mood, raw authentic feeling',
  },
  funny: {
    lighting: 'bright flat even lighting with minimal shadows, slightly overexposed fill, clean commercial-style illumination',
    palette: 'playful sunshine yellow (#FFD700), bubblegum pink (#FF69B4), sky blue (#87CEEB), and fresh lime (#32CD32) colors',
    energy: 'lighthearted upbeat comedic energy, whimsical exaggerated expressions',
  },
  elegant: {
    lighting: 'refined three-point studio lighting with soft key, gentle hair light rim, subtle specular reflections on surfaces',
    palette: 'monochromatic black (#0A0A0A), ivory white (#FFFFF0), brushed gold (#CFB53B), and pearl gray (#D3D3D3) palette',
    energy: 'sophisticated restrained luxury, polished minimalist refinement, haute couture stillness',
  },
  mysterious: {
    lighting: 'moody low-key lighting with deep shadows consuming 70% of frame, faint cold backlight edge, volumetric fog diffusing single light source',
    palette: 'deep indigo (#1B0A3C), midnight teal (#003B46), desaturated violet (#4B0082), and cold silver (#C0C0C0) palette',
    energy: 'suspenseful enigmatic tension, obscured details, noir-inspired intrigue',
  },
  calm: {
    lighting: 'gentle natural daylight filtering through atmosphere, soft overcast diffusion, even ambient illumination with no harsh shadows',
    palette: 'serene powder blue (#B0E0E6), soft lavender (#E6E6FA), warm cream (#FFFDD0), and sage green (#BCB88A) tones',
    energy: 'tranquil meditative stillness, unhurried peaceful serenity, zen-like balance',
  },
  exciting: {
    lighting: 'dramatic mixed-temperature lighting with warm practicals and cool fill, dynamic rim light separation, motion-freeze strobe effect',
    palette: 'electric cobalt blue (#0047AB), fiery orange-red (#FF4500), bright titanium white (#FAFAFA), and deep black contrast',
    energy: 'adrenaline-charged peak-moment intensity, explosive kinetic thrill, edge-of-seat anticipation',
  },
};

const CAMERA_HINTS: Record<string, string> = {
  'wide-shot':
    'wide-angle establishing shot, 24mm lens, full scene visible with deep focus, subject placed at one-third of frame using rule of thirds, expansive depth showing foreground middle-ground and background layers, environmental storytelling composition',
  'medium-shot':
    'medium shot, 50mm lens, waist-up framing with balanced negative space, subject centered with slight headroom, natural conversational distance, background softly defocused at f/2.8',
  'close-up':
    'close-up portrait shot, 85mm lens, face and shoulders filling frame, shallow depth of field at f/1.8 with creamy bokeh, sharp focus on eyes, subtle skin texture detail, intimate emotional framing',
  'extreme-close-up':
    'extreme macro close-up, 100mm lens, single feature filling entire frame (eyes, hands, or object detail), razor-thin depth of field at f/1.4, hyper-detailed texture, abstract intimate perspective',
  'over-the-shoulder':
    'over-the-shoulder shot, foreground subject out of focus on frame edge creating depth, sharp focus on facing subject, layered spatial composition, conversational POV framing at 65mm',
  'birds-eye':
    'top-down aerial birds-eye view, looking straight down at 90 degrees, graphic flat-lay composition, geometric patterns visible from above, miniature tilt-shift depth effect, drone perspective',
  'low-angle':
    'low-angle shot looking upward, camera near ground level, subject looming powerfully overhead, converging vertical lines, dramatic sky or ceiling visible, heroic imposing perspective at 35mm',
  'high-angle':
    'high-angle shot looking down at 45 degrees, subject appearing smaller and vulnerable below, foreshortened perspective, ground plane visible, omniscient viewpoint at 40mm',
  'dutch-angle':
    'dutch angle tilted 15-25 degrees, dynamic diagonal composition creating visual tension and unease, off-kilter horizon line, dramatic unstable energy, expressionistic framing at 35mm',
  'tracking':
    'lateral tracking shot, camera moving parallel to subject in motion, slight motion blur on background suggesting movement, sharp subject with dynamic panning feel, cinematic dolly perspective at 50mm',
  'pan':
    'smooth horizontal panning composition, wide panoramic field of view, environmental sweep revealing scene breadth, motion-implied blur at frame edges, cinematic landscape framing at 35mm',
  'zoom-in':
    'dramatic punch-in zoom composition, subject isolated from environment with compressed background, telephoto compression at 135mm, flattened depth layers, voyeuristic intensity, subject snapping into sharp focus',
  'zoom-out':
    'wide reveal composition, subject small within vast environment showing full context, 24mm wide perspective, deep focus across all planes, sense of scale and spatial grandeur, environmental context framing',
};

function buildQualitySuffix(quality: 'draft' | 'standard' | 'high'): string {
  if (quality === 'high')
    return ', ultra detailed 8K resolution, photorealistic rendering, cinematic color grading, shot on ARRI Alexa Mini, anamorphic lens, film grain texture, masterful composition';
  if (quality === 'standard')
    return ', high detail, professional cinematography, natural color grading, 4K quality, clean sharp focus';
  return ', clean image, good lighting';
}

export function generateEnvironmentPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { environment, mood, cameraAngle } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;
  const cameraHint = CAMERA_HINTS[cameraAngle] || '';

  // Build structured prompt: scene description first, then visual specifics
  const parts: string[] = [];

  // Core scene description
  parts.push(environment.setting || 'cinematic scene');

  // Lighting: prefer shot-specific, fall back to mood
  parts.push(environment.lighting ? environment.lighting : moodMod.lighting);

  // Props and set dressing
  if (environment.props) parts.push(environment.props);

  // Atmosphere: prefer shot-specific, fall back to mood palette + energy
  if (environment.atmosphere) {
    parts.push(environment.atmosphere);
  } else {
    parts.push(`${moodMod.palette}`);
    parts.push(`${moodMod.energy}`);
  }

  // Camera framing
  if (cameraHint) parts.push(cameraHint);

  // Quality suffix
  let text = parts.join(', ');
  text += buildQualitySuffix(quality);

  // Flux-optimized: add negative guidance for common artifacts
  if (!modelId.includes('midjourney')) {
    text += ', no text, no watermark, no UI elements';
  }

  if (modelId === 'midjourney') text += ' --ar 16:9 --v 6.1 --style raw';

  return {
    id: uuid(),
    type: 'environment',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateCharacterPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { character, mood, cameraAngle } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;
  const cameraHint = CAMERA_HINTS[cameraAngle] || '';

  const parts: string[] = [];

  // Character description: appearance is the anchor
  parts.push(character.appearance || 'person');

  // Wardrobe with specific detail
  if (character.outfit) parts.push(`wearing ${character.outfit}`);

  // Facial expression and body language
  if (character.expression) parts.push(`${character.expression} expression`);

  // Action/pose: important for first-frame composition
  if (character.action) parts.push(character.action);

  // Mood-driven atmosphere around the character
  parts.push(`${moodMod.lighting}`);
  parts.push(`${moodMod.energy}`);

  // Camera framing affects how the character is composed in frame
  if (cameraHint) parts.push(cameraHint);

  let text = parts.join(', ');
  text += buildQualitySuffix(quality);

  if (!modelId.includes('midjourney')) {
    text += ', no text, no watermark';
  }

  if (modelId === 'midjourney') text += ' --ar 16:9 --v 6.1';

  return {
    id: uuid(),
    type: 'character',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateMusicPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { mood, duration } = shot;
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;

  let text = `${moodMod.energy} music, ${mood} mood`;
  text += `, ${duration} seconds`;
  if (mood === 'energetic' || mood === 'exciting') text += ', 128 BPM, electronic dance';
  else if (mood === 'romantic') text += ', 80 BPM, piano and strings';
  else if (mood === 'dramatic') text += ', 100 BPM, orchestral';
  else if (mood === 'festive') text += ', 120 BPM, upbeat pop';
  else if (mood === 'funny') text += ', 110 BPM, playful';
  else if (mood === 'elegant') text += ', 90 BPM, jazz lounge';
  else if (mood === 'calm') text += ', 70 BPM, ambient';
  else text += ', 100 BPM';

  return {
    id: uuid(),
    type: 'music',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateVideoPrompt(
  shot: Shot,
  modelId: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
): Prompt {
  const { environment, character, cameraAngle, duration, mood } = shot;
  const cameraHint = CAMERA_HINTS[cameraAngle] || '';
  const moodMod = MOOD_MODIFIERS[mood] || MOOD_MODIFIERS.festive;

  // Video prompts work best as structured sentences describing the scene and motion
  const sceneParts: string[] = [];

  // Scene and subject
  sceneParts.push(environment.setting || 'cinematic scene');
  if (character.appearance) sceneParts.push(character.appearance);

  const sceneDesc = sceneParts.join(', ');

  // Action/motion is critical for video -- describe what happens over the clip duration
  const motionDesc = character.action
    ? character.action
    : 'subtle ambient motion, gentle environmental movement';

  // Build the structured video prompt: Scene. Motion. Camera. Lighting. Duration.
  const segments: string[] = [];
  segments.push(sceneDesc);
  if (motionDesc) segments.push(motionDesc);
  if (cameraHint) segments.push(cameraHint);
  segments.push(moodMod.lighting);
  segments.push(`${moodMod.palette}`);

  let text = segments.join('. ');
  text += `. Duration: ${duration}s`;

  if (quality === 'high')
    text += '. Cinematic quality, smooth natural motion, professional color grading, film grain';
  else if (quality === 'standard')
    text += '. Smooth motion, professional quality';

  return {
    id: uuid(),
    type: 'video',
    text: text.trim(),
    targetModel: modelId,
    quality,
    isManuallyEdited: false,
  };
}

export function generateAllPromptsForShot(
  shot: Shot,
  imageModel: string,
  videoModel: string,
  musicModel: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
) {
  return {
    environment: generateEnvironmentPrompt(shot, imageModel, quality),
    character: generateCharacterPrompt(shot, imageModel, quality),
    music: generateMusicPrompt(shot, musicModel, quality),
    video: generateVideoPrompt(shot, videoModel, quality),
  };
}

export function generateSectionPrompt(
  section: StoryboardSection,
  imageModel: string,
  musicModel: string,
  quality: 'draft' | 'standard' | 'high' = 'standard'
) {
  // Build a rich background prompt for intro/outro sections
  let bgText = section.backgroundDescription || `cinematic ${section.type} scene`;

  // Add section-type-specific cinematic framing
  if (section.type === 'intro') {
    bgText += ', epic wide establishing shot, cinematic title card composition, dramatic depth of field, atmospheric haze';
  } else if (section.type === 'outro') {
    bgText += ', elegant closing shot, soft fade-ready composition, warm reflective lighting, gentle depth of field';
  }

  bgText += buildQualitySuffix(quality);

  if (!imageModel.includes('midjourney')) {
    bgText += ', no text, no watermark, no UI elements';
  }
  if (imageModel === 'midjourney') bgText += ' --ar 16:9 --v 6.1';

  const background: Prompt = {
    id: uuid(),
    type: 'environment',
    text: bgText,
    targetModel: imageModel,
    quality,
    isManuallyEdited: false,
  };

  const music: Prompt = {
    id: uuid(),
    type: 'music',
    text: section.musicReference || `${section.type} music, ${section.duration} seconds`,
    targetModel: musicModel,
    quality,
    isManuallyEdited: false,
  };

  return { background, music };
}

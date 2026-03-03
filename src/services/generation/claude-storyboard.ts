import { useSettingsStore } from '../../store/settings-store';
import { VISUAL_STYLE_PRESETS, SHOT_COUNT_OPTIONS } from '../../config/style-presets';
import type { IdeaWizardInput } from '../../types/idea-wizard';
import type { CharacterDefinition } from '../../types/character-builder';
import type { EnvironmentDefinition } from '../../types/environment-builder';
import type { Mood } from '../../types/project';
import type { ShotCountRange } from '../../config/style-presets';

/* ── New WizardInput type (structured character/environment) ──────── */

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

/** Type guard: is this the new structured WizardInput? */
function isWizardInput(input: IdeaWizardInput | WizardInput): input is WizardInput {
  return 'character' in input && 'environment' in input && 'story' in input;
}

/* ── Prompt builders (inline fallbacks if external module not available) ── */

let buildCharacterPrompt: (char: CharacterDefinition) => string;
let buildEnvironmentPrompt: (env: EnvironmentDefinition) => string;

try {
  // Try to import from the dedicated prompt-builders module (may be created by another agent)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const builders = require('../../lib/prompt-builders');
  buildCharacterPrompt = builders.buildCharacterPrompt;
  buildEnvironmentPrompt = builders.buildEnvironmentPrompt;
} catch {
  // Fallback: build prompts inline from structured data
  buildCharacterPrompt = (char: CharacterDefinition): string => {
    const parts: string[] = [];

    // Type / species
    if (char.type !== 'human') parts.push(`${char.type} character`);

    // Gender + age
    const genderLabel = char.gender === 'neutral' ? '' : char.gender;
    const ageLabel = char.ageRange.replace('-', ' ');
    parts.push([genderLabel, ageLabel].filter(Boolean).join(' '));

    // Body
    if (char.bodyType !== 'average') parts.push(`${char.bodyType} build`);

    // Skin
    parts.push(`${char.skinTone.replace(/-/g, ' ')} skin tone`);

    // Hair
    parts.push(`${char.hairColor.replace(/-/g, ' ')} ${char.hairStyle.replace(/-/g, ' ')} hair`);

    // Clothing
    parts.push(`${char.clothingStyle} clothing`);
    if (char.clothingDetails) parts.push(char.clothingDetails);

    // Facial features
    if (char.facialFeatures.length > 0) {
      parts.push(`with ${char.facialFeatures.join(', ')}`);
    }

    // Custom notes
    if (char.customNotes) parts.push(char.customNotes);

    return parts.filter(Boolean).join(', ');
  };

  buildEnvironmentPrompt = (env: EnvironmentDefinition): string => {
    const parts: string[] = [];

    // Category + setting
    parts.push(`${env.category} environment`);
    if (env.customSetting) {
      parts.push(env.customSetting);
    } else {
      parts.push(env.settingId.replace(/-/g, ' '));
    }

    // Time of day
    parts.push(`${env.timeOfDay.replace(/-/g, ' ')} time`);

    // Weather
    if (env.weather !== 'clear') parts.push(`${env.weather} weather`);

    // Lighting
    parts.push(`${env.lighting.replace(/-/g, ' ')} lighting`);

    // Custom notes
    if (env.customNotes) parts.push(env.customNotes);

    return parts.filter(Boolean).join(', ');
  };
}

/* ══════════════════════════════════════════════════════════════════════
   STORYBOARD SYSTEM PROMPT
   ══════════════════════════════════════════════════════════════════════ */

const STORYBOARD_SYSTEM_PROMPT = `You are an expert video storyboard director and narrative designer. Your job is to transform a user's idea into a coherent, visually compelling storyboard that tells a REAL STORY with a clear beginning, middle, and end — deeply connected to the user's input.

You MUST respond with valid JSON only — no markdown, no explanation, no extra text.

═══════════════════════════════════════════════
STEP 1: STORY ANALYSIS (mental step — do NOT output this)
═══════════════════════════════════════════════
Before writing ANY shots, you MUST mentally work through these questions:

WHO — Who is the main character? What is their role, personality, and relationship to the story? What do they want or need?
WHERE — What are the 1-3 primary locations? How do these locations serve the story? (A kitchen for a cooking story, a stage for a performance story, etc.)
WHAT — What is the complete story arc? Summarize it in one sentence: "[Character] does [action] because [reason], leading to [outcome]."
WHY — What is the purpose/message? What should the viewer feel at the START vs. the END? (e.g., curiosity -> inspiration, worry -> relief, boredom -> excitement)

This analysis must drive every creative decision below. Every shot must serve this story.

═══════════════════════════════════════════════
STEP 2: NARRATIVE STRUCTURE
═══════════════════════════════════════════════
Your storyboard MUST follow a clear dramatic structure. Map the user's content onto this arc:

HOOK (Shot 1): Grab attention. Show the character in their world with a compelling visual. The viewer must immediately think "I want to know more." This is NOT a generic establishing shot — it should hint at the story to come.

SETUP (Shot 2): Establish the situation. The character's context, challenge, or starting point becomes clear. If the user's story has a "before" state, show it here.

DEVELOPMENT (Shots 3 through N-2): The story UNFOLDS. Each shot must represent a distinct story beat:
  - New information is revealed
  - The character takes action or reacts
  - Tension builds, emotion deepens, or the situation progresses
  - Show cause-and-effect: one shot's outcome leads to the next shot's setup
  - NEVER create filler shots (generic atmosphere with no story purpose)

CLIMAX (Shot N-1): The peak moment. The most emotionally intense or visually striking moment of the story. This is where the message lands, the transformation happens, or the key revelation occurs.

RESOLUTION (Shot N): Closure. Show the outcome, the new state, the final message. Leave the viewer with a lasting impression that connects back to the opening.

CRITICAL RULE: "If a shot could be removed without breaking the narrative, it should not exist." Every shot must be a necessary link in the story chain.

═══════════════════════════════════════════════
STEP 3: ENVIRONMENT CONSISTENCY
═══════════════════════════════════════════════
Define 1-3 PRIMARY LOCATIONS based on the story's needs. Locations should feel like real, specific places — not generic descriptions.

RULES:
- When returning to the same location, COPY-PASTE the identical setting description. Do not rephrase or vary it.
  Example: If Shot 1 uses "Modern white kitchen with marble island, copper pendant lights, herb pots on the windowsill, and large window overlooking a green garden" then Shot 5 in the same kitchen MUST use that exact same string.
- Only introduce a new location when the story demands a scene change (e.g., moving from home to work, interior to exterior).
- Props and small details CAN change between shots at the same location (e.g., ingredients appear, a laptop is open), but the BASE setting description stays constant.
- Each location should be described with enough specificity that an AI could generate a consistent-looking image every time: mention surfaces, colors, key architectural features, and distinctive objects.

═══════════════════════════════════════════════
STEP 4: CHARACTER CONSISTENCY
═══════════════════════════════════════════════
The character must look like the SAME PERSON in every shot they appear in.

ABSOLUTE RULES:
- character.appearance: Write it ONCE, then COPY-PASTE the identical text into every character shot. This field describes physical traits (build, age, hair, skin) — NOT the face (a reference image handles the face).
- character.outfit: Write it ONCE, then COPY-PASTE the identical text into every character shot. Clothing does NOT change between shots unless the story explicitly requires a costume change.
- character.expression: This DOES change per shot — it reflects the emotional beat of that moment (e.g., "curious and slightly worried", "beaming with pride", "focused concentration").
- character.action: This DOES change per shot — it describes the character's STATIC starting pose at the beginning of the shot (what a photographer would capture).

CHARACTER INTRODUCTION: The character MUST appear in Shot 1 or Shot 2. The viewer needs to connect with the person telling the story early on.

═══════════════════════════════════════════════
STEP 5: IMAGE AS FIRST VIDEO FRAME
═══════════════════════════════════════════════
Each shot's image will be used as the FIRST FRAME of a video clip (image-to-video AI generation). This has critical implications:

DO:
- Describe a STATIC, perfectly COMPOSED moment — like a professional photograph
- Character should be in a clear, stable STARTING POSE (standing still, sitting, hands resting, looking at something)
- Environment must be fully visible, properly lit, and composed as a complete image
- Include clear spatial relationships (foreground, midground, background)
- Ensure the composition leaves room for the motion that will happen during the video

DO NOT:
- Describe motion blur, mid-action poses, or implied movement in the image fields
- Use words like "walking", "running", "turning", "reaching" in character.action — instead use "standing ready to walk", "seated at desk", "hand resting near the cup"
- Describe camera movement in the image — the image is a single static frame

MOTION GOES IN NOTES ONLY: All animation, camera movement, and action sequences belong in the "notes" field.
Example notes: "Character slowly reaches for the coffee mug. Camera gently pushes in from medium to close-up. Steam rises from the cup."

═══════════════════════════════════════════════
OUTPUT JSON SCHEMA
═══════════════════════════════════════════════
{
  "projectName": "string — short descriptive project name derived from the story",
  "projectType": "one of: talking-character, music-video, event-promo, invitation, recap-video, custom",
  "language": "he or en — match the user's language",
  "intro": null or { "title": "Intro", "backgroundDescription": "visual description (English)", "textOverlay": "on-screen text", "duration": 5, "musicReference": "music description", "showLogo": true },
  "shots": [ ...shot objects... ],
  "outro": null or { "title": "Outro", "backgroundDescription": "visual description (English)", "textOverlay": "on-screen text", "duration": 5, "musicReference": "music description", "showLogo": true }
}

INTRO/OUTRO RULES:
- "talking-character" and "invitation" projects: INCLUDE intro and outro
- All other types: set intro and outro to null

SHOT SCHEMA:
{
  "title": "short title describing the STORY BEAT (e.g., 'The Discovery', 'A New Beginning', 'Confronting the Challenge')",
  "environment": {
    "setting": "detailed scene description for AI image generation — specific location, architecture, surfaces, colors, key objects. Must be rich enough to generate a consistent image. Example: 'Cozy living room with cream linen sofa, oak coffee table, warm brass table lamp, built-in bookshelves covering the back wall, soft evening light filtering through sheer white curtains'",
    "lighting": "specific lighting setup that serves the mood. Example: 'Warm golden hour side-lighting from the window, gentle fill from the table lamp casting soft amber glow, subtle shadows on the far wall'",
    "props": "important objects visible in THIS shot that serve the story. Example: 'Open laptop showing a recipe, steaming coffee mug, scattered handwritten notes, reading glasses folded on the table'",
    "atmosphere": "the visual and emotional feeling of the scene. Example: 'Comfortable and intimate, warm color palette dominated by amber, cream, and soft wood tones'"
  },
  "character": {
    "appearance": "COPY-PASTE IDENTICAL text in every character shot — physical description only (build, age, hair, skin). Example: 'Young woman in her mid-20s, athletic build, shoulder-length dark wavy hair, warm olive skin tone'",
    "outfit": "COPY-PASTE IDENTICAL text in every character shot — clothing description. Example: 'Fitted cream knit sweater, high-waisted dark blue jeans, delicate gold pendant necklace, small hoop earrings'",
    "expression": "specific expression for THIS moment that matches the story beat. Example: 'Soft, contemplative smile with slightly raised eyebrows — a look of pleasant surprise'",
    "action": "STATIC starting pose for THIS shot. Describe what a photographer would see. Example: 'Seated on the sofa with legs tucked to one side, one hand resting on the laptop, head tilted slightly toward the window'"
  },
  "dialogue": {
    "text": "what is said during this shot — in the user's language. Must be a meaningful portion of the story, not filler.",
    "voiceStyle": "tone and delivery that matches the moment. Example: 'warm and reflective, speaking slowly with genuine emotion'",
    "language": "he or en"
  },
  "cameraAngle": "one of: wide-shot, medium-shot, close-up, extreme-close-up, over-the-shoulder, birds-eye, low-angle, high-angle, dutch-angle, tracking, pan, zoom-in, zoom-out",
  "duration": 8,
  "mood": "one of: energetic, romantic, dramatic, festive, emotional, funny, elegant, mysterious, calm, exciting",
  "transition": "one of: cut, fade, dissolve, wipe, slide, zoom, none",
  "shotCategory": "character or b-roll — REQUIRED",
  "notes": "director notes: describe MOTION that happens during the clip, camera movements, character actions that unfold, and the emotional intent of the shot"
}

═══════════════════════════════════════════════
GUIDELINES
═══════════════════════════════════════════════
- Write ALL visual descriptions (environment, character appearance, props) in ENGLISH for AI image generation
- Write dialogue in the USER'S language
- Duration: shots 5-12s, intro/outro 3-7s
- Camera angles serve the story: wide-shot for establishing context, close-up for emotional beats, medium-shot for dialogue, extreme-close-up for important details
- Transitions serve the narrative: cut for energy/action, dissolve for time passage, fade for endings/beginnings
- Mood should VARY across shots to create emotional dynamics — not every shot should have the same mood
- Each shot MUST have "shotCategory" set to either "character" or "b-roll"
- Story coherence is the #1 priority: visuals must serve the narrative, not the other way around`;

export interface ClaudeStoryboardResult {
  success: boolean;
  data?: string; // raw JSON string
  error?: string;
}

export async function generateStoryboardFromIdea(
  idea: string,
  language: 'en' | 'he'
): Promise<ClaudeStoryboardResult> {
  const claudeApiKey = useSettingsStore.getState().claudeApiKey;
  if (!claudeApiKey) {
    return { success: false, error: language === 'he' ? 'חסר מפתח Claude API. הגדר אותו בהגדרות.' : 'Missing Claude API key. Set it in Settings.' };
  }

  const userMessage = language === 'he'
    ? `צור סטוריבורד לרעיון הבא. כתוב את כל התיאורים הויזואליים באנגלית (לצורך יצירת תמונות AI) ואת הדיאלוגים בעברית.

הרעיון:
${idea}

משימה: נתח את הרעיון, חלץ את הדמות/ות, המיקום/ות, והקשת הסיפורית. צור סטוריבורד שמספר סיפור שלם מתחילתו ועד סופו.`
    : `Create a storyboard for the following idea. Write all visual descriptions in English (for AI image generation) and dialogue in English.

The Idea:
${idea}

Task: Analyze the idea, extract the character(s), location(s), and story arc. Create a storyboard that tells a complete story from beginning to end.`;

  try {
    const res = await fetch('/api/claude/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-claude-key': claudeApiKey,
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: STORYBOARD_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: `Claude API error (${res.status}): ${text}` };
    }

    const data = await res.json();
    const content = data.content?.[0]?.text;
    if (!content) {
      return { success: false, error: 'Empty response from Claude' };
    }

    // Extract JSON from response (Claude might wrap it in markdown code blocks)
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
    const jsonString = jsonMatch[1]?.trim() || content.trim();

    // Validate it's parseable JSON
    try {
      JSON.parse(jsonString);
    } catch {
      return { success: false, error: language === 'he' ? 'Claude לא החזיר JSON תקין' : 'Claude did not return valid JSON' };
    }

    return { success: true, data: jsonString };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: message };
  }
}

/* ══════════════════════════════════════════════════════════════════════
   Wizard-based generation (talking character focused)
   ══════════════════════════════════════════════════════════════════════ */

/** Extract input fields from either old or new format */
function resolveWizardFields(input: IdeaWizardInput | WizardInput): {
  idea: string;
  characterPromptText: string;
  environmentPromptText: string;
  visualStyle: string;
  mood: Mood;
  shotCountRange: ShotCountRange;
} {
  if (isWizardInput(input)) {
    return {
      idea: input.story.idea,
      characterPromptText: buildCharacterPrompt(input.character),
      environmentPromptText: buildEnvironmentPrompt(input.environment),
      visualStyle: input.story.visualStyle,
      mood: input.story.mood,
      shotCountRange: input.story.shotCountRange,
    };
  }

  // Old IdeaWizardInput format — characterDescription is already a text string
  return {
    idea: input.idea,
    characterPromptText: input.characterDescription,
    environmentPromptText: '', // old format had no separate environment
    visualStyle: input.visualStyle,
    mood: input.mood,
    shotCountRange: input.shotCountRange,
  };
}

function buildWizardSystemPrompt(input: IdeaWizardInput | WizardInput): string {
  const fields = resolveWizardFields(input);
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === fields.visualStyle);
  const shotRange = SHOT_COUNT_OPTIONS.find((o) => o.id === fields.shotCountRange) ?? SHOT_COUNT_OPTIONS[1];

  // Build environment section only if we have environment data
  const environmentSection = fields.environmentPromptText
    ? `
DEFAULT ENVIRONMENT:
The primary location/environment is: ${fields.environmentPromptText}
Use this as the BASELINE environment for most shots. You may adapt it (different rooms, different areas within the same space) but keep the core visual identity consistent. When the story stays in this location, COPY-PASTE the same base setting description. Only create a completely different location if the narrative demands a scene change.`
    : `
DEFAULT ENVIRONMENT:
Derive the primary location(s) from the user's story. Define 1-3 specific, visually detailed locations and reuse them consistently throughout the storyboard.`;

  return `${STORYBOARD_SYSTEM_PROMPT}

═══════════════════════════════════════════════
TALKING CHARACTER PROJECT — ADDITIONAL RULES
═══════════════════════════════════════════════

PROJECT TYPE: This is a "talking-character" project. ALWAYS set projectType to "talking-character".
ALWAYS INCLUDE intro and outro sections.

VISUAL STYLE (apply to EVERY shot consistently):
${stylePreset?.promptFragment ?? 'Cinematic photography style'}
This style MUST influence: lighting setup, color palette, surface textures, clothing design, and environment design in EVERY shot. Do not mix styles between shots. The style is a visual language — it must be spoken consistently.

═══════════════════════════════════════════════
MAIN CHARACTER IDENTITY
═══════════════════════════════════════════════
The character is described as: ${fields.characterPromptText}

A REFERENCE IMAGE will be used to generate the character's face/body. This means:
- character.appearance: Write a SHORT, FIXED description based on the character description above. Focus on build, age range, hair, and distinguishing physical features — NOT detailed face description (the reference image handles the face). COPY-PASTE this IDENTICAL text into EVERY character shot.
- character.outfit: Based on the description above, write a SPECIFIC outfit description. COPY-PASTE this IDENTICAL text into EVERY character shot.
- For B-ROLL shots: ALL character fields (appearance, outfit, expression, action) MUST be EMPTY STRINGS ""

IMPORTANT — IMAGE GENERATION SEPARATION:
- For CHARACTER shots: environment.setting describes ONLY the background scene — do NOT mention the character in this field. A separate AI model composites the character into the scene.
  GOOD: "Modern kitchen with marble countertops, copper pendant lights, herbs on the windowsill, warm morning light"
  BAD: "A woman standing in a modern kitchen" (NEVER put character description in environment.setting)
- For B-ROLL shots: environment.setting should be RICH and DETAILED since no character will be composited — the image IS the environment/object.
  GOOD: "Close-up of steaming coffee being poured into a handmade ceramic mug, morning sunlight catching the rising steam, worn wooden countertop surface, blurred warm kitchen background with copper pots"
${environmentSection}

═══════════════════════════════════════════════
SHOT STRUCTURE — NARRATIVE-DRIVEN
═══════════════════════════════════════════════
Do NOT mechanically alternate character/b-roll. Instead, let the STORY decide:

CHARACTER SHOTS should be used when:
- The character is speaking directly to the viewer (key dialogue moments)
- The character reacts emotionally to something (facial expression matters)
- The character performs an important action (beginning of a process, a decision moment)
- The story needs a personal, intimate connection with the viewer

B-ROLL SHOTS should be used when:
- The character talks ABOUT something — show that thing (a place, an object, a memory)
- Time passes or a transition between scenes is needed
- Detail and texture matter (close-up of food, a landscape, hands working)
- The story needs breathing room or a change of visual pace
- Establishing a new location before the character appears in it

RULES:
1. The character MUST appear in Shot 1 or Shot 2 — the viewer needs to see who is speaking EARLY
2. Never have more than 3 character shots or 2 b-roll shots in a row
3. Every b-roll shot must DIRECTLY ILLUSTRATE what the character is talking about — no generic filler
4. The ratio of character to b-roll should serve the story (roughly 50-70% character), not follow a formula

CHARACTER SHOT RULES:
- Character faces camera (or near-camera angle) for lip-sync compatibility
- Prefer medium-shot or close-up framing (the face must be clearly visible for lip-sync)
- Expression MUST match the dialogue emotion at that moment
- Action must be a STATIC starting pose suitable for video generation: "seated at table, hands resting on the surface, looking directly at camera" NOT "reaching across the table"
- The dialogue.text field drives the video — make it substantial and story-advancing

B-ROLL SHOT RULES:
- shotCategory MUST be "b-roll"
- character.appearance, character.outfit, character.expression, character.action: ALL empty strings ""
- dialogue.text can contain voiceover narration that continues from the character's speech (keeps audio flowing)
- The VISUAL content must DIRECTLY RELATE to the dialogue — if the character talks about "the beach at sunset", show that specific beach at sunset

═══════════════════════════════════════════════
DIALOGUE DISTRIBUTION
═══════════════════════════════════════════════
The user's story/script contains the COMPLETE content that must be communicated. Your job is to:
1. Read the ENTIRE story/script carefully
2. Break it into natural dialogue portions — one per shot
3. Distribute ALL content across the shots so NOTHING is skipped or summarized away
4. Each character shot gets a meaningful spoken portion (2-4 sentences)
5. B-roll shots can carry voiceover continuation (1-2 sentences)
6. The dialogue across ALL shots, read in sequence, should tell the COMPLETE story the user described
7. Do NOT add content the user didn't provide — stay faithful to their story

═══════════════════════════════════════════════
MOOD & PACING
═══════════════════════════════════════════════
Overall mood: ${fields.mood}

This is the BASELINE mood, but a good story has emotional dynamics. Vary the energy across shots:
- Opening shots: slightly lower energy — establish, invite, intrigue
- Early-middle shots: rising energy — build interest, introduce the core idea
- Mid-story shots: varied energy — match the content (reflective moments slow down, exciting moments speed up)
- Climax shots: peak emotional intensity — this is where the mood hits hardest
- Closing shots: resolution energy — warmth, satisfaction, inspiration, or call-to-action

SHOT COUNT: Generate between ${shotRange.min} and ${shotRange.max} shots.
Each shot should be 5-12 seconds. Intro/outro should be 3-7 seconds.`;
}

function buildWizardUserMessage(input: IdeaWizardInput | WizardInput, language: 'en' | 'he'): string {
  const fields = resolveWizardFields(input);
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === fields.visualStyle);

  // Build the structured content sections
  const storySection = fields.idea;
  const characterSection = fields.characterPromptText;
  const environmentSection = fields.environmentPromptText || '(derive from story context)';
  const styleLabel = stylePreset?.labelKey ?? 'cinematic';
  const styleId = stylePreset?.id ?? 'cinematic';

  if (language === 'he') {
    return `צור סטוריבורד לדמות מדברת שמספרת את הסיפור הבא. כתוב את כל התיאורים הויזואליים (environment, character, props) באנגלית לצורך יצירת תמונות AI. כתוב את כל הדיאלוגים בעברית.

═══ הסיפור / התסריט ═══
${storySection}

═══ הדמות ═══
${characterSection}

═══ הסביבה / לוקיישן ═══
${environmentSection}

═══ הגדרות ═══
סגנון ויזואלי: ${styleLabel} (${styleId})
מצב רוח כללי: ${fields.mood}
כמות שוטים: ${fields.shotCountRange}

═══ משימה ═══
1. קרא את הסיפור/תסריט למעלה בעיון רב — הבן את המסר, הדמות, והמסע הרגשי
2. חלץ את הנושאים המרכזיים ואת הקשת הנרטיבית (התחלה, אמצע, שיא, סוף)
3. צור סטוריבורד שמספר את הסיפור הזה מתחילתו ועד סופו — כל שוט הוא חוליה בשרשרת הסיפור
4. ודא שהדיאלוגים מכסים את כל התוכן שהמשתמש כתב — אל תדלג על חלקים ואל תסכם
5. כל שוט צריך לקדם את הסיפור — אם אפשר להסיר שוט בלי לפגוע בעלילה, הוא מיותר
6. הדמות חייבת להופיע בשוט 1 או 2 — הצופה צריך לראות מי מדבר כבר בהתחלה`;
  }

  return `Create a talking character storyboard that tells the following story. Write all visual descriptions (environment, character, props) in English for AI image generation. Write all dialogue in English.

═══ STORY / SCRIPT ═══
${storySection}

═══ CHARACTER ═══
${characterSection}

═══ ENVIRONMENT / LOCATION ═══
${environmentSection}

═══ SETTINGS ═══
Visual Style: ${styleLabel} (${styleId})
Overall Mood: ${fields.mood}
Shot Count: ${fields.shotCountRange}

═══ YOUR TASK ═══
1. Read the story/script above carefully — understand the message, the character, and the emotional journey
2. Extract the core themes and narrative arc (beginning, middle, climax, end)
3. Create a storyboard that tells this story from beginning to end — every shot is a link in the story chain
4. Ensure the dialogue across all shots covers ALL the content the user wrote — do not skip or summarize any part
5. Every shot must advance the story — if a shot can be removed without breaking the narrative, it is unnecessary
6. The character must appear in shot 1 or 2 — the viewer needs to see who is speaking early`;
}

export async function generateStoryboardFromWizard(
  input: IdeaWizardInput | WizardInput,
  language: 'en' | 'he'
): Promise<ClaudeStoryboardResult> {
  const claudeApiKey = useSettingsStore.getState().claudeApiKey;
  if (!claudeApiKey) {
    return {
      success: false,
      error: language === 'he' ? 'חסר מפתח Claude API. הגדר אותו בהגדרות.' : 'Missing Claude API key. Set it in Settings.',
    };
  }

  const systemPrompt = buildWizardSystemPrompt(input);
  const userMessage = buildWizardUserMessage(input, language);

  try {
    const res = await fetch('/api/claude/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-claude-key': claudeApiKey,
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: `Claude API error (${res.status}): ${text}` };
    }

    const data = await res.json();
    const content = data.content?.[0]?.text;
    if (!content) {
      return { success: false, error: 'Empty response from Claude' };
    }

    // Extract JSON from response (Claude might wrap it in markdown code blocks)
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
    const jsonString = jsonMatch[1]?.trim() || content.trim();

    // Validate it's parseable JSON
    try {
      JSON.parse(jsonString);
    } catch {
      return { success: false, error: language === 'he' ? 'Claude לא החזיר JSON תקין' : 'Claude did not return valid JSON' };
    }

    return { success: true, data: jsonString };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: message };
  }
}

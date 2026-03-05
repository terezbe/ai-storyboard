import { useSettingsStore } from '../../store/settings-store';
import { VISUAL_STYLE_PRESETS, SHOT_COUNT_OPTIONS } from '../../config/style-presets';
import { VIDEO_TYPE_CONFIGS } from '../../config/video-type-configs';
import type { IdeaWizardInput, WizardInput as WizardInputType } from '../../types/idea-wizard';
import type { CharacterDefinition } from '../../types/character-builder';
import type { EnvironmentDefinition } from '../../types/environment-builder';
import type { Mood, ProjectType, WizardMetadata } from '../../types/project';
import type { ShotCountRange } from '../../config/style-presets';
import type { EventPromoData, InvitationData, MusicVideoData, RecapVideoData, BrandRevealData, CustomData } from '../../types/wizard-data';
import {
  buildCharacterPrompt as _buildCharacterPrompt,
  buildEnvironmentPrompt as _buildEnvironmentPrompt,
} from '../../lib/prompt-builders';
import { extractBase64Data } from '../../lib/image-utils';

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

/* ── Prompt builders ── */

const buildCharacterPrompt = _buildCharacterPrompt;
const buildEnvironmentPrompt = _buildEnvironmentPrompt;

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

VISUAL CAUSE-AND-EFFECT:
Every shot transition MUST show WHY the next shot happens:
- Object continuity: character picks up item in Shot N → shown using it in Shot N+1
- Location movement: character walks out → next shot is new location
- Dialogue reference: character says "let's go to the beach" → next shot is beach
- Emotional escalation: worried expression → next shot reveals the cause
If two adjacent shots have no visual/narrative link, add a transition explanation in the notes field.

CHARACTER EMOTIONAL PROGRESSION:
The character MUST change across the story:
- Early shots: curious, hopeful, uncertain
- Middle shots: determined, discovering, struggling
- Peak shots: triumphant, transformed, devastated
- Final shots: satisfied, wise, renewed
Do NOT use the same expression twice unless deliberately repeating for emphasis.

VISUAL STYLE CONSISTENCY:
The first shot establishes the visual language — ALL subsequent shots must maintain:
- Same color palette (warm/cool/vibrant)
- Same lighting approach (natural/dramatic/studio)
- Same photography style (cinematic/photorealistic/painterly)
- Same texture/finish (film grain/smooth digital)

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
  "projectType": "one of: talking-character, music-video, event-promo, invitation, recap-video, brand-reveal, custom",
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

function buildWizardSystemPrompt(input: IdeaWizardInput | WizardInput, projectType: ProjectType = 'talking-character'): string {
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

  const config = VIDEO_TYPE_CONFIGS[projectType];

  const typeSpecificSection = `
═══════════════════════════════════════════════
${projectType.toUpperCase().replace(/-/g, ' ')} PROJECT — TYPE-SPECIFIC RULES
═══════════════════════════════════════════════

PROJECT TYPE: "${projectType}". ALWAYS set projectType to "${projectType}".
${config.hasIntroOutro ? 'INCLUDE intro and outro sections.' : 'Set intro and outro to null — do NOT create intro/outro for this type.'}

NARRATIVE STRUCTURE FOR THIS TYPE (USE THIS INSTEAD of the default 5-act structure above):
${config.claudeRules}

CAMERA GUIDANCE:
${config.cameraGuidance}

SHOT MIX:
${config.shotMixGuidance}
`;

  return `${STORYBOARD_SYSTEM_PROMPT}
${typeSpecificSection}
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

function buildWizardUserMessage(input: IdeaWizardInput | WizardInput, language: 'en' | 'he', projectType: ProjectType = 'talking-character'): string {
  // Check for type-specific data on new WizardInput format
  if (isWizardInput(input) && 'videoType' in input) {
    const wizInput = input as WizardInputType;
    if (wizInput.customData) return buildCustomUserMessage(wizInput.customData, language);
    if (wizInput.eventPromo) return buildEventPromoUserMessage(wizInput.eventPromo, language);
    if (wizInput.invitation) return buildInvitationUserMessage(wizInput.invitation, language);
    if (wizInput.musicVideo) return buildMusicVideoUserMessage(wizInput.musicVideo, language);
    if (wizInput.recapVideo) return buildRecapVideoUserMessage(wizInput.recapVideo, language);
    if (wizInput.brandReveal) return buildBrandRevealUserMessage(wizInput.brandReveal, language);
  }

  // Default: talking-character flow
  const fields = resolveWizardFields(input);
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === fields.visualStyle);

  const storySection = fields.idea;
  const characterSection = fields.characterPromptText;
  const environmentSection = fields.environmentPromptText || '(derive from story context)';
  const styleLabel = stylePreset?.labelKey ?? 'cinematic';
  const styleId = stylePreset?.id ?? 'cinematic';

  if (language === 'he') {
    return `צור סטוריבורד מסוג "${projectType}" שמספר את הסיפור הבא. כתוב את כל התיאורים הויזואליים (environment, character, props) באנגלית לצורך יצירת תמונות AI. כתוב את כל הדיאלוגים בעברית.

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

  return `Create a "${projectType}" storyboard that tells the following story. Write all visual descriptions (environment, character, props) in English for AI image generation. Write all dialogue in English.

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

/* ── Per-type user message builders ──────────────────────────────────── */

function buildCustomUserMessage(data: CustomData, language: 'en' | 'he'): string {
  const stylePreset = VISUAL_STYLE_PRESETS.find((s) => s.id === data.visualStyle);
  const shotRange = SHOT_COUNT_OPTIONS.find((o) => o.id === data.shotCountRange) ?? SHOT_COUNT_OPTIONS[1];

  const sections: string[] = [];

  if (data.projectTitle) sections.push(`Project Title: ${data.projectTitle}`);
  sections.push(`Project Description:\n${data.projectDescription}`);

  if (data.sections.character && data.character) {
    const char = data.character;
    const charParts: string[] = [];
    if (char.type !== 'human') charParts.push(`Type: ${char.type}`);
    charParts.push(`Gender: ${char.gender}`);
    charParts.push(`Age: ${char.ageRange.replace('-', ' ')}`);
    if (char.bodyType !== 'average') charParts.push(`Build: ${char.bodyType}`);
    if (char.customNotes) charParts.push(`Notes: ${char.customNotes}`);
    sections.push(`Character:\n${charParts.join('\n')}`);
  }

  if (data.sections.logo && data.logoDataUrl) {
    sections.push('Logo: A brand logo has been provided (available as reference image).');
  }

  if (data.sections.photos && data.photos && data.photos.length > 0) {
    sections.push(`Reference Photos: ${data.photos.length} reference photo(s) have been provided.`);
  }

  if (data.sections.videoRef && data.videoRefUrl) {
    sections.push(`Video Reference URL: ${data.videoRefUrl}`);
  }

  const styleLabel = stylePreset?.labelKey ?? 'cinematic';
  const styleId = stylePreset?.id ?? 'cinematic';
  sections.push(`Visual Style: ${styleLabel} (${styleId})\nOverall Mood: ${data.mood}\nShot Count: ${shotRange.min}-${shotRange.max}`);

  const contentBlock = sections.join('\n\n');

  if (language === 'he') {
    return `צור סטוריבורד לפרויקט הבא. כתוב את כל התיאורים הויזואליים (environment, character, props) באנגלית לצורך יצירת תמונות AI. כתוב את כל הדיאלוגים בעברית.

סוג הפרויקט: custom (מותאם אישית)

${contentBlock}

═══ משימה ═══
1. קרא את תיאור הפרויקט בעיון — הבן את הקונספט, המסר והחזון
2. צור סטוריבורד שמגשים את החזון מתחילתו ועד סופו
3. כל שוט צריך לקדם את הנרטיב — אם אפשר להסיר שוט בלי לפגוע בסיפור, הוא מיותר
4. הגדר projectType כ-"custom"
5. intro ו-outro יכולים להיות null אלא אם התוכן דורש אותם`;
  }

  return `Create a storyboard for the following project. Write all visual descriptions (environment, character, props) in English for AI image generation. Write all dialogue in English.

Project Type: custom (freeform)

${contentBlock}

═══ YOUR TASK ═══
1. Read the project description carefully — understand the concept, message, and vision
2. Create a storyboard that brings this vision to life from beginning to end
3. Every shot must advance the narrative — if a shot can be removed without breaking the story, it is unnecessary
4. Set projectType to "custom"
5. Intro and outro can be null unless the content specifically requires them`;
}

function buildEventPromoUserMessage(data: EventPromoData, language: 'en' | 'he'): string {
  const style = VISUAL_STYLE_PRESETS.find(s => s.id === data.visualStyle);
  const parts = [
    `Ad Type: ${data.adType}`,
    `Platform: ${data.platform}`,
    `Brand: ${data.brandName || '(not specified)'}`,
    data.productImageUrl ? `Product Image: provided (use as visual reference)` : '',
    data.logoUrl ? `Logo: provided` : '',
    data.brandColors.length > 0 ? `Brand Colors: ${data.brandColors.join(', ')}` : '',
    data.usps.length > 0 ? `Selling Points:\n${data.usps.map(u => `- ${u}`).join('\n')}` : '',
    data.cta ? `Call to Action: ${data.cta}` : '',
    data.targetAudience ? `Target Audience: ${data.targetAudience}` : '',
    data.pricing ? `Pricing: ${data.pricing}` : '',
    `Visual Style: ${style?.labelKey ?? data.visualStyle}`,
    `Mood: ${data.mood}`,
  ].filter(Boolean);

  const isHe = language === 'he';
  return `${isHe ? 'צור סטוריבורד לפרסומת מוצר/שירות.' : 'Create an event-promo storyboard.'} ${isHe ? 'כתוב תיאורים ויזואליים באנגלית וטקסט שיווקי ב' + language + '.' : 'Write visual descriptions in English and marketing text in English.'}

═══ ${isHe ? 'פרטי הפרסומת' : 'AD DETAILS'} ═══
${parts.join('\n')}

═══ ${isHe ? 'משימה' : 'TASK'} ═══
${isHe
  ? 'צור סטוריבורד קצר (4-8 שוטים) שמקדם את המוצר/שירות בצורה אטרקטיבית. התחל עם הוק ויזואלי, הצג את היתרונות, וסיים עם CTA חזק.'
  : 'Create a short storyboard (4-8 shots) that promotes the product/service attractively. Open with a visual hook, showcase the benefits, and end with a strong CTA.'}`;
}

function buildInvitationUserMessage(data: InvitationData, language: 'en' | 'he'): string {
  const style = VISUAL_STYLE_PRESETS.find(s => s.id === data.visualStyle);
  const parts = [
    `Event Type: ${data.eventType}`,
    data.eventName ? `Event Name: ${data.eventName}` : '',
    data.date ? `Date: ${data.date}` : '',
    data.time ? `Time: ${data.time}` : '',
    data.location ? `Location: ${data.location}` : '',
    data.rsvpMethod ? `RSVP: ${data.rsvpMethod}` : '',
    data.celebrantPhotoUrl ? `Celebrant Photo: provided` : '',
    data.colorScheme.length > 0 ? `Color Scheme: ${data.colorScheme.join(', ')}` : '',
    data.personalMessage ? `Personal Message: ${data.personalMessage}` : '',
    `Visual Style: ${style?.labelKey ?? data.visualStyle}`,
    `Mood: ${data.mood}`,
  ].filter(Boolean);

  const isHe = language === 'he';
  return `${isHe ? 'צור סטוריבורד להזמנה לאירוע.' : 'Create an invitation storyboard.'}

═══ ${isHe ? 'פרטי האירוע' : 'EVENT DETAILS'} ═══
${parts.join('\n')}

═══ ${isHe ? 'משימה' : 'TASK'} ═══
${isHe
  ? 'צור סטוריבורד מרגש (4-8 שוטים) שמזמין אנשים לאירוע. התחל עם הוק רגשי, הצג את הפרטים (תאריך, מיקום), וסיים עם ההודעה האישית וה-RSVP.'
  : 'Create an emotionally engaging storyboard (4-8 shots) that invites people to the event. Open with an emotional hook, present the details (date, venue), and close with the personal message and RSVP.'}`;
}

function buildMusicVideoUserMessage(data: MusicVideoData, language: 'en' | 'he'): string {
  const style = VISUAL_STYLE_PRESETS.find(s => s.id === data.visualStyle);
  const sections = data.songSections.map(s => `  ${s.type}: "${s.label}" ${s.lyrics ? `— ${s.lyrics.substring(0, 80)}...` : ''}`).join('\n');
  const parts = [
    data.musicFileName ? `Song: ${data.musicFileName}` : '',
    data.bpm ? `BPM: ${data.bpm}` : '',
    data.duration ? `Duration: ${Math.floor(data.duration / 60)}:${String(Math.floor(data.duration % 60)).padStart(2, '0')}` : '',
    data.songSections.length > 0 ? `Song Structure:\n${sections}` : '',
    data.fullLyrics ? `Full Lyrics:\n${data.fullLyrics}` : '',
    data.artistPhotoUrls.length > 0 ? `Artist Photos: ${data.artistPhotoUrls.length} provided` : '',
    data.visualConcept ? `Visual Concept: ${data.visualConcept}` : '',
    `Visual Style: ${style?.labelKey ?? data.visualStyle}`,
    `Mood: ${data.mood}`,
  ].filter(Boolean);

  const isHe = language === 'he';
  return `${isHe ? 'צור סטוריבורד לקליפ מוזיקלי.' : 'Create a music video storyboard.'}

═══ ${isHe ? 'פרטי השיר' : 'SONG DETAILS'} ═══
${parts.join('\n')}

═══ ${isHe ? 'משימה' : 'TASK'} ═══
${isHe
  ? 'צור סטוריבורד (6-12 שוטים) שמספר סיפור ויזואלי מסונכרן למבנה השיר. כל חלק בשיר (בית, פזמון, גשר) צריך תמונה ויזואלית ייחודית. בנה מתח ויזואלי שמגיע לשיא בפזמון.'
  : 'Create a storyboard (6-12 shots) telling a visual story synced to the song structure. Each section (verse, chorus, bridge) needs unique visuals. Build visual tension peaking at the chorus.'}`;
}

function buildRecapVideoUserMessage(data: RecapVideoData, language: 'en' | 'he'): string {
  const style = VISUAL_STYLE_PRESETS.find(s => s.id === data.visualStyle);
  const selectedPhotos = data.photos.filter(p => p.selected);
  const tagSummary = selectedPhotos.reduce((acc, p) => { acc[p.tag] = (acc[p.tag] || 0) + 1; return acc; }, {} as Record<string, number>);
  const parts = [
    data.eventName ? `Event: ${data.eventName}` : '',
    `Photos: ${selectedPhotos.length} selected out of ${data.photos.length}`,
    Object.keys(tagSummary).length > 0 ? `Photo Tags: ${Object.entries(tagSummary).map(([k, v]) => `${k}(${v})`).join(', ')}` : '',
    data.voiceoverText ? `Voiceover/Narrative: ${data.voiceoverText}` : '',
    `Music Mood: ${data.musicMood}`,
    `Visual Style: ${style?.labelKey ?? data.visualStyle}`,
    `Mood: ${data.mood}`,
  ].filter(Boolean);

  const isHe = language === 'he';
  return `${isHe ? 'צור סטוריבורד לסרטון סיכום אירוע.' : 'Create a recap video storyboard.'}

═══ ${isHe ? 'פרטי הסיכום' : 'RECAP DETAILS'} ═══
${parts.join('\n')}

═══ ${isHe ? 'משימה' : 'TASK'} ═══
${isHe
  ? 'צור סטוריבורד קצב מהיר (4-8 שוטים) שמציג את היילייטים מהאירוע. פתח עם תמונה חזקה, הצג רגעים מגוונים (קהל, פרטים, רגשות), וסיים עם רגע מסכם.'
  : 'Create a fast-paced storyboard (4-8 shots) showcasing event highlights. Open with a strong shot, show varied moments (crowd, details, emotions), and close with a summary moment.'}`;
}

function buildBrandRevealUserMessage(data: BrandRevealData, language: 'en' | 'he'): string {
  const style = VISUAL_STYLE_PRESETS.find(s => s.id === data.visualStyle);
  const parts = [
    data.brandName ? `Brand: ${data.brandName}` : '',
    data.tagline ? `Tagline: ${data.tagline}` : '',
    data.logoUrl ? `Logo: provided` : '',
    data.brandColors.length > 0 ? `Brand Colors: ${data.brandColors.join(', ')}` : '',
    `Industry: ${data.industry}`,
    `Reveal Style: ${data.revealStyle}`,
    `Logo Animation: ${data.animationStyle}`,
    `Sound Design: ${data.soundDesign}`,
    data.backgroundAtmosphere ? `Background Atmosphere: ${data.backgroundAtmosphere}` : '',
    `Visual Style: ${style?.labelKey ?? data.visualStyle}`,
    `Mood: ${data.mood}`,
  ].filter(Boolean);

  const isHe = language === 'he';
  return `${isHe ? 'צור סטוריבורד לחשיפת מותג/לוגו.' : 'Create a brand/logo reveal storyboard.'}

═══ ${isHe ? 'פרטי המותג' : 'BRAND DETAILS'} ═══
${parts.join('\n')}

═══ ${isHe ? 'משימה' : 'TASK'} ═══
${isHe
  ? 'צור סטוריבורד קצר (3-6 שוטים) שחושף את הלוגו/מותג בצורה קולנועית. בנה מתח עם אלמנטים מופשטים, חשוף את הלוגו בשיא, וסיים עם הסלוגן.'
  : 'Create a short storyboard (3-6 shots) with a cinematic brand reveal. Build tension with abstract elements, reveal the logo at the climax, and close with the tagline.'}`;
}

/**
 * Collect all uploaded images from wizard data for multimodal Claude request.
 * Returns labeled image blocks for logos, product images, celebrant photos, etc.
 */
function collectWizardImages(input: IdeaWizardInput | WizardInput): Array<{ label: string; dataUrl: string }> {
  const images: Array<{ label: string; dataUrl: string }> = [];

  if (!isWizardInput(input) || !('videoType' in input)) return images;
  const wizInput = input as WizardInputType;

  // Custom flow: logo + photos
  if (wizInput.customData) {
    if (wizInput.customData.logoDataUrl) {
      images.push({ label: 'Brand Logo', dataUrl: wizInput.customData.logoDataUrl });
    }
    if (wizInput.customData.photos) {
      wizInput.customData.photos.forEach((photo, i) => {
        images.push({ label: `Reference Photo ${i + 1}`, dataUrl: photo.dataUrl });
      });
    }
  }

  // Event Promo: product image + logo
  if (wizInput.eventPromo) {
    if (wizInput.eventPromo.productImageUrl?.startsWith('data:')) {
      images.push({ label: 'Product Image', dataUrl: wizInput.eventPromo.productImageUrl });
    }
    if (wizInput.eventPromo.logoUrl?.startsWith('data:')) {
      images.push({ label: 'Brand Logo', dataUrl: wizInput.eventPromo.logoUrl });
    }
  }

  // Invitation: celebrant photo
  if (wizInput.invitation?.celebrantPhotoUrl?.startsWith('data:')) {
    images.push({ label: 'Celebrant Photo', dataUrl: wizInput.invitation.celebrantPhotoUrl });
  }

  // Brand Reveal: logo
  if (wizInput.brandReveal?.logoUrl?.startsWith('data:')) {
    images.push({ label: 'Brand Logo', dataUrl: wizInput.brandReveal.logoUrl });
  }

  // Recap Video: selected photos (limit to first 5 to avoid huge requests)
  if (wizInput.recapVideo?.photos) {
    const selected = wizInput.recapVideo.photos
      .filter(p => p.selected !== false)
      .slice(0, 5);
    selected.forEach((photo, i) => {
      if (photo.url?.startsWith('data:')) {
        images.push({ label: `Event Photo ${i + 1}`, dataUrl: photo.url });
      }
    });
  }

  return images;
}

export async function generateStoryboardFromWizard(
  input: IdeaWizardInput | WizardInput,
  language: 'en' | 'he',
  projectType: ProjectType = 'talking-character'
): Promise<ClaudeStoryboardResult> {
  const claudeApiKey = useSettingsStore.getState().claudeApiKey;
  if (!claudeApiKey) {
    return {
      success: false,
      error: language === 'he' ? 'חסר מפתח Claude API. הגדר אותו בהגדרות.' : 'Missing Claude API key. Set it in Settings.',
    };
  }

  const systemPrompt = buildWizardSystemPrompt(input, projectType);
  const userMessage = buildWizardUserMessage(input, language, projectType);

  // Collect uploaded images for multimodal request
  const wizardImages = collectWizardImages(input);

  // Build content blocks: text + images
  const contentBlocks: Array<Record<string, unknown>> = [];

  // Add text prompt first
  contentBlocks.push({ type: 'text', text: userMessage });

  // Add images as vision content blocks (Claude multimodal API)
  for (const img of wizardImages) {
    try {
      const { data: base64Data, mediaType } = extractBase64Data(img.dataUrl);
      if (base64Data) {
        // Add label before image so Claude knows what it's looking at
        contentBlocks.push({ type: 'text', text: `[Attached: ${img.label}]` });
        contentBlocks.push({
          type: 'image',
          source: {
            type: 'base64',
            media_type: mediaType,
            data: base64Data,
          },
        });
      }
    } catch {
      console.warn(`Failed to process image: ${img.label}`);
    }
  }

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
        messages: [{ role: 'user', content: contentBlocks.length > 1 ? contentBlocks : userMessage }],
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
   Bot Prompt → Image Prompt conversion
   User describes what they want in natural language, Claude converts
   it to a professional AI image generation prompt.
   ══════════════════════════════════════════════════════════════════════ */

const BOT_PROMPT_SYSTEM = `You are an expert AI image prompt engineer. The user will describe what they want for a video frame in natural language (possibly in Hebrew). Your job is to convert their description into a professional, detailed image generation prompt in ENGLISH.

RULES:
- Output ONLY the image prompt text — no explanations, no quotes, no markdown
- Write in English regardless of input language
- Include: scene composition, lighting, colors, textures, camera angle, mood
- Describe a STATIC moment (photograph) — no motion or action verbs
- Be specific about visual details: surfaces, materials, light direction, color palette
- If the user mentions a character, describe their pose, expression, and position in the scene
- Keep the prompt between 50-150 words — detailed but focused
- Match the style/mood context provided
- If project context is provided, use it to maintain consistency with the overall video concept
- If reference images are attached, use them as visual inspiration for style, colors, and composition
- Consider the shot's position in the sequence (shot index / total) for narrative progression`;

export interface BotPromptContext {
  shotTitle?: string;
  character?: { appearance: string; outfit: string };
  environment?: { setting: string; lighting: string; atmosphere: string };
  mood?: string;
  cameraAngle?: string;
  visualStyle?: string;
  // Enriched context
  shotIndex?: number;
  totalShots?: number;
  projectType?: string;
  projectDescription?: string;
  wizardSummary?: string;
  referenceImages?: { dataUrl: string; label: string }[];
}

export interface BotPromptResult {
  success: boolean;
  prompt?: string;
  error?: string;
}

/**
 * Build a compact summary of wizard metadata for bot prompt context.
 */
export function buildWizardSummary(metadata?: WizardMetadata): string {
  if (!metadata) return '';
  const parts: string[] = [];
  const d = metadata.data;

  if (d.character && typeof d.character === 'object') {
    const c = d.character as Record<string, unknown>;
    if (c.type) parts.push(`Character: ${c.type} ${c.gender || ''} ${c.ageRange || ''}`);
  }
  if (d.eventPromo && typeof d.eventPromo === 'object') {
    const ep = d.eventPromo as Record<string, unknown>;
    if (ep.brandName) parts.push(`Brand: ${ep.brandName}`);
    if (ep.cta) parts.push(`CTA: ${ep.cta}`);
    if (ep.targetAudience) parts.push(`Audience: ${ep.targetAudience}`);
  }
  if (d.invitation && typeof d.invitation === 'object') {
    const inv = d.invitation as Record<string, unknown>;
    if (inv.eventType) parts.push(`Event: ${inv.eventType}`);
    if (inv.eventName) parts.push(`Name: ${inv.eventName}`);
    if (inv.date) parts.push(`Date: ${inv.date}`);
    if (inv.location) parts.push(`Location: ${inv.location}`);
  }
  if (d.musicVideo && typeof d.musicVideo === 'object') {
    const mv = d.musicVideo as Record<string, unknown>;
    if (mv.musicFileName) parts.push(`Song: ${mv.musicFileName}`);
    if (mv.bpm) parts.push(`BPM: ${mv.bpm}`);
    if (mv.visualConcept) parts.push(`Concept: ${String(mv.visualConcept).slice(0, 100)}`);
  }
  if (d.recapVideo && typeof d.recapVideo === 'object') {
    const rv = d.recapVideo as Record<string, unknown>;
    if (rv.eventName) parts.push(`Event: ${rv.eventName}`);
    if (rv.musicMood) parts.push(`Music mood: ${rv.musicMood}`);
  }
  if (d.brandReveal && typeof d.brandReveal === 'object') {
    const br = d.brandReveal as Record<string, unknown>;
    if (br.brandName) parts.push(`Brand: ${br.brandName}`);
    if (br.tagline) parts.push(`Tagline: ${br.tagline}`);
    if (br.industry) parts.push(`Industry: ${br.industry}`);
    if (br.revealStyle) parts.push(`Reveal: ${br.revealStyle}`);
  }
  if (d.story && typeof d.story === 'object') {
    const s = d.story as Record<string, unknown>;
    if (s.idea && typeof s.idea === 'string' && s.idea.trim()) {
      parts.push(`Story: ${s.idea.slice(0, 150)}`);
    }
  }

  return parts.join('\n');
}

export async function convertBotPromptToImagePrompt(
  userInstruction: string,
  context: BotPromptContext
): Promise<BotPromptResult> {
  const claudeApiKey = useSettingsStore.getState().claudeApiKey;

  const contextParts: string[] = [];
  if (context.shotTitle) contextParts.push(`Shot: ${context.shotTitle}`);
  if (context.shotIndex != null && context.totalShots) {
    contextParts.push(`Position: Shot ${context.shotIndex + 1} of ${context.totalShots}`);
  }
  if (context.projectType) contextParts.push(`Video type: ${context.projectType}`);
  if (context.character?.appearance) contextParts.push(`Character: ${context.character.appearance}, ${context.character.outfit}`);
  if (context.environment?.setting) contextParts.push(`Environment: ${context.environment.setting}`);
  if (context.environment?.lighting) contextParts.push(`Lighting: ${context.environment.lighting}`);
  if (context.environment?.atmosphere) contextParts.push(`Atmosphere: ${context.environment.atmosphere}`);
  if (context.mood) contextParts.push(`Mood: ${context.mood}`);
  if (context.cameraAngle) contextParts.push(`Camera: ${context.cameraAngle}`);
  if (context.visualStyle) contextParts.push(`Style: ${context.visualStyle}`);
  if (context.projectDescription) contextParts.push(`Project: ${context.projectDescription.slice(0, 200)}`);
  if (context.wizardSummary) contextParts.push(`--- Project details ---\n${context.wizardSummary}`);

  const contextBlock = contextParts.length > 0
    ? `\n\nCurrent shot context:\n${contextParts.join('\n')}`
    : '';

  // Build message content — text or multimodal with reference images
  const hasRefImages = context.referenceImages && context.referenceImages.length > 0;
  let messageContent: unknown;

  if (hasRefImages) {
    const imageBlocks = context.referenceImages!.slice(0, 3).map((img) => {
      const match = img.dataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (!match) return null;
      return {
        type: 'image',
        source: { type: 'base64', media_type: match[1], data: match[2] },
      };
    }).filter(Boolean);

    messageContent = [
      ...imageBlocks,
      { type: 'text', text: `${userInstruction}${contextBlock}\n\n(The images above are visual references — use them as style/composition inspiration)` },
    ];
  } else {
    messageContent = `${userInstruction}${contextBlock}`;
  }

  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (claudeApiKey) headers['x-claude-key'] = claudeApiKey;

    const res = await fetch('/api/claude/v1/messages', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: BOT_PROMPT_SYSTEM,
        messages: [{ role: 'user', content: messageContent }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: `Claude API error (${res.status}): ${text}` };
    }

    const data = await res.json();
    const prompt = data.content?.[0]?.text?.trim();
    if (!prompt) {
      return { success: false, error: 'Empty response from Claude' };
    }

    return { success: true, prompt };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: message };
  }
}

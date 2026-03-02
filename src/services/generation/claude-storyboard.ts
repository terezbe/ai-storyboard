import { useSettingsStore } from '../../store/settings-store';

const STORYBOARD_SYSTEM_PROMPT = `You are a professional storyboard creator for video productions.
Given a video idea, break it down into a complete storyboard.

You MUST respond with valid JSON only - no markdown, no explanation, no extra text.

The JSON must follow this exact schema:
{
  "projectName": "string - short project name",
  "projectType": "one of: talking-character, music-video, event-promo, invitation, recap-video, custom",
  "language": "he or en - match the user's language",
  "intro": null or { ... } (see below),
  "shots": [ ... ],
  "outro": null or { ... } (see below)
}

INTRO/OUTRO RULES:
- For "talking-character" and "invitation" projects: INCLUDE intro and outro
- For all other project types (music-video, event-promo, recap-video, custom): set intro and outro to null
- When included, intro/outro schema:
  {
    "title": "Intro" or "Outro",
    "backgroundDescription": "visual description",
    "textOverlay": "text shown on screen",
    "duration": 5,
    "musicReference": "description of music",
    "showLogo": true
  }

SHOT schema:
{
  "title": "short title for this shot",
  "environment": {
    "setting": "where does this take place",
    "lighting": "lighting description",
    "props": "objects in the scene",
    "atmosphere": "overall feel"
  },
  "character": {
    "appearance": "character look",
    "outfit": "what they wear",
    "expression": "facial expression",
    "action": "what they're doing"
  },
  "dialogue": {
    "text": "what is said (if any)",
    "voiceStyle": "tone of voice",
    "language": "he or en"
  },
  "cameraAngle": "one of: wide-shot, medium-shot, close-up, extreme-close-up, over-the-shoulder, birds-eye, low-angle, high-angle, dutch-angle, tracking, pan, zoom-in, zoom-out",
  "duration": 8,
  "mood": "one of: energetic, romantic, dramatic, festive, emotional, funny, elegant, mysterious, calm, exciting",
  "transition": "one of: cut, fade, dissolve, wipe, slide, zoom, none",
  "notes": "director notes"
}

CRITICAL - IMAGE AS FIRST VIDEO FRAME:
Each shot's image will be used as the FIRST FRAME of a video clip (image-to-video generation).
When describing environments and characters, think of it as the OPENING FRAME of that shot:
- Describe the exact moment the shot begins (character pose, position, expression at start)
- The scene should look like a freeze-frame from the beginning of the clip
- Include motion cues in notes (e.g. "character will walk toward camera", "camera will pan left")
- The environment description is what the viewer sees at frame 1

Guidelines:
- Create 4-8 shots for a typical video (adjust based on complexity)
- Each shot should be visually distinct and advance the story
- Use varied camera angles for visual interest
- Match mood and transitions to the story flow
- Environment descriptions should be detailed enough for AI image generation
- Character descriptions should be specific and consistent across shots
- Write all visual descriptions in English (for image generation models)
- Write dialogue in the user's language
- Duration in seconds (shots: 5-12s, intro/outro: 3-7s)`;

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
    ? `צור סטוריבורד לרעיון הבא. כתוב את כל התיאורים הויזואליים באנגלית (לצורך יצירת תמונות) ואת הדיאלוגים בעברית:\n\n${idea}`
    : `Create a storyboard for the following idea:\n\n${idea}`;

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

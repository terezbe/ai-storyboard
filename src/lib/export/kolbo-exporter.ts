import type { Project } from '../../types/project';

export function exportToKolboPrompts(project: Project): string {
  const { storyboard, name, type } = project;
  const totalDuration =
    (storyboard.intro?.duration || 0) +
    storyboard.shots.reduce((sum, s) => sum + s.duration, 0) +
    (storyboard.outro?.duration || 0);

  let output = '';
  output += `====================================\n`;
  output += `PROJECT: ${name}\n`;
  output += `Type: ${type} | Shots: ${storyboard.shots.length} | Duration: ${totalDuration}s\n`;
  output += `====================================\n\n`;

  // Intro
  if (storyboard.intro) {
    output += `--- INTRO ---\n`;
    output += `Duration: ${storyboard.intro.duration}s\n\n`;
    if (storyboard.intro.prompts.background) {
      output += `  Background Prompt [${storyboard.intro.prompts.background.targetModel}]:\n`;
      output += `  ${storyboard.intro.prompts.background.text}\n\n`;
    }
    if (storyboard.intro.prompts.music) {
      output += `  Music Prompt [${storyboard.intro.prompts.music.targetModel}]:\n`;
      output += `  ${storyboard.intro.prompts.music.text}\n\n`;
    }
  }

  // Shots
  for (const shot of storyboard.shots) {
    output += `--- SHOT ${shot.orderIndex + 1}: ${shot.title} ---\n`;
    output += `Duration: ${shot.duration}s | Camera: ${shot.cameraAngle} | Mood: ${shot.mood}\n\n`;

    if (shot.prompts.environment) {
      output += `  Environment [${shot.prompts.environment.targetModel}]:\n`;
      output += `  ${shot.prompts.environment.text}\n\n`;
    }
    if (shot.prompts.character) {
      output += `  Character [${shot.prompts.character.targetModel}]:\n`;
      output += `  ${shot.prompts.character.text}\n\n`;
    }
    if (shot.prompts.music) {
      output += `  Music [${shot.prompts.music.targetModel}]:\n`;
      output += `  ${shot.prompts.music.text}\n\n`;
    }
    if (shot.prompts.video) {
      output += `  Video [${shot.prompts.video.targetModel}]:\n`;
      output += `  ${shot.prompts.video.text}\n\n`;
    }
    if (shot.dialogue.text) {
      output += `  Dialogue:\n`;
      output += `  "${shot.dialogue.text}"\n`;
      if (shot.dialogue.voiceStyle) output += `  Voice: ${shot.dialogue.voiceStyle}\n`;
      output += '\n';
    }
  }

  // Outro
  if (storyboard.outro) {
    output += `--- OUTRO ---\n`;
    output += `Duration: ${storyboard.outro.duration}s\n\n`;
    if (storyboard.outro.prompts.background) {
      output += `  Background Prompt [${storyboard.outro.prompts.background.targetModel}]:\n`;
      output += `  ${storyboard.outro.prompts.background.text}\n\n`;
    }
    if (storyboard.outro.prompts.music) {
      output += `  Music Prompt [${storyboard.outro.prompts.music.targetModel}]:\n`;
      output += `  ${storyboard.outro.prompts.music.text}\n\n`;
    }
  }

  return output;
}

export function exportToJson(project: Project): string {
  return JSON.stringify(
    {
      version: '1.0',
      projectName: project.name,
      projectType: project.type,
      language: project.language,
      intro: project.storyboard.intro,
      shots: project.storyboard.shots,
      outro: project.storyboard.outro,
    },
    null,
    2
  );
}

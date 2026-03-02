import { useCallback } from 'react';
import { useProjectStore } from '../store/project-store';
import { useSettingsStore } from '../store/settings-store';
import { useGenerationStore } from '../store/generation-store';
import {
  generateImageForShot,
  generateVideoForShot,
  generateAngleVariation as generateAngleVariationService,
} from '../services/generation/generation-service';
import type { Shot } from '../types/project';

/** When a shot has an image, always use an image-to-video model so the image becomes the first frame */
const IMAGE_TO_VIDEO_MODEL = 'fal-ai/kling-video/v2.1/master/image-to-video';

export function useGeneration() {
  const { updateShot, currentProject, saveProject } = useProjectStore();
  const { preferredImageModel, preferredVideoModel } = useSettingsStore();
  const { setImageStatus, setVideoStatus, setBatch, resetBatch } = useGenerationStore();

  const generateImage = useCallback(
    async (shot: Shot) => {
      const prompt = shot.prompts.environment?.text || shot.prompts.character?.text;
      if (!prompt) {
        setImageStatus(shot.id, 'error', 'No prompt available. Generate prompts first.');
        return;
      }

      setImageStatus(shot.id, 'generating');
      try {
        const result = await generateImageForShot(prompt, preferredImageModel);
        updateShot(shot.id, { imageUrl: result.imageUrl });
        setImageStatus(shot.id, 'completed');
        saveProject();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Image generation failed';
        setImageStatus(shot.id, 'error', message);
      }
    },
    [preferredImageModel, updateShot, setImageStatus, saveProject]
  );

  const generateVideo = useCallback(
    async (shot: Shot) => {
      const prompt = shot.prompts.video?.text || shot.videoPrompt;
      if (!prompt) {
        setVideoStatus(shot.id, 'error', 'No video prompt available. Generate prompts first.');
        return;
      }

      // If the shot has an image, use image-to-video model so the image is the first frame
      const videoModel = shot.imageUrl ? IMAGE_TO_VIDEO_MODEL : preferredVideoModel;

      setVideoStatus(shot.id, 'generating');
      try {
        const result = await generateVideoForShot(
          prompt,
          videoModel,
          shot.imageUrl,
          shot.duration
        );
        updateShot(shot.id, { videoUrl: result.videoUrl });
        setVideoStatus(shot.id, 'completed');
        saveProject();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Video generation failed';
        setVideoStatus(shot.id, 'error', message);
      }
    },
    [preferredVideoModel, updateShot, setVideoStatus, saveProject]
  );

  /**
   * Generate an angle variation of an existing image.
   * Takes the shot's current imageUrl and sends it to the Qwen Multi-Angle model
   * with the shot's angleRotation/angleTilt/angleZoom values.
   * The result replaces the shot's image while preserving the scene.
   */
  const generateAngleVariation = useCallback(
    async (shot: Shot) => {
      if (!shot.imageUrl) {
        setImageStatus(shot.id, 'error', 'No source image to adjust. Generate an image first.');
        return;
      }

      // Map our slider ranges to the model's expected ranges:
      // rotation: -180..180 → horizontal_angle: 0..360
      const rawRotation = shot.angleRotation ?? 0;
      const horizontalAngle = ((rawRotation % 360) + 360) % 360;

      // tilt: -90..90 → vertical_angle: -30..90 (clamped)
      const rawTilt = shot.angleTilt ?? 0;
      const verticalAngle = Math.max(-30, Math.min(90, rawTilt));

      // zoom: -100..100 → zoom: 0..10 (mapped linearly: -100→0, 0→5, 100→10)
      const rawZoom = shot.angleZoom ?? 0;
      const zoom = Math.round(((rawZoom + 100) / 200) * 10 * 10) / 10; // 1 decimal

      setImageStatus(shot.id, 'generating');
      try {
        const result = await generateAngleVariationService(
          shot.imageUrl,
          horizontalAngle,
          verticalAngle,
          zoom
        );
        updateShot(shot.id, { imageUrl: result.imageUrl });
        setImageStatus(shot.id, 'completed');
        saveProject();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Angle variation failed';
        setImageStatus(shot.id, 'error', message);
      }
    },
    [updateShot, setImageStatus, saveProject]
  );

  const generateAllImages = useCallback(async () => {
    if (!currentProject) return;
    const shots = currentProject.storyboard.shots;
    const shotsWithPrompts = shots.filter(
      (s) => !s.imageUrl && (s.prompts.environment?.text || s.prompts.character?.text)
    );

    if (shotsWithPrompts.length === 0) return;

    setBatch({ total: shotsWithPrompts.length, completed: 0, current: 0, isRunning: true });

    for (let i = 0; i < shotsWithPrompts.length; i++) {
      setBatch({ current: i });
      // Re-read the shot from the current project state to get the latest data
      const freshShots = useProjectStore.getState().currentProject?.storyboard.shots;
      const freshShot = freshShots?.find((s) => s.id === shotsWithPrompts[i].id) || shotsWithPrompts[i];
      await generateImage(freshShot);
      setBatch({ completed: i + 1 });
    }

    // Keep the completed state visible briefly
    setTimeout(() => resetBatch(), 2000);
  }, [currentProject, generateImage, setBatch, resetBatch]);

  return { generateImage, generateVideo, generateAngleVariation, generateAllImages };
}

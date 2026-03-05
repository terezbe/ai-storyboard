import { useCallback } from 'react';
import { useProjectStore } from '../store/project-store';
import { useSettingsStore } from '../store/settings-store';
import { useGenerationStore } from '../store/generation-store';
import {
  generateImageForShot,
  generateVideoForShot,
  generateAngleVariation as generateAngleVariationService,
  generateCharacterShot,
  generateImageToImageForShot,
} from '../services/generation/generation-service';
import { getImg2ImgStrength } from '../lib/img2img-strength';
import { compositeLogoOnBackground } from '../lib/image-utils';
import type { Shot } from '../types/project';

/**
 * Smart model selection: picks the right video model based on shot properties.
 * - Dialogue shots with audio enabled → Kling v2.6 Pro (img2vid with built-in audio generation)
 * - Dialogue shots with audio disabled → Kling v2.1 (cheaper, no audio)
 * - Image shots without dialogue → Kling v2.1 img2vid (preserves first frame)
 * - Otherwise → user's preferred model
 */
function pickVideoModel(shot: Shot, preferredVideoModel: string, enableAudio: boolean): string {
  const hasDialogue = !!(shot.dialogue?.text?.trim());
  const hasImage = !!shot.imageUrl;

  if (hasDialogue && enableAudio) {
    // Dialogue shots with audio → use Kling v2.6 Pro (img2vid with generate_audio=true)
    return 'fal-ai/kling-video/v2.6/pro/image-to-video';
  }

  if (hasImage) {
    // Has image (with or without dialogue but audio off) → use Kling img2vid (preserves first frame)
    return 'fal-ai/kling-video/v2.1/master/image-to-video';
  }

  // No image → use user's preferred model
  return preferredVideoModel;
}

export function useGeneration() {
  const { updateShot, currentProject, saveProject } = useProjectStore();
  const { preferredImageModel, preferredVideoModel, enableAudioGeneration } = useSettingsStore();
  const { setImageStatus, setVideoStatus, setBatch, resetBatch, setVideoBatch, resetVideoBatch } = useGenerationStore();

  const generateImage = useCallback(
    async (shot: Shot) => {
      const prompt = shot.prompts.environment?.text || shot.prompts.character?.text;
      if (!prompt) {
        setImageStatus(shot.id, 'error', 'No prompt available. Generate prompts first.');
        return;
      }

      setImageStatus(shot.id, 'generating');
      try {
        const project = useProjectStore.getState().currentProject;
        let result;

        const isCharacterShot = shot.shotCategory !== 'b-roll';
        const hasReference = !!project?.referenceImageUrl;
        const isBrandReveal = project?.type === 'brand-reveal';
        const logoUrl = isBrandReveal
          ? project?.wizardMetadata?.data?.brandReveal?.logoUrl || project?.referenceImageUrl
          : undefined;

        if (hasReference && isCharacterShot && !isBrandReveal) {
          // CHARACTER shot with reference → use Kontext for best character consistency
          // Prompt should describe ONLY the scene (not the character)
          try {
            result = await generateCharacterShot(prompt, project!.referenceImageUrl!);
          } catch {
            // Fallback to img2img if Kontext fails
            const strength = getImg2ImgStrength(shot.cameraAngle);
            result = await generateImageToImageForShot(prompt, project!.referenceImageUrl!, strength);
          }
        } else {
          // B-ROLL shot, brand-reveal, or no reference → standard text-to-image
          result = await generateImageForShot(prompt, preferredImageModel);
        }

        let finalImageUrl = result.imageUrl;

        // For brand-reveal: composite the logo onto shots that feature the logo
        if (isBrandReveal && logoUrl) {
          const promptLower = prompt.toLowerCase();
          const isLogoShot = promptLower.includes('logo') || promptLower.includes('brand') || promptLower.includes('reveal');
          if (isLogoShot) {
            try {
              finalImageUrl = await compositeLogoOnBackground(result.imageUrl, logoUrl);
            } catch (err) {
              console.warn('Logo composite failed, using original image:', err);
            }
          }
        }

        updateShot(shot.id, { imageUrl: finalImageUrl });
        setImageStatus(shot.id, 'completed');
        saveProject();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Image generation failed';
        setImageStatus(shot.id, 'error', message);
      }
    },
    [preferredImageModel, updateShot, setImageStatus, saveProject]
  );

  const generateVideoWithContinuity = useCallback(
    async (shot: Shot, firstFrameOverride?: string) => {
      const prompt = shot.prompts.video?.text || shot.videoPrompt;
      if (!prompt) {
        setVideoStatus(shot.id, 'error', 'No video prompt available.');
        return;
      }

      const hasDialogue = !!(shot.dialogue?.text?.trim());
      const audioEnabled = useSettingsStore.getState().enableAudioGeneration;
      let videoModel: string;
      let imageUrl: string | undefined;

      if (hasDialogue && audioEnabled) {
        // Dialogue with audio enabled → Kling v2.6 Pro img2vid with audio generation
        videoModel = 'fal-ai/kling-video/v2.6/pro/image-to-video';
        imageUrl = shot.imageUrl;
      } else if (firstFrameOverride) {
        // Frame continuity: use the provided frame as first frame → Kling img2vid
        videoModel = 'fal-ai/kling-video/v2.1/master/image-to-video';
        imageUrl = firstFrameOverride;
      } else if (shot.imageUrl) {
        // Has own image → Kling img2vid
        videoModel = 'fal-ai/kling-video/v2.1/master/image-to-video';
        imageUrl = shot.imageUrl;
      } else {
        videoModel = preferredVideoModel;
        imageUrl = undefined;
      }

      setVideoStatus(shot.id, 'generating');
      try {
        const result = await generateVideoForShot(prompt, videoModel, imageUrl, shot.duration);
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

  const generateVideo = useCallback(
    async (shot: Shot) => {
      const prompt = shot.prompts.video?.text || shot.videoPrompt;
      if (!prompt) {
        setVideoStatus(shot.id, 'error', 'No video prompt available. Generate prompts first.');
        return;
      }

      // Check per-shot continuity — extract last frame from previous shot if needed
      if (shot.continuityMode === 'continuity' && shot.orderIndex > 0) {
        const allShots = useProjectStore.getState().currentProject?.storyboard.shots;
        if (allShots) {
          const prevShot = allShots.find(s => s.orderIndex === shot.orderIndex - 1);
          if (prevShot?.videoUrl) {
            try {
              const { extractLastFrame } = await import('../lib/video-frame-utils');
              const lastFrame = await extractLastFrame(prevShot.videoUrl);
              await generateVideoWithContinuity(shot, lastFrame);
              return;
            } catch (err) {
              console.warn('Could not extract last frame, falling back to normal generation:', err);
            }
          }
        }
      }

      const videoModel = pickVideoModel(shot, preferredVideoModel, useSettingsStore.getState().enableAudioGeneration);
      const isTextOnly = videoModel.includes('minimax');
      const imageUrl = isTextOnly ? undefined : shot.imageUrl;

      setVideoStatus(shot.id, 'generating');
      try {
        const result = await generateVideoForShot(
          prompt,
          videoModel,
          imageUrl,
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
    [preferredVideoModel, updateShot, setVideoStatus, saveProject, generateVideoWithContinuity]
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

  const generateAllVideos = useCallback(
    async () => {
      if (!currentProject) return;
      const shots = currentProject.storyboard.shots;
      const shotsWithPrompts = shots.filter(
        (s) => !s.videoUrl && (s.prompts.video?.text || s.videoPrompt)
      );

      if (shotsWithPrompts.length === 0) return;

      setVideoBatch({ total: shotsWithPrompts.length, completed: 0, current: 0, isRunning: true });

      for (let i = 0; i < shotsWithPrompts.length; i++) {
        setVideoBatch({ current: i });
        const freshShots = useProjectStore.getState().currentProject?.storyboard.shots;
        const freshShot = freshShots?.find((s) => s.id === shotsWithPrompts[i].id) || shotsWithPrompts[i];

        let firstFrameOverride: string | undefined;

        // Use per-shot continuityMode instead of global toggle
        if (freshShot.continuityMode === 'continuity') {
          const currentShotIndex = shots.findIndex(s => s.id === freshShot.id);
          if (currentShotIndex > 0) {
            const prevShot = freshShots?.find(s => s.id === shots[currentShotIndex - 1].id) || shots[currentShotIndex - 1];
            if (prevShot.videoUrl) {
              try {
                const { extractLastFrame } = await import('../lib/video-frame-utils');
                firstFrameOverride = await extractLastFrame(prevShot.videoUrl);
              } catch (err) {
                console.warn('Could not extract last frame from previous shot:', err);
              }
            }
          }
        }

        await generateVideoWithContinuity(freshShot, firstFrameOverride);
        setVideoBatch({ completed: i + 1 });
      }

      setTimeout(() => resetVideoBatch(), 2000);
    },
    [currentProject, generateVideoWithContinuity, setVideoBatch, resetVideoBatch]
  );

  return { generateImage, generateVideo, generateVideoWithContinuity, generateAllImages, generateAllVideos, generateAngleVariation };
}

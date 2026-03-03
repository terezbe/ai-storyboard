import type { CameraAngle } from '../types/project';

/**
 * Map camera angle to img2img strength for Flux Dev img2img fallback.
 * Research shows Flux Dev needs 0.55-0.70 for character consistency.
 * Lower = preserves character better, higher = allows more scene change.
 */
const ANGLE_STRENGTH_MAP: Record<CameraAngle, number> = {
  'extreme-close-up': 0.55,
  'close-up': 0.58,
  'medium-shot': 0.63,
  'over-the-shoulder': 0.65,
  'wide-shot': 0.70,
  'tracking': 0.65,
  'pan': 0.68,
  'zoom-in': 0.60,
  'zoom-out': 0.70,
  'low-angle': 0.65,
  'high-angle': 0.65,
  'birds-eye': 0.72,
  'dutch-angle': 0.65,
};

export function getImg2ImgStrength(cameraAngle: CameraAngle): number {
  return ANGLE_STRENGTH_MAP[cameraAngle] ?? 0.63;
}

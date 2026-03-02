import type { CameraAngle, Mood, TransitionType, FocusMode, ExposureMode } from '../../types/project';

export const CAMERA_ANGLES: CameraAngle[] = [
  'wide-shot', 'medium-shot', 'close-up', 'extreme-close-up',
  'over-the-shoulder', 'birds-eye', 'low-angle', 'high-angle',
  'dutch-angle', 'tracking', 'pan', 'zoom-in', 'zoom-out',
];

export const MOODS: Mood[] = [
  'energetic', 'romantic', 'dramatic', 'festive', 'emotional',
  'funny', 'elegant', 'mysterious', 'calm', 'exciting',
];

export const TRANSITIONS: TransitionType[] = [
  'cut', 'fade', 'dissolve', 'wipe', 'slide', 'zoom', 'none',
];

export const FOCUS_MODES: FocusMode[] = [
  'shallow-dof', 'deep-focus', 'soft-focus', 'tilt-shift', 'rack-focus',
];

export const EXPOSURE_MODES: ExposureMode[] = [
  'natural', 'high-key', 'low-key', 'silhouette', 'overexposed', 'dramatic',
];

export const MOOD_COLORS: Record<string, string> = {
  energetic: '#f97316',
  romantic: '#ec4899',
  dramatic: '#dc2626',
  festive: '#a855f7',
  emotional: '#3b82f6',
  funny: '#facc15',
  elegant: '#a3a3a3',
  mysterious: '#6366f1',
  calm: '#22d3ee',
  exciting: '#ef4444',
};

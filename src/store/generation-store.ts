import { create } from 'zustand';

export type GenerationStatus = 'idle' | 'generating' | 'completed' | 'error';

interface ShotGenerationState {
  imageStatus: GenerationStatus;
  videoStatus: GenerationStatus;
  imageError?: string;
  videoError?: string;
}

interface BatchProgress {
  total: number;
  completed: number;
  current: number;
  isRunning: boolean;
}

interface GenerationState {
  shots: Record<string, ShotGenerationState>;
  batch: BatchProgress;
  setImageStatus: (shotId: string, status: GenerationStatus, error?: string) => void;
  setVideoStatus: (shotId: string, status: GenerationStatus, error?: string) => void;
  setBatch: (batch: Partial<BatchProgress>) => void;
  resetBatch: () => void;
}

const defaultBatch: BatchProgress = {
  total: 0,
  completed: 0,
  current: -1,
  isRunning: false,
};

export const useGenerationStore = create<GenerationState>()((set) => ({
  shots: {},
  batch: { ...defaultBatch },

  setImageStatus: (shotId, status, error) => {
    set((state) => ({
      shots: {
        ...state.shots,
        [shotId]: {
          imageStatus: status,
          videoStatus: state.shots[shotId]?.videoStatus ?? 'idle',
          imageError: error,
          videoError: state.shots[shotId]?.videoError,
        },
      },
    }));
  },

  setVideoStatus: (shotId, status, error) => {
    set((state) => ({
      shots: {
        ...state.shots,
        [shotId]: {
          imageStatus: state.shots[shotId]?.imageStatus ?? 'idle',
          videoStatus: status,
          imageError: state.shots[shotId]?.imageError,
          videoError: error,
        },
      },
    }));
  },

  setBatch: (batch) => {
    set((state) => ({ batch: { ...state.batch, ...batch } }));
  },

  resetBatch: () => {
    set({ batch: { ...defaultBatch } });
  },
}));

// Selector helpers — stable references for individual fields
export function useShotImageStatus(shotId: string): GenerationStatus {
  return useGenerationStore((s) => s.shots[shotId]?.imageStatus ?? 'idle');
}

export function useShotVideoStatus(shotId: string): GenerationStatus {
  return useGenerationStore((s) => s.shots[shotId]?.videoStatus ?? 'idle');
}

export function useShotImageError(shotId: string): string | undefined {
  return useGenerationStore((s) => s.shots[shotId]?.imageError);
}

export function useShotVideoError(shotId: string): string | undefined {
  return useGenerationStore((s) => s.shots[shotId]?.videoError);
}

import type { GenerationProvider } from './types';
import { FalProvider } from './fal-provider';

const providers: GenerationProvider[] = [new FalProvider()];

export function getProviderForModel(modelId: string): GenerationProvider {
  // All fal-ai and veed models go to FalProvider (same FAL.ai platform)
  if (modelId.startsWith('fal-ai/') || modelId.startsWith('veed/')) {
    return providers.find((p) => p.id === 'fal')!;
  }
  throw new Error(`No provider found for model: ${modelId}`);
}

export function getProvider(id: string): GenerationProvider | undefined {
  return providers.find((p) => p.id === id);
}

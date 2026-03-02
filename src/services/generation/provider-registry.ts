import type { GenerationProvider } from './types';
import { FalProvider } from './fal-provider';

const providers: GenerationProvider[] = [new FalProvider()];

export function getProviderForModel(modelId: string): GenerationProvider {
  // All fal-ai models go to FalProvider
  if (modelId.startsWith('fal-ai/')) {
    return providers.find((p) => p.id === 'fal')!;
  }
  throw new Error(`No provider found for model: ${modelId}`);
}

export function getProvider(id: string): GenerationProvider | undefined {
  return providers.find((p) => p.id === id);
}

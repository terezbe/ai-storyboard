export interface ImageGenerationRequest {
  prompt: string;
  modelId: string;
  params?: Record<string, unknown>;
}

export interface VideoGenerationRequest {
  prompt: string;
  modelId: string;
  imageUrl?: string;
  duration?: number;
  params?: Record<string, unknown>;
}

export interface ImageGenerationResult {
  imageUrl: string;
}

export interface VideoGenerationResult {
  videoUrl: string;
}

export interface GenerationProvider {
  id: string;
  name: string;
  generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResult>;
  generateVideo(request: VideoGenerationRequest): Promise<VideoGenerationResult>;
  testConnection(): Promise<boolean>;
}

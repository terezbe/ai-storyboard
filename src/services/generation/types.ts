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
  /** Dialogue text for TTS-based talking head models (e.g. VEED Fabric text) */
  dialogueText?: string;
  /** Voice description for TTS (e.g. "warm female voice, mid-30s") */
  voiceDescription?: string;
  params?: Record<string, unknown>;
}

export interface ImageGenerationResult {
  imageUrl: string;
}

export interface VideoGenerationResult {
  videoUrl: string;
}

export interface AngleVariationRequest {
  imageUrl: string;
  modelId: string;
  /** 0-360 horizontal rotation (0=front, 90=right, 180=back, 270=left) */
  horizontalAngle: number;
  /** -30 to 90 vertical angle (-30=low angle, 0=eye level, 90=bird's eye) */
  verticalAngle: number;
  /** 0-10 zoom/distance (0=wide, 5=normal, 10=close-up) */
  zoom: number;
  params?: Record<string, unknown>;
}

export interface ImageToImageRequest {
  prompt: string;
  modelId: string;
  imageUrl: string;
  strength?: number;
  params?: Record<string, unknown>;
}

export interface GenerationProvider {
  id: string;
  name: string;
  generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResult>;
  generateVideo(request: VideoGenerationRequest): Promise<VideoGenerationResult>;
  generateAngleVariation?(request: AngleVariationRequest): Promise<ImageGenerationResult>;
  generateImageToImage?(request: ImageToImageRequest): Promise<ImageGenerationResult>;
  testConnection(): Promise<boolean>;
}

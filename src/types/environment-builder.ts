export type EnvironmentCategory = 'indoor' | 'outdoor' | 'urban' | 'nature' | 'studio' | 'fantasy' | 'sci-fi' | 'abstract';
export type TimeOfDay = 'dawn' | 'morning' | 'noon' | 'afternoon' | 'golden-hour' | 'sunset' | 'dusk' | 'night';
export type WeatherCondition = 'clear' | 'cloudy' | 'rainy' | 'foggy' | 'snowy' | 'stormy' | 'windy';
export type LightingStyle = 'natural' | 'dramatic' | 'soft-diffused' | 'golden-warm' | 'neon-glow' | 'candlelight' | 'studio-3point' | 'silhouette' | 'volumetric' | 'moonlit';

export interface EnvironmentSetting {
  id: string;
  labelKey: string;
  category: EnvironmentCategory;
  promptFragment: string;
  emoji?: string;
}

export interface EnvironmentDefinition {
  category: EnvironmentCategory;
  settingId: string;
  customSetting: string;
  timeOfDay: TimeOfDay;
  weather: WeatherCondition;
  lighting: LightingStyle;
  customNotes: string;
}

export const DEFAULT_ENVIRONMENT: EnvironmentDefinition = {
  category: 'indoor',
  settingId: 'living-room',
  customSetting: '',
  timeOfDay: 'afternoon',
  weather: 'clear',
  lighting: 'natural',
  customNotes: '',
};

import type { Mood } from './project';
import type { CharacterDefinition } from './character-builder';
import type { ShotCountRange } from '../config/style-presets';

/* ═══════════════════════════════════════════════════════════════
   Type-specific wizard data interfaces.
   Each video type collects different inputs in its wizard flow.
   ═══════════════════════════════════════════════════════════════ */

// ─── Event Promo / Product Ad ──────────────────────────
export type AdType = 'product' | 'service' | 'event' | 'restaurant' | 'real-estate' | 'app';
export type AdPlatform = 'instagram-reel' | 'tiktok' | 'youtube-short' | 'facebook' | 'linkedin' | 'general';

export interface EventPromoData {
  adType: AdType;
  platform: AdPlatform;
  productImageUrl: string | null;
  logoUrl: string | null;
  brandColors: string[];
  brandName: string;
  usps: string[];
  cta: string;
  targetAudience: string;
  pricing: string;
  visualStyle: string;
  mood: Mood;
}

export const DEFAULT_EVENT_PROMO: EventPromoData = {
  adType: 'product',
  platform: 'instagram-reel',
  productImageUrl: null,
  logoUrl: null,
  brandColors: [],
  brandName: '',
  usps: [],
  cta: '',
  targetAudience: '',
  pricing: '',
  visualStyle: 'cinematic',
  mood: 'energetic',
};

// ─── Invitation ─────────────────────────────────────────
export type InvitationEventType =
  | 'birthday' | 'wedding' | 'bar-mitzvah' | 'bat-mitzvah'
  | 'engagement' | 'baby-shower' | 'anniversary' | 'graduation'
  | 'conference' | 'custom';

export interface InvitationData {
  eventType: InvitationEventType;
  eventName: string;
  date: string;
  time: string;
  location: string;
  rsvpMethod: string;
  celebrantPhotoUrl: string | null;
  colorScheme: string[];
  personalMessage: string;
  visualStyle: string;
  mood: Mood;
}

export const DEFAULT_INVITATION: InvitationData = {
  eventType: 'birthday',
  eventName: '',
  date: '',
  time: '',
  location: '',
  rsvpMethod: '',
  celebrantPhotoUrl: null,
  colorScheme: [],
  personalMessage: '',
  visualStyle: 'cinematic',
  mood: 'festive',
};

// ─── Music Video ────────────────────────────────────────
export type SongSectionType = 'intro' | 'verse' | 'chorus' | 'bridge' | 'outro' | 'instrumental';

export interface SongSection {
  id: string;
  type: SongSectionType;
  startTime: number;
  endTime: number;
  lyrics: string;
  label: string;
}

export interface MusicVideoData {
  musicFileUrl: string | null;
  musicFileName: string;
  bpm: number | null;
  duration: number | null;
  songSections: SongSection[];
  fullLyrics: string;
  artistPhotoUrls: string[];
  visualConcept: string;
  visualStyle: string;
  mood: Mood;
}

export const SECTION_TYPE_EMOJIS: Record<SongSectionType, string> = {
  intro: '🎬', verse: '🎤', chorus: '🎵', bridge: '🌉', outro: '🏁', instrumental: '🎸',
};

export const SECTION_TYPE_COLORS: Record<SongSectionType, string> = {
  intro: '#6366f1', verse: '#22c55e', chorus: '#f59e0b', bridge: '#ec4899', outro: '#8b5cf6', instrumental: '#06b6d4',
};

export const DEFAULT_MUSIC_VIDEO: MusicVideoData = {
  musicFileUrl: null,
  musicFileName: '',
  bpm: null,
  duration: null,
  songSections: [],
  fullLyrics: '',
  artistPhotoUrls: [],
  visualConcept: '',
  visualStyle: 'cinematic',
  mood: 'energetic',
};

// ─── Recap Video ────────────────────────────────────────
export type MomentTag = 'highlight' | 'crowd' | 'detail' | 'emotion' | 'speaker' | 'general';
export const MOMENT_TAGS: MomentTag[] = ['highlight', 'crowd', 'detail', 'emotion', 'speaker', 'general'];
export const MUSIC_MOODS = ['upbeat', 'emotional', 'dramatic', 'calm', 'festive', 'energetic'] as const;

export interface RecapPhoto {
  id: string;
  url: string;
  fileName: string;
  timestamp?: number;
  quality?: number;
  selected: boolean;
  tag: MomentTag;
  caption: string;
}

export interface RecapVideoData {
  photos: RecapPhoto[];
  eventName: string;
  voiceoverText: string;
  musicMood: string;
  visualStyle: string;
  mood: Mood;
}

export const DEFAULT_RECAP_VIDEO: RecapVideoData = {
  photos: [],
  eventName: '',
  voiceoverText: '',
  musicMood: 'upbeat',
  visualStyle: 'cinematic',
  mood: 'emotional',
};

// ─── Brand / Logo Reveal ────────────────────────────────
export type IndustryCategory =
  | 'technology' | 'fashion' | 'food' | 'health' | 'finance'
  | 'education' | 'entertainment' | 'real-estate' | 'automotive'
  | 'sports' | 'creative' | 'other';

export type RevealStyle = 'particles' | 'liquid' | 'geometric' | 'nature' | 'minimal' | 'explosive' | 'elegant' | 'glitch';
export type LogoAnimationType = 'fade-in' | 'scale-up' | 'assemble' | 'emerge' | 'unfold' | 'dissolve-in';
export type SoundDesign = 'cinematic' | 'minimal' | 'epic' | 'electronic' | 'organic';

export interface BrandRevealData {
  logoUrl: string | null;
  brandColors: string[];
  brandName: string;
  tagline: string;
  industry: IndustryCategory;
  revealStyle: RevealStyle;
  backgroundAtmosphere: string;
  animationStyle: LogoAnimationType;
  soundDesign: SoundDesign;
  visualStyle: string;
  mood: Mood;
}

export const DEFAULT_BRAND_REVEAL: BrandRevealData = {
  logoUrl: null,
  brandColors: [],
  brandName: '',
  tagline: '',
  industry: 'technology',
  revealStyle: 'minimal',
  backgroundAtmosphere: '',
  animationStyle: 'fade-in',
  soundDesign: 'cinematic',
  visualStyle: 'cinematic',
  mood: 'elegant',
};

// ─── Custom / Freeform ──────────────────────────────────
export interface CustomData {
  projectTitle: string;
  projectDescription: string;
  sections: {
    character: boolean;
    logo: boolean;
    photos: boolean;
    videoRef: boolean;
  };
  character?: CharacterDefinition;
  logoDataUrl?: string;
  photos?: { dataUrl: string; label: string }[];
  videoRefUrl?: string;
  visualStyle: string;
  mood: Mood;
  shotCountRange: ShotCountRange;
}

export const DEFAULT_CUSTOM: CustomData = {
  projectTitle: '',
  projectDescription: '',
  sections: { character: false, logo: false, photos: false, videoRef: false },
  visualStyle: 'cinematic',
  mood: 'dramatic',
  shotCountRange: '6-8',
};

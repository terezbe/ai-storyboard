/** Single-select character attribute option */
export interface CharacterOption {
  id: string;
  labelKey: string;
  emoji?: string;
  colorHex?: string;
  promptFragment: string;
}

export type CharacterType = 'human' | 'cartoon' | 'anime' | 'animal' | 'fantasy' | 'robot';
export type Gender = 'male' | 'female' | 'neutral';
export type AgeRange = 'child' | 'teen' | 'young-adult' | 'adult' | 'elderly';
export type BodyType = 'slim' | 'average' | 'athletic' | 'curvy' | 'stocky' | 'petite';
export type HairStyle = 'short-straight' | 'short-curly' | 'medium-wavy' | 'long-straight' | 'long-curly' | 'bob' | 'ponytail' | 'bun' | 'braids' | 'buzz' | 'afro' | 'bald';
export type HairColor = 'black' | 'dark-brown' | 'light-brown' | 'blonde' | 'red' | 'ginger' | 'gray' | 'white' | 'blue' | 'pink' | 'purple';
export type SkinTone = 'very-light' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark' | 'very-dark';
export type ClothingStyle = 'casual' | 'formal' | 'streetwear' | 'elegant' | 'sporty' | 'traditional' | 'fantasy-armor' | 'sci-fi-suit' | 'uniform';
export type FacialFeature = 'glasses' | 'sunglasses' | 'beard' | 'mustache' | 'freckles' | 'scar' | 'tattoo' | 'earrings' | 'headband';
export type Expression = 'neutral' | 'smiling' | 'laughing' | 'serious' | 'surprised' | 'confident' | 'mysterious' | 'playful';

export interface CharacterDefinition {
  type: CharacterType;
  gender: Gender;
  ageRange: AgeRange;
  bodyType: BodyType;
  hairStyle: HairStyle;
  hairColor: HairColor;
  skinTone: SkinTone;
  clothingStyle: ClothingStyle;
  clothingDetails: string;
  facialFeatures: FacialFeature[];
  expression: Expression;
  customNotes: string;
}

export const DEFAULT_CHARACTER: CharacterDefinition = {
  type: 'human',
  gender: 'female',
  ageRange: 'young-adult',
  bodyType: 'average',
  hairStyle: 'long-straight',
  hairColor: 'dark-brown',
  skinTone: 'medium-light',
  clothingStyle: 'casual',
  clothingDetails: '',
  facialFeatures: [],
  expression: 'smiling',
  customNotes: '',
};

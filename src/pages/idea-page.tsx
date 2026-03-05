import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mic, AlertCircle, Megaphone, Heart, Music, Film, Sparkles, Palette } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { generateStoryboardFromWizard } from '../services/generation/claude-storyboard';
import { generateImageForShot } from '../services/generation/generation-service';
import { validateStoryboardJson } from '../lib/ai/json-importer';
import { generateAllPromptsForShot, generateSectionPrompt } from '../lib/prompt-engine';
import {
  buildCharacterPrompt,
  buildCharacterReferencePrompt,
  buildEnvironmentPrompt,
  buildEnvironmentReferencePrompt,
} from '../lib/prompt-builders';
import { db } from '../db/database';
import { v4 as uuid } from 'uuid';
import { VISUAL_STYLE_PRESETS } from '../config/style-presets';
import { WizardStepIndicator } from '../components/idea-wizard/wizard-step-indicator';
import { CharacterBuilderStep } from '../components/idea-wizard/character-builder-step';
import { EnvironmentBuilderStep } from '../components/idea-wizard/environment-builder-step';
import { StoryInputStep } from '../components/idea-wizard/story-input-step';
import { GenerationProgress } from '../components/idea-wizard/generation-progress';
import { ReferenceImageStep } from '../components/idea-wizard/reference-image-step';
import { StoryboardPreview } from '../components/idea-wizard/storyboard-preview';
import { VideoTypeStep } from '../components/idea-wizard/video-type-step';
import { VIDEO_TYPE_CONFIGS } from '../config/video-type-configs';
import { WIZARD_FLOWS, getNextStepId, getPrevStepId } from '../config/wizard-flows';
// Event Promo steps
import { AdPlatformStep } from '../components/idea-wizard/steps/ad-platform-step';
import { ProductUploadStep } from '../components/idea-wizard/steps/product-upload-step';
import { BrandIdentityStep } from '../components/idea-wizard/steps/brand-identity-step';
import { MarketingContentStep } from '../components/idea-wizard/steps/marketing-content-step';
// Invitation steps
import { EventTypeStep } from '../components/idea-wizard/steps/event-type-step';
import { EventDetailsStep } from '../components/idea-wizard/steps/event-details-step';
import { CelebrantPhotoStep } from '../components/idea-wizard/steps/celebrant-photo-step';
import { PersonalMessageStep } from '../components/idea-wizard/steps/personal-message-step';
// Music Video steps
import { MusicUploadStep } from '../components/idea-wizard/steps/music-upload-step';
import { SongStructureStep } from '../components/idea-wizard/steps/song-structure-step';
import { LyricsSyncStep } from '../components/idea-wizard/steps/lyrics-sync-step';
import { VisualConceptStep } from '../components/idea-wizard/steps/visual-concept-step';
// Recap Video steps
import { PhotosUploadStep } from '../components/idea-wizard/steps/photos-upload-step';
import { PhotosCurateStep } from '../components/idea-wizard/steps/photos-curate-step';
import { NarrativeStep } from '../components/idea-wizard/steps/narrative-step';
// Brand Reveal steps
import { LogoUploadStep } from '../components/idea-wizard/steps/logo-upload-step';
import { BrandColorsStep } from '../components/idea-wizard/steps/brand-colors-step';
import { IndustrySelectStep } from '../components/idea-wizard/steps/industry-select-step';
import { RevealStyleStep } from '../components/idea-wizard/steps/reveal-style-step';
// Custom Freeform steps
import { CustomOverviewStep } from '../components/idea-wizard/steps/custom-overview-step';
import { CustomAssetsStep } from '../components/idea-wizard/steps/custom-assets-step';
import { CustomStyleStep } from '../components/idea-wizard/steps/custom-style-step';
import type { Project, StoryboardImportSchema, ProjectType, ReferenceImage } from '../types/project';
import type { CharacterDefinition } from '../types/character-builder';
import type { EnvironmentDefinition } from '../types/environment-builder';
import type { WizardInput, WizardStage, StoryInputData } from '../types/idea-wizard';
import type {
  EventPromoData, InvitationData, MusicVideoData, RecapVideoData, BrandRevealData, CustomData,
} from '../types/wizard-data';
import {
  DEFAULT_EVENT_PROMO, DEFAULT_INVITATION, DEFAULT_MUSIC_VIDEO, DEFAULT_RECAP_VIDEO, DEFAULT_BRAND_REVEAL, DEFAULT_CUSTOM,
} from '../types/wizard-data';
import { DEFAULT_CHARACTER } from '../types/character-builder';
import { DEFAULT_ENVIRONMENT } from '../types/environment-builder';
import { DEFAULT_STORY } from '../types/idea-wizard';

const VIDEO_TYPE_ICONS: Record<ProjectType, typeof Mic> = {
  'talking-character': Mic,
  'event-promo': Megaphone,
  'invitation': Heart,
  'music-video': Music,
  'recap-video': Film,
  'brand-reveal': Sparkles,
  'custom': Palette,
};

export function IdeaPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const claudeApiKey = useSettingsStore((s) => s.claudeApiKey);
  const language = useSettingsStore((s) => s.language);

  /* ── State ──────────────────────────────────────────── */
  const [stage, setStage] = useState<WizardStage>('video-type');
  const [videoType, setVideoType] = useState<ProjectType>('talking-character');
  const [character, setCharacter] = useState<CharacterDefinition>(DEFAULT_CHARACTER);
  const [environment, setEnvironment] = useState<EnvironmentDefinition>(DEFAULT_ENVIRONMENT);
  const [story, setStory] = useState<StoryInputData>(DEFAULT_STORY);

  const [previewData, setPreviewData] = useState<StoryboardImportSchema | null>(null);
  const [genStep, setGenStep] = useState<'analyzing' | 'building'>('analyzing');
  const [error, setError] = useState('');

  // Type-specific data
  const [eventPromo, setEventPromo] = useState<EventPromoData>(DEFAULT_EVENT_PROMO);
  const [invitation, setInvitation] = useState<InvitationData>(DEFAULT_INVITATION);
  const [musicVideo, setMusicVideo] = useState<MusicVideoData>(DEFAULT_MUSIC_VIDEO);
  const [recapVideo, setRecapVideo] = useState<RecapVideoData>(DEFAULT_RECAP_VIDEO);
  const [brandReveal, setBrandReveal] = useState<BrandRevealData>(DEFAULT_BRAND_REVEAL);
  const [customData, setCustomData] = useState<CustomData>(DEFAULT_CUSTOM);

  // Reference images (wizard-wide, collected from all steps)
  const [referenceImages, setReferenceImages] = useState<ReferenceImage[]>([]);
  const [charImageUrl, setCharImageUrl] = useState<string | null>(null);
  const [charImageLoading, setCharImageLoading] = useState(false);
  const [envImageUrl, setEnvImageUrl] = useState<string | null>(null);
  const [envImageLoading, setEnvImageLoading] = useState(false);

  /* ── Derived prompts ────────────────────────────────── */
  const characterPrompt = useMemo(() => buildCharacterPrompt(character), [character]);
  const environmentPrompt = useMemo(() => buildEnvironmentPrompt(environment), [environment]);

  const selectedStyleName = useMemo(() => {
    const style = VISUAL_STYLE_PRESETS.find((s) => s.id === story.visualStyle);
    return style ? t(style.labelKey) : '';
  }, [story.visualStyle, t]);

  /** Update reference images — merge by stepSource */
  const handleRefChange = (stepId: string) => (imgs: ReferenceImage[]) => {
    setReferenceImages(prev => [
      ...prev.filter(r => r.stepSource !== stepId),
      ...imgs,
    ]);
  };

  /** Get reference images for a specific step */
  const getStepRefs = (stepId: string) => referenceImages.filter(r => r.stepSource === stepId);

  /* ── Step 0 → 1: Video type selection ─────────────── */
  const handleVideoTypeNext = () => {
    const config = VIDEO_TYPE_CONFIGS[videoType];
    if (config && story.shotCountRange === DEFAULT_STORY.shotCountRange) {
      setStory(prev => ({ ...prev, shotCountRange: config.recommendedShotRange }));
    }
    // Navigate to the second step of the selected type's flow
    const flow = WIZARD_FLOWS[videoType];
    const nextStep = flow.steps[1]?.id;
    if (nextStep) setStage(nextStep);
  };

  /* ── Step 1 → 1b: Generate character reference ──────── */
  const handleCharacterNext = async () => {
    setStage('character-preview');
    setCharImageLoading(true);
    const settings = useSettingsStore.getState();
    const prompt = buildCharacterReferencePrompt(character, story.visualStyle);

    try {
      const result = await generateImageForShot(prompt, settings.preferredImageModel);
      setCharImageUrl(result.imageUrl);
    } catch (err) {
      console.error('Character reference generation failed:', err);
      setCharImageUrl(null);
    }
    setCharImageLoading(false);
  };

  const handleCharRegenerate = async () => {
    setCharImageLoading(true);
    const settings = useSettingsStore.getState();
    const prompt = buildCharacterReferencePrompt(character, story.visualStyle);

    try {
      const result = await generateImageForShot(prompt, settings.preferredImageModel);
      setCharImageUrl(result.imageUrl);
    } catch (err) {
      console.error('Character reference generation failed:', err);
      setCharImageUrl(null);
    }
    setCharImageLoading(false);
  };

  /* ── Step 1b → 2 ────────────────────────────────────── */
  const handleCharApprove = () => setStage('environment-builder');
  const handleCharSkip = () => {
    setCharImageUrl(null);
    setStage('environment-builder');
  };

  /* ── Step 2 → 2b: Generate environment reference ────── */
  const handleEnvironmentNext = async () => {
    setStage('environment-preview');
    setEnvImageLoading(true);
    const settings = useSettingsStore.getState();
    const prompt = buildEnvironmentReferencePrompt(environment, story.visualStyle);

    try {
      const result = await generateImageForShot(prompt, settings.preferredImageModel);
      setEnvImageUrl(result.imageUrl);
    } catch (err) {
      console.error('Environment reference generation failed:', err);
      setEnvImageUrl(null);
    }
    setEnvImageLoading(false);
  };

  const handleEnvRegenerate = async () => {
    setEnvImageLoading(true);
    const settings = useSettingsStore.getState();
    const prompt = buildEnvironmentReferencePrompt(environment, story.visualStyle);

    try {
      const result = await generateImageForShot(prompt, settings.preferredImageModel);
      setEnvImageUrl(result.imageUrl);
    } catch (err) {
      console.error('Environment reference generation failed:', err);
      setEnvImageUrl(null);
    }
    setEnvImageLoading(false);
  };

  /* ── Step 2b → 3 ────────────────────────────────────── */
  const handleEnvApprove = () => setStage('story-input');
  const handleEnvSkip = () => {
    setEnvImageUrl(null);
    setStage('story-input');
  };

  /* ── Step 3 → Generate storyboard ──────────────────── */
  const handleGenerate = async () => {
    setStage('generating');
    setGenStep('analyzing');
    setError('');

    const analyzeTimer = setTimeout(() => setGenStep('building'), 2500);

    try {
      const wizardInput: WizardInput = {
        videoType, character, environment, story,
        eventPromo: videoType === 'event-promo' ? eventPromo : undefined,
        invitation: videoType === 'invitation' ? invitation : undefined,
        musicVideo: videoType === 'music-video' ? musicVideo : undefined,
        recapVideo: videoType === 'recap-video' ? recapVideo : undefined,
        brandReveal: videoType === 'brand-reveal' ? brandReveal : undefined,
        customData: videoType === 'custom' ? customData : undefined,
      };
      const result = await generateStoryboardFromWizard(wizardInput, language, videoType);
      clearTimeout(analyzeTimer);

      if (!result.success || !result.data) {
        setStage('error');
        setError(result.error || t('idea.error'));
        return;
      }

      const validation = validateStoryboardJson(result.data);
      if (!validation.isValid || !validation.data) {
        setStage('error');
        setError(validation.errors.join(', '));
        return;
      }

      setPreviewData(validation.data);
      setStage('preview');
    } catch (err) {
      clearTimeout(analyzeTimer);
      console.error('Storyboard generation failed:', err);
      const flow = WIZARD_FLOWS[videoType];
      const lastStep = flow.steps[flow.steps.length - 1]?.id;
      setStage(lastStep || 'story-input');
      setError(err instanceof Error ? err.message : t('idea.error'));
    }
  };

  /* ── Step 4: Approve & create project ──────────────── */
  const handleApprove = async () => {
    if (!previewData) return;
    setStage('importing');

    try {
      const settings = useSettingsStore.getState();

      const shotsWithPrompts = previewData.shots.map((shot) => {
        const hasPrompts = shot.prompts.environment || shot.prompts.character || shot.prompts.video;
        if (hasPrompts) return shot;
        const prompts = generateAllPromptsForShot(
          shot,
          settings.preferredImageModel,
          settings.preferredVideoModel,
          settings.preferredMusicModel,
          'standard'
        );
        return { ...shot, prompts };
      });

      const intro = previewData.intro
        ? {
            ...previewData.intro,
            prompts: generateSectionPrompt(previewData.intro, settings.preferredImageModel, settings.preferredMusicModel, 'standard'),
          }
        : null;
      const outro = previewData.outro
        ? {
            ...previewData.outro,
            prompts: generateSectionPrompt(previewData.outro, settings.preferredImageModel, settings.preferredMusicModel, 'standard'),
          }
        : null;

      const project: Project = {
        id: uuid(),
        name: previewData.projectName,
        type: videoType,
        description: story.idea.trim(),
        status: 'draft',
        language: previewData.language || language,
        referenceImageUrl: charImageUrl || (videoType === 'brand-reveal' && brandReveal.logoUrl ? brandReveal.logoUrl : undefined) || (videoType === 'custom' && customData.logoDataUrl ? customData.logoDataUrl : undefined) || undefined,
        wizardMetadata: {
          videoType,
          referenceImages: referenceImages.length > 0 ? referenceImages : undefined,
          data: {
            character,
            environment,
            story,
            ...(videoType === 'event-promo' && { eventPromo }),
            ...(videoType === 'invitation' && { invitation }),
            ...(videoType === 'music-video' && { musicVideo }),
            ...(videoType === 'recap-video' && { recapVideo }),
            ...(videoType === 'brand-reveal' && { brandReveal }),
            ...(videoType === 'custom' && { customData }),
          },
        },
        storyboard: {
          intro,
          shots: shotsWithPrompts,
          outro,
          musicTrack: null,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await db.projects.add(project);
      navigate(`/project/${project.id}?generate=true`);
    } catch (err) {
      console.error('Project creation failed:', err);
      setStage('error');
      setError(err instanceof Error ? err.message : t('idea.error'));
    }
  };

  /* ── Navigation helpers ─────────────────────────────── */
  const handleRegenerate = () => handleGenerate();

  /** Go to the correct "last step" for the current video type */
  const handlePreviewBack = () => {
    const flow = WIZARD_FLOWS[videoType];
    const lastStep = flow.steps[flow.steps.length - 1];
    setStage(lastStep.id);
  };
  const handleBackToStart = () => setStage('video-type');

  /** Generic next/back for type-specific steps */
  const goNext = (from: WizardStage) => {
    const next = getNextStepId(videoType, from);
    if (next === 'generating') handleGenerate();
    else if (next) setStage(next);
  };
  const goBack = (from: WizardStage) => {
    const prev = getPrevStepId(videoType, from);
    if (prev) setStage(prev);
  };

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        {(() => { const Icon = VIDEO_TYPE_ICONS[videoType]; return (
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-600/20 mb-3">
            <Icon className="w-7 h-7 text-primary-400" />
          </div>
        ); })()}
        <h2 className="text-2xl font-bold text-text">{t(`videoTypes.${videoType}.name`)}</h2>
        <p className="text-text-muted mt-1 text-sm">{t(`videoTypes.${videoType}.description`)}</p>
      </div>

      {/* Step Indicator */}
      <WizardStepIndicator currentStage={stage} videoType={videoType} />

      {/* Step 0: Video Type Selection */}
      {stage === 'video-type' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <VideoTypeStep
            selected={videoType}
            onSelect={setVideoType}
            onNext={handleVideoTypeNext}
          />
        </div>
      )}

      {/* Step 1: Character Builder */}
      {stage === 'character-builder' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CharacterBuilderStep
            data={character}
            onChange={setCharacter}
            onNext={handleCharacterNext}
            promptPreview={characterPrompt}
            referenceImages={getStepRefs('character-builder')}
            onReferenceChange={handleRefChange('character-builder')}
          />
        </div>
      )}

      {/* Step 1b: Character Preview */}
      {stage === 'character-preview' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <ReferenceImageStep
            imageUrl={charImageUrl}
            loading={charImageLoading}
            characterDescription={characterPrompt}
            onRegenerate={handleCharRegenerate}
            onSkip={handleCharSkip}
            onApprove={handleCharApprove}
          />
        </div>
      )}

      {/* Step 2: Environment Builder */}
      {stage === 'environment-builder' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <EnvironmentBuilderStep
            data={environment}
            onChange={setEnvironment}
            onNext={handleEnvironmentNext}
            onBack={() => setStage('character-preview')}
            promptPreview={environmentPrompt}
            referenceImages={getStepRefs('environment-builder')}
            onReferenceChange={handleRefChange('environment-builder')}
          />
        </div>
      )}

      {/* Step 2b: Environment Preview */}
      {stage === 'environment-preview' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <ReferenceImageStep
            imageUrl={envImageUrl}
            loading={envImageLoading}
            characterDescription={environmentPrompt}
            onRegenerate={handleEnvRegenerate}
            onSkip={handleEnvSkip}
            onApprove={handleEnvApprove}
          />
        </div>
      )}

      {/* Step 3: Story Input */}
      {stage === 'story-input' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <StoryInputStep
            data={story}
            onChange={setStory}
            onGenerate={handleGenerate}
            onBack={() => setStage('environment-preview')}
            claudeApiKey={claudeApiKey}
            referenceImages={getStepRefs('story-input')}
            onReferenceChange={handleRefChange('story-input')}
          />
        </div>
      )}

      {/* ── Event Promo steps ─────────────────────────────── */}
      {stage === 'ad-platform' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <AdPlatformStep data={eventPromo} onChange={setEventPromo} onNext={() => goNext('ad-platform')} onBack={() => goBack('ad-platform')} referenceImages={getStepRefs('ad-platform')} onReferenceChange={handleRefChange('ad-platform')} />
        </div>
      )}
      {stage === 'product-upload' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <ProductUploadStep data={eventPromo} onChange={setEventPromo} onNext={() => goNext('product-upload')} onBack={() => goBack('product-upload')} referenceImages={getStepRefs('product-upload')} onReferenceChange={handleRefChange('product-upload')} />
        </div>
      )}
      {stage === 'brand-identity' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <BrandIdentityStep data={eventPromo} onChange={setEventPromo} onNext={() => goNext('brand-identity')} onBack={() => goBack('brand-identity')} referenceImages={getStepRefs('brand-identity')} onReferenceChange={handleRefChange('brand-identity')} />
        </div>
      )}
      {stage === 'marketing-content' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <MarketingContentStep data={eventPromo} onChange={setEventPromo} onNext={handleGenerate} onBack={() => goBack('marketing-content')} claudeApiKey={claudeApiKey} referenceImages={getStepRefs('marketing-content')} onReferenceChange={handleRefChange('marketing-content')} />
        </div>
      )}
      {/* ── Invitation steps ──────────────────────────────── */}
      {stage === 'event-type' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <EventTypeStep data={invitation} onChange={setInvitation} onNext={() => goNext('event-type')} onBack={() => goBack('event-type')} referenceImages={getStepRefs('event-type')} onReferenceChange={handleRefChange('event-type')} />
        </div>
      )}
      {stage === 'event-details' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <EventDetailsStep data={invitation} onChange={setInvitation} onNext={() => goNext('event-details')} onBack={() => goBack('event-details')} referenceImages={getStepRefs('event-details')} onReferenceChange={handleRefChange('event-details')} />
        </div>
      )}
      {stage === 'celebrant-photo' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CelebrantPhotoStep data={invitation} onChange={setInvitation} onNext={() => goNext('celebrant-photo')} onBack={() => goBack('celebrant-photo')} referenceImages={getStepRefs('celebrant-photo')} onReferenceChange={handleRefChange('celebrant-photo')} />
        </div>
      )}
      {stage === 'personal-message' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <PersonalMessageStep data={invitation} onChange={setInvitation} onNext={handleGenerate} onBack={() => goBack('personal-message')} claudeApiKey={claudeApiKey} referenceImages={getStepRefs('personal-message')} onReferenceChange={handleRefChange('personal-message')} />
        </div>
      )}

      {/* ── Music Video steps ─────────────────────────────── */}
      {stage === 'music-upload' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <MusicUploadStep data={musicVideo} onChange={setMusicVideo} onNext={() => goNext('music-upload')} onBack={() => goBack('music-upload')} referenceImages={getStepRefs('music-upload')} onReferenceChange={handleRefChange('music-upload')} />
        </div>
      )}
      {stage === 'song-structure' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <SongStructureStep data={musicVideo} onChange={setMusicVideo} onNext={() => goNext('song-structure')} onBack={() => goBack('song-structure')} referenceImages={getStepRefs('song-structure')} onReferenceChange={handleRefChange('song-structure')} />
        </div>
      )}
      {stage === 'lyrics-sync' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <LyricsSyncStep data={musicVideo} onChange={setMusicVideo} onNext={() => goNext('lyrics-sync')} onBack={() => goBack('lyrics-sync')} referenceImages={getStepRefs('lyrics-sync')} onReferenceChange={handleRefChange('lyrics-sync')} />
        </div>
      )}
      {stage === 'visual-concept' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <VisualConceptStep data={musicVideo} onChange={setMusicVideo} onGenerate={handleGenerate} onBack={() => goBack('visual-concept')} claudeApiKey={claudeApiKey} referenceImages={getStepRefs('visual-concept')} onReferenceChange={handleRefChange('visual-concept')} />
        </div>
      )}

      {/* ── Recap Video steps ─────────────────────────────── */}
      {stage === 'photos-upload' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <PhotosUploadStep data={recapVideo} onChange={setRecapVideo} onNext={() => goNext('photos-upload')} onBack={() => goBack('photos-upload')} referenceImages={getStepRefs('photos-upload')} onReferenceChange={handleRefChange('photos-upload')} />
        </div>
      )}
      {stage === 'photos-curate' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <PhotosCurateStep data={recapVideo} onChange={setRecapVideo} onNext={() => goNext('photos-curate')} onBack={() => goBack('photos-curate')} referenceImages={getStepRefs('photos-curate')} onReferenceChange={handleRefChange('photos-curate')} />
        </div>
      )}
      {stage === 'narrative' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <NarrativeStep data={recapVideo} onChange={setRecapVideo} onGenerate={handleGenerate} onBack={() => goBack('narrative')} claudeApiKey={claudeApiKey} referenceImages={getStepRefs('narrative')} onReferenceChange={handleRefChange('narrative')} />
        </div>
      )}

      {/* ── Brand Reveal steps ────────────────────────────── */}
      {stage === 'logo-upload' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <LogoUploadStep data={brandReveal} onChange={setBrandReveal} onNext={() => goNext('logo-upload')} onBack={() => goBack('logo-upload')} referenceImages={getStepRefs('logo-upload')} onReferenceChange={handleRefChange('logo-upload')} />
        </div>
      )}
      {stage === 'brand-colors' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <BrandColorsStep data={brandReveal} onChange={setBrandReveal} onNext={() => goNext('brand-colors')} onBack={() => goBack('brand-colors')} referenceImages={getStepRefs('brand-colors')} onReferenceChange={handleRefChange('brand-colors')} />
        </div>
      )}
      {stage === 'industry-select' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <IndustrySelectStep data={brandReveal} onChange={setBrandReveal} onNext={() => goNext('industry-select')} onBack={() => goBack('industry-select')} referenceImages={getStepRefs('industry-select')} onReferenceChange={handleRefChange('industry-select')} />
        </div>
      )}
      {stage === 'reveal-style' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <RevealStyleStep data={brandReveal} onChange={setBrandReveal} onGenerate={handleGenerate} onBack={() => goBack('reveal-style')} claudeApiKey={claudeApiKey} referenceImages={getStepRefs('reveal-style')} onReferenceChange={handleRefChange('reveal-style')} />
        </div>
      )}

      {/* ── Custom Freeform steps ──────────────────────────── */}
      {stage === 'custom-overview' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CustomOverviewStep data={customData} onChange={setCustomData} onNext={() => goNext('custom-overview')} onBack={() => goBack('custom-overview')} />
        </div>
      )}
      {stage === 'custom-assets' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CustomAssetsStep data={customData} onChange={setCustomData} onNext={() => goNext('custom-assets')} onBack={() => goBack('custom-assets')} />
        </div>
      )}
      {stage === 'custom-style' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CustomStyleStep data={customData} onChange={setCustomData} onGenerate={handleGenerate} onBack={() => goBack('custom-style')} claudeApiKey={claudeApiKey} />
        </div>
      )}

      {/* Generating */}
      {stage === 'generating' && <GenerationProgress step={genStep} />}

      {/* Step 4: Preview */}
      {stage === 'preview' && previewData && (
        <StoryboardPreview
          data={previewData}
          characterDescription={characterPrompt}
          styleName={selectedStyleName}
          referenceImageUrl={charImageUrl}
          onChange={setPreviewData}
          onApprove={handleApprove}
          onRegenerate={handleRegenerate}
          onBack={handlePreviewBack}
        />
      )}

      {/* Importing */}
      {stage === 'importing' && (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-text-muted">{t('idea.step2')}</p>
        </div>
      )}

      {/* Error */}
      {stage === 'error' && (
        <div className="space-y-4">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-300 font-medium">{t('idea.error')}</p>
              <p className="text-xs text-red-400 mt-1">{error}</p>
            </div>
          </div>
          <button
            onClick={handleBackToStart}
            className="w-full px-4 py-2.5 rounded-xl text-sm border border-border text-text-muted hover:text-text hover:border-primary-500/50 transition-colors"
          >
            {t('wizard.preview.backToEdit')}
          </button>
        </div>
      )}
    </div>
  );
}

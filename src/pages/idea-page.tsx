import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mic, AlertCircle } from 'lucide-react';
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
import type { Project, StoryboardImportSchema } from '../types/project';
import type { CharacterDefinition } from '../types/character-builder';
import type { EnvironmentDefinition } from '../types/environment-builder';
import type { WizardInput, WizardStage, StoryInputData } from '../types/idea-wizard';
import { DEFAULT_CHARACTER } from '../types/character-builder';
import { DEFAULT_ENVIRONMENT } from '../types/environment-builder';
import { DEFAULT_STORY } from '../types/idea-wizard';

export function IdeaPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const claudeApiKey = useSettingsStore((s) => s.claudeApiKey);
  const language = useSettingsStore((s) => s.language);

  /* ── State ──────────────────────────────────────────── */
  const [stage, setStage] = useState<WizardStage>('character-builder');
  const [character, setCharacter] = useState<CharacterDefinition>(DEFAULT_CHARACTER);
  const [environment, setEnvironment] = useState<EnvironmentDefinition>(DEFAULT_ENVIRONMENT);
  const [story, setStory] = useState<StoryInputData>(DEFAULT_STORY);

  const [previewData, setPreviewData] = useState<StoryboardImportSchema | null>(null);
  const [genStep, setGenStep] = useState<'analyzing' | 'building'>('analyzing');
  const [error, setError] = useState('');

  // Reference images
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

    const wizardInput: WizardInput = { character, environment, story };
    const result = await generateStoryboardFromWizard(wizardInput, language);
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
  };

  /* ── Step 4: Approve & create project ──────────────── */
  const handleApprove = async () => {
    if (!previewData) return;
    setStage('importing');

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
      type: 'talking-character',
      description: story.idea.trim(),
      status: 'draft',
      language: previewData.language || language,
      referenceImageUrl: charImageUrl || undefined,
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
  };

  /* ── Navigation helpers ─────────────────────────────── */
  const handleRegenerate = () => handleGenerate();

  const handlePreviewBack = () => setStage('story-input');
  const handleBackToStart = () => setStage('character-builder');

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-600/20 mb-3">
          <Mic className="w-7 h-7 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-text">{t('wizard.title')}</h2>
        <p className="text-text-muted mt-1 text-sm">{t('wizard.subtitle')}</p>
      </div>

      {/* Step Indicator */}
      <WizardStepIndicator currentStage={stage} />

      {/* Step 1: Character Builder */}
      {stage === 'character-builder' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <CharacterBuilderStep
            data={character}
            onChange={setCharacter}
            onNext={handleCharacterNext}
            promptPreview={characterPrompt}
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
          />
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

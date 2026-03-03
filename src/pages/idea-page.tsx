import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mic, AlertCircle } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { generateStoryboardFromWizard } from '../services/generation/claude-storyboard';
import { validateStoryboardJson } from '../lib/ai/json-importer';
import { generateAllPromptsForShot, generateSectionPrompt } from '../lib/prompt-engine';
import { db } from '../db/database';
import { v4 as uuid } from 'uuid';
import { VISUAL_STYLE_PRESETS } from '../config/style-presets';
import { WizardForm } from '../components/idea-wizard/wizard-form';
import { GenerationProgress } from '../components/idea-wizard/generation-progress';
import { StoryboardPreview } from '../components/idea-wizard/storyboard-preview';
import type { Project, StoryboardImportSchema } from '../types/project';
import type { IdeaWizardInput, WizardStage } from '../types/idea-wizard';

const DEFAULT_INPUT: IdeaWizardInput = {
  idea: '',
  characterDescription: '',
  visualStyle: 'cinematic',
  mood: 'festive',
  shotCountRange: '6-8',
};

export function IdeaPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const claudeApiKey = useSettingsStore((s) => s.claudeApiKey);
  const language = useSettingsStore((s) => s.language);

  const [stage, setStage] = useState<WizardStage>('input');
  const [wizardInput, setWizardInput] = useState<IdeaWizardInput>(DEFAULT_INPUT);
  const [previewData, setPreviewData] = useState<StoryboardImportSchema | null>(null);
  const [genStep, setGenStep] = useState<'analyzing' | 'building'>('analyzing');
  const [error, setError] = useState('');

  /* ── Generate storyboard from wizard input ──────────────── */
  const handleGenerate = async () => {
    setStage('generating');
    setGenStep('analyzing');
    setError('');

    // Simulate a brief "analyzing" step for UX
    const analyzeTimer = setTimeout(() => setGenStep('building'), 2500);

    // Step 1: Claude generates storyboard JSON
    const result = await generateStoryboardFromWizard(wizardInput, language);
    clearTimeout(analyzeTimer);

    if (!result.success || !result.data) {
      setStage('error');
      setError(result.error || t('idea.error'));
      return;
    }

    // Step 2: Validate
    const validation = validateStoryboardJson(result.data);
    if (!validation.isValid || !validation.data) {
      setStage('error');
      setError(validation.errors.join(', '));
      return;
    }

    setPreviewData(validation.data);
    setStage('preview');
  };

  /* ── Approve & create project ──────────────────────────── */
  const handleApprove = async () => {
    if (!previewData) return;
    setStage('importing');

    const settings = useSettingsStore.getState();

    // Auto-generate prompts for every shot
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

    // Auto-generate prompts for intro/outro
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

    // Create project
    const project: Project = {
      id: uuid(),
      name: previewData.projectName,
      type: 'talking-character',
      description: wizardInput.idea.trim(),
      status: 'draft',
      language: previewData.language || language,
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

  /* ── Helpers ────────────────────────────────────────────── */
  const handleRegenerate = () => {
    handleGenerate();
  };

  const handleBack = () => {
    setStage('input');
  };

  const selectedStyleName = (() => {
    const style = VISUAL_STYLE_PRESETS.find((s) => s.id === wizardInput.visualStyle);
    return style ? t(style.labelKey) : '';
  })();

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600/20 mb-4">
          <Mic className="w-8 h-8 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-text">{t('wizard.title')}</h2>
        <p className="text-text-muted mt-2">{t('wizard.subtitle')}</p>
      </div>

      {/* Stage: Input */}
      {stage === 'input' && (
        <div className="bg-surface-light border border-border rounded-xl p-5">
          <WizardForm
            input={wizardInput}
            onChange={setWizardInput}
            onSubmit={handleGenerate}
            claudeApiKey={claudeApiKey}
          />
        </div>
      )}

      {/* Stage: Generating */}
      {stage === 'generating' && <GenerationProgress step={genStep} />}

      {/* Stage: Preview */}
      {stage === 'preview' && previewData && (
        <StoryboardPreview
          data={previewData}
          characterDescription={wizardInput.characterDescription}
          styleName={selectedStyleName}
          onChange={setPreviewData}
          onApprove={handleApprove}
          onRegenerate={handleRegenerate}
          onBack={handleBack}
        />
      )}

      {/* Stage: Importing */}
      {stage === 'importing' && (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-text-muted">{t('idea.step2')}</p>
        </div>
      )}

      {/* Stage: Error */}
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
            onClick={handleBack}
            className="w-full px-4 py-2.5 rounded-xl text-sm border border-border text-text-muted hover:text-text hover:border-primary-500/50 transition-colors"
          >
            {t('wizard.preview.backToEdit')}
          </button>
        </div>
      )}
    </div>
  );
}

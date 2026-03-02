import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, Loader2, AlertCircle, Settings, Lightbulb } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { generateStoryboardFromIdea } from '../services/generation/claude-storyboard';
import { validateStoryboardJson } from '../lib/ai/json-importer';
import { generateAllPromptsForShot } from '../lib/prompt-engine';
import { db } from '../db/database';
import { v4 as uuid } from 'uuid';
import type { Project } from '../types/project';

type Stage = 'idle' | 'claude' | 'importing' | 'done' | 'error';

export function IdeaPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const claudeApiKey = useSettingsStore((s) => s.claudeApiKey);
  const language = useSettingsStore((s) => s.language);

  const [idea, setIdea] = useState('');
  const [stage, setStage] = useState<Stage>('idle');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!idea.trim() || !claudeApiKey) return;

    setStage('claude');
    setError('');

    // Step 1: Claude generates storyboard JSON
    const result = await generateStoryboardFromIdea(idea.trim(), language);

    if (!result.success || !result.data) {
      setStage('error');
      setError(result.error || t('idea.error'));
      return;
    }

    // Step 2: Validate and import
    setStage('importing');

    const validation = validateStoryboardJson(result.data);
    if (!validation.isValid || !validation.data) {
      setStage('error');
      setError(validation.errors.join(', '));
      return;
    }

    const data = validation.data;
    const settings = useSettingsStore.getState();

    // Auto-generate image prompts for every shot
    const shotsWithPrompts = data.shots.map((shot) => {
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

    // Create project
    const project: Project = {
      id: uuid(),
      name: data.projectName,
      type: data.projectType,
      description: idea.trim(),
      status: 'draft',
      language: data.language || language,
      storyboard: {
        intro: data.intro,
        shots: shotsWithPrompts,
        outro: data.outro,
        musicTrack: null,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.projects.add(project);
    setStage('done');

    // Navigate to project with auto-generate flag
    navigate(`/project/${project.id}?generate=true`);
  };

  const stageMessage = () => {
    switch (stage) {
      case 'claude': return t('idea.step1');
      case 'importing': return t('idea.step2');
      case 'done': return t('idea.success');
      default: return '';
    }
  };

  const isLoading = stage === 'claude' || stage === 'importing';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-600/20 mb-4">
          <Lightbulb className="w-8 h-8 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-text">{t('idea.title')}</h2>
        <p className="text-text-muted mt-2">{t('idea.subtitle')}</p>
      </div>

      {/* API Key Warning */}
      {!claudeApiKey && (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-300 font-medium">{t('idea.noApiKey')}</p>
            <button
              onClick={() => navigate('/settings')}
              className="text-sm text-primary-400 hover:text-primary-300 mt-1 underline"
            >
              {t('idea.goToSettings')}
            </button>
          </div>
        </div>
      )}

      {/* Idea Input */}
      <div className="bg-surface-light border border-border rounded-xl p-5 mb-6">
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={6}
          placeholder={t('idea.placeholder')}
          disabled={isLoading}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-y disabled:opacity-50"
        />

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!idea.trim() || !claudeApiKey || isLoading}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
          {isLoading ? stageMessage() : t('idea.generate')}
        </button>
      </div>

      {/* Progress indicator */}
      {isLoading && (
        <div className="flex items-center gap-3 justify-center">
          <div className="flex gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 'claude' ? 'bg-primary-500 animate-pulse' : 'bg-primary-500'}`} />
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 'importing' ? 'bg-primary-500 animate-pulse' : stage === 'claude' ? 'bg-border' : 'bg-primary-500'}`} />
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 'done' ? 'bg-primary-500' : 'bg-border'}`} />
          </div>
          <span className="text-sm text-text-muted">{stageMessage()}</span>
        </div>
      )}

      {/* Error */}
      {stage === 'error' && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-red-300 font-medium">{t('idea.error')}</p>
            <p className="text-xs text-red-400 mt-1">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

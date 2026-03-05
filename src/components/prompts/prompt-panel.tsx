import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Copy, Check, Sparkles, RefreshCw, ImagePlus, Video, Loader2 } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { useEditorStore } from '../../store/editor-store';
import { useSettingsStore } from '../../store/settings-store';
import { useShotImageStatus, useShotVideoStatus } from '../../store/generation-store';
import { useGeneration } from '../../hooks/use-generation';
import {
  generateEnvironmentPrompt,
  generateCharacterPrompt,
  generateMusicPrompt,
  generateVideoPrompt,
  generateAllPromptsForShot,
} from '../../lib/prompt-engine';
import { getFalModel } from '../../config/fal-models';
import type { Prompt, PromptType, Shot } from '../../types/project';

function PromptCard({
  prompt,
  type,
  shot,
  onRegenerate,
  onUpdateText,
}: {
  prompt: Prompt | null;
  type: PromptType;
  shot: Shot;
  onRegenerate: () => void;
  onUpdateText: (text: string) => void;
}) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const { generateImage, generateVideo } = useGeneration();
  const imageStatus = useShotImageStatus(shot.id);
  const videoStatus = useShotVideoStatus(shot.id);

  const typeLabels: Record<PromptType, string> = {
    environment: t('prompt.environment'),
    character: t('prompt.character'),
    music: t('prompt.music'),
    video: t('prompt.video'),
  };

  const typeColors: Record<PromptType, string> = {
    environment: 'border-green-500/30 bg-green-500/5',
    character: 'border-blue-500/30 bg-blue-500/5',
    music: 'border-yellow-500/30 bg-yellow-500/5',
    video: 'border-purple-500/30 bg-purple-500/5',
  };

  const handleCopy = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showGenerateImage = (type === 'environment' || type === 'character') && prompt;
  const showGenerateVideo = type === 'video' && prompt;
  const isGeneratingImage = imageStatus === 'generating';
  const isGeneratingVideo = videoStatus === 'generating';

  return (
    <div className={`rounded-xl border p-4 ${typeColors[type]}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-text">{typeLabels[type]}</h4>
        <div className="flex items-center gap-1">
          {/* Generate Image button for environment/character */}
          {showGenerateImage && (
            <button
              onClick={() => generateImage(shot)}
              disabled={isGeneratingImage}
              className="p-1.5 text-text-muted hover:text-green-400 rounded-lg hover:bg-surface-lighter transition-colors disabled:opacity-40"
              title={t('generation.generateImage')}
            >
              {isGeneratingImage ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ImagePlus className="w-3.5 h-3.5" />
              )}
            </button>
          )}
          {/* Generate Video button for video prompt */}
          {showGenerateVideo && (
            <button
              onClick={() => generateVideo(shot)}
              disabled={isGeneratingVideo}
              className="p-1.5 text-text-muted hover:text-purple-400 rounded-lg hover:bg-surface-lighter transition-colors disabled:opacity-40"
              title={t('generation.generateVideo')}
            >
              {isGeneratingVideo ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Video className="w-3.5 h-3.5" />
              )}
            </button>
          )}
          <button
            onClick={onRegenerate}
            className="p-1.5 text-text-muted hover:text-text rounded-lg hover:bg-surface-lighter transition-colors"
            title={t('prompt.regenerate')}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopy}
            disabled={!prompt}
            className="p-1.5 text-text-muted hover:text-text rounded-lg hover:bg-surface-lighter transition-colors disabled:opacity-30"
            title={t('prompt.copy')}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {prompt ? (
        <>
          <textarea
            value={prompt.text}
            onChange={(e) => onUpdateText(e.target.value)}
            rows={4}
            className="w-full bg-surface/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary-500 resize-none"
          />
          <div className="mt-2 flex items-center gap-2 text-[10px] text-text-muted">
            <span className="bg-surface-lighter px-1.5 py-0.5 rounded">
              {getFalModel(prompt.targetModel)?.name || prompt.targetModel}
            </span>
            <span>{prompt.quality}</span>
            {/* Generation status indicator */}
            {(type === 'environment' || type === 'character') && imageStatus === 'completed' && (
              <span className="text-green-400">{t('prompt.imageReady')}</span>
            )}
            {type === 'video' && videoStatus === 'completed' && (
              <span className="text-purple-400">{t('prompt.videoReady')}</span>
            )}
          </div>
        </>
      ) : (
        <div className="h-24 flex items-center justify-center text-text-muted text-sm">
          <button
            onClick={onRegenerate}
            className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300"
          >
            <Sparkles className="w-4 h-4" />
            {t('prompt.generate')}
          </button>
        </div>
      )}
    </div>
  );
}

export function PromptPanel() {
  const { t } = useTranslation();
  const { currentProject, updateShotPrompts } = useProjectStore();
  const { selectedShotId, setSelectedShotId } = useEditorStore();
  const settings = useSettingsStore();

  if (!currentProject) return null;
  const { shots } = currentProject.storyboard;

  // If a shot is selected, show its prompts
  const shot = shots.find((s) => s.id === selectedShotId);

  if (!shot) {
    return (
      <div className="p-6">
        <p className="text-text-muted text-center py-10">
          {t('prompt.selectShot')}
        </p>
        {/* Show all shots prompts overview */}
        <div className="space-y-4">
          {shots.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedShotId(s.id)}
              className="bg-surface-light border border-border rounded-xl p-4 cursor-pointer hover:border-primary-500/50 transition-colors"
            >
              <h4 className="font-medium text-text mb-2">
                {s.title || `Shot ${s.orderIndex + 1}`}
              </h4>
              <div className="flex gap-2">
                {(['environment', 'character', 'music', 'video'] as PromptType[]).map((type) => {
                  const has = !!s.prompts[type];
                  return (
                    <span
                      key={type}
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        has ? 'bg-green-900/50 text-green-300' : 'bg-surface-lighter text-text-muted'
                      }`}
                    >
                      {type}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const regenerate = (type: PromptType) => {
    let prompt: Prompt;
    switch (type) {
      case 'environment':
        prompt = generateEnvironmentPrompt(shot, settings.preferredImageModel, 'standard');
        break;
      case 'character':
        prompt = generateCharacterPrompt(shot, settings.preferredImageModel, 'standard');
        break;
      case 'music':
        prompt = generateMusicPrompt(shot, settings.preferredMusicModel, 'standard');
        break;
      case 'video':
        prompt = generateVideoPrompt(shot, settings.preferredVideoModel, 'standard');
        break;
    }
    updateShotPrompts(shot.id, { [type]: prompt });
  };

  const updatePromptText = (type: PromptType, text: string) => {
    const existing = shot.prompts[type];
    if (!existing) return;
    updateShotPrompts(shot.id, {
      [type]: { ...existing, text, isManuallyEdited: true },
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-text">
          {shot.title || `Shot ${shot.orderIndex + 1}`} - {t('editor.views.prompts')}
        </h3>
        <button
          onClick={() => {
            const prompts = generateAllPromptsForShot(
              shot,
              settings.preferredImageModel,
              settings.preferredVideoModel,
              settings.preferredMusicModel,
              'standard'
            );
            updateShotPrompts(shot.id, prompts);
          }}
          className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          {t('prompt.generateAll')}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PromptCard
          prompt={shot.prompts.environment}
          type="environment"
          shot={shot}
          onRegenerate={() => regenerate('environment')}
          onUpdateText={(text) => updatePromptText('environment', text)}
        />
        <PromptCard
          prompt={shot.prompts.character}
          type="character"
          shot={shot}
          onRegenerate={() => regenerate('character')}
          onUpdateText={(text) => updatePromptText('character', text)}
        />
        <PromptCard
          prompt={shot.prompts.music}
          type="music"
          shot={shot}
          onRegenerate={() => regenerate('music')}
          onUpdateText={(text) => updatePromptText('music', text)}
        />
        <PromptCard
          prompt={shot.prompts.video}
          type="video"
          shot={shot}
          onRegenerate={() => regenerate('video')}
          onUpdateText={(text) => updatePromptText('video', text)}
        />
      </div>
    </div>
  );
}

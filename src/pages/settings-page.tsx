import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useSettingsStore } from '../store/settings-store';
import { FAL_IMAGE_MODELS, FAL_VIDEO_MODELS } from '../config/fal-models';
import { MUSIC_MODELS } from '../config/kolbo-models';
import { testProviderConnection } from '../services/generation/generation-service';

export function SettingsPage() {
  const { t } = useTranslation();
  const settings = useSettingsStore();
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const handleTestConnection = async () => {
    setTestStatus('testing');
    try {
      const ok = await testProviderConnection(settings.preferredImageModel);
      setTestStatus(ok ? 'success' : 'error');
    } catch {
      setTestStatus('error');
    }
    setTimeout(() => setTestStatus('idle'), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-text mb-6">{t('nav.settings')}</h2>

      <div className="space-y-6">
        {/* Language */}
        <Section title={settings.language === 'he' ? 'שפה' : 'Language'}>
          <div className="flex gap-2">
            <button
              onClick={() => settings.setLanguage('he')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                settings.language === 'he'
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-lighter text-text-muted hover:text-text'
              }`}
            >
              עברית
            </button>
            <button
              onClick={() => settings.setLanguage('en')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                settings.language === 'en'
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-lighter text-text-muted hover:text-text'
              }`}
            >
              English
            </button>
          </div>
        </Section>

        {/* Default Duration */}
        <Section title={settings.language === 'he' ? 'משך ברירת מחדל (שניות)' : 'Default Duration (seconds)'}>
          <input
            type="number"
            min={1}
            max={60}
            value={settings.defaultDuration}
            onChange={(e) => settings.setDefaultDuration(Number(e.target.value) || 8)}
            className="input-field w-24"
          />
        </Section>

        {/* Preferred Models */}
        <Section title={settings.language === 'he' ? 'מודלים מועדפים' : 'Preferred Models'}>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-text-muted mb-1">
                {settings.language === 'he' ? 'תמונות (FAL.ai)' : 'Images (FAL.ai)'}
              </label>
              <select
                value={settings.preferredImageModel}
                onChange={(e) => settings.setPreferredImageModel(e.target.value)}
                className="input-field"
              >
                {FAL_IMAGE_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.cost})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-text-muted mb-1">
                {settings.language === 'he' ? 'וידאו (FAL.ai)' : 'Video (FAL.ai)'}
              </label>
              <select
                value={settings.preferredVideoModel}
                onChange={(e) => settings.setPreferredVideoModel(e.target.value)}
                className="input-field"
              >
                {FAL_VIDEO_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.cost})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-text-muted mb-1">
                {settings.language === 'he' ? 'מוזיקה' : 'Music'}
              </label>
              <select
                value={settings.preferredMusicModel}
                onChange={(e) => settings.setPreferredMusicModel(e.target.value)}
                className="input-field"
              >
                {MUSIC_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>
        </Section>

        {/* Claude API Key */}
        <Section title={settings.language === 'he' ? 'מפתח Claude API' : 'Claude API Key'}>
          <p className="text-sm text-text-muted mb-3">
            {settings.language === 'he'
              ? 'הזן את מפתח ה-API שלך מ-Anthropic כדי ליצור סטוריבורד מרעיון'
              : 'Enter your API key from Anthropic to generate storyboards from ideas'}
          </p>
          <input
            type="password"
            placeholder="sk-ant-..."
            value={settings.claudeApiKey || ''}
            onChange={(e) => settings.setClaudeApiKey(e.target.value || null)}
            className="input-field"
            dir="ltr"
          />
        </Section>

        {/* FAL.ai API Key */}
        <Section title={settings.language === 'he' ? 'מפתח FAL.ai API' : 'FAL.ai API Key'}>
          <p className="text-sm text-text-muted mb-3">
            {settings.language === 'he'
              ? 'הזן את מפתח ה-API שלך מ-fal.ai כדי ליצור תמונות ווידאו'
              : 'Enter your API key from fal.ai to generate images and videos'}
          </p>
          <input
            type="password"
            placeholder="fal-..."
            value={settings.falApiKey || ''}
            onChange={(e) => settings.setFalApiKey(e.target.value || null)}
            className="input-field mb-3"
            dir="ltr"
          />
          <button
            onClick={handleTestConnection}
            disabled={testStatus === 'testing' || !settings.falApiKey}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-primary-600 hover:bg-primary-700 text-white disabled:opacity-60"
          >
            {testStatus === 'testing' && <Loader2 className="w-4 h-4 animate-spin" />}
            {testStatus === 'success' && <CheckCircle className="w-4 h-4 text-green-300" />}
            {testStatus === 'error' && <XCircle className="w-4 h-4 text-red-300" />}
            {settings.language === 'he'
              ? testStatus === 'testing' ? 'בודק...' : testStatus === 'success' ? 'מחובר!' : testStatus === 'error' ? 'חיבור נכשל' : 'בדוק חיבור'
              : testStatus === 'testing' ? 'Testing...' : testStatus === 'success' ? 'Connected!' : testStatus === 'error' ? 'Connection Failed' : 'Test Connection'}
          </button>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface-light border border-border rounded-xl p-5">
      <h3 className="font-semibold text-text mb-3">{title}</h3>
      {children}
    </div>
  );
}

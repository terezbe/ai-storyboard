import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../store/settings-store';
import { IMAGE_MODELS, VIDEO_MODELS, MUSIC_MODELS } from '../config/kolbo-models';

export function SettingsPage() {
  const { t } = useTranslation();
  const settings = useSettingsStore();

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
                {settings.language === 'he' ? 'תמונות' : 'Images'}
              </label>
              <select
                value={settings.preferredImageModel}
                onChange={(e) => settings.setPreferredImageModel(e.target.value)}
                className="input-field"
              >
                {IMAGE_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-text-muted mb-1">
                {settings.language === 'he' ? 'וידאו' : 'Video'}
              </label>
              <select
                value={settings.preferredVideoModel}
                onChange={(e) => settings.setPreferredVideoModel(e.target.value)}
                className="input-field"
              >
                {VIDEO_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
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

        {/* API Key (future) */}
        <Section title="API Key (Anthropic)">
          <p className="text-sm text-text-muted mb-2">
            {settings.language === 'he'
              ? 'בעתיד - חבר API key של Anthropic ליצירה אוטומטית'
              : 'Future - connect Anthropic API key for automatic generation'}
          </p>
          <input
            type="password"
            placeholder="sk-ant-..."
            value={settings.apiKey || ''}
            onChange={(e) => settings.setApiKey(e.target.value || null)}
            className="input-field"
            dir="ltr"
          />
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

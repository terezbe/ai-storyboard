import { useSettingsStore } from '../../store/settings-store';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useSettingsStore();

  const toggle = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-surface-lighter transition-colors"
      title={language === 'he' ? 'Switch to English' : 'עבור לעברית'}
    >
      <Languages className="w-4 h-4" />
      {language === 'he' ? 'EN' : 'HE'}
    </button>
  );
}

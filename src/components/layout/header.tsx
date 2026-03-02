import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Film, Settings, Download, Home, FlaskConical, Lightbulb } from 'lucide-react';
import { LanguageToggle } from './language-toggle';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-primary-600 text-white'
      : 'text-text-muted hover:text-text hover:bg-surface-lighter';

  return (
    <header className="bg-surface-light border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-[1800px] mx-auto">
        <div className="flex items-center gap-3">
          <Film className="w-7 h-7 text-primary-400" />
          <h1 className="text-xl font-bold text-text">
            {t('app.title')}
          </h1>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/')}`}
          >
            <Home className="w-4 h-4" />
            {t('nav.home')}
          </Link>
          <Link
            to="/idea"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/idea')}`}
          >
            <Lightbulb className="w-4 h-4" />
            {t('nav.newIdea')}
          </Link>
          <Link
            to="/import"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/import')}`}
          >
            <Download className="w-4 h-4" />
            {t('nav.import')}
          </Link>
          <Link
            to="/test"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/test')}`}
          >
            <FlaskConical className="w-4 h-4" />
            Test AI
          </Link>
          <Link
            to="/settings"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/settings')}`}
          >
            <Settings className="w-4 h-4" />
            {t('nav.settings')}
          </Link>
          <div className="ms-3 border-s border-border ps-3">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSettingsStore } from './store/settings-store';
import { AppLayout } from './layouts/app-layout';
import { HomePage } from './pages/home-page';
import { ProjectPage } from './pages/project-page';
import { SettingsPage } from './pages/settings-page';
import { ImportPage } from './pages/import-page';
import { TestGenerationPage } from './pages/test-generation-page';
import { IdeaPage } from './pages/idea-page';

function App() {
  const { i18n } = useTranslation();
  const language = useSettingsStore((s) => s.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, i18n]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/idea" element={<IdeaPage />} />
          <Route path="/import" element={<ImportPage />} />
          <Route path="/test" element={<TestGenerationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

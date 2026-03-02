import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Copy, Check, Download, FileText, FileJson, FileSpreadsheet } from 'lucide-react';
import { useProjectStore } from '../../store/project-store';
import { exportToKolboPrompts, exportToJson } from '../../lib/export/kolbo-exporter';
import type { ExportFormat } from '../../types/project';

export function ExportModal({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const { currentProject } = useProjectStore();
  const [format, setFormat] = useState<ExportFormat>('kolbo-prompts');
  const [copied, setCopied] = useState(false);

  if (!currentProject) return null;

  const getExportContent = () => {
    switch (format) {
      case 'kolbo-prompts':
        return exportToKolboPrompts(currentProject);
      case 'json':
        return exportToJson(currentProject);
      default:
        return '';
    }
  };

  const content = getExportContent();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = format === 'json' ? 'json' : 'txt';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProject.name.replace(/\s+/g, '-')}-storyboard.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formats: { key: ExportFormat; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      key: 'kolbo-prompts',
      label: t('export.kolboPrompts'),
      icon: <FileSpreadsheet className="w-5 h-5" />,
      desc: 'Formatted prompts ready for Kolbo.AI',
    },
    {
      key: 'json',
      label: t('export.json'),
      icon: <FileJson className="w-5 h-5" />,
      desc: 'JSON file for import/export',
    },
    {
      key: 'pdf',
      label: t('export.pdf'),
      icon: <FileText className="w-5 h-5" />,
      desc: 'Coming soon',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-surface-light border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border shrink-0">
          <h2 className="text-lg font-bold text-text">{t('export.title')}</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Format selector */}
          <div className="w-52 border-e border-border p-3 space-y-1 shrink-0">
            {formats.map((f) => (
              <button
                key={f.key}
                onClick={() => f.key !== 'pdf' && setFormat(f.key)}
                disabled={f.key === 'pdf'}
                className={`w-full text-start flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  format === f.key
                    ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                    : f.key === 'pdf'
                    ? 'text-text-muted/40 cursor-not-allowed'
                    : 'text-text-muted hover:bg-surface-lighter hover:text-text border border-transparent'
                }`}
              >
                {f.icon}
                <div>
                  <div>{f.label}</div>
                  <div className="text-[10px] opacity-60">{f.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content preview */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-xs text-text font-mono whitespace-pre-wrap bg-surface rounded-lg p-4 min-h-full">
                {content}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 p-4 border-t border-border shrink-0">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-lighter hover:bg-border text-text text-sm transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? t('prompt.copied') : t('export.copyAll')}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                {t('export.download')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

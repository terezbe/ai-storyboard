import { useTranslation } from 'react-i18next';
import { ArrowRight, Wand2, AlignLeft } from 'lucide-react';
import type { MusicVideoData, SongSection } from '../../../types/wizard-data';
import { SECTION_TYPE_EMOJIS, SECTION_TYPE_COLORS } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface LyricsSyncStepProps {
  data: MusicVideoData;
  onChange: (d: MusicVideoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

export function LyricsSyncStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: LyricsSyncStepProps) {
  const { t } = useTranslation();

  const updateFullLyrics = (fullLyrics: string) => {
    onChange({ ...data, fullLyrics });
  };

  const updateSectionLyrics = (sectionId: string, lyrics: string) => {
    onChange({
      ...data,
      songSections: data.songSections.map((s: SongSection) =>
        s.id === sectionId ? { ...s, lyrics } : s,
      ),
    });
  };

  const handleAutoSplit = () => {
    const lyrics = data.fullLyrics.trim();
    if (!lyrics || data.songSections.length === 0) return;

    // Split lyrics into non-empty lines
    const lines = lyrics
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length === 0) return;

    // Filter sections that could have lyrics (not instrumental)
    const lyricSections = data.songSections.filter(
      (s) => s.type !== 'instrumental',
    );

    if (lyricSections.length === 0) {
      // If all sections are instrumental, distribute evenly across all sections
      const linesPerSection = Math.ceil(lines.length / data.songSections.length);
      const updatedSections = data.songSections.map((section, i) => {
        const start = i * linesPerSection;
        const sectionLines = lines.slice(start, start + linesPerSection);
        return { ...section, lyrics: sectionLines.join('\n') };
      });
      onChange({ ...data, songSections: updatedSections });
      return;
    }

    // Distribute lines across lyric-bearing sections
    const linesPerSection = Math.ceil(lines.length / lyricSections.length);
    const lyricSectionIds = new Set(lyricSections.map((s) => s.id));
    let lineIndex = 0;

    const updatedSections = data.songSections.map((section) => {
      if (!lyricSectionIds.has(section.id)) {
        return { ...section, lyrics: '' };
      }
      const start = lineIndex;
      const sectionLines = lines.slice(start, start + linesPerSection);
      lineIndex = start + linesPerSection;
      return { ...section, lyrics: sectionLines.join('\n') };
    });

    onChange({ ...data, songSections: updatedSections });
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text flex items-center gap-2">
          <AlignLeft className="w-5 h-5 text-primary-400" />
          {t('musicVideo.lyrics.title')}
        </h3>
      </div>

      {/* Full Lyrics Textarea */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('musicVideo.lyrics.fullLyrics')}
        </label>
        <textarea
          value={data.fullLyrics}
          onChange={(e) => updateFullLyrics(e.target.value)}
          rows={6}
          placeholder={t('musicVideo.lyrics.placeholder', 'Paste the full song lyrics here...')}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500 resize-y"
        />
      </div>

      {/* Auto-split Button */}
      {data.fullLyrics.trim() && data.songSections.length > 0 && (
        <button
          onClick={handleAutoSplit}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-border text-text-muted hover:text-primary-300 hover:border-primary-500/50 transition-colors"
        >
          <Wand2 className="w-4 h-4" />
          {t('musicVideo.lyrics.autoSplit')}
        </button>
      )}

      {/* Section-level Lyrics */}
      {data.songSections.length > 0 && (
        <div className="space-y-3">
          {data.songSections.map((section) => (
            <div
              key={section.id}
              className="bg-surface border border-border rounded-xl p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: SECTION_TYPE_COLORS[section.type] }}
                />
                <span className="text-sm font-medium text-text">
                  {SECTION_TYPE_EMOJIS[section.type]} {section.label}
                </span>
              </div>
              <textarea
                value={section.lyrics}
                onChange={(e) => updateSectionLyrics(section.id, e.target.value)}
                rows={2}
                placeholder={t(
                  'musicVideo.lyrics.sectionPlaceholder',
                  `Lyrics for ${section.label}...`,
                )}
                className="w-full bg-surface-light border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500/50 resize-none"
              />
            </div>
          ))}
        </div>
      )}

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="lyrics-sync"
      />

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="px-4 py-2.5 rounded-xl text-sm text-text-muted hover:text-text hover:bg-surface-lighter transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <ArrowRight className="w-4 h-4 rotate-180" />
            {t('common.back')}
          </span>
        </button>

        <button
          onClick={onNext}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all"
        >
          <ArrowRight className="w-5 h-5" />
          {t('common.next', 'Next')}
        </button>
      </div>
    </div>
  );
}

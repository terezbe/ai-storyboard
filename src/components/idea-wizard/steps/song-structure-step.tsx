import { useTranslation } from 'react-i18next';
import { ArrowRight, Plus, X, ListMusic } from 'lucide-react';
import type { MusicVideoData, SongSection, SongSectionType } from '../../../types/wizard-data';
import { SECTION_TYPE_EMOJIS, SECTION_TYPE_COLORS } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';

interface SongStructureStepProps {
  data: MusicVideoData;
  onChange: (d: MusicVideoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

const SECTION_TYPES: SongSectionType[] = [
  'intro',
  'verse',
  'chorus',
  'bridge',
  'outro',
  'instrumental',
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function SongStructureStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: SongStructureStepProps) {
  const { t } = useTranslation();

  const updateSection = (id: string, partial: Partial<SongSection>) => {
    onChange({
      ...data,
      songSections: data.songSections.map((s) =>
        s.id === id ? { ...s, ...partial } : s,
      ),
    });
  };

  const addSection = () => {
    const lastSection = data.songSections[data.songSections.length - 1];
    const startTime = lastSection ? lastSection.endTime : 0;
    const defaultDuration = 15;

    const newSection: SongSection = {
      id: crypto.randomUUID(),
      type: 'verse',
      label: `${t('musicVideo.structure.sectionTypes.verse')} ${
        data.songSections.filter((s) => s.type === 'verse').length + 1
      }`,
      startTime,
      endTime: startTime + defaultDuration,
      lyrics: '',
    };

    onChange({
      ...data,
      songSections: [...data.songSections, newSection],
    });
  };

  const removeSection = (id: string) => {
    onChange({
      ...data,
      songSections: data.songSections.filter((s) => s.id !== id),
    });
  };

  const handleTypeChange = (id: string, type: SongSectionType) => {
    const section = data.songSections.find((s) => s.id === id);
    if (!section) return;

    const countOfType = data.songSections.filter(
      (s) => s.type === type && s.id !== id,
    ).length;
    const label = `${t(`musicVideo.structure.sectionTypes.${type}`)} ${countOfType + 1}`;
    updateSection(id, { type, label });
  };

  // Calculate total duration from sections
  const totalDuration = data.songSections.reduce(
    (sum, s) => sum + (s.endTime - s.startTime),
    0,
  );

  const canProceed = data.songSections.length > 0;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text flex items-center gap-2">
          <ListMusic className="w-5 h-5 text-primary-400" />
          {t('musicVideo.structure.title')}
        </h3>
      </div>

      {/* Visual Bar Display */}
      {data.songSections.length > 0 && totalDuration > 0 && (
        <div className="flex h-8 rounded-lg overflow-hidden border border-border">
          {data.songSections.map((section) => {
            const sectionDuration = section.endTime - section.startTime;
            const widthPercent = (sectionDuration / totalDuration) * 100;
            return (
              <div
                key={section.id}
                className="flex items-center justify-center text-xs font-medium text-white overflow-hidden"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: SECTION_TYPE_COLORS[section.type],
                  minWidth: '20px',
                }}
                title={`${section.label} (${formatTime(sectionDuration)})`}
              >
                <span className="truncate px-1">
                  {SECTION_TYPE_EMOJIS[section.type]}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Section List */}
      <div className="space-y-3">
        {data.songSections.map((section, index) => (
          <div
            key={section.id}
            className="bg-surface border border-border rounded-xl p-4 space-y-3"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted font-mono">
                #{index + 1}
              </span>

              {/* Type Selector Pills */}
              <div className="flex flex-wrap gap-1.5 flex-1">
                {SECTION_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeChange(section.id, type)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all ${
                      section.type === type
                        ? 'bg-primary-600/20 border border-primary-500 text-primary-300'
                        : 'bg-surface border border-border text-text-muted hover:border-primary-500/50'
                    }`}
                  >
                    <span>{SECTION_TYPE_EMOJIS[type]}</span>
                    <span>{t(`musicVideo.structure.sectionTypes.${type}`)}</span>
                  </button>
                ))}
              </div>

              {/* Delete */}
              <button
                onClick={() => removeSection(section.id)}
                className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Label & Duration */}
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={section.label}
                  onChange={(e) =>
                    updateSection(section.id, { label: e.target.value })
                  }
                  placeholder={t(`musicVideo.structure.sectionTypes.${section.type}`)}
                  className="w-full bg-surface-light border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500/50"
                />
              </div>
              <div className="text-xs text-text-muted self-center shrink-0 font-mono">
                {formatTime(section.endTime - section.startTime)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Section Button */}
      <button
        onClick={addSection}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm border border-dashed border-border text-text-muted hover:text-primary-300 hover:border-primary-500/50 transition-colors"
      >
        <Plus className="w-4 h-4" />
        {t('musicVideo.structure.addSection')}
      </button>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="song-structure"
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
          disabled={!canProceed}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-5 h-5" />
          {t('common.next', 'Next')}
        </button>
      </div>
    </div>
  );
}

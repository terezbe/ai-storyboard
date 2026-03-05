import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, Music, ArrowRight, FileAudio, X } from 'lucide-react';
import type { MusicVideoData } from '../../../types/wizard-data';
import type { ReferenceImage } from '../../../types/project';
import { StepReferenceUpload } from '../step-reference-upload';
import { fileToBase64 } from '../../../lib/image-utils';

interface MusicUploadStepProps {
  data: MusicVideoData;
  onChange: (d: MusicVideoData) => void;
  onNext: () => void;
  onBack: () => void;
  referenceImages: ReferenceImage[];
  onReferenceChange: (imgs: ReferenceImage[]) => void;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function MusicUploadStep({ data, onChange, onNext, onBack, referenceImages, onReferenceChange }: MusicUploadStepProps) {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileSize, setFileSize] = useState<number | null>(null);

  const processFile = useCallback(
    async (file: File) => {
      setFileSize(file.size);
      const dataUrl = await fileToBase64(file);

      // Use a temporary blob URL for the Audio element to read metadata
      const tempUrl = URL.createObjectURL(file);
      const audio = new Audio();
      audio.addEventListener('loadedmetadata', () => {
        URL.revokeObjectURL(tempUrl);
        onChange({
          ...data,
          musicFileUrl: dataUrl,
          musicFileName: file.name,
          duration: isFinite(audio.duration) ? audio.duration : null,
        });
      });
      audio.addEventListener('error', () => {
        URL.revokeObjectURL(tempUrl);
        onChange({
          ...data,
          musicFileUrl: dataUrl,
          musicFileName: file.name,
          duration: null,
        });
      });
      audio.src = tempUrl;
    },
    [data, onChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('audio/')) {
        processFile(file);
      }
    },
    [processFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile],
  );

  const handleRemove = useCallback(() => {
    setFileSize(null);
    onChange({
      ...data,
      musicFileUrl: null,
      musicFileName: '',
      duration: null,
    });
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [data, onChange]);

  const canProceed = !!data.musicFileUrl;

  return (
    <div className="space-y-5">
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-text flex items-center gap-2">
          <Music className="w-5 h-5 text-primary-400" />
          {t('musicVideo.upload.title')}
        </h3>
      </div>

      {/* Dropzone / File Preview */}
      {!data.musicFileUrl ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center gap-3 cursor-pointer transition-all ${
            isDragging
              ? 'border-primary-500 bg-primary-600/10'
              : 'border-border hover:border-primary-500/50 hover:bg-surface'
          }`}
        >
          <Upload className="w-10 h-10 text-text-muted" />
          <p className="text-sm text-text-muted text-center">
            {t('musicVideo.upload.dropzone')}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="bg-surface border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center shrink-0">
            <FileAudio className="w-5 h-5 text-primary-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text truncate">
              {data.musicFileName}
            </p>
            <div className="flex items-center gap-3 mt-0.5 text-xs text-text-muted">
              {fileSize !== null && <span>{formatFileSize(fileSize)}</span>}
              {data.duration !== null && (
                <span>
                  {t('musicVideo.upload.duration')}: {formatDuration(data.duration)}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* BPM Input */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          {t('musicVideo.upload.bpm')}
        </label>
        <input
          type="number"
          min={30}
          max={300}
          value={data.bpm ?? ''}
          onChange={(e) =>
            onChange({
              ...data,
              bpm: e.target.value ? Number(e.target.value) : null,
            })
          }
          placeholder="120"
          className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary-500"
        />
      </div>

      {/* Reference Images */}
      <StepReferenceUpload
        images={referenceImages}
        onChange={onReferenceChange}
        stepId="music-upload"
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

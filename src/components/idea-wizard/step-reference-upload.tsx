import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ImagePlus, X, ChevronDown, ChevronUp } from 'lucide-react';
import { fileToBase64 } from '../../lib/image-utils';
import type { ReferenceImage } from '../../types/project';
import { v4 as uuid } from 'uuid';

interface StepReferenceUploadProps {
  images: ReferenceImage[];
  onChange: (imgs: ReferenceImage[]) => void;
  stepId: string;
  maxImages?: number;
}

export function StepReferenceUpload({ images, onChange, stepId, maxImages = 5 }: StepReferenceUploadProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(images.length > 0);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | File[]) => {
    const remaining = maxImages - images.length;
    if (remaining <= 0) return;

    const toProcess = Array.from(files).slice(0, remaining);
    const newImages: ReferenceImage[] = [];

    for (const file of toProcess) {
      if (!file.type.startsWith('image/')) continue;
      const dataUrl = await fileToBase64(file);
      newImages.push({
        id: uuid(),
        dataUrl,
        label: file.name.replace(/\.[^.]+$/, ''),
        stepSource: stepId,
      });
    }

    if (newImages.length > 0) {
      onChange([...images, ...newImages]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (id: string) => {
    onChange(images.filter(img => img.id !== id));
  };

  return (
    <div className="mt-4 border border-border/50 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs text-text-muted hover:text-text hover:bg-surface-lighter/50 transition-colors"
      >
        <span className="flex items-center gap-1.5">
          <ImagePlus className="w-3.5 h-3.5" />
          {t('referenceUpload.title', 'Reference Images')}
          {images.length > 0 && (
            <span className="bg-primary-600/20 text-primary-400 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
              {images.length}
            </span>
          )}
        </span>
        {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {open && (
        <div className="px-3 pb-3 space-y-2">
          {/* Thumbnails */}
          {images.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {images.map((img) => (
                <div key={img.id} className="relative group w-16 h-16 rounded-lg overflow-hidden border border-border">
                  <img src={img.dataUrl} alt={img.label} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    className="absolute top-0.5 end-0.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-2.5 h-2.5 text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Drop zone */}
          {images.length < maxImages && (
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-dashed cursor-pointer transition-colors text-xs ${
                dragOver
                  ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                  : 'border-border/60 text-text-muted hover:border-primary-400/50 hover:text-text'
              }`}
            >
              <ImagePlus className="w-3.5 h-3.5" />
              {t('referenceUpload.dropHint', 'Drop images or click to upload')}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
              />
            </div>
          )}

          <p className="text-[10px] text-text-muted/60">
            {t('referenceUpload.hint', 'Reference images help the AI understand your visual intent')}
          </p>
        </div>
      )}
    </div>
  );
}

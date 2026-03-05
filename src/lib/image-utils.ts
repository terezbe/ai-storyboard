/**
 * Convert a File to a base64 data URL string.
 * Used to persist uploaded images in IndexedDB (blob URLs don't survive reload).
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Convert a blob URL (from URL.createObjectURL) to a base64 data URL.
 */
export async function blobUrlToBase64(blobUrl: string): Promise<string> {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to convert blob'));
    reader.readAsDataURL(blob);
  });
}

/**
 * Extract the raw base64 data from a data URL string.
 * e.g., "data:image/png;base64,iVBOR..." → "iVBOR..."
 */
export function extractBase64Data(dataUrl: string): { data: string; mediaType: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return { data: '', mediaType: 'image/png' };
  return { data: match[2], mediaType: match[1] };
}

/**
 * Load an image from a URL (data URL, blob URL, or remote URL).
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src.substring(0, 60)}`));
    img.src = src;
  });
}

/**
 * Composite a logo on top of a background image.
 * The logo is centered and scaled to ~30% of the background width.
 * Returns a data URL of the composited image.
 */
export async function compositeLogoOnBackground(
  backgroundUrl: string,
  logoUrl: string,
  logoScale = 0.3,
): Promise<string> {
  const [bg, logo] = await Promise.all([loadImage(backgroundUrl), loadImage(logoUrl)]);

  const canvas = document.createElement('canvas');
  canvas.width = bg.width;
  canvas.height = bg.height;
  const ctx = canvas.getContext('2d')!;

  // Draw background
  ctx.drawImage(bg, 0, 0);

  // Calculate logo size (fit within logoScale of bg width, maintain aspect ratio)
  const maxLogoW = bg.width * logoScale;
  const maxLogoH = bg.height * logoScale;
  const scale = Math.min(maxLogoW / logo.width, maxLogoH / logo.height);
  const logoW = logo.width * scale;
  const logoH = logo.height * scale;

  // Center the logo
  const x = (bg.width - logoW) / 2;
  const y = (bg.height - logoH) / 2;

  // Draw subtle glow behind logo
  ctx.save();
  ctx.shadowColor = 'rgba(255,255,255,0.4)';
  ctx.shadowBlur = 30;
  ctx.drawImage(logo, x, y, logoW, logoH);
  ctx.restore();

  // Draw logo on top (sharp)
  ctx.drawImage(logo, x, y, logoW, logoH);

  return canvas.toDataURL('image/png');
}

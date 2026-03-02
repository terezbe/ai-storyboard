/**
 * 3D Preview Cube — Kolbo-style orientation indicator.
 * Shows the shot image on the front face and rotates as the user
 * adjusts rotation / tilt sliders, giving a visual sense of the
 * camera perspective that will be generated.
 */
export function AngleCube({
  imageUrl,
  rotation = 0,
  tilt = 0,
  zoom = 0,
  size = 120,
}: {
  imageUrl?: string;
  rotation: number;
  tilt: number;
  zoom: number;
  size?: number;
}) {
  const half = size / 2;

  // Zoom maps to translateZ — positive zoom → camera closer (larger), negative → farther
  const zoomTranslate = (zoom / 100) * half * 0.6;

  return (
    <div
      className="flex items-center justify-center"
      style={{ perspective: size * 4, width: size, height: size }}
    >
      <div
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg) rotateX(${-tilt}deg) translateZ(${zoomTranslate}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Front face — image */}
        <div
          className="absolute inset-0 rounded-md overflow-hidden border border-primary-500/60"
          style={{
            transform: `translateZ(${half}px)`,
            backfaceVisibility: 'hidden',
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full bg-surface-lighter flex items-center justify-center">
              <span className="text-xs text-text-muted font-mono">FRONT</span>
            </div>
          )}
        </div>

        {/* Back face */}
        <Face
          label="BACK"
          color="bg-surface-lighter/80"
          transform={`rotateY(180deg) translateZ(${half}px)`}
        />

        {/* Right face */}
        <Face
          label="R"
          color="bg-blue-900/40"
          transform={`rotateY(90deg) translateZ(${half}px)`}
          width={size}
          height={size}
        />

        {/* Left face */}
        <Face
          label="L"
          color="bg-blue-900/40"
          transform={`rotateY(-90deg) translateZ(${half}px)`}
          width={size}
          height={size}
        />

        {/* Top face */}
        <Face
          label="TOP"
          color="bg-indigo-900/40"
          transform={`rotateX(90deg) translateZ(${half}px)`}
          width={size}
          height={size}
        />

        {/* Bottom face */}
        <Face
          label="BTM"
          color="bg-indigo-900/40"
          transform={`rotateX(-90deg) translateZ(${half}px)`}
          width={size}
          height={size}
        />
      </div>
    </div>
  );
}

function Face({
  label,
  color,
  transform,
  width,
  height,
}: {
  label: string;
  color: string;
  transform: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`absolute inset-0 ${color} rounded-md border border-white/10 flex items-center justify-center`}
      style={{
        transform,
        backfaceVisibility: 'hidden',
        width: width ?? '100%',
        height: height ?? '100%',
      }}
    >
      <span className="text-[10px] text-white/30 font-mono font-bold select-none">
        {label}
      </span>
    </div>
  );
}

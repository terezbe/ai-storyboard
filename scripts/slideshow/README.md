# 9:16 Photo Slideshow Generator

Turns a folder of photos into a vertical (1080x1920) slideshow video with
slow, amorphous transitions — built for dreamy/mystical trip recaps.

## What it does

- **Center-crops** every photo to 9:16 (16:9 sources keep only their middle)
- **Constant motion** — nothing is static: alternating slow zoom in/out with
  lateral drift (Ken Burns), plus a rotating per-slide treatment:
  - glowing highlight **trails** (`lagfun`)
  - frame-echo motion **smear** (`tmix`)
  - chromatic shift + slow **hue breathing**
- **Amorphous transitions** (2.6s each): blur-smear, pixel-displacement
  morph, dissolve, radial, zoom-smear...
- **Smart ordering** — slides are chained by perceptual similarity, so each
  image morphs into a visually related one; true duplicates are dropped via
  a colour-aware hash while colour-grade variants are kept
- **Moon interlude** — a generated glowing-full-moon-over-night-sea scene
  with a slow rising pan, inserted at the golden-ratio point (disable with
  `--no-moon`)
- Finishing layer: soft bloom glow, gentle vignette, fine film grain

## Requirements

- Python 3 + Pillow (`pip install pillow`)
- ffmpeg 6+ with libx264

## Usage

```bash
# 1) prepare slides (crop, dedupe, order, moon) into a workspace dir
python3 scripts/slideshow/prep.py /path/to/photos ./slideshow-work

# 2) render (default 600s = 10 minutes)
python3 scripts/slideshow/build.py ./slideshow-work 600

# result:
# ./slideshow-work/slideshow_9x16.mp4  (1080x1920, 30fps, H.264, silent)
```

Rendering is a 3-pass pipeline (per-slide clips → 14-slide chunks → final
join), parallelised across CPU cores; intermediate files are cached, so a
re-run only redoes what's missing. A 10-minute video from ~120 photos takes
roughly 30-60 minutes on 4 cores.

#!/usr/bin/env bash
# ===================================================================
#  Photo slideshow 9:16 — one-click runner for macOS / Linux
#
#  Usage:   ./run.sh /path/to/photos [seconds]
# ===================================================================
set -euo pipefail

PHOTOS="${1:-}"
SECONDS_ARG="${2:-600}"
HERE="$(cd "$(dirname "$0")" && pwd)"
WORK="$HERE/workspace"

if [ -z "$PHOTOS" ]; then
  echo "Usage: ./run.sh /path/to/photos-folder [seconds]"
  exit 1
fi
[ -d "$PHOTOS" ] || { echo "Photo folder not found: $PHOTOS"; exit 1; }

echo "=== checking dependencies ==="
command -v python3 >/dev/null || { echo "python3 not found"; exit 1; }
command -v ffmpeg  >/dev/null || {
  echo "ffmpeg not found. Install it:"
  echo "  macOS:  brew install ffmpeg"
  echo "  Ubuntu: sudo apt install ffmpeg"
  exit 1; }
python3 -c "import PIL" 2>/dev/null || python3 -m pip install --quiet pillow
echo "  OK"

echo
echo "=== step 1/2: preparing slides ==="
python3 "$HERE/prep.py" "$PHOTOS" "$WORK"

echo
echo "=== step 2/2: rendering ${SECONDS_ARG}s video ==="
python3 "$HERE/build.py" "$WORK" "$SECONDS_ARG"

echo
echo "Done! Video: $WORK/slideshow_9x16.mp4"
echo "To re-render from scratch, delete $WORK/clips and $WORK/chunks first."

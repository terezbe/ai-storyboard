#!/usr/bin/env python3
"""Render a 9:16 slideshow with constant motion, glowing trails and smears.

Requires ffmpeg (with libx264) and the workspace produced by prep.py.

Pass 1: one clip per slide. Every slide gets slow Ken Burns motion
        (alternating zoom in/out + lateral drift) plus a rotating
        motion recipe:
          A: lagfun highlight trails (bright areas leave decaying glow)
          B: tmix frame-echo ghosting (motion smear)
          C: chromatic shift + slow hue breathing
        Feature slides (feature.txt) get a slow rising crop-pan with
        strong trails and a 2.4x hold — used for the moon.
Pass 2: xfade-join slides into chunks of 14 with amorphous transitions
        (blur-smear, pixel-morph, dissolve...). Chunks render in parallel.
Pass 3: xfade-join the chunks; add soft bloom glow + fine film grain.

Usage:
    python3 build.py <workspace_dir> [total_seconds] [--crf N] [--no-grain]

Output: <workspace_dir>/slideshow_9x16.mp4  (1080x1920, 30 fps, H.264)

Intermediates are cached under <workspace_dir>/clips and /chunks, so a
re-run only redoes what is missing. Delete those folders to start over.
"""
import os, subprocess, sys, glob, shutil
from concurrent.futures import ThreadPoolExecutor

if len(sys.argv) < 2:
    sys.exit(__doc__)

FFMPEG = shutil.which("ffmpeg")
FFPROBE = shutil.which("ffprobe")
if not FFMPEG or not FFPROBE:
    sys.exit("ffmpeg/ffprobe not found on PATH. Install ffmpeg first "
             "(Windows: winget install Gyan.FFmpeg — then reopen the terminal).")

WS = os.path.abspath(sys.argv[1])
PREP = os.path.join(WS, "prep")
CLIPS, CHUNKS = os.path.join(WS, "clips"), os.path.join(WS, "chunks")
os.makedirs(CLIPS, exist_ok=True); os.makedirs(CHUNKS, exist_ok=True)

GRAIN, CRF, TOTAL = True, 21, 600.0
argv, i = sys.argv[2:], 0
while i < len(argv):
    a = argv[i]
    if a == "--no-grain":
        GRAIN = False
    elif a == "--crf":
        i += 1                       # consume the value so it is never
        CRF = int(argv[i])           # mistaken for the duration
    else:
        TOTAL = float(a)
    i += 1

FPS = 30
FADE = 2.6            # transition length, slow + dreamy
CHUNK = 14

# amorphous transition cycle — heavy on blur-smear and pixel-morph
TRANS = ["hblur", "dissolve", "distance", "smoothup", "zoomin",
         "dissolve", "hblur", "radial", "distance", "circleopen",
         "smoothdown", "fadegrays"]

slides = sorted(glob.glob(os.path.join(PREP, "*.jpg")))
N = len(slides)
if N < 2:
    sys.exit(f"not enough slides in {PREP} — run prep.py first")

feature = set()
feature_path = os.path.join(WS, "feature.txt")
if os.path.exists(feature_path):
    with open(feature_path) as f:
        feature = {int(l) for l in f if l.strip()}

# per-slide durations: featured slides get 2.4x. Solve base D so that
# sum(D_i) - (N-1)*FADE == TOTAL
weights = [2.4 if i in feature else 1.0 for i in range(N)]
D = (TOTAL + (N - 1) * FADE) / sum(weights)
frames = [int(round(w * D * FPS)) for w in weights]
durs = [f / FPS for f in frames]          # exact, matches encoded frames

def run(args):
    """Run a command given as a list — no shell, so paths with spaces
    and filter strings with quotes survive on every platform."""
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stderr[-1500:], file=sys.stderr)
        raise SystemExit(f"FAILED: {' '.join(args[:6])} ...")

def motion_recipe(i, F):
    """Ken Burns base + rotating trail/smear treatment."""
    if i in feature:  # slow rise (crop-pan bottom -> top, no distortion)
        dur = F / FPS
        ease = f"(1-cos(PI*min(t/{dur:.3f},1)))/2"
        zp = f"crop=1620:2880:0:'(ih-2880)*(1-{ease})',scale=1080:1920"
        fx = ("split[m0][m1];[m1]lagfun=decay=0.96[mt];"
              "[m0][mt]blend=all_mode=lighten:all_opacity=0.75,"
              "hue=h='6*sin(2*PI*t/17)'")
        return f"{zp},{fx}"
    zin = (i % 2 == 0)
    z = (f"1.04+0.12*on/{F}" if zin else f"1.16-0.12*on/{F}")
    drift = 0.020 * (1 if i % 4 < 2 else -1)
    x = f"clip(iw/2-(iw/zoom/2)+({drift:+.3f})*iw*on/{F},0,iw-iw/zoom)"
    y = "ih/2-(ih/zoom/2)"
    zp = f"zoompan=z='{z}':x='{x}':y='{y}':d={F}:s=1080x1920:fps={FPS}"
    r = i % 3
    if r == 0:    # glowing highlight trails
        fx = ("split[a][b];[b]lagfun=decay=0.93[t];"
              "[a][t]blend=all_mode=lighten:all_opacity=0.55")
    elif r == 1:  # frame-echo motion smear
        fx = "tmix=frames=9:weights='9 8 7 6 5 4 3 2 1'"
    else:         # chromatic drift + slow hue breathing
        fx = "rgbashift=rh=3:bh=-3:edge=smear,hue=h='7*sin(2*PI*t/11)':s='1+0.06*sin(2*PI*t/7)'"
    return f"{zp},{fx}"

def render_clip(i):
    out = os.path.join(CLIPS, f"{i:03d}.mp4")
    if os.path.exists(out):
        return
    F = frames[i]
    vf = (f"{motion_recipe(i, F)},"
          f"eq=saturation=1.07:contrast=1.03,vignette=a=PI/5.5,format=yuv420p")
    args = [FFMPEG, "-y", "-loglevel", "error", "-hide_banner"]
    # feature slides animate via crop over t -> need a looped video input;
    # zoompan slides duplicate the single frame themselves
    if i in feature:
        args += ["-loop", "1", "-framerate", str(FPS), "-t", f"{F / FPS:.3f}"]
    args += ["-i", slides[i], "-vf", vf, "-frames:v", str(F),
             "-c:v", "libx264", "-preset", "veryfast", "-crf", "16", out]
    run(args)

def xfade_join(inputs, durations, offset_base, out, crf, preset, post=""):
    args = [FFMPEG, "-y", "-loglevel", "error", "-hide_banner"]
    for p in inputs:
        args += ["-i", p]
    fc, prev, total = [], "[0:v]", durations[0]
    for k in range(1, len(inputs)):
        t = TRANS[(offset_base + k - 1) % len(TRANS)]
        off = round(total - FADE, 3)
        lbl = f"[x{k}]" if k < len(inputs) - 1 else "[vj]"
        fc.append(f"{prev}[{k}:v]xfade=transition={t}:duration={FADE}:offset={off}{lbl}")
        prev = lbl
        total = off + durations[k]
    # with a single input no xfade ran, so [vj] never exists — chain the
    # post-processing straight onto the input instead
    fc.append(f"{prev}{post}[vout]" if post else f"{prev}null[vout]")
    args += ["-filter_complex", ";".join(fc), "-map", "[vout]",
             "-c:v", "libx264", "-preset", preset, "-crf", str(crf),
             "-movflags", "+faststart", "-r", str(FPS), out]
    run(args)

def probe_dur(p):
    r = subprocess.run([FFPROBE, "-v", "error", "-show_entries",
                        "format=duration", "-of", "csv=p=0", p],
                       capture_output=True, text=True)
    return float(r.stdout.strip())

def main():
    workers = max(2, (os.cpu_count() or 4) - 1)
    print(f"{N} slides, base {D:.2f}s each, fade {FADE}s, target {TOTAL:.0f}s, "
          f"feature at {sorted(feature)}")
    print(f"pass 1/3 — rendering {N} clips ({workers} at a time)...")

    # threads, not processes: every worker just waits on an ffmpeg
    # subprocess, and this stays portable across Windows/macOS/Linux
    with ThreadPoolExecutor(max_workers=workers) as pool:
        list(pool.map(render_clip, range(N)))

    groups = [list(range(i, min(i + CHUNK, N))) for i in range(0, N, CHUNK)]
    if len(groups) > 1 and len(groups[-1]) == 1:      # avoid 1-clip chunk
        groups[-2] += groups[-1]; groups.pop()

    def render_chunk(gi):
        g = groups[gi]
        out = os.path.join(CHUNKS, f"{gi:02d}.mp4")
        if not os.path.exists(out):
            xfade_join([os.path.join(CLIPS, f"{i:03d}.mp4") for i in g],
                       [durs[i] for i in g], g[0], out, 16, "veryfast")

    print(f"pass 2/3 — joining into {len(groups)} chunks...")
    with ThreadPoolExecutor(max_workers=3) as pool:
        list(pool.map(render_chunk, range(len(groups))))

    print("pass 3/3 — final join + bloom" + (" + grain" if GRAIN else "") + "...")
    chunk_files = [os.path.join(CHUNKS, f"{i:02d}.mp4") for i in range(len(groups))]
    chunk_durs = [probe_dur(p) for p in chunk_files]
    final = os.path.join(WS, "slideshow_9x16.mp4")
    post = ("split[fm][fg];[fg]gblur=sigma=20[fb];"
            "[fm][fb]blend=all_mode=screen:all_opacity=0.16"
            + (",noise=alls=4:allf=t+u" if GRAIN else "") + ",format=yuv420p")
    xfade_join(chunk_files, chunk_durs, 3, final, CRF, "medium", post=post)
    size_mb = os.path.getsize(final) / 1048576
    print(f"\ndone: {final}  ({probe_dur(final):.1f}s, {size_mb:.0f} MB)")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Finish a generated clip for Instagram: join parts, burn the on-screen text, export 1080x1920.

Usage:
  python3 influencers/tools/finish_video.py R2            # uses rosa/videos/R2.mp4 (or R2-1.mp4 + R2-2.mp4)
  python3 influencers/tools/finish_video.py R6 --hook-seconds 0   # b-roll: overlay beats only
  python3 influencers/tools/finish_video.py all           # every clip found in */videos/

Reads the on-screen text (hook) and b-roll overlay beats from <character>/content-plan.md.
Writes <character>/final/<ID>.mp4. Needs ffmpeg with drawtext (installed system-wide here).
Captions for the spoken words: use CapCut "Auto captions" or Instagram Edits (free); they sync to speech.
"""
import os
import re
import subprocess
import sys
import tempfile
import textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from build_video_prompts import parse_plan  # noqa: E402

PREFIX = {"R": "rosa", "Y": "ray", "L": "lou"}
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def strip_emoji(s):
    return "".join(ch for ch in s if ord(ch) < 0x2190 or 0x2E80 <= ord(ch) < 0x1F000).strip()


def duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", path],
                         capture_output=True, text=True, check=True).stdout
    return float(out.strip())


def text_filter(txt, t0, t1, tmpdir, n, size=64, y="h*0.12"):
    lines = textwrap.wrap(strip_emoji(txt), width=22)
    path = os.path.join(tmpdir, f"t{n}.txt")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))
    return (f"drawtext=fontfile={FONT}:textfile={path}:fontsize={size}:fontcolor=white:borderw=6:bordercolor=black@0.85:"
            f"line_spacing=14:text_align=C:x=(w-text_w)/2:y={y}:enable='between(t,{t0:.2f},{t1:.2f})'")


def finish(vid, hook_seconds=3.5):
    c = PREFIX[vid[0]]
    vdir = os.path.join(ROOT, c, "videos")
    fdir = os.path.join(ROOT, c, "final")
    os.makedirs(fdir, exist_ok=True)
    single = os.path.join(vdir, f"{vid}.mp4")
    parts = [os.path.join(vdir, f"{vid}-1.mp4"), os.path.join(vdir, f"{vid}-2.mp4")]
    with tempfile.TemporaryDirectory() as tmp:
        if os.path.exists(single):
            src = single
        elif all(os.path.exists(p) for p in parts):
            src = os.path.join(tmp, "joined.mp4")
            norm = []
            for i, p in enumerate(parts):
                q = os.path.join(tmp, f"p{i}.mp4")
                subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", p, "-vf",
                                "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30",
                                "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-c:a", "aac", "-ar", "48000", "-ac", "2", q],
                               check=True)
                norm.append(q)
            lst = os.path.join(tmp, "list.txt")
            with open(lst, "w") as fh:
                fh.writelines(f"file '{q}'\n" for q in norm)
            subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", src], check=True)
        else:
            print(f"skip {vid}: no {vid}.mp4 or {vid}-1.mp4 + {vid}-2.mp4 in {vdir}")
            return
        p = parse_plan(c)[vid]
        dur = duration(src)
        filters = ["scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30"]
        n = 0
        if p["overlay"]:
            span = dur / len(p["overlay"])
            for i, beat in enumerate(p["overlay"]):
                filters.append(text_filter(beat, i * span, (i + 1) * span, tmp, n, size=58, y="h*0.10"))
                n += 1
        elif p["onscreen"] and hook_seconds > 0:
            filters.append(text_filter(p["onscreen"], 0, min(hook_seconds, dur), tmp, n))
        out = os.path.join(fdir, f"{vid}.mp4")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", src, "-vf", ",".join(filters), "-c:v", "libx264", "-preset", "medium",
                        "-crf", "19", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", out], check=True)
        print(f"wrote {out} ({dur:.1f} s)")


if __name__ == "__main__":
    args = sys.argv[1:]
    hook = 3.5
    if "--hook-seconds" in args:
        i = args.index("--hook-seconds")
        hook = float(args[i + 1])
        del args[i:i + 2]
    if args == ["all"]:
        ids = set()
        for c in PREFIX.values():
            d = os.path.join(ROOT, c, "videos")
            if os.path.isdir(d):
                ids |= {re.sub(r"-[12]$", "", f[:-4]) for f in os.listdir(d) if f.endswith(".mp4")}
        args = sorted(ids)
    for vid in args:
        finish(vid, hook)

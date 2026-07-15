#!/usr/bin/env python3
"""Prepare a folder of photos for the 9:16 slideshow renderer.

- EXIF-orients every image and center-crops it to 9:16
  (16:9 sources keep only their middle), resized to 1620x2880
- drops true duplicates via a colour-aware perceptual hash
  (colour-grade variants of the same artwork are kept — they morph well)
- orders slides by visual similarity (greedy nearest-neighbour chain)
  so consecutive images flow into each other
- optionally generates a glowing-moon-over-night-sea slide and inserts
  it at the golden-ratio point (its index is written to feature.txt,
  the renderer gives it a long hold and a rising pan)

Usage:
    python3 prep.py <photos_dir> <workspace_dir> [--no-moon]

Outputs in <workspace_dir>: prep/NNN.jpg, manifest.tsv, feature.txt
"""
import os, sys, glob, math, random
from PIL import Image, ImageOps, ImageDraw, ImageFilter, ImageChops

W, H = 1620, 2880  # 9:16 at 1.5x of 1080x1920 (headroom for Ken Burns)
MOON_H = 4200      # taller canvas -> vertical pan reveals the moon
EXTS = ("*.jpg", "*.jpeg", "*.png", "*.webp", "*.img")

def load(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    if im.mode != "RGB":
        im = im.convert("RGB")
    return im

def center_crop_916(im):
    w, h = im.size
    target = 9 / 16
    if w / h > target:          # too wide -> take the middle
        nw = int(h * target)
        x = (w - nw) // 2
        im = im.crop((x, 0, x + nw, h))
    else:                        # too tall -> trim top/bottom equally
        nh = int(w / target)
        y = (h - nh) // 2
        im = im.crop((0, y, w, y + nh))
    return im

def ahash(im, size=16):
    g = im.convert("L").resize((size, size), Image.LANCZOS)
    px = list(g.getdata())
    avg = sum(px) / len(px)
    return [1 if p > avg else 0 for p in px]

def chash(im, size=16):
    """Per-channel hash: tells true duplicates apart from colour-grade
    variants of the same artwork (which are kept)."""
    bits = []
    small = im.resize((size, size), Image.LANCZOS)
    for ch in small.split():
        px = list(ch.getdata())
        avg = sum(px) / len(px)
        bits += [1 if p > avg else 0 for p in px]
    return bits

def hdist(a, b):
    return sum(x != y for x, y in zip(a, b))

def make_moon():
    """Glowing full moon rising over a night sea."""
    random.seed(7)
    im = Image.new("RGB", (W, MOON_H))
    d = ImageDraw.Draw(im)
    horizon = int(MOON_H * 0.72)
    for y in range(horizon):                      # sky gradient
        t = y / horizon
        d.line([(0, y), (W, y)],
               fill=(int(8 + 26 * t), int(10 + 44 * t), int(30 + 72 * t)))
    for y in range(horizon, MOON_H):              # sea gradient
        t = (y - horizon) / (MOON_H - horizon)
        d.line([(0, y), (W, y)],
               fill=(int(16 * (1 - t) + 4), int(42 * (1 - t) + 6), int(66 * (1 - t) + 14)))
    for _ in range(420):                          # stars
        x, y = random.randint(0, W - 1), random.randint(0, horizon - 120)
        b = random.randint(70, 235)
        r = random.choice([0, 0, 0, 1])
        d.ellipse([x - r, y - r, x + r + 1, y + r + 1], fill=(b, b, min(255, b + 15)))
    mx, my, mr = W // 2, int(MOON_H * 0.20), 340
    halo = Image.new("RGB", im.size, 0)           # layered halo
    hd = ImageDraw.Draw(halo)
    for rr, val in [(mr * 4.2, 26), (mr * 3.0, 44), (mr * 2.1, 74), (mr * 1.45, 120)]:
        hd.ellipse([mx - rr, my - rr, mx + rr, my + rr],
                   fill=(int(val * 0.86), int(val * 0.94), val))
    halo = halo.filter(ImageFilter.GaussianBlur(140))
    im = ImageChops.screen(im, halo)
    disc = Image.new("RGB", im.size, 0)           # moon disc + maria
    dd = ImageDraw.Draw(disc)
    dd.ellipse([mx - mr, my - mr, mx + mr, my + mr], fill=(236, 238, 224))
    for _ in range(14):
        a = random.uniform(0, 2 * math.pi)
        rr = random.uniform(mr * 0.15, mr * 0.80)
        br = random.uniform(mr * 0.05, mr * 0.16)
        bx, by = mx + rr * math.cos(a), my + rr * math.sin(a)
        dd.ellipse([bx - br, by - br, bx + br, by + br], fill=(222, 224, 212))
    disc = disc.filter(ImageFilter.GaussianBlur(10))
    im = ImageChops.lighter(im, disc)
    refl = Image.new("RGB", im.size, 0)           # shimmering reflection
    rd = ImageDraw.Draw(refl)
    for y in range(horizon, MOON_H, 2):
        if random.random() < 0.28:
            continue
        t = (y - horizon) / (MOON_H - horizon)
        half = int(mr * (0.22 + 1.6 * t) * random.uniform(0.35, 1.0))
        off = int(random.gauss(0, 6 + 40 * t))
        val = int(135 * (1 - t) ** 1.5)
        if val > 4:
            rd.line([(mx + off - half, y), (mx + off + half, y)],
                    fill=(int(val * 0.82), int(val * 0.92), val), width=2)
    refl = refl.filter(ImageFilter.GaussianBlur(8))
    im = ImageChops.screen(im, refl)
    return im.filter(ImageFilter.GaussianBlur(1.2))

def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    src, ws = sys.argv[1], sys.argv[2]
    moon = "--no-moon" not in sys.argv
    prep = os.path.join(ws, "prep")
    os.makedirs(prep, exist_ok=True)

    files = sorted(f for e in EXTS for f in glob.glob(os.path.join(src, e)))
    items = []
    for f in files:
        try:
            im = load(f)
        except Exception as e:
            print(f"SKIP unreadable {os.path.basename(f)}: {e}", file=sys.stderr)
            continue
        items.append({"id": os.path.basename(f), "im": im,
                      "pixels": im.size[0] * im.size[1],
                      "hash": ahash(im), "chash": chash(im)})

    keep, dropped = [], []
    for it in sorted(items, key=lambda x: -x["pixels"]):
        dup = next((k for k in keep if hdist(k["chash"], it["chash"]) <= 30), None)
        (dropped.append((it["id"], dup["id"])) if dup else keep.append(it))

    chain = [keep.pop(0)]
    while keep:
        last = chain[-1]
        nxt = min(keep, key=lambda k: hdist(last["hash"], k["hash"]))
        keep.remove(nxt)
        chain.append(nxt)

    moon_pos = int(len(chain) * 0.62) if moon else -1
    with open(os.path.join(ws, "manifest.tsv"), "w") as mf:
        idx = 0
        for i, it in enumerate(chain):
            if i == moon_pos:
                make_moon().save(os.path.join(prep, f"{idx:03d}.jpg"), quality=93)
                mf.write(f"{idx:03d}\tMOON\t0\n")
                with open(os.path.join(ws, "feature.txt"), "w") as ff:
                    ff.write(f"{idx}\n")
                idx += 1
            im = center_crop_916(it["im"]).resize((W, H), Image.LANCZOS)
            im.save(os.path.join(prep, f"{idx:03d}.jpg"), quality=93)
            d = hdist(chain[i - 1]["hash"], it["hash"]) if i else 0
            mf.write(f"{idx:03d}\t{it['id']}\t{d}\n")
            idx += 1

    print(f"kept {len(chain)} slides{' + moon' if moon else ''}, "
          f"dropped {len(dropped)} duplicates")
    for a, b in dropped:
        print(f"  dup: {a} ~= {b}")

if __name__ == "__main__":
    main()

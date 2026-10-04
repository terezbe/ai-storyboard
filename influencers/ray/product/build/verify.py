#!/usr/bin/env python3
"""Verify the built PDF against the contents page and the page map.

1. Every unit's title appears on the page the page map says it is on (read from the PDF itself).
2. Every contents entry's printed number matches the page that entry's title is really on.
3. No unresolved page reference ("??") anywhere in the PDF text.
4. No banned characters (em/en dash, arrows, ticks, boxes, ellipsis) in the PDF text.
"""
import html, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).parent
PDF = ROOT.parent / 'the-quiet-money-workbook.pdf'
BOOK = (ROOT / 'out' / 'book.html').read_text()
PAGEMAP = json.loads((ROOT / 'out' / 'pagemap.json').read_text())


def norm(s):
    s = html.unescape(s)
    s = s.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', s).strip().lower()


def page_text(n, layout=False):
    args = ['pdftotext', '-f', str(n), '-l', str(n)] + (['-layout'] if layout else []) + [str(PDF), '-']
    return subprocess.run(args, capture_output=True, text=True, check=True).stdout


npages = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', str(PDF)], capture_output=True, text=True).stdout).group(1))
errors = []

# 1. titles on their pages
titles = re.findall(r'<section class="page[^"]*" data-id="([^"]+)" data-title="([^"]*)"', BOOK)
for pid, title in titles:
    n = PAGEMAP[pid]
    if pid == 'cover':
        want = 'the quiet money'
    elif pid.startswith('wk-') and pid != 'wk-end':
        want = f"week {pid[3:]} of 12"
    else:
        # check the main heading only (titles like "Part One: The Leak Hunt" show "The Leak Hunt")
        want = norm(title.split(':')[-1]).replace(', continued', '')
    txt = norm(page_text(n))
    if want not in txt:
        errors.append(f'title "{want}" not found on page {n} ({pid})')

# 2. contents entries vs real pages
rows = re.findall(r'<div class="tc[^"]*"><span class="tl">(.*?)</span><span class="dots"></span><span class="tn"><span data-toc="([^"]+)">', BOOK)
toc_txt = page_text(PAGEMAP['contents'], layout=True)
toc_norm = norm(toc_txt)
checked = 0
for label, tid in rows:
    lab = norm(re.sub(r'<[^>]+>', '', label))
    expected = PAGEMAP[tid]
    # find "label ..... N" in the contents page text
    m = re.search(re.escape(lab) + r'[ .]*?(\d+)', toc_norm)
    if not m:
        errors.append(f'contents entry "{lab}" not found in PDF text')
        continue
    printed = int(m.group(1))
    if printed != expected:
        errors.append(f'contents "{lab}" prints {printed}, real page {expected}')
    # and confirm the target page really carries that unit
    checked += 1

# 3 + 4. whole-document text checks
full = subprocess.run(['pdftotext', str(PDF), '-'], capture_output=True, text=True).stdout
if '??' in full:
    errors.append(f'unresolved "??" references: {full.count("??")}')
bad = {'—': 'em dash', '–': 'en dash', '…': 'ellipsis'}
for ch, name in bad.items():
    if ch in full:
        errors.append(f'{name} found {full.count(ch)}x')
for rng, name in [((0x2190, 0x21FF), 'arrow'), ((0x2713, 0x2718), 'tick'), ((0x2610, 0x2612), 'ballot box'), ((0x25A0, 0x25FF), 'geometric shape')]:
    hits = [c for c in full if rng[0] <= ord(c) <= rng[1]]
    if hits:
        errors.append(f'{name} glyphs found: {len(hits)}')

print(f'PDF pages: {npages}; units checked: {len(titles)}; contents entries checked: {checked}')
if errors:
    print('PROBLEMS:')
    for e in errors:
        print(' -', e)
    sys.exit(1)
print('All titles on their pages, all contents numbers correct, no unresolved references, no banned characters.')

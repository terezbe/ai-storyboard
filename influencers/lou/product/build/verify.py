#!/usr/bin/env python3
"""Automated audit checks for Dont-Text-Call-Grandpa-Lou.pdf.
Run from product/build:  python3 verify.py
Checks: page count and size, contents page numbers vs real pages, footer page numbers,
card cross-references, forbidden characters, quote direction, brand names, catchphrase count."""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PDF = os.path.join(HERE, '..', 'Dont-Text-Call-Grandpa-Lou.pdf')
fails = []

def run(*a):
    return subprocess.run(list(a), capture_output=True, text=True).stdout

info = run('pdfinfo', PDF)
n = int(re.search(r'Pages:\s+(\d+)', info).group(1))
print('pages:', n, '|', re.search(r'Page size:\s+(.*)', info).group(1).strip())
if 'letter' not in info: fails.append('page size is not US Letter')

raw = [run('pdftotext', '-enc', 'UTF-8', '-f', str(i), '-l', str(i), PDF, '-') for i in range(1, n + 1)]
lay = [run('pdftotext', '-enc', 'UTF-8', '-layout', '-f', str(i), '-l', str(i), PDF, '-') for i in range(1, n + 1)]
norm = lambda s: re.sub(r'\s+', ' ', s.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"'))
P = [norm(p) for p in lay]

# 1. contents page (page 2) vs real pages
cards = json.loads(run('node', '-e', 'const C=require("%s/content.js");console.log(JSON.stringify(C.cards.map(c=>({n:c.n,title:c.title}))))' % HERE))
idx = P[1]
for c in sorted(cards, key=lambda c: c['n']):
    t = norm(c['title'])
    m = re.search(re.escape(t) + r'[ ._]*?(\d+)\b', idx)
    if not m: fails.append(f'card {c["n"]} missing from contents'); continue
    pg = int(m.group(1)); tgt = P[pg - 1].upper()
    if f'CARD {c["n"]} OF 25' not in tgt or t.upper() not in tgt: fails.append(f'contents: card {c["n"]} -> p{pg} wrong')
others = {'A letter from Lou': 'A letter from Lou', 'Why this works': 'Why this works', 'How to use this file': 'How to use this file',
          'A no is an answer': 'A no is an answer', 'Make it fit your life': 'Make it fit your life',
          'The five cards to read tonight': 'The five cards to read tonight', "Lou's Rules on one page": "Lou's Rules",
          'The first-call cheat card': 'The first-call cheat card', "Angie's Goodnight Rule": "Angie's Goodnight Rule",
          'Ten cheap Tuesday dates': 'Ten cheap Tuesday dates', 'The usage log': 'The usage log', 'The small print': 'The small print'}
for label, head in others.items():
    m = re.search(re.escape(label) + r'[ ._]*?(\d+)\b', idx)
    if not m: fails.append(f'{label} missing from contents'); continue
    if head.upper() not in P[int(m.group(1)) - 1].upper()[:500]: fails.append(f'contents: {label} -> p{m.group(1)} wrong')
print('contents entries checked:', len(cards) + len(others))

# 2. footer number on every interior page equals its physical page
for i in range(2, n + 1):
    lines = [l for l in lay[i - 1].splitlines() if l.strip()]
    m = re.search(r'(\d+)\s*$', lines[-1]) if lines else None
    if not m or int(m.group(1)) != i: fails.append(f'footer number wrong on p{i}')
print('footers checked:', n - 1)

# 3. "card N (p. X)" cross-references
flat = [norm(t) for t in raw]
where = {}
for i, t in enumerate(flat, 1):
    m = re.search(r'(?i)card (\d+) of 25', t)
    if m: where[int(m.group(1))] = i
xr = 0
for i, t in enumerate(flat, 1):
    for m in re.finditer(r'card (\d+) \(p\. (\d+)\)', t):
        xr += 1
        if where.get(int(m.group(1))) != int(m.group(2)): fails.append(f'bad cross-ref on p{i}: {m.group(0)}')
print('card cross-references checked:', xr)

# 4. characters
alltext = ''.join(raw)
forbidden = {0x2014: 'em dash', 0x2013: 'en dash', 0x2192: 'arrow', 0x2190: 'arrow', 0x2713: 'tick', 0x2714: 'tick',
             0x2610: 'box', 0x2611: 'box', 0x2605: 'star', 0x25A1: 'square', 0x2022: 'bullet glyph', 0xFFFD: 'replacement char'}
for ch in set(alltext):
    if ord(ch) in forbidden: fails.append(f'forbidden character in PDF: {forbidden[ord(ch)]}')
src = ''.join(open(os.path.join(HERE, f), encoding='utf-8').read() for f in ['content.js', 'pages.js'])
for ch in set(src):
    if ord(ch) in forbidden: fails.append(f'forbidden character in source: {forbidden[ord(ch)]}')
if re.search(r'(^|\s)”[A-Za-z]', alltext, re.M): fails.append('closing quote used as an opener')
if re.search(r'[A-Za-z,.?!]“(\s|$)', alltext, re.M): fails.append('opening quote used as a closer')

# 5. brands (named help organisations are allowed)
for b in 'Instagram TikTok Tinder Hinge Bumble Grindr iPhone Android FaceTime Zoom WhatsApp Snapchat Facebook Starbucks Netflix Uber Google Apple Venmo Spotify Amazon Coke Pepsi McDonald'.split():
    if re.search(r'\b' + b + r'\b', alltext): fails.append(f'brand name found: {b}')

# 6. catchphrase: cover (as title) + exactly two designed moments inside
inside = len(re.findall(r'Don’t text\. Call\.', alltext))
print('catchphrase moments inside:', inside)
if inside != 2: fails.append(f'catchphrase appears {inside} times inside, expected 2')

print('\nRESULT:', 'ALL CHECKS PASSED' if not fails else 'FAILURES:\n  ' + '\n  '.join(fails))
sys.exit(1 if fails else 0)

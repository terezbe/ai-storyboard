# Verify every contents entry and every in-text "page N" reference against the real built PDF.
import subprocess, re, sys, html
PDF = 'The-30-Day-Morning-Reset.pdf'
def text(p, layout=False):
    args = ['pdftotext'] + (['-layout'] if layout else []) + ['-f', str(p), '-l', str(p), PDF, '-']
    return subprocess.run(args, capture_output=True, text=True).stdout
norm = lambda s: re.sub(r'[^a-z0-9]', '', s.lower().replace('’', "'"))
npages = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', PDF], capture_output=True, text=True).stdout).group(1))
pages = {p: norm(text(p)) for p in range(1, npages + 1)}
# words with coordinates from the contents page, split into the two columns by x position
bbox = subprocess.run(['pdftotext', '-bbox', '-f', '2', '-l', '2', PDF, '-'], capture_output=True, text=True).stdout
words = [(float(a), float(b), html.unescape(w)) for a, b, w in re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)"[^>]*>([^<]*)</word>', bbox)]
entries = []
for col in (lambda x: x < 306, lambda x: x >= 306):
    rows = {}
    for x, y, w in words:
        if col(x): rows.setdefault(round(y / 3), []).append((x, w))
    for key in sorted(rows):
        line = ' '.join(w for x, w in sorted(rows[key]))
        mm = re.match(r'^(?:(\d{1,2})\s+)?(.+?)\s+(\d{1,2})$', line)
        if mm and 'NONNA' not in line:
            entries.append((mm.group(1), mm.group(2).strip(), int(mm.group(3))))
bad = 0
for day, title, pg in entries:
    t = norm(title.replace('·', ' '))
    ok = t in pages.get(pg, '')
    if day: ok = ok and norm(f'Day {day} of 30') in pages[pg]
    if not ok: bad += 1
    print(('OK  ' if ok else 'FAIL'), f'{("Day "+day+": ") if day else ""}{title} -> p{pg}')
print(f'{len(entries)} contents entries checked, {bad} failures')
# in-text page references
refs = 0; rbad = 0
for p in range(1, npages + 1):
    raw = text(p)
    for m in re.finditer(r'page\s+(\d{1,2})', raw.replace('\n', ' '), re.I):
        refs += 1
        ctx = raw.replace('\n', ' ')[max(0, m.start()-70):m.end()+5]
print(f'{refs} in-text page references found')

# ---- second pass: every other page number printed in the book ----
def rows_of(p, split=None):
    bb = subprocess.run(['pdftotext', '-bbox', '-f', str(p), '-l', str(p), PDF, '-'], capture_output=True, text=True).stdout
    ws = [(float(a), float(b), html.unescape(w)) for a, b, w in re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)"[^>]*>([^<]*)</word>', bb)]
    rows = {}
    for x, y, w in ws: rows.setdefault(round(y / 4), []).append((x, w))
    return [' '.join(w for x, w in sorted(r)) for k, r in sorted(rows.items())]
fails = 0; checks = 0
def check(desc, target, needle):
    global fails, checks
    checks += 1
    ok = norm(needle) in pages.get(target, '')
    if not ok: fails += 1; print('FAIL', desc, '->', target, 'missing', needle)
# week-opener maps: "N  Rule name  line...  P"
for wp in (9, 17, 26, 34):
    for r in rows_of(wp):
        m = re.match(r'^(\d{1,2}) (The .+? Rule)\b.*?(\d{1,2})$', r)
        if m: check(f'week map p{wp} day {m.group(1)}', int(m.group(3)), f'Day {m.group(1)} of 30'); check(f'week map p{wp}', int(m.group(3)), m.group(2))
# drawer index
for r in rows_of(46):
    m = re.match(r'^(.+?) (\d{1,2})$', r)
    if m and 'NONNA' not in r: check('drawer', int(m.group(2)), m.group(1))
# quickstart "Day N page P"
qs = text(47).replace('\n', ' ')
for m in re.finditer(r'Day (\d{1,2}) page (\d{1,2})', qs): check('quickstart', int(m.group(2)), f'Day {m.group(1)} of 30')
# named references in running text
expected = {(5, 44): 'Thirty mornings later', (6, 49): "Rosa's Kitchen Cards", (17, 8): 'Make it fit your life', (26, 49): "Rosa's Kitchen Cards",
            (31, 50): 'Monday Lentils', (44, 5): "Where you're starting", (48, 7): "Salvatore's Rule", (49, 28): 'The Moka Rule',
            (49, 27): 'The Chair Rule', (50, 31): 'The One Pot Rule'}
found = set()
for p in range(1, npages + 1):
    if p == 47: continue
    for m in re.finditer(r'page\s+(\d{1,2})', text(p).replace('\n', ' ')):
        key = (p, int(m.group(1))); found.add(key)
        if key not in expected: fails += 1; print('FAIL unexpected reference', key)
        else: check(f'ref p{p}', key[1], expected[key])
missing = set(expected) - found
if missing: fails += 1; print('FAIL expected references not found:', missing)
check('drawer title', 46, "Rosa's drawer")
print(f'second pass: {checks} page-number checks, {fails} failures')
sys.exit(1 if (bad or fails) else 0)

// Build "The 30-Day Morning Reset" PDF with Playwright (Chromium).
// Usage: node build.js            -> full book
//        node build.js --sample   -> cover + Day 1 only (sample gate)
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const T = require('./templates');

const ROOT = __dirname;
const OUT_DIR = path.resolve(ROOT, '..');
const SAMPLE = process.argv.includes('--sample');

// ---------- assemble pages ----------
const pages = require('./book')(SAMPLE);           // [{id, title, kind, render(num, ctx)}]
const idx = {};
pages.forEach((p, i) => { idx[p.id] = i + 1; });
const ctx = { pageOf: (id) => { if (!idx[id]) throw new Error('unknown page id ' + id); return idx[id]; } };
T.setCtx(ctx);

let bodyHtml = pages.map((p, i) => p.render(i + 1, ctx)).join('\n');
bodyHtml = T.smart(bodyHtml);

// ---------- text hygiene gate ----------
const textOnly = bodyHtml.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/g, ' ');
const forbidden = [
  [/\u2014/g, 'em dash U+2014'],
  [/\u2013/g, 'en dash U+2013'],
  [/[\u2190-\u21FF]/g, 'arrow'],
  [/[\u2700-\u27BF]/g, 'dingbat (tick/star)'],
  [/[\u25A0-\u25FF]/g, 'geometric/box glyph'],
  [/[\u2605\u2606\u2610-\u2612\u2713\u2714]/g, 'star/ballot/check glyph'],
  [/\s-\s/g, 'spaced hyphen used as a dash (review)'],
];
let hard = 0;
for (const [re, name] of forbidden) {
  const m = textOnly.match(re);
  if (m) {
    const soft = name.includes('review');
    console.log(`${soft ? 'WARN' : 'FAIL'}: ${m.length} x ${name}`);
    if (!soft) hard += m.length;
    let mm; const r2 = new RegExp(re.source, 'g');
    let k = 0;
    while ((mm = r2.exec(textOnly)) && k < 8) { console.log('   ...' + textOnly.slice(Math.max(0, mm.index - 50), mm.index + 50).replace(/\s+/g, ' ') + '...'); k++; }
  }
}
const british = /\b(neighbour\w*|colour\w*|harbour\w*|favourite\w*|grey|aluminium|reali[sz]e|organis\w*|recognis\w*|centre|metre|programme|mum|mums|pyjamas|cosy|travelling|mould|honour\w*|behaviour\w*|flavour\w*|labour\w*|rumour\w*|odour\w*|whilst|amongst|biscuits?|lift|lifts|queue|fortnight|flat|rota|practise[sd]?|towards)\b/gi;
const bm = textOnly.match(british);
if (bm) console.log('WARN British/odd word check:', [...new Set(bm.map(s => s.toLowerCase()))].join(', '));
if (hard) { console.log('Refusing to build: fix forbidden characters first.'); process.exit(1); }

// ---------- html ----------
const fontsCss = fs.readFileSync(path.join(ROOT, 'fonts', 'fonts-local.css'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>The 30-Day Morning Reset</title>
<style>${fontsCss}\n${css}</style></head><body>${bodyHtml}</body></html>`;
const htmlPath = path.join(ROOT, SAMPLE ? 'sample.html' : 'book.html');
fs.writeFileSync(htmlPath, html);

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const fontReport = await page.evaluate(() => {
    const out = [];
    document.fonts.forEach(f => out.push(`${f.family} ${f.weight} ${f.style}: ${f.status}`));
    return out;
  });
  const failedFonts = fontReport.filter(s => !s.endsWith('loaded'));
  const usedFamilies = await page.evaluate(() => {
    const set = new Set();
    document.querySelectorAll('.page *').forEach(el => {
      if (el.childNodes.length && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) {
        set.add(getComputedStyle(el).fontFamily.split(',')[0].trim() + ' ' + getComputedStyle(el).fontWeight + ' ' + getComputedStyle(el).fontStyle);
      }
    });
    return [...set];
  });
  const loaded = new Set(fontReport.filter(s => s.endsWith('loaded')).map(s => s.split(':')[0].replace(/"/g, '')));
  const missingFaces = usedFamilies.filter(u => !loaded.has(u.replace(/"/g, '')));
  if (failedFonts.length) console.log('FONT faces not loaded (unused faces are fine):', failedFonts.join(' | '));
  if (missingFaces.length) console.log('WARN text set in a face that is not loaded:', missingFaces.join(' | '));

  // Extend write-in areas ([data-fill="max extra lines"]) into the space left on the page, as real vector lines.
  const added = await page.evaluate(() => {
    let total = 0;
    document.querySelectorAll('.page').forEach(pg => {
      const c = pg.querySelector('.content'); if (!c) return;
      pg.querySelectorAll('[data-fill]').forEach(f => {
        const max = parseInt(f.dataset.fill, 10);
        const proto = f.querySelector('.rule-line'); if (!proto) return;
        const lineH = proto.getBoundingClientRect().height;
        for (let k = 0; k < max; k++) {
          let maxBottom = 0;
          c.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); if (r.height > 0) maxBottom = Math.max(maxBottom, r.bottom); });
          if (c.getBoundingClientRect().bottom - maxBottom < lineH + 4) break;
          const d = document.createElement('div'); d.className = proto.className; f.appendChild(d); total++;
        }
      });
    });
    return total;
  });
  console.log('write-in lines added to fill pages:', added);

  // Overflow + fill report per page
  const report = await page.evaluate(() => {
    return [...document.querySelectorAll('.page')].map((pg, i) => {
      const c = pg.querySelector('.content');
      const res = { page: i + 1, overflow: false, fill: null, title: pg.dataset.title || '' };
      if (pg.scrollHeight > pg.clientHeight + 1 || pg.scrollWidth > pg.clientWidth + 1) res.overflow = 'page';
      if (c) {
        if (c.scrollHeight > c.clientHeight + 1 || c.scrollWidth > c.clientWidth + 1) res.overflow = `content +${c.scrollHeight - c.clientHeight}px`;
        const top = c.getBoundingClientRect().top;
        let maxBottom = top;
        c.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); if (r.height > 0) maxBottom = Math.max(maxBottom, r.bottom); });
        res.fill = Math.round(100 * (maxBottom - top) / c.clientHeight);
        res.spare = Math.round(c.clientHeight - (maxBottom - top));
      }
      return res;
    });
  });
  let bad = 0;
  for (const r of report) {
    const flag = r.overflow ? `OVERFLOW(${r.overflow})` : (r.fill !== null && r.fill < 55 ? 'LOW-FILL' : '');
    if (r.overflow) bad++;
    console.log(`p${String(r.page).padStart(2)} fill ${String(r.fill).padStart(3)}% spare ${String(r.spare).padStart(4)}px ${flag} ${r.title}`);
  }
  const pdfPath = SAMPLE ? path.join(ROOT, 'sample.pdf') : path.join(OUT_DIR, 'The-30-Day-Morning-Reset.pdf');
  await page.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true });
  if (!SAMPLE) fs.writeFileSync(path.join(ROOT, 'book-final.html'), await page.content());
  fs.writeFileSync(path.join(ROOT, SAMPLE ? 'sample-map.json' : 'page-map.json'), JSON.stringify(pages.map((p, i) => ({ page: i + 1, id: p.id, title: p.title })), null, 1));
  await browser.close();
  console.log(`${bad ? 'WITH OVERFLOW ' : ''}PDF written: ${pdfPath} (${pages.length} pages)`);
  if (bad) process.exitCode = 2;
})();

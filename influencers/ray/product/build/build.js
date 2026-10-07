// Build The Quiet Money Workbook: assemble HTML, number pages, fill contents, check every page, print PDF.
// Usage: node build.js            -> full book to ../the-quiet-money-workbook.pdf
//        node build.js sample     -> sample unit(s) only to out/sample.pdf
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'out');
const mode = process.argv[2] || 'full';

function loadPages() {
  // Each module exports an ordered array `order` of page HTML strings.
  if (mode === 'batch') return process.argv.slice(3).flatMap((m) => require('./src/' + m).order);
  const mods = mode === 'sample'
    ? [require('./src/sample')]
    : [
        require('./src/pages-front'),
        require('./src/pages-leakhunt'),
        require('./src/pages-rules'),
        require('./src/pages-sundays'),
        require('./src/pages-back'),
      ];
  return mods.flatMap((m) => m.order);
}

function assemble(pages) {
  return `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8">
<title>The Quiet Money Workbook</title>
<link rel="stylesheet" href="../src/styles.css">
</head><body>
${pages.join('\n')}
</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const pages = loadPages();
  const html = assemble(pages);
  const htmlPath = path.join(OUT, mode === 'full' ? 'book.html' : mode + '.html');
  fs.writeFileSync(htmlPath, html);

  // Text hygiene: no em dashes, no en dashes, no unicode arrows/ticks/boxes in the source text.
  const banned = [/—/g, /–/g, /[←-⇿]/g, /[✓-✘]/g, /[☐-☒]/g, /★|☆/g, /[■-◿]/g, /…/g];
  const stripped = html.replace(/<[^>]+>/g, ' ');
  for (const re of banned) {
    const m = stripped.match(re);
    if (m) { console.error('BANNED CHARACTER', re, m.length); process.exitCode = 2; }
  }
  // HTML entity forms of the same characters
  for (const ent of ['&mdash;', '&ndash;', '&rarr;', '&larr;', '&check;', '&hellip;', '&#8212;', '&#8211;']) {
    if (html.includes(ent)) { console.error('BANNED ENTITY', ent); process.exitCode = 2; }
  }

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const pg = await browser.newPage();
  await pg.goto('file://' + htmlPath, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);

  const report = await pg.evaluate(() => {
    const out = { pages: [], fonts: {} };
    for (const f of ['Young Serif', 'Source Serif 4', 'Reenie Beanie', 'Zeyada']) {
      out.fonts[f] = document.fonts.check(`12px "${f}"`);
    }
    const sheets = [...document.querySelectorAll('section.page')];
    const idToPn = {};
    sheets.forEach((s, i) => { idToPn[s.dataset.id] = i + 1; });
    sheets.forEach((s, i) => {
      const pn = s.querySelector('[data-pn]');
      if (pn) pn.textContent = String(i + 1);
    });
    document.querySelectorAll('[data-toc]').forEach((el) => {
      const n = idToPn[el.dataset.toc];
      el.textContent = n ? String(n) : '??';
    });
    // overflow + fill checks
    sheets.forEach((s, i) => {
      const c = s.querySelector('.content');
      const cr = c.getBoundingClientRect();
      let maxBottom = cr.top;
      let overflow = [];
      c.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        if (r.bottom > maxBottom) maxBottom = r.bottom;
        if (r.bottom > cr.bottom + 0.5 || r.right > cr.right + 0.5) {
          overflow.push(`${el.tagName.toLowerCase()}.${el.className}`.slice(0, 60));
        }
      });
      // flow fill: bottom of last in-flow element that is not the pushed-down "noticed" block
      const kids = [...c.children].filter((k) => !k.classList.contains('noticed') && !k.classList.contains('pushdown'));
      let flowBottom = cr.top;
      kids.forEach((k) => { const r = k.getBoundingClientRect(); if (r.bottom > flowBottom) flowBottom = r.bottom; });
      out.pages.push({
        n: i + 1,
        id: s.dataset.id,
        overflow: [...new Set(overflow)].slice(0, 6),
        fill: Math.round(((maxBottom - cr.top) / cr.height) * 100),
        flow: Math.round(((flowBottom - cr.top) / cr.height) * 100),
        scroll: c.scrollHeight > c.clientHeight + 1,
      });
    });
    out.idToPn = idToPn;
    return out;
  });

  console.log('fonts loaded:', JSON.stringify(report.fonts));
  let problems = 0;
  for (const p of report.pages) {
    const flags = [];
    if (p.overflow.length || p.scroll) flags.push('OVERFLOW ' + p.overflow.join(' | '));
    if (p.fill < 55 && !/^(cover)$/.test(p.id)) flags.push('LOW FILL');
    if (flags.length) problems++;
    console.log(String(p.n).padStart(2), p.id.padEnd(22), `fill ${String(p.fill).padStart(3)}%  flow ${String(p.flow).padStart(3)}%`, flags.join('  '));
  }
  fs.writeFileSync(path.join(OUT, 'pagemap.json'), JSON.stringify(report.idToPn, null, 2));

  const pdfPath = mode === 'full' ? path.join(ROOT, '..', 'the-quiet-money-workbook.pdf') : path.join(OUT, mode + '.pdf');
  await pg.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true });
  await browser.close();
  const info = execSync(`pdfinfo "${pdfPath}"`).toString();
  const pagesLine = info.split('\n').find((l) => l.startsWith('Pages'));
  console.log('PDF:', pdfPath, '|', pagesLine, '| DOM pages:', report.pages.length, '| problems:', problems);
})();

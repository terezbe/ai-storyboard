// Build "Don't Text. Call." : node build.js [--only=id,id] [--out=file.pdf]
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const C = require('./content.js');

const ROOT = __dirname;
const args = Object.fromEntries(process.argv.slice(2).map(a => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const OUT = path.resolve(ROOT, args.out || '../Dont-Text-Call-Grandpa-Lou.pdf');
const TOTAL_CARDS = 25;

// ------------------------------------------------------------------ text helpers
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function fmt(s) {
  let h = esc(s);
  h = h.replace(/\{card:(\d+)\}/g, (_, n) => `<a class="xref" href="#card-${n}">card&nbsp;${n} (p.&nbsp;<span data-ref="card-${n}"></span>)</a>`);
  h = h.replace(/\{page:([\w-]+)\}/g, (_, id) => `<a class="xref" href="#${id}">page&nbsp;<span data-ref="${id}"></span></a>`);
  h = h.replace(/\(\((.+?)\)\)/g, '<span class="cue">$1</span>');
  h = h.replace(/\[([^\]]+)\]/g, '<span class="fill">[$1]</span>');
  h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return h;
}

// Curly quotes on text nodes only; tracks the previous text character across tags.
function smartQuotes(html) {
  let prev = ' ';
  return html.split(/(<[^>]+>)/).map(seg => {
    if (seg.startsWith('<')) return seg;
    let out = '';
    for (let i = 0; i < seg.length; i++) {
      const ch = seg[i];
      const next = seg[i + 1] || '';
      if (ch === '"') {
        out += /[\s(\[{ \/]/.test(prev) || prev === '' ? '“' : '”';
      } else if (ch === "'") {
        if (/[A-Za-z0-9]/.test(prev) && /[A-Za-z]/.test(next)) out += '’';
        else if (/[\s(\[{ “\/]/.test(prev) && !/\d/.test(next)) out += '‘';
        else out += '’';
      } else out += ch;
      if (!/\s/.test(ch) || ch === ' ') prev = out[out.length - 1]; else prev = ' ';
    }
    return out;
  }).join('');
}

// ------------------------------------------------------------------ icons (inline SVG, no glyphs)
const ICON = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
  bubble: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z"/></svg>',
  no: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.6 18.4 18.4 5.6" stroke="currentColor" stroke-width="2"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 7.5 14.5 12 10 16.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

// ------------------------------------------------------------------ page shells
function page(id, kind, inner, { footer = true } = {}) {
  return `<section class="page ${kind}" id="${id}">
  ${footer ? '<div class="frame"></div>' : ''}
  <div class="inner">${inner}</div>
  ${footer ? '<footer class="foot"><span>Don\'t Text. Call. &middot; Grandpa Lou</span><span class="pno"></span></footer>' : ''}
</section>`;
}

function cardPage(c) {
  const g = C.groups.find(x => x.n === c.group);
  const inner = `
  <div class="head">
    <div class="chip"><span class="ring">${g.n}</span>${fmt(g.name)}</div>
    <div class="meta"><span>Card ${c.n} of ${TOTAL_CARDS}</span><span class="sep"></span><a href="#index">Index</a></div>
  </div>
  <h1 class="sit">${fmt(c.title)}</h1>
  <div class="rule">
    <div class="rname">${fmt(c.rule)}</div>
    <div class="take">${fmt(c.take)}</div>
    <p class="note">${fmt(c.note)}</p>
  </div>
  <div class="sec say">
    <div class="label">${ICON.phone}<span>Say this (on the phone)</span></div>
    <div class="script">${c.say.map(p => `<p>${fmt(p)}</p>`).join('')}</div>
    ${c.helpline ? `<div class="helpline">${c.helpline.map(p => `<p>${fmt(p)}</p>`).join('')}</div>` : ''}
  </div>
  <div class="sec textmsg">
    <div class="label">${ICON.bubble}<span>If you have to text</span></div>
    ${c.textNote ? `<p class="textnote">${fmt(c.textNote)}</p>` : ''}
    <div class="bubble">${fmt(c.text)}</div>
  </div>
  <div class="sec dont">
    <div class="label">${ICON.no}<span>Don't say</span></div>
    <p><span class="said">"${fmt(c.dont.said)}"</span> <span class="why">${fmt(c.dont.why)}</span></p>
  </div>
  <div class="sec ifno">
    <div class="label">${ICON.next}<span>If they say no / don't answer</span></div>
    ${c.ifno.map(p => `<p>${fmt(p)}</p>`).join('')}
  </div>`;
  return page(`card-${c.n}`, 'card', inner);
}

// ------------------------------------------------------------------ assemble
function allPages() {
  const PG = require('./pages.js');
  const P = [];
  P.push({ id: 'cover', html: PG.cover(page, fmt) });
  for (const f of PG.front) P.push({ id: f.id, html: f.render(page, fmt, ICON, C) });
  for (const c of [...C.cards].sort((a, b) => a.n - b.n)) P.push({ id: `card-${c.n}`, html: cardPage(c) });
  for (const f of PG.back) P.push({ id: f.id, html: f.render(page, fmt, ICON, C) });
  return P;
}

function html(pages) {
  return smartQuotes(`<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Don't Text. Call.</title>
<link rel="stylesheet" href="styles.css">
</head><body>
${pages.map(p => p.html).join('\n')}
</body></html>`);
}

(async () => {
  let pages = allPages();
  if (args.only) { const keep = String(args.only).split(','); pages = pages.filter(p => keep.includes(p.id)); }
  const htmlPath = path.join(ROOT, args.only ? 'preview.html' : 'book.html');
  fs.writeFileSync(htmlPath, html(pages));

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const pg = await browser.newPage();
  await pg.goto('file://' + htmlPath, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  const report = await pg.evaluate(() => {
    const pagesEl = [...document.querySelectorAll('.page')];
    const idx = el => pagesEl.indexOf(el.closest('.page')) + 1;
    pagesEl.forEach((p, i) => { const n = p.querySelector('.pno'); if (n) n.textContent = String(i + 1); });
    const missing = [];
    document.querySelectorAll('[data-ref]').forEach(el => {
      const t = document.getElementById(el.dataset.ref);
      if (!t) { missing.push(el.dataset.ref); el.textContent = '??'; return; }
      el.textContent = String(idx(t));
    });
    const rows = pagesEl.map((p, i) => {
      const inner = p.querySelector('.inner') || p.querySelector('.cv');
      const r = inner.getBoundingClientRect();
      let bottom = r.top;
      inner.querySelectorAll('*').forEach(e => { const b = e.getBoundingClientRect(); if (b.height > 0) bottom = Math.max(bottom, b.bottom); });
      const over = Math.max(inner.scrollHeight - inner.clientHeight, Math.ceil(bottom - r.bottom));
      const overX = inner.scrollWidth - inner.clientWidth;
      return { page: i + 1, id: p.id, fill: Math.round(100 * (bottom - r.top) / r.height), over, overX };
    });
    // fonts actually used
    const fams = new Set();
    document.querySelectorAll('.inner *').forEach(e => fams.add(getComputedStyle(e).fontFamily.split(',')[0]));
    return { rows, missing, fams: [...fams] };
  });

  await pg.pdf({ path: OUT, preferCSSPageSize: true, printBackground: true, outline: true, tagged: true });
  await browser.close();

  console.log('PDF:', OUT, 'pages:', report.rows.length);
  if (report.missing.length) console.log('MISSING REFS:', [...new Set(report.missing)].join(', '));
  for (const r of report.rows) {
    const flag = r.over > 0 || r.overX > 0 ? '  <-- OVERFLOW' : (r.fill < 45 && r.id !== 'cover' ? '  <-- light page' : '');
    console.log(String(r.page).padStart(3), r.id.padEnd(16), 'fill', String(r.fill).padStart(3) + '%', r.over > 0 ? `over ${r.over}px` : '', r.overX > 0 ? `overX ${r.overX}px` : '', flag);
  }
  if (report.rows.some(r => r.over > 0 || r.overX > 0)) process.exitCode = 2;
})();

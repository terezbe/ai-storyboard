// HTML templates for every page type.
const path = require('path');
const IMG = (f) => 'file://' + path.join(__dirname, 'img', f);
const FOOT = 'The 30-Day Morning Reset &middot; Nonna Rosa';

// Smart quotes that respect context across tag boundaries.
function smart(html) {
  const parts = html.split(/(<[^>]*>)/);
  for (let i = 0; i < parts.length; i += 2) parts[i] = parts[i].replace(/\.\.\./g, '…');
  const textIdx = [];
  let plain = '';
  for (let i = 0; i < parts.length; i += 2) { textIdx.push([i, plain.length]); plain += parts[i]; }
  const ch = plain.split('');
  for (let k = 0; k < ch.length; k++) {
    const prev = k > 0 ? ch[k - 1] : ' ';
    const next = k + 1 < ch.length ? ch[k + 1] : ' ';
    const openCtx = /[\s(\[“‘\/]/.test(prev);
    if (ch[k] === '"') ch[k] = openCtx ? '“' : '”';
    else if (ch[k] === "'") {
      if (openCtx && /\d/.test(next) && /\d/.test(ch[k + 2] || '')) ch[k] = '’';
      else if (openCtx && /[A-Za-z]/.test(next)) ch[k] = '‘';
      else ch[k] = '’';
    }
  }
  const out = ch.join('');
  for (const [i, start] of textIdx) parts[i] = out.slice(start, start + parts[i].length);
  return parts.join('');
}

let CTX = null;                                   // set by book.js before rendering
const refs = (s) => s.replace(/\{\{p:([a-z0-9]+)\}\}/g, (_, id) => String(CTX.pageOf(id)));
const paras = (t) => refs(t).trim().split(/\n\s*\n/).map(p => `<p>${p.trim().replace(/\n/g, ' ')}</p>`).join('');
const lines = (n, cls = '') => Array.from({ length: n }, () => `<div class="rule-line ${cls}"></div>`).join('');
const box = (cls = '') => `<span class="box ${cls}"></span>`;

function wrap(inner, num, { cls = '', title = '', frame = true, footer = true } = {}) {
  return `<section class="page ${cls}" data-title="${title.replace(/"/g, '')}">
${frame ? '<div class="frame"></div>' : ''}
<div class="content">${refs(inner)}</div>
${footer ? `<div class="footer"><span>${FOOT}</span><span class="pg">${num}</span></div>` : ''}
</section>`;
}
const head = (kicker, title, lede) => `<div class="kicker">${kicker}</div><h1 class="title">${title}</h1>${lede ? `<div class="lede">${lede}</div>` : ''}`;

// ---------------- cover ----------------
function cover(c) {
  return `<section class="page cover" data-title="Cover">
<div class="frame cover-frame"></div>
<div class="sea"><div class="sea-frame"></div></div>
<div class="top">
  <h1><span class="a">The 30-Day</span><span class="b">Morning Reset</span></h1>
  <div class="sub">${c.subtitle}</div>
</div>
<div class="arch"><img src="${IMG('rosa-portrait.jpg')}" alt=""></div>
<div class="bottom">
  <div class="promise">${c.promise}</div>
  <div class="catch">"${c.catchphrase}"</div>
  <div class="byline">${c.byline}</div>
</div>
</section>`;
}

// ---------------- contents ----------------
function contents(groups, num) {
  const col = (gs) => gs.map(g => `
<div class="toc-group">
  <div class="toc-h">${g.head}${g.page ? `<span class="toc-hp">${g.page}</span>` : ''}</div>
  ${g.rows.map(r => `<div class="toc-row${r.day ? ' day' : ''}">${r.day ? `<span class="toc-d">${r.day}</span>` : ''}<span class="toc-t">${r.t}</span><span class="toc-lead"></span><span class="toc-p">${r.p}</span></div>`).join('')}
</div>`).join('');
  const left = groups.filter(g => g.col === 1), right = groups.filter(g => g.col === 2);
  return wrap(`${head('The 30-Day Morning Reset', 'Contents')}
<div class="toc"><div class="toc-col">${col(left)}</div><div class="toc-col">${col(right)}</div></div>`, num, { title: 'Contents' });
}

// ---------------- letters ----------------
function letter(L, num) {
  return wrap(`
<div class="letterhead">
  <div class="roundimg"><img src="${IMG('rosa-portrait.jpg')}" alt=""></div>
  <div>${head(L.kicker, L.title)}</div>
</div>
<div class="body letter-body">${paras(L.body)}</div>
<div class="signoff">
  <div class="catchband"><span>"${L.catchphrase}"</span></div>
  <div class="sig">Rosa</div>
</div>`, num, { title: 'A letter from Rosa' });
}

function midpoint(M, num) {
  return wrap(`
${head(M.kicker, M.title)}
<div class="body letter-body mid-body"><div class="mini-arch"><img src="${IMG('mid-ladder.jpg')}" alt=""></div>${paras(M.body)}</div>
<div class="sig small">Rosa</div>`, num, { title: 'Halfway' });
}

// ---------------- simple prose page ----------------
const prose = (html, num, title) => wrap(html, num, { title });

// ---------------- score / rescore ----------------
function score(S, num) {
  return wrap(`${head(S.kicker, S.title, S.lede)}
<p class="intro">${S.intro}</p>
<table class="score">
  <thead><tr><th>My mornings now</th><th class="n">Day 1 score</th></tr></thead>
  <tbody>${S.rows.map(r => `<tr><td><div class="m">${r[0]}</div><div class="hint">${r[1]}</div></td><td class="n"><span class="blank"></span><span class="of">/ 10</span></td></tr>`).join('')}</tbody>
</table>
<div class="dateline"><span>Date of my first morning:</span><span class="blank long"></span></div>
<div class="note-to">
  <div class="lbl">${S.noteLabel}</div>
  <div class="hint">${S.noteHint}</div>
  <div data-fill="3">${lines(6)}</div>
</div>`, num, { title: S.title });
}

function rescore(R, num) {
  return wrap(`${head(R.kicker, R.title, R.lede)}
<p class="intro">${R.intro}</p>
<table class="score re">
  <thead><tr><th>Measure</th><th class="n">Day 1</th><th class="n">Day 30</th><th class="n">The change</th></tr></thead>
  <tbody>${R.rows.map(r => `<tr><td><div class="m">${r}</div></td><td class="n"><span class="blank s"></span></td><td class="n"><span class="blank s"></span></td><td class="n"><span class="blank s"></span></td></tr>`).join('')}</tbody>
</table>
<div class="body after">${paras(R.after)}</div>
<div class="note-to"><div class="lbl">${R.remember}</div><div data-fill="4">${lines(3)}</div></div>`, num, { title: R.title });
}

// ---------------- failure page ----------------
function failure(F, num) {
  return wrap(`${head(F.kicker, F.title, F.lede)}
<div class="body">${paras(F.body)}</div>
<div class="fail-grid">
  <ul class="donts">${F.list.map(l => `<li>${l}</li>`).join('')}</ul>
  <div class="logbook"><div class="lb-h">From Salvatore's little book</div>
    ${[['Monday', 'out'], ['Tuesday', 'out'], ['Wednesday', 'storm'], ['Thursday', 'out'], ['Friday', 'out']].map(([d, s]) => `<div class="lb-row${s === 'storm' ? ' storm' : ''}"><span>${d}</span><span>${s}</span></div>`).join('')}
    <div class="lb-foot">Thursday: out once, like always.</div>
  </div>
</div>
<div class="body">${paras(F.after)}</div>
<div class="logline"><span>${F.line}</span></div>`, num, { title: F.title, cls: 'failpage' });
}

// ---------------- week opener ----------------
function weekOpener(W, num, days, ctx) {
  const [a, b] = W.days;
  const rows = [];
  for (let n = a; n <= b; n++) {
    const d = days[n - 1];
    if (n === 29) rows.push(`<div class="map-sub">Then, the last two mornings</div>`);
    rows.push(`<div class="map-row"><span class="map-n">${n}</span><span class="map-t"><b>${d.rule}</b><i>${d.line}</i></span><span class="map-p">${ctx.pageOf('day' + n)}</span></div>`);
  }
  return wrap(`
<div class="wk-top${b - a > 6 ? ' long' : ''}">
  <div class="arch-panel"><img src="${IMG(W.img)}" alt=""></div>
  <div class="wk-text">
    <div class="kicker">${W.num}</div>
    <h1 class="wk-title">${W.theme}</h1>
    <div class="wk-sub">${W.sub}</div>
    <div class="body">${paras(W.intro)}</div>
  </div>
</div>
<div class="wk-map${b - a > 6 ? ' long' : ''}"><div class="lbl">${b - a > 6 ? 'This week, and the last two' : 'This week'}</div>${rows.join('')}</div>
<div class="ready"><div class="lbl">Get ready</div><p>${W.ready}</p></div>`, num, { title: `${W.num} ${W.theme}` });
}

// ---------------- day ----------------
function day(d, num) {
  const dots = Array.from({ length: 30 }, (_, i) => `<i class="${i + 1 < d.n ? 'done' : (i + 1 === d.n ? 'today' : '')}"></i>`).join('');
  return wrap(`
<div class="dayhead"><span class="wk">${d.week}</span><span class="dn">Day <b>${d.n}</b> of 30</span></div>
<div class="dots">${dots}</div>
<h1 class="rule">${d.rule}</h1>
<div class="ruleline">${d.line}</div>
<div class="story">${paras(d.story)}</div>
<div class="task">${box()}<div>
  <div class="lbl">Today</div>
  <div class="do">${d.task}</div>
  <div class="small"><b>Too much today?</b> ${d.small}</div>
</div></div>
<div class="noticed" data-fill="4"><div class="lbl">What I noticed:</div>${lines(3)}</div>`, num, { title: `Day ${d.n} ${d.rule}` });
}

// ---------------- keep five ----------------
function keep(K, num) {
  return wrap(`${head(K.kicker, K.title)}
<div class="body">${paras(K.body)}</div>
<div class="cutcard">
  <div class="cc-h"><span>My five</span><span class="cc-s">The 30-Day Morning Reset</span></div>
  ${[1, 2, 3, 4, 5].map(i => `<div class="cc-row"><span class="cc-n">${i}</span><span class="rule-line grow"></span>${box('sm')}</div>`).join('')}
  <div class="cc-times"><span>My bell (wake-up time):</span><span class="blank"></span><span>My last boat (lights low):</span><span class="blank"></span></div>
</div>
<div class="cut-note">Cut along the dotted line.</div>
<div class="catchband big"><span>"${K.catchphrase}"</span></div>
<div class="sig center">Rosa</div>`, num, { title: K.title });
}

// ---------------- drawer divider ----------------
function drawer(D, num, ctx) {
  return wrap(`
<div class="drawer">
  <div class="kicker light">${D.kicker}</div>
  <h1 class="drawer-title">${D.title}</h1>
  <div class="drawer-line">${D.line}</div>
  <div class="drawer-list">${D.items.map(([id, t, s]) => `<div class="dl-row"><span class="dl-t"><b>${t}</b><i>${s}</i></span><span class="dl-lead"></span><span class="dl-p">${ctx.pageOf(id)}</span></div>`).join('')}</div>
</div>`, num, { cls: 'seapage', title: D.title });
}

// ---------------- quickstart ----------------
function quick(Q, num, ctx) {
  return wrap(`${head(Q.kicker, Q.title, Q.lede)}
<p class="intro">${Q.intro}</p>
<div class="qs">${Q.items.map(([d, t, s], i) => `<div class="qs-row">${box()}<span class="qs-m">Morning ${i + 1}</span><span class="qs-t"><b>${t}</b><span>${s}</span></span><span class="qs-ref">Day ${d}<br>page ${ctx.pageOf('day' + d)}</span></div>`).join('')}</div>
<p class="qs-after">${Q.after}</p>`, num, { title: Q.title });
}

// ---------------- fridge sheet ----------------
function fridge(F, num, days) {
  const groups = [[1, 7, 'Light and water'], [8, 14, 'Gentle movement'], [15, 21, 'Eating like Nonna'], [22, 28, 'People and rest'], [29, 30, 'The last two mornings']];
  return wrap(`${head(F.kicker, F.title, F.lede)}
<div class="fridge-top"><span>My bell:</span><span class="blank"></span><span>My last boat:</span><span class="blank"></span><span>Started on:</span><span class="blank"></span></div>
<div class="fridge">${days.map(d => `<div class="fr-cell">${box('sm')}<span class="fr-n">${d.n}</span><span class="fr-t"><b>${d.rule.replace(/^The /, '')}</b><i>${F.short[d.n]}</i></span></div>`).join('')}</div>
<div class="fridge-key">${groups.map(([a, b, t]) => `<span>${t}</span>`).join('')}</div>
<p class="fridge-foot">${F.foot}</p>`, num, { title: F.title });
}

// ---------------- kitchen cards ----------------
function card(c) {
  return `<div class="kcard">
  <div class="kc-head"><span class="kc-name">${c.name}</span><span class="kc-tag">${c.tag}</span></div>
  <div class="kc-rosa">${refs(c.rosa)}</div>
  <div class="kc-cols">
    <div class="kc-need"><div class="kc-lbl">You need</div><ul>${c.need.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="kc-steps"><div class="kc-lbl">Do this</div><ol>${c.steps.map(x => `<li>${x}</li>`).join('')}</ol></div>
  </div>
  <div class="kc-tip"><b>${c.tip[0]}.</b> ${c.tip[1]}</div>
</div>`;
}
function kitchen(pair, num, first, note, title) {
  return wrap(`<div class="kc-pagehead"><span class="kicker">Bonus three</span><span class="kc-title">Rosa's Kitchen Cards</span><span class="kc-note">${note}</span></div>
${pair.map(card).join('')}`, num, { title });
}

// ---------------- 112 steps ----------------
function steps(S, num) {
  const weeks = [1, 2, 3, 4].map(w => `<div class="log-row"><span class="log-w">Week ${w}</span>${Array.from({ length: 7 }, (_, i) => `<span class="log-c">${box('sm')}<i>${i + 1}</i></span>`).join('')}</div>`).join('');
  return wrap(`${head(S.kicker, S.title, S.lede)}
<p class="rosa-quote">${S.rosa}</p>
<p class="body find">${S.find}</p>
<div class="my112"><span>My 112 is:</span><span class="blank long"></span><span>Steps or minutes:</span><span class="blank"></span></div>
<div class="steps-rules"><div class="lbl">Rosa's walking rules</div>${S.rules.map(([a, b], i) => `<div class="sr-row"><span class="sr-n">${i + 1}</span><span><b>${a}</b> ${b}</span></div>`).join('')}</div>
<div class="steplog"><div class="lbl">Four weeks of walking: tick a box for every day you walk your 112</div>${weeks}</div>
<div class="safety">${S.safety}</div>`, num, { title: S.title });
}

// ---------------- poster ----------------
function poster(P, num) {
  return wrap(`<div class="poster">
  <div class="kicker">${P.kicker}</div>
  <h1 class="poster-title">${P.title}</h1>
  <div class="poster-list">${P.items.map(([a, b], i) => `<div class="pl-row"><span class="pl-n">${i + 1}</span><span class="pl-t"><b>${a}</b><i>${b}</i></span></div>`).join('')}</div>
  <div class="poster-sig">${P.sig}</div>
</div>`, num, { title: P.title });
}

// ---------------- small print ----------------
function smallprint(S, num) {
  return wrap(`${head(S.kicker, S.title, S.lede)}
<div class="sp">${S.items.map(([a, b]) => `<div class="sp-item"><h2 class="sec">${a}</h2><p>${b}</p></div>`).join('')}</div>
<div class="sp-close">${S.close}</div>`, num, { title: S.title });
}

module.exports = {
  smart, paras, lines, wrap, cover, contents, letter, midpoint, prose, score, rescore, failure,
  weekOpener, day, keep, drawer, quick, fridge, kitchen, steps, poster, smallprint, IMG,
  setCtx: (c) => { CTX = c; },
};

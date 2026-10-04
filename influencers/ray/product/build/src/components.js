// Shared building blocks for every page of The Quiet Money Workbook.
// Every page is a fixed A4 sheet; the build script numbers them and checks for overflow.

const esc = (s) => String(s);

// A full page. id is used for the contents page and for audit lookups.
function page({ id, cls = '', body, footer = true, title = '' }) {
  return `
<section class="page ${cls}" data-id="${id}" data-title="${title}">
  <div class="frame"></div>
  <div class="content">${body}</div>
  ${footer ? `<div class="footer"><span>The Quiet Money Workbook &middot; Ray</span><span class="pn" data-pn></span></div>` : ''}
</section>`;
}

function progress(n, total) {
  let s = '';
  for (let i = 1; i <= total; i++) s += `<span class="seg ${i < n ? 'on' : i === n ? 'now' : ''}"></span>`;
  return `<div class="progress" aria-hidden="true">${s}</div>`;
}

// Header strip: left label, right label, optional progress bar.
function strip(left, right, prog) {
  return `<div class="strip"><span class="label">${left}</span><span class="label dark">${right || ''}</span></div>${prog || '<div class="rule"></div>'}`;
}

const box = (cls = '') => `<span class="box ${cls}"></span>`;
const lines = (n) => `<div class="lines">${'<div class="ln"></div>'.repeat(n)}</div>`;
const lline = (label, cls = '') => `<div class="lline"><span class="lt">${label}</span><span class="lf ${cls}"></span></div>`;

function noticed(n = 2, label = 'What I noticed:') {
  return `<div class="noticed"><div class="lline nl"><span class="lt lab">${label}</span><span class="lf"></span></div>${'<div class="ln"></div>'.repeat(Math.max(0, n - 1))}</div>`;
}

// Ledger table. cols: [{h, w, cls, grp}] ; rows: number of blank rows or array of prefilled first-cell labels.
// grp: [{label, span, startIndex}] for two-level headers.
function ledger({ cols, rows, caption = '', total = null, groups = null, rowH = null, pre = null }) {
  const colgroup = `<colgroup>${cols.map((c) => `<col style="width:${c.w}">`).join('')}</colgroup>`;
  let head = '';
  if (groups) {
    // groups: array same length as cols where entry is either null (rowspan 2) or {label, span}
    let r1 = '', r2 = '';
    for (let i = 0; i < cols.length; i++) {
      const g = groups[i];
      if (g === null) {
        r1 += `<th rowspan="2" class="${cols[i].cls || ''}">${cols[i].h}</th>`;
      } else if (g && g.label) {
        r1 += `<th colspan="${g.span}" class="grp">${g.label}</th>`;
      }
      if (g !== null) r2 += `<th class="${cols[i].cls || ''}">${cols[i].h}</th>`;
    }
    head = `<thead><tr>${r1}</tr><tr>${r2}</tr></thead>`;
  } else {
    head = `<thead><tr>${cols.map((c) => `<th class="${c.cls || ''}">${c.h}</th>`).join('')}</tr></thead>`;
  }
  const rowList = Array.isArray(rows) ? rows : Array.from({ length: rows }, () => '');
  const style = rowH ? ` style="height:${rowH}"` : '';
  const body = rowList
    .map((first) => {
      const cells = cols
        .map((c, i) => {
          if (i === 0 && first) return `<td class="pre"${style}>${first}</td>`;
          if (c.box) return `<td class="c"${style}>${box()}</td>`;
          return `<td class="${c.cls || ''}"${style}></td>`;
        })
        .join('');
      return `<tr>${cells}</tr>`;
    })
    .join('');
  let foot = '';
  if (total) {
    // total: {label, span, after}  label spans first `span` columns, then remaining blank cells
    // total.fill: indexes (in the full column list) of the cells that take a written total
    const fillIdx = total.fill || [total.span];
    let cells = '';
    for (let i = total.span; i < cols.length; i++) {
      cells += `<td class="${cols[i].cls || ''} ${fillIdx.includes(i) ? 'tfill' : 'tnone'}"></td>`;
    }
    foot = `<tr class="total"><td colspan="${total.span}" class="r tlabel">${total.label}</td>${cells}</tr>`;
  }
  return `<table class="ledger">${caption ? `<caption>${caption}</caption>` : ''}${colgroup}${head}<tbody>${body}${foot}</tbody></table>`;
}

module.exports = { esc, page, progress, strip, box, lines, lline, noticed, ledger };

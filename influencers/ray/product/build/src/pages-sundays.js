// Part Three: Sunday Sums. The ritual, Ray's filled-in example, twelve identical weekly pages,
// the midpoint letter after Week 3, and the re-score after Week 12.
const { page, progress, strip, box, lines, lline, noticed } = require('./components');
const toc = (id) => `<span data-toc="${id}"></span>`;
const WORDS = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];

// A pencil tick drawn with CSS (no glyphs).
const tick = '<span class="ptick"></span>';
const hw = (t, cls = '') => (t ? `<span class="hw ${cls}">${t}</span>` : '');
const mark = (n) => `<span class="mk">${n}</span>`;

const OUT_ROWS = [
  ['The pipework', 'anything on a schedule'],
  ['The shopping', 'food and the house'],
  ['Getting about', 'fuel, fares, parking'],
  ['Small leaks', 'the forty little things'],
  ['What&rsquo;s owed', 'payments this week'],
  ['The future', 'paid first'],
  ['The Friday Fish', 'budgeted joy'],
  ['Anything else', ''],
];

// One Sunday Sums sheet. d = filled data for Ray's example, or null for a blank week.
function sheet(week, d = null) {
  const o = (d && d.out) || [];
  const nx = (d && d.next) || [];
  const outRows = OUT_ROWS.map(
    ([label, hint], i) => `
      <tr>
        <td class="pre"><b>${label}</b>${hint ? `<i>${hint}</i>` : ''}</td>
        <td>${o[i] ? hw(o[i][0]) : ''}${o[i] && o[i][2] ? o[i][2] : ''}</td>
        <td class="r">${o[i] ? hw(o[i][1], 'num') : ''}</td>
      </tr>`
  ).join('');
  const nextRows = [0, 1, 2, 3, 4]
    .map((i) => {
      const r = nx[i];
      const first = i === 0 ? `<b>The Friday Fish</b>` : '';
      return `<tr>
        <td class="${i === 0 ? 'pre' : ''}">${first}${r ? hw(r[0]) : ''}</td>
        <td>${r ? hw(r[1]) : ''}</td>
        <td class="r">${r ? hw(r[2], 'num') : ''}</td>
      </tr>`;
    })
    .join('');
  const chk = (on) => `<span class="box ${on ? 'ticked' : ''}">${on ? tick : ''}</span>`;
  return `
    <div class="wk-head">
      <h1 class="wk-title">Week ${week}</h1>
      <div class="wk-date">
        <div class="lline"><span class="lt">Sunday</span><span class="lf">${d ? hw(d.date) : ''}</span></div>
        <div class="kettle">${chk(d)} <span>Kettle on</span></div>
      </div>
    </div>

    <div class="half">
      <div class="half-h"><span>Last week&rsquo;s money</span><i>about ten minutes</i></div>
      <div class="half-b">
        <div class="amtrow"><span class="t"><b>Came in</b> <i>what landed, or a week&rsquo;s share</i></span>${d && d.inNote ? `<span class="note">${hw(d.inNote)}</span>` : '<span class="note"></span>'}<span class="amt">${d ? hw(d.in, 'num') : ''}</span></div>
        <table class="ledger wk">
          <colgroup><col style="width:58mm"><col><col style="width:30mm"></colgroup>
          <thead><tr><th>Went out</th><th>Notes</th><th class="r">Amount</th></tr></thead>
          <tbody>${outRows}
            <tr class="total"><td colspan="2" class="r tlabel">Total out</td><td class="r tfill">${d ? hw(d.total, 'num') : ''}</td></tr>
          </tbody>
        </table>
        <div class="amtrow diff"><span class="t"><b>In minus out</b> <i>came in, take away total out</i></span><span class="note">${d && d.diffNote ? hw(d.diffNote) : ''}</span><span class="amt">${d ? hw(d.diff, 'num') : ''}</span></div>
      </div>
    </div>

    <div class="half">
      <div class="half-h"><span>Next week&rsquo;s money${d && d.markNext ? mark(d.markNext) : ''}</span><i>about three minutes</i></div>
      <div class="half-b">
        <table class="ledger wk next">
          <colgroup><col><col style="width:34mm"><col style="width:30mm"></colgroup>
          <thead><tr><th>What&rsquo;s coming up</th><th>Which day</th><th class="r">Amount</th></tr></thead>
          <tbody>${nextRows}</tbody>
        </table>
      </div>
    </div>

    <div class="wk-checks">
      <div class="cg">
        <span>${chk(d)} Every envelope opened</span>
        <span>${chk(d)} New drips written down</span>
        <span>${chk(d)} Shed Door List looked at</span>
      </div>
      <div class="calm">Calm this week: <span class="calmbox">${d ? hw(d.calm, 'num') : ''}</span> out of 10${d && d.markCalm ? mark(d.markCalm) : ''}</div>
    </div>

    <div class="noticed wk-noticed">
      <div class="lline nl"><span class="lt lab">What I noticed:</span><span class="lf">${d ? hw(d.noticed) : ''}</span></div>
      <div class="ln">${d && d.noticed2 ? hw(d.noticed2) : ''}</div>
      <div class="done">${chk(d)} <span><b>Sunday Sums done.</b> Shut the book. Kettle&rsquo;s still warm.</span></div>
    </div>`;
}

function week(n) {
  const body = `${strip('Part Three &middot; Sunday Sums', `Week ${n} of 12`, progress(n, 12))}${sheet(n)}`;
  return page({ id: `wk-${n}`, title: `Sunday Sums, Week ${WORDS[n]}`, body, cls: 'wkpg' });
}

// ---------------------------------------------------------------- opener: the ritual
const opener = page({
  id: 'p3-open',
  title: 'Part Three: Sunday Sums',
  cls: 'opener ritual',
  body: `
    ${strip('Every Sunday, for good', 'Fifteen minutes')}
    <div class="op-head">
      <div class="op-num">Part Three</div>
      <h1 class="op-title">Sunday Sums</h1>
      <div class="deck">The fifteen-minute ritual. Kept every week, for good.</div>
    </div>
    <blockquote class="pull">&ldquo;Last week&rsquo;s money, then next week&rsquo;s money. That&rsquo;s it. That&rsquo;s the whole thing.&rdquo;</blockquote>
    <div class="voice">
      <p>Every Sunday after my dinner, I make a brew in the brown teapot, the one with the knitted cosy Maureen&rsquo;s mother made in 1979, and I sit down with the notebook for fifteen minutes. Maureen does the shopping column. I do the rest. We&rsquo;ve done it since 1983, and I&rsquo;ll be honest with you: it&rsquo;s never once been exciting. It&rsquo;s never once needed to be.</p>
    </div>
    <div class="ritual-steps">
      <div class="rs"><div class="rs-t">0 to 1 min</div><div class="rs-b"><b>Kettle on.</b> Same chair, same time, same pencil. After Sunday dinner works, because nobody forgets Sunday dinner.</div></div>
      <div class="rs"><div class="rs-t">1 to 10 min</div><div class="rs-b"><b>Last week&rsquo;s money.</b> What came in, then what went out, row by row, from the bank app and any receipts. Then the sum: in minus out.</div></div>
      <div class="rs"><div class="rs-t">10 to 13 min</div><div class="rs-b"><b>Next week&rsquo;s money.</b> What&rsquo;s coming: bills, birthdays, the MOT, the Friday Fish, anything on the Shed Door List that reaches day thirty.</div></div>
      <div class="rs"><div class="rs-t">13 to 14 min</div><div class="rs-b"><b>The checks.</b> Envelopes opened? Any new drips? Have a look at the Shed Door List. Then score your calm out of ten.</div></div>
      <div class="rs"><div class="rs-t">14 to 15 min</div><div class="rs-b"><b>One line, then shut the book.</b> Write what you noticed, tick the box, and close it. You&rsquo;re done till next Sunday.</div></div>
    </div>
    <div class="panel goodtoknow">
      <h3>Good to know</h3>
      <div class="gk">
        <p><b>Paid monthly, or every four weeks?</b> Either write it in the week it lands, or write a week&rsquo;s share every Sunday: monthly pay times 12, divided by 52. Pick one and stick to it.</p>
        <p><b>Share money with someone?</b> Split the rows between you. Page ${toc('fit-1')} has the rest.</p>
        <p><b>Sunday doesn&rsquo;t suit?</b> Pick any day you never miss. Sunday&rsquo;s a name, not a law.</p>
        <p><b>After Week 12?</b> You carry on in any cheap notebook. Page ${toc('wk-end')} shows you how.</p>
      </div>
    </div>
  `,
});

// ---------------------------------------------------------------- Ray's filled example
const rayData = {
  date: '27th Sept',
  in: '512.40',
  inNote: 'a week&rsquo;s share, pensions',
  out: [
    ['council tax, gas + elec, water', '236.60'],
    ['Maureen&rsquo;s column', '68.15', mark(1)],
    ['diesel, the van', '30.00'],
    ['paper, a pasty (hungry? yes)', '6.20'],
    ['nowt since 1996', '0.00', mark(2)],
    ['first, as ever', '60.00', mark(3)],
    ['cod twice, chips, peas', '21.40'],
    ['card + a tenner, Lisa&rsquo;s youngest', '12.95'],
  ],
  total: '435.30',
  diff: '77.10',
  diffNote: '',
  next: [
    ['', 'Fri', '21.40'],
    ['Van MOT (she&rsquo;ll pass)', 'Thu', '54.85'],
    ['Window cleaner', 'Tue', '8.00'],
    ['Our Gary&rsquo;s birthday, card + a tenner', 'Sat', '10.00'],
    ['', '', ''],
  ],
  calm: '9',
  markNext: 4,
  markCalm: 5,
  noticed: 'Diesel&rsquo;s up again. Walking to the chip shop Friday.',
  noticed2: '',
};

const example = page({
  id: 'p3-example',
  title: 'One I Did Earlier',
  cls: 'example',
  body: `
    ${strip('Part Three &middot; Sunday Sums', 'A worked example')}
    <h1>One I Did Earlier</h1>
    <div class="deck">Ray&rsquo;s Sunday Sums from last week, copied out of the notebook.</div>
    <div class="voice"><p>Kelly asked me to fill one of these in, so you could see what it looks like once it&rsquo;s been used. This is last Sunday&rsquo;s, copied out of my notebook and a bit neater than usual. It took twelve minutes, thirteen with the seven on the calculator, which sticks. I had a second brew.</p></div>
    <div class="ex-wrap">
      <div class="ex-sheet">${sheet(4, rayData).replace('<h1 class="wk-title">Week 4</h1>', '<h1 class="wk-title">Ray&rsquo;s week</h1>')}</div>
      <div class="ex-notes">
        <div class="en"><span class="mk">1</span><p><b>Maureen&rsquo;s column.</b> Her row, her total, every Sunday since 1983. Split yours however suits your house.</p></div>
        <div class="en"><span class="mk">2</span><p><b>Owed: nowt.</b> I still write the line every week. A line with a nought in it is a line you&rsquo;re watching.</p></div>
        <div class="en"><span class="mk">3</span><p><b>The future.</b> It sits sixth on the page, but it&rsquo;s the first money out, on the day it lands.</p></div>
        <div class="en"><span class="mk">4</span><p><b>Next week&rsquo;s money.</b> The bit most people skip. It&rsquo;s why the MOT on Thursday isn&rsquo;t a surprise.</p></div>
        <div class="en"><span class="mk">5</span><p><b>Calm: nine.</b> Nobody&rsquo;s a ten. There&rsquo;s always diesel.</p></div>
      </div>
    </div>`,
});

// ---------------------------------------------------------------- midpoint letter, before Week 4
const boring = page({
  id: 'p3-boring',
  title: 'The Boring Bit',
  cls: 'letterpg',
  body: `
    ${strip('Part Three &middot; Sunday Sums', 'Read this before Week 4')}
    <h1>The Boring Bit</h1>
    <div class="deck">A letter for the end of Week 3. Read it before you turn the page.</div>
    <div class="letter">
      <p class="salute">Now then,</p>
      <p>Three Sundays done. I&rsquo;d put money on it having gone boring by now. The same chair and the same rows as last week. Week one felt like a fresh start. Week three felt like the washing-up.</p>
      <p>Good. That&rsquo;s what it&rsquo;s supposed to feel like.</p>
      <p>Nobody gets a thrill from bleeding the radiators. You do it because the house stays warm. Sunday Sums is the same. The Leak Hunt was the hard bit, the bit with all the feelings in it. This is maintenance now, and maintenance is meant to be dull. If it was exciting, something would be broken.</p>
      <p>Here&rsquo;s what I&rsquo;ve seen, forty-odd years of it. Most people stop right here. Not because it&rsquo;s hard. Because it&rsquo;s boring, and they think boring means it isn&rsquo;t working. It means it is. This exact Sunday is the whole game.</p>
      <p>So don&rsquo;t add anything this week. Don&rsquo;t make it better, don&rsquo;t buy a new notebook, don&rsquo;t start a spreadsheet. Turn the page and do Week Four. Fifteen minutes. Then the kettle.</p>
      <p class="sig">Ray</p>
      <p class="ps"><b>P.S.</b> If you&rsquo;ve already missed one, you&rsquo;re in good company. Read page ${toc('miss')}, then do this Sunday. Not last Sunday. This one.</p>
    </div>
    <div class="panel green lookback">
      <h3>Before you turn the page</h3>
      <p class="small">Flick back through your first three weeks and copy your calm scores here. Don&rsquo;t judge them. Just look.</p>
      <div class="lb-cells">${[1, 2, 3].map((i) => `<div class="lbc"><i>Week ${i}</i><span></span><b>out of 10</b></div>`).join('')}</div>
      <p class="small">Then write down one thing you know now that you didn&rsquo;t know a month ago.</p>
      ${lines(2)}
    </div>`,
});

// ---------------------------------------------------------------- after Week 12
const end = page({
  id: 'wk-end',
  title: 'Twelve Sundays On',
  cls: 'endpg',
  body: `
    ${strip('Part Three &middot; Sunday Sums', 'After Week 12')}
    <h1>Twelve Sundays On</h1>
    <div class="deck">Take the reading again. Then decide what you&rsquo;re keeping.</div>
    <div class="voice"><p>Right. Turn back to page ${toc('score')} and copy in your first scores. Then score yourself again, today, the same way. Don&rsquo;t be kind and don&rsquo;t be hard. Be honest, like you were the first time.</p></div>
    <table class="ledger score">
      <colgroup><col><col style="width:30mm"><col style="width:30mm"><col style="width:30mm"></colgroup>
      <thead><tr><th>Out of 10</th><th class="c">Page ${toc('score')}</th><th class="c">Today</th><th class="c">Difference</th></tr></thead>
      <tbody>
        <tr><td class="pre">How calm I feel when I open the bank app</td><td></td><td></td><td></td></tr>
        <tr><td class="pre">How well I know where my money goes</td><td></td><td></td><td></td></tr>
        <tr><td class="pre">How well I sleep without money on my mind</td><td></td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="calmrow">
      <div class="lt">My twelve weekly calm scores, copied off each Sunday page:</div>
      <div class="cells">${Array.from({ length: 12 }, (_, i) => `<div class="cc"><span></span><i>W${i + 1}</i></div>`).join('')}</div>
    </div>
    <div class="voice tight"><p>Now read the note you wrote to yourself on page ${toc('score')}. Whatever the numbers say, that&rsquo;s a reading, not a feeling, and it&rsquo;s twelve weeks of it in your own handwriting. That&rsquo;s evidence.</p></div>
    ${lline('What I&rsquo;d say back to the me who wrote that note:')}
    ${lines(1)}
    <div class="keep">
      <h3>The Keep List: the bits that worked, in my words</h3>
      <div class="keeplines">${[1, 2, 3, 4, 5].map((i) => `<div class="kl"><span>${i}</span><span class="lf"></span></div>`).join('')}</div>
      <p class="tiny">Copy these onto the fridge card on page ${toc('b-fridge')}.</p>
    </div>
    ${lline('The date of my first Sunday in my own notebook:')}
    <div class="yours">
      <p><b>The ritual&rsquo;s yours now.</b> Get a plain notebook, the cheap one. Rule it up like these pages: last week&rsquo;s money, then next week&rsquo;s money. Next Sunday is the first of the rest. I&rsquo;ll not be checking. Nobody will. That&rsquo;s the point.</p>
      <div class="closing"><span class="cp">Rich is quiet.</span><span class="sig">Ray</span></div>
    </div>`,
});

const weeks = Array.from({ length: 12 }, (_, i) => week(i + 1));
const order = [opener, example, weeks[0], weeks[1], weeks[2], boring, ...weeks.slice(3), end];
module.exports = { order, sheet };

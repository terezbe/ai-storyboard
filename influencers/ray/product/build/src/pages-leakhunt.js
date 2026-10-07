// Part One: The Leak Hunt. One sitting, done once. Eight steps, one page each, identical structure.
const { page, progress, strip, box, lines, lline, noticed, ledger } = require('./components');

const Q = '<span class="theq">Would I buy this again today?</span>';
const toc = (id) => `<span data-toc="${id}"></span>`;

// Identical structure for every step.
function leakStep({ n, id, title, deck, voice, steps, fill, notice = 2 }) {
  const body = `
    ${strip('Part One &middot; The Leak Hunt', `Step ${n} of 8`, progress(n, 8))}
    <h1>${title}</h1>
    <div class="deck">${deck}</div>
    <div class="voice">${voice}</div>
    <div class="dothis"><h3>Do this</h3><ol class="steps">${steps.map((s) => `<li>${s}</li>`).join('')}</ol></div>
    <div class="fillarea">${fill}</div>
    ${noticed(notice)}`;
  return page({ id, title, body, cls: 'leak' });
}

// ---------------------------------------------------------------- opener
const opener = page({
  id: 'p1-open',
  title: 'Part One: The Leak Hunt',
  cls: 'opener',
  body: `
    ${strip('Steps 1 to 8', 'One sitting, done once')}
    <div class="op-head">
      <div class="op-num">Part One</div>
      <h1 class="op-title">The Leak Hunt</h1>
      <div class="deck">One honest sitting. Kettle on. You only ever do it once.</div>
    </div>
    <blockquote class="pull">&ldquo;When I find a leak, I don&rsquo;t start fixing. I turn the water off and I look.&rdquo;</blockquote>
    <div class="voice">
      <p>Money&rsquo;s like water, love. It always goes somewhere. The trouble is never that it&rsquo;s gone. It&rsquo;s that you don&rsquo;t know where. So this is one sitting, one evening, where we find out: every statement, every little drip, and next to every outgoing, one question. ${Q}</p>
      <p>You&rsquo;re not fixing anything tonight. Tonight&rsquo;s for looking. The fixing comes after, and it&rsquo;s easier than you&rsquo;d think, because by then you&rsquo;ll know which pipe it is.</p>
    </div>
    <div class="op-grid">
      <div class="panel">
        <h3>How the sitting works</h3>
        <ul class="plain">
          <li><b>Give it an evening.</b> Two to three hours for most people, with a brew at half time. If you have to stop, stop at the end of a step, and finish the same day if you can.</li>
          <li><b>Pencil, not pen.</b> You&rsquo;ll get things wrong. Everyone does.</li>
          <li><b>Write amounts, not verdicts.</b> Nobody gets told off in this book. Not even you.</li>
          <li><b>Nothing new goes out tonight.</b> No shopping, no &ldquo;just having a look&rdquo;. That&rsquo;s the stopcock.</li>
        </ul>
      </div>
      <div class="op-index">
        <h3>The eight steps</h3>
        <ol class="idx">
          <li><span>Find the Stopcock</span><i>get it all on the table</i><b>${toc('lh-stopcock')}</b></li>
          <li><span>The Mains</span><i>what comes in</i><b>${toc('lh-mains')}</b></li>
          <li><span>The Pipework</span><i>what goes out on a schedule</i><b>${toc('lh-pipework')}</b></li>
          <li><span>The Drips</span><i>subscriptions and plans</i><b>${toc('lh-drips')}</b></li>
          <li><span>The Small Leaks</span><i>the forty little things</i><b>${toc('lh-small')}</b></li>
          <li><span>The No Pile</span><i>what you&rsquo;ll do about each No</i><b>${toc('lh-nopile')}</b></li>
          <li><span>What&rsquo;s Owed</span><i>the pressure in the system</i><b>${toc('lh-owed')}</b></li>
          <li><span>The Pressure Reading</span><i>the sums, and your first Sunday</i><b>${toc('lh-pressure')}</b></li>
        </ol>
      </div>
    </div>
    <p class="op-foot">Not up to a whole evening yet? Do the Twenty-Minute Leak Hunt on page ${toc('b-quick')} first, and come back to this when you&rsquo;re ready. It&rsquo;ll keep.</p>
  `,
});

// ---------------------------------------------------------------- step 1
const stopcock = leakStep({
  n: 1,
  id: 'lh-stopcock',
  title: 'Find the Stopcock',
  deck: 'Get everything on the table, and open what you&rsquo;ve been leaving face down.',
  voice: `
    <p>First job on any leak is finding the stopcock. Every house has one, and most people don&rsquo;t know where theirs is till the kitchen&rsquo;s an inch deep. Here, the stopcock is the pile: every statement, every letter, every app, all on the table, so nothing&rsquo;s hiding and nothing new goes out while you look.</p>
    <p>Then the envelopes. I&rsquo;ve never met an envelope that got smaller for being left on the mantelpiece. Before you open each one, write down how bad you think it is. After, write how bad it actually was. Watch those two numbers. That&rsquo;s most of what this book has to teach you, and you&rsquo;ll learn it in the first twenty minutes.</p>`,
  steps: [
    'Put the kettle on. Clear the table. Phone on silent, apart from the bank app.',
    'Gather the last three months of everything on the list below, and tick each one off as it lands on the table.',
    'Open every envelope and every email you&rsquo;ve been avoiding. Score each one before you open it, and again after.',
    'Don&rsquo;t fix anything yet. Not one thing. Tonight&rsquo;s for looking.',
  ],
  fill: `
    <h3>On the table</h3>
    <div class="checks two-col">
      <div>${box()} Bank statements or app history, last three months, every account</div>
      <div>${box()} Credit card and store card statements</div>
      <div>${box()} Loans, overdrafts and any pay-later accounts</div>
      <div>${box()} Payslips, invoices or benefit letters: whatever shows what comes in</div>
      <div>${box()} Bills: rent or mortgage, energy, water, phone, local tax, insurance</div>
      <div>${box()} Every unopened envelope and unread email from anyone you pay or owe</div>
      <div>${box()} A pencil, a rubber, a calculator and a brew</div>
    </div>
    <div style="height:3.4mm"></div>
    ${ledger({
      caption: 'The envelopes. Score each one out of ten, where ten is the worst thing you can imagine.',
      cols: [
        { h: 'Who it&rsquo;s from', w: '58mm' },
        { h: 'What it turned out to be', w: '70mm' },
        { h: 'Before', w: '22mm', cls: 'c' },
        { h: 'After', w: '22mm', cls: 'c' },
      ],
      groups: [null, null, { label: 'How bad?', span: 2 }, {}],
      rows: 5,
    })}`,
});

// ---------------------------------------------------------------- step 2
const mains = leakStep({
  n: 2,
  id: 'lh-mains',
  title: 'The Mains',
  deck: 'What comes in, how often, and how steady it really is.',
  voice: `
    <p>The mains is where the water comes into the house. Before you look for leaks, you want to know what&rsquo;s coming through the pipe, and how steady it is. Some people get one wage on the same day every month. Some get bits from all over. In my trade, overtime and <span class="nw">call-outs</span> came in fits and starts, and it took me years to stop counting money I hadn&rsquo;t been paid yet.</p>
    <p>So write down what actually landed. Not what you were promised, not what you invoiced, not what you&rsquo;re owed by your brother-in-law. What landed.</p>`,
  steps: [
    'Go through three months of statements and write down every amount that came in: wages, benefits, pensions, side jobs, money from family, refunds.',
    'Work out the monthly figure for each one. The box below does the sums.',
    'If it changes from month to month, write down your lowest month as well. Plan on the lowest, not the best.',
    'Note any money you&rsquo;re counting on that isn&rsquo;t certain yet. Count it when it lands, not before.',
  ],
  fill: `
    ${ledger({
      caption: 'What comes in.',
      cols: [
        { h: 'Where it comes from', w: '58mm' },
        { h: 'How often', w: '26mm' },
        { h: 'Amount', w: '26mm', cls: 'r' },
        { h: 'Per month', w: '28mm', cls: 'r' },
        { h: 'Yes', w: '17mm', cls: 'c', box: true },
        { h: 'No', w: '17mm', cls: 'c', box: true },
      ],
      groups: [null, null, null, null, { label: 'Steady?', span: 2 }, {}],
      rows: 6,
      total: { label: 'Total coming in per month', span: 3, fill: [3] },
    })}
    <div class="panel sums">
      <h3>Turning it into a monthly figure</h3>
      <div class="sumgrid">
        <div><b>Weekly</b><span>times 52, then divide by 12</span></div>
        <div><b>Fortnightly</b><span>times 26, then divide by 12</span></div>
        <div><b>Every four weeks</b><span>times 13, then divide by 12</span></div>
      </div>
    </div>
    ${lline('My lowest month of the three:')}
    ${lline('Money I&rsquo;m counting on that isn&rsquo;t certain yet:')}`,
});

// ---------------------------------------------------------------- step 3
const pipework = leakStep({
  n: 3,
  id: 'lh-pipework',
  title: 'The Pipework',
  deck: 'Everything that goes out on a schedule, whether you look or not.',
  voice: `
    <p>Pipework is the stuff built into the walls: rent or mortgage, energy, water, phone, insurance, local tax. Nobody thinks about pipes till one goes. But it&rsquo;s where the big money runs, and some of it was put in years ago by somebody who isn&rsquo;t you any more. The phone deal you signed three years back. The insurance that renewed itself while you weren&rsquo;t looking.</p>
    <p>Even here, ask the question. For the rent, the answer&rsquo;s yes. For the deal that&rsquo;s quietly crept up, it might not be.</p>`,
  steps: [
    'Take one full month of statements. Find every payment that goes out on a schedule: direct debits, standing orders, card payments that repeat.',
    'Write each one down with the day it leaves. If it&rsquo;s yearly or quarterly, work out the monthly figure.',
    'Tick Surprise if you didn&rsquo;t know it was there, or didn&rsquo;t know it was that much.',
    `Then ask: ${Q} Tick Yes or No.`,
  ],
  fill: `
    ${ledger({
      caption: `Every scheduled payment, and the one question next to it: ${Q}`,
      cols: [
        { h: 'What it&rsquo;s for', w: '52mm' },
        { h: 'Day it goes', w: '22mm' },
        { h: 'Amount', w: '22mm', cls: 'r' },
        { h: 'Per month', w: '24mm', cls: 'r' },
        { h: 'Surprise?', w: '20mm', cls: 'c', box: true },
        { h: 'Yes', w: '16mm', cls: 'c', box: true },
        { h: 'No', w: '16mm', cls: 'c', box: true },
      ],
      groups: [null, null, null, null, null, { label: 'Again today?', span: 2 }, {}],
      rows: 11,
      total: { label: 'Total pipework per month', span: 3, fill: [3] },
    })}`,
});

// ---------------------------------------------------------------- step 4 (the locked sample)
const drips = leakStep({
  n: 4,
  id: 'lh-drips',
  title: 'The Drips',
  deck: 'Subscriptions, memberships, plans, and the free trials that quietly stopped being free.',
  voice: `
    <p>Right. I&rsquo;ve never had a subscription I forgot about, and that&rsquo;s not because I&rsquo;m clever. I&rsquo;ve only ever had about four, and every one of them is in a notebook. Most people have more than they think, and that&rsquo;s not daft, it&rsquo;s design: they&rsquo;re built to be easy to start and easy to forget.</p>
    <p>A drip doesn&rsquo;t look like much. Stand and watch a dripping tap and you&rsquo;ll get bored before you get worried. Put a bucket under it overnight, though, and have a look in the morning. This page is the bucket.</p>`,
  steps: [
    'Go through three months of bank and card statements. Some things only charge once a year, so search your emails for &ldquo;renewal&rdquo; and &ldquo;subscription&rdquo; as well.',
    'Write down every subscription, membership, app, plan, box or &ldquo;free trial&rdquo; that turned into a payment. Even the small ones. Especially the small ones.',
    'Work out what each one costs in a year. Monthly: times twelve. Weekly: times fifty-two.',
    `Next to each one, ask one question, and only one: ${Q} Not &ldquo;do I need it?&rdquo; Not &ldquo;might I use it?&rdquo; Tick Yes or No and move on. Every No goes on the No Pile in Step 6.`,
  ],
  fill: `
    ${ledger({
      caption: `Every drip, and the one question next to it: ${Q}`,
      cols: [
        { h: 'What it is', w: '50mm' },
        { h: 'How often', w: '21mm' },
        { h: 'Amount', w: '21mm', cls: 'r' },
        { h: 'Per year', w: '22mm', cls: 'r' },
        { h: 'Last used', w: '24mm' },
        { h: 'Yes', w: '17mm', cls: 'c', box: true },
        { h: 'No', w: '17mm', cls: 'c', box: true },
      ],
      groups: [null, null, null, null, null, { label: 'Again today?', span: 2 }, {}],
      rows: 10,
      total: { label: 'Total per year', span: 3, fill: [3] },
    })}
    <div class="two tallies">${lline('How many drips I found:')}${lline('How many got a No:')}</div>`,
});

// ---------------------------------------------------------------- step 5
const small = leakStep({
  n: 5,
  id: 'lh-small',
  title: 'The Small Leaks',
  deck: 'The forty little things you don&rsquo;t write down.',
  voice: `
    <p>It&rsquo;s never the big things that empty you. It&rsquo;s the forty little things you don&rsquo;t write down: the four-quid coffee you don&rsquo;t even remember drinking, the meal deal, the taxi because you were late, because you were tired, because. In March 1987 I spent two pound forty on pasties in one week. I wrote it down, and next to it I wrote: <i>hungry? No. Bored.</i></p>
    <p>I&rsquo;m not going to tell you not to have a coffee. I&rsquo;m going to ask you to count them.</p>`,
  steps: [
    'Pick your small-leak line. Anything under about the price of a takeaway is a good start. Write yours in below.',
    'Take one month of statements. For every small spend, put a tally mark in the right row, and add up the money as you go.',
    'Times each row by twelve. Look at that number for a bit. Don&rsquo;t do anything about it yet.',
    `Ask the question of each row: ${Q} Not every coffee is a leak. The ones you&rsquo;d happily buy again aren&rsquo;t.`,
  ],
  fill: `
    ${lline('My small-leak line: anything under', 'short')}
    <div style="height:2.6mm"></div>
    ${ledger({
      cols: [
        { h: 'The leak', w: '52mm' },
        { h: 'Tally', w: '38mm' },
        { h: 'This month', w: '25mm', cls: 'r' },
        { h: 'In a year', w: '25mm', cls: 'r' },
        { h: 'Yes', w: '16mm', cls: 'c', box: true },
        { h: 'No', w: '16mm', cls: 'c', box: true },
      ],
      groups: [null, null, null, null, { label: 'Again today?', span: 2 }, {}],
      rows: [
        'Coffees and hot drinks out',
        'Lunches, meal deals, snacks',
        'Takeaways and delivery',
        'Taxis and &ldquo;just this once&rdquo; fares',
        'Corner-shop top-ups',
        'Apps, games and in-app bits',
        'Treats I didn&rsquo;t plan',
        '',
        '',
        '',
      ],
      total: { label: 'Total', span: 2, fill: [2, 3] },
    })}`,
});

// ---------------------------------------------------------------- step 6
const nopile = leakStep({
  n: 6,
  id: 'lh-nopile',
  title: 'The No Pile',
  deck: 'Every No from Steps 3, 4 and 5, and what you&rsquo;ll do about each one.',
  voice: `
    <p>Gather up your Nos. This is where looking turns into a plan. You&rsquo;re still not fixing, mind. You&rsquo;re deciding. When I&rsquo;ve found the leak and the water&rsquo;s off, I don&rsquo;t rip the whole bathroom out. I pick the one fitting that&rsquo;s gone, and I sort that. Then the next one.</p>
    <p>And if a No is something you&rsquo;re fond of, that&rsquo;s fine. A No doesn&rsquo;t mean you&rsquo;ve been daft. It means it&rsquo;s stopped being worth it, and you&rsquo;re the only one who gets to say so.</p>`,
  steps: [
    'Copy every No from Steps 3, 4 and 5 onto this page. Biggest first.',
    'For each one, pick what you&rsquo;ll do: cancel it, ring and ask for a better price, cut it back, swap it for something cheaper, or wait for the renewal date and write the date down.',
    'Give each one a &ldquo;by when&rdquo;. For anything you&rsquo;re cancelling, make it this week.',
    'Tick Done as you go, over the next week or two. Not tonight.',
  ],
  fill: `
    ${ledger({
      cols: [
        { h: 'The No', w: '56mm' },
        { h: 'What I&rsquo;ll do', w: '52mm' },
        { h: 'By when', w: '24mm' },
        { h: 'A month', w: '22mm', cls: 'r' },
        { h: 'Done', w: '18mm', cls: 'c', box: true },
      ],
      rows: 12,
    })}
    <div class="aside crib"><b>Ringing up?</b> Say: &ldquo;I&rsquo;m going through my outgoings and this one&rsquo;s gone up. What&rsquo;s the best you can do for me?&rdquo; Then be quiet and let them talk. The quiet does most of the work.</div>`,
});

// ---------------------------------------------------------------- step 7
const owed = leakStep({
  n: 7,
  id: 'lh-owed',
  title: 'What&rsquo;s Owed',
  deck: 'The pressure in the system. Write the scary one first.',
  voice: `
    <p>Debt&rsquo;s not a moral failing, love. It&rsquo;s a number with a date on it. I know it doesn&rsquo;t feel like that at half eleven at night, but on paper that&rsquo;s all it is, and paper is where you can do something about it.</p>
    <p>Write them all down: the cards, the loans, the overdraft, the pay-later ones, the catalogue, what you owe your sister. Write the scary one first and get it over with.</p>`,
  steps: [
    'List everything you owe. If you don&rsquo;t know a figure, write &ldquo;find out&rdquo; and find out this week.',
    'For each one, write the balance, the interest rate if there is one, the minimum payment and the day it&rsquo;s due.',
    'Tick Behind for anything you&rsquo;ve missed a payment on.',
    `If you&rsquo;re behind on your home, your heating, or anything with a court letter, turn to page ${toc('fit-2')} today, before anything else.`,
  ],
  fill: `
    ${ledger({
      cols: [
        { h: 'Who I owe, and what for', w: '64mm' },
        { h: 'Balance', w: '24mm', cls: 'r' },
        { h: 'Interest', w: '20mm' },
        { h: 'Minimum', w: '24mm', cls: 'r' },
        { h: 'Due', w: '20mm' },
        { h: 'Behind?', w: '20mm', cls: 'c', box: true },
      ],
      rows: 11,
      total: { label: 'Total', span: 1, fill: [1, 3] },
    })}
    <div class="panel green note">Which one to pay off first? There are two honest ways of going about it, smallest balance first or highest interest first. Both are explained on page ${toc('fit-2')}. Pick one there. Feeling winded? That&rsquo;s normal. Have a biscuit. The cheap ones are fine.</div>`,
});

// ---------------------------------------------------------------- step 8
const pressure = leakStep({
  n: 8,
  id: 'lh-pressure',
  title: 'The Pressure Reading',
  deck: 'In at the top, out underneath. What&rsquo;s left is the reading.',
  voice: `
    <p>Right. This is the gauge. What came in goes at the top, what went out goes underneath, and the difference is the pressure. If it&rsquo;s a minus number, you&rsquo;ve not failed. You&rsquo;ve found out, and most people never do. If it&rsquo;s a plus number and you still never seem to have any, the answer&rsquo;s somewhere in Steps 3 to 5, and now you know where to look.</p>`,
  steps: [
    'Fill in the reading below, using your last full month.',
    'Work out &ldquo;the rest&rdquo; by taking the four you know away from everything that went out. That&rsquo;s the food shop, fuel, clothes and one-offs.',
    'Pick your first Sunday and write it in. This Sunday, if you can.',
    'Then shut the book, put the kettle on and have a sit down. You&rsquo;ve done the hard bit.',
  ],
  fill: `
    <div class="reading">
      <div class="rd big"><span class="k">A</span><span class="t">What came in last month <i>(Step 2)</i></span><span class="v"></span></div>
      <div class="rd big"><span class="k">B</span><span class="t">Everything that went out last month, all of it</span><span class="v"></span></div>
      <div class="rd total"><span class="k">A-B</span><span class="t"><b>The reading:</b> A take away B, plus or minus</span><span class="v"></span></div>
      <h3 class="rd-h">Where B went</h3>
      <div class="rd"><span class="k">1</span><span class="t">The pipework <i>(Step 3, per month)</i></span><span class="v"></span></div>
      <div class="rd"><span class="k">2</span><span class="t">The drips <i>(Step 4, per year, divided by twelve)</i></span><span class="v"></span></div>
      <div class="rd"><span class="k">3</span><span class="t">The small leaks <i>(Step 5, this month)</i></span><span class="v"></span></div>
      <div class="rd"><span class="k">4</span><span class="t">Payments on what&rsquo;s owed <i>(Step 7, minimums or more)</i></span><span class="v"></span></div>
      <div class="rd"><span class="k">5</span><span class="t">The rest: B take away 1, 2, 3 and 4</span><span class="v"></span></div>
    </div>
    <div class="two first">${lline('My first Sunday Sums:')}${lline('Calm right now, out of 10:', 'short')}</div>
    ${lline(`Calm on page ${toc('score')}, before I started:`, 'short')}
    ${lline('The bit I&rsquo;m proudest of tonight:')}
    ${lline('The first job this week:')}`,
});

const order = [opener, stopcock, mains, pipework, drips, small, nopile, owed, pressure];
module.exports = { leakStep, Q, order, pages: { drips } };

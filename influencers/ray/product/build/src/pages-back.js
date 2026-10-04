// The back of the shed: five bonuses mined from the body, then the honest small print.
const { page, strip, box, lines, lline, ledger } = require('./components');
const toc = (id) => `<span data-toc="${id}"></span>`;
const Q = '<span class="theq">Would I buy this again today?</span>';
const bstrip = (n, right) => strip(`The back of the shed &middot; Bonus ${n} of 5`, right);

// ---------------------------------------------------------------- Bonus 1: quickstart
const qstep = (t, title, text, fill) => `<div class="qs"><div class="qs-t">${t}</div><div class="qs-b"><p><b>${title}</b> ${text}</p>${fill || ''}</div></div>`;
const quick = page({
  id: 'b-quick',
  title: 'The Twenty-Minute Leak Hunt',
  cls: 'bonus quickpg',
  body: `
    ${bstrip(1, 'For when you can&rsquo;t face the full sitting')}
    <h1>The Twenty-Minute Leak Hunt</h1>
    <div class="deck">One month, one app, one brew, and a timer.</div>
    <div class="voice"><p>I&rsquo;d rather you did twenty minutes tonight than three hours never. This is the Leak Hunt with the engine running. It won&rsquo;t find everything. It&rsquo;ll find enough to make the full sitting feel worth doing.</p></div>
    <div class="qsteps">
      ${qstep('0 to 2 min', 'Kettle on.', 'Open the bank app at last month. Set a timer for twenty minutes.')}
      ${qstep('2 to 8 min', 'Count what repeats.', 'Scroll last month and count every payment that comes back: direct debits, subscriptions, anything with the same name twice.', `<div class="two">${lline('Regular payments:', 'short')}${lline('Of those, subscriptions:', 'short')}</div>`)}
      ${qstep('8 to 12 min', 'Ask the question.', `For every subscription: ${Q}`, `<div class="two">${lline('How many got a No:', 'short')}${lline('The biggest No:')}</div>`)}
      ${qstep('12 to 16 min', 'Count one small leak.', 'Pick one kind, like coffees, takeaways, taxis or snacks, and count them for the month.', `<div class="four">${lline('My leak:')}${lline('Times:', 'short')}${lline('Amount:', 'short')}${lline('Times twelve:', 'short')}</div>`)}
      ${qstep('16 to 18 min', 'Open one envelope.', 'The one you&rsquo;ve been leaving. Score it before you open it, and again after.', `<div class="three-q">${lline('It was:')}${lline('Before:', 'short')}${lline('After:', 'short')}</div>`)}
      ${qstep('18 to 20 min', 'Book your first Sunday.', 'Write it in, and put the book somewhere you&rsquo;ll see it.', `${lline('My first Sunday Sums:')}`)}
    </div>
    <div class="panel green qfix">
      ${lline('The one leak I&rsquo;m fixing this week:')}
      <div class="tried">${box('lg')} <span>Fixed it</span></div>
    </div>
    <p class="op-foot">When you&rsquo;re ready, the full Leak Hunt starts on page ${toc('p1-open')}. It&rsquo;ll keep.</p>`,
});

// ---------------------------------------------------------------- Bonus 2: the fridge card
const fridge = page({
  id: 'b-fridge',
  title: 'The Fridge Card',
  cls: 'bonus fridgepg',
  body: `
    ${bstrip(2, 'Print it, cut it out')}
    <h1>The Fridge Card</h1>
    <div class="deck">Print this page, cut along the dashed lines, and stick them where you&rsquo;ll see them.</div>
    <div class="card big">
      <div class="card-h"><span>Sunday Sums</span><i>fifteen minutes, with a brew</i></div>
      <div class="card-q">Last week&rsquo;s money, then next week&rsquo;s money.</div>
      <ol class="cardsteps">
        <li><b>Kettle on.</b> Same chair, same time, same pencil.</li>
        <li><b>Last week&rsquo;s money.</b> Came in, went out, in minus out.</li>
        <li><b>Next week&rsquo;s money.</b> What&rsquo;s coming, and the Friday Fish.</li>
        <li><b>The checks.</b> Envelopes, drips, the Shed Door List. Calm, out of ten.</li>
        <li><b>One line.</b> What I noticed. Tick the box. Shut the book.</li>
      </ol>
      <div class="card-foot">Missed one? No catching up. Just do this Sunday.</div>
    </div>
    <div class="card big rules">
      <div class="card-h"><span>Ray&rsquo;s Rules</span><i>and the ones I&rsquo;m keeping</i></div>
      <div class="rc-grid">
        <ol class="rulelist">
          <li><b>Open the Envelope.</b> The day it lands.</li>
          <li><b>Write It Down.</b> Writing is noticing.</li>
          <li><b>The Bucket Rule.</b> Mend &gt; borrow &gt; second-hand &gt; new.</li>
          <li><b>The Thirty-Day Wait.</b> Wants over my line wait.</li>
          <li><b>The Friday Fish.</b> Budgeted, written down, enjoyed.</li>
          <li><b>The Cheap Biscuit Rule.</b> Spend where you notice.</li>
          <li><b>Pay the Future First.</b> The first line in the book.</li>
        </ol>
        <div class="keepcard"><div class="kc-h">My Keep List</div>${[1, 2, 3, 4, 5].map((i) => `<div class="kl"><span>${i}</span><span class="lf"></span></div>`).join('')}</div>
      </div>
    </div>
    <div class="wallets">
      <div class="card wallet"><div class="wl">The Again Test</div><div class="wq">Would I buy this again today?</div><div class="ws">Not &ldquo;do I need it&rdquo;. Not &ldquo;is it handy&rdquo;. Would I buy it again, today?</div></div>
      <div class="card wallet"><div class="wl">The Thirty-Day Wait</div><div class="wq small2">Over <span class="wfill"></span>? On the list.</div><div class="ws">A want, not a need, waits thirty days. Still want it, and can pay outright? Buy it. No guilt, no fuss.</div></div>
    </div>
    <p class="cutnote">Cut along the dashed lines. The two small ones fit in a purse or a wallet.</p>`,
});

// ---------------------------------------------------------------- Bonus 3: the shed door list
const shed = page({
  id: 'b-shed',
  title: 'The Shed Door List',
  cls: 'bonus shedpg',
  body: `
    ${bstrip(3, 'Pin it up')}
    <h1>The Shed Door List</h1>
    <div class="deck">The Thirty-Day Wait, ready to pin up. Mine&rsquo;s on the shed door. Yours can go on the fridge.</div>
    <div class="panel myline">
      <div class="ml">My line: anything over <span class="fill mlf"></span> that&rsquo;s a want, not a need, goes on here and waits thirty days.</div>
      <div class="ml2">On day thirty, two questions: do I still want it, and can I pay for it outright? Two yeses and it&rsquo;s yours. No guilt, no fuss.</div>
    </div>
    ${ledger({
      cols: [
        { h: 'What I want', w: '62mm' },
        { h: 'Price', w: '22mm', cls: 'r' },
        { h: 'Wanted on', w: '24mm' },
        { h: 'Day thirty', w: '24mm' },
        { h: 'Still want', w: '20mm', cls: 'c', box: true },
        { h: 'Can pay', w: '20mm', cls: 'c', box: true },
      ],
      groups: [null, null, null, null, { label: 'On day thirty', span: 2 }, {}],
      rows: 15,
    })}
    <p class="shednote">Cross things off when you stop wanting them. Mine&rsquo;s mostly crossings-out, and that&rsquo;s the point.</p>`,
});

// ---------------------------------------------------------------- Bonus 4: things I've never paid for
const nv = (a, b) => `<li><b>${a}</b> ${b}</li>`;
const never = page({
  id: 'b-never',
  title: 'Things I&rsquo;ve Never Paid For',
  cls: 'bonus neverpg',
  body: `
    ${bstrip(4, 'Ray&rsquo;s list')}
    <h1>Things I&rsquo;ve Never Paid For</h1>
    <div class="deck">And a few things I always will. Then yours.</div>
    <div class="voice"><p>Kelly asked me for this list for the internet. It&rsquo;s not a boast. Some of it&rsquo;s luck, some of it&rsquo;s stubbornness, and some of it&rsquo;s just being a plumber.</p></div>
    <div class="nv-grid">
      <div class="nv-col">
        <h3>Never paid for</h3>
        <ul class="nvl">
          ${nv('A car wash.', 'I&rsquo;ve got a bucket.')}
          ${nv('Bottled water.', 'I spent forty-six years making sure the tap works.')}
          ${nv('A new car.', 'Every car I&rsquo;ve owned had somebody else&rsquo;s crisps down the seat first.')}
          ${nv('Interest on a credit card.', 'If it went on the card, it came off the card that month.')}
          ${nv('A subscription I forgot about.', 'I&rsquo;ve had about four. I could name them all.')}
          ${nv('An extended warranty.', 'I am the warranty.')}
          ${nv('A plumber.', 'Obviously.')}
          ${nv('Delivery on a takeaway.', 'The chip shop&rsquo;s a ten-minute walk. That&rsquo;s the delivery.')}
        </ul>
      </div>
      <div class="nv-col always">
        <h3>Always paid for, gladly</h3>
        <ul class="nvl">
          ${nv('Good boots.', 'My feet have done forty-six years of other people&rsquo;s stairs.')}
          ${nv('Proper tools.', 'A spanner that slips costs you a knuckle.')}
          ${nv('Fish and chips on a Friday.', 'You know about that.')}
          ${nv('A card for every grandchild, with a tenner in.', 'Kelly says it&rsquo;s not kept up with inflation. Kelly can write her own card.')}
          ${nv('The nice biscuits.', 'Well. Maureen does.')}
        </ul>
      </div>
    </div>
    <div class="two mine">
      <div><h3>Mine: things I&rsquo;m done paying for</h3>${lines(5)}</div>
      <div><h3>Mine: things I&rsquo;ll gladly keep paying for</h3>${lines(5)}</div>
    </div>`,
});

// ---------------------------------------------------------------- Bonus 5: Ray's notebook, March 1987
const nb = (text, cls = '', m = '') => `<div class="nbl ${cls}">${text}${m ? `<span class="mk">${m}</span>` : ''}</div>`;
const notebook = page({
  id: 'b-notebook',
  title: 'Ray&rsquo;s Notebook, March 1987',
  cls: 'bonus notebookpg',
  body: `
    ${bstrip(5, 'From the shoebox')}
    <h1>Ray&rsquo;s Notebook, March 1987</h1>
    <div class="deck">Notebook number five, one week of it. Kelly scanned it, and I&rsquo;ve written on the side what&rsquo;s what.</div>
    <div class="nb-wrap">
      <div class="nb-page">
        <div class="nb-holes">${'<span></span>'.repeat(14)}</div>
        <div class="nb-lines">
          ${nb('<span class="hd">Sun 15th March 87</span>')}
          ${nb('<span class="c1">IN</span> wages <span class="am">141.20</span>')}
          ${nb('<span class="c1"></span> Sat o/t <span class="am">18.00</span>')}
          ${nb('<span class="c1">Future</span> <span class="am">5.00</span>', 'clear', '1')}
          ${nb('<span class="c1">Gas</span> qtr, pd same day <span class="am">38.40</span>', 'clear', '2')}
          ${nb('<span class="c1">Shop</span> (M) <span class="am">34.85</span>', 'clear', '3')}
          ${nb('<span class="c1">Fish+chips</span> Fri <span class="am">2.60</span>', 'clear', '4')}
          ${nb('<span class="c1">Pasties</span> <span class="am">2.40</span> <span class="aside-h">hungry? No. Bored.</span>', 'clear', '5')}
          ${nb('<span class="c1">Gary</span> shoes <span class="am">9.99</span>', 'scrawl')}
          ${nb('<span class="c1">washers</span> + olive <span class="am">0.45</span>', 'scrawl')}
          ${nb('<span class="c1">bus</span> wk <span class="am">2.40</span>', 'scrawl')}
          ${nb('<span class="c1">paper</span> <span class="am">1.20</span>', 'scrawl')}
          ${nb('<span class="c1"><s>Drill</s></span> <s>24.99</s> <span class="aside-h">30 days</span>', 'clear', '6')}
          ${nb('<span class="c1">OUT</span> <span class="am ul">97.29</span>')}
          ${nb('<span class="c1">LEFT</span> <span class="am dbl">61.91</span>')}
          ${nb('<span class="c1">mon</span> tea bags .32 milk .44 brd .48', 'scrawl small')}
          ${nb('<span class="c1">tue</span> nails, M&rsquo;s mum bday card .35', 'scrawl small')}
        </div>
        <div class="nb-sums">38.40<br>34.85<br>9.99<br>5.00<br>2.60<br>2.40<br>2.40<br>1.20<br>.45<br><span class="sl">97.29</span><span class="mk">7</span></div>
      </div>
      <div class="nb-notes">
        <div class="en"><span class="mk">1</span><p><b>Future first.</b> Five pound, before anything else got a look in. Four years after the gas bill, that line was never missing.</p></div>
        <div class="en"><span class="mk">2</span><p><b>Gas, paid the day it came.</b> I never let another one sit on the mantelpiece.</p></div>
        <div class="en"><span class="mk">3</span><p><b>(M) is Maureen.</b> She did the shop and told me the total. She still does.</p></div>
        <div class="en"><span class="mk">4</span><p><b>Fish and chips for two</b>, two pound sixty. Don&rsquo;t tell Kelly what it costs now.</p></div>
        <div class="en"><span class="mk">5</span><p><b>The pasties.</b> I wrote that note to myself in 1987, and I&rsquo;ve been asking it ever since.</p></div>
        <div class="en"><span class="mk">6</span><p><b>A drill, crossed out.</b> The Thirty-Day Wait before it had a name. Borrowed one off Mr Hargreaves instead.</p></div>
        <div class="en"><span class="mk">7</span><p><b>Sums in the margin, by hand.</b> The calculator didn&rsquo;t come till 1989. Took longer. Stuck better.</p></div>
      </div>
    </div>
    <p class="nb-foot">Notebook five of forty-one. The rest are in the shoebox, in the wardrobe, next to my good shoes.</p>`,
});

// ---------------------------------------------------------------- the honest small print
const smallprint = page({
  id: 'smallprint',
  title: 'The Honest Small Print',
  cls: 'smallprintpg',
  body: `
    ${strip('The back of the shed', 'The honest small print')}
    <h1>The Honest Small Print</h1>
    <div class="deck">Written warm, not legal. Read it anyway.</div>
    <div class="sp">
      <div class="spb"><h2>Ray isn&rsquo;t real</h2><p>Ray is a fictional character, created with AI. There&rsquo;s no Maureen, no shoebox and no van, though there are plenty of real people like them. The voice is made up. The habits aren&rsquo;t: writing it down, looking at it every week, waiting before you buy and planning in a bit of joy are ordinary, old habits that real people have kept for a very long time.</p></div>
      <div class="spb"><h2>What this book is, and isn&rsquo;t</h2><p>This book is general information about money habits. It isn&rsquo;t financial advice, debt advice, tax advice or advice about your own situation, and it doesn&rsquo;t recommend any product, provider or investment. It can&rsquo;t promise you&rsquo;ll save any particular amount. If you need advice for your circumstances, use one of the free services below or a qualified, independent adviser.</p></div>
      <div class="spb"><h2>About the numbers</h2><p>Ray&rsquo;s figures, prices and dates are made up to make the examples feel real. They&rsquo;re not a guide to what anything should cost, or to what anyone should earn or save.</p></div>
      <div class="spb help"><h2>Free help, if it&rsquo;s serious</h2>
        <div class="helpgrid">
          <div><b>Debt and money</b><span>UK: MoneyHelper (moneyhelper.org.uk), StepChange (stepchange.org), Citizens Advice (citizensadvice.org.uk)</span><span>US: a nonprofit credit counsellor through the NFCC (nfcc.org)</span><span>Elsewhere: a free, not-for-profit debt advice service near you</span></div>
          <div><b>If someone controls your money</b><span>UK: National Domestic Abuse Helpline, 0808 2000 247</span><span>US: National Domestic Violence Hotline, 1-800-799-7233</span><span>Elsewhere: your local domestic abuse service</span></div>
          <div><b>If you&rsquo;re not coping</b><span>UK and Ireland: Samaritans, 116 123</span><span>US: call or text 988</span><span>Elsewhere: your local crisis line, or the emergency services if you&rsquo;re in danger</span></div>
        </div>
        <p class="tiny">Good debt advice is free. Be wary of anyone who charges for it, or who rings you first.</p>
      </div>
    </div>
    <div class="lastline"><span>That&rsquo;s your lot, love. Kettle&rsquo;s on.</span></div>`,
});

const order = [quick, fridge, shed, never, notebook, smallprint];
module.exports = { order };

// Part Two: Ray's Rules. Seven named rules, one per page, identical structure.
const { page, progress, strip, box, lines, lline } = require('./components');
const toc = (id) => `<span data-toc="${id}"></span>`;

function rulePage({ n, id, name, rule, story, how, honest, tryit }) {
  const body = `
    ${strip('Part Two &middot; Ray&rsquo;s Rules', `Rule ${n} of 7`, progress(n, 7))}
    <h1>${name}</h1>
    <div class="rulebox">${rule}</div>
    <div class="story"><h3>The story</h3>${story}</div>
    <div class="how"><h3>How it works</h3><ul class="sq">${how.map((h) => `<li>${h}</li>`).join('')}</ul></div>
    <div class="honest"><h3>The honest bit</h3><p>${honest}</p></div>
    <div class="tryit"><h3>Try it this week</h3>${tryit}</div>`;
  return page({ id, title: name, body, cls: 'rulepg' });
}

const tried = (label = 'Tried it') => `<div class="tried">${box('lg')} <span>${label}</span></div>`;

// ---------------------------------------------------------------- opener
const opener = page({
  id: 'p2-open',
  title: 'Part Two: Ray&rsquo;s Rules',
  cls: 'opener',
  body: `
    ${strip('Seven rules', 'One a week')}
    <div class="op-head">
      <div class="op-num">Part Two</div>
      <h1 class="op-title">Ray&rsquo;s Rules</h1>
      <div class="deck">Seven rules from forty-six years under other people&rsquo;s sinks.</div>
    </div>
    <blockquote class="pull">&ldquo;I&rsquo;ve got no secret. I&rsquo;ve got seven habits and a pencil.&rdquo;</blockquote>
    <div class="voice">
      <p>Now then. People ask me what the secret is, and when I tell them there isn&rsquo;t one, they look at me like I&rsquo;m keeping it back. I&rsquo;m not. What I&rsquo;ve got is seven rules that stuck. One came from old Mr Hargreaves, one from a lady&rsquo;s kitchen ceiling, one from Maureen, and one from a pressure washer I never bought.</p>
      <p>None of them need a spreadsheet. All of them need doing more than once.</p>
    </div>
    <div class="op-grid">
      <div class="panel">
        <h3>How to use them</h3>
        <ul class="plain">
          <li><b>One a week.</b> Read a rule on a Sunday, after your Sunday Sums. Seven weeks, seven rules.</li>
          <li><b>Do the small thing.</b> Every rule ends with &ldquo;Try it this week&rdquo;: one small job, written in, ticked when it&rsquo;s done.</li>
          <li><b>Keep what suits you.</b> Not every rule fits every life. By week seven you&rsquo;ll know which ones are yours. They&rsquo;re all on the fridge card, page ${toc('b-fridge')}.</li>
        </ul>
      </div>
      <div class="op-index">
        <h3>The seven rules</h3>
        <ol class="idx">
          <li><span>Open the Envelope</span><i>bad news gets dearer in the envelope</i><b>${toc('r-envelope')}</b></li>
          <li><span>Write It Down</span><i>the app records it; you notice it</i><b>${toc('r-write')}</b></li>
          <li><span>The Bucket Rule</span><i>fix it before you replace it</i><b>${toc('r-bucket')}</b></li>
          <li><span>The Thirty-Day Wait</span><i>wants wait, needs don&rsquo;t</i><b>${toc('r-wait')}</b></li>
          <li><span>The Friday Fish</span><i>budget for joy, on purpose</i><b>${toc('r-fish')}</b></li>
          <li><span>The Cheap Biscuit Rule</span><i>spend where you notice</i><b>${toc('r-biscuit')}</b></li>
          <li><span>Pay the Future First</span><i>the first line in the book</i><b>${toc('r-future')}</b></li>
        </ol>
      </div>
    </div>
    <p class="op-foot">These are habits, not financial advice. I&rsquo;m a plumber with a pencil. The honest small print is on page ${toc('smallprint')}.</p>
  `,
});

// ---------------------------------------------------------------- 1
const envelope = rulePage({
  n: 1,
  id: 'r-envelope',
  name: 'Open the Envelope',
  rule: 'Open it the day it lands. Bad news only gets dearer in the envelope.',
  story: `
    <p>In 1988 I went to a job two streets over. The lady said there was a brown patch on her kitchen ceiling, could I have a look. I had a look. There was a drip behind the bath panel upstairs, a little one, a washer, and it had been going the best part of two years. She&rsquo;d heard it. She&rsquo;d mentioned it to her husband. They just never took the panel off, because they didn&rsquo;t want to know what was behind it.</p>
    <p>A washer in 1986 is pennies and ten minutes. By the time I got there it was two joists, a ceiling and most of a week. Same drip. Same water. The only thing that changed was how long nobody looked.</p>
    <p>Money&rsquo;s no different. The letter on the mantelpiece doesn&rsquo;t sit still. It grows interest, and late fees, and a second letter in a different colour.</p>`,
  how: [
    'Give the post one home: a tray, a peg, a corner of the mantelpiece. Everything lands there and nowhere else.',
    'Open it the day it comes. If you can&rsquo;t deal with it today, write on the front the day you will, and keep that day.',
    'Look at the bank app at least once a week, on Sunday if nowhere else. Looking isn&rsquo;t the same as worrying. It&rsquo;s a lot cheaper.',
    'The one you most want to leave is the one to open first. Same trick as Step 1: score it before, score it after.',
  ],
  honest: `If opening it on your own is too much, open it with someone sat next to you. That still counts. And if what&rsquo;s inside has real teeth, page ${toc('fit-2')} is where you go next.`,
  tryit: `${lline('The envelope or email I&rsquo;ve been leaving:')}${lline('The day I&rsquo;ll open it:')}${tried('Opened it')}`,
});

// ---------------------------------------------------------------- 2
const write = rulePage({
  n: 2,
  id: 'r-write',
  name: 'Write It Down',
  rule: 'Write every penny down. The app records it. Writing it down is how you notice it.',
  story: `
    <p>You know about the gas bill. Here&rsquo;s what came after. Maureen put a notebook and a pencil on the kitchen table and said: write it down. All of it. She&rsquo;s the brains. I just write it down. That was January 1983, and I&rsquo;ve written down every penny since. There are forty-one notebooks now, in a shoebox in the wardrobe.</p>
    <p>Why pencil? Because you get things wrong, and a rubber&rsquo;s cheaper than a new notebook.</p>
    <p>Kelly asked me once what I&rsquo;d grab if the house was on fire. I said Maureen. She said, and then? I said the shoebox. She thought I was joking.</p>
    <p>I&rsquo;m not saying you need forty-one notebooks. I&rsquo;m saying a record isn&rsquo;t the same as noticing. When you write down two pound forty for pasties, your hand has to do it, and somewhere between the pencil and the paper you think: hang on.</p>`,
  how: [
    'One place, every day. A notebook, the notes on your phone, the back of an envelope stuck to the fridge. One place, not three.',
    'Write it the same day, while you still remember why. &ldquo;Shop, 6.40&rdquo; is plenty. You&rsquo;re not writing a diary.',
    'Don&rsquo;t add it up every night. That&rsquo;s what Sunday&rsquo;s for.',
  ],
  honest: 'If you hate writing, photograph every receipt and write them up on Sunday instead. It&rsquo;s slower and you&rsquo;ll miss a few, but your eyes still have to look at every one, and that&rsquo;s the bit that matters.',
  tryit: `${lline('Where I&rsquo;ll write it down:')}
    <div class="days"><span class="lt">Days I wrote it down:</span>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => `<span class="day">${box()}<i>${d}</i></span>`).join('')}</div>`,
});

// ---------------------------------------------------------------- 3
const bucket = rulePage({
  n: 3,
  id: 'r-bucket',
  name: 'The Bucket Rule',
  rule: 'Fix it before you replace it. And if you can&rsquo;t fix it, borrow it before you buy it.',
  story: `
    <p>I&rsquo;ve never paid for a car wash. I&rsquo;ve got a bucket. That&rsquo;s the whole rule, really, but I&rsquo;ll give you the long version.</p>
    <p>The shed at the bottom of our garden is where things go to get fixed instead of replaced. There are jam jars of screws on the shelf, sorted by size, because old Mr Hargreaves, who I was apprenticed to in 1971, said a man who can&rsquo;t find a screw ends up buying a new shelf. He also said a new tap is for people who don&rsquo;t own a washer. That&rsquo;s a bit harsh, but he wasn&rsquo;t wrong.</p>
    <p>The van&rsquo;s a 2004. Twenty-two years old, a hundred and ninety-one thousand miles, and she still passes her MOT. She&rsquo;s not pretty. She&rsquo;s paid for.</p>`,
  how: [
    `Climb the ladder one rung at a time: <span class="seqs">mend it &gt; borrow it &gt; buy it second-hand &gt; buy it new</span>. Most things stop on the first or second rung.`,
    'Before you replace anything, ask what&rsquo;s actually broken. It&rsquo;s usually one part: a washer, a hinge, a zip, a battery, a fuse.',
    'Paid for beats pretty. Something that works and is paid for isn&rsquo;t old, love. It&rsquo;s paid off.',
    'If you can&rsquo;t mend it yourself, someone near you probably can, and for less than new. Ask before you buy.',
  ],
  honest: 'Don&rsquo;t mend what can hurt you. Gas, electrics, brakes and anything holding a roof up are jobs for someone qualified, and I say that as a man who&rsquo;s qualified.',
  tryit: `${lline('One thing I was going to replace that I&rsquo;ll try to mend, borrow or do without:')}${lines(1)}${tried('Tried it')}`,
});

// ---------------------------------------------------------------- 4 (content locked with the Instagram scripts)
const wait = rulePage({
  n: 4,
  id: 'r-wait',
  name: 'The Thirty-Day Wait',
  rule: 'Anything over fifty quid that&rsquo;s a want, not a need, goes on the list and waits thirty days.',
  story: `
    <p>There&rsquo;s a list pinned to the shed door. Anything over fifty quid that&rsquo;s a want, not a need, goes on it with the date, and it waits thirty days. If I still want it after thirty days, I buy it. No guilt, no fuss. It&rsquo;s not a punishment. It&rsquo;s a filter.</p>
    <p>A pressure washer went on that list in 2012. I&rsquo;ve still not got one. I&rsquo;ve still got a bucket.</p>
    <p>Most things never make it to day thirty. You&rsquo;d be amazed how badly you can want something on a Tuesday and how little you care by the end of the month. The things that do make it, I buy without a second thought, because I&rsquo;ve already had the second thought. And the <span class="nw">twenty-ninth</span>.</p>
    <p>You&rsquo;ll have seen &ldquo;buy now, pay later&rdquo; at the till. It&rsquo;s built to get you past the wait. The wait&rsquo;s the bit that protects you.</p>`,
  how: [
    'Pick your line. Mine&rsquo;s fifty quid. Yours might be twenty, or two hundred. Anything over it that&rsquo;s a want goes on the list.',
    `Write down the day you wanted it and the day that&rsquo;s day thirty. The Shed Door List on page ${toc('b-shed')} is ready to pin up wherever you&rsquo;ll walk past it.`,
    'On day thirty, ask two things: do I still want it, and can I pay for it outright? Two yeses and it&rsquo;s yours. No guilt, no fuss.',
    'Needs don&rsquo;t wait. If the boiler goes, you fix the boiler. The list is for wants.',
  ],
  honest: 'Thirty days feels like a long time when you first start. If it&rsquo;s too long, start with seven. The wait matters more than the length, and you can stretch it once you&rsquo;ve seen it work.',
  tryit: `<div class="two">${lline('My line:', 'short')}${lline('First thing on my list:')}</div>${tried('It&rsquo;s on the list, with the date')}`,
});

// ---------------------------------------------------------------- 5
const fish = rulePage({
  n: 5,
  id: 'r-fish',
  name: 'The Friday Fish',
  rule: 'Budget for joy, on purpose, every week. A budget with no joy in it doesn&rsquo;t last.',
  story: `
    <p>Every Friday, fish and chips. Budgeted, written down, enjoyed. In that order. Maureen and I have had it most Fridays since before the notebooks, and once the notebooks started, it got its own line. It&rsquo;s still got its own line.</p>
    <p>I&rsquo;ll be honest with you: it&rsquo;s the most important line in there. Every pipe that carries hot water needs a bit of room to move. Clip it in tight with nowhere to go and it&rsquo;ll creak and tick every time the heating comes on, and one day a joint gives. Money&rsquo;s the same. A budget with no give in it lasts about three weeks, then you crack, spend the lot in one go, and feel worse than before you started.</p>
    <p>So you build the give in. You choose it, you write it down, and then you enjoy it properly, because it&rsquo;s planned and it&rsquo;s paid for and nobody can make you feel bad about it. Not even you.</p>`,
  how: [
    'Pick your Friday Fish: one small, regular treat you actually look forward to. A takeaway, a film, a coffee you&rsquo;ll remember drinking.',
    'Give it its own line in Sunday Sums and a fixed amount, and write it down when you spend it.',
    'Enjoy it properly. Sit down for it. It&rsquo;s not a leak. It&rsquo;s the plan.',
    'Skint week? Make it smaller, not gone. A bag of chips still counts.',
  ],
  honest: 'If your Friday Fish has turned into a Monday, Wednesday and Friday Fish, that&rsquo;s not joy any more. It&rsquo;s a leak with a nice name. Back to once a week, and you&rsquo;ll enjoy it more.',
  tryit: `<div class="two">${lline('My Friday Fish:')}${lline('About:', 'short')}</div>${tried('Had it, and enjoyed it')}`,
});

// ---------------------------------------------------------------- 6
const biscuit = rulePage({
  n: 6,
  id: 'r-biscuit',
  name: 'The Cheap Biscuit Rule',
  rule: 'Spend on the things you notice. Go cheap on the things you don&rsquo;t.',
  story: `
    <p>I buy the cheap biscuits. After the second one I can&rsquo;t tell the difference, and by the third I&rsquo;ve stopped looking. Maureen can tell the difference, so she buys the nice ones and hides them. I&rsquo;ve known where since about 1990. I&rsquo;ve never said. That&rsquo;s not a row, love. That&rsquo;s a system.</p>
    <p>Kitchen roll, washing-up liquid, tinned tomatoes: I couldn&rsquo;t tell you what&rsquo;s in our cupboard, and that&rsquo;s the point. I&rsquo;ve never noticed, so I&rsquo;ve never paid extra for it. Same with the coffee you can&rsquo;t remember drinking. You didn&rsquo;t enjoy that either. You just paid for it.</p>
    <p>Most money doesn&rsquo;t go on things we love. It goes on things we don&rsquo;t notice. Go cheap on those, and spend properly on the rest.</p>`,
  how: [
    'Go round your shopping with one question: would I notice if this were the cheap one? If not, try the cheap one once. Most of the time you&rsquo;ll not go back.',
    'Then spend on what you do notice, without apologising. Good boots. A proper pillow. The nice biscuits, if you&rsquo;re Maureen.',
  ],
  honest: 'Cheap isn&rsquo;t always cheaper. Boots, tools, a mattress, anything you use every day: buy cheap, buy twice. The rule&rsquo;s about what you notice, not about buying the cheapest of everything.',
  tryit: `
    <div class="two notice">
      <div><div class="lt">I&rsquo;d never notice the cheap one:</div>${lines(2)}</div>
      <div><div class="lt">I&rsquo;d notice every time:</div>${lines(2)}</div>
    </div>${tried('Swapped one thing for the cheap one, just to see')}`,
});

// ---------------------------------------------------------------- 7
const future = rulePage({
  n: 7,
  id: 'r-future',
  name: 'Pay the Future First',
  rule: 'When money comes in, the first bit goes to the future, before the week gets its hands on it.',
  story: `
    <p>Christmas 1990 went on the never-never. We were still paying for it in March, and every payment was for a Christmas we&rsquo;d already had. So in June 1991 I put an envelope at the back of the kitchen drawer and put ten pound in it every month, before anything else went out. That Christmas our Gary got a bike. Sixty-two pound, paid for, done. There&rsquo;s a little star in the margin of that notebook. I don&rsquo;t do stars.</p>
    <p>That&rsquo;s the rule. When money comes in, the first line in the book is the future. Before the gas, before the shop, before Friday. Some weeks it was a fiver. Some weeks it was nowt, and I wrote the nowt down. You lag your pipes in October, not when they&rsquo;ve frozen.</p>`,
  how: [
    'Choose an amount, however small, and make it the first thing out on the day the money lands. A pound counts. The habit matters more than the amount.',
    'Give it a job: the boiler fund, Christmas, a cushion, what&rsquo;s owed. Money with a job to do tends to sit still.',
    'What &ldquo;the future&rdquo; means is your call. Where you keep it, I&rsquo;m not telling you. That&rsquo;s not my trade, and be wary of anyone online who&rsquo;s very keen to tell you. The lads in gilets will tell you what to buy. I&rsquo;m only telling you the order.',
    'For anything bigger than an envelope, like savings, pensions or investing, get free, impartial guidance first. In the UK that&rsquo;s MoneyHelper. Elsewhere, look for your country&rsquo;s free, impartial money guidance service.',
  ],
  honest: 'If there&rsquo;s genuinely nothing to put first this week, put the habit first anyway. Write &ldquo;Future: nowt&rdquo; at the top of the page. It keeps the line there, and the week there&rsquo;s something, it&rsquo;ll know where to go.',
  tryit: `<div class="two">${lline('My future-first amount:')}${lline('It goes out on:')}</div>${lline('Its job:')}${tried('Paid the future first')}`,
});

const order = [opener, envelope, write, bucket, wait, fish, biscuit, future];
module.exports = { order };

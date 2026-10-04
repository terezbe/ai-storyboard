// Front matter: cover, contents, letter, why this works, calm score, what to expect,
// the failure page, and the two Make It Fit Your Life pages.
const { page, strip, box, lines, lline } = require('./components');
const toc = (id) => `<span data-toc="${id}"></span>`;

// ---------------------------------------------------------------- cover (no footer)
const cover = page({
  id: 'cover',
  title: 'Cover',
  cls: 'cover',
  footer: false,
  body: `
    <div class="cv-top">A reckoning and ritual workbook</div>
    <h1 class="cv-title">The Quiet Money<br>Workbook</h1>
    <div class="cv-sub">Ray&rsquo;s one honest sitting and a fifteen-minute Sunday ritual</div>
    <div class="cv-photo"><img src="../assets/ray-portrait.jpg" alt="Ray"></div>
    <div class="cv-promise">Find the leaks in one sitting. Then open the bank app without the knot in your stomach.</div>
    <div class="cv-foot">
      <span class="cv-cp">&ldquo;Rich is quiet.&rdquo;</span>
      <span class="cv-by">Ray, 71, retired plumber</span>
    </div>`,
});

// ---------------------------------------------------------------- contents
const row = (label, id, cls = '') => `<div class="tc ${cls}"><span class="tl">${label}</span><span class="dots"></span><span class="tn">${toc(id)}</span></div>`;
const contents = page({
  id: 'contents',
  title: 'Contents',
  cls: 'contentspg',
  body: `
    ${strip('The Quiet Money Workbook', 'Contents')}
    <h1>What&rsquo;s in Here</h1>
    <div class="deck">One sitting, seven rules, twelve Sundays, and the back of the shed.</div>
    <div class="toc-grid">
      <div>
        <div class="tg"><h3>Before you start</h3>
          ${row('A Letter from Ray', 'letter')}
          ${row('Why This Works', 'why')}
          ${row('Your Money Calm Score', 'score')}
          ${row('What to Expect', 'expect')}
          ${row('If You Miss a Sunday', 'miss')}
          ${row('Make It Fit Your Life', 'fit-1')}
        </div>
        <div class="tg"><h3>Part One</h3>
          ${row('The Leak Hunt', 'p1-open', 'part')}
          ${row('1. Find the Stopcock', 'lh-stopcock', 'sub')}
          ${row('2. The Mains', 'lh-mains', 'sub')}
          ${row('3. The Pipework', 'lh-pipework', 'sub')}
          ${row('4. The Drips', 'lh-drips', 'sub')}
          ${row('5. The Small Leaks', 'lh-small', 'sub')}
          ${row('6. The No Pile', 'lh-nopile', 'sub')}
          ${row('7. What&rsquo;s Owed', 'lh-owed', 'sub')}
          ${row('8. The Pressure Reading', 'lh-pressure', 'sub')}
        </div>
        <div class="tg"><h3>Part Two</h3>
          ${row('Ray&rsquo;s Rules', 'p2-open', 'part')}
          ${row('1. Open the Envelope', 'r-envelope', 'sub')}
          ${row('2. Write It Down', 'r-write', 'sub')}
          ${row('3. The Bucket Rule', 'r-bucket', 'sub')}
          ${row('4. The Thirty-Day Wait', 'r-wait', 'sub')}
          ${row('5. The Friday Fish', 'r-fish', 'sub')}
          ${row('6. The Cheap Biscuit Rule', 'r-biscuit', 'sub')}
          ${row('7. Pay the Future First', 'r-future', 'sub')}
        </div>
      </div>
      <div>
        <div class="tg"><h3>Part Three</h3>
          ${row('Sunday Sums', 'p3-open', 'part')}
          ${row('One I Did Earlier', 'p3-example', 'sub')}
          ${row('Weeks 1 to 3', 'wk-1', 'sub')}
          ${row('The Boring Bit', 'p3-boring', 'sub')}
          ${row('Weeks 4 to 12', 'wk-4', 'sub')}
          ${row('Twelve Sundays On', 'wk-end', 'sub')}
        </div>
        <div class="tg"><h3>The back of the shed</h3>
          <p class="tg-note">Five extras. They add to the book, shrink it or print it. None of them repeat it.</p>
          ${row('The Twenty-Minute Leak Hunt', 'b-quick', 'sub')}
          ${row('The Fridge Card', 'b-fridge', 'sub')}
          ${row('The Shed Door List', 'b-shed', 'sub')}
          ${row('Things I&rsquo;ve Never Paid For', 'b-never', 'sub')}
          ${row('Ray&rsquo;s Notebook, March 1987', 'b-notebook', 'sub')}
        </div>
        <div class="tg">
          ${row('The Honest Small Print', 'smallprint', 'part')}
        </div>
        <div class="panel starthere">
          <h3>Start here</h3>
          <div class="sh"><b>Tonight</b><span>Read pages ${toc('letter')} to ${toc('fit-2')}, and take your first reading on page ${toc('score')}.</span></div>
          <div class="sh"><b>This week</b><span>Give one evening to the Leak Hunt, page ${toc('p1-open')}.</span></div>
          <div class="sh"><b>This Sunday</b><span>Your first Sunday Sums, page ${toc('wk-1')}. Then every Sunday after.</span></div>
        </div>
      </div>
    </div>`,
});

// ---------------------------------------------------------------- the letter
const letter = page({
  id: 'letter',
  title: 'A Letter from Ray',
  cls: 'letterpg frontletter',
  body: `
    ${strip('Before you start', 'A letter from Ray')}
    <h1>A Letter from Ray</h1>
    <div class="letter">
      <p class="salute">Now then,</p>
      <p>I&rsquo;ll tell you something I don&rsquo;t tell many people. In January 1983 we couldn&rsquo;t pay the gas bill. And I was a plumber. I spent all day keeping other people&rsquo;s heating going, and I came home to a house where we couldn&rsquo;t pay for ours.</p>
      <p>That bill sat on the mantelpiece for a fortnight. I didn&rsquo;t open it. I think I thought if I didn&rsquo;t look, it wasn&rsquo;t real. It was real. It was also, when Maureen finally opened it, smaller than the thing I&rsquo;d built up in my head. They always are.</p>
      <p>So if you&rsquo;ve got envelopes you&rsquo;re not opening, or an app you can&rsquo;t look at, or you get to the end of every month and think, where did it all go: you&rsquo;re not daft, and you&rsquo;re not the worst. Everyone thinks their mess is the worst one. Everyone&rsquo;s wrong. Skint isn&rsquo;t a character flaw. It&rsquo;s a maths problem, and maths problems can be done.</p>
      <p>Here&rsquo;s what this book is. One honest sitting, done once, where we find out where it all goes. I call it the Leak Hunt. Then fifteen minutes every Sunday, with a brew, for good. That&rsquo;s Sunday Sums. In between there are seven rules I picked up in forty-six years under other people&rsquo;s sinks.</p>
      <p>There&rsquo;s no secret in here, and no lads in gilets telling you what to buy. Maureen and I paid off a two-up two-down by the time I was forty-one, on a plumber&rsquo;s wage, and the only clever thing I ever did was write it all down and look at it every Sunday.</p>
      <p>Kettle on. Let&rsquo;s have a look.</p>
      <p class="cp-moment">Rich is quiet.</p>
      <p class="sig">Ray</p>
      <p class="ps"><b>P.S.</b> You&rsquo;ll want a pencil, not a pen. You&rsquo;ll see why.</p>
    </div>`,
});

// ---------------------------------------------------------------- why this works
const why = page({
  id: 'why',
  title: 'Why This Works',
  cls: 'whypg',
  body: `
    ${strip('Before you start', 'Why this works')}
    <h1>Why This Works</h1>
    <div class="deck">No secret. Four plain habits, and what&rsquo;s actually known about them.</div>
    <div class="voice"><p>I&rsquo;ll be honest with you: I didn&rsquo;t read any research before I started. I was skint and I had a pencil. But our Kelly looked some of it up for me, and it turns out ordinary habits have a fair bit behind them. Here&rsquo;s what&rsquo;s known, as plain as I can put it, with nothing made up.</p></div>
    <div class="mech">
      <div class="m"><div class="mn">1</div><div><h2>Looking, instead of not looking</h2><p>Economists have a name for not checking your money when you suspect the news is bad: the ostrich effect. Research has found people really do tend to look at their accounts less when they&rsquo;re worried. So if you&rsquo;ve been avoiding the bank app, you&rsquo;re not daft. You&rsquo;re normal. The Leak Hunt gets you looking once, properly, with a brew, so it stops being a thing you dread.</p></div></div>
      <div class="m"><div class="mn">2</div><div><h2>Writing it down</h2><p>Research on habits keeps finding that people who keep track of something, whether it&rsquo;s food, steps or spending, tend to notice more and change more than people who don&rsquo;t. Nobody&rsquo;s quite sure how much is the writing and how much is the noticing it forces. I don&rsquo;t mind which. In my house it&rsquo;s both.</p></div></div>
      <div class="m"><div class="mn">3</div><div><h2>Same time, same place</h2><p>Habits tend to stick when they&rsquo;re tied to something you already do, at the same time and in the same place. That&rsquo;s why Sunday Sums comes after Sunday dinner. One well-known study found new habits took most people around two months to start feeling automatic, and some a lot longer. Twelve weeks gives you a fair run at it.</p></div></div>
      <div class="m"><div class="mn">4</div><div><h2>A gap before buying</h2><p>A good deal of research suggests that when paying feels effortless, by a tap or a saved card, people tend to spend more than when they have to stop and count it out, though how much more varies from study to study. The Thirty-Day Wait puts the stopping back in.</p></div></div>
    </div>
    <div class="panel line isnt">
      <h3>What this book isn&rsquo;t</h3>
      <p>It isn&rsquo;t financial advice, debt advice or advice about your own situation. It doesn&rsquo;t recommend any product, provider or investment. It won&rsquo;t tell you where to keep your money, and it can&rsquo;t promise you&rsquo;ll save any particular amount, because nobody honest can. What it will do is show you where your money goes, and give you fifteen minutes a week to keep it that way. If things are serious, page ${toc('fit-2')} has free, proper help, and using it is the strong move.</p>
    </div>`,
});

// ---------------------------------------------------------------- calm score (measurement loop, opening half)
const score = page({
  id: 'score',
  title: 'Your Money Calm Score',
  cls: 'scorepg',
  body: `
    ${strip('Before you start', 'The first reading')}
    <h1>Your Money Calm Score</h1>
    <div class="deck">Take a reading before you touch anything. You&rsquo;ll take it again after Week 12.</div>
    <div class="voice"><p>In my trade, you never start on a system till you&rsquo;ve checked the pressure. Same here. Score yourself honestly, out of ten, on the three things below. Nobody&rsquo;s going to see this but you. In twelve weeks you&rsquo;ll be glad you did it, because you&rsquo;ll have something to compare against that isn&rsquo;t just a feeling.</p></div>
    <div class="scale">
      <div class="sc-bar">${Array.from({ length: 10 }, (_, i) => `<span>${i + 1}</span>`).join('')}</div>
      <div class="sc-ends"><span><b>1</b> I&rsquo;d rather put my arm down a blocked drain.</span><span><b>10</b> I&rsquo;d open it with a brew and not flinch.</span></div>
    </div>
    <table class="ledger score first">
      <colgroup><col><col style="width:38mm"></colgroup>
      <thead><tr><th>Out of 10, today</th><th class="c">My score</th></tr></thead>
      <tbody>
        <tr><td class="pre">How calm I feel when I open the bank app</td><td></td></tr>
        <tr><td class="pre">How well I know where my money goes</td><td></td></tr>
        <tr><td class="pre">How well I sleep without money on my mind</td><td></td></tr>
      </tbody>
    </table>
    ${lline('Today&rsquo;s date:', 'short')}
    <div class="futurenote">
      <h3>A note to me, twelve weeks from now</h3>
      <p class="small muted">What do you hope will be different? What are you worried about? Write it like a letter. Nobody reads it but you.</p>
      ${lines(8)}
    </div>
    <p class="tiny rescore">You&rsquo;ll take the reading again on page ${toc('wk-end')}, after Week 12. Every Sunday page has a calm score too, so you&rsquo;ll see it move week by week.</p>`,
});

// ---------------------------------------------------------------- what to expect
const tl = (when, what, cls = '') => `<div class="tlr ${cls}"><div class="tlw">${when}</div><div class="tld"><span class="dot"></span></div><div class="tlt">${what}</div></div>`;
const expect = page({
  id: 'expect',
  title: 'What to Expect',
  cls: 'expectpg',
  body: `
    ${strip('Before you start', 'What to expect')}
    <h1>What to Expect</h1>
    <div class="deck">So nothing catches you out. Especially week three.</div>
    <div class="voice"><p>Every job has a bit in the middle where you wonder why you started. Knowing it&rsquo;s coming is half of getting through it. Here&rsquo;s how the next twelve weeks tend to go.</p></div>
    <div class="timeline">
      ${tl('The first forty minutes of the sitting', '<b>Awful, probably.</b> Opening the envelopes is the worst bit. It always looks worse in the envelope than it does on the table.')}
      ${tl('The rest of the sitting', '<b>Better, once you&rsquo;re adding up.</b> Numbers are calmer than worries. You might feel daft about a drip or two. Don&rsquo;t. Write it down and move on.')}
      ${tl('The day after', '<b>Lighter.</b> Maybe a bit cross with yourself. Let that go. You did the hard bit, and most people never do.')}
      ${tl('Sundays one and two', '<b>New, and a bit fiddly.</b> You&rsquo;ll not know which row something goes in. Pick one and stick with it. Nobody&rsquo;s marking it.')}
      ${tl('Week three', `<b>Boring.</b> This is where most people stop. Boring is the point: boring means nothing&rsquo;s leaking. There&rsquo;s a letter waiting for you after Week 3, on page ${toc('p3-boring')}.`, 'dip')}
      ${tl('Weeks four to eleven', `<b>Mostly quiet.</b> You&rsquo;ll miss one at some point, and page ${toc('miss')} covers that. You&rsquo;ll start noticing things before Sunday too: at the till, in the app, at the coffee you were about to buy without thinking.`)}
      ${tl('Week twelve', `<b>Take the reading again.</b> Read the note you left yourself, and decide what you&rsquo;re keeping. Page ${toc('wk-end')}.`)}
    </div>
    <p class="expect-foot">None of this is a promise. Some people find a lot of leaks, and some find their money was going exactly where it had to. Both are worth knowing.</p>`,
});

// ---------------------------------------------------------------- the failure page
const miss = page({
  id: 'miss',
  title: 'If You Miss a Sunday',
  cls: 'misspg',
  body: `
    ${strip('Before you start', 'Read this now, not when it happens')}
    <h1>If You Miss a Sunday</h1>
    <div class="deck">You will. Everyone does. Here&rsquo;s the rule.</div>
    <div class="bigrule">No catching up. No doubling up.<br>Just do this Sunday.</div>
    <div class="voice">
      <p>I&rsquo;ve missed Sundays. Christmases, a funeral, the week our Lisa got married, and a flu in 1999 I&rsquo;d not wish on anyone. The notebook didn&rsquo;t mind. I just did the next one.</p>
      <p>Here&rsquo;s what you don&rsquo;t do. You don&rsquo;t sit down and try to do three weeks at once. You don&rsquo;t go back and fill the gaps in from memory. And you don&rsquo;t decide you&rsquo;ve failed and stop. That&rsquo;s how a drip becomes a flood: not the missing, the giving up after.</p>
    </div>
    <div class="ifs">
      <div class="if"><b>Missed one Sunday?</b><p>Leave that page blank. Gaps are honest. Do this Sunday, on the next page.</p></div>
      <div class="if"><b>Missed a month?</b><p>Same again. Turn to the next blank page and do this Sunday. Don&rsquo;t do the month.</p></div>
      <div class="if"><b>Had a bad week and spent a lot?</b><p>Write it down anyway, all of it. That&rsquo;s the whole job. Nobody&rsquo;s keeping score but you, and you&rsquo;re on your own side.</p></div>
      <div class="if"><b>Never managed the full Leak Hunt?</b><p>Do the Twenty-Minute Leak Hunt on page ${toc('b-quick')}, and start Sunday Sums this week anyway. The full sitting will keep.</p></div>
      <div class="if"><b>Lost the book?</b><p>Any notebook. Write &ldquo;last week&rsquo;s money&rdquo; at the top and carry on.</p></div>
      <div class="if"><b>Missed so many you&rsquo;ve lost count?</b><p>Still this Sunday. It&rsquo;s always this Sunday.</p></div>
    </div>
    <div class="plan">
      <h3>Plan for it now, while you&rsquo;re keen</h3>
      ${lline('If I miss one, the thing that will get me back to the table next Sunday:')}
      ${lline('Where this book lives, so I always know where it is:')}
    </div>
    <div class="ownline">A missed Sunday is a drip, not a burst pipe. The notebook&rsquo;s a record, love, not a court case.</div>`,
});

// ---------------------------------------------------------------- make it fit your life, 1 of 2
const fit1 = page({
  id: 'fit-1',
  title: 'Make It Fit Your Life',
  cls: 'fitpg',
  body: `
    ${strip('Before you start', 'Make it fit your life, 1 of 2')}
    <h1>Make It Fit Your Life</h1>
    <div class="deck">The book&rsquo;s built one way, and your life might be built another. Here&rsquo;s how to bend it without breaking it.</div>
    <div class="fit">
      <h2>If you share money with someone</h2>
      <p class="fv">Maureen and I have done Sunday Sums together since 1983. She does the shopping column, I do the rest and the adding up. It&rsquo;s lasted because it&rsquo;s a job for two, not a judgement on one.</p>
      <ul class="sq">
        <li>Do the Leak Hunt together if you can. Each of you brings your own statements, and your own drips are yours to own.</li>
        <li>Write amounts, not verdicts. Nobody&rsquo;s spending gets read out in a voice.</li>
        <li>Split the rows. One of you does the shopping, the other the pipework. Swap if you like.</li>
        <li>Each of you gets a Friday Fish, and nobody asks what the other spent theirs on.</li>
        <li>Keep your money separate? Do your own Sunday Sums, then five minutes together on the shared bills.</li>
      </ul>
      <div class="panel line safety">
        <h3>When it isn&rsquo;t a budgeting problem</h3>
        <p>If someone controls your money, takes your wages, runs up debt in your name or won&rsquo;t let you see the accounts, a workbook can&rsquo;t fix that, and it isn&rsquo;t your fault. It has a name, economic abuse, and there&rsquo;s free, confidential help. <b>UK:</b> the National Domestic Abuse Helpline, 0808 2000 247, free, day or night. <b>US:</b> the National Domestic Violence Hotline, 1-800-799-7233. <b>Elsewhere:</b> your local domestic abuse service. If you&rsquo;re in danger right now, call the emergency services.</p>
      </div>
    </div>
    <div class="fit">
      <h2>If your income goes up and down</h2>
      <p class="fv">Overtime and call-outs came in fits and starts for me. Gig work, commission, seasonal work and working for yourself are the same, only more so.</p>
      <ul class="sq">
        <li>In the Leak Hunt, plan on your lowest month. Not your average, and never your best.</li>
        <li>On Sundays, &ldquo;came in&rdquo; means what actually landed. Not what you&rsquo;ve invoiced, not what you&rsquo;re owed.</li>
        <li>In a good week, pay the future first, and pay it a bit more. The lean weeks are what it&rsquo;s for.</li>
        <li>Self-employed? Put a share of every payment aside for tax before it starts to feel like yours. Ask your tax office or a free advice service how much.</li>
      </ul>
    </div>
    <div class="fit">
      <h2>If there&rsquo;s very little coming in</h2>
      <p class="fv">If there&rsquo;s nothing left to cut, this book won&rsquo;t magic money up, and I&rsquo;ll not insult you by telling you to skip a coffee you&rsquo;re not buying. Use it to see clearly, and to make sure nothing&rsquo;s leaking that doesn&rsquo;t have to. Check you&rsquo;re getting everything you&rsquo;re entitled to: in the UK, Citizens Advice can help you check for benefits and grants, and elsewhere your local advice service can. And keep the Friday Fish, even if it&rsquo;s a bag of chips. It&rsquo;s what stops a budget snapping.</p>
    </div>`,
});

// ---------------------------------------------------------------- make it fit your life, 2 of 2 (debts, low income, serious cases)
const fit2 = page({
  id: 'fit-2',
  title: 'Make It Fit Your Life, continued',
  cls: 'fitpg',
  body: `
    ${strip('Before you start', 'Make it fit your life, 2 of 2')}
    <h1>Make It Fit Your Life</h1>
    <div class="deck">If there&rsquo;s debt, and what to do when it&rsquo;s got teeth.</div>
    <div class="fit">
      <h2>If there&rsquo;s debt</h2>
      <p class="fv"><b>Priority debts first, whatever else you choose.</b> The free debt charities say to deal first with the debts where falling behind costs you most: your home, your heating, and anything that can end up in court. Then the rest. For the rest, pay the minimum on everything, then put anything extra on one debt at a time. There are two honest ways to choose which:</p>
      <div class="schools">
        <div class="school"><h3>Smallest balance first</h3><p>Clear the smallest debt, then roll what you were paying on it into the next smallest. Quick wins, and quick wins keep people going.</p></div>
        <div class="school"><h3>Highest interest first</h3><p>Aim the extra at the debt with the highest interest rate. It usually costs less overall, but the first win can take longer to come.</p></div>
      </div>
      <p class="fv">Both work, and both beat doing nowt. Pick the one you&rsquo;ll stick to, and don&rsquo;t swap every month. I&rsquo;m not picking for you. It&rsquo;s your pipework.</p>
      <div class="panel choose">
        <div class="ch-row"><span class="lt"><b>My school:</b></span><span>${box()} Smallest balance first</span><span>${box()} Highest interest first</span></div>
        <div class="lt2">My priority debts, if I have any (home, heating, anything heading to court):</div>
        ${lines(1)}
        ${lline('Written at the top of my What&rsquo;s Owed page, page ' + toc('lh-owed') + ', on:', 'short')}
      </div>
    </div>
    <div class="teeth">
      <h2>When it&rsquo;s got teeth</h2>
      <p>If you&rsquo;re behind on your rent, mortgage, energy or local tax, if you&rsquo;re borrowing to pay bills or other debts, if letters are coming from collectors or a court, or if money keeps you awake most nights: ring free, impartial debt help this week. Even a good plumber doesn&rsquo;t fix a burst main on his own. He shuts it off and rings for help. That&rsquo;s the strong move, not the failure. They&rsquo;re free, they&rsquo;re not lenders, and they&rsquo;ve heard worse than yours.</p>
      <div class="orgs">
        <div><b>UK</b><span>MoneyHelper, moneyhelper.org.uk</span><span>StepChange, stepchange.org</span><span>Citizens Advice, citizensadvice.org.uk</span></div>
        <div><b>US</b><span>A nonprofit credit counsellor through the NFCC, nfcc.org</span></div>
        <div><b>Elsewhere</b><span>A free, not-for-profit debt advice service near you</span></div>
      </div>
      <p class="tsmall">Good debt advice is free. Be wary of anyone who charges you for it, or who rings you first. If money worries ever make you feel you can&rsquo;t go on, talk to someone tonight: Samaritans on 116 123 (UK and Ireland), or call or text 988 (US).</p>
    </div>`,
});

const order = [cover, contents, letter, why, score, expect, miss, fit1, fit2];
module.exports = { order };

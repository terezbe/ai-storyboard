// Front matter, back matter, bonus stack and cover for "Don't Text. Call."
// Each render(page, fmt, ICON, C) returns one finished <section class="page">.

const PORTRAIT = '../../profile-picture.jpg';

const fillLine = (w) => `<span class="line-fill" style="width:${w}"></span>`;
const box = (checked) => `<span class="box${checked ? ' on' : ''}"></span>`;

// ------------------------------------------------------------------ COVER
function cover(page, fmt) {
  return `<section class="page cover" id="cover">
  <div class="cv-frame"></div>
  <div class="cv">
    <div class="cv-byline">Grandpa Lou, 90, married 65 years</div>
    <h1 class="cv-title"><span class="a">Don't Text.</span> <span class="b">Call.</span></h1>
    <div class="cv-sub">${fmt("Grandpa Lou's swipe file for the moments you don't know what to say")}</div>
    <div class="cv-portrait"><div class="cv-ring"><img src="${PORTRAIT}" alt="Grandpa Lou"></div></div>
    <div class="cv-promise">${fmt('Word-for-word scripts for the 25 moments that keep you up at night')}</div>
    <div class="cv-foot">25 cards &middot; a usage log &middot; 5 bonuses</div>
  </div>
</section>`;
}

// ------------------------------------------------------------------ INDEX
function index(page, fmt, ICON, C) {
  const byGroup = g => C.cards.filter(c => c.group === g.n).sort((a, b) => a.n - b.n);
  const feel = g => `<div class="feel">
    <div class="feel-head"><span class="ring">${g.n}</span><div><div class="feel-name">${fmt(g.name)}</div><div class="feel-line">${fmt(g.line)}</div></div></div>
    <ol class="toc">${byGroup(g).map(c => `<li><a href="#card-${c.n}"><span class="no">${c.n}</span><span class="t">${fmt(c.title)}</span><span class="dots"></span><span class="pg" data-ref="card-${c.n}"></span></a></li>`).join('')}</ol>
  </div>`;
  const row = (id, label) => `<li><a href="#${id}"><span class="t">${fmt(label)}</span><span class="dots"></span><span class="pg" data-ref="${id}"></span></a></li>`;
  return page('index', 'index', `
  <div class="eyebrow">Contents</div>
  <h1 class="page-title">Find your feeling</h1>
  <p class="lede">${fmt("Don't read this front to back tonight. Find the line that sounds like your stomach right now, and go to that card.")}</p>
  <div class="feelings">${C.groups.map(feel).join('')}</div>
  <div class="also">
    <div><div class="also-h">Before you dial</div><ul class="toc">
      ${row('letter', 'A letter from Lou')}${row('why', 'Why this works')}${row('how', 'How to use this file')}${row('fail', 'A no is an answer')}${row('fit', 'Make it fit your life')}
    </ul></div>
    <div><div class="also-h">The bonus stack</div><ul class="toc">
      ${row('tonight', 'The five cards to read tonight')}${row('rules', "Lou's Rules on one page")}${row('cheat', 'The first-call cheat card')}${row('goodnight', "Angie's Goodnight Rule")}${row('tuesday', 'Ten cheap Tuesday dates')}
    </ul></div>
    <div><div class="also-h">At the back</div><ul class="toc">
      ${row('log', 'The usage log')}${row('smallprint', 'The small print')}
    </ul></div>
  </div>`);
}

// ------------------------------------------------------------------ LETTER
function letter(page, fmt) {
  const paras = [
    "Lemme guess. It's late, the phone's in your hand, and you've typed the same message eleven times and deleted it eleven times.",
    "Here's something nobody tells you: everybody thinks they're the only one who doesn't know what to say. I drove a city bus in Brooklyn for thirty-eight years. I watched ten thousand first dates and a few hundred breakups in that big mirror over my head, and lemme tell you something. Nobody knew what to say. Not the good-looking ones, not the ones in the nice shoes. Nobody.",
    "Me neither. In 1955 there was a girl at the bakery on the corner. Angie. I bought a loaf of bread from her every morning for three weeks before I said one word. Then I asked her properly: Saturday, two o'clock. I had a dime and a penny in my pocket. A soda was a dime, so it was one soda, two straws, and I left the penny for a tip like a big shot.",
    "Sixty-five years I was married to my Angie, and not once, not once, did I text her. I lost her in 2021. I wear my ring on a chain now, because my knuckles got too big for it. The ring didn't get smaller. I got bigger.",
    "So here's what this is. It's the words: the exact words for the moments that keep you up at night. When you're scared to ask. When they go quiet. When you want more, or you need out, or you messed up. Every card has what to say on the phone, the text to send if you really have to, what not to say, and what to do if the answer is no.",
    "There are no tricks in here. I don't do tricks, and no script makes anybody want you. Nothing does, and you don't want somebody who had to be talked into it. What a script does is get the words out of your chest and into the air, so you get a real answer. A real answer you can live with, even a no. It's the guessing that keeps you up.",
    'So find your page. Take a breath. Pick up the phone.',
  ];
  return page('letter', 'letter', `
  <div class="letter-head">
    <div><div class="eyebrow">Before you dial</div><h1 class="page-title">A letter from Lou</h1></div>
    <div class="mini-portrait"><img src="${PORTRAIT}" alt=""></div>
  </div>
  <p class="salute">Dear kid,</p>
  ${paras.map(p => `<p>${fmt(p)}</p>`).join('')}
  <div class="signoff">
    <div class="catch">Don't text. Call.</div>
    <div class="sig">Lou</div>
  </div>`);
}

// ------------------------------------------------------------------ WHY THIS WORKS
function why(page, fmt) {
  const items = [
    ['It turns a guess into a question.', "Every card does the same small thing. It takes the story you tell yourself at midnight, \"they're bored of me,\" \"I ruined it,\" and swaps it for a question you can actually ask. A question gets an answer. An answer, even a no, lets you sleep."],
    ['It puts your voice back in.', "When you text, the other person has to guess your tone, and people guess wrong all the time. The researchers who study this keep finding the same two things: we think our tone comes across in writing much better than it really does, and we expect a phone call to be more awkward than it turns out to be. A voice carries the warm part, the kidding part and the nervous part all at once. A text carries the words and leaves the rest to their imagination, at eleven at night, which is the worst time for anybody's imagination."],
    ["It's brave, and people can feel it.", "Anybody can type. A call says, \"I meant this enough to risk my voice.\" That one's not science. That's ninety years of watching people."],
    ['It gets you past the first sentence.', "When you're nervous, your head goes blank. A script gets the first sentence out of your mouth. After the first sentence, you're just talking, and you're better at that than you think."],
  ];
  return page('why', 'why', `
  <div class="eyebrow">Before you dial</div>
  <h1 class="page-title">Why this works</h1>
  <p class="lede">${fmt("Most of the pain in dating isn't the no. It's the guessing.")}</p>
  <p class="intro">${fmt('Lemme tell you what you paid for, because you should know.')}</p>
  ${items.map(([h, b]) => `<div class="why-item"><div class="why-h">${fmt(h)}</div><p>${fmt(b)}</p></div>`).join('')}
  <div class="isnt">
    <div class="isnt-h">What this isn't</div>
    <p>${fmt("It isn't a way to make anybody want you. **No script makes anyone want you**, and I'd be careful with anybody who says theirs does. It isn't therapy, and it won't fix a broken heart by Friday. And if what's happening to you is scary, it's not a dating problem at all. Go to {card:25}.")}</p>
  </div>`);
}

// ------------------------------------------------------------------ HOW TO USE
function how(page, fmt) {
  const steps = [
    ['Find your feeling.', 'The index on {page:index} sorts every card by how you feel, not by what happened. Your stomach knows which one it is.'],
    ['Take the card.', "Read the rule first. It's one line. If you remember nothing else, remember that."],
    ['Make it yours.', "The words are a starting point, not a costume. Change anything that doesn't sound like you, and fill in the [brackets]. Then say it out loud once, to the mirror, the dog or the fridge. The fridge never laughed at me."],
    ['Call.', "If you can't call yet, use the text, but the text has one job only: to set up the call, or a plan with a day and a time. Face to face counts double."],
    ['Write one line in the log', "on {page:log}. Date, card, what happened, how you felt. That's the only homework in here."],
  ];
  const feel = [
    ['Before', "Your stomach will do the thing. That's normal, and it doesn't mean stop."],
    ['The first few seconds', 'Your voice might wobble. Mine did, and I was only asking about a soda.'],
    ['After', 'Lighter. Almost every time, whatever they said.'],
  ];
  return page('how', 'how', `
  <div class="eyebrow">Before you dial</div>
  <h1 class="page-title">How to use this file</h1>
  <p class="lede">${fmt("It's not a book. It's a drawer full of index cards. You open it when you need it.")}</p>
  <ol class="steps">${steps.map(([h, b], i) => `<li><span class="ring">${i + 1}</span><p><strong>${fmt(h)}</strong> ${fmt(b)}</p></li>`).join('')}</ol>
  <div class="feel-strip-h">What it'll feel like</div>
  <div class="feel-strip">${feel.map(([h, b]) => `<div><div class="fs-h">${fmt(h)}</div><p>${fmt(b)}</p></div>`).join('')}</div>
  <div class="startlog">
    <div class="sl-h">${fmt('Start your log right now')}</div>
    <div class="sl-row"><span class="sl-l">${fmt("The conversation I've been putting off:")}</span>${fillLine('100%')}</div>
    <div class="sl-row">${fillLine('100%')}</div>
    <div class="sl-row short"><span class="sl-l">${fmt("Today's date:")}</span>${fillLine('1.6in')}<span class="sl-note">${fmt("When you've had it, tick the box on {page:log2}.")}</span></div>
  </div>
  <p class="aside">${fmt('No crisis tonight? Good. Read the five cards on {page:tonight}.')}</p>`);
}

// ------------------------------------------------------------------ FAILURE PAGE
function fail(page, fmt) {
  const list = [
    ['Say thank you, and mean it.', '"Thanks for telling me" is the classiest sentence in the English language.'],
    ["Don't argue, and don't ask twice.", "A no isn't the start of a negotiation. You don't need their reasons, either."],
    ['Do something with your hands.', 'Walk around the block. Make a sandwich. Call somebody who loves you.'],
    ['Write it in the log.', "Later you'll want to see how brave you were."],
  ];
  return page('fail', 'fail', `
  <div class="eyebrow">Before you dial</div>
  <h1 class="page-title">A no is an answer</h1>
  <div class="big-rule">
    <div class="rname">The Gift Rule</div>
    <div class="big-take">${fmt('A no is an answer. An answer is a gift.')}</div>
  </div>
  <p>${fmt("In my bus mirror I saw plenty of people get a no. Lemme tell you who did fine: the ones who got an answer. The ones who suffered were the ones still standing at the stop, waiting on a bus that was never coming.")}</p>
  <p>${fmt("So when it goes wrong, and sometimes it will, here's what you do.")}</p>
  <ul class="dolist">${list.map(([h, b]) => `<li><strong>${fmt(h)}</strong> ${fmt(b)}</li>`).join('')}</ul>
  <p>${fmt("And when you fumble it? You said \"um\" nine times, you forgot to say the day, you texted when you meant to call. No do-overs. You don't redo a call, you don't apologize for being nervous, and you don't make up for it with three extra texts. You just make the next call, whenever the next one comes.")}</p>
  <div class="decoder">
    <div class="dc-h">How to read the answer</div>
    ${[
      ['"Not Tuesday, I\'m busy."', "Not a no. Ask for one other day, once."],
      ['"Maybe," twice.', 'A no, being polite. Let it go.'],
      ['One call, one message, nothing back.', 'An answer, for now. The phone goes in the drawer.'],
      ['"I\'m not looking for anything right now."', 'A no. Believe it the first time.'],
      ['"Yes."', "A yes. Don't argue with that one either."],
    ].map(([q, a]) => `<div class="dc-row"><div class="dc-q">${fmt(q)}</div><div class="dc-a">${fmt(a)}</div></div>`).join('')}
  </div>
  <p class="own-line">${fmt('The log in the back is a record, not a report card.')}</p>`);
}

// ------------------------------------------------------------------ MAKE IT FIT
function fit(page, fmt) {
  const items = [
    ["If you're shy", "Shy isn't a flaw, kid. Shy people make the best callers, because they listen. Use the text on each card first, to book the call: \"Can I call you at seven?\" Then nobody's surprised, including you. Write your first sentence on a piece of paper and read it. Nobody can see the paper."],
    ['If you live with anxiety', "Make the call smaller. Pick the time ahead and put it in your calendar. Read straight off the card; that's what it's for. Shaky hands are allowed, and the other person can't see them. One card at a time, not five. If anxiety is running your whole life and not just your love life, talk to a doctor or a counselor. Going is the strong move."],
    ["If it's long-distance", "Then the phone isn't the extra, it's the house. Pick a standing time and keep it like a bus schedule. Mind the time zones, and say goodnight on the call, not in a text. And keep the next visit on the calendar with a real date on it. Long distance with no next date is a pen pal."],
    ["If you're deaf or hard of hearing", "I wear a hearing aid in my right ear, so half the time on the phone I'm saying \"What?\" My grandson turned the captions on for me, and now I read faster than I hear. So when I say call, I mean talk where they can hear you or see you, in real time, as yourself. A video call with captions counts. Signing counts. Voice notes count, if they work for you. And if text is how you talk, text is fine. The rule was never about the phone. It's about not hiding behind it."],
  ];
  return page('fit', 'fit', `
  <div class="eyebrow">Before you dial</div>
  <h1 class="page-title">Make it fit your life</h1>
  <p class="lede">${fmt("Every card says call. Here's what that means when your life doesn't look like the card.")}</p>
  <div class="fit-grid">${items.map(([h, b]) => `<div class="fit-item"><div class="fit-h">${fmt(h)}</div><p>${fmt(b)}</p></div>`).join('')}</div>
  <div class="serious">
    <div class="serious-h">When it's more than nerves</div>
    <p>${fmt("If you're scared of someone, go to {card:25} now. If you're in a dark place, not just a sad week, call or text **988** in the US, or call Samaritans on **116 123** in the UK and Ireland. That's not failing. That's the strongest call you can make.")}</p>
  </div>`);
}

// ------------------------------------------------------------------ USAGE LOG
function logTable(rows, example) {
  const head = `<div class="lg-row lg-head"><div>Date</div><div>Card</div><div>What happened</div><div>How I felt<span>before &gt; after</span></div><div>Called</div></div>`;
  const ex = example ? `<div class="lg-row lg-ex"><div>Tue</div><div>7</div><div>Called, no answer. Sent one message, phone in the drawer.</div><div>sick &gt; okay</div><div>${box(true)}</div></div>` : '';
  const blank = `<div class="lg-row"><div></div><div></div><div></div><div></div><div>${box(false)}</div></div>`;
  return `<div class="lg">${head}${ex}${blank.repeat(rows)}</div>`;
}
function log(page, fmt) {
  return page('log', 'log', `
  <div class="eyebrow">The back of the book</div>
  <h1 class="page-title">The usage log</h1>
  <p class="lede">${fmt("Every time you use a card, write one line. That's the deal.")}</p>
  <p>${fmt("Date, which card, what happened, and how you felt, before and after, like \"sick > fine.\" Tick the box if you made the call, or said it face to face. Don't write an essay. A line is plenty. The first line is mine, so you can see how it goes.")}</p>
  ${logTable(11, true)}`);
}
function log2(page, fmt) {
  return page('log2', 'log', `
  <div class="eyebrow">The back of the book</div>
  <h1 class="page-title">The usage log, continued</h1>
  ${logTable(9, false)}
  <div class="readback">
    <div class="rb-h">Read it back</div>
    <p>${fmt('Every month or so, read this log from the top.')}</p>
    <div class="rb-row"><span class="ring">1</span><p>${fmt('Count the ticks in the Called column:')} ${fillLine('0.7in')} ${fmt('calls. Every one is a time you were braver than you felt.')}</p></div>
    <div class="rb-row"><span class="ring">2</span><p>${fmt('Read just the "after" side of How I felt. See how many say better.')}</p></div>
    <div class="rb-row"><span class="ring">3</span><p>${fmt('Go back to {page:how}, to the conversation you were putting off.')}<br><span class="rb-check">${box(false)} ${fmt('I had it, on')}</span> ${fillLine('1.3in')}</p></div>
    <p class="rb-close">${fmt("That's not luck, kid. That's a record.")}</p>
  </div>`);
}

// ------------------------------------------------------------------ BONUS 1: TONIGHT
function tonight(page, fmt, ICON, C) {
  const picks = [
    [1, 'Because the best thing that ever happened to me started with eleven cents and a question.'],
    [3, 'Because when they say yes, you\'ll want to know what comes after "Hi."'],
    [7, "Because it happens to everybody, and the card is easier to read before your stomach starts doing the thing."],
    [12, 'Because the longer you wait to ask, the harder it gets to ask.'],
    [18, "Because knowing how to leave is what lets you stay only where you're wanted."],
  ];
  const card = n => C.cards.find(c => c.n === n);
  return page('tonight', 'bonus tonight', `
  <div class="eyebrow">Bonus 1 of 5 &middot; The quickstart</div>
  <h1 class="page-title">The five cards to read tonight</h1>
  <p class="lede">${fmt("No crisis right now? Good. Read these five while you're calm, so the words are already in your pocket when you need them.")}</p>
  <ol class="picks">${picks.map(([n, why]) => `<li>${box(false)}<div><div class="pk-t"><a href="#card-${n}"><span class="pk-n">Card ${n}</span> ${fmt(card(n).title)}</a> <span class="pk-p">p.&nbsp;<span data-ref="card-${n}"></span></span></div><div class="pk-rule"><span class="pk-rn">${fmt(card(n).rule)}:</span> ${fmt(card(n).take)}</div><p>${fmt(why)}</p></div></li>`).join('')}</ol>
  <p class="pk-25">${fmt('And know where {card:25} is. I hope you never need it.')}</p>
  <div class="homework">
    <div class="hw-h">Tonight's homework</div>
    <p>${fmt("Pick one of the five. Say its script out loud, once, in the shower, in the car, wherever nobody's listening. Then go to bed. You're more ready than you were this morning.")}</p>
  </div>`);
}

// ------------------------------------------------------------------ BONUS 2: LOU'S RULES
function rules(page, fmt, ICON, C) {
  const byCard = n => C.cards.find(c => c.n === n);
  const order = [8, 4, 14, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const take = n => {
    const c = byCard(n);
    return n === 8 ? c.take + ' Hey is not a question.' : c.take;
  };
  const list = order.map(n => ({ name: byCard(n).rule, take: take(n), ref: `card ${n}` }));
  list.push({ name: 'The Gift Rule', take: 'A no is an answer. An answer is a gift.', ref: 'p. <span data-ref="fail"></span>' });
  list.push({ name: "Angie's Goodnight Rule", take: "You can go to bed mad. You can't go to bed without saying goodnight.", ref: 'p. <span data-ref="goodnight"></span>' });
  return page('rules', 'bonus rules', `
  <div class="eyebrow">Bonus 2 of 5 &middot; The printable</div>
  <h1 class="page-title">${fmt("Lou's Rules")}</h1>
  <p class="lede">${fmt("All of them, on one page. Print it, cut along the dotted line, and stick it on the fridge, where you'll see it at eleven o'clock at night.")}</p>
  <div class="cutout"><div class="rulecols">${[list.slice(0, 14), list.slice(14)].map((col, ci) => `<ol class="rulelist">${col.map((r, i) => `<li><span class="rl-n">${i + 1 + ci * 14}</span><div><span class="rl-name">${fmt(r.name)}</span> <span class="rl-ref">${r.ref}</span><div class="rl-take">${fmt(r.take)}</div></div></li>`).join('')}</ol>`).join('')}</div></div>`);
}

// ------------------------------------------------------------------ BONUS 3: CHEAT CARD
function cheat(page, fmt) {
  return page('cheat', 'bonus cheat', `
  <div class="eyebrow">Bonus 3 of 5 &middot; Keep it by the phone</div>
  <h1 class="page-title">The first-call cheat card</h1>
  <p class="lede">${fmt("Fill it in before you dial. I kept a pencil by my phone for sixty years. You can use the notes on your phone. I won't tell.")}</p>
  <div class="index-card">
    <div class="ic-row"><span class="ic-l">Calling</span>${fillLine('2.3in')}<span class="ic-l">at</span>${fillLine('1.05in')}<span class="ic-hint">${fmt('The time I said. Not around then. Then.')}</span></div>
    <div class="ic-row"><span class="ic-l">My reason</span>${fillLine('4.9in')}</div>
    <div class="ic-hint ic-under">${fmt("You don't need a speech, you need a reason.")}</div>
    <div class="ic-sec">The first thirty seconds</div>
    <p class="ic-script">${fmt('"Hi, it\'s')} ${fillLine('1.3in')}${fmt('. Is now a good time? I was thinking about')} ${fillLine('1.6in')} ${fmt('and I wanted to hear your voice."')}</p>
    <div class="ic-row"><span class="ic-l">${fmt('If it\'s a bad time: "No problem, when\'s better?" New time:')}</span>${fillLine('1.2in')}</div>
    <div class="ic-sec">Two things they told me that I want to ask about</div>
    <div class="ic-row"><span class="ic-n">1</span>${fillLine('5.3in')}</div>
    <div class="ic-row"><span class="ic-n">2</span>${fillLine('5.3in')}</div>
    <div class="ic-sec">If my mind goes blank, I can say</div>
    <ul class="ic-blank">
      <li>${fmt('"Sorry, I\'m a little nervous. I\'m glad I called, though."')}</li>
      <li>${fmt('"Okay, tell me the best thing that happened to you this week."')}</li>
      <li>${fmt('"What are you looking forward to this weekend?"')}</li>
    </ul>
    <div class="ic-sec">The plan I'll ask for</div>
    <div class="ic-row"><span class="ic-l">Day</span>${fillLine('1.25in')}<span class="ic-l">Time</span>${fillLine('0.95in')}<span class="ic-l">Place</span>${fillLine('2.2in')}</div>
    <div class="ic-sec">My goodbye</div>
    <p class="ic-script">${fmt('"I should let you go. I\'m really glad I called."')}</p>
  </div>
  <p class="aside">${fmt('After you hang up: one line in the log on {page:log}. Then go get a glass of water. You earned it.')}</p>`);
}

// ------------------------------------------------------------------ BONUS 4: GOODNIGHT
function goodnight(page, fmt) {
  return page('goodnight', 'bonus goodnight', `
  <div class="eyebrow">Bonus 4 of 5 &middot; For couples</div>
  <h1 class="page-title">${fmt("Angie's Goodnight Rule")}</h1>
  <div class="big-rule">
    <div class="big-take">${fmt("You can go to bed mad. You can't go to bed without saying goodnight.")}</div>
  </div>
  <p>${fmt("Sixty-five years, Angie and me said goodnight every night. Every night. Even when we were fighting. Even the night she shut herself in the bathroom, too mad to come out. I said it through the bathroom door, and she said it back: \"Goodnight, Louie.\" I was wrong that night, by the way. I was wrong a lot.")}</p>
  <p>${fmt("Here's why it works. A fight is about one thing. Goodnight is about everything else: I'm still here, we're still us, we'll pick this up tomorrow. You don't have to fix the fight before bed. Some fights need a night's sleep. You just don't let the fight have the last word.")}</p>
  <div class="gn-say">
    <div class="label">${'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'}<span>Say this</span></div>
    <p><span class="gn-l">At bedtime:</span> ${fmt('"I\'m still upset, and I still love you. Goodnight. Let\'s talk at breakfast."')}</p>
    <p><span class="gn-l">Through the door:</span> ${fmt('"Goodnight. I\'m not going anywhere."')}</p>
    <p><span class="gn-l">If you live apart:</span> ${fmt('a thirty-second call. "I\'m still mad, and I\'m not going anywhere. Goodnight." Then hang up and sleep.')}</p>
  </div>
  <div class="isnt">
    <div class="isnt-h">What it isn't</div>
    <p>${fmt("It isn't a rule to force a talk. If they've asked for space, the goodnight is \"Okay. I'll give you space. Goodnight.\" And then you give it.")}</p>
    <p>${fmt("And it isn't for a home where you're scared. If saying goodnight feels dangerous, this isn't a fight. It's {card:25}.")}</p>
  </div>`);
}

// ------------------------------------------------------------------ BONUS 5: TUESDAY DATES
function tuesday(page, fmt) {
  const ideas = [
    ['One soda, two straws.', 'Find a counter that still makes a milkshake or a float, and split one. Leave a tip. I left a penny. Times have changed.'],
    ['The end of the line.', "Ride a city bus to the last stop and back. Sit up front and make up stories about the people getting on. This one's personal."],
    ['The free museum night.', 'Lots of museums have a free evening or a pay-what-you-can day. Pick one room and stay there.'],
    ['The one-pot dinner.', 'Cook one thing together. Somebody chops, somebody stirs, and the phones go face down.'],
    ['The stoop.', 'Two coffees, a front step or a bench, and an hour of watching the street go by.'],
    ['The library swap.', 'Walk the shelves and pick a book for each other. It\'s free, and you learn a lot from what somebody picks for you.'],
    ['The walk with a destination.', 'Pick a bridge, a view or a park across town. Walk there, and split a slice at the end.'],
    ['Teach me something.', 'A card game, a song, a recipe your grandmother made. Whoever loses makes the coffee next time.'],
    ['The free show.', 'An open mic, a concert in the park, a high school play. Bad singing is a great thing to laugh about together.'],
    ['Breakfast instead of dinner.', 'Cheaper, earlier, and nobody\'s tired yet. A diner counter is the most honest room in America.'],
  ];
  return page('tuesday', 'bonus tuesday', `
  <div class="eyebrow">Bonus 5 of 5 &middot; The Tuesday Rule, ten ways</div>
  <h1 class="page-title">Ten cheap Tuesday dates</h1>
  <p class="lede">${fmt('One soda, two straws. The date was never about the soda.')}</p>
  <p>${fmt("Nobody's trying to impress anybody on a Tuesday, and cheap is good: when there's nothing fancy to look at, you look at each other. Tick them off as you go.")}</p>
  <ol class="ideas">${ideas.map(([h, b], i) => `<li>${box(false)}<span class="id-n">${i + 1}</span><p><strong>${fmt(h)}</strong> ${fmt(b)}</p></li>`).join('')}</ol>`);
}

// ------------------------------------------------------------------ SMALL PRINT
function smallprint(page, fmt) {
  return page('smallprint', 'smallprint', `
  <div class="eyebrow">The back of the book</div>
  <h1 class="page-title">The small print</h1>
  <p class="lede">${fmt('Short, honest, and in plain English.')}</p>
  <div class="sp">
    <div class="sp-h">Lou is a character</div>
    <p>${fmt("Grandpa Lou is an AI-created fictional character. His face, his voice and his stories were made with AI, and Angie, Nicky and the bus route belong to his story, not to a real family. The good sense is real. The grandpa isn't.")}</p>
    <div class="sp-h">What this isn't</div>
    <p>${fmt("This file is general advice for adults. It isn't therapy or counseling, and it isn't medical or legal advice. No script makes anybody want you, and nothing in here is meant to pressure, trick or talk anyone into anything. Use it for honesty, never for games.")}</p>
    <div class="sp-h">When it's more than a dating problem</div>
    <p>${fmt('These are free, and calling one is the strong move.')}</p>
    <ul class="help">
      <li>${fmt('**Scared of someone you\'re with.** US: National Domestic Violence Hotline, **1-800-799-7233** (or text START to 88788). UK: Refuge, National Domestic Abuse Helpline, **0808 2000 247**.')}</li>
      <li>${fmt('**In a dark place.** US: call or text **988**. UK and Ireland: Samaritans, **116 123**.')}</li>
      <li>${fmt('**In danger right now.** **911** in the US, **999** in the UK, or your local emergency number.')}</li>
    </ul>
    <div class="sp-h">For everybody</div>
    <p>${fmt('Every card works for anybody: any gender, and anybody you love. When a card says "they," it means whoever you\'re calling.')}</p>
    <div class="sp-h">Yours to keep</div>
    <p>${fmt("This file is for your own use. Please don't share or resell it. If a friend needs it, tell them where you got it.")}</p>
  </div>
  <div class="closer">
    <p>${fmt('Now put this down and pick up the phone.')}</p>
    <div class="catch">Don't text. Call.</div>
    <div class="sig">Lou</div>
  </div>`);
}

module.exports = {
  cover,
  front: [
    { id: 'index', render: index },
    { id: 'letter', render: letter },
    { id: 'why', render: why },
    { id: 'how', render: how },
    { id: 'fail', render: fail },
    { id: 'fit', render: fit },
  ],
  back: [
    { id: 'log', render: log },
    { id: 'log2', render: log2 },
    { id: 'tonight', render: tonight },
    { id: 'rules', render: rules },
    { id: 'cheat', render: cheat },
    { id: 'goodnight', render: goodnight },
    { id: 'tuesday', render: tuesday },
    { id: 'smallprint', render: smallprint },
  ],
};

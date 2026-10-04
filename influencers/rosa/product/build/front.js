// Front matter + week openers + midpoint letter. HTML fragments in Rosa's voice.
module.exports = {

letter: {
  kicker: 'A letter from Rosa',
  title: 'Amore, read this first.',
  body: `
Giulia says a book needs a letter at the front. So: I talk, she types. If you find a mistake, it's hers.

I know your mornings. The telephone is in your hand before your eyes are open. The coffee goes down standing at the sink. The keys are lost. Breakfast is nothing, or something in the car. And by nine o'clock you feel old. Older than me, maybe.

Everybody thinks their mornings are the worst in the world. Everybody is wrong. My Totò had three children under five and one bathroom. I have seen bad mornings, amore. Yours are ordinary, and that's good news, because ordinary trouble has ordinary answers.

People see me come out of the sea at ninety-four and they say: lucky woman. Lucky genes, lucky sea. Ascolta. The sea is not my secret. The sea is my receipt. Eighty-five years of small mornings paid for it: light first, a big glass of water, the stairs, breakfast sitting down, lunch at one, a rest, a walk, people. Not one of those needs a sea. You can do every one of them in an apartment in a city.

So here's the deal. Thirty mornings, one small thing each, so small you'll feel a little silly. Do it, tick the box, write one line. That's all. You won't get younger; nobody can sell you that. But your mornings will feel like yours again, you'll know which small things did it, and nine o'clock will stop feeling like the end of the day.

And you don't have to swim. Please don't. The sea is my story. Yours is a window, a glass of water and a chair.

Piano piano.`,
  catchphrase: "The sea doesn't care how old you are.",
},

why: `
<div class="kicker">Before you start</div>
<h1 class="title">Why this works</h1>
<div class="lede">Giulia studies in the city and likes reasons, so she looked things up. I told her what I know. Here's both.</div>
<div class="why">
  <div class="why-item">
    <h2 class="sec">Small and daily beats big and brave</h2>
    <p>Research on habits keeps finding that tiny actions tied to something you already do (waking up, the kettle, lunch) last longer than big plans that run on willpower. One well-known study found new habits took around two months on average to feel automatic, and much longer for some people. So thirty days starts the job; it doesn't finish it. That's why the book ends with you choosing five to keep.</p>
    <p class="rosa">"I didn't need a study. I had a moka and a church bell."</p>
  </div>
  <div class="why-item">
    <h2 class="sec">Light first</h2>
    <p>Sleep researchers keep finding that daylight early in the day helps set the body's internal clock. That's one reason people often feel more awake after morning light, and sleepier at the right time at night. Week one is built on this.</p>
    <p class="rosa">"I don't know about clocks inside the body. I know about windows."</p>
  </div>
  <div class="why-item">
    <h2 class="sec">The old Mediterranean pattern</h2>
    <p>Rosa's town isn't one of the famous Blue Zones, the handful of places where researchers found unusual numbers of people living into their nineties and past a hundred. One of them, Sardinia, is just across the water. What keeps coming up in those places is ordinary: walking every day because the town makes you, simple food built on beans, vegetables, bread and olive oil, meals eaten with other people, time to slow down, and a reason to get up. The traditional Mediterranean way of eating has been studied for decades and is often linked with healthier aging. Researchers still argue about exactly why, and they call these patterns, not promises.</p>
    <p class="rosa">"So do I."</p>
  </div>
  <div class="why-item">
    <h2 class="sec">People count</h2>
    <p>Studies that follow people over many years keep finding that regular contact with others goes along with aging well. That's week four.</p>
    <p class="rosa">"Concetta has been annoying me for sixty years. It's good for both of us."</p>
  </div>
</div>
<div class="note-box">
  <div class="nb-h">What this book isn't</div>
  <p>It's a set of everyday habits, not medical advice. It doesn't treat or cure anything, and it can't replace a doctor who knows you. If you're tired every day no matter what you change, that's for a doctor, not a nonna. As Rosa says: ask your doctor, then go outside.</p>
</div>`,

score: {
  kicker: 'Before Day 1',
  title: "Where you're starting",
  lede: "Fishermen write down the catch. Not the one they wanted: the one they got.",
  intro: `Before your first morning, score your mornings as they are now. Don't be kind to yourself and don't be cruel. Just true. You'll score them again after Day 30, on page {{p:rescore}}, and you'll want something honest to compare.`,
  rows: [
    ['My energy in the morning', '1 is a wet towel on the line. 10 is a nine-year-old running down to the sea.'],
    ['My mood in the morning', '1 is a storm: nobody talk to me. 10 is Sunday lunch.'],
    ['How rushed my mornings feel', '1 is calm as the harbor at dawn. 10 is running for the bus with one shoe on. <em>For this one, lower is better.</em>'],
  ],
  noteLabel: 'A note to me, to read on Day 30',
  noteHint: "Write it like a letter. What do your mornings look like now? What do you want from these thirty? You'll be the one reading it.",
},

expect: `
<div class="kicker">Before you start</div>
<h1 class="title">What to expect</h1>
<div class="lede">A storm you can see coming is just weather.</div>
<div class="timeline">
  <div class="tl"><div class="tl-when">Days 1 to 3</div><div class="tl-what"><h2 class="sec">Easy, and a little silly</h2><p>You'll think: this is too small to matter. Good. Small is the point. Nobody is frightened of opening a window, so you'll actually do it.</p></div></div>
  <div class="tl"><div class="tl-when">Days 4 to 7</div><div class="tl-what"><h2 class="sec">The first surprise</h2><p>One morning you'll open the window before you've even thought about it. Write that down. That's your first fish.</p></div></div>
  <div class="tl hot"><div class="tl-when">Week two</div><div class="tl-what"><h2 class="sec">The wobble</h2><p>This is the one I want you ready for. The new feeling wears off. Life gets loud. You miss a morning, maybe two, and a little voice says you've already failed. Everybody gets this week, amore. It's the week people quit things. You won't, because now you know it's coming, and because of Salvatore's Rule on the next page.</p></div></div>
  <div class="tl"><div class="tl-when">Week three</div><div class="tl-what"><h2 class="sec">It starts to feel like yours</h2><p>The food week is the most fun. My kitchen cards are at the back, from page {{p:kitchen1}}.</p></div></div>
  <div class="tl"><div class="tl-when">Week four and the last two</div><div class="tl-what"><h2 class="sec">It stops being a challenge</h2><p>It turns into how you live. Then you score yourself again and choose five to keep.</p></div></div>
</div>
<div class="note-box sea">
  <div class="nb-h">How to use a day page</div>
  <p>Read it the night before, or with your first coffee (sitting down). Do the small thing. Tick the box. Write one line under "What I noticed." That's the whole method: <strong>Read &gt; Do &gt; Tick &gt; One line.</strong></p>
  <p>Day 1 is the first morning you do it, whatever day of the week that is. Some tasks happen tonight, so read ahead when a page says so.</p>
</div>`,

failure: {
  kicker: 'When you miss a morning',
  title: "Salvatore's Rule",
  lede: 'No restarts. No catching up. No doubling.',
  body: `
Salvatore fished all his life. Some mornings the sea said no, and the boats stayed in the harbor. Did he go out twice the next day to make up for it? Of course not. He'd have sunk the boat. He went out once, like always, and in his little book he wrote one word for the day he missed: storm. Then he forgot about it.

You will miss mornings, amore. Children get sick, buses don't come, you sleep through everything. When it happens:`,
  list: [
    "Don't go back to Day 1. You haven't lost anything.",
    "Don't do two pages tomorrow to catch up.",
    "Don't punish yourself with extra.",
    'Open the book at the next page and do that one. Just that one.',
  ],
  after: `A day in this book is a morning you did, not a date on the calendar. If your thirty mornings take thirty-six days, they are still thirty mornings. Miss a whole week? Same rule. The next page is waiting, and it doesn't ask where you were.`,
  line: 'The tick-sheet is a logbook, not a courtroom.',
},

fit: `
<div class="kicker">Before you start</div>
<h1 class="title">Make it fit your life</h1>
<div class="lede">If your life doesn't fit the book, change the book, not your life.</div>
<p class="intro">These mornings are written for an ordinary day: a bed, a window, a kitchen, a start somewhere between six and nine. If that isn't you, here's how to bend it.</p>
<div class="fit">
  <div class="fit-item"><h2 class="sec">If you work shifts</h2><p>Your morning is whenever you wake up. Salvatore's started at three, in the dark. If you wake in the dark, switch on the brightest light for the Window Rule and get outside when the daylight comes. Pick one bell for work days and one for days off, as close together as your schedule allows.</p></div>
  <div class="fit-item"><h2 class="sec">If you have small children</h2><p>My Totò had three under five. Do the rules with them: children love a rule with a name. A two-minute version counts. A version where somebody is crying counts too.</p></div>
  <div class="fit-item"><h2 class="sec">If your body has limits</h2><p>Every movement here is gentle, and every one can be done slower, sitting down, or skipped. <strong>Go at your own pace. If you have a heart, lung, joint or balance condition, are pregnant, or have been told to take it easy, check with your doctor before week two.</strong> Pain means stop, not push. And if a doctor has told you how to eat, drink or move, the doctor wins.</p></div>
  <div class="fit-item"><h2 class="sec">If you live alone</h2><p>Since Salvatore, my house is quiet. Quiet, not empty. Week four asks you to talk to people: a neighbor, the baker, a voice on the telephone. You choose the people. They don't have to live with you.</p></div>
</div>
<div class="note-box coral">
  <div class="nb-h">When it's more than mornings</div>
  <p>If tiredness never lifts whatever you change, if you snore loudly or wake up gasping, or if your mood is low most days, see a doctor. That's the strong move, not a failure. If you're in a dark place or thinking about hurting yourself, call or text <strong>988</strong> in the US (988 Suicide &amp; Crisis Lifeline), free, any hour. In the UK and Ireland, call <strong>Samaritans</strong> on <strong>116&nbsp;123</strong>, free. Anywhere else, call your local emergency number.</p>
</div>`,

weeks: [
  { id: 'week1', num: 'Week One', theme: 'Light and water', sub: 'The first ten minutes', img: 'wk1-window.jpg', days: [1, 7],
    intro: `
Week one is only the first ten minutes of your day. You don't change your job, your breakfast or your family. Just what happens between your eyes opening and your hand reaching for the telephone. Light. Water. Air. The things my mother did before anybody told her why.

Small? Yes. That's the trick, amore. Small things pull the bigger things along behind them, like a little boat towing a big one into the harbor.`,
    ready: `Tonight, put a big glass by your bed or next to the kettle. Check that one window in your home opens wide and easily. That's all the shopping this week needs.` },
  { id: 'week2', num: 'Week Two', theme: 'Gentle movement', sub: 'The 112 steps', img: 'wk2-doorstep.jpg', days: [8, 14],
    intro: `
I have never been to a gym in my life. I had steps, a broom, a baker at the bottom of the hill and three children who never sat still. This week you move the way my town moves: a little, often, on the way to somewhere.

Nothing hard. Nothing fast. Nothing that hurts, and if something does hurt, you stop. Piano piano isn't weakness, amore. It's a method.`,
    ready: `Comfortable shoes by the door. Find your stairs: at home, at work, at the station. Find a sturdy chair with no wheels. If you have a condition, read page {{p:fit}} first.` },
  { id: 'week3', num: 'Week Three', theme: 'Eating like Nonna', sub: 'Sit down, amore', img: 'wk3-table.jpg', days: [15, 21],
    intro: `
In my house nobody eats standing up. You sit, you eat, you talk, you get up. This week isn't about what you eat. I'm not a doctor, and I won't give you a list.

It's about how: sitting down, slowly, without the telephone, with a lunch that feels like lunch, and once, with people around you. If you want to cook something my way, the kitchen cards are at the back.`,
    ready: `Clear one end of the table so there's always a place to sit. Buy bread, olive oil, a lemon and a bag of lentils. The kitchen cards start on page {{p:kitchen1}}.` },
  { id: 'week4', num: 'Week Four', theme: 'People and rest', sub: 'A morning is made the day before', img: 'wk4-boats.jpg', days: [22, 30],
    intro: `
Here's a secret, amore: the best mornings start the day before. With who you talked to, how you rested, and what time you put the day down. So this week goes outside the morning on purpose: neighbors, a voice on the telephone, a rest after lunch, a slow walk, a bedtime.

Then two last mornings to put it all together, and you're done. Well. You're started.`,
    ready: `Think of one neighbor whose name you don't know yet. Check the telephone is still sleeping outside the bedroom (Day 6). Tell someone you're nearly at the end. People like to be told.` },
],

midpoint: {
  kicker: 'A letter for Day 15',
  title: 'Halfway, amore.',
  body: `
Giulia, write this exactly the way I say it.

You're halfway. Fourteen mornings. And if it took you twenty days to get here, it's still fourteen mornings. I don't count the storms.

Now I'll tell you something nobody told me when I was young. This is the place. Right here. Not Day 1, when everything is new and you buy a nice pen. Not Day 29, when you can see the end. Here, in the middle, when it isn't new anymore and the end is still far. This is where people put the book in a drawer.

When I swim, there's a moment a little way out, with the ladder behind me and the white rock still ahead, when a small voice says: why are you doing this? Go home. Have your coffee. Eighty-five years, and that voice still comes some mornings. (Never alone and never in a rough sea, I promise you. Somebody is always on the rocks.) I don't argue with it. I don't win by being strong. I just take the next stroke. Only the next one. Then the voice gets bored and goes away.

That moment is the whole game. This exact moment. So don't think about sixteen more mornings. Think about tomorrow's page. It's small. They're all small. I made them small on purpose.

Before you turn the page, go back and read what you wrote under "What I noticed." All of it, even the lazy lines. That's fourteen mornings you didn't have before.

I'm touching my beads while I say this. Salvatore bought them in 1952 with the money from his first big swordfish, so big it didn't fit in the boat. He used to say the sea decides nothing; the fisherman decides, every morning, to go out.

Tomorrow we eat. Piano piano.`,
},

};

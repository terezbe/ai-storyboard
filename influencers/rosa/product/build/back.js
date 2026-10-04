// The ending, Rosa's drawer (bonus stack) and the small print.
module.exports = {

rescore: {
  kicker: 'After Day 30',
  title: 'Thirty mornings later',
  lede: 'Now the numbers. Honestly, like the first time.',
  intro: `Turn back to page {{p:score}} and copy your Day 1 scores into the first column. Then score yourself today, the same way: not the score you hoped for, the one that's true.`,
  rows: ['My energy in the morning', 'My mood in the morning', 'How rushed my mornings feel <em>(lower is better)</em>'],
  after: `
Now read the note you wrote to yourself on Day 1. Out loud, if nobody's listening.

If your numbers moved, that isn't me talking, and it isn't excitement. It's your own handwriting, thirty mornings apart. That's evidence, amore.

If they didn't move much, read your "What I noticed" lines. Small changes hide there, the way the little fish hide under the rocks. And if you're still exhausted every morning after all this, take this book to your doctor and show them. A month of notes is useful to a doctor. Mine is thirty-four, sixty years younger than me, and he reads everything I bring him. He tells me to keep doing what I'm doing.`,
  remember: 'What I want to remember from these thirty mornings',
},

keep: {
  kicker: 'The ritual is yours now',
  title: 'Keep Five',
  body: `
Thirty rules is too many to carry forever. Even I don't do all thirty every day, and they're my rules.

Choose five: the ones that made the biggest difference, the ones you'd miss. Write them on the card, cut it out, and put it where your morning starts: by the kettle, on the bathroom mirror, inside the cabinet with the cups. Habits take longer than thirty days to really settle, so keep the card up for at least another month. After that you won't need it. It will just be your morning.`,
  catchphrase: "The sea doesn't care how old you are.",
},

drawer: {
  kicker: 'The back of the book',
  title: "Rosa's drawer",
  line: "Every kitchen has one drawer where the useful things live: string, a good knife, a recipe somebody's aunt wrote on an envelope. This is mine.",
  items: [
    ['quick', 'The 7-Morning Quickstart', 'For a week when thirty is too many.'],
    ['fridge', 'The Fridge Sheet', 'All thirty rules on one page, to print and tick.'],
    ['kitchen1', "Rosa's Kitchen Cards", 'Six dishes and my own breakfast, simple enough for a Tuesday.'],
    ['steps', 'The 112 Steps Card', 'Your own walking habit, for after Day 30.'],
    ['poster', "Five Things I Won't Have in My House", 'For the kitchen wall.'],
    ['smallprint', 'The honest small print', 'Read it. It matters.'],
  ],
},

quick: {
  kicker: 'Bonus one',
  title: 'The 7-Morning Quickstart',
  lede: 'For a week when thirty is too many.',
  intro: `A new baby, a new job, a month when everything is on fire. You don't need thirty rules. You need seven, one a morning. Each morning, add the new one and keep the ones before it if you can. If you can't, just do today's. If my house were burning, these are the seven I'd carry out.`,
  items: [
    [1, 'The Window Rule', 'Before the telephone, open a window wide and stand in the light for one minute.'],
    [2, 'The Big Glass Rule', 'A big glass of water before the coffee.'],
    [6, 'The Hallway Rule', 'Tonight, the telephone sleeps outside the bedroom.'],
    [16, 'The Moka Rule', 'Tonight, set out the cup, the coffee and the keys for the morning.'],
    [15, 'The Chair Rule', 'Breakfast on a plate, sitting down, five minutes at least.'],
    [10, 'The Bread Rule', 'Walk to the shop for something small. No car, no delivery.'],
    [28, 'The Last Boat Rule', 'Screens off and lights low at least half an hour before bed.'],
  ],
  after: `When the seven are done and you want more, the thirty are waiting where you left them.`,
},

fridge: {
  kicker: 'Bonus two',
  title: 'The Fridge Sheet',
  lede: 'Print it. Stick it up with a magnet. Tick it with a pen.',
  short: {
    1: 'Window wide, one minute, before the telephone',
    2: 'A big glass of water before the coffee',
    3: 'Cool water on the face and wrists',
    4: 'Five minutes outside in the first hour',
    5: 'Water something alive',
    6: 'Telephone sleeps outside the bedroom',
    7: 'Same wake-up time, weekends too',
    8: 'One flight of stairs, counted',
    9: 'Stretch for one minute before you stand',
    10: 'Walk to the shop for something small',
    11: 'Back to the wall, thirty seconds',
    12: 'Balance at the counter while the coffee brews',
    13: 'Stand up and sit down slowly, five times',
    14: 'One job by hand, done properly',
    15: 'Breakfast sitting down',
    16: 'Set up breakfast the night before',
    17: 'One meal, telephone in another room',
    18: 'Buy one thing you wash or peel',
    19: 'Cook one simple thing from scratch',
    20: 'Lunch sitting down, away from screens',
    21: 'One meal with people',
    22: 'First conversation with a person',
    23: 'Five real minutes with a neighbor',
    24: 'Rest after lunch, no screen',
    25: 'A slow walk after supper',
    26: 'Call someone instead of typing',
    27: 'Something goes wrong? Laugh, tell someone',
    28: 'Screens off, lights low, same bedtime',
    29: 'Your favorite rules, in your order',
    30: 'Never say "at my age"',
  },
  foot: `Missed a box? Leave it empty and do the next one. That's Salvatore's Rule, page {{p:failure}}.`,
},

breakfast: { name: "Rosa's breakfast", tag: 'No recipe needed',
  text: "A cup from the moka. A slice of yesterday's bread with olive oil. An orange or a fig, depending on the month. All of it on a plate, at the table, with the radio on. That has been my breakfast for as long as I can remember. Yours can be anything at all. Just sit down for it: the Chair Rule, page {{p:day15}}." },

kitchenNote: 'Ordinary home cooking for an ordinary kitchen. Allergies, special diets and your doctor\'s advice come first.',
kitchen: [
  { name: 'The Moka', tag: 'Coffee the way my house makes it',
    rosa: 'Set it up the night before (the Moka Rule, page {{p:day16}}) and the morning only has to light the gas.',
    need: ['A stovetop moka pot, any size', 'Cold water', 'Ground coffee for moka or espresso: fine, but not powder'],
    steps: ['Fill the bottom with cold water up to the little valve, never above it.', "Fill the basket with coffee and level it with your finger. Don't press it down. It isn't a sandwich.", 'Screw the top on firmly.', 'Low to medium heat, lid open if you like to watch.', 'When it starts to gurgle and sputter, take it off the heat. Basta.'],
    tip: ['Careful', 'The handle and the metal get very hot. Let it cool before you open it to clean it. Tea people: same rule, with the teapot and the cup set out tonight.'] },
  { name: 'Pane Cunzato', tag: 'Dressed bread, ready in five minutes',
    rosa: 'Fishermen took this to sea in their pockets. You will eat it at the table.',
    need: ["A thick slice of good bread (yesterday's is fine)", 'A ripe tomato', 'Good olive oil, salt and dried oregano', 'If you like: a slice of cheese, a few olives, an anchovy'],
    steps: ["Warm or toast the bread if it's old.", 'Cut the tomato in half and rub it into the bread, or slice it on top.', 'Olive oil over everything, a pinch of salt, a pinch of oregano.', 'Cheese or olives on top, if you want them.', 'Sit down.'],
    tip: ['In winter', 'When tomatoes taste of nothing, use a spoonful of canned crushed tomatoes instead.'] },
  { name: 'Monday Lentils', tag: 'One pot, three days',
    rosa: "Better on Wednesday. Don't ask me why. (The One Pot Rule, page {{p:day19}}.)",
    need: ['1 cup brown or green lentils, rinsed', '1 onion, 1 carrot and 1 celery stalk, chopped small', '1 clove garlic, sliced, and 2 tablespoons olive oil', '1 cup canned crushed tomatoes, 1 bay leaf', 'About 4 cups water, and salt'],
    steps: ['Warm the oil and cook the onion, carrot and celery gently for 8 to 10 minutes, until soft.', 'Add the garlic for one minute.', 'Add the lentils, tomatoes, bay leaf and water. Bring to a boil, then turn it down to a gentle simmer.', 'Cook 30 to 40 minutes, until the lentils are soft. Add a little water if it gets too thick.', 'Salt at the end. Take out the bay leaf. A little olive oil on top in the bowl.'],
    tip: ['Keep it', 'Let it cool, cover it, keep it in the fridge, and eat it within three days.'] },
  { name: 'Beans and Greens', tag: 'The hill on a plate',
    rosa: "On my hill the fennel grows wild. Don't go picking wild plants unless somebody who truly knows them shows you. Buy a fennel bulb and use the feathery tops.",
    need: ['1 can (15 oz) white beans or chickpeas, rinsed', 'A big bunch of greens: chard, escarole, kale or spinach', '2 cloves garlic, sliced, and 3 tablespoons olive oil', 'Salt, black pepper and half a lemon', 'Fennel fronds if you have them, and bread for the side'],
    steps: ['Wash the greens well and chop them roughly.', 'Warm the oil and garlic over low heat until it smells good, not brown.', 'Add the greens with a splash of water, cover, and cook until soft: about 3 minutes for spinach, up to 10 for kale or chard stems.', 'Add the beans and warm them through.', 'Salt, pepper, a squeeze of lemon, the fennel fronds and a little more oil.'],
    tip: ['With it', 'Bread, to wipe the plate. In my house that is not bad manners. It is the point.'] },
  { name: "Salvatore's Fish", tag: 'Whatever came in this morning',
    rosa: "Salvatore said: don't ask for the fish you want. Ask which fish is fresh today. Then cook it simply, and sit down to eat it at one.",
    need: ['2 fillets of white fish, whatever is freshest', '1 lemon', '2 tablespoons olive oil', '1 clove garlic, sliced thin', 'A handful of parsley, and salt'],
    steps: ['Heat the oven to 400&deg;F (200&deg;C).', 'Put the fish in an oiled baking dish. Salt, oil, the garlic, and thin slices of lemon on top.', 'Bake 10 to 15 minutes, until the fish is white all the way through and flakes easily with a fork.', 'Chopped parsley and a squeeze of lemon. Sit down.'],
    tip: ['Careful', "Fish must be cooked all the way through. If you're not sure, give it two more minutes."] },
  { name: "Caponata (Not Concetta's)", tag: 'Sweet and sour, better tomorrow',
    rosa: "Concetta puts in too much sugar. I'm not saying this to be unkind. I'm saying it because it's true. She fries the eggplant. I roast it. I'm right.",
    need: ['1 large eggplant, in cubes', '1 onion, chopped, and 2 celery stalks, sliced', '4 tablespoons olive oil', '1 cup canned crushed tomatoes', '2 tablespoons capers, rinsed, and a handful of pitted green olives', '3 tablespoons red wine vinegar, 1 tablespoon sugar (one, Concetta), salt, fresh basil'],
    steps: ['Heat the oven to 425&deg;F (220&deg;C). Toss the eggplant with half the oil and a pinch of salt and roast 25 to 30 minutes, until soft and golden.', 'Meanwhile cook the onion and celery gently in the rest of the oil for 10 minutes.', 'Add the tomatoes, capers and olives, and simmer 10 minutes.', 'Stir in the eggplant, vinegar and sugar and simmer 5 minutes more. Taste: sweet and sour together.', 'Rest it, until tomorrow if you can. Basil on top. Eat it at room temperature, with bread.'],
    tip: ['Keep it', 'Covered in the fridge, up to four days.'] },
],

steps: {
  kicker: 'Bonus four',
  title: 'The 112 Steps Card',
  lede: 'Your own walking habit, for after Day 30.',
  rosa: `A hundred and twelve steps from the sea to my door. Down in the morning, up again after my swim (only when the sea is kind, and never alone). Some days I count them out loud. There's a low wall at step sixty where I sit if I want to, and I don't apologize to anybody for sitting.`,
  find: `Find your 112. The stairs at the station, the hill to the mailbox, the long way around the block, laps of the hallway on a rainy day. Walk it once and count it, so you know your number.`,
  rules: [
    ['Piano piano.', "If you can't talk while you walk, slow down."],
    ['One hand for the rail.', 'On the way down, always.'],
    ['Count out loud.', "The mind can't count and complain at the same time."],
    ['Sit when you want to.', 'My wall is at step sixty. Find yours.'],
    ['Same time, same place.', 'The habit lives in the place.'],
  ],
  safety: 'Gentle walking only. If you have a heart, lung, joint or balance condition, ask your doctor what is right for you. Then go outside.',
},

poster: {
  kicker: 'Bonus five: for the kitchen wall',
  title: "Five things I won't have in my house",
  items: [
    ['Eating standing up.', "Sit. The food isn't going anywhere, and neither are you."],
    ['Telephones at the table.', 'The table is for faces.'],
    ['Elevators.', "There isn't one, and I don't miss it. Take the stairs. Hold the rail."],
    ['Fuss.', 'Basta. Do the small thing and stop talking about it.'],
    ['People who say "at my age."', "I'm ninety-four. Don't."],
  ],
  sig: 'Nonna Rosa, 94',
},

smallprint: {
  kicker: 'The last page',
  title: 'The honest small print',
  lede: "Ascolta. This part matters, so I'll say it plainly.",
  items: [
    ["I'm not a real person.", 'Nonna Rosa is a fictional character created with AI. So are Giulia, Concetta, Salvatore, the town and the 112 steps. The habits in this book are real and ordinary: daylight, water, walking, sitting down to eat, rest and people. They have been part of everyday life in many places for a very long time. You don\'t need me to believe in them.'],
    ['This is not medical advice.', "It's general information about everyday habits. It doesn't diagnose, treat or cure anything, it isn't therapy, and it doesn't replace a doctor who knows you. If a doctor has told you how to eat, drink, move or rest, follow the doctor."],
    ['Move gently.', 'Go at your own pace. Stop if anything hurts or makes you dizzy or short of breath. If you have a condition, are pregnant or are recovering from something, ask your doctor before the movement week.'],
    ['Never the sea.', 'Nothing in this book asks you to swim, or to get into cold or open water. The sea is my story, not your homework.'],
    ['Food.', 'The kitchen cards are ordinary home recipes. Mind your allergies, cook fish all the way through, and keep leftovers in the fridge.'],
    ["When it's more than mornings.", 'Tiredness that never lifts, low mood most days, or weeks of bad sleep: see a doctor. If you are in a dark place or thinking about hurting yourself, call or text <strong>988</strong> in the US (988 Suicide &amp; Crisis Lifeline), free, any hour. In the UK and Ireland, call <strong>Samaritans</strong> on <strong>116&nbsp;123</strong>, free. Anywhere else, call your local emergency number.'],
    ['Your copy.', "This PDF is for you and your home. Print as many pages as you like. Please don't share or resell the file."],
  ],
  close: 'Now close the book, amore, and go open a window.',
},

};

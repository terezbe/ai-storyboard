// Page order for the whole book. Each entry: {id, title, render(num, ctx)}
const T = require('./templates');
const days = require('./days');
const F = require('./front');
const B = require('./back');

const COVER = {
  subtitle: "Nonna Rosa's old ways for stronger mornings",
  promise: 'One small habit a day to stop feeling old before 9&nbsp;a.m.',
  catchphrase: "The sea doesn't care how old you are.",
  byline: 'Nonna Rosa, 94',
};

module.exports = function (sample) {
  const P = [];
  const add = (id, title, render) => P.push({ id, title, render });

  add('cover', 'Cover', () => T.cover(COVER));
  if (sample) { add('day1', 'Day 1', (n) => T.day(days[0], n)); return P; }

  add('contents', 'Contents', (n, ctx) => T.contents(tocGroups(ctx), n));
  add('letter', 'A letter from Rosa', (n) => T.letter(F.letter, n));
  add('why', 'Why this works', (n) => T.prose(F.why, n, 'Why this works'));
  add('score', "Where you're starting", (n) => T.score(F.score, n));
  add('expect', 'What to expect', (n) => T.prose(F.expect, n, 'What to expect'));
  add('failure', "Salvatore's Rule", (n) => T.failure(F.failure, n));
  add('fit', 'Make it fit your life', (n) => T.prose(F.fit, n, 'Make it fit your life'));

  const week = (i) => add(F.weeks[i].id, `${F.weeks[i].num}: ${F.weeks[i].theme}`, (n, ctx) => T.weekOpener(F.weeks[i], n, days, ctx));
  const dayRange = (a, b) => { for (let k = a; k <= b; k++) { const d = days[k - 1]; add('day' + k, `Day ${k}: ${d.rule}`, (n) => T.day(d, n)); } };

  week(0); dayRange(1, 7);
  week(1); dayRange(8, 14);
  add('midpoint', 'Halfway: a letter for Day 15', (n) => T.midpoint(F.midpoint, n));
  week(2); dayRange(15, 21);
  week(3); dayRange(22, 30);

  add('rescore', 'Thirty mornings later', (n) => T.rescore(B.rescore, n));
  add('keep', 'Keep Five', (n) => T.keep(B.keep, n));
  add('drawer', "Rosa's drawer", (n, ctx) => T.drawer(B.drawer, n, ctx));
  add('quick', 'The 7-Morning Quickstart', (n, ctx) => T.quick(B.quick, n, ctx));
  add('fridge', 'The Fridge Sheet', (n) => T.fridge(B.fridge, n, days));
  add('kitchen1', "Rosa's Kitchen Cards (1 of 3)", (n) => T.kitchen(B.kitchen.slice(0, 2), n, B.breakfast, B.kitchenNote, 'Kitchen cards 1'));
  add('kitchen2', "Rosa's Kitchen Cards (2 of 3)", (n) => T.kitchen(B.kitchen.slice(2, 4), n, null, B.kitchenNote, 'Kitchen cards 2'));
  add('kitchen3', "Rosa's Kitchen Cards (3 of 3)", (n) => T.kitchen(B.kitchen.slice(4, 6), n, null, B.kitchenNote, 'Kitchen cards 3'));
  add('steps', 'The 112 Steps Card', (n) => T.steps(B.steps, n));
  add('poster', "Five Things I Won't Have in My House", (n) => T.poster(B.poster, n));
  add('smallprint', 'The honest small print', (n) => T.smallprint(B.smallprint, n));
  return P;
};

function tocGroups(ctx) {
  const p = ctx.pageOf;
  const dayRows = (a, b) => { const r = []; for (let k = a; k <= b; k++) r.push({ day: k, t: days[k - 1].rule, p: p('day' + k) }); return r; };
  return [
    { col: 1, head: 'Before you start', rows: [
      { t: 'A letter from Rosa', p: p('letter') },
      { t: 'Why this works', p: p('why') },
      { t: "Where you're starting", p: p('score') },
      { t: 'What to expect', p: p('expect') },
      { t: 'When you miss a morning', p: p('failure') },
      { t: 'Make it fit your life', p: p('fit') },
    ] },
    { col: 1, head: 'Week One &middot; Light and water', page: p('week1'), rows: dayRows(1, 7) },
    { col: 1, head: 'Week Two &middot; Gentle movement', page: p('week2'), rows: [...dayRows(8, 14), { t: 'Halfway: a letter for Day 15', p: p('midpoint') }] },
    { col: 2, head: 'Week Three &middot; Eating like Nonna', page: p('week3'), rows: dayRows(15, 21) },
    { col: 2, head: 'Week Four &middot; People and rest', page: p('week4'), rows: dayRows(22, 28) },
    { col: 2, head: 'The last two mornings', rows: dayRows(29, 30) },
    { col: 2, head: 'The ending', rows: [
      { t: 'Thirty mornings later', p: p('rescore') },
      { t: 'Keep Five', p: p('keep') },
    ] },
    { col: 2, head: "Rosa's drawer", page: p('drawer'), rows: [
      { t: 'The 7-Morning Quickstart', p: p('quick') },
      { t: 'The Fridge Sheet', p: p('fridge') },
      { t: "Rosa's Kitchen Cards", p: p('kitchen1') },
      { t: 'The 112 Steps Card', p: p('steps') },
      { t: "Five Things I Won't Have in My House", p: p('poster') },
      { t: 'The honest small print', p: p('smallprint') },
    ] },
  ];
}
module.exports.COVER = COVER;

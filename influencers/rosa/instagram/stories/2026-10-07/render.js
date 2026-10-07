// Renders Rosa's sales Story frames (1080x1920) in two versions: "nine" ($9 thank-you offer) and "twelve" (plain $12).
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const S = __dirname; // frames read src/ and write out/ next to this script
const ROSA = '/home/user/ai-storyboard/influencers/rosa';
const FONTS = `${ROSA}/product/build/fonts`;
const img = p => 'file://' + p;

const css = `
${fs.readFileSync(`${FONTS}/fonts-local.css`, 'utf8').replace(/url\('fonts\//g, `url('file://${FONTS}/`)}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1080px; height: 1920px; overflow: hidden; }
body { position: relative; background: #FBF6EC; color: #1E2C47; font-family: 'Lora', serif; }
.deep { background: #F3EADA; }
.tint { background: #DDEFEC; }
.abs { position: absolute; left: 0; right: 0; }
.kick { font-weight: 700; font-size: 30px; letter-spacing: 0.22em; text-transform: uppercase; color: #C8463A; text-align: center; }
h1 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 88px; line-height: 1.04; text-align: center; letter-spacing: -0.01em; padding: 0 70px; text-wrap: balance; }
h1 em { font-style: italic; color: #16696C; }
.sub { font-style: italic; font-size: 44px; line-height: 1.3; color: #A9372D; text-align: center; padding: 0 90px; text-wrap: balance; }
.sub b { font-style: normal; font-weight: 700; color: #1E2C47; }
.card { position: absolute; left: 50%; transform: translateX(-50%); background: #fff; border-radius: 10px; box-shadow: 0 18px 50px rgba(30,44,71,.22), 0 2px 6px rgba(30,44,71,.12); overflow: hidden; }
.card img { display: block; width: 100%; }
.arch { position: absolute; left: 50%; transform: translateX(-50%); border-radius: 330px 330px 18px 18px; overflow: hidden; box-shadow: 0 18px 50px rgba(30,44,71,.25); border: 10px solid #fff; }
.arch img { display: block; width: 100%; height: 100%; object-fit: cover; }
.today { position: absolute; left: 80px; right: 80px; background: #DDEFEC; border-left: 12px solid #1F8C8F; border-radius: 8px; padding: 40px 48px; }
.today .lbl { font-weight: 700; font-size: 28px; letter-spacing: 0.22em; color: #16696C; margin-bottom: 18px; }
.today .task { font-size: 50px; line-height: 1.3; color: #1E2C47; }
.today .hard { margin-top: 26px; font-style: italic; font-size: 38px; line-height: 1.35; color: #1E2C47; opacity: .82; }
.today .hard b { font-style: normal; }
.bleed { position: absolute; inset: 0; background-size: cover; background-position: center top; }
.veil { position: absolute; left: 0; right: 0; top: 0; height: 1000px; background: linear-gradient(#FBF6EC 0%, rgba(251,246,236,.95) 60%, rgba(251,246,236,0) 100%); }
`;

const page = body => `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`;

function frames(v) {
  const nine = v === 'nine';
  return [
    // 1. The thank-you (no sticker). Names Rosa as AI before any link.
    page(`
      <div class="abs kick" style="top:290px">Grazie, amore</div>
      <h1 class="abs" style="top:350px">1,000 of you.<br><em>For an AI nonna!</em></h1>
      <div class="arch" style="top:610px; width:620px; height:760px"><img src="${img(`${ROSA}/product/build/img/rosa-portrait.jpg`)}"></div>
      <div class="abs sub" style="top:1420px">${nine
        ? 'Two days ago we were 355. So, a little thank-you, <b>until Sunday.</b>'
        : 'Two days ago we were 355. So today I open my book for you.'}</div>`),
    // 2. The book + price + first link.
    `<!--deep-->` + page(`
      <h1 class="abs" style="top:280px">30 mornings.<br><em>One small rule each.</em></h1>
      <div class="card" style="top:520px; width:540px"><img src="${img(`${S}/src/p-01.png`)}"></div>
      <div class="abs sub" style="top:1245px">${nine
        ? 'My thank-you: <b>$9 until Sunday night.</b> Then $12, like always.'
        : 'Thirty pages, one a morning. <b>$12.</b> Tap below.'}</div>`),
    // 3. The free gift: Day 1, readable. Poll goes under it.
    page(`
      <h1 class="abs" style="top:280px">Day 1, free.<br><em>You don't need the sea.</em></h1>
      <div class="card" style="top:520px; width:920px"><img src="${img(`${S}/src/day1-head.png`)}"></div>
      <div class="today" style="top:790px">
        <div class="lbl">TOMORROW MORNING</div>
        <div class="task">Before the telephone, open the window wide. One minute, light on your face.</div>
        <div class="hard"><b>Hard day?</b> Pull the curtains wide and switch on the brightest light.</div>
      </div>`),
    // 4. The objection ("I'll fall behind") + the whole system on one page + second link.
    `<!--deep-->` + page(`
      <h1 class="abs" style="top:280px">Miss a morning?<br><em>Just do the next page.</em></h1>
      <div class="card" style="top:520px; width:540px"><img src="${img(`${S}/src/p-48.png`)}"></div>
      <div class="abs sub" style="top:1245px">Salvatore's Rule, my husband's. All 30 rules fit on one fridge sheet.</div>`),
    // 5. The close: reason to act today + AI and not-your-doctor line + third link.
    page(`
      <div class="bleed" style="background-image:url('${img(`${ROSA}/locations/1-kitchen.jpg`)}')"></div>
      <div class="veil"></div>
      <h1 class="abs" style="top:290px">Start tomorrow<br><em>with all 30.</em></h1>
      <div class="abs sub" style="top:520px">${nine ? '<b>$9 until Sunday night.</b><br>' : ''}Your AI nonna, not your doctor.</div>`),
  ].map(h => h.startsWith('<!--deep-->') ? h.slice(11).replace('<body>', '<body class="deep">') : h);
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const pg = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const v of ['nine', 'twelve']) {
    const dir = path.join(S, 'out', v);
    fs.mkdirSync(dir, { recursive: true });
    const fr = frames(v);
    for (let i = 0; i < fr.length; i++) {
      const f = path.join(S, 'out', `_tmp.html`);
      fs.writeFileSync(f, fr[i]);
      await pg.goto('file://' + f);
      await pg.evaluate(() => document.fonts.ready);
      await pg.waitForTimeout(150);
      await pg.screenshot({ path: path.join(dir, `story-${i + 1}.jpg`), type: "jpeg", quality: 92 });
    }
  }
  await browser.close();
})();

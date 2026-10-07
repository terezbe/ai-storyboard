// Store images: cover.png, store-checkout-1920x1080.png, store-thumbnail-1080x1080.png
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const ROOT = __dirname, OUT = path.resolve(ROOT, '..');
const SHOTS = path.join(ROOT, 'shots'); fs.mkdirSync(SHOTS, { recursive: true });
const fontsCss = fs.readFileSync(path.join(ROOT, 'fonts', 'fonts-local.css'), 'utf8');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  // 1) page screenshots straight from the final book HTML (vector text, no PDF rasterising)
  const shoot = async (scale, pages) => {
    const ctx = await browser.newContext({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: scale });
    const pg = await ctx.newPage();
    await pg.goto('file://' + path.join(ROOT, 'book-final.html'), { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready);
    for (const [n, file] of pages) {
      const el = (await pg.$$('section.page'))[n - 1];
      await el.screenshot({ path: file });
    }
    await ctx.close();
  };
  await shoot(1275 / 816, [[1, path.join(OUT, 'cover.png')]]);                 // 1275 x 1650 = Letter at 150 dpi
  await shoot(1.5, [[1, path.join(SHOTS, 'cover.png')], [10, path.join(SHOTS, 'day1.png')], [48, path.join(SHOTS, 'fridge.png')], [49, path.join(SHOTS, 'kitchen.png')]]);

  // 2) mockups
  const img = (f) => 'file://' + path.join(SHOTS, f);
  const base = `<style>${fontsCss.replace(/url\('fonts\//g, "url('file://" + path.join(ROOT, 'fonts') + "/")}
    * { box-sizing: border-box; } html, body { margin: 0; }
    body { position: relative; overflow: hidden; font-family: 'Lora', serif; color: #fff;
      background: radial-gradient(ellipse at 70% 45%, #2B4A6B 0%, #1E2C47 55%, #16213A 100%); }
    .lemon { position: absolute; left: 0; right: 0; height: 10px; background: #F2CC55; }
    .p { position: absolute; display: block; border-radius: 3px; box-shadow: 0 30px 60px rgba(9, 30, 40, 0.38), 0 6px 14px rgba(9, 30, 40, 0.25); }
    .kicker { font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: #F2CC55; }
    h1 { margin: 0; font-family: 'Fraunces', serif; font-weight: 600; line-height: 0.98; letter-spacing: -0.01em; }
    h1 i { font-weight: 400; color: #FBF0CC; }
    .sub { font-style: italic; color: #FBF6EC; }
    .promise { font-family: 'Fraunces', serif; font-weight: 600; color: #fff; }
    .facts { color: #FBF0CC; letter-spacing: 0.04em; }
    .facts b { color: #fff; font-weight: 600; }
  </style>`;
  const checkout = `<!doctype html><html><head><meta charset="utf-8">${base}<style>
    body { width: 1920px; height: 1080px; }
    .lemon { bottom: 0; }
    .text { position: absolute; left: 120px; top: 190px; width: 760px; }
    .kicker { font-size: 21px; }
    h1 { font-size: 104px; margin-top: 26px; }
    .sub { font-size: 34px; margin-top: 30px; }
    .promise { font-size: 38px; line-height: 1.2; margin-top: 46px; max-width: 700px; }
    .facts { font-size: 23px; margin-top: 46px; line-height: 1.6; }
    .left  { height: 800px; left: 850px;  top: 160px; transform: rotate(-9deg); }
    .right { height: 800px; left: 1290px; top: 150px; transform: rotate(8deg); }
    .cover { height: 880px; left: 1040px; top: 100px; transform: rotate(-1.5deg); }
  </style></head><body>
    <div class="text">
      <div class="kicker">A 30-day challenge &middot; printable PDF</div>
      <h1><i>The 30-Day</i><br>Morning Reset</h1>
      <div class="sub">Nonna Rosa’s old ways for stronger mornings</div>
      <div class="promise">One small habit a day to stop feeling old before 9&nbsp;a.m.</div>
      <div class="facts"><b>30</b> daily pages &middot; <b>4</b> themed weeks &middot; <b>5</b> bonuses<br><b>54</b> pages, US Letter</div>
    </div>
    <img class="p left" src="${img('day1.png')}"><img class="p right" src="${img('kitchen.png')}"><img class="p cover" src="${img('cover.png')}">
    <div class="lemon"></div>
  </body></html>`;
  const thumb = `<!doctype html><html><head><meta charset="utf-8">${base}<style>
    body { width: 1080px; height: 1080px; }
    .lemon { bottom: 0; }
    .left  { height: 690px; left: 108px; top: 300px; transform: rotate(-10deg); }
    .right { height: 690px; left: 446px; top: 292px; transform: rotate(9deg); }
    .cover { height: 760px; left: 246px; top: 250px; transform: rotate(-1.5deg); }
    .head { position: absolute; left: 0; right: 0; top: 52px; text-align: center; }
    .kicker { font-size: 18px; }
    h1 { font-size: 74px; margin-top: 16px; }
    .sub { font-size: 27px; margin-top: 14px; }
  </style></head><body>
    <div class="head"><div class="kicker">A 30-day challenge &middot; Nonna Rosa, 94</div><h1><i>The 30-Day</i> Morning Reset</h1><div class="sub">Nonna Rosa’s old ways for stronger mornings</div></div>
    <img class="p left" src="${img('day1.png')}"><img class="p right" src="${img('fridge.png')}"><img class="p cover" src="${img('cover.png')}">
    <div class="lemon"></div>
  </body></html>`;
  const render = async (html, w, h, out) => {
    const f = path.join(ROOT, 'mock-' + path.basename(out, '.png') + '.html');
    fs.writeFileSync(f, html);
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    await pg.goto('file://' + f, { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: out });
    await ctx.close();
  };
  await render(checkout, 1920, 1080, path.join(OUT, 'store-checkout-1920x1080.png'));
  await render(thumb, 1080, 1080, path.join(OUT, 'store-thumbnail-1080x1080.png'));
  await browser.close();
  console.log('images written');
})();

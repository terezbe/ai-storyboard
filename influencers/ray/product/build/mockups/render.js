// Render the two store images from small HTML mockups.
// store-checkout-1920x1080.png and store-thumbnail-1080x1080.png, saved in product/.
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

const HERE = __dirname;
const OUT = path.join(HERE, '..', '..');
const F = path.join(HERE, '..', 'fonts');

const fonts = `
@font-face { font-family: 'Young Serif'; src: url('file://${F}/YoungSerif-Regular.ttf'); }
@font-face { font-family: 'Source Serif 4'; src: url('file://${F}/SourceSerif4-Regular.ttf'); font-weight: 400; }
@font-face { font-family: 'Source Serif 4'; src: url('file://${F}/SourceSerif4-SemiBold.ttf'); font-weight: 600; }
@font-face { font-family: 'Source Serif 4'; src: url('file://${F}/SourceSerif4-Italic.ttf'); font-style: italic; }
:root { --navy:#24304A; --navy-deep:#1B2438; --cream:#F2EAD9; --paper:#FBF7EF; --tweed:#6E5746; --green:#9DAA8A; --green-pale:#E3E7D8; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Source Serif 4', serif; color: var(--cream); overflow: hidden; }
.bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 68% 50%, #33436A 0%, #26324D 45%, #1B2438 100%); }
.pg { position: absolute; background-size: cover; background-position: center; border-radius: 4px;
      box-shadow: 0 26px 60px rgba(8,12,22,0.55), 0 4px 12px rgba(8,12,22,0.35); }
.label { font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; color: #C9B9A2; }
.title { font-family: 'Young Serif', serif; line-height: 1.0; color: #FBF4E6; letter-spacing: -0.01em; }
.sub { font-style: italic; color: #DCCFBA; }
.promise { font-weight: 600; color: #FBF4E6; }
.rule { height: 0; border-top: 2px solid var(--green); }
.inside { list-style: none; color: #E6DCCB; }
.inside li { position: relative; }
.inside li::before { content: ''; position: absolute; left: 0; width: 10px; height: 10px; border-radius: 2px; background: var(--green); }
.by { font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #C9B9A2; }
`;

const img = (f) => `url('file://${path.join(HERE, f)}')`;

const checkout = `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
body { width: 1920px; height: 1080px; position: relative; }
.copy { position: absolute; left: 112px; top: 168px; width: 820px; }
.label { font-size: 19px; }
.title { font-size: 88px; margin-top: 24px; }
.sub { font-size: 31px; line-height: 1.3; margin-top: 26px; }
.promise { font-size: 31px; line-height: 1.36; margin-top: 34px; }
.rule { margin: 40px 0 30px; width: 120px; }
.inside li { font-size: 24px; line-height: 1.3; padding-left: 28px; margin-bottom: 13px; }
.inside li::before { top: 11px; }
.by { font-size: 18px; margin-top: 34px; }
.ground { position: absolute; left: 980px; top: 140px; width: 820px; height: 820px; border-radius: 50%;
          background: radial-gradient(circle, rgba(157,170,138,0.30) 0%, rgba(157,170,138,0.10) 55%, rgba(157,170,138,0) 72%); }
</style></head><body>
<div class="bg"></div>
<div class="ground"></div>
<div class="pg" style="width:520px;height:736px;left:972px;top:196px;transform:rotate(-9deg);background-image:${img('page-drips.png')}"></div>
<div class="pg" style="width:520px;height:736px;left:1296px;top:186px;transform:rotate(8deg);background-image:${img('page-example.png')}"></div>
<div class="pg" style="width:566px;height:800px;left:1108px;top:140px;transform:rotate(-1.5deg);background-image:${img('page-cover.png')}"></div>
<div class="copy">
  <div class="label">A reckoning and ritual workbook</div>
  <div class="title">The Quiet Money<br>Workbook</div>
  <div class="sub">Ray&rsquo;s one honest sitting<br>and a fifteen-minute Sunday ritual</div>
  <div class="promise">Find the leaks in one sitting. Then open the bank app without the knot in your stomach.</div>
  <div class="rule"></div>
  <ul class="inside">
    <li>48 printable A4 pages to fill in</li>
    <li>The Leak Hunt: one guided evening, done once</li>
    <li>Seven named rules, one a week</li>
    <li>Twelve weeks of fifteen-minute Sunday Sums</li>
    <li>Five extras, including a cut-out fridge card</li>
  </ul>
  <div class="by">By Ray, 71, retired plumber</div>
</div>
</body></html>`;

const thumb = `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
body { width: 1080px; height: 1080px; position: relative; }
.bg { background: radial-gradient(ellipse at 50% 64%, #33436A 0%, #26324D 48%, #1B2438 100%); }
.head { position: absolute; left: 0; right: 0; top: 74px; text-align: center; }
.label { font-size: 17px; }
.title { font-size: 70px; margin-top: 20px; }
.sub { font-size: 26px; margin-top: 16px; }
.ground { position: absolute; left: 190px; top: 330px; width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(157,170,138,0.30) 0%, rgba(157,170,138,0.10) 55%, rgba(157,170,138,0) 72%); }
</style></head><body>
<div class="bg"></div>
<div class="ground"></div>
<div class="head">
  <div class="label">A reckoning and ritual workbook</div>
  <div class="title">The Quiet Money Workbook</div>
  <div class="sub">Ray&rsquo;s one honest sitting and a fifteen-minute Sunday ritual</div>
</div>
<div class="pg" style="width:400px;height:566px;left:190px;top:420px;transform:rotate(-10deg);background-image:${img('page-drips.png')}"></div>
<div class="pg" style="width:400px;height:566px;left:490px;top:420px;transform:rotate(9deg);background-image:${img('page-example.png')}"></div>
<div class="pg" style="width:436px;height:617px;left:322px;top:372px;transform:rotate(-1.5deg);background-image:${img('page-cover.png')}"></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const [name, html, w, h] of [
    ['store-checkout-1920x1080.png', checkout, 1920, 1080],
    ['store-thumbnail-1080x1080.png', thumb, 1080, 1080],
  ]) {
    const file = path.join(HERE, name.replace('.png', '.html'));
    fs.writeFileSync(file, html);
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto('file://' + file, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, name), clip: { x: 0, y: 0, width: w, height: h } });
    await page.close();
    console.log('wrote', name);
  }
  await browser.close();
})();

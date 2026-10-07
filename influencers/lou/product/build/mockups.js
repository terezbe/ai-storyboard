// Store images for "Don't Text. Call.": node mockups.js  (run after build.js)
// 1) screenshots real pages from book.html, 2) composes the store mockups.
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

const ROOT = __dirname;
const OUT = path.resolve(ROOT, '..');
const MOCK = path.join(ROOT, 'mock');
fs.mkdirSync(MOCK, { recursive: true });

const fontFace = ['400', '600', '700'].map(w => `@font-face{font-family:'Fraunces';font-weight:${w};src:url('../fonts/Fraunces-${w}.ttf')}`).join('') +
  `@font-face{font-family:'Fraunces';font-style:italic;font-weight:400;src:url('../fonts/Fraunces-400i.ttf')}` +
  ['400', '600'].map(w => `@font-face{font-family:'Source Serif 4';font-weight:${w};src:url('../fonts/SourceSerif4-${w}.ttf')}`).join('') +
  `@font-face{font-family:'Source Serif 4';font-style:italic;font-weight:400;src:url('../fonts/SourceSerif4-400i.ttf')}`;

async function shootPages(browser) {
  // cover.png at US Letter 150 dpi (1275 x 1650), plus 2x page renders for the mockups
  const book = 'file://' + path.join(ROOT, 'book.html');
  const ctx1 = await browser.newContext({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 1275 / 816 });
  const p1 = await ctx1.newPage();
  await p1.goto(book, { waitUntil: 'load' });
  await p1.evaluate(() => document.fonts.ready);
  await (await p1.$('#cover')).screenshot({ path: path.join(OUT, 'cover.png') });
  await ctx1.close();

  const ctx2 = await browser.newContext({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2 });
  const p2 = await ctx2.newPage();
  await p2.goto(book, { waitUntil: 'load' });
  await p2.evaluate(() => document.fonts.ready);
  // resolve page numbers exactly as build.js does
  await p2.evaluate(() => {
    const pages = [...document.querySelectorAll('.page')];
    pages.forEach((p, i) => { const n = p.querySelector('.pno'); if (n) n.textContent = String(i + 1); });
    document.querySelectorAll('[data-ref]').forEach(el => {
      const t = document.getElementById(el.dataset.ref);
      el.textContent = t ? String(pages.indexOf(t.closest('.page')) + 1) : '??';
    });
  });
  for (const id of ['cover', 'index', 'card-7']) {
    await (await p2.$('#' + id)).screenshot({ path: path.join(MOCK, `${id}.png`) });
  }
  await ctx2.close();
}

const shared = `
  *{box-sizing:border-box;margin:0;padding:0}
  ${fontFace}
  body{width:var(--w);height:var(--h);overflow:hidden;position:relative;
    background:radial-gradient(ellipse at 68% 50%, #F4F7FA 0%, #E3EBF3 46%, #CBD9E7 100%);
    font-family:'Source Serif 4',Georgia,serif;color:#2A231D}
  .grain{position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.035) 0 2px,rgba(0,0,0,.02) 2px 4px);pointer-events:none}
  .sheet{position:absolute;background:#FBF7EF;box-shadow:0 26px 60px rgba(40,52,30,.30),0 6px 16px rgba(40,52,30,.20);border-radius:3px;overflow:hidden}
  .sheet img{display:block;width:100%;height:100%}
  .eyebrow{font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#8A6A22}
  .title{font-family:'Fraunces',serif;font-weight:700;color:#2E3A1E;line-height:.95;letter-spacing:-.01em}
  .title .b{color:#B8913A}
  .sub{font-family:'Fraunces',serif;font-style:italic;color:#6B4529}
  .rule{height:0;border-top:2px solid #B8913A}
`;

function checkoutHTML() {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  :root{--w:1920px;--h:1080px}
  ${shared}
  .copy{position:absolute;left:112px;top:0;bottom:0;width:600px;display:flex;flex-direction:column;justify-content:center}
  .copy .eyebrow{font-size:19px;margin-bottom:24px}
  .copy .title{font-size:116px}
  .copy .sub{font-size:31px;line-height:1.3;margin:28px 0 30px;max-width:560px}
  .copy .rule{width:110px;margin-bottom:28px}
  .copy .promise{font-size:29px;line-height:1.4;max-width:560px;color:#2A231D}
  .copy .by{margin-top:32px;font-size:18px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:#4A5A31}
  .s1{width:520px;height:673px;left:742px;top:238px;transform:rotate(-8deg)}
  .s2{width:540px;height:699px;left:985px;top:196px;transform:rotate(-2deg)}
  .s3{width:590px;height:763px;left:1238px;top:160px;transform:rotate(4deg);box-shadow:0 34px 70px rgba(30,40,22,.38),0 8px 18px rgba(30,40,22,.25)}
  </style></head><body><div class="grain"></div>
  <div class="copy">
    <div class="eyebrow">A swipe file by Grandpa Lou</div>
    <div class="title">Don&rsquo;t Text.<br><span class="b">Call.</span></div>
    <div class="sub">Grandpa Lou&rsquo;s swipe file for the moments you don&rsquo;t know what to say</div>
    <div class="rule"></div>
    <div class="promise">Word-for-word scripts for the 25 moments that keep you up at night</div>
    <div class="by">Grandpa Lou, 90, married 65 years</div>
  </div>
  <div class="sheet s1"><img src="index.png"></div>
  <div class="sheet s2"><img src="card-7.png"></div>
  <div class="sheet s3"><img src="cover.png"></div>
  </body></html>`;
}

function thumbHTML() {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  :root{--w:1080px;--h:1080px}
  ${shared}
  body{background:radial-gradient(ellipse at 50% 55%, #F4F7FA 0%, #E3EBF3 50%, #C8D7E6 100%)}
  .t1{width:540px;height:699px;left:70px;top:236px;transform:rotate(-8deg)}
  .t2{width:620px;height:802px;left:368px;top:176px;transform:rotate(3deg);box-shadow:0 34px 70px rgba(30,40,22,.38),0 8px 18px rgba(30,40,22,.25)}
  .tag{position:absolute;left:0;right:0;top:56px;text-align:center;font-size:24px}
  .tag span{display:inline-block;background:#4A5A31;color:#FBF7EF;padding:12px 26px;border-radius:40px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:21px}
  </style></head><body><div class="grain"></div>
  <div class="tag"><span>25 word-for-word scripts</span></div>
  <div class="sheet t1"><img src="card-7.png"></div>
  <div class="sheet t2"><img src="cover.png"></div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  await shootPages(browser);

  const jobs = [
    ['checkout.html', checkoutHTML(), 1920, 1080, 'store-checkout-1920x1080.png'],
    ['thumb.html', thumbHTML(), 1080, 1080, 'store-thumbnail-1080x1080.png'],
  ];
  for (const [file, src, w, h, out] of jobs) {
    fs.writeFileSync(path.join(MOCK, file), src);
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    await pg.goto('file://' + path.join(MOCK, file), { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: path.join(OUT, out) });
    await ctx.close();
    console.log('wrote', out);
  }
  await browser.close();
  console.log('wrote cover.png');
})();

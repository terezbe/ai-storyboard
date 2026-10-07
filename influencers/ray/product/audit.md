# Audit log: The Quiet Money Workbook (Ray)

This log records what the checks actually found and what was changed, in the order it happened. Nothing here is invented to look thorough. Where a check found nothing, it says so.

**Final state:** `the-quiet-money-workbook.pdf`, 48 pages, A4 (594.96 x 841.92 pt), 1.2 MB. All fonts are embedded as subsets: Young Serif, Source Serif 4 (four styles), Reenie Beanie and Zeyada.

---

## 1. Systematic checks

### Automated checks, run on every build

- **Overflow and fill (`build.js`).** Every page is a fixed A4 sheet. The script measures every element against the page's content box and flags anything that crosses it. It also flags any page filled below 55%. **Final build: 0 problems on 48 pages.**
- **Page count.** PDF pages = DOM pages = 48, so no unit spilled onto an extra page.
- **Contents and titles (`verify.py`, which reads the PDF itself with `pdftotext`):**
  - All 48 unit titles are on the pages the page map says.
  - All 35 contents entries print the real page number.
  - No unresolved page reference ("??") remains anywhere.
  - No em dash, en dash, ellipsis, arrow, tick or box glyph appears in the PDF text.
  - The same characters (and their HTML entities) were also grepped out of every source file. None found.
- **Fonts (`pdffonts`).** Every font is embedded. There are no fallback fonts and no missing-glyph boxes.

### Visual check: every page rendered at 50 dpi and looked at

- Every unit is present and in order, one per page: 9 front matter, 9 Leak Hunt, 8 Rules, 17 Sunday Sums, 5 bonuses, 1 small print.
- Nothing bleeds onto the next page, and no page is near-empty.
- Every tick-box is drawn (CSS cells, not glyphs), and every fill-in line is present.
- No table header wraps.
- The twelve Sunday Sums pages are identical except for the week number and the progress bar.

### What the systematic checks found, and the fixes

**Phase 2b sample (Step 4, The Drips):**
- About 13 mm of overflow pushed the "What I noticed" lines into the frame.
- A CSS selector bug stopped the noticed label sharing a row with its line.
- The total row drew empty bordered cells.
- The table caption didn't show the question.
- All four were fixed before anything else was written. Details are in `spec.md` (Sample record).

**Batch 1 (Leak Hunt):**
- The Part One opener's strip repeated "Part One". Replaced with "Steps 1 to 8".
- Find the Stopcock and The Mains overflowed by a few mm. Fixed with one fewer envelope row and a compact sums panel.
- Small Leaks, No Pile, What's Owed and Pressure Reading had 20 to 40 mm of dead space. That space became writing room: extra rows, plus the calm, "proudest of tonight" and "first job" lines on the Pressure Reading.
- I typed an en dash into the "A-B" label myself. It was caught before the first build and replaced with a hyphen.

**Batch 2 (Rules):**
- All seven rule pages had 40 to 60 mm gaps. Each got "The honest bit" and a slightly larger reading size; see `spec.md`, Build notes.
- "twenty-ninth" split across two lines at its hyphen. It now stays on one line.
- The Part Two opener footnote ("a made-up one at that") broke Ray's voice mid-book. Rewritten; the AI disclosure stays in the small print, where it belongs.

**Batch 3 (Sunday Sums):**
- The weekly checks row wrapped into ragged two-line labels. Moved into a two-row panel.
- The pipework hint forced a taller row. Shortened.
- Table rows at 6.9 mm were tight for handwriting. Raised to 7.5 mm.
- In Ray's worked example, the handwriting font's ampersand looked like a cent sign ("gas ¢ elec"). Replaced with "+".
- The example was missing annotation markers 4 and 5, and the next-week row printed "The Friday Fish" twice. Both fixed.
- The midpoint letter and the end page had large gaps. Fixes:
  - The letter is set at letter size and gained a P.S. pointing to the failure page.
  - Its look-back panel now copies the Week 1 to 3 calm scores.
  - The end page gained writing room and a "first Sunday in my own notebook" line.

**Batch 4 (front matter):**
- On the cover, the green band ran over the frame lines, and there was dead space under the promise line. The band is now inside the frame, the portrait is larger, and the promise line is centred.
- On What to Expect, the week-three highlight showed white seams between grid cells. It is now one whole-row highlight, and the label column is wider so labels stop wrapping three deep.
- The failure page and page 9 had gaps. Fixes:
  - A larger reading size on both.
  - A "plan for it now" pre-commitment block on the failure page.
  - A "My school" tick-choice on page 9.
  - "Very little coming in" moved to page 8 to balance the pair.

**Batch 5 (back):**
- On the Twenty-Minute Leak Hunt, a fixed-width fill-in line ran past the right margin in a narrow grid cell. Made flexible.
- The 1987 notebook's handwriting sat about 2 mm above the ruled lines because of the font's descent. Offset corrected.
- "IN" in the notebook font read as "W". Changed to "In".
- The fridge card's Bucket Rule ladder wrapped "new." onto its own line. Column widened.
- "ten-minute" split at its hyphen. Kept together.

**Full build:**
- One regression: keeping "call-outs" whole pushed The Mains a line over the edge. Fixed by trimming the paragraph by a few words; the overflow check caught it.
- The first `verify.py` run flagged all twelve weekly pages. That was **a false alarm in my own script**: it searched for the internal title ("Sunday Sums, Week One") instead of the printed "Week 1 of 12". I fixed the script, not the book.

---

## 2. Buyer-eyes read

I pulled the full text out of the PDF and read it through as a sceptical customer. I also ran a phrase-repetition scan: every five-word sequence appearing on more than one prose page, with the twelve identical weekly templates excluded.

### Found and fixed

**Repetition a reader would notice:**
- "Forty-six years" appeared four times. Now twice.
- The "a rubber's cheaper..." joke was on page 10 and page 21. It now lives only on page 21, and the letter's P.S. ("pencil, not pen, you'll see why") pays off there.
- The mantelpiece image appeared four times. Rule 1's two mentions were changed, leaving three deliberate callbacks to the 1983 gas bill.
- "Maureen does the shopping column, I do the rest" was near-identical on pages 8, 27 and 28. It is now said once, on page 27; the other two are reworded.
- "Overtime and call-outs came in fits and starts" appeared on pages 8 and 12. Page 8 rewritten ("three boilers one week, a washer the next").
- "What actually landed. Not what you..." appeared on pages 8 and 12. Page 8 rewritten.
- "And most people never do" appeared on pages 6 and 18. Page 6 rewritten.
- "Where most people stop" appeared three times. Now twice.
- "Rule it up like these pages" appeared on pages 27 and 42. Page 27 rewritten.
- The Shed Door List copied the rule's day-thirty wording word for word. Rewritten as a decision guide.

**Patterns and phrasing:**
- "Same chair, same brew, same rows" was a third "same X, same Y, same Z" triplet. Rewritten.
- In Rule 7, "put an envelope... and put ten pound in it" was clumsy. Rewritten.

**My own logic error, introduced while fixing the Shed Door List.** The new line said "One of each? Leave it another month." That would tell a reader who can pay but no longer wants the thing to keep waiting. Corrected to "Still want it, but can't pay outright yet? Leave it on. Gone off it? Cross it off."

**Accuracy and hedging:**
- "New habits took most people around two months" overstated the study, which reported an average with a wide spread. Now: "around two months, on average... and some people a lot longer".
- "A budget with no give in it lasts about three weeks" read as invented precision. Now: "holds for a few weeks".

**Bible detail:** the one unused bible detail, the 1989 calculator's sticking seven, now appears in Ray's worked example.

### Checked and found clean

- **British spelling:** no American spellings found.
- **Brands:** no brand or company names. The only organisations named are the free help services: MoneyHelper, StepChange, Citizens Advice, the NFCC, the National Domestic Abuse Helpline, the National Domestic Violence Hotline, Samaritans and 988.
- **Currency:** no £ or $ in the book's fill-in machinery. Money columns read "Amount"; Ray's own examples give pounds in words.
- **Ray's sums:** the 2026 example adds up to 435.30 out and 77.10 left. The 1987 page adds up to 97.29 out and 61.91 left, matching its margin sums.
- **Consistency with Ray's bible:**
  - Mr Hargreaves, 1971.
  - Forty-six years in the trade.
  - The house paid off at forty-one.
  - January 1983 and the gas bill.
  - Forty-one notebooks, in pencil, in a shoebox in the wardrobe.
  - The 1989 calculator.
  - The 2004 van at 191,000 miles: "She's not pretty. She's paid for."
  - The shed's jam jars.
  - Sunday Sums after dinner, with Maureen's shopping column.
  - The 1979 teapot cosy.
  - The Friday fish: "budgeted, written down, enjoyed".
  - The cheap biscuits and Maureen's hidden ones.
  - The "he has never" list.
  - The four-quid coffee, buy now pay later, "love" and "lads in gilets".
  - Nothing contradicts the bible.
- **Coordinator's locked lines:** all present as given.
  - "Would I buy this again today?" is next to every outgoing.
  - "When I find a leak, I don't start fixing. I turn the water off and I look."
  - Fifty quid, the shed door list, thirty days, "no guilt, no fuss", the 2012 pressure washer.
  - "Last week's money, then next week's money."
  - The pasties at 2.40 with "hungry? No. Bored."
  - Gary's 1991 bike at sixty-two pound, with the star.
  - "I am the warranty."
  - "Skint isn't a character flaw. It's a maths problem."
- **Safety pass:**
  - No investment, product or provider advice, and no promised savings.
  - Debt order gives both schools and the reader picks.
  - Priority debts come first.
  - Serious cases go to free, impartial help, framed as the strong move.
  - Economic abuse is named, with real helplines.
  - A crisis line is given.
  - The AI disclosure is plain and warm on page 48 and in the delivery email.
  - The catchphrase appears on the cover and at exactly two designed moments inside (pages 3 and 42).

### Looked at and deliberately left alone

- **Some natural lists of three remain** (for example "food, steps or spending"). Lists elsewhere run to two, four, five or seven items, so the pattern isn't mechanical. "Budgeted, written down, enjoyed." is a verbatim bible line.
- **The free-help organisations appear on page 9 and again on page 48.** That is deliberate: the serious-case route and the small print should both carry them.
- **The fridge card repeats the ritual and the rule names.** It is the condensed printable, by design.
- **Hairlines in table rows vary slightly in weight in the 50 to 220 dpi previews.** That is rasteriser snapping on a vector PDF, not a defect in the file.
- **`pdftotext` shows letter-spaced headings with odd gaps (for example "WORKBO OK").** That is an extraction artefact of letter-spacing and isn't visible on the page.

## 3. Known limits, stated honestly

- The PDF isn't fillable with typed form fields. It is built to be printed, or written on in a PDF annotation app. This is listed as the one next upgrade in `sales-kit.md`.
- Ray's figures are illustrative, and the small print on page 48 says so.

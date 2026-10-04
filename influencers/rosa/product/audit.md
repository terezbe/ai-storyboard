# Audit: The 30-Day Morning Reset (Rosa, 94)

- **Final file:** `The-30-Day-Morning-Reset.pdf`, 54 pages, US Letter (612 x 792 pt), 2.3 MB.
- **Fonts:** Fraunces and Lora only, all embedded as CID TrueType subsets. No Type 3 fonts and no system fallbacks.

This log lists what the checks actually found and what was changed. Where a check found nothing, it says so.

## How the audit was run

1. **Overflow and fill check.** Every build measures each page's content box in Chromium before printing. It reports any overflow (vertical or horizontal) and how full each page is.
2. **Text gate.** The build refuses to run if the text contains an em dash (U+2014), an en dash (U+2013), an arrow, a dingbat tick or star, or a ballot-box glyph. The final PDF text was also scanned for the same characters and for straight quotes.
3. **Page-number verification** (`build/verify-toc.py`). Contents entries are parsed from the built PDF using word coordinates. Each target page is then opened, and the script checks that the entry's title is really on it. For day entries it also checks "Day N of 30". The same check runs on:
   - every week-opener map row
   - the bonus index on the drawer page
   - the Quickstart's "Day N, page P" references
   - every "page N" mention in the running text
4. **Visual pass.** Every page was rendered with `pdftoppm -r 50` and looked at in 6-page contact sheets. This happened after the first build and again after the fixes. Dense pages were zoomed to 90 to 110 dpi: the cover, contents, letter, Why, Day 13, Fridge Sheet and kitchen cards.
5. **Buyer-eyes read.** The full extracted text of all 54 pages was read as a sceptical customer. Scripts then counted:
   - repeated 5-word phrases across pages
   - Italian words and Rosa's verbal tics
   - British spellings and vocabulary
   - health-claim words

## Systematic check: found and fixed

| # | Found | Fix |
|---|---|---|
| 1 | Sample gate: the "Too much today?" label is semibold italic Lora, a face I had not downloaded. Chrome synthesized it, and `pdffonts` showed Type 3 fonts in the sample PDF. | Downloaded Lora 600 and 700 italic and Fraunces 700 italic. The PDF now has zero Type 3 fonts. |
| 2 | Sample gate, cover: the promise line wrapped with "9 a.m." alone on the last line. The kicker "A 30-day challenge" repeated "30-Day" from the title. The turquoise band had about 1 inch of dead space at the bottom. | Balanced wrap (two even lines), dropped the kicker, rebalanced the band type. |
| 3 | First full build: 3 overflowing pages. **p7**: the tilted "Salvatore's little book" box poked past the right edge. **p34**: the Week Four opener lists 9 mornings, which pushed the Get ready box off the page. **p48**: the Fridge Sheet key wrapped onto two lines and clipped the last line. | Smaller tilt plus a margin. A compact layout for the long week opener (smaller arch photo, tighter rows). A one-line key. Forcing that key onto one line then overflowed sideways, so the key now shows the theme names only. Every cell already carries its day number. |
| 4 | Underfilled and unbalanced pages. The failure page was at 75%. Day pages left 0.8 to 1.6 inches of empty space under "What I noticed". The midpoint letter, the 112 Steps card, the poster and kitchen page 1 (80%) were light. | Larger type on the failure page. The build now extends the "What I noticed" ruled lines into the space each page has left, so every day page ends on one baseline. These are real vector lines, at least 3 and up to 7 per page, 93 added in all. Larger type on the midpoint letter, poster and steps card. Kitchen page 1 gained a small "Rosa's breakfast" card mined from the bible's food list, taking it to 97%. |
| 5 | Legibility: at small sizes Fraunces' flat-topped 3 reads like a 5 ("13" and "15", "33" and "35"). That matters in a book navigated by day number. | All navigation numerals now use Lora: page numbers, contents, week maps, Fridge Sheet, the day number in each header, and the numbered lists. |
| 6 | Contents check, first run: 19 failures. All of them came from my own two-column text parser. No page number was wrong. After rewriting the parser with word coordinates, one real mismatch remained. The contents said "Halfway: a letter for Day 15", but the page's wording is "A letter for Day 15" / "Halfway, amore." | Renamed the contents entry to match the page. **Final: 49 of 49 contents entries and 70 of 70 other printed page numbers verified against the PDF text.** |
| 7 | Typography. On Day 13 an opening "(I" sat alone at the end of a line. The kitchen-card header note left "first." alone on its last line. | Non-breaking space on Day 13, a balanced wrap on the note, and `text-wrap: pretty` on body text so no paragraph ends on a one-word line. |
| 8 | Process: the first sample image I opened was another character's page. Parallel agents share the scratchpad, and they had written the same file name. | Caught by looking at the image. All my renders moved into a private folder. Nothing from another product touched this one. |

## Systematic check: clean results

These checks found nothing to fix:

- **Characters:** no em dashes, en dashes, arrows, ticks, stars or box glyphs anywhere in the PDF text. No straight quotes either: every apostrophe and quote is typographic.
- **Units and order:** every unit is present and in order, one per page. Days 1 to 30 are each on their own page with:
  - "Day N of 30" and the bead-string progress bar
  - the named rule and its one-line rule
  - Rosa's story
  - a drawn tick-box (a bordered cell, not a glyph)
  - "Today", plus "Too much today?" with a smaller version
  - at least three "What I noticed" lines
- **Bleeding:** none. Each page is a fixed Letter box, and the build fails loudly on overflow. The final build has 0 overflows.
- **Tables:**
  - No table header wraps ("Day 1 score", "Day 30", "The change").
  - No table splits across pages; each table sits on one page.
- **Frame and footer:** the frame is on every page. The footer "THE 30-DAY MORNING RESET · NONNA ROSA", with its page number, is on every page except the cover.
- **Catchphrase:** it appears on exactly three pages: the cover (p1), the letter's sign-off (p3) and the Keep Five closing band (p45). That matches the spec.
- **Fill:** the lowest page is the designed "Rosa's drawer" divider at 83%. It is a turquoise page carrying the bonus index. All other pages are at 86% or above.

## Buyer-eyes read: found and fixed

| # | Found | Fix |
|---|---|---|
| 1 | **Rule-of-three rhythm.** Too many "A. B. C." example triplets across the day pages. Read in a row, they whisper "generated". Examples: Day 4 "A balcony. A bus stop. The walk to the car", Day 18 "A lemon. A bunch of greens. An orange...", and the "It can be..." anaphora on Day 19. | Cut to two items or restructured on Days 4, 5, 14, 18, 19, 23 and 26 and on the failure page. Three deliberate triplets were kept: the letter's closing "a window, a glass of water and a chair", Day 27's comic morning mishaps, and Day 30's three phrases (it is the Three Words Rule). |
| 2 | **Repetition.** "Giulia says... offices" appeared on both Day 20 and Day 24. "Eighty-five years" was used four times. | Day 24 now has the old men at the bar ("That isn't riposo, that's hibernation"). Day 29 now says "since I was nine". |
| 3 | **Off image.** Day 11: "she walks like an old man mending nets". People mend nets sitting down. | "she's bent over like an old man mending nets". |
| 4 | **Muddled joke** on Keep Five: "(I do. Don't tell Giulia I said I didn't.)" | "Even I don't do all thirty every day, and they're my rules." |
| 5 | **British vocabulary** in an American-English product: "on holiday", "carry the shopping in", "the washing on the line", "the cupboard with the cups", "the kitchen tap". | Vacation, groceries, laundry, cabinet, kitchen sink. Spelling was already American: neighbor, color, harbor, gray, favorite. |

## Buyer-eyes read: checks that came back clean

- **Safety.** Every mention of Rosa's sea swim carries her safety line: only when the sea is kind, never alone, and the ladder on rough days. Those mentions are on Day 3, the midpoint letter, Day 29 and the 112 Steps card. The letter and Day 3 say plainly that the sea is her story, not the buyer's homework. No task involves open or cold water: the swap is cool tap water, "cool, not icy". Every movement day has a smaller or seated version, the rail is held on the stairs and both hands stay on the counter for balance. The fit page carries the "go at your own pace / check with your doctor if you have a condition" note.
- **Health claims.** A scan for boost, detox, cure, heal, immune, metabolism, weight, toxin, hormone and similar words found only innocent matches: "close", the hedged "healthier aging", "house burning". Week Three never prescribes a food; it is about sitting down, the phone, lunch as a meal, cooking simply and eating with people. "The doctor wins" appears on Day 20, the fit page and the small print.
- **Evidence handling.** Every research mention is hedged ("researchers keep finding", "often linked with", "patterns, not promises"). Blue Zones is named honestly: Rosa's town is not one, Sardinia is. The habit-formation line ("around two months on average... much longer for some people") describes a real, widely cited UCL study (Lally and colleagues, European Journal of Social Psychology, 2010). It is left unnamed in the book on purpose, to avoid fake precision. No citations are invented.
- **Voice.** Italian words stay inside the bible's set and are rationed:
  - amore: about once a page
  - basta: 3
  - piano piano: 4
  - ascolta: 2
  - riposo: 6
  - Madonna: 1
  - Giulietta: once, when she's cross

  Rosa never says "at my age" except to ban it, never complains about her body, and only jokes about her doctor's age.
- **Brands.** No real brands or companies appear. The only named organizations are 988 (Suicide & Crisis Lifeline) and Samaritans. "Blue Zones" is used as a named pattern, as the brief allows.
- **Disclosure.** The small print says plainly that Rosa, Giulia, Concetta, Salvatore, the town and the 112 steps are AI-created fiction.

## Coordinator locks, confirmed in the built PDF

| Lock | Where | Status |
|---|---|---|
| Day 1: the window, opened WIDE, light on the face, one minute, before the phone | p10 | done; includes Rosa's line "You don't need anything, just a window." verbatim |
| Day 2: a big glass of water, not a little one, before the coffee | p11 | done |
| Day 10: walk to the shop or bakery yourself for something small, instead of driving or ordering | p20 | done |
| "Like a thief" at the sink | Day 15, p27 | done |
| First conversation with a person, not a screen | Day 22, p35 | done |
| Riposo, about forty minutes, framed as rest | Day 24, p37 | done |
| Evening walk | Day 25, p38 | done |
| Sunday lunch with people | Day 21, p33 | done |

## Known limits, stated honestly

- The palette prints a light linen background on every page. Home printers will use a little ink for it.
- Grayscale was checked by rendering Day 1 and the Fridge Sheet with `pdftoppm -gray`. All text, tick-boxes and ruled lines stay clear. Only the Fridge Sheet's week color key loses its distinction (the lemon swatch goes very pale), and the day numbers in each cell carry that information anyway.
- The interior photos are Rosa's AI-generated location stills, used as small arch panels. They are fine on screen and when printed at home. They are 1152 px originals, so they are not meant for professional print.

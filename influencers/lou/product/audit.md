# Audit log: "Don't Text. Call." (Grandpa Lou)

Final file: `Dont-Text-Call-Grandpa-Lou.pdf`, 40 pages, US Letter (612 x 792 pt), tagged, with a bookmark outline and 94 internal links (the index links to every card, and every card links back to the index).

The audit has the two halves the method requires. Everything below was found by checking, not assumed. Where a check found nothing, it says so.

## How it was checked

1. **Automated checks** (`build/verify.py`, rerunnable): page count and size; every contents entry against the text of the page it points to; footer page numbers on all 39 interior pages; all "card N (p. X)" cross-references; forbidden characters in the source and the PDF text; misdirected curly quotes; brand names; the catchphrase count. There is also a per-page overflow and fill check built into `build/build.js`, which runs on every build.
2. **Visual pass:** every page rendered with `pdftoppm -r 50 -png` and looked at, one by one, all 40, after the final copy edits. Pages edited after that pass (4, 6, 22, 26, 31 and 32) were re-rendered and looked at again.
3. **Buyer-eyes read:** the full text extracted with `pdftotext` and read straight through as a sceptical customer would.

## Final state (last run)

- `verify.py`: **ALL CHECKS PASSED.** 37 contents entries correct (25 cards and 12 other entries), 39 footers correct, 16 card cross-references correct, 0 forbidden characters, 0 misdirected quotes, 0 brand names, catchphrase inside exactly twice.
- **Overflow:** none on any of the 40 pages. Cards fill 77% to 95% of the page (sample card 7: 89%). Front and back matter fill 79% to 100%.
- **Fonts:** `pdffonts` shows only Fraunces and Source Serif 4, embedded and subset with Unicode maps. No fallback font is used anywhere, and no glyph artefacts were seen on any page.
- **Interactive elements:** 27 drawn tick boxes (21 on the log, 5 on the quickstart, 1 on the read-back), plus 10 "done it" boxes on the Tuesday dates. Fill-in lines are present on pages 5, 34 and 37. There are no unicode tick or box glyphs.
- **Alignment:** all 26 verbatim lines from the coordinator's alignment note were found word for word in the final PDF text (card 7's take, text and fifteen question marks; card 1's rule, ask and "no problem" line; card 18's script, "Short is kind", the meme line, the twenty-minutes line and the blocking line; card 3's first thirty seconds; video rules #1 to #3 as Lou's Rules 1 to 3; the bathroom door; the Saturday-at-two story).

## Systematic half: what was found and fixed

| # | Found | Fix | Verified |
|---|---|---|---|
| 1 | First full build: the contents page overflowed by 46px. The "At the back" list was clipped (Bonus 5 and the small print were missing), and wrapped card titles broke the dot leaders. | Rebuilt the page as a table: the feeling on the left, its cards on the right, one line each, plus a three-column strip (Before you dial / The bonus stack / At the back). | It fits, every entry is visible, and the page numbers check out against the real pages. |
| 2 | Lou's Rules (p36) overflowed by 41px. CSS columns put rule 14's name at the foot of column one and pushed its line off the page. | Two explicit columns (rules 1-14 and 15-27). The second build was still 14px over, so I tightened the spacing again. | It fits at 99%, and no rule is split. |
| 3 | The failure page (p6) was only 70% full. | Rather than pad it, I added a "How to read the answer" decoder. It covers five real replies ("Not Tuesday, I'm busy", "Maybe" twice, silence after one call and one message, "not looking for anything", "Yes") and what each one means. | 97% full, with content a buyer can use. |
| 4 | The quickstart (p35) was 75% full and thin. | Each of the five picks now shows its card's named rule as well as the reason to read it. | 91%. |
| 5 | Log page 1 had spare room, and in the read-back box the "Date:" fill-in wrapped onto a line of its own. | Added a blank row (11 plus the example row), and restructured the line to "I had it, on ____". | Checked visually. |
| 6 | Card 3's title left "dial." alone on line two, and a lone "Then." ended a paragraph. | `text-wrap: balance` on titles and takes, `text-wrap: pretty` on paragraphs. | Checked visually on every card. |
| 7 | Cover: the bottom third was empty, and the subtitle left "what to say" alone on its second line. | Balanced the subtitle, enlarged the portrait ring, and added a factual contents line (25 cards · a usage log · 5 bonuses). | Checked visually (page 1 and cover.png). |
| 8 | Smart-quote bug: in the decoder rows and in Lou's Rules #20, opening double quotes rendered as closing quotes (”Maybe,” and ”I was wrong.”). The converter carried the previous character across block elements. | The converter now resets at block-level tags, and I added an automated check for misdirected quotes. | 0 misdirected quotes. |
| 9 | My first forbidden-character scan used `grep -P` with `\x{2014}`-style code points, which errors in this locale. It printed "none" because the command failed, not because the text was clean. | Redid the scan in Python and built it into `verify.py`. | 0 em dashes, en dashes, arrows, ticks, box glyphs, bullet glyphs or replacement characters, in either the source or the PDF. |
| 10 | My first footer check reported 39 "mismatches". This was a false alarm: letter-spacing makes pdftotext split "LOU" into "L O U", which broke my regex. The numbers themselves were right. | Rewrote the check to read the trailing number on each page. | 39 of 39 footers equal their physical page. |

## Buyer-eyes half: what was found and fixed

| # | Found | Fix |
|---|---|---|
| 1 | **Templated openings.** "Hi, it's [your name]." opened 15 of 25 scripts. A reader flipping cards would notice a template. | Varied to fit each situation ("Hey, it's me" after a date, "Hey. I got your message" to a returning ghoster, "Hi, [their name]" for a let-down). It now appears 7 times, where a cold call needs it. |
| 2 | **"I'd rather X than Y"** appeared about nine times (rather know than guess, rather say it than type it, and so on). | Rewritten; it appears twice now. |
| 3 | The stage cue **"(Wait.)"** sat in 10 scripts. | Varied ("Pause", "Let them answer", "Wait for the okay"). Three are left. |
| 4 | **Identical reply lines:** "Thanks for telling me. I mean it." on cards 7 and 9. "Thank you for being honest" on cards 6 and 13. | Cards 9 and 13 now have their own lines. |
| 5 | **Verbal tics bunched up:** "you're allowed to" about seven times; "Lemme tell you" opening the letter, Why this works and the failure page within four pages; "In my bus mirror" opening both the failure page and card 9. | Cut to three, two and one respectively. The failure page now opens "From the driver's seat". |
| 6 | **Inconsistent placeholder:** card 5's script said "[Friday]", but its text said "Friday". | Bracketed. |
| 7 | **Punctuation:** card 18 had `"Can we still hang out?",` (a comma after a question mark). Card 23 had nested parentheses, "(card 18 (p. 25) or card 19 (p. 26))". Card 12 started a sentence with a lowercase "card 18". | All three rewritten. |
| 8 | **Safety accuracy, card 25:** it called the helpline "free and private", where "confidential" is the accurate word. It suggested "a work phone" as a safe phone, but an employer may monitor it. | Now "free and confidential" and "a phone they can't check, like a friend's". |
| 9 | **Evidence hedging, Why this works:** "researchers keep finding the same two things" claimed more consistency than the research supports. | Now: "Researchers who study this have turned up two things worth knowing: people tend to think their tone comes across in writing better than it really does, and they tend to expect a phone call to be more awkward than it turns out to be." There are no names, numbers or citations. |
| 10 | **Voice:** two index group lines were stiff ("It is something", "is not okay"). | Contracted to Lou's voice. |
| 11 | **Lou's world missing on three cards** (19, 24, 25): voice, but no detail from his life. | Card 19: the bus-mirror breakups that turned into trials. Card 24: when Angie said no, he never asked twice. Card 25, kept serious: "Angie was never once afraid of me. That's the floor, not the ceiling." |
| 12 | **Card 5 duplicated card 1.** After the alignment note gave card 1 "Sometime is never", card 5 ("they said 'let's hang sometime'") taught the same lesson. | Card 5 now covers a different, common moment: "I can't tell if it's a date or just hanging out" (The Say-the-Word Rule). |

## Checked and found nothing to fix

- **Brands:** none in the PDF. The only names are the free help organisations: the National Domestic Violence Hotline, Refuge's National Domestic Abuse Helpline, 988 and Samaritans.
- **Gender:** the scripts use "they" and "you" throughout. The only "girl" is Lou's own 1955 story about Angie. The optional video line "If he wanted to, he'd call" was used as "If they wanted to, they'd call."
- **Catchphrase:** "Don't text. Call." appears inside exactly twice, as designed: the letter's sign-off and the small print's closing line. The title on the cover and the uniform footer are the only other places.
- **Manipulation:** I read every "if they say no" branch for pushing past a no, games, jealousy tactics or "make them want you". None found. "No script makes anyone want you" is stated plainly on pages 3, 4 and 40.
- **The bible:** checked every Lou fact against it (born in Brooklyn; 38 years on the bus; met Angie at the bakery in 1955; three weeks of bread; eleven cents; married 65 years; lost her in 2021; the ring on a chain; the right-ear hearing aid; the kitchen wall phone; seven o'clock calls; Rosemarie and Joey; eight grandkids; Nicky; "Louie"; the pet peeves). No contradictions. The small embellishments are listed in `spec.md` for the bible owner.

## Known limits (not verified)

- **Helpline numbers were not dialled.** The two primary numbers came from the brief. 988, Samaritans 116 123 and the US text line (START to 88788) are long-established public numbers, but they should get a 30-second check on the official sites before launch, since numbers occasionally change.
- **No physical print test.** It was checked on screen only. The cream ground and tinted boxes use `printBackground`, so a home printer will use some ink.
- **Copying text from the small-caps labels** gives spaced letters ("S AY T H I S"). This is how Chromium writes letter-spaced text into a PDF. It doesn't affect reading, but a screen reader may spell those labels out. The body text, scripts and titles copy cleanly.
- **On a phone,** US Letter pages need a pinch-zoom to read comfortably. The clickable index and the back-to-index links on every card help; see the upgrade note in `sales-kit.md`.

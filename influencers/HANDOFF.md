# HANDOFF: generate the voices and videos with Kolbo

> **For the next Claude session.** This session must have the Kolbo connector.
> The user speaks Hebrew: reply in simple Hebrew, and keep all prompts in English.
> - **The user:** connect Kolbo at https://claude.ai/customize/connectors and sign in.
> - Then open a NEW Claude Code session on `terezbe/ai-storyboard`, branch `claude/video-explanation-6b9nkr`.
> - Then write: "Read influencers/HANDOFF.md and do it".

## What this project is

- **The method:** we follow Mark Tilbury's "laziest way to make money with AI" video. We build AI influencers, post 10 Reels per account on day one, pick a winner on day 5, and sell a digital product on Stan Store.
- **The characters:** three are built: Rosa (94, healthy aging), Ray (71, frugal money) and Lou (90, dating advice).
- **Done so far:** everything except the voice files and the video clips. Higgsfield credits are almost gone (about 2.8 left), so the user wants **Kolbo credits** used for voices and videos.
- **This repo:** it used to be a storyboard app. Ignore everything outside `influencers/`.

## Files you need

| File | What it is |
|---|---|
| `influencers/<c>/profile.md` | Character bible: voice description, verbatim anchors, safety rules |
| `influencers/<c>/content-plan.md` | The 15 scripts per character. **Batch 1 = the first 10 (R1–R10, Y1–Y10, L1–L10).** |
| `influencers/<c>/video-prompts.md` | Per video: FIRST FRAME prompt, FULL PROMPT, TWO-PART prompts, LIP-SYNC or SHORT prompt |
| `influencers/<c>/sheet.jpg` | Character sheet (@image1) |
| `influencers/<c>/locations/*.jpg` | Location stills (@image2) |
| `influencers/tools/build_video_prompts.py --print <ID> [--part 1\|2]` | Prints one paste-ready prompt |
| `influencers/tools/finish_video.py <ID>\|all` | Joins two parts, burns the on-screen hook / b-roll overlay text, exports 1080x1920 to `<c>/final/` |

## The proven Kolbo pipeline (used for all 30 batch-1 videos and Rosa's batch 2, 2026-10-05)

Steps 0–3 below were the original plan. This is what actually worked for Rosa, Ray and Lou; use it for batch 2.

1. **Prompts:** `python3 influencers/tools/kolbo_prompts.py <c>` writes `<c>/kolbo-prompts.md` and `.json`.
   - The prompts use Seedance 2.5 Locked Intro: one continuous 9:16 take, ≤30 s.
   - The model performs the English dialogue natively, so there's no TTS, no audio file and no lip-sync step.
2. **Assets:** upload `sheet.jpg`, `profile-picture.jpg` and the 3 location stills once with `create_upload_ticket`, in this order: @Image 1 = sheet, @Image 2 = profile picture, @Image 3 = location.
   - One Kolbo project per character: Rosa `AI Influencers – Nonna Rosa`; Ray `6ac35fcdafec4543d7adcaef`; Lou `6ac35fce5192f3f8c014330b` (find them with `list_projects`).
3. **Generate:** `generate_elements` with these settings:
   - model `seedance-2-5`, resolution `480p-draft`, aspect 9:16, `multi_shots` false;
   - `duration` = the Total line.
   - Cost: about 17 credits per second, so about 500 for a 30 s clip.
4. **QC every take:**
   - Frames: check the face, the identity marks, the outfit, extra people or hands, and the framing.
   - Words: `transcribe_audio` (language en). The transcript must match the script.
   - Failures seen so far, and the fixes now built into the builder:
     - a moustache or goatee on Rosa: gender lock in CAST and AVOID, and the "little beard" gesture is drawn in the air, away from her chin;
     - a selfie arm when someone else should hold the phone: "NOT a selfie" line and a camera distance of about 1.5 m;
     - a finger in front of the lens: clear-lens line, and the interviewer sits out of frame;
     - the outfit falling back to the sheet's linen shirt: "This replaces her usual …" line (`outfit_not` in chars.py);
     - a fisheye low angle on a propped phone: set the phone at chest height, about 1.5 m away;
     - an object "in the foreground" that the phone leans on: the phone's prop is behind the phone, so never describe it in front of the lens (removed from Y8);
     - a selfie described as "in both hands" while the free hand gestures: one hand holds the phone (fixed in L7);
     - Lou's wedding ring on his finger and a medallion on the chain (L1, L3, L6, L9, L10 in batch 1): his AVOID line now forbids both;
     - quiet relatives' voices at Lou's Sunday lunch (L2, L5): about 15 dB under Lou, kept as room sound, dropped from the captions.
     - lines dropped and a line improvised (R16 take 1 said "That was easy" instead of "Light on your face. One minute. Don't talk, don't scroll, just look"): the beat's action said "completely still, lips still" while she had dialogue. Never put "lips still" or a silent hold on a beat that carries words; give the silence its own beat or the final hold.
5. **Upscale:** `edit_video` with `upscale` and model `bytedance-upscaler/upscale/video` at 1080p, about 30 credits. Save the result to `<c>/videos/<ID>.mp4`.
6. **Captions:** save the transcript SRT (5 words per cue) as `<c>/captions/<ID>.srt`.
   - Fix misheard names there or in `FIXES` in finish_video.py (Giulia, Concetta, Salvatore, Nicky, Angie, "Lou's rule"), and remove other speakers' lines.
7. **Finish:** `python3 influencers/tools/finish_video.py <ID>` burns the captions and the hook text and writes `<c>/final/<ID>.mp4`.
8. **Package:** `python3 influencers/tools/make_instagram_package.py <c>` builds the upload folder and the small zip for ChatGPT: instructions (profile, posting, pins, comments, store link, sales strategy, reports), captions, covers, profile and posts.csv. Send the zip and each video separately (the file limit is 30 MiB).
   - `--batch2 <c>` / `--batch3 <c>` build a later batch's folder (`<c>/final/batchN-package/`, days from `BATCHES[N]` in the script), its own `GPT-INSTRUCTIONS-BATCHN.md` (what each video tests, the 24 h / 72 h measurements, the product-caption rule; batch 3 adds the selling section: pinned comments, replies, the link story), the small zip and the tracked copy in `<c>/instagram/batchN/`.

**Real cost:**
- Rosa's 10 videos: 6,757 credits (2 test takes of R2, 9 drafts, 2 retakes, 10 upscales, 3 profile pictures, transcripts).
- Ray's and Lou's 20 videos: 10,445 credits (20 drafts with no retakes, 20 upscales at about 31 each, 19 transcripts). About 5,200 per character.
- Balance after batch 1: 7,334.
- Rosa's batch 2 (R11–R15): 3,528 credits (7 drafts at 459–510 each: 5 plus retakes of R12 and R13 to put the book in; 5 upscales at about 30; 7 transcripts). Balance after: 3,806.
- Rosa's batch 3 (R16–R18): 2,038 credits (4 drafts at 459–493: 3 plus a retake of R16, whose first take skipped the 'one minute' lines; 3 upscales at about 40; 4 transcripts). Balance after: 1,768.
- **Slow speakers:** the builder compresses the beat timing (PACE 0.94) so Ray's and Lou's scripts fit 30 s; Y1 and L10 were trimmed. Keep new scripts to about 75–80 words.

## Step 0: find out what Kolbo can do, then budget

1. List Kolbo's tools and models. Find:
   - **TTS with voice design** from a text description. ElevenLabs Voice Design is ideal.
   - **Video with multi-reference** (images + audio), e.g. Seedance 2.x. Note the max duration (15 s or 30 s).
   - **A talking-avatar / lip-sync model** (image + audio to video), e.g. Kling Avatar, Hedra, OmniHuman, VEED Fabric.
   - **An image model that takes reference images**, e.g. Nano Banana, GPT Image, Seedream, Flux Kontext.
2. Check the credit balance and the cost per voice, per image and per video second.
3. Estimate batch 1: 30 videos (27 talking + 3 silent b-roll), about 30 s each.
4. Show the user the estimate in Hebrew **before** spending. If credits don't cover 30 videos, start with **one character, all 10 videos**. Ask which character; default to Rosa.
5. **Test before batch.** Run a single test video first (Rosa R2), show it to the user, and get a yes before running the batch.

## Step 0.5: extra profile pictures for Rosa (the user asked)

Make 3 alternative 1:1 Instagram profile pictures of Rosa:
- **Model:** an image model with `influencers/rosa/sheet.jpg` as the identity reference.
- **Comparison:** her current one is `influencers/rosa/profile-picture.jpg`.
- **Delivery:** show all of them to the user and let them pick. Save the pick as `profile-picture.jpg` and keep the old one as `profile-picture-v1.jpg`.

Use this prompt and swap in the scene line:

```text
Use the reference image as the identity reference: it is a character sheet of one woman (full body on the left, close-up on the right). Create ONE new photo of this exact same woman, keeping her face, bone structure, skin, wrinkles, hair and features identical to the close-up. She is 94, deeply sun-browned olive skin, short cropped silver-white hair, a small pale scar through the outer end of her left eyebrow, a single strand of red coral beads, wearing her oversized faded white linen shirt.

Scene: a square Instagram profile picture. Head and shoulders, her face fills most of the frame, her trademark sly closed-lip smile and bright amused dark brown eyes looking into the lens. [SCENE]

Style: authentic candid iPhone photo taken by her great-granddaughter, casual slightly imperfect framing, mild HDR, true-to-life colors, natural aged skin with visible pores and deep wrinkles, subtle sensor grain, no retouching, no beauty filter. One person only, fully clothed, no text, no logos, not a character sheet, a single photo.
```

Scenes:
1. She sits at a tiny whitewashed Sicilian kitchen table by a small open window with the blue sea outside, low morning sun from the left, blue-and-white tiles softly blurred behind her.
2. She sits on a low wooden stool by a weathered blue front door in a narrow ochre alley, pots of red geraniums beside her, warm bounced light, the alley softly blurred.
3. She sits on pale limestone rocks just after a swim, wet slicked-back silver hair, a faded striped towel round her shoulders, the turquoise sea softly blurred behind her, soft early light.

## Step 1: the three voices

For each character:
1. Create a voice from the `[voice: ...]` block in `profile.md`. **Speaking English only.**
2. Audition it with the seed line, and keep it only when:
   - the accent is natural, not a cartoon;
   - the age is right;
   - it never sounds frail.
3. **Save and lock the voice.** Never regenerate it after the first video is made.
4. Generate each batch-1 script **verbatim** from `content-plan.md` (the `> ...` line under **Script:**).
   - Save as `influencers/<c>/audio/<ID>.mp3`.
   - R6 and Y10 are silent b-roll: no audio.
5. Measure every file with `ffprobe`.
   - If a file is **over 28 s** (or the video model caps at 15 s), also make `<ID>-1.mp3` and `<ID>-2.mp3`.
   - The split text is under "TWO-PART version" in `video-prompts.md`.
   - Alternatively, regenerate at a speed of 1.05–1.1.

## Step 2: first frames (one image per video)

- Use the image model with **two references in this order**: `sheet.jpg`, then the location file listed for that video. Use the video's **FIRST FRAME** prompt, at 9:16.
- Save to `influencers/<c>/frames/<ID>.png`.
- **Look at every frame before using it.** Check:
  - identity matches the sheet;
  - all three anchors are present (Rosa: eyebrow scar, wrist tattoo, coral beads; Ray: walrus moustache, flat cap, glasses in the collar; Lou: bushy eyebrows, hearing aid, ring on the chain);
  - the right age, no extra people, no text.

  Regenerate any frame that fails.

## Step 3: the videos

Pick the route by what Kolbo has:

- **Route A: Seedance 2.x with image + audio references.** This is the method from the video and the best option.
  - Attach `sheet.jpg` as @image1, the location as @image2, and `<ID>.mp3` as @audio1. Paste the **FULL PROMPT**. 9:16, 1080p.
  - If the audio is over the cap, use the **PART 1 / PART 2 prompts** with `<ID>-1.mp3` and `<ID>-2.mp3`. Save the outputs as `<ID>-1.mp4` and `<ID>-2.mp4`.
- **Route B: a talking-avatar / lip-sync model.**
  - Input: `frames/<ID>.png` plus `audio/<ID>.mp3`, with the **LIP-SYNC PROMPT** as the motion prompt.
  - There's usually no 30-second problem on this route.
- **Silent b-roll (R6 and Y10; Lou has none):** image-to-video from `frames/<ID>.png` with the **SHORT PROMPT**, about 10 s. Alternatively, use Route A without audio and the FULL PROMPT.

For every route:
- Save clips to `influencers/<c>/videos/<ID>.mp4` (or `-1` and `-2`).
- **Watch each one** for face drift, a pasted-sticker look, wrong language, props appearing from nowhere, or lips moving in silence. The fixes are in the "Known failure" table of the ugc-influencer-video method, mirrored in the prompts. Regenerate only what fails.

## Step 4: finish and deliver

1. Run `python3 influencers/tools/finish_video.py all`. It joins the parts, burns the on-screen hook text for 3.5 s (or the b-roll overlay beats), and exports to `influencers/<c>/final/<ID>.mp4`.
2. **Spoken captions** are burned in automatically when `<c>/captions/<ID>.srt` exists (from `transcribe_audio`). The finals are ready to post.
3. Deliver the finals to the user's phone:
   - send them with the file-sending tool;
   - and if Google Drive is connected, upload them to a folder "AI Influencers/<Character>/Batch 1" and share the link.
4. Keep big video files OUT of git:
   - add `influencers/*/videos/` and `influencers/*/final/` to `.gitignore`;
   - commit only the small audio files and the frames if they're useful.
5. Tell the user, in Hebrew, which file goes with which post. Posting order, captions and hashtags are in `<c>/launch-kit.md` and `<c>/content-plan.md`.

## Rules that must not break

- **AI disclosure everywhere:** the bio line, the Instagram "AI-generated profile" label, and the per-post "AI label".
- **No IP:**
  - no real brands, logos, plates, readable text or place names in visuals;
  - no copyrighted music;
  - no real person's face or voice.
- **Safety:**
  - Rosa gives no health claims, and swimming is always "where it's safe, never alone".
  - Ray gives no investment advice.
  - Lou: no manipulation; unsafe situations go to the helplines in his bible.
- **Never edit `video-prompts.md` by hand.** Change `content-plan.md`, `tools/videos.py` or `tools/chars.py`, then re-run `python3 influencers/tools/build_video_prompts.py`.
- **Git:** commit and push to `claude/video-explanation-6b9nkr`. The draft PR is terezbe/ai-storyboard#2.

## After batch 1 (day 5 onward)

- The winner gets batch 2 (5 videos: #11–#15 in its content plan). Its store goes live per `influencers/SELLING-GUIDE.md`.
- **Rosa's store is live (2026-10-06).** From now on the product caption line is allowed under her product videos (R13, R12, R16–R18), the pinned comments go up, and the daily link story runs. The owner posts R16 first, on the day the link went live.
- **Rosa's batch 2 is done (R11–R15).** It was built from her batch-1 Instagram numbers: see `rosa/content-plan.md` ("What batch 1 taught us", "Hook rules", the batch-2 test table). Do the same for Ray or Lou when their numbers arrive: ask the user for views at 24 h and 72 h, saves and shares per post; write one hypothesis per video; keep the hook rules.
- **Batch 3 (the user's ask, 2026-10-06): three selling videos.** The book is the subject, each on a shape that won in batch 1, value first and the sell in the last five seconds: R16 gives Day 1 away on camera (the Window Rule) and says the other 29 are in the bio; R17 is part 4 of the "never" series where every item is a page of the book, with one share line; R18 says the cover line ("The sea doesn't care how old you are") at the top of the ladder and makes the sales-letter pitch (the sea is the receipt, no sea needed). All three captions carry the product line, R16 is the store-opening video, and the package tells GPT to pin a comment in her voice under each. Never a price or a URL inside a video.
- **The book in the videos (the user's rule, 2026-10-05):** the product must appear inside some videos, not only in captions. At most two videos in five mention it, in the character's own words and never as an ad: a day number or a rule from the book, a prop (Rosa's handwritten notebook), "it's in the bio". Never a price, never a URL. Only those videos get the product caption line. For Rosa this is R13 (explicit, the notebook, Day 1 and Day 6 of the book) and R12 (one soft line: Salvatore's Rule, "you miss one, you do the next"). R12 and R13 were retaken for this (the first takes had no book).
- The products are in `influencers/<c>/product/`: PDF, store images and `sales-kit.md`.
- **New scripts:** when the user sends a winning format or questions from comments, write new scripts:
  - same card format, same kill-list rules;
  - add them to `content-plan.md` and direction to `tools/videos.py`;
  - rebuild the prompts.

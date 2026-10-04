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
2. **Spoken captions** are the user's job, because they need exact speech sync. Tell the user to add them free in CapCut ("Auto captions") or Instagram Edits. Big, clean captions: most people watch muted.
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

- The winner gets batch 2 (5 product videos: #11–#15 in its content plan). Its store goes live per `influencers/SELLING-GUIDE.md`.
- The products are in `influencers/<c>/product/`: PDF, store images and `sales-kit.md`.
- **New scripts:** when the user sends a winning format or questions from comments, write new scripts:
  - same card format, same kill-list rules;
  - add them to `content-plan.md` and direction to `tools/videos.py`;
  - rebuild the prompts.

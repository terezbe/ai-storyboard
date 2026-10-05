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

## The proven Kolbo pipeline (used for Rosa batch 1, 2026-10-05)

Steps 0–3 below were the original plan. This is what actually worked; use it for Ray and Lou.

1. **Prompts:** `python3 influencers/tools/kolbo_prompts.py <c>` writes `<c>/kolbo-prompts.md` and `.json`.
   - The prompts use Seedance 2.5 Locked Intro: one continuous 9:16 take, ≤30 s.
   - The model performs the English dialogue natively, so there's no TTS, no audio file and no lip-sync step.
2. **Assets:** upload `sheet.jpg`, `profile-picture.jpg` and the 3 location stills once with `create_upload_ticket`, in this order: @Image 1 = sheet, @Image 2 = profile picture, @Image 3 = location.
   - Kolbo project for Rosa: `AI Influencers – Nonna Rosa` (find it with `list_projects`). Make one project per character.
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
     - a fisheye low angle on a propped phone: set the phone at chest height, about 1.5 m away.
5. **Upscale:** `edit_video` with `upscale` and model `bytedance-upscaler/upscale/video` at 1080p, about 30 credits. Save the result to `<c>/videos/<ID>.mp4`.
6. **Captions:** save the transcript SRT (5 words per cue) as `<c>/captions/<ID>.srt`.
7. **Finish:** `python3 influencers/tools/finish_video.py <ID>` burns the captions and the hook text and writes `<c>/final/<ID>.mp4`.

**Real cost for Rosa's 10 videos:** 6,757 credits in total.
- This covers 2 test takes of R2, 9 drafts, 2 retakes, 10 upscales (30–120 each), 3 profile pictures and the transcripts.
- Expect about 5,500–6,500 per character.
- **Ray and Lou:** most of their scripts run over 30 s at their slow pace. `kolbo-prompts.json` marks those as `compressed`. Either trim the script or split it into two takes joined with a jump cut.

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

- The winner gets batch 2 (5 product videos: #11–#15 in its content plan). Its store goes live per `influencers/SELLING-GUIDE.md`.
- The products are in `influencers/<c>/product/`: PDF, store images and `sales-kit.md`.
- **New scripts:** when the user sends a winning format or questions from comments, write new scripts:
  - same card format, same kill-list rules;
  - add them to `content-plan.md` and direction to `tools/videos.py`;
  - rebuild the prompts.

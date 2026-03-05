import type { ProjectType } from '../types/project';
import type { ShotCountRange } from './style-presets';

export interface NarrativeBeat {
  beatName: string;
  durationHint: string;
  description: string;
}

export interface VideoTypeConfig {
  id: ProjectType;
  labelKey: string;
  descriptionKey: string;
  exampleKey: string;
  emoji: string;
  recommendedShotRange: ShotCountRange;
  hasIntroOutro: boolean;
  narrativeBeats: NarrativeBeat[];
  claudeRules: string;
  cameraGuidance: string;
  shotMixGuidance: string;
}

// ---------------------------------------------------------------------------
// Detailed Claude rules for each video type
// ---------------------------------------------------------------------------

const TALKING_CHARACTER_RULES = `Follow a classic 5-act narrative structure: Hook, Setup, Development, Climax, Resolution. The character speaks directly to camera throughout, establishing a personal connection with the viewer.

EMOTIONAL ARC: Every storyboard MUST have a clear emotional trajectory. Start with curiosity or intrigue in the Hook, build familiarity and trust in the Setup, deepen engagement through the Development by layering new information or conflict, reach peak intensity at the Climax, and resolve with satisfaction or a call-to-reflection in the Resolution. Map specific emotions to each shot and ensure no two consecutive shots share the same emotional register.

SHOT CONNECTIVITY: Each shot must logically flow from the previous one. Use visual or thematic bridges between shots. If Shot 2 ends with the character gesturing toward something, Shot 3 should reveal what they pointed at. If the character references a location, the next shot should show that location. Avoid jarring jumps in location, lighting, or mood without a deliberate narrative reason. Transition types should support the emotional flow: use cuts for energy, dissolves for reflection, and fades for time passage.

CHARACTER PRESENCE: The character should be the visual anchor of the entire piece. Maintain consistent wardrobe, hairstyle, and demeanor across all shots. Facial expressions must match the emotional beat of each shot. Do not show a neutral face during the Climax. Eyes should engage the camera lens directly in at least 70% of character shots. Body language should evolve with the narrative: open and welcoming in the Setup, animated in the Development, intense at the Climax, and settled in the Resolution.

INFORMATION REVEAL: Each shot MUST introduce at least one new piece of information, emotion, or perspective that the viewer did not have before. Never repeat the same visual setup with identical framing and dialogue angle. If the character is explaining something, show it visually with B-roll inserts rather than having them simply talk about it. Layer information so early shots plant seeds that later shots pay off.

PACING: Hook shots should be punchy and immediate (2-3 seconds). Setup and Resolution can breathe and feel more relaxed (4-6 seconds). Development shots carry the bulk of content and can be longer (6-10 seconds). The Climax should feel urgent with slightly shorter duration than Development to create forward momentum. Overall rhythm should feel like a conversation, not a lecture.

MUST INCLUDE: At least one close-up showing genuine emotion on the character's face, at least one wide shot that establishes context and environment, a text overlay for the main takeaway or hook line, and a clear final frame that feels like a deliberate ending rather than an abrupt stop. The character MUST appear in Shot 1 or Shot 2 to establish early viewer connection.`;

const EVENT_PROMO_RULES = `Follow the AIDA marketing framework: Attention, Interest, Desire, Action. Every single shot serves a specific persuasion purpose. There is no room for filler or purely decorative shots.

ATTENTION (Hook): The first shot MUST stop the scroll. Use a bold visual, a surprising camera angle, or a provocative question delivered as text overlay. Show the end result, the most impressive moment, or the most visually striking aspect first. Do NOT start with a logo, a generic establishing shot, or a slow fade-in. The viewer decides in 1.5 seconds whether to keep watching. Make those seconds count with immediate visual impact.

INTEREST (Problem/Context): Establish why the viewer should care. Show the problem being solved, the gap in their life, or the context that makes this event or product relevant right now. Use relatable scenarios that the target audience can see themselves in. If promoting an event, show the excitement of past editions or the anticipation building among attendees. Frame the viewer's world as incomplete without what you are offering.

DESIRE (Solution/Product): This is the core showcase and should receive the most screen time. MUST include: clear product or service shots from at least two different angles, a benefit demonstration that shows the offering in action (not just existing statically), and at least one shot that communicates the transformation or value proposition. Show before and after states if applicable. Use close-ups to communicate quality and craftsmanship, medium shots to show usage context and scale.

SOCIAL PROOF: Include at least one element of credibility. This can be testimonials from real people, crowd shots showing popularity and demand, expert endorsements, impressive statistics rendered as text overlays, or visuals from past successful events. Frame testimonial shots at medium distance with warm, flattering lighting to build trust and relatability. Social proof shots should feel authentic, not staged.

ACTION (CTA): The final shot MUST include a clear, readable call-to-action with a text overlay. Include specific contact information, website URL, date, or the exact next step the viewer should take. The CTA should feel urgent but not desperate. Use contrasting colors between text and background to ensure readability. End with a clean logo card that reinforces brand identity.

ENERGY CURVE: Energy should escalate continuously throughout the video. Start intriguing, build excitement through the middle, peak at the product showcase, and end with confident authority at the CTA. Music tempo and shot pacing should match this escalation. Never let the energy dip in the middle of the video.

SHOT CONNECTIVITY: Maintain visual consistency in color grading and style across all shots. Use match cuts, thematic transitions, or visual echoes between sections. The product or service should appear in at least 3 different shots from different angles, contexts, or usage scenarios. Every transition should feel motivated, not arbitrary.

MUST INCLUDE: The product or service shown in active use, at least one human face showing a genuine positive reaction, a text overlay communicating the key benefit or value proposition, an end card with logo and contact information, and a clear visual hierarchy that guides the viewer's eye to the most important information in each frame.`;

const INVITATION_RULES = `Create a warm, personal, and elegant invitation that makes the recipient feel genuinely special and excited to attend. The tone should be intimate and exclusive, as if the host is personally welcoming each viewer into something meaningful.

EMOTIONAL WARMTH: Every visual choice should communicate care and thoughtfulness. Use warm color temperatures throughout, favoring golden hour tones, candlelight warmth, and soft ambient glow. Lighting should be soft and flattering, never harsh or clinical. Gentle camera movements replace static shots. Avoid hard cuts entirely. Use dissolves, slow fades, and gentle crossfades to maintain the elegant, flowing atmosphere. Hard cuts feel impersonal and break the invitation mood. The overall feeling should be like receiving a handwritten letter from someone who cares.

REQUIRED INFORMATION: The storyboard MUST clearly present all essential logistics: the event name or occasion, the specific date and time rendered as a beautiful text overlay, the venue or location shown both visually and as text, and clear RSVP instructions. Missing any of these makes the invitation functionally incomplete. Present logistics as beautifully styled text overlays that are integrated into the visual composition, not as afterthoughts tacked onto the end. Typography choices should reflect the event's tone: elegant serif for formal occasions, friendly sans-serif for casual gatherings.

HOST PRESENCE: If a host or character is featured, they should appear warm, welcoming, and genuinely excited. Frame them in medium shots or medium close-ups with softly blurred backgrounds that suggest the event setting. Their expression should communicate authentic enthusiasm: "I genuinely want you there." At least one shot should feel like a direct personal address to the viewer, creating an intimate one-to-one connection rather than a broadcast feeling.

VENUE AND SETTING: Dedicate at least one full shot to showcasing the venue or event setting at its most beautiful. Use wide angles to convey the scale and atmosphere of the space, then follow with close-ups that highlight quality details: table settings, floral arrangements, lighting fixtures, architectural features, or decorative elements. The venue should look irresistible, like a place the viewer would want to spend time.

EXCLUSIVITY: Create a sense that the viewer is being invited to something truly special. Achieve this through selective focus with blurred backgrounds suggesting a curated and intentional space, rich luxurious textures like velvet, gold, crystal, or fresh flowers, or glimpses of preparation that show the care going into the event. The invitation should never feel mass-produced or generic.

PACING: Invitation videos should feel unhurried but purposeful. Each shot should linger just long enough to be fully absorbed, typically 3-5 seconds. Do not rush through details. The RSVP and closing information should hold for at least 3 seconds to ensure the viewer has time to read, process, and know how to respond.

MUST INCLUDE: A visually beautiful opening that creates intrigue and sets the mood, all event details presented as elegantly styled text overlays, at least one shot that establishes the venue atmosphere, an emotional moment that conveys why this particular gathering matters, and a closing frame with RSVP details that holds long enough for the viewer to read and act on.`;

const MUSIC_VIDEO_RULES = `Create a visual narrative that serves the music. Every shot, every cut, and every transition must feel like it belongs to the song. This is NOT a performance recording or a concert capture. It is a visual interpretation and extension of the music.

BEAT SYNCHRONIZATION: Shot changes MUST align with the musical structure. Cuts happen on beat changes, downbeats, or significant musical moments such as chord changes, drum fills, or vocal entries. Never cut in the middle of a musical phrase. Verse sections use longer, more contemplative shots (8-10 seconds) to build narrative and allow the viewer to settle into the story. Chorus sections use faster, more energetic cuts (4-6 seconds) to amplify the hook's energy. Bridge sections can deliberately break the established pattern to create contrast and make the return to the chorus feel powerful.

VISUAL METAPHOR: Do NOT just show the character singing to camera for the entire video. At least 60% of the storyboard should consist of visual metaphor, abstract imagery, or narrative B-roll that interprets the lyrics visually rather than literally. If the song is about freedom, show wide open landscapes, birds taking flight, chains breaking. If about heartbreak, show rain on windows, empty rooms, fading photographs, wilting flowers. Be specific and creative with your metaphor choices. Each metaphor should add meaning that the lyrics alone cannot convey.

PERFORMANCE vs. STORY: Alternate strategically between performance shots where the character sings or plays and story or metaphor shots that give the song deeper visual meaning. Performance shots anchor the viewer to the artist and provide a familiar touchpoint. Story shots elevate the song beyond simple performance. Never have more than 2 consecutive performance-only shots. The interplay between performance and story is what separates a music video from a filmed concert.

DYNAMIC RANGE: The video needs visual dynamics that mirror the musical dynamics precisely. Quiet, intimate sections should use static camera placement, muted or desaturated tones, and tight intimate framing. Loud, energetic sections should use moving cameras, saturated vibrant colors, and wide or extreme angles. The visual energy level should track the audio energy beat by beat. When the music swells, the visuals should swell with it.

TRANSITIONS: Avoid generic or default transitions. Use motivated transitions where a character turning triggers a scene change, a light flare bridges between locations, matching shapes or colors in consecutive shots create visual rhymes, or a camera whip-pan connects two different spaces. Transitions should feel intentional and musical, not decorative or arbitrary. The transition itself should land on a beat.

COLOR NARRATIVE: Establish a deliberate color palette that evolves with the song's emotional arc. Verses might be cooler and more desaturated while choruses bloom into warmer, more vibrant tones. Or maintain a consistent base palette with intensity variations that track the dynamic range. Color should reinforce and amplify the emotional journey, never contradict it.

MUST INCLUDE: At least 2 distinct visual locations or environments to provide variety, one dramatic lighting change that marks a major structural shift in the song, at least one shot of pure visual metaphor with no character present, a climactic visual moment that precisely aligns with the musical climax, and a visual resolution in the outro that feels like a deliberate and satisfying ending to both the visual and musical journey.`;

const RECAP_VIDEO_RULES = `Create an energetic, celebratory montage that captures both the highlights and the emotional essence of the event. The viewer should feel the excitement and wish they had been there, or relive the joy if they attended.

PACING: This is a fast-paced, high-energy format. Most shots should run 2-4 seconds. Never hold a single shot longer than 5 seconds unless it serves as a deliberate emotional anchor moment where you want the viewer to pause and feel something. Quick cuts maintain energy and create the impression of abundance: so much happened that we can only show you the best glimpses. The rapid pace itself communicates that the event was overflowing with memorable moments.

OPENING IMPACT: Start with the single most impressive or emotionally powerful moment from the entire event. Do NOT begin chronologically with people arriving or setting up. Hook the viewer immediately with the peak energy, the biggest reaction, or the most visually stunning moment. This cold open approach tells the viewer in 2 seconds exactly what energy level to expect from everything that follows.

MONTAGE STRUCTURE: Organize shots using either chronological order (morning setup through evening celebration) or thematic grouping (preparation, arrivals, activities, peak moments, departures). Either approach needs a clear internal logic that the viewer can subconsciously follow. Avoid random shot ordering. Even in a fast-paced montage, the viewer should feel narrative momentum building toward a peak rather than watching disconnected clips.

EMOTIONAL ANCHORS: Between rapid montage sequences, include 1-2 slower breathing shots lasting 4-5 seconds that capture genuine, unguarded human emotion: a sincere belly laugh, a tender embrace between friends, a moment of quiet awe, or tears of joy. These anchor shots are critical because they prevent the montage from feeling like pure visual chaos. They remind the viewer that real humans experienced real, meaningful feelings at this event. Without emotional anchors, a recap feels like a slideshow.

VARIETY: Mix camera angles aggressively to maintain visual freshness. Include wide establishing shots of the venue and crowd that communicate scale, medium shots of small group interactions that show connection, close-ups of joyful faces that convey emotion, and detail shots of decorations, food, hands clapping, or other sensory elements that ground the viewer in the experience. Repetitive framing kills montage energy. Each shot should offer a distinctly different visual perspective from the one before it.

CROWD vs. INDIVIDUAL: Balance shots that show scale and community (full crowd, packed room, wide landscape with many people) with intimate individual moments (one person laughing, two friends hugging, someone's amazed reaction). The crowd shots communicate "this was a significant, well-attended event." The individual shots communicate "and it touched people personally." Both perspectives are necessary for a complete recap.

MUSIC SYNC: Shot cuts should align with the beat of the background music. At moments of musical emphasis such as a beat drop, chorus entry, or crescendo, sync a particularly impactful visual to that musical moment. The marriage of audio rhythm and visual rhythm is what separates a professional recap from a random collection of clips.

MUST INCLUDE: At least one wide shot showing the full scale and scope of the event, close-ups of at least 3 different emotional reactions from different people, one detail or decor shot that communicates the setting and production quality, a peak energy moment showing dancing, cheering, or collective celebration, and a gratitude or forward-looking closing shot that provides emotional closure rather than simply stopping.`;

const CUSTOM_BRAND_RULES = `Create a cinematic brand or logo reveal that builds anticipation through atmospheric visuals and delivers a satisfying, memorable payoff at the reveal moment. This format is about mood, atmosphere, and visual impact rather than information, narrative, or dialogue.

CINEMATIC BUILDUP: The entire video is structured as a cycle of tension and release. Start with abstract, obscured, or mysterious visuals that intrigue without explaining. Gradually reveal more context, form, or clarity as the video progresses. The viewer should be actively wondering "what is this?" during the first half, and experiencing a satisfying "ahh, that is beautiful" recognition during the second half. Never reveal the brand, logo, or product before the designated Reveal beat. Premature revelation destroys the payoff that the entire video is building toward.

ABSTRACT VISUALS: The Tease and Build phases should use abstract or atmospheric imagery that communicates brand essence without being literal. Light playing on textured surfaces, particles drifting in motion, materials in extreme macro close-up, architectural silhouettes, reflections in glass or water, wisps of smoke, flowing liquids, or geometric forms assembling. These visuals should hint at the brand's aesthetic DNA without revealing its identity. Choose your abstractions deliberately to match the brand personality: sharp angular geometry for technology brands, organic flowing forms for wellness brands, bold saturated color for creative brands, metallic precision for luxury brands.

MINIMAL DIALOGUE: This format relies almost entirely on visuals and music to communicate. If any text appears before the Reveal moment, it should be a single evocative word or a very short phrase of no more than 3 words, never a full sentence. Let the visuals carry the entire narrative. The atmosphere should communicate feeling and brand values that words cannot adequately express. Silence and visual storytelling are more powerful than explanation in this format.

THE REVEAL: The Reveal shot is the climax of the entire piece and must feel earned by everything that preceded it. Use a dramatic visual transition to present the logo or brand: emerge from darkness into light, crystallize from scattered particles, assemble from architectural fragments, dissolve from abstract blur into sharp focus, or unfold from a geometric transformation. The logo or brand mark should appear with visual weight, presence, and authority. The moment should feel inevitable, as if everything before it was building toward this specific image, not random or surprising.

TAGLINE HOLD: After the Reveal, the end card showing the logo and optional tagline MUST hold for a minimum of 2.5 to 3 seconds. This duration is non-negotiable for proper brand recognition and recall. The end card should be clean, spacious, and uncluttered with confident simplicity. The background should complement and support the logo without competing for attention. Typography for any tagline should be refined and secondary to the logo mark.

MOOD AND COLOR: Establish a deliberate, committed mood from the very first frame and build on it consistently. Dark and mysterious, bright and aspirational, warm and human, cool and futuristic: choose one emotional direction and commit fully. The color palette should be restricted to 2-3 primary colors that are used with intention and consistency. When the brand colors appear at the Reveal moment, they should feel like a natural culmination of the established palette, not a jarring introduction of new colors.

CAMERA WORK: Use slow, deliberate camera movements exclusively. Slow push-ins build anticipation and draw the viewer deeper. Slow lateral reveals create mystery about what lies just outside the frame. Symmetrical compositions convey authority, precision, and confidence. Avoid handheld shake, rapid movements, or unstable framing. Every single frame should look like it could be a still photograph: intentional, composed, and beautiful.

MUST INCLUDE: At least one visually striking abstract or atmospheric shot that establishes the mood, a clear and dramatic moment of reveal with a visible shift in visual energy, the logo or brand mark displayed prominently with adequate hold time for recognition, a consistent color palette throughout that aligns with the brand identity, and a musical arc that builds tension leading to the reveal and resolves into confident calm at the end card.`;

// ---------------------------------------------------------------------------
// Video Type Configurations
// ---------------------------------------------------------------------------

export const VIDEO_TYPE_CONFIGS: Record<ProjectType, VideoTypeConfig> = {
  'talking-character': {
    id: 'talking-character',
    labelKey: 'videoTypes.talking-character.name',
    descriptionKey: 'videoTypes.talking-character.description',
    exampleKey: 'videoTypes.talking-character.example',
    emoji: '\uD83C\uDFA4',
    recommendedShotRange: '6-8',
    hasIntroOutro: true,
    narrativeBeats: [
      {
        beatName: 'Hook',
        durationHint: '3s',
        description:
          'Grab attention immediately with a bold statement, surprising visual, or provocative question that compels the viewer to keep watching.',
      },
      {
        beatName: 'Setup',
        durationHint: '5s',
        description:
          'Establish who the character is and the context of the story. Build familiarity and trust with the viewer through direct eye contact and clear, confident framing.',
      },
      {
        beatName: 'Development',
        durationHint: '8s',
        description:
          'Deepen the narrative with new information, personal stories, or escalating tension. Each shot in this phase reveals something the viewer did not know before.',
      },
      {
        beatName: 'Climax',
        durationHint: '5s',
        description:
          'The emotional or informational peak of the piece. The most important message, the biggest reveal, or the highest emotional intensity.',
      },
      {
        beatName: 'Resolution',
        durationHint: '4s',
        description:
          'Wrap up with a satisfying conclusion: a callback to the Hook, a call to action, or a reflective moment that leaves the viewer with something to carry away.',
      },
    ],
    claudeRules: TALKING_CHARACTER_RULES,
    cameraGuidance:
      'Mix medium-shot for dialogue delivery with close-up for emotional emphasis and wide shots for establishing context. The character should be framed consistently in the rule-of-thirds sweet spots. Use slight push-ins during emotional beats to create intimacy.',
    shotMixGuidance:
      '70% character shots (direct address, reactions, expressions), 30% B-roll inserts (illustrative visuals, environment context, detail shots that support the narrative).',
  },

  'event-promo': {
    id: 'event-promo',
    labelKey: 'videoTypes.event-promo.name',
    descriptionKey: 'videoTypes.event-promo.description',
    exampleKey: 'videoTypes.event-promo.example',
    emoji: '\uD83D\uDCE2',
    recommendedShotRange: '6-8',
    hasIntroOutro: false,
    narrativeBeats: [
      {
        beatName: 'Hook',
        durationHint: '3s',
        description:
          'Stop the scroll with a bold visual or surprising moment. Show the end result or most impressive aspect first to capture attention instantly.',
      },
      {
        beatName: 'Problem/Context',
        durationHint: '5s',
        description:
          "Establish the why: the problem being solved, the gap in the viewer's life, or the context that makes this event or product relevant and timely.",
      },
      {
        beatName: 'Solution/Product',
        durationHint: '10s',
        description:
          'The core showcase. Present the product, service, or event from multiple angles. Demonstrate benefits in action, not just features. Show the transformation.',
      },
      {
        beatName: 'Social Proof',
        durationHint: '6s',
        description:
          'Build credibility through testimonials, crowd reactions, expert endorsements, statistics, or past success visuals. Establish trust and reduce hesitation.',
      },
      {
        beatName: 'CTA',
        durationHint: '3s',
        description:
          'Clear call-to-action with text overlay. Include contact info, website, date, or next step. End with logo. Make it easy for the viewer to act immediately.',
      },
    ],
    claudeRules: EVENT_PROMO_RULES,
    cameraGuidance:
      'Wide establishing shots to set the scene, close-up product and detail shots to showcase quality and craftsmanship, medium shots for testimonials and human connection. Use dynamic movement (slider, gimbal) during the product showcase to convey professionalism.',
    shotMixGuidance:
      '40% character shots (testimonials, presenters, reactions), 60% B-roll (product details, service in action, venue, crowd energy, lifestyle context).',
  },

  invitation: {
    id: 'invitation',
    labelKey: 'videoTypes.invitation.name',
    descriptionKey: 'videoTypes.invitation.description',
    exampleKey: 'videoTypes.invitation.example',
    emoji: '\uD83D\uDC8C',
    recommendedShotRange: '4-6',
    hasIntroOutro: true,
    narrativeBeats: [
      {
        beatName: 'Intrigue',
        durationHint: '3s',
        description:
          'Open with a beautiful, intriguing visual that sets the mood. A close-up of an elegant detail, a sweeping venue shot, or the host preparing. Create curiosity.',
      },
      {
        beatName: 'Details / Who-What',
        durationHint: '5s',
        description:
          'Reveal who is inviting and what the occasion is. The host warmly addresses the viewer, or elegant text overlays introduce the event name and nature.',
      },
      {
        beatName: 'When-Where',
        durationHint: '5s',
        description:
          'Present the logistics beautifully: date, time, and venue. Show the location visually while overlaying text with specifics. Make the venue look irresistible.',
      },
      {
        beatName: 'Emotion',
        durationHint: '4s',
        description:
          'The emotional heart of the invitation: why this gathering matters. A glimpse of past memories, the joy of togetherness, or the promise of a special shared experience.',
      },
      {
        beatName: 'RSVP',
        durationHint: '3s',
        description:
          'Close with RSVP instructions: how to confirm attendance, contact details, and a warm closing sentiment. Hold long enough for the viewer to read and act.',
      },
    ],
    claudeRules: INVITATION_RULES,
    cameraGuidance:
      'Elegant, slow camera movements throughout. Warm golden tones and intimate framing. Use shallow depth of field to create softness and dreamy quality. Slow dolly or slider movements add cinematic elegance. Avoid handheld or jittery motion entirely.',
    shotMixGuidance:
      '50% character shots (host welcoming, personal address, emotional moments), 50% B-roll (venue beauty, decorations, table settings, flowers, ambient details).',
  },

  'music-video': {
    id: 'music-video',
    labelKey: 'videoTypes.music-video.name',
    descriptionKey: 'videoTypes.music-video.description',
    exampleKey: 'videoTypes.music-video.example',
    emoji: '\uD83C\uDFB5',
    recommendedShotRange: '8-12',
    hasIntroOutro: false,
    narrativeBeats: [
      {
        beatName: 'Intro',
        durationHint: '4s',
        description:
          "Set the visual world before the vocals begin. Establish mood, location, and color palette. Atmospheric scene-setting that draws the viewer into the song's universe.",
      },
      {
        beatName: 'Verse 1',
        durationHint: '8s',
        description:
          'Begin the visual narrative with longer, contemplative shots. Introduce the story or theme. Mix performance with metaphorical imagery that interprets the lyrics.',
      },
      {
        beatName: 'Chorus',
        durationHint: '6s',
        description:
          'Amplify the energy with faster cuts, more saturated colors, and bigger framing. The visual equivalent of the musical hook: iconic, memorable, emotionally charged.',
      },
      {
        beatName: 'Verse 2',
        durationHint: '8s',
        description:
          'Deepen the visual story with new locations or perspectives. Build on the metaphors established in Verse 1 with added complexity or emotional weight.',
      },
      {
        beatName: 'Bridge',
        durationHint: '5s',
        description:
          'A visual break from the established pattern. Shift in color, location, or style. The moment of contrast that makes the return to the Final Chorus feel powerful.',
      },
      {
        beatName: 'Final Chorus',
        durationHint: '6s',
        description:
          'The visual climax. Combine the best elements from earlier sections with peak intensity. Faster cuts, maximum color saturation, the most dramatic angles and movements.',
      },
      {
        beatName: 'Outro',
        durationHint: '4s',
        description:
          'Visual resolution. Return to stillness or create a callback to the Intro. Let the image linger and breathe as the music fades. End with purpose, not abruptness.',
      },
    ],
    claudeRules: MUSIC_VIDEO_RULES,
    cameraGuidance:
      'Dynamic movement throughout: tracking shots and gimbal work for high-energy sections, static tripod for emotional intimacy. Use crane or jib-style movements for grand reveals. Match camera speed to musical tempo.',
    shotMixGuidance:
      '40% character performance shots (singing, playing, emoting), 60% visual metaphor and narrative B-roll (abstract imagery, story sequences, environmental storytelling).',
  },

  'recap-video': {
    id: 'recap-video',
    labelKey: 'videoTypes.recap-video.name',
    descriptionKey: 'videoTypes.recap-video.description',
    exampleKey: 'videoTypes.recap-video.example',
    emoji: '\uD83C\uDFAC',
    recommendedShotRange: '8-12',
    hasIntroOutro: false,
    narrativeBeats: [
      {
        beatName: 'Opening Highlight',
        durationHint: '3s',
        description:
          'Start with the single most impactful moment from the event. A cold open that immediately communicates the energy and scale. No buildup: hit the ground running.',
      },
      {
        beatName: 'Montage Sequence',
        durationHint: '15s',
        description:
          'Rapid-fire highlights covering the breadth of the event. Quick cuts of 2-3 seconds each showcasing different moments, angles, and participants. Variety is paramount.',
      },
      {
        beatName: 'Emotional Anchor',
        durationHint: '5s',
        description:
          'A slower, more intimate moment that grounds the montage in genuine human emotion. A sincere laugh, a meaningful exchange, or a quiet moment of awe.',
      },
      {
        beatName: 'Peak Moments',
        durationHint: '8s',
        description:
          'The absolute best moments of the event. The biggest cheers, the most dramatic reveals, the peak of celebration. What the event will be remembered for.',
      },
      {
        beatName: 'Gratitude',
        durationHint: '4s',
        description:
          'Acknowledge the people who made it happen. Thank-you moments, group shots, applause, or a host expressing appreciation. Transition from peak energy to warmth.',
      },
      {
        beatName: 'Forward Look',
        durationHint: '3s',
        description:
          'End with forward momentum: a teaser for the next event, a "see you next time" sentiment, or a final triumphant image. Leave the viewer wanting more.',
      },
    ],
    claudeRules: RECAP_VIDEO_RULES,
    cameraGuidance:
      'Maximum variety in angles to maintain montage energy. Mix wide crowd shots, medium group interactions, close-up facial reactions, and macro detail shots. Use handheld for raw energy and tripod for emotional anchors. Every shot should feel like a different perspective.',
    shotMixGuidance:
      '30% character shots (speakers, performers, individual reactions), 70% B-roll highlights (crowd energy, venue scale, detail shots, activity montage, celebration moments).',
  },

  'brand-reveal': {
    id: 'brand-reveal',
    labelKey: 'videoTypes.brand-reveal.name',
    descriptionKey: 'videoTypes.brand-reveal.description',
    exampleKey: 'videoTypes.brand-reveal.example',
    emoji: '\u2728',
    recommendedShotRange: '4-6',
    hasIntroOutro: false,
    narrativeBeats: [
      {
        beatName: 'Tease',
        durationHint: '3s',
        description:
          'Begin with mystery. Abstract shapes, shadows, particles, or obscured forms that hint at something coming. The viewer should not yet know what the brand is.',
      },
      {
        beatName: 'Build',
        durationHint: '5s',
        description:
          'Escalate the visual tension. More detail emerges, music intensifies, camera movement accelerates subtly. Forms begin to coalesce or the environment transforms.',
      },
      {
        beatName: 'Reveal',
        durationHint: '4s',
        description:
          'The payoff. The brand, logo, or product emerges dramatically from the buildup. This moment should feel inevitable and satisfying: the culmination of everything before it.',
      },
      {
        beatName: 'Tagline Hold',
        durationHint: '3s',
        description:
          'Clean end card with logo and optional tagline. Hold for a minimum of 2.5-3 seconds for brand recognition. Simple, confident, uncluttered. Let the brand breathe.',
      },
    ],
    claudeRules: CUSTOM_BRAND_RULES,
    cameraGuidance:
      'Dramatic angles and deliberate, slow camera movements. Slow push-ins create anticipation. Symmetrical compositions convey authority and precision. Use macro and extreme close-ups for abstract phases. Pull back to reveal for the logo moment.',
    shotMixGuidance:
      '20% character shots (if any: silhouettes, hands, partial views), 80% abstract and product B-roll (textures, light play, shapes, atmospheric elements, logo and brand reveal).',
  },

  custom: {
    id: 'custom',
    labelKey: 'videoTypes.custom.name',
    descriptionKey: 'videoTypes.custom.description',
    exampleKey: 'videoTypes.custom.example',
    emoji: '🎨',
    recommendedShotRange: '6-8',
    hasIntroOutro: true,
    narrativeBeats: [
      {
        beatName: 'Opening',
        durationHint: '4s',
        description: 'Set the scene based on the user\'s description. Establish the visual world, tone, and subject.',
      },
      {
        beatName: 'Development',
        durationHint: '6s',
        description: 'Build the narrative or visual progression. Show the subject, product, character, or story unfolding.',
      },
      {
        beatName: 'Climax',
        durationHint: '4s',
        description: 'The peak moment — the most visually striking or emotionally impactful frame.',
      },
      {
        beatName: 'Closing',
        durationHint: '4s',
        description: 'Wrap up with a satisfying ending — logo, tagline, call-to-action, or final emotional beat.',
      },
    ],
    claudeRules: `This is a freeform custom video. The user has provided their own description and optional assets (character, logo, photos, video references). Respect their creative vision and adapt your storyboard to match what they've provided.

KEY RULES:
- If the user provided a character definition, maintain character consistency across all shots
- If the user provided a logo, incorporate it naturally (not forced into every shot)
- If the user provided reference photos, use them as visual inspiration for style, composition, and mood
- If the user provided a video reference URL, match its pacing and visual language
- Be flexible with structure — follow the user's description, not a rigid template
- Ensure visual variety while maintaining a cohesive look`,
    cameraGuidance:
      'Adapt camera work to the user\'s vision. Use a variety of angles and compositions that serve the story. Match the pacing to the mood.',
    shotMixGuidance:
      'Flexible — adapt to the user\'s content. Balance between establishing shots, detail shots, and key moments.',
  },
};

// ---------------------------------------------------------------------------
// Display ordering
// ---------------------------------------------------------------------------

export const VIDEO_TYPE_ORDER: ProjectType[] = [
  'talking-character',
  'event-promo',
  'invitation',
  'music-video',
  'recap-video',
  'brand-reveal',
  'custom',
];

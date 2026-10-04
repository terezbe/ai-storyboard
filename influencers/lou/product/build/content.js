// All copy for "Don't Text. Call." lives here.
// Inline markup: [x] = fill-in, ((x)) = stage cue, {card:N} = link to card N, {page:id} = link to a page,
// *x* = italic, **x** = bold. Straight quotes are converted to curly quotes at build time.

const groups = [
  { n: 1, name: "I'm nervous to ask", line: "You want to start something and your stomach says no." },
  { n: 2, name: 'They went quiet', line: 'The phone is quiet and your head is loud.' },
  { n: 3, name: 'I want more than this', line: "It's something. You want it to be something real." },
  { n: 4, name: 'I need to say no, or end it', line: 'You know the answer. You need the words.' },
  { n: 5, name: 'I messed up', line: 'You said it, sent it or missed it. Now you fix it.' },
  { n: 6, name: 'They crossed a line', line: "Something they did isn't okay with you." },
];

const cards = [
  // ---------------------------------------------------------------- BATCH A: I'm nervous to ask
  {
    n: 1, group: 1,
    title: "I want to ask them out, and I'm scared.",
    rule: 'The Day-and-a-Time Rule',
    take: 'Sometime is never.',
    note: "Nicky says to ask somebody out these days you need \"rizz.\" Riz? Like rice? Kid, you don't need rice. Scared is fine. Scared means it matters. But scared people ask foggy questions, and foggy questions get foggy answers. So you ask it plain, the way it's written below. A day and a time.",
    say: [
      "Hi, it's [your name]. Have you got a minute? ((Wait for the answer.))",
      "Okay, I'll just say it. I like talking to you. Would you like to get a coffee with me on Tuesday, around six? ((If they hesitate:)) And if Tuesday's no good, pick a day that works for you.",
    ],
    text: "Free for a quick call tonight around eight? I want to ask you something, and it's a good something.",
    dont: { said: 'We should hang out sometime.', why: "That's a wish, not an invitation." },
    ifno: [
      "If they say no: \"No problem, thanks for being straight with me.\" And mean it. Then hang up a hero, because you asked, and most people never do.",
      "If they say \"I can't Tuesday,\" that's not a no. Ask what day works. If they say \"maybe\" twice, that's a no wearing a hat. If they don't pick up, leave one short message with the day and the time in it, and let them call you back. You're asking, not chasing.",
    ],
  },
  {
    n: 2, group: 1,
    title: "We've been messaging for weeks, and nothing's happening.",
    rule: 'The Bakery Rule',
    take: 'You can only buy so much bread before you have to say something.',
    note: "In 1955 I bought a loaf every morning for three weeks from a girl I was too scared to talk to. I ate so much bread my mother thought I was sick. Weeks of messages back and forth? Same bread, kid. It's nice, it's safe, and it's going nowhere. The next step is a voice, and then a face.",
    say: [
      "Hi, it's [your name], from all the messages. Is this an okay time? ((Let them answer.))",
      "I figured after [three weeks] of typing, I'd like to actually talk to you. I've really liked getting to know you, and I'd love to meet in person. Are you free [Thursday] after work for a coffee? Somewhere easy, like [place].",
    ],
    text: "I've really liked talking to you. Could I call you tomorrow around seven? I'd love to know what you sound like.",
    dont: { said: 'haha same', why: 'Message four hundred of the same bread. Ask for the date.' },
    ifno: [
      "If they'd rather not talk on the phone yet, that's fine. Skip straight to the plan: \"No problem. Want to just meet for a coffee on [Thursday]?\" Some people are better face to face.",
      "If they dodge the call and the coffee, they like the messages more than the meeting. That's allowed, and it's an answer. Wish them well, stop buying bread, and give those evenings to somebody who wants to meet you. And when you do meet somebody, pick somewhere public and tell a friend where you'll be. Old-fashioned, and smart.",
    ],
  },
  {
    n: 3, group: 1,
    title: 'They said yes to a call. Now I have to dial.',
    rule: 'The Reason Rule',
    take: "You don't need a speech, you need a reason.",
    note: "When I was courting, the phone hung on the kitchen wall with a cord this long. You couldn't pace, you couldn't hide, you just talked. And I never once had a speech ready. I had a reason: Saturday, or a picture I wanted to see. A reason gets you through the first thirty seconds. After that, it's two people talking.",
    say: [
      "Hi, it's [your name]. Is now a good time? I was thinking about Saturday and I wanted to hear your voice.",
      "So how did [the thing they told you about] go? ((Listen. Ask one more question about it.))",
      "I should let you go, but I'd love to see you Saturday. How about two o'clock at [place]?",
    ],
    text: "Still good to talk at seven? I'll call you then.",
    dont: { said: 'So... um... what\'s up?', why: "That's not a reason. That's a shrug." },
    ifno: [
      "If it's a bad time: \"No problem, when's better?\" Then call at exactly that time. Not around then. Then.",
      "If they don't pick up at the time you agreed, leave one short message: \"Hi, it's [your name], calling like I said. Call me back when you can.\" Then let them call you. If they move the call twice, ask once, kindly: \"Do you still want to do this? Either answer is okay.\" There's a fill-in version of this call on {page:cheat}.",
    ],
  },
  {
    n: 4, group: 1,
    title: "I don't know where to take them, and I'm broke.",
    rule: 'The Tuesday Rule',
    take: 'First date on a Tuesday. A coffee and a walk, one hour.',
    note: "My first date with Angie was a Saturday at two, on eleven cents. Today I say Tuesday. Nobody's trying to impress anybody on a Tuesday, and one hour means nobody's trapped. If it's good, the hour turns into two all by itself. And lemme tell you, nobody remembers what a first date cost. They remember whether you listened.",
    say: [
      "Hi, it's [your name]. I'd love to see you, and I'd like to keep it simple. How about Tuesday after work? We get a coffee and take a walk around [the park], about an hour.",
      "If we're having a good time, we keep walking. My treat, since I asked.",
    ],
    text: 'Coffee and a walk on Tuesday? Around six at [place], about an hour, my treat.',
    dont: { said: "Sorry, I can't really afford anything nice.", why: "Don't apologize for your wallet. Pick something good." },
    ifno: [
      "If they say no to the date, it wasn't the price. Thank them and let it go. If Tuesday doesn't work, offer one other day, then let them pick.",
      "If they'd rather do something fancy, be honest: \"I'm keeping things simple right now, but I'd really like to see you.\" Anybody worth knowing will take a walk. And when you run out of ideas, there are ten cheap Tuesday dates on {page:tuesday}.",
    ],
  },
  {
    n: 5, group: 1,
    title: "I can't tell if it's a date or just hanging out.",
    rule: 'The Say-the-Word Rule',
    take: "If it's a date, call it a date.",
    note: "In my day, nobody had to wonder. You said the word \"date,\" you put on your one good shirt, and everybody knew where they stood. Now it's all \"hanging out,\" and half of you are sitting across a table not knowing if it counts. One word fixes it, and you can be the one who says it first.",
    say: [
      "Hey, before [Friday], can I ask you something so I'm not guessing? ((Wait.))",
      "I'd like it to be a date. A real one. Is that how you see it too? Either answer is okay. I'd just like us to be on the same page.",
    ],
    text: "Looking forward to [Friday]. Can I call you tonight for two minutes? Quick question about it, nothing bad.",
    dont: { said: 'So is this, like, a date or whatever, haha?', why: "Don't ask with a laugh to hide behind. Ask it straight." },
    ifno: [
      "If they say yes, a date: wonderful. Now you both know, and you can stop reading tea leaves.",
      "If they say they see you as a friend: \"Thanks for telling me. I'm glad I asked.\" Then be honest with yourself about whether you can enjoy [Friday] as friends. If you can't, it's okay to bow out kindly. If they say \"I don't know yet,\" that's fair too. Go, have a nice time, and let it be what it is.",
    ],
  },
  {
    n: 6, group: 1,
    title: 'I want to ask out a friend.',
    rule: 'The Easy-No Rule',
    take: 'Ask once, out loud, and make it easy to say no.',
    note: "Half the good marriages I know started as friends. The other half started at a bakery. Here's the thing: a friendship that can't survive one honest question wasn't as strong as you thought. So you ask once, you make the no easy, and you mean it when you say you'll be fine.",
    say: [
      "Can I tell you something kind of big? ((Wait.)) I like you, as more than a friend. I'd love to take you on a real date, [Friday] at [seven].",
      "And if you don't feel the same, that's completely okay. I mean it. I'd rather ask than wonder, and I'm not going anywhere either way.",
    ],
    text: "Are you around for a call later? I want to ask you something, and I'd feel silly typing it.",
    dont: { said: 'This is probably stupid, just forget I said anything.', why: 'If you ask, stand behind it.' },
    ifno: [
      "If they say no: \"Okay. Thank you for being honest. We're good.\" Then prove it. Be normal the next time you see them. If you need a little distance for a while, take it quietly, without making them feel guilty.",
      "If they need time to think, give them a few days and don't bring it up. If they say yes, congratulations: you already know they like your company. A friend who says no is still a friend. That's what the easy no is for.",
    ],
  },

  // ---------------------------------------------------------------- SAMPLE (card 7)
  {
    n: 7, group: 2,
    title: "They haven't texted back in two days.",
    rule: 'The One Knock Rule',
    take: "Call once. If there's no answer, send one message. Then the phone goes in a drawer.",
    note: "Listen. Two days of quiet is not a funeral. People lose their phones, work a double, get the flu, get shy. And you can't turn a red light green by staring at it. Thirty-eight years I drove a bus, I tried. So you knock once, nice and friendly, and you go live your life. An answer or no answer, both are answers.",
    say: [
      "Hi, it's [your name]. Is now an okay time? ((Wait for the answer.))",
      "I hadn't heard from you in a couple of days, and I'd rather call than guess. I've really enjoyed getting to know you, and I'd love to see you Thursday. If you're not feeling it, that's okay too. I'd just rather know.",
    ],
    text: "Hey, I've enjoyed getting to know you. If you're still interested, I'd love to see you Thursday. If not, no hard feelings.",
    dont: { said: 'Hello???????????????', why: 'Fifteen question marks never got anybody an answer faster.' },
    ifno: [
      "If they say no, or \"I'm not feeling it\": \"Thanks for telling me. I mean it.\" Then you can stop guessing, and that's a gift ({page:fail}).",
      "If nothing comes back, that's your answer for now. No second call tomorrow, no \"just checking in.\" The phone goes in a drawer, and you go have dinner with somebody who's glad to see you. If they turn up next week with a real reason and a real plan, wonderful. If they turn up with \"hey,\" that's {card:10}.",
    ],
  },

  // ---------------------------------------------------------------- BATCH B
  {
    n: 8, group: 2,
    title: 'They only text me at 11pm.',
    rule: "The Eleven O'Clock Rule",
    take: "If somebody only texts you after eleven, you're not a plan.",
    note: "I was in bed by ten most of my life. Bus drivers start early. So I'm no expert on eleven o'clock, but I know this much: if somebody only remembers you when the lights are off, you're the late show, not the plan. If that's what you both want, that's your business. If you want more, ask for a Saturday afternoon.",
    say: [
      "Hey, it's [your name]. Can I be straight with you about something? ((Let them answer.))",
      "I like you, and I've noticed we only really talk late at night. I'd like more than that. I'd like to see you in the daytime, on an actual date. Are you free [Saturday] around [noon]?",
    ],
    text: "I'm not up for late-night texting anymore, but I'd love to see you in the daytime. Free [Saturday] around [noon]?",
    dont: { said: 'hey', why: "Sent back at 11:04. Hey is not a question, and you don't owe it an answer." },
    ifno: [
      'If they say yes to Saturday, good. Now you get to find out who they are in the daylight.',
      "If they dodge the daytime and keep texting at eleven, that's your answer, and it's a clear one. You don't have to argue about it. Put the phone on silent at ten and go to sleep. That's not a game. It's a bedtime.",
    ],
  },
  {
    n: 9, group: 2,
    title: "They're answering slower and slower.",
    rule: 'The Dimmer Switch Rule',
    take: "When somebody turns the lights down slow, you're allowed to ask if the party's over.",
    note: "In my bus mirror I watched a lot of couples go quiet a little more each week. Same two people, a little farther apart on the seat. Usually one of them already knew, and the other one was waiting to be told. You don't have to wait to be told. You can ask.",
    say: [
      "Hey, I'm glad you picked up. I want to ask you something, and any answer is okay. ((Breathe.))",
      "It feels like things have slowed down between us. Are you still interested in this? If you're not, I'd honestly rather know. I won't make it weird.",
    ],
    text: 'Free for a quick call tonight? Five minutes. I want to ask you something simple, and any answer is fine.',
    dont: { said: 'No worries if you\'re busy!! :)', why: "The fourth time you send it, you're turning the dimmer down too." },
    ifno: [
      "If they say they're not interested: \"Okay. I appreciate you telling me.\" That stings, and it's still a gift ({page:fail}).",
      "If they say \"I'm just busy,\" ask for a day and a time. Busy people who want to see you find one. If they don't answer at all, the dimmer just clicked off. Let it be off, and don't rattle the switch.",
    ],
  },
  {
    n: 10, group: 2,
    title: 'They vanished, and now they\'re back with "hey."',
    rule: 'The Front Door Rule',
    take: 'If you left by the back door, you come back by the front, with an explanation.',
    note: "Ghosting. Like the movie? No, Nicky says, it's when somebody disappears without a word. Then one day they're back with one word, like nothing happened. You don't owe them a party. You don't owe them a fight, either. But before you open the door, you get to ask what happened.",
    say: [
      "Hey. I got your message. ((Keep it calm. Nobody's on trial.))",
      "Honestly, you disappeared for [three weeks], and I'm not going to pretend that didn't happen. If you want to see me, I'd need to hear what happened, and I'd want a real plan. If not, I understand.",
    ],
    text: 'Good to hear from you. If you want to catch up properly, call me this week.',
    dont: { said: 'omg hiii!!', why: 'Like nothing happened? Something happened. You were there.' },
    ifno: [
      "If they call with a real explanation and a real plan, you decide whether you believe it. You're allowed to give a second chance. You're not required to.",
      "If all you get back is another \"hey,\" that's the back door again. Leave it shut, and don't send a speech about why. You already showed them the front door. They know where it is.",
    ],
  },
  {
    n: 11, group: 3,
    title: 'The date went great, and I want another one.',
    rule: 'The Monday Sauce Rule',
    take: 'Sauce is better the next day. So is "I had a really good time."',
    note: "Angie's sauce was good on Sunday and better on Monday. The recipe's in Rosemarie's head now, and she won't tell Joey. Anyway. You had a nice time? Don't play it cool for three days. Playing it cool is how good things go cold. Call the next day and say so.",
    say: [
      "Hey, it's me. I just wanted to say I had a really good time last night. Really.",
      "I'd love to see you again. Are you free [Friday] at [seven]? I was thinking we could try [that place you said you'd never been to].",
    ],
    text: 'Had a really good time last night. Free [Friday] at [seven]? I\'d love to see you again.',
    dont: { said: 'lol that was fun', why: "Three days later, to look relaxed. That's not cool. That's cold." },
    ifno: [
      "If they say they didn't feel it, thank them: \"I'm glad you told me. I had fun.\" Mean it, and let it be one good night. That's not nothing.",
      "If they're happy to hear from you but busy, ask what day works and let them pick. If they don't answer, you said a nice, true thing to another person, and that's never wasted. Give it a few days, then let it go.",
    ],
  },
  {
    n: 12, group: 3,
    title: 'I need to ask "what are we?"',
    rule: 'The Situation-ship Rule',
    take: 'A boat with no captain just goes in circles.',
    note: "A situation-ship. Nicky had to say it three times. I tapped my hearing aid, I thought it was broken. A ship? With no captain and no map? Listen. If you've been on that boat for months and you want to know where it's going, you're allowed to ask the other passenger.",
    say: [
      "Can I ask you something real? ((Pause.)) I like what we have, and I've been wondering where it's going.",
      "For me, I'd like [us to be exclusive / us to be together, for real]. What do you want? Whatever it is, I can handle it. I just want to know.",
    ],
    text: "Can we talk on the phone tonight? I want to ask you something about us, and it's nothing scary.",
    dont: { said: "I'm chill with whatever.", why: 'If you\'re not. Pretending to be chill is how you spend a year on that boat.' },
    ifno: [
      "If they want the same thing, wonderful. Now it has a name. If they say \"I don't want labels,\" that's an answer too, and you get to decide whether it's enough for you. If it isn't, you can get off the boat. The words for that are on {card:18}.",
      "If they say \"I don't know,\" give it a little time, then ask once more. If \"I don't know\" turns into a whole season, it's a no.",
    ],
  },
  {
    n: 13, group: 3,
    title: 'I like them, and I want to say it first.',
    rule: 'The Somebody-Has-To Rule',
    take: 'Somebody has to say it first. Might as well be the brave one.',
    note: "Every week somebody in the comments asks, \"What if they don't feel the same?\" Then you'll know, and you'll be okay. But what if they do, and you both just sat there? Like two kids on the phone at night: \"You hang up first.\" \"No, you hang up first.\" Somebody's gotta go first, sweetheart.",
    say: [
      "Can I tell you something? ((Let them say yes.)) I really like you. Not in a casual way. I like how you [remember every little thing I tell you].",
      "You don't have to say anything back right now. I just didn't want to keep it to myself anymore. ((Then stop, and let it land.))",
    ],
    text: "Free for a call at nine? I've got something nice to tell you, and I want to say it out loud.",
    dont: { said: "I think I like you, but whatever, it's dumb.", why: "Don't take it back in the same breath." },
    ifno: [
      "If they feel the same, enjoy that, kid. That's the best phone call there is.",
      "If they say they're not there yet, that's not a no. Don't push, don't ask again next week, and let it breathe. If they say they don't feel that way: \"Thank you for telling me. I'm still glad I said it.\" Then give yourself some room. You were brave. Brave is never the mistake.",
    ],
  },

  // ---------------------------------------------------------------- BATCH C
  {
    n: 14, group: 3,
    title: "They're on their phone the whole time we're together.",
    rule: 'The Face-Down Rule',
    take: 'On a date, the phone goes face down.',
    note: "Sunday lunch at my house, eight grandkids, and you'd think half of them were expecting a call from the President. So at my table, phones go in the bread basket. On a date, face down is enough. Listen, wanting somebody's attention isn't needy. It's the whole point of sitting across from them.",
    say: [
      "Can I bring something up? It's small, but it matters to me. ((Pause.))",
      "When we're out, it feels like your phone gets more of you than I do. I don't think you mean anything by it. I just miss you when you're sitting right there. Could we keep our phones face down when we're together?",
    ],
    text: "Can I call you later? There's a small thing I want to bring up. Nothing dramatic.",
    dont: { said: 'Am I boring you or something?', why: "That's a fight starter, not a question." },
    ifno: [
      "If they say \"you're right, sorry\" and they actually try, that's a good person with a bad habit. Everybody's got one. Put yours face down too, so it's fair.",
      "If they roll their eyes and keep scrolling, it's not a habit anymore. It's a choice, and it tells you where you rank. You're allowed to want to rank above a phone.",
    ],
  },
  {
    n: 15, group: 3,
    title: 'They keep canceling on me.',
    rule: 'The Schedule Rule',
    take: 'Once is bad luck. Every week is a schedule.',
    note: "When I was courting Angie, I called her every night at seven. Not seven-ish. Seven. One cancel is just life. But when it's every time, they're telling you something they won't say out loud. If they wanted to, they'd call. You can ask them to say the rest.",
    say: [
      "Hey, have you got a few minutes? I want to be honest about something. ((Wait.))",
      "The last [three] times we made plans, they fell through, and I'm starting to feel like I'm not a priority. If things are hard for you right now, I get it, and I'd rather you just tell me. Do you want to keep doing this?",
    ],
    text: "Can I call you tomorrow at [seven]? I'd like to talk about our plans, and not over text.",
    dont: { said: 'No worries!!', why: "The fourth time, when you're worried. If it's a worry, say it's a worry." },
    ifno: [
      'If they own it and make a plan they actually keep, good. That\'s a real sign, and people do get better.',
      "If they cancel the next one too, you don't need another talk. Stop making plans, and tell them once, kindly: \"I think we want different things. Take care.\" Don't keep a seat warm for somebody who never shows up.",
    ],
  },
  {
    n: 16, group: 4,
    title: "Someone asked me out, and I'm not interested.",
    rule: 'The Thank-You-First Rule',
    take: 'Somebody was brave enough to ask. Thank them before you say no.',
    note: "I know what that ask cost them. When I asked Angie, I had eleven cents and a knot in my stomach the size of a meatball. So thank them, then tell them straight. A quick, kind no is a gift. A \"maybe, let me see\" is a week of somebody staring at their phone. And if they asked by text, a text back is fine. Answer the way you were asked.",
    say: [
      'Hey, thank you for asking me. Really, that took guts.',
      "I want to be honest with you: I don't feel that way. But I'm glad you asked, and I liked how you did it.",
    ],
    text: "Thank you for asking, that was really kind. I want to be honest: I don't feel that way, and I didn't want to leave you guessing.",
    dont: { said: "I'm just really busy right now.", why: 'When the truth is no. Busy gets asked again next month.' },
    ifno: [
      "If they're gracious about it, great. That's a good person, and somebody else is going to be lucky.",
      "If they push (\"Why not? Just one coffee?\"), you don't owe them a reason or a second answer: \"I already answered. Take care.\" If they won't let it go, or they make you uneasy, that's {card:24}. And if you're ever scared, go to {card:25}.",
    ],
  },
  {
    n: 17, group: 4,
    title: "A few dates in, and I'm not feeling it.",
    rule: 'The Pull-the-Cord Rule',
    take: "You don't owe anybody a speech. You owe them one sentence.",
    note: "On my bus, when you wanted off, you pulled the cord. The bell rang, I pulled over, you got off. Nobody jumped out the window. Disappearing on somebody after a few dates is jumping out the window. Pull the cord instead, the same week you know. After a date or two, a kind text counts as pulling the cord.",
    say: [
      "Hi, [their name]. Have you got a minute? ((Let them answer.))",
      "I've really enjoyed meeting you, and I didn't want to just disappear on you. I'm not feeling it, I wish you well. ((That's it. You can stop there.))",
    ],
    text: "I've enjoyed our dates, and I want to be straight with you instead of disappearing. I'm not feeling it, I wish you well.",
    dont: { said: "Let's just see where it goes.", why: 'When you already know where it goes. Say so.' },
    ifno: [
      "If they ask why, keep it simple: \"It's just a feeling. It's nothing you did.\" You don't owe them a list.",
      "If they argue, don't debate. You're not negotiating: \"I've made up my mind, but I'm glad we met.\" If they don't answer at all, that's fine. You did the decent thing, and you're done.",
    ],
  },
  {
    n: 18, group: 4,
    title: 'I need to end this situationship.',
    rule: 'The Short-Is-Kind Rule',
    take: 'Short is kind. The long version is for you, not for them.',
    note: "Time to get off the boat from {card:12}. Do it on the phone, or better, in person. Not with a meme. You say the true thing in one breath, you wish them well, and then you stop talking. That's the hard part. Most people keep going because the quiet scares them. Let it be quiet.",
    say: [
      "Hey. Have you got a few minutes? I want to be honest with you.",
      "I've realized I want something more serious, and I don't think it's going to be us. I wish you well. ((Then stop.))",
    ],
    text: "Can I call you tonight? I want to talk about us, and it's not a text kind of thing.",
    dont: { said: "I'm so sorry, I'm sorry, okay, so basically, the thing is...", why: "Don't explain for twenty minutes or apologize six times." },
    ifno: [
      "If they ask, \"Can we still hang out?\" that's your call. If hanging out is how you got on this boat, \"No thanks\" is a whole answer. If they promise to change now that you're leaving, you can listen, and still go.",
      "If they don't pick up, send the short version as a message, so it isn't left hanging. And if you don't feel safe with this person, a message is fine, and so is blocking. Then read {card:25}.",
    ],
  },
  {
    n: 19, group: 4,
    title: 'I need to end a real relationship.',
    rule: 'The No-Trial Rule',
    take: "A breakup is a decision, not a trial. You don't need to win the case.",
    note: "After a long time together, you tell them face to face if it's safe, on the phone if face to face isn't possible, and never by text. And leave the list of everything they did wrong at home. You're not a lawyer, and they're not on trial. You decided. That's enough. If you're scared of how they'll take it, skip this card and go to {card:25}.",
    say: [
      "I need to tell you something hard, and I've thought about it for a long time. ((Breathe.))",
      "I'm ending our relationship. This isn't a fight, and it isn't something we can fix. I've decided. I care about you, and I'm sorry this hurts.",
    ],
    text: "Can we talk tonight at [seven], in person? It's important, and it can't be a text.",
    dont: { said: 'Maybe we can try again someday.', why: "If you don't mean it. False hope is the cruelest thing you can leave behind." },
    ifno: [
      "If they beg, bargain or get angry, you don't have to argue: \"I hear you. I'm not changing my mind.\" Say it as many times as you need, but don't reopen the case. Keys, stuff and the lease can wait for another conversation.",
      'Have a friend you can call right after, or somewhere to go for the night. And if at any point you feel unsafe, leave, and go to {card:25}.',
    ],
  },

  // ---------------------------------------------------------------- BATCH D
  {
    n: 20, group: 5,
    title: 'I said something dumb.',
    rule: 'The I-Was-Wrong Rule',
    take: '"I was wrong. I\'m sorry." Then stop talking.',
    note: "Sixty-five years of marriage, I said plenty of dumb things. The fix was never a big speech. It was \"I was wrong, I'm sorry,\" and then closing my mouth, which for me was always the hard part. A long sorry turns into a speech about you. A short one is about them.",
    say: [
      "Hey, it's me. I said something dumb the other night about [the thing].",
      "It was thoughtless, and I'm sorry. You didn't deserve that. That's all. I just didn't want it sitting there between us.",
    ],
    text: 'I said something dumb, and I want to apologize properly, not by text. Can I call you tonight?',
    dont: { said: "I'm sorry if you were offended.", why: "That's not a sorry. That's a bill." },
    ifno: [
      "If they're not ready to hear it, leave it there. A sorry isn't a ticket you get to cash in, so don't keep apologizing until they forgive you. If they need time, give it.",
      "If they're done, they're done, and you take the lesson to the next person: think one second longer before you talk. I'm still working on that one at ninety.",
    ],
  },
  {
    n: 21, group: 5,
    title: 'I sent a text I want back.',
    rule: 'The Noon Rule',
    take: 'What you sent at midnight, you fix by noon.',
    note: "My grandkids tell me people send things at two in the morning they'd never say at two in the afternoon. In my day the phone was on the kitchen wall, and my mother was in the kitchen. That kept things short. So: sleep, coffee, then one plain apology before lunch.",
    say: [
      "Hi. So, about the message I sent last night. That was too much, it was late, and I'm sorry.",
      "You don't need to answer it. I just wanted to say so out loud, instead of pretending it didn't happen.",
    ],
    text: "Last night's message was too much. I'm sorry. Can I call you at lunch and say it properly?",
    dont: { said: 'lol ignore that, I was so drunk', why: "The drink didn't hold the phone. You did." },
    ifno: [
      "Then you let it rest. One apology, by noon, then hands off. No follow-up, no \"Did you see my message?\" If they write back kindly, lucky you.",
      "If they don't, take the lesson and charge your phone in the kitchen overnight for a while. Mine lived in the kitchen my whole life, and I never once sent anything I regretted at two in the morning.",
    ],
  },
  {
    n: 22, group: 5,
    title: "I'm running late, or I have to cancel.",
    rule: "The Bus Driver's Rule",
    take: "Late is late. Don't explain the traffic. Apologize for the wait.",
    note: "Thirty-eight years I drove a city bus, and I can tell you, nobody waiting at a stop in the rain cares why you're late. They care that somebody told them. So you call before the time, not after, and you give them the new time like you mean it.",
    say: [
      "Hi, it's [your name]. I'm so sorry, I'm running about [twenty] minutes late. That's on me. I'll be there at [7:20]. If that wrecks your night, we can move it.",
      "((If you have to cancel:)) I have to cancel tonight, and I'm sorry. I know you planned around it. Can I take you out [Thursday] at [seven] instead? My treat.",
    ],
    text: "Running [20] minutes late, my fault, so sorry. I'll be there by [7:20]. Still okay, or should we move it to [Thursday]?",
    dont: { said: 'Traffic was crazy.', why: "Ten minutes after you were due. That's a weather report, not an apology." },
    ifno: [
      "If they're upset, let them be upset. You earned it. Say \"I understand, and I'm sorry,\" and don't argue your case.",
      "If they'd rather call the night off, accept it without a fuss and offer one new day. And next time, leave when you think you're early. That's what on time looks like.",
    ],
  },
  {
    n: 23, group: 6,
    title: 'They said something that hurt me.',
    rule: 'The Ouch Rule',
    take: 'If it stung, say "ouch" out loud. What they do next is your answer.',
    note: "Everybody says a dumb thing sometimes. I've said a few hundred. So the first time, you figure it was dumb, not mean, and you tell them. Not in a text with three paragraphs. Out loud, once, plain. It's never the dumb thing that does the damage. It's the dumb thing nobody mentions, sitting there for a year.",
    say: [
      "Can I mention something from the other night? ((Wait for the okay.)) When you said [what they said], it stung.",
      "I don't think you meant it that way, but I wanted you to know. I don't want to sit on it and let it get bigger.",
    ],
    text: "Can I call you at [eight]? Something from the other night is still on my mind, and I want to clear it up.",
    dont: { said: "It's fine.", why: 'When it isn\'t. "It\'s fine" is how small things get big.' },
    ifno: [
      "A good person says \"I'm sorry, I didn't think.\" A not-so-good one tells you you're too sensitive. Now you know which one you've got.",
      "If it keeps happening after you said it plain, it's not a slip anymore. It's a habit, and you can leave: the words are on {card:18} and {card:19}. If what they say makes you feel scared or small all the time, go to {card:25}.",
    ],
  },
  {
    n: 24, group: 6,
    title: 'They keep pushing after I said no.',
    rule: 'The One-Word Rule',
    take: "No is one word. It doesn't need an explanation, and it doesn't get a recount.",
    note: "Pushing comes in a lot of flavors: \"come on,\" \"just one more drink,\" \"you said maybe last time,\" \"if you really liked me.\" Doesn't matter the flavor. You said no, to coming over, to moving faster, to whatever it was, and that's the whole conversation. Anybody worth your time hears it the first time.",
    say: [
      "I want to say something clearly, so there's no confusion. ((Slow down. Say it like a fact, because it is one.))",
      "I said no to [staying over / moving faster / that], and I meant it. I'm not going to keep explaining. If we're going to keep seeing each other, I need you to stop asking.",
    ],
    text: "I said no, and I meant it. Please don't ask again.",
    dont: { said: 'Maybe another time.', why: 'If you mean no. A soft no just gets asked again.' },
    ifno: [
      "If they argue, sulk or ask again, that's your answer about them. You don't owe a second no, but if you want one: \"I already answered.\" Then end the call.",
      "If they don't stop, if you feel scared, or if they push with their hands instead of their words, go to {card:25} right now. That isn't dating anymore.",
    ],
  },
  {
    n: 25, group: 6,
    safety: true,
    title: "If they scare you, this isn't a dating problem.",
    rule: 'The Bravest Call Rule',
    take: "The bravest call in this whole file isn't to them.",
    note: "Listen to me, sweetheart. If you're scared of how they'll react, if they check your phone, decide who you can see, control your money, threaten you or hurt you, no card in here is for that. That's when you call somebody whose whole job is to help. It isn't weak. It's the strongest call you'll ever make.",
    say: [
      "((To a helpline. It's free and confidential, and somebody answers day and night.))",
      "Hi. I'm not sure if this counts, but I'm scared of the person I'm with. [One thing that happened.] I don't know what to do next.",
    ],
    helpline: [
      '**US:** National Domestic Violence Hotline, **1-800-799-7233**',
      '**UK:** Refuge, National Domestic Abuse Helpline, **0808 2000 247**',
      '**In danger right now:** 911 in the US, 999 in the UK, or your local emergency number.',
    ],
    textNote: 'If calling isn\'t safe, the US hotline takes texts: text **START** to **88788**. Or send one person you trust:',
    text: "Can you call me? I'm not okay, and I need to talk.",
    dont: { said: "Maybe I'm overreacting.", why: "If you're scared, you're not overreacting. It counts." },
    ifno: [
      "If the line is busy, try again, or use the text line. If you think they check your phone, call from a phone they can't check, like a friend's.",
      "Don't use the breakup cards in this file on someone who scares you. The people on those lines can help you plan how to leave safely. And you call them. I mean it.",
    ],
  },
];

module.exports = { groups, cards };

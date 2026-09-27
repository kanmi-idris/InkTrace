---
title: "TypeSafe AI's RLCD Pitch: Calibrated Decision Models Instead of Chat, and What Outside Coverage Adds"
kind: "paste"
captured_at: "2026-09-17 04:18"
tags: ["typesafe-ai", "rlcd", "rlhf", "rlvr", "calibration", "jev", "diogo-almeida", "machine-native-intelligence", "ai-startup"]
source_url: "https://docs.typesafe.ai/ai-primer"
status: "inbox"
---

# TypeSafe AI's RLCD Pitch: Calibrated Decision Models Instead of Chat, and What Outside Coverage Adds

## Source overview
This is TypeSafe AI's own documentation page ('AI primer') explaining the reasoning behind Reinforcement Learning for Calibrated Decisions (RLCD), the training approach behind their model line. TypeSafe is a company, not just a research idea; independent verification below confirms the company, its funding, and its first shipped model, while adding context the docs page itself does not include.

## TypeSafe's own framing (from the docs)
TypeSafe argues that most AI products are built around chat, but large-scale automation will mostly be AI-to-AI or AI-to-software rather than AI-to-human, so a machine-facing interface (predictable, inspectable, testable outputs) matters more than a conversational one. They call this positioning 'Machine Native Intelligence.'

The docs frame three post-training approaches to pretrained language models:
- RLHF (reinforcement learning from human feedback): trains a model to produce responses people prefer; this is the method behind InstructGPT and ChatGPT.
- RLVR (reinforcement learning with verifiable rewards): trains reasoning models strong at programmatically checkable tasks like math, at higher cost and latency.
- RLCD (TypeSafe's own approach): trains the model to output a decision plus a calibrated probability instead of generated text, so a higher stated probability should correspond to a proportionally higher real-world chance of being correct across many predictions (their example: outcomes assigned 0.8 should be right about 80% of the time, in aggregate, not as a per-answer guarantee).

The docs' critique of RLHF: optimizing for what people prefer to read can reward sycophancy and confident-sounding but wrong answers, and can cause 'mode dropping,' where the model increasingly favors one output style (e.g., instruction-following) at the expense of other valid outputs, described as a milder version of the 'mode collapse' failure mode seen in generative adversarial networks. TypeSafe's position, stated directly, is that human preference and machine trustworthiness are different optimization targets, and that RLHF remains reasonable for conversational products but not for unattended production automation.

## Independent verification: the company, the model, and the founder's actual credit
TypeSafe AI is a real, funded company: it emerged from stealth around 2026-09-15 with $40 million in seed funding led by DCVC, founded by Diogo Almeida (CEO), Erik Gafni, and Sasha Sheng, per multiple wire reports (BusinessWire/Yahoo Finance/Morningstar carrying the same release). The next day, 2026-09-16, TypeSafe publicly released its first 'System One Model,' named Jev, described in company and press materials as returning typed, structured decisions with calibrated probabilities rather than generated text, built on the same RLCD training approach described in the docs page. The Register's independent coverage confirms Jev's mechanism (typed probabilistic outputs instead of natural-language responses) and notes a concrete example use case: playing Doom from structured game-state input, though the company frames business workflows like customer-service routing as the more likely real use.

On the specific claim in the docs page that RLHF was 'co-invented by Diogo Almeida': independent reporting adds an important nuance the primer omits. A substack analysis (Anthony Maio, 2026-09-16) specifically checks this framing and states Almeida was 'an equal-contribution primary author of the InstructGPT paper and contributed to GPT-4,' calling this a more accurate description than the 'co-inventor of ChatGPT' framing used in some of the company's own promotional material on social media. TypeSafe's own team page describes him as having 'co-invented RLHF and InstructGPT,' and multiple press releases describe him as 'co-inventor of RLHF/ChatGPT.' This record treats the specific 'co-inventor of RLHF' framing as the company's own claim, corroborated as directionally accurate (he was a primary author on the relevant research) but not necessarily the single or sole inventor, per the more careful outside framing.

## What outside coverage adds that the docs page does not disclose
The same substack analysis, published the day of the model's public release, states plainly that as of that date 'TypeSafe has described what RLCD is meant to do without publishing enough for anyone to evaluate it as an algorithm. The reward function, architecture, training procedure, and calibration methodology are all undisclosed.' In other words, the conceptual pitch in the AI primer page (calibration, decisions instead of text, three training paradigms) is not accompanied, at least as of this capture, by a technical paper, benchmark methodology, or reward-model specification that would let a third party independently verify the calibration claims. Company marketing separately claims Jev is up to roughly 193.6x faster and 444.6x cheaper than comparison models and delivers frontier-level intelligence at sub-100-millisecond latency; these specific performance multipliers are the company's own reported figures and were not independently benchmarked by any of the outside sources found during this verification.

## Evidence boundary
The TypeSafe documentation page (the AI primer content shared in this conversation) was treated as primary source material and paraphrased above rather than reproduced. Independent corroboration for the company's existence, funding, founding team, and first model release comes from BusinessWire-syndicated wire coverage (Yahoo Finance, Morningstar, Chronicle Journal), The Register, and a critical third-party analysis (Anthony Maio's Substack), all dated 2026-09-15/16. The specific quantitative performance claims (fastest/cheapest multipliers, sub-100ms latency) and the underlying RLCD training methodology are recorded as unverified company claims, since outside sources explicitly note the reward function, architecture, and calibration methodology were undisclosed at time of release.

## Sources
- https://docs.typesafe.ai/ai-primer (primary source, paraphrased)
- https://typesafe.ai/ and https://typesafe.ai/team
- https://typesafe.ai/blog/introducing-system-one-models-and-jev
- https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/
- https://anthonymaio.substack.com/p/jev-the-language-model-that-wont
- https://www.businesswire.com/news/home/20260915525333/en/TypeSafe-AI-Emerges-From-Stealth-With-%2440M-in-Funding-With-New-Model-for-Composable-AI

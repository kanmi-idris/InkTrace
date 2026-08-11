---
title: "LLM Text Watermarking: KGW, Robustness, and Detector Risks"
kind: "paste"
captured_at: "2026-08-11 17:21"
tags: ["user-provided", "llm-watermarking", "ai-detection", "kgw", "synthid", "anthropic", "google", "openai", "text-generation"]
source_url: "user-provided://conversation/2026-08-11-llm-watermarking-explainer"
status: "inbox"
---

# LLM Text Watermarking: KGW, Robustness, and Detector Risks

## Evidence status
This is a user-provided analysis. The claims about Anthropic, Google, OpenAI, GPTZero, watermark deployments, and paraphrasing tests are not independently verified here.

## KGW-style watermarking model
The analysis describes a common generation-time pattern:
1. Hash the preceding tokens with a secret key.
2. Use the hash to partition or reweight candidate tokens, such as a green and red set.
3. Sample from the modified distribution.

Detection reconstructs the token partitions from the preceding text and secret key. It then tests whether green-set tokens occur more often than expected by chance.

## Robustness and quality trade-offs
The analysis says deterministic token-history hashes are vulnerable to paraphrasing. It names statistical or adaptive approaches such as SIR and Adaptive Watermark as possible robustness strategies.

It argues that watermarking can reduce text quality, although the effect may be hard to notice in many contexts. It identifies short or highly predictable text, such as 2+2=4, as difficult cases.

It says methods such as DiPmark attempt to avoid shifting the text distribution on average. It also identifies watermark stealing as a risk when detectors are exposed to attackers.

## Frontier-lab constraints
The analysis identifies these engineering and governance constraints:
- Streaming systems need token-by-token watermarking.
- Secret-key leakage can compromise a watermark, so key rotation may reduce blast radius.
- Code cannot accept arbitrary word changes. Selective watermarking may target flexible regions such as variable names.
- Detectors need user education about false positives and false negatives.

The analysis references SemStamp, PostMark, SWEET, EWD, Invisible Entropy, Watermark Stealing, and Zhang et al. 2024, Watermarks in the Sand. These references were not checked in this capture.

## Forecast in the analysis
The author argues that public detectors may help attackers develop removal strategies. Private detectors may be safer but can remain less battle-tested. The author also claims that intense paraphrasing, syntax changes, and human-text substitution can defeat some current watermarks, including Google DeepMind's SynthID in the author's tests.

The author expects frontier labs and regulators to accept imperfect watermarks as a practical compliance measure. The analysis concludes that users should focus at least as much on AI detectors as on watermarks.

## User-provided text
Claude's watermark probably doesn't work how you think. As the CTO of GPTZero, I'll explain how Anthropic, Google and OpenAI are building text watermarking in this brief explainer and whether it can be defeated.

Almost all forms of watermarking that are fast and cheap enough for a frontier lab have the same formula, following the KGW method:

In generation:

1. Let's say you've generated n tokens so far. Take those n tokens + a secret key to generate a random hash
2. Use that hash to randomly reweight the probabilities for the n+1 token, and then sample from that new distribution. In the simple case, you could split 50% of all English words into a green or red set based on your hash, and boost the probability of words in the green set.

For watermark detection:

1. For each token, see if it was in the green or red set.
2. To do this, recreate the hash based on the secret key and the text preceding the current token. Then, recreate the green and red set of words.
3. Once you've checked all the words in the text, if the next token is selected disproportionally from the green set more than 50% of the time, you claim the text has the watermark.

I can tell you want to ask the following:

1) Isn't it easy to mess up the hash if you paraphrase the text? The answer is mostly yes, however, you can use a statistical model to get your hash instead of a deterministic function (SIR, Adaptive Watermark). Since the entire watermark is probabilistic, this is fine.

2) Doesn't this make the text much worse? The answer is yes, it does - Yes, it does – but for most people, it's imperceptible (Google claims in human feedback study with 20,000 texts), since there are exponentially many ways to write the same paragraph. DiPmark does something more sophisticated to avoid shifting the text distribution on average. Of course, watermarks fail on short text or highly predictable texts like "2+2=4".

3) Shouldn't it be easy to figure out the green and red sets? The answer is no. You would need an exponentially large number of samples from the watermarker to reconstruct those sets exactly, but it's a risk if the detector is open to the wild (Watermark Stealing)

Still, there are couple challenges that a frontier lab needs to overcome:
1. Their watermark needs to work token-by-token because they are streaming their text to users. Many watermark methods plan sentences or paragraphs at a time, or change the text after its entirely written, in order to make their watermark robust to paraphrasers, and a frontier lab cannot afford to do this yet (SemStamp, PostMark)
2. If the secret key leaks, the watermark is busted. To avoid a large blast damage from this, you need to have a couple secret keys in rotation.
3. There are some texts, like code, that cannot be arbitrarily changed, otherwise the code will break. In those cases, the watermark needs to selectively change words in parts of the text that can tolerate synonyms (i.e. like variable naming) - see SWEET, EWD, Invisible Entropy.
4. They will need to educate their users on how to deal with false positives and false negatives of a detector, which is a big challenge (one we put a lot of effort into)

So, how do I see this playing out in the next 6 months?
1. If Anthropic releases the watermark detector publically, I think they defeat their own watermark. People find reliable watermark removal strategies by testing against Anthropic  (AI detectors like GPTZero have an advantage here because they can train against these adversaries once they become popular).
2. If they keep the detector private to the government, like Google has done, it's "safer". However, there are some papers showing trained approaches that work robustly to zero-shot break watermarks without any data, simply because they try to write the text just like a human (Zhang et al. 2024, Watermarks in the Sand). Also, making your detector makes it battle-tested and stronger long-term (my experience).
3. In my testing, the watermarks don't survive intense paraphrasing (especially if you combine word choice and syntax attacks), or human text substitution (rewrite your AI text by plagiarizing human authors). The free paraphrasers I've tried have quickly bypassed Google Deepmind's SynthId for what it's worth.
4. All-in-all, frontier labs are likely okay with this because they expect most users to not attack the watermark, and also because they + European regulators likely don't care past a certain point - its good enough.
5. Overall, I think users of frontier LLMs will not really care about this, because 1) they don't realize watermarks are there, 2) EU will force everyone to conform, 3) this seems more like regulatory hoop-jumping than an earnest effort from frontier labs to expose LLM use

Lastly, people's first concern shouldn't be watermarking, it should be AI detectors!

Source: https://alignment.anthropic.com/2025/distill-paraphrases/
Title: Do reasoning models use their scratchpad like we do? Evidence from distilling paraphrases
Author: Anthropic Alignment Science
Retrieved: 2026-07-21

---

TL;DR: We provide some evidence that Claude 3.7 Sonnet doesn't encode hidden reasoning in its scratchpad by showing that training it to use paraphrased versions of the scratchpads does not degrade performance.

The scratchpads from reasoning models look human understandable: when reasoning about a math problem, reasoning models consider intermediate steps similar to the ones I would use, backtrack and double-check their work as I would.

Reasoning models have sometimes been observed changing languages, but besides this kind of slightly surprising formatting, the scratchpads of all reasoning models (whose scratchpads are visible) so far look very close to regular human reasoning.

But even if scratchpads look like they perform human-like reasoning, scratchpads might improve performance through some less human-understandable mechanisms. One particularly worrying possibility is that models could encode additional reasoning in syntax of the text (e.g. encoding a bit in using a bulleted vs a numbered list, and then using this bit later in the scratchpad). This is sometimes called encoded reasoning or Chain-of-Thought steganography. If LLMs learned how to use encoded reasoning during RL, they might be able to use it in deployment to reason about how to cause catastrophes while making their reasoning look like benign reasoning, which might increase their ability to scheme and cause catastrophes compared to worlds where they can only figure out how to cause a catastrophe in a single forward pass.

To evaluate whether reasoning models rely on encoded reasoning, we can try to remove or randomize the syntax of the scratchpads by paraphrasing them, and then make the model use these paraphrased scratchpads. To do so, we take 10,000 correct math-related scratchpads from an early checkpoint of Claude 3.7 Sonnet, paraphrase them using Claude 3.5 Sonnet, and then fine-tune the base model of Claude 3.7 Sonnet to produce the paraphrased reasoning (i.e. we distill paraphrased scratchpads into the base model). If the performance of this model is close to the performance of the same base model fine-tuned on the pre-paraphrase scratchpad, then this strongly indicates that the model is not relying on the syntax to get the right answer to math problems during RL.

Key finding: pass@1 accuracy on MATH of the base model fine-tuned on paraphrased scratchpads is very close to the pass@1 accuracy of the base model fine-tuned on the original scratchpads, which suggests that on MATH, encoded reasoning does not play a significant role.

Additional experiments:
- Using different paraphrasers and base models: results mostly confirm that encoded reasoning does not play a significant role.
- Using word dropout and filler tokens: ambiguous evidence; dropping 5% of words slightly reduces performance, 20% reduces much more strongly. Empty scratchpad and filler tokens (counting 1-3000) both perform poorly, which is evidence that reasoning is necessary for high performance.

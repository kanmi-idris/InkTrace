---
title: "TwiL-LM3: Formal-Logic Reasoning Model for Edge Hardware"
kind: "paste"
captured_at: "2026-08-11 17:11"
tags: ["webai", "twil-lm3", "formal-reasoning", "edge-ai", "local-ai", "tool-calling", "structured-output", "autoformalization"]
source_url: "https://www.webai.com/blog/webai-releases-twil-lm-a-family-of-formal-logic-models-that-outreason-a-120b-model-and-run-on-an-iphone"
status: "inbox"
---

# TwiL-LM3: Formal-Logic Reasoning Model for Edge Hardware

## Source overview
webAI released TwiL-LM, a family of formal-logic models with 1.7B and 3B parameter variants. TwiL-LM3 is designed for deductive reasoning, formal logic, compliance rules, contract conditions, research reasoning, tool calling, structured outputs, and AI-agent workflows.

The official article says TwiL-LM3 beats OpenAI's open-weights gpt-oss-120b, which has 40 times more parameters, on four of five formal-reasoning benchmarks. The article describes both variants as running on consumer hardware.

## Reported benchmark results
Against gpt-oss-120b on webAI's formal-reasoning suite, the article reports:
- Rule induction: TwiL-LM3 96.4 versus gpt-oss-120b 65.2.
- Semantic parsing: 87.6 versus 43.3 token F1.
- Lean formalization: 64.6 versus 63.1 token F1.
- Exact-format answering: 52.0 versus 7.0, a 7.4× gap.
- Entailment labeling: 68.7 versus 77.5. gpt-oss-120b leads on this benchmark.

The article also reports LogicBench 71.7 and GSM8K 87.3 for TwiL-LM3. In webAI throughput tests, TwiL-LM3 produced 32.9 answers per second versus 12.6 for gpt-oss-120b, or 2.6× faster.

For the 1.7B model, webAI reports aggregate reasoning accuracy of 0.361 versus 0.185 for SmolLM2-1.7B and says it led every sub-2B model in its evaluation.

These are vendor-reported results. The article does not establish independent replication in this capture.

## Intended use
TwiL-LM translates plain English into formal logic, checks whether conclusions follow from premises, and performs multi-step deductive reasoning. The article identifies compliance, contracts, research, and decision-making as target domains.

The article also describes use alongside other expert models. TwiL can check outputs, refine reasoning, enforce structure, and support tool calling. It reports about 300 tokens per second on an M2 MacBook.

## Edge deployment
The recommended quantized build is a 1.06GB download. webAI reports approximately 367 tokens per second in its evaluation. The model can run on a phone or small laptop, and the article states that data is not sent to an external cloud.

The 1.7B model has an 8,192-token context window. The article states that the 3B model has a longer context window of approximately 65,000 tokens. For high-stakes formal work, webAI recommends pairing the model with a symbolic solver because the model benefits from verification tooling and has a shorter context window in the relevant deployment.

The models are available on Hugging Face in Transformers and llama.cpp formats.

## Licensing and training caveats
The supplied announcement calls TwiL-LM3 open-source and says it was trained on webAI-owned, verified datasets rather than scraped internet data.

The official article states that the models are released under the webAI Non-Commercial License v1.0. This is a licensing discrepancy. The article also says TwiL-LM1.7B performance was driven by a proprietary reasoning data engine built from open sources and targeted fine-tuning from a 289MB LoRA adapter of roughly 72M parameters. The supplied dataset description is therefore preserved as user-provided and is not fully confirmed by the linked article.

## User-provided announcement
Today, we’re excited to open-source TwiL-LM3, the first formal reasoning model from the webAI Intelligence Lab.

At just 3 billion parameters, TwiL-LM3 outperforms OpenAI’s GPT-OSS-120B on 4 of 5 formal reasoning benchmarks while running efficiently on consumer hardware. That’s 40× fewer parameters, 2.6× faster inference, and state-of-the-art performance in the reasoning tasks that power reliable tool calling, code generation, structured outputs, and AI agents.

TwiL-LM3 was trained using webAI’s proprietary reasoning pipeline on webAI-owned, verified datasets—not scraped internet data. We believe better reasoning comes from better training pipelines and higher-quality data, not simply larger models. Our approach demonstrates that efficient models can rival—and in many cases surpass—models dozens of times their size.

Designed for the edge, TwiL-LM3 runs on hardware people already own—from a Raspberry Pi to an iPhone—bringing advanced reasoning to millions of devices without relying on the cloud.

This is our first open-source release from the webAI Intelligence Lab, and it’s only the beginning.

Proudly built in Austin, Texas.

Article: https://t.co/ESW3D89xNX

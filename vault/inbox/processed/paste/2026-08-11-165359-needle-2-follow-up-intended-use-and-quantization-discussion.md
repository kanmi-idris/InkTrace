---
title: "Needle 2 Follow-up: Intended Use and Quantization Discussion"
kind: "paste"
captured_at: "2026-08-11 16:53"
tags: ["user-provided", "needle-2", "cactus-compute", "edge-ai", "tool-calling", "quantization"]
source_url: "user-provided://conversation/2026-08-11-needle-2-follow-up"
status: "inbox"
---

# Needle 2 Follow-up: Intended Use and Quantization Discussion

## Relation to the main source
This note supplements src-2026-08-11-001. The main Needle 2 source already records the Hadamard MLP, fixed Walsh transform, learned diagonals, and hashed n-gram engram design.

## User-provided follow-up
The Hadamard MLP replaces the usual dense up-and-down projections with a fixed Walsh transform and learned diagonals, so the channel mixing that dominates a small model's weight reads costs almost no parameters at all. The engram moves world knowledge out of the stack into hashed
Show more

Cactus Compute
@cactuscompute
·
22h
With Cactus Quants, Needle 2 was compressed to 2-bit, yet performing closely to f16 weights of much bigger model on its task.

Cactus Compute
@cactuscompute
·
22h
Needle was trained specifically for consumer device environments and performs well in the space relative to the smallest frontier models.

JMB
@jmbollenbacher
·
13h
Cool, but what can it actually do?

What is the intended use case?

Cactus Compute
@cactuscompute
·
13h
Reliable intent-to-action on budget hardware.

see the link in post, more details there!

fullstack
@DavidFSWD
·
14h
how many tool calls can it do before it fails?

Cactus Compute
@cactuscompute
·
14h
try our in-browser Playground and see for yourself! -
https://cactuscompute.com
Needle 2 - The 14 MB Agentic LLM for Tiny Devices | Cactus
An open 45M-parameter model for tool calling, device use, and structured extraction. Needle 2 runs

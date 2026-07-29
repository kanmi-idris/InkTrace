---
title: Prompt Caching In Agents - Earendil
kind: paste
captured_at: 2026-07-24 06:39
tags: []
source_url: 
status: inbox
---

# Prompt Caching In Agents - Earendil

Prompt Caching In Agents — Earendil Engineering, Jul 22 2026.

Key insight: most of a coding agent's input is the same as last time. On each turn it resends system prompt, tool definitions, conversation history, tool calls, results — plus a small amount of new material.

KV Cache basics:
- Prefill: reads input tokens, computes attention state (keys and values per token per layer)
- Decode: produces new tokens one at a time
- KV cache retains keys/values so next token can attend to everything before without recomputing
- Two prompts that mean the same thing but tokenize differently do NOT share a KV cache

Where the cache lives:
1) Session affinity — keep KV cache on/near the GPU that computed it, route next request back to same worker. Fast but constrains scheduling.
2) Distributed cache — KV blocks stored in another memory tier or across workers. Better scheduling flexibility but moving/indexing/retaining KV blocks is a systems problem.

Caches and prefixes:
- Pi sessions are trees (rewind/branch). All branches share the same session ID but have different token sequences with partial prefix overlap.
- Jumping between branches may or may not hit the cache depending on provider behavior.
- Fork/new session can carry identical context but a routing system isolating by session key may miss the overlap.

Explicit vs automatic prefix caching:
- Anthropic: explicit cache_control points, explicit pricing for cache writes
- Others: automatic prefix caching — provider finds reusable prefix without client breakpoints

Why tool loadouts trash caches:
- Tool definitions appear before conversation. Adding/removing/changing/ reordering a tool moves the first mismatch close to the start, invalidating all cached conversation after it.
- Loading a tool lazily sounds efficient but the expanded loadout invalidates the cached conversation.
- Additive tool loading (Pi supports this): tool becomes available at a specific tool result inside the transcript instead of in the initial tool list. Old prefix remains unchanged.
- Removing tools, shuffling order, injecting timestamps, or changing active tools every turn defeats caching.

Interruptions and TTLs:
- Anthropic default 5-minute cache TTL — shorter than many normal coding activities
- Long build, test suite, meeting, or review can outlive the cache
- Claude Code gets 1-hour TTL for subscription users; Pi API users follow the 5-min default
- Pi supports PI_CACHE_RETENTION=long for providers that expose longer controls

Price of a miss:
- 100k token history + short new request: when cache works, almost all charged at cache-read price. When cache misses, entire history processed at full input price plus cache write.
- A short "continue" can be surprisingly expensive after cache expires.
- Gateway/reseller incentives may not align with user's desire for cache hits.
- Cache performance should be observable.

Why Pi does not prune aggressively:
- Deleting content from the middle changes prefix at deletion point. All surviving conversation after it may need reprocessing.
- One-time rewrite cost ~= surviving tokens * (uncached price - cache read price)
- Old tool results contain evidence the model used; removing them degrades behavior.
- Pi prefers stable, append-oriented transcript. Compaction available when context pressure justifies it.

Pi's cache visibility:
- Footer: R (cumulative cache reads), W (cumulative writes), CH (latest hit rate)
- /session command: total cached/uncached input, cumulative hit rate, cost, estimate of re-billed tokens from significant misses
- showCacheMissNotices setting: inserts warning after significant miss

8 common reasons for worse cache performance:
1) Idling (exceeds retention window)
2) Model or provider switches
3) Branch navigation (tree, rewinds, forks)
4) Compaction or manual history rewriting
5) Tool and reasoning level changes
6) Dynamic system prompts (timestamps, random values)
7) Extension context transforms
8) Provider routing and eviction

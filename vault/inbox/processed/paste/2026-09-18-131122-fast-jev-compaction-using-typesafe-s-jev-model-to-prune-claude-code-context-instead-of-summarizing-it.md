---
title: "fast-jev-compaction: Using TypeSafe's Jev Model to Prune Claude Code Context Instead of Summarizing It"
kind: "paste"
captured_at: "2026-09-18 13:11"
tags: ["fast-jev-compaction", "jev", "typesafe-ai", "claude-code", "context-compaction", "npm", "typescript", "rlcd", "mit"]
source_url: "https://github.com/tamaratran/fast-jev-compaction"
status: "inbox"
---

# fast-jev-compaction: Using TypeSafe's Jev Model to Prune Claude Code Context Instead of Summarizing It

## Relation to existing source
This is a third-party tool built directly on TypeSafe AI's Jev model, which was already captured and independently verified in this vault as src-2026-09-17-001 (TypeSafe's RLCD training pitch, Jev's public launch, and outside coverage noting the training methodology was undisclosed at release). This record documents a concrete real-world use of Jev's typed-decision API rather than TypeSafe's own marketing.

GitHub API metadata checked at capture time reports 2,229 stars, 109 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2026-09-17 (the same day as this capture) — an unusually fast star count for a same-day repository, worth noting as a data point rather than assuming any particular cause.

## What it does
fast-jev-compaction is both an installable npm library and a Claude Code plugin that replaces Claude Code's built-in context-compaction summary with a pruning approach: rather than asking an LLM to write a lossy summary of old conversation turns (which the README argues can silently drop a file path, exact error message, constraint, or command that turns out to matter later), it asks Jev, per tool call, whether that call and its result are still needed, and only deletes what Jev says can go. Anything kept is kept verbatim and in its original order; user and assistant text is never rewritten or shortened in the final output.

## Documented mechanism
Per the README: every tool-use event is paired with its result by ID, and a configurable number of the newest messages (6 by default) plus the very first message are always pinned and left untouched. The full remaining conversation, oldest first, is sent to Jev as 'state,' with tool results replaced by short placeholder notes (so Jev sees which calls were made and their inputs, but not the full tool output text). If that state does not fit within a configured token budget (25,000 estimated tokens by default), it is progressively compressed in stages — truncating tool inputs, abridging long text to head-and-tail, collapsing old non-pinned messages into omission notes, and folding runs of old tool-only messages into one entry — with each stage applied only if the previous one was not sufficient; if it still does not fit, the library throws rather than silently guessing wrong. Token counts are estimated by a character-based heuristic, not a real tokenizer, calibrated to run a bit above what Jev itself reports.

For every non-pinned tool call, Jev is asked two yes/no-style questions: whether the call itself should be kept (its existence and input might still matter even if the output is gone), and whether the result should be kept verbatim. Based on a configurable keep-probability threshold (0.5 by default), each call is either kept in full, kept with its result truncated to a short head plus a one-line note, or removed entirely along with its result. Requests are split to stay under a documented request-size ceiling tied to Jev's own request limit, run concurrently, and merged. The message list is then rebuilt so no tool result is ever left without its matching call, and a message that loses all of its content is dropped entirely.

## Access and integration
The library calls TypeSafe's own API (`https://api.typesafe.ai/v1/systemone`) using an API key read from a `TYPESAFE_API_KEY` environment variable by default, so using it in practice requires a TypeSafe account and API access, consistent with Jev being a commercial hosted model rather than something self-hosted. The library exposes lower-level building blocks (a pluggable `JevAsker` interface, request/response builder and parser functions, and individual pipeline steps) for anyone who wants to swap the transport or reuse pieces independently of the default TypeSafe-hosted client.

As a Claude Code plugin, it hooks into Claude Code's session-compaction step (described as an early-access 'function hooks' feature requiring an opt-in environment flag on Claude Code 2.1.274 or newer) and is installed via Claude Code's plugin-marketplace mechanism pointed at this repository. The plugin is documented to fall back automatically to Claude Code's normal built-in summary behavior whenever Jev's pruning fails, errors, or does not achieve enough size reduction to be worth using (for example on short sessions).

## Documented limitations
The README states plainly that only tool calls and their results are ever candidates for removal; ordinary user/assistant text messages are never removed or shortened in the final output (they are only abridged in the state representation shown to Jev for scoring purposes). It also states token-size estimates are character-based approximations rather than a real tokenizer, that a returned keep-probability is a calibrated estimate rather than a guarantee that deleting a result is actually safe (the assistant can always choose to re-run a tool if something turns out to be missing), and that because the full conversation state is resent with every batched request, a very long history near the token ceiling costs one full request per handful of scoring questions.

## Evidence boundary
The GitHub README was fetched and read directly for this capture, and GitHub API repository metadata was checked separately. No package was installed, no Claude Code plugin was configured, no TypeSafe API key was used, and no live compaction run against Jev was performed during this capture; the documented pruning algorithm, thresholds, and fallback behavior are the library author's own stated design.

## Sources
- https://github.com/tamaratran/fast-jev-compaction
- Related: src-2026-09-17-001 (TypeSafe AI's RLCD pitch and independently verified Jev model launch)

Source: https://github.com/petergyang/no-ai-slop
Title: no-ai-slop — Removes 20+ patterns of AI slop from any piece of writing
Author: petergyang
License: MIT
Stars: 1,100
Forks: 90
Retrieved: 2026-07-22
Source ID: src-2026-07-22-008

---

No AI slop is a skill that removes 20+ patterns of AI slop from writing and can also detect slop.

## Patterns detected

| Pattern | Smells like |
|---------|-------------|
| Binary contrasts | "It's not X. It's Y." |
| Throat-clearing openers | "Here's the thing..." |
| Faux-insight setups | "What nobody tells you..." |
| Colon reveals | "The best part: it learns." |
| Superficial analysis | "...highlighting the team's commitment" |
| Importance puffery | "marks a pivotal moment" |
| Weasel attribution | "experts agree," "studies show" |
| Fake-strong verbs | "serves as a centralized hub" |
| Synonym cycling | the agent, then the assistant, then the tool |
| Negative listing | "Not a X. Not a Y. A Z." |
| Dramatic fragmentation | "That's it. That's the whole thing." |

Also enforces: lead with the point when it helps, active voice, untangle hard-to-follow sentences, prefer concrete numbers over abstractions.

## Usage

1. **Edit a draft** — paste text and invoke `/no-ai-slop`. Returns edited draft + "What changed" section. Makes minimum effective edit, then checks work against eval.md.
2. **Detect slop** — `/no-ai-slop is this AI slop? [text]`. Returns every pattern found with quoted lines.

## Install

Paste into Claude Code, Codex, or any AI harness: "Install this skill globally: https://github.com/petergyang/no-ai-slop"

## Files

- `SKILL.md`: editing rules and workflow
- `eval.md`: pass/fail checks the skill runs on its own edits

## Author

One skill from petergyang's personal AI operating system. Full library at https://behindthecraft.com

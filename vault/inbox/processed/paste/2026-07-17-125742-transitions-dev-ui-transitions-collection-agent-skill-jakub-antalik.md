---
title: Transitions.dev — UI transitions collection + agent skill (Jakub Antalik)
kind: paste
captured_at: 2026-07-17 12:57
tags: [ui-transitions, micro-interactions, agent-skill, animations, css, react, motion-design, copy-paste]
source_url: https://transitions.dev/
status: inbox
---

# Transitions.dev — UI transitions collection + agent skill (Jakub Antalik)

# Transitions.dev — essential UI transitions for web apps (Jakub Antalik)

A copy-paste collection of the most essential UI transitions/micro-interactions for web apps, plus an agent skill that teaches AI coding agents about product motion. By Jakub Antalik (@jakubantalik). Repo: github.com/Jakubantalik/transitions.dev.

## The transition catalog (free set, 27+ production-ready)
Each transition is a self-contained CSS/React recipe. Examples shown on the site:
- Card resize (smooth card resize, 65.78ms timings)
- Number pop-in (digit flip with blur + stagger)
- Notification badge (diagonal slide with spring pop-in)
- Text states swap (blur text swap)
- Menu dropdown (origin-aware open/close)
- Confetti burst (physics confetti lands on button)
- Modal open/close (scale transition)
- Panel reveal (open/close)
- Page side-by-side (forward/back page transition)
- Icon swap (scale + blur)
- Success check (blur + rotate)
- Avatar group hover (distance-falloff lift + bouncy return)
- Card stack hover (stack fans out with spring)
- Error state shake (cubic-bezier shake)
- Input clear (per-word dissolve)
- Skeleton loader and reveal (pulse → content cross-fade)
- Texts reveal (two lines rise with offset stagger)
- Tabs sliding (pill indicator follows active tab)
- Shimmer text (masked gradient sweep)
- Organic shimmer (wavy shimmer + edge glow)
- Tooltip open/close (appear-only delay, instant exit)
- 3D tilt (pointer tilt + cursor glare)
- Dropdown menu morph (button morphs into menu surface)
- Accordion (grid-rows height + chevron morph)
- Toast open/close (rise + fade + blur + scale)
- Like button (heart fills + particle burst)
- Image open tilt (zoom + 3D tilt + bend)
- Learn more hover (chevron shifts + opens)
- Checkbox check (stroke path draw-on)
- Spinning counter (reel digit spin)
- Toggle (thumb slides with double bounce)

Pro (paid) extras: Pro gradient text (orbiting colour wash), Delete with smoky dissolve (image shreds + smoke).

## The agent skill
Teaches the AI about product motion and includes all transitions + useful commands.

Install:
- `npx skills add Jakubantalik/transitions.dev` — main skill, 27+ transitions. Works with Claude Code, Cursor, GitHub Copilot, Codex, Gemini CLI.
- `npx skills add Jakubantalik/transitions.dev -s transitions-polish` — Polish add-on (aligns existing motion to transitions.dev token scale).
- `npx transitions-pro skill` / `npx transitions-pro add --pro` — installs Pro transitions (requires Pro plan, browser auth).

Commands (all read-only except `apply`):
- `transitions reveal` — list every transition as a numbered text list.
- `transitions review` — scan project for ad-hoc transitions, hardcoded durations, custom keyframes; per-file list of where a catalog transition fits. Read-only.
- `transitions apply` — auto-detect best-fit transition for cursor context, propose, install after confirm. `transitions apply menu-dropdown` to name one directly.
- `transitions refine` — suggest matching motion *token* (by usage, not raw number). Read-only.
- `transitions polish` — layers open/close, hover in/out, stagger/delay rules on top of refine + explicit distance coverage. Needs Polish skill. Read-only.

## Positioning
Sits in the "design taste as installable agent skill" cluster alongside Taste Skill (src-2026-06-21-008 / src-2026-07-13-004), Emil Kowalski's skills (src-2026-07-13-005), Jakub Krehel's skills (src-2026-07-13-006). Jakub Antalik recommends Emil Kowalski's animations.dev course.

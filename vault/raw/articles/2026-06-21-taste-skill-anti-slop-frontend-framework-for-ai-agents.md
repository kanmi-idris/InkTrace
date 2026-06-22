---
title: Taste-Skill Anti-Slop Frontend Framework for AI Agents
kind: paste
captured_at: 2026-06-21 07:42
tags: [ai-agent, design, frontend, skills, anti-slop, agent-skills, claude-code]
source_url: 
status: inbox
---

# Taste-Skill Anti-Slop Frontend Framework for AI Agents

# Taste-Skill — Anti-Slop Frontend Framework for AI Agents

## Source
https://github.com/Leonxlnx/taste-skill

## Overview
Portable Agent Skills that upgrade AI-built interfaces: stronger layout, typography, motion, and spacing instead of boilerplate-looking UIs. Also includes image-generation skills for reference boards (web, mobile, brand kits). Framework agnostic across Codex, Cursor, Claude Code, etc.

**Stars**: 48k | **Forks**: 3.3k | **License**: MIT
**Language**: JavaScript (92.3%), Shell
**Site**: tasteskill.dev

## Code Skills
- **taste-skill** (v2 experimental) — reads the brief, infers design language, tunes three dials (VARIANCE / MOTION / DENSITY). Brief inference, design-system map, em-dash ban, GSAP code skeletons, redesign-audit protocol.
- **taste-skill-v1** — preserved original for backward compatibility
- **gpt-tasteskill** — stricter variant for GPT/Codex
- **image-to-code-skill** — image-first pipeline: generate refs, analyze, implement
- **redesign-skill** — audit existing UI, fix layout/spacing/hierarchy
- **soft-skill** — polished, calm, expensive UI with softer contrast, premium fonts
- **output-skill** — full output enforcement (no placeholder comments)
- **minimalist-skill** — editorial product UI (Notion/Linear vibes)
- **brutalist-skill** — hard mechanical Swiss type, sharp contrast
- **stitch-skill** — Google Stitch-compatible rules

## Image Generation Skills
- **imagegen-frontend-web** — website comps (hero, landing, multi-section)
- **imagegen-frontend-mobile** — mobile screens/flows (iOS/Android mockups)
- **brandkit** — brand-kit boards (logo directions, palettes, type)

## Settings Dials (taste-skill only)
- **DESIGN_VARIANCE** (1-10): Layout experimentation
- **MOTION_INTENSITY** (1-10): Animation depth
- **VISUAL_DENSITY** (1-10): Information per viewport

## Install
npx skills add https://github.com/Leonxlnx/taste-skill

## Sponsors
animations.dev (Emil Kowalski), Vercel OSS Program

## Tags
ai-agent, design, frontend, skills, anti-slop, agent-skills, claude-code

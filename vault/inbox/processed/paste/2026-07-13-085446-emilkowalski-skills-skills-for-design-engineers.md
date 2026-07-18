---
title: emilkowalski/skills — Skills for Design Engineers
kind: paste
captured_at: 2026-07-13 08:54
tags: [design-engineering, animation, ui-design, coding-agents, skills, design-systems, emil-kowalski]
source_url: 
status: inbox
---

# emilkowalski/skills — Skills for Design Engineers

## emilkowalski/skills

Source: https://github.com/emilkowalski/skills
Author: Emil Kowalski (@emilkowalski)
Stars: 11.9k

### What it is
Open-source skills repo by Emil Kowalski (Vercel, Linear alum, animations.dev creator) for design engineers. Helps AI agents build better UIs by encoding domain expertise about animation and design decisions that agents typically get wrong.

### Philosophy
- AI doesn't replace domain expertise, it amplifies it
- Agents lack taste — they pick wrong easings (ease-in instead of ease-out), wrong borders (solid vs semi-transparent shadow)
- Skills list these mistakes and explain how to fix them

### Skills
- **emil-design-eng** — main skill: animation + design advice
- **review-animations** — strict animation review based on his rules
- **improve-animations** — full codebase audit across 8 categories (purpose & frequency, easing & duration, physicality, interruptibility, performance, accessibility, cohesion, missed opportunities), writes self-contained plans into `plans/` directory
- **animation-vocabulary** — better animations by using the right vocabulary in prompts
- **apple-design** — Apple's interface design + fluid motion principles from WWDC design talks, translated for the web

### Install
```sh
npx skills@latest add emilkowalski/skills
```

### Key Context
- See also: [[src-2026-07-13-004]] (Taste Skill — anti-slop frontend)
- See also: [[src-2026-06-21-008]] (Taste Skill GitHub repo)
- Both projects encode "design taste" as agent skills; Emil's is animation-focused, Taste Skill is broader frontend

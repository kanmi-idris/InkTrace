---
title: Anatomy skill website
kind: article
captured_at: 2026-10-11 15:08
tags: [Anatomy, Claude-Code, agent-skill, technical-illustration, SVG, WebGL, 3D]
source_url: https://skills.wheresryan.sh/anatomy
status: raw
---

# Anatomy skill website

## Source scope
This is the creator's Anatomy skill page, credited to Ryan (@wheresryan22) and dated 2026-10-09. It describes the skill's design, examples, estimates, and limitations. These are creator claims. I did not install the skill or run Claude Code.

## What Anatomy does
The page describes a Claude Code skill that turns a short technical prompt into an explanatory machine or object. It says the skill generates figures from many solid, shaded parts and connects motion and displayed numbers to a model of the concept. The page lists 33 examples.

The user-provided description calls these “wireframes.” The official page describes solid isometric parts, with filled faces and no see-through edges. It says the figure should be a real object whose mechanism explains the idea, rather than boxes, arrows, or a copied reference image.

## Outputs and interaction described by the creator
- Framework-free TypeScript can produce standalone SVG and HTML. The page also says the skill can produce React components for Next.js.
- The creator says an `interactive` prompt adds pointer and keyboard controls. The page describes calm motion, an idle tour, pause on hover or focus, stopping when off-screen, reduced-motion support, and screen-reader announcements.
- WebGL shaders can add effects such as fire, water, plasma, moving air, and light.
- True 3D parts are re-projected and re-sorted each frame. The page labels 3D as beta.

## Process and time estimates
The page describes a sequence: choose a size; establish correct numbers and behavior; invent a matching object; list parts; plan the scene; build geometry; sort and audit geometry; frame the figure; add interaction; then review screenshots and checks.

The creator's estimate is 40–80 parts and 30–90 minutes for a Figure; 80–150 parts and 2–4 hours for a Hero; and 6 hours or more for an Epic. The page says an Epic is not started without user approval. These are estimates, not independently measured service guarantees.

## Limits stated by the creator
- The first figure should be treated as a draft. The creator says a part can be numerically correct but still look wrong, and recommends playing with it and asking for revisions.
- The skill favors detail over speed. The page says to request a smaller Figure for a faster result.
- 3D is beta, turns one subject at a time, and a full audit takes 15–20 minutes.
- Reference images guide finish, materials, and mood. The page says the skill does not make faithful copies of other drawings.

## Notes
The page has live examples. I read its text but did not interact with its examples. The repository's install, runtime, and license details are in `src-2026-10-11-011`.

---
title: "Codex design skills workflow: Impeccable, 21st Design, and UX Audit"
kind: paste
captured_at: "2026-09-20 16:26"
tags: [codex, design, skills, ux, dx, ax, impeccable, 21st-dev, browser-testing]
source_url: "https://impeccable.style"
source_urls: [https://impeccable.style, https://21st.dev]
status: inbox
---

# Codex design skills workflow: Impeccable, 21st Design, and UX Audit

want Codex to build good-looking pages without having to keep saying “make it look better”?  Try these 3 design Skills together:

𝟭. 𝗜𝗺𝗽𝗲𝗰𝗰𝗮𝗯𝗹𝗲

Use it when the page is built, but something still feels off.

Too bland? Use bolder. Too cluttered? Use distill. Almost finished? Use polish to refine the details. It turns “make it look better” into specific design changes Codex can make.

https://impeccable.style

𝟮. 𝟮𝟭𝘀𝘁 𝗗𝗲𝘀𝗶𝗴𝗻

This is a Skill I put together that gets Codex to look for components and interaction references on 21st.dev before building a page.

I’d suggest packaging your own go-to component library into a Skill, too. It doesn’t have to be 21st.dev.

Focus on the one or two sections that carry the page: a hero, a set of pricing cards, or a product showcase. Pick what fits, then adapt it to your brand, content, and existing project.

https://21st.dev

𝟯. 𝗨𝗫 𝗔𝘂𝗱𝗶𝘁

A good-looking screenshot isn’t enough. Have Codex open the browser and actually use the page.

Click buttons, fill out forms, switch to a mobile viewport, and complete the user journey. Find buttons that do nothing, confusing error messages, and steps where it’s unclear what to do next. Get reproduction steps and specific fixes.

If you can’t be bothered setting up Skills, start by adding this line to the end of your task:

“Make the best decision to improve UX, DX, and AX—without breaking existing functionality.”

Ask it to weigh the user experience, developer experience, and how easily the next agent can pick up the work.

## Verified source-page notes

### Impeccable

The Impeccable site describes itself as a design-vocabulary layer for coding agents and explicitly supports Codex CLI among other agent tools. It provides targeted commands for design refinement rather than relying on vague prompts.

Commands visible on the site include:

- `polish`
- `audit`
- `typeset`
- `layout`
- `colorize`
- `animate`
- `delight`
- `bolder`
- `quieter`
- `distill`
- `clarify`
- `adapt`
- `harden`
- `optimize`
- `onboard`
- `init`
- `extract`
- `document`
- `live`

The site says its detector performs 61 checks aimed at identifying common agent-generated design defaults. Its examples show preserving an existing `DESIGN.md`, detecting design issues, and using a live browser-oriented workflow against a running application.

This strongly supports the original note's recommendation to use commands such as `bolder`, `distill`, and `polish` when a page is functionally complete but visually weak.

### 21st.dev

21st.dev describes itself as a living interface library with 12,000+ React components, templates, and shadcn themes, including thousands of marketing blocks and UI components.

The site explicitly says each component can be copied as an AI-ready prompt and used with coding agents. Its Codex example shows a prompt producing source files and a diff. Components are presented as source code that lands in the user's own repository rather than as a runtime dependency.

The site also states that its components use React + Tailwind and shadcn/ui conventions, and that components can be installed either by copying the AI prompt or through shadcn CLI commands.

This supports using 21st.dev as a reference and component-discovery source before implementing important visual sections such as heroes, pricing cards, or product showcases.

## Interpretation for the workflow

The three-part workflow in this note can be understood as:

1. **Reference selection** — use a curated component source such as 21st.dev to avoid designing important sections from scratch.
2. **Design refinement** — use Impeccable's explicit design vocabulary to improve hierarchy, typography, density, layout, motion, and visual character.
3. **Behavioral validation** — run the completed interface in a browser and exercise the real user journey rather than judging only screenshots.

The third item remains a workflow recommendation from the captured text rather than a linked product page in this capture.

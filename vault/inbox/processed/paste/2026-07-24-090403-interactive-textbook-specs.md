---
title: Interactive Textbook Specs
kind: paste
captured_at: 2026-07-24 09:04
tags: []
source_url: 
status: inbox
---

# Interactive Textbook Specs

Interactive Textbook Specs — general requirements for building interactive textbooks as React components.

High-level requirements:
- Faithfulness to original document (verbatim), same footnotes/references, exact graphics
- Target audience: curious first-year university student (e.g. neuroscience major with non-AP high-school biology)
- Use nested tooltips for advanced concepts not in the exclusion list
- Emit React components per section, MathJax + LaTeX for equations
- Main text body verbatim except nested tooltips and expanded readings (accordion after key paragraphs)

Interactive widgets:
- For "gears-level models" that help student understanding
- When graphics exist in text that would benefit from reinforcement
- Inside nested tooltips: use widgets more often to aid understanding
- Displayed in expanded readings/tooltips, shouldn't break happy path flow
- Reference: https://www.lesswrong.com/posts/B7P97C27rvHPz3s9B/gears-in-understanding

Nested tooltips (similar UX to Paradox Interactive grand strategy games):
- 300ms hover timer before tooltip renders
- Position: default anchor offset from cursor, biased away from described element
- First-level tooltip initially non-interactive (mouse passes through)
- Lock conditions: hover-delay mode with progress affordance (fill bar), safe corridor triangle for diagonal travel
- Locked visual state: border/pin icon change
- Inside locked tooltip, concept links spawn child tooltips with same timer logic
- Depth management: soft cap of 4-5 levels, collapse oldest ancestor beyond chain root
- Circular references disallowed and displayed differently
- Grace timer 200-300ms for dismissal, pruning of descendants when returning to ancestor
- Esc closes entire chain only

Workflow setup:
- Fan out with 1 agent per top-level heading, generate React components + report on prerequisite concepts with adversarial review
- Union of all prerequisite concepts → nested tooltips loop with worker pool of 4, each handling at most 8 concepts
- Iterate until no more unknown concepts
- Setup repo with Vite + React + TS + Tailwind + components library

Exclusion list: concepts the student already understands (e.g. AP Biology only, undergrad-level math)

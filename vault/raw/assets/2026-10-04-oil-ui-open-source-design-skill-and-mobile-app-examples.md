---
title: "Oil UI: Open-source design skill and mobile app examples"
kind: "project capture"
source_url: "https://ui.oiloil.org/en/"
related_url: "https://github.com/oil-oil/oil-ui"
tags: ["oil-ui", "ui-design", "design-skill", "coding-agents", "react-native", "education-apps", "gamification", "design-process", "mit-license", "screenshots"]
status: "inbox"
---

# Oil UI: Open-source design skill and mobile app examples

## Link resolution and product summary
The supplied short link redirects to the public GitHub repository `oil-oil/oil-ui`. The second link is the project's English website and design gallery. The repository lists an MIT license.

Oil UI is an agent skill for exploring distinct design directions and then implementing a selected direction. Its method asks the agent to identify the product category, study distinctive peers, translate brand language into visible choices, start from concrete visual references, keep alternative layouts visibly distinct, and compare previews at desktop and mobile sizes. It also guides the user to select what they like and dislike. The skill can review screenshots and existing project interfaces.

The open-source skill can be installed with `npx skills add oil-oil/oil-ui`; the README requires Node.js 18 or later. It checks the public version list at most once every 10 minutes. The README says the check does not upload project content. Automatic updates need Python 3 and Node.js 18 or later. `OIL_NO_AUTO_UPDATE=1` disables automatic updates but keeps reminders; `OIL_NO_UPDATE_CHECK=1` disables the check.

## Education-app example
The gallery has a language-learning app demo named Pip. Its three preview screens show:
- A lesson path with completed, current, and locked lessons; a daily goal; XP; streak; unit challenge progress; and navigation for Learning, Review, Achievements, and Profile.
- A vocabulary fill-in question with a correct-answer state and a five-answer streak.
- A lesson completion screen with +24 XP, 88% accuracy, a seven-day streak, and two minutes left to meet the daily goal.

The supplied design brief requests a distinctive high-saturation palette, dimensional buttons, rounded bold type, a bird mascot, and three 390×844 screens. These are requested design choices, not independent evaluation of the rendered UI. I did not inspect its color palette in detail.

## Free and Pro scope
Oil UI Pro is listed at $9.99 as a one-time purchase with lifetime updates. The Chinese README lists ¥69. The open-source version includes design-direction exploration, a comparison page, visual hierarchy, typography, color, spacing, image/motion guidance, and screenshot recreation. Pro adds deeper interaction and state coverage, layout and responsiveness, dashboard/tool interfaces, component refinement, independent review, and visual effects.

## Evidence limits
I inspected the GitHub README, English gallery, Pip preview, and Pro page on 2026-10-04. The examples and skill capabilities are project demonstrations. I did not install the skill or test its automatic updates. The gallery's Pip demo is useful for screen-flow reference, but it is not a dedicated education-app pattern library.

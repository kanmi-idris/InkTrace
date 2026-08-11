---
title: "Diagram Design: Editorial Diagrams for Claude Code"
kind: "paste"
captured_at: "2026-08-09 20:57"
tags: ["github", "claude-code", "codex", "diagram-design", "data-visualization", "html", "svg", "design-systems"]
source_url: "https://github.com/cathrynlavery/diagram-design"
status: "inbox"
---

# Diagram Design: Editorial Diagrams for Claude Code

## Repository overview
Diagram Design is a skill and plugin for creating editorial-quality diagrams with self-contained HTML and SVG. The repository targets Claude Code, Codex, and standalone skill use. It avoids build steps, JavaScript, external images, shadows, and generic rounded-box diagrams.

The repository description says 29 editorial diagram types. The README body repeatedly says 27 types and the visible diagram table contains 28 named types. This is an explicit source discrepancy.

## Diagram taxonomy
The visible table includes:
- Architecture
- Flowchart
- Sequence
- State machine
- ER / data model
- Timeline
- Swimlane
- Quadrant
- Nested
- Tree
- Org chart
- Venn
- Layers
- Pyramid / funnel
- Consultant 2x2
- Radar / Spider
- Loop
- IT current-state
- High-Level
- Bar chart
- Line chart
- Gantt
- Scatter plot
- Process
- Medallion
- Data flow
- DP integration
- DP security matrix

Each diagram is supplied in minimal light, minimal dark, and full-editorial variants according to the README.

## Installation and use
- Clone the repository and symlink skills/diagram-design into ~/.claude/skills/diagram-design.
- The inner skill also works as a Claude Code plugin, a Codex plugin, or a standalone skill.
- Claude Code supports marketplace installation.
- Codex can install it with npx skills add and the diagram-design skill selector.
- The gallery is a self-contained HTML file that can be opened directly in a browser.
- Users can ask Claude to create architecture, quadrant, sequence, and other diagrams from natural language.

## Brand onboarding
The skill can onboard a website by fetching its homepage, extracting dominant colours and font stacks, mapping them to semantic tokens, showing a proposed diff, and writing tokens to references/style-guide.md.

Detected roles include paper, ink, muted, paper-2, accent, title font, node-name font, and sublabel font. WCAG AA contrast between ink and paper is checked before tokens are written. A first-run gate asks whether to run onboarding, enter tokens manually, or continue with the default skin.

## Design system
The default palette is described as jet-black, atomic-tangerine, white-smoke, blue-slate, and silver. The design system uses one accent colour, one or two focal elements, Instrument Serif for titles and callouts, Geist Sans for node names, and Geist Mono for technical sublabels.

The README specifies 1px hairline borders, no shadows, a maximum border radius of 10px, and a four-pixel spacing grid. It reserves the accent colour for the main focal nodes and uses coral-tinted focal nodes to direct attention.

## Export
Diagrams are authored as self-contained HTML. The export command can produce SVG or PNG. SVG extracts the SVG node and injects Google Fonts. PNG rasterizes the diagram through Playwright, with one-time Chromium setup. Exported diagram-only files exclude editorial cards and headers from full variants.

## Architecture and maintenance
The top-level SKILL.md is a lean index. Type-specific references load only when a type is selected. The repository lists references for diagram types, onboarding, style guide, primitives, and export. It states that the skill ships with 34 reference files.

The repository includes annotation, sketchy, terminal, and icon primitives. The icon set includes monochrome IT and cloud icons, using Tabler Icons under MIT and Simple Icons under CC0 according to the README.

Before adding an example, run python3 scripts/lint-skin.py on the file. The repository-wide baseline check is python3 scripts/lint-skin.py --all --baseline.

## License
The repository includes an MIT License. Third-party assets and icon licenses remain separate where stated in THIRD_PARTY_LICENSES.md.

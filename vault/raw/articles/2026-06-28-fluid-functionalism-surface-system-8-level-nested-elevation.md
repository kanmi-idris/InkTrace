---
title: Fluid Functionalism — Surface System (8-Level Nested Elevation)
kind: paste
captured_at: 2026-06-28 06:44
tags: [design-system, ui, elevation, components, shadcn, react]
source_url: https://www.fluidfunctionalism.com/docs/surfaces
status: inbox
---

# Fluid Functionalism — Surface System (8-Level Nested Elevation)

Fluid Functionalism by @micka_design — a design system with an 8-level nested surface elevation system.

Core problem: In light mode, shadows signify elevation. In dark mode, progressively lighter backgrounds. Traditional fixed-background components break inside dialogs (dropdown same color as dialog).

Solution: Three pieces — tokens, substrate context, and the Elevated primitive.
- Tokens: 8 bg/shadow pairs. Light mode flattens to white after step 2 (shadow carries elevation). Dark mode adds white-opacity + layered shadow.
- Substrate: Each container knows its own level and tells whatever opens inside. Popover on page vs. popover in dialog both end up at right depth without props.
- Elevated: Wrap a panel and background settles at the right level. Shadow doesn't change, so popover still reads as popover 3 layers down.

Install: npx shadcn@latest add https://www.fluidfunctionalism.com/r/elevated.json
Primitive-agnostic (Radix or Base UI).

22 components including: Accordion, Badge, Button, ChatMessage, CheckboxGroup, ColorPicker, Dialog, Dropdown, InputCopy, InputGroup, InputMessage, RadioGroup, Select, Slider, Switch, Table, Tabs, ThinkingIndicator, ThinkingSteps, Tooltip, etc.

System3: Surfaces, Scrolling list, Motion.
Customization: theme (system/light/dark), radius (rounded/pill), icon sets (Lucide/Tabler/Phosphor/HugeIcons/Untitled UI), primitive (Radix/Base UI).

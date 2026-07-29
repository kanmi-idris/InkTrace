---
title: GPUI Component — Rust desktop UI library for GPUI (longbridge)
kind: paste
captured_at: 2026-07-20 13:06
tags: [rust, gpui, desktop, gui, components, zed, cross-platform]
source_url: https://github.com/longbridge/gpui-component
status: inbox
---

# GPUI Component — Rust desktop UI library for GPUI (longbridge)

GPUI Component — Rust GUI component library for GPUI (longbridge/gpui-component)

A comprehensive, cross-platform desktop UI component library built on [GPUI](https://gpui.rs) (the framework Zed uses). Developed by Longbridge, Apache-2.0.

Key facts:
- **Version**: 0.5.1 (crates.io, published 22 Jun 2026); docs recommend git main because GPUI has unpublished features. Stars: ~11.1k–12.2k.
- **60+ components**: button, input, select, table, list, tab, dialog, sheet, dock, sidebar, chart, calendar, color_picker, code editor, tree, etc.
- **High performance**: virtualized Table & List (`VirtualList`) for large datasets.
- **Themeable**: built-in theme system, 20+ themes, dark mode out of the box; variable-based config via `Theme`/`ThemeColor`.
- **Layouts**: Dock layout (panels, resizable, freeform Tiles).
- **Charts**: Line/Bar/Area/Pie (`chart` + `plot` modules).
- **Code editor**: high-performance (up to 200K lines stable) with LSP support (diagnostics, completion, hover), syntax highlighting via Tree-sitter + Rope.
- **Content rendering**: native Markdown + simple HTML; `Icon` element (Lucide-compatible, SVG named per `IconName`).
- **Web target**: WASM gallery (`crates/story-web`, dev server on :3000).
- **Install** (git, since GPUI isn't fully on crates.io): `gpui`, `gpui_platform` (zed git) + `gpui-component` (longbridge git). Call `gpui_component::init(cx)` before use; first window view must be `Root`.
- **API style**: stateless `RenderOnce` components; builder pattern (`Button::new("ok").primary().label("...").on_click(...)`). Sizes xs/sm/md/lg.
- **Crate modules** (docs.rs): accordion, alert, animation, avatar, badge, breadcrumb, button, calendar, chart, checkbox, clipboard, collapsible, color_picker, date_picker, description_list, dialog, divider, dock, form, group_box, highlighter, history, input, kbd, label, link, list, menu, notification, plot, popover, progress, radio, resizable, scroll, select, setting, sheet, sidebar, skeleton, slider, spinner, switch, tab, table, tag, text, theme, tooltip, tree.
- **Compare to others** (their table): vs Iced / egui / Qt 6 — Rust, GPUI core renderer (wgpu), Apache-2.0, min binary ~12MB, cross-platform + Web (WASM), modern shadcn/ui-inspired UI, CJK support yes, Table virtualization (rows+cols), Dock layout yes, Markdown+HTML rendering, built-in themes. First real app: Longbridge Pro desktop.
- Also ships a `skills/` dir (agent skills) and `CLAUDE.md` in repo — useful for AI-assisted dev.
- UI design based on shadcn/ui (some from Reui); icons from Lucide.

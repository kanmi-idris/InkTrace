---
title: Use GPUI + Rust instead of hand-rolling a native macOS app (maddada)
kind: paste
captured_at: 2026-07-20 13:06
tags: [rust, gpui, macos, desktop, electron-alternative, opinion]
source_url: https://x.com/maddada/status/2078838529183166884?s=20
status: inbox
---

# Use GPUI + Rust instead of hand-rolling a native macOS app (maddada)

X post — M. Yahia (@maddada, ghostex.dev), Jul 19 2026, 77.4K views

"Public service announcement: If you're building a Native macOS app because you don't want to waste people's resources with Electron/Tauri, then let me save you a lot of heartache and wasted time:
• For most cases you should just use GPUI & Rust (what Zed uses). Google: 'gpui-component' to see the magic.
• This framework allows you to port your app to Windows and Linux later without much hassle.
• You can use CEF for web panes and libghostty for terminal panes. Rust is great for background services (low resources use, agents do well with it). @ghostex_dev's codebase on GitHub is a good example :)"

Key claims:
- If avoiding Electron/Tauri overhead, prefer **GPUI + Rust** over hand-rolling a native macOS app.
- gpui-component (longbridge) provides the component ecosystem that makes GPUI practical.
- Cross-platform portability: macOS now, Windows/Linux later with "not much hassle."
- Web panes via CEF, terminal panes via libghostty.
- Rust praised for low-resource background services and good agent collaboration.
- Points to ghostex_dev's GitHub as a reference GPUI codebase.

This is an opinionated recommendation post that directly promotes the gpui-component library captured alongside it (src-2026-07-20-003).

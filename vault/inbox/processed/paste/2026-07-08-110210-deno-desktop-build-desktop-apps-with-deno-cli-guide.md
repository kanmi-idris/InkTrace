---
title: Deno Desktop — Build Desktop Apps with Deno (CLI + Guide)
kind: paste
captured_at: 2026-07-08 11:02
tags: [deno, desktop, electron-alternative, cross-platform, frameworks, tooling]
source_url: 
status: inbox
---

# Deno Desktop — Build Desktop Apps with Deno (CLI + Guide)

## Deno Desktop

Deno 2.9+ feature that compiles a Deno project (single TS file to Next.js app) into a self-contained desktop binary. Bundles your code + Deno runtime + a web rendering engine into one redistributable executable per platform.

### Key selling points
- **Small by default** — macOS WebView backend uses the OS webview for small binaries; opt into CEF (Chromium) when identical rendering is needed
- **Full Node/npm compatibility** — entire npm ecosystem available through Deno's Node compat layer
- **Framework auto-detection** — point at Next.js, Astro, Fresh, Remix, Nuxt, SvelteKit, SolidStart, TanStack Start, or Vite SSR projects; runs production server in release mode, dev server with --hmr. No code changes needed.
- **In-process bindings** — backend↔UI communication via in-process channels, not socket-based IPC
- **Cross-compile from one machine** — macOS, Windows, Linux from same host. Backends downloaded as needed.
- **Binary-diff auto-update** — ship a single latest.json manifest with bsdiff patches; runtime polls, applies, rolls back on failed launches

### Hello, desktop
```ts
Deno.serve(() =>
  new Response("<h1>Hello, desktop</h1>", {
    headers: { "content-type": "text/html" },
  })
);
```
```sh
deno desktop main.ts
```

### CLI flags (deno desktop --help)
- `--backend webview|cef` — rendering engine (webview is default)
- `--output MyApp.app` — output path; extension determines format (.app, .dmg, .AppImage)
- `--icon` — app icon (.ico Windows, .icns/.png macOS)
- `--include / --exclude` — add/remove files from compiled binary
- `--target aarch64-apple-darwin` / `--all-targets` — cross-compilation
- `--hmr` — hot module replacement during development
- `--inspect, --inspect-wait, --inspect-brk` — debugger for both Deno runtime and renderer
- Accepts same runtime/permission flags as `deno run` (baked into binary at compile time)

### Configuration (deno.json)
```jsonc
{
  "desktop": {
    "app": {
      "name": "MyApp",
      "identifier": "com.example.myapp",
      "icons": { "macos": "...", "windows": "...", "linux": "..." }
    },
    "backend": "cef",
    "output": { "macos": "...", "windows": "...", "linux": "..." },
    "release": { "baseUrl": "https://updates.example.com" },
    "errorReporting": { "url": "https://errors.example.com/report" }
  }
}
```

### Desktop API
- Deno.BrowserWindow — lifecycle, multiple windows, events
- Bindings — call Deno code from webview via bindings.<name>()
- Menus — application and context menus
- Tray and dock — system status icons, macOS dock
- Dialogs — prompt(), alert(), confirm() as native popups
- Notifications — native OS notifications via Web Notification API
- HMR — --hmr for framework and non-framework apps
- DevTools — unified DevTools for both Deno runtime and webview
- Auto-update — Deno.autoUpdate(), manifests, bsdiff, rollback
- Distribution — cross-compilation, output formats, installers

### Comparison vs alternatives
Deno positions deno desktop against Electron, Tauri, Electrobun, and Dioxus.

Sources:
- https://docs.deno.com/runtime/desktop/ — full guide (16 sub-pages)
- https://docs.deno.com/runtime/reference/cli/desktop/ — CLI reference and deno.json schema

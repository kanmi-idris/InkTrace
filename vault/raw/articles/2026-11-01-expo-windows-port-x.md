# Daniel Nguyen ports BoltAI and PDF Pals to Windows with Expo

Captured: 2026-11-01
Source URL: https://x.com/daniel_nguyenx/status/2116825590867410989
Author: Daniel Nguyen (@daniel_nguyenx)

## Post

I think Expo is a good option for building desktop apps now. I just ported both @Bolt__AI & @pdfpals to Windows and it works very well.

It started as a proof of concept (PoC), but the end result surpassed my expectations. Not only does the app work correctly, it uses native UI components (Mica & Fluent Design System) and it's fast.

With VMPal and its agent mode, I was able to do most of the work with Claude Opus on my Mac. Without the annoying permission approval on the Mac, opus can autonomously drive all the implementations:

- It analyzes and takes screenshots of the Mac app, then generates a full plan for the port
- It then downloads the Rust toolchain to compile the native UI components for Windows. It basically built a native Markdown renderer for Windows with syntax highlighting (tree-sitter) and math expressions (RaTex).
- It even found a couple of bugs in the react-native-windows package, generated a small C#/WinUI app to verify it.
- I setup an SSH server on my Dell laptop for claude to smoke test the release build. It also ran all kinds of benchmarks there to make sure the app runs smoothly on a low-end PC.

@TablePlus half-joked that I could just one-shot the port with VMPal + Claude. It did require more effort than that and I didn't choose WPF but still, I spent most of the time on QA-ing.

This is honestly incredible.

## Follow-up replies observed

- Daniel said he installed VMPal, enabled agent mode, and asked Claude to port the app.
- In response to a question about mobile-only APIs, Daniel said most would not work and Claude built stand-ins.
- He said keyboard shortcuts were easy to fix, while window resizing was trickier and still being optimized.
- He said the Mac DMG was about 53 MB and the Windows setup executable about 135 MB.
- He said Claude found a bug in VMPal's VirtIO driver that sometimes rendered incorrectly.

These are author reports, not independent testing. They narrow the scope of the post's positive assessment: this was a hands-on port with platform-specific work and ongoing polish.

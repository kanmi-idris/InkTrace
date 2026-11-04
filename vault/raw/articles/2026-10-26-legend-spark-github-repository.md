# Legend Spark GitHub repository snapshot

Captured: 2026-10-26
Source URL: https://github.com/LegendApp/legend-spark
Repository visibility: Public
Branch shown: `main`
Repository page showed: 28 stars, 1 fork, and 455 commits

## README and setup

The README describes Legend Spark as a desktop framework built on React Native and Expo Desktop. It says the single `@legendapp/spark` package contains the CLI and implementation modules. It lists APIs imported from paths such as `@legendapp/spark/files`, `@legendapp/spark/windows`, and `@legendapp/spark/ui`.

The README requires Node 24.19.0 or newer for the quick-start workflow. It gives `npm create @legendapp/spark@next MyApp` for the preview channel and `npm create @legendapp/spark@latest MyApp` for the latest channel. It then says to run `npm run macos` in the created app.

The README describes three runtime types: Spark Runner, custom development build, and standalone application. The runner and custom build serve JavaScript through Metro. The standalone app embeds JavaScript and runs without Metro. The CLI checks native requirements against the selected runtime.

The repository README says source development uses Bun 1.3.14 and Node 24.19.0 or newer. These are repository development instructions. I did not install dependencies or run them.

## Windows notes

The README documents Windows 11 x64/ARM64 source workflows and marks them “preview, not yet verified.” It warns that local generation and bundle checks do not prove compilation, autolinking, Hermes startup, or Fast Refresh on Windows. The separate official limitations page is [src-2026-10-26-003].

## Evidence limits

This is a snapshot of the public repository README and metadata. The README contains setup commands, which I did not run. The npm registry metadata is captured separately as [src-2026-10-26-005]. The announcement is [src-2026-10-26-001].

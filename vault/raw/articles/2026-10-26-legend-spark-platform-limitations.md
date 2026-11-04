# Legend Spark status and limitations

Captured: 2026-10-26
Source URL: https://legend.so/spark/limitations/

## Platform status

The official page says Spark 0.0.1 primarily targets macOS 14+ on Apple Silicon.

| Target | Available workflow | Stated limits |
| --- | --- | --- |
| macOS 14+, Apple Silicon | Spark Runner, custom development builds, standalone apps, signing, notarization, and whole-app updates | Check feature availability for each app |
| macOS 14+, Intel x64 | Source tooling targets builds, runner registration/downloads, and packaging | Native compilation, runtime behavior, and signed distribution still need validation; published runner is ARM64 only |
| Windows 11, x64/ARM64 | Local source runner and custom development builds | Native compilation and runtime behavior still need validation; no hosted runner or production packaging workflow |
| iOS, Android, web | Expo workflows and selected shared API/UI adapters | Desktop windows, files, menus, and processes are not universal capabilities |
| Linux, Mac App Store | No supported workflow | Unsupported |

## Feature and architecture limits

The page says Windows `SegmentedControl` is unsupported. Search, sidebar, split-view, settings-window composition, and SF Symbols are macOS capabilities. The `GlassView` native effect requires macOS 26.

The page says Windows production builds, signing, and MSIX packaging are unsupported. It says app JavaScript runs in Hermes, so Node built-ins and Electron main-process APIs are unavailable. Spark’s SQLite, WebView, audio, and UI contracts expose supported subsets, not complete backend APIs. Expo Router integration and a broad universal UI catalog are not supported.

The page warns that moving from Legend Frame to Spark requires rebuilding matching native runtimes. It says older prototype data, credentials, and OS registrations do not migrate automatically.

## Evidence limits

These are official documentation statements captured on 2026-10-26. The landing page is [src-2026-10-26-002]. I did not validate these workflows or run Windows, Mac, mobile, or web builds.

# Legend Spark official product and getting-started page

Captured: 2026-10-26
Source URL: https://legend.so/spark/

## Product description

The page labels Spark “Experimental — not for production.” It describes Spark as a React Native desktop framework. It says Spark adds native Mac windows, menus, dialogs, and files, and supports a prebuilt runner with Fast Refresh and standalone `.app` builds.

The page lists Spark API entry points for capabilities such as windows, menus, context menus, shortcuts, dialogs, files, settings, secure storage, clipboard, drag and drop, notifications, tray, SQLite, WebView, and updates.

## Development model

The page describes three development stages:

1. Spark Runner: create and run an app, then edit `App.tsx` with Fast Refresh. The quick-start command is `npm create @legendapp/spark MyApp`, followed by `npm run macos`.
2. Custom development build: add native modules or app-specific native configuration. The page gives `npx --no-install spark build --dev --platform macos`.
3. Standalone app: build a `.app` with embedded JavaScript, then sign and notarize it with a Developer ID.

The page says app screens use React Native's native renderer and JavaScript runs in Hermes. It names macOS 14+ on Apple Silicon as the primary target. It says Intel Mac and Windows builds still need native validation.

## Evidence limits

This is a capture of official page statements on 2026-10-26. The detailed platform table is captured separately as [src-2026-10-26-003]. The public repository is [src-2026-10-26-004]. I did not install, build, or test Spark.

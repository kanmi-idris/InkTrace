# Plexo product website capture

Captured: 2026-10-12
Source URL: https://getplexo.app/
Evidence inspected: public homepage, Features, Downloads, browser extension information, and selected FAQ answers. No download or extension-install action was taken.

## Product description and scope

- The site describes Plexo as a free, open-source, pre-release download manager for files and torrents.
- It says Plexo splits one download into chunks, downloads them over selected active connections, then combines them into one file.
- The FAQ says each connection must provide a separate route to the internet; examples include Wi-Fi, Ethernet, and a phone connected by USB tethering.
- The FAQ says Plexo combines connections only for downloads started inside Plexo. It is not a VPN and does not change how other apps use the internet.
- The site advertises per-network speed caps and data limits.
- The animated throughput values on the homepage are part of a product demo. They were not observed download measurements.

## Release and platform information shown on the site

Latest displayed release: `v1.0.0-rc.15`, labeled Pre-release.

- macOS Apple silicon: `.dmg`, 141 MB, `plexo-1.0.0-rc.15-arm64.dmg`.
- macOS Intel: `.dmg`, 147 MB, `plexo-1.0.0-rc.15-x64.dmg`.
- Windows x64 and ARM64: one `.exe` installer, 246 MB, `plexo-1.0.0-rc.15-setup.exe`.
- Linux x86_64: AppImage 136 MB, Debian/Ubuntu `.deb` 105 MB, Fedora/RHEL `.rpm` 92.8 MB.
- Linux ARM64: AppImage 138 MB, Debian/Ubuntu `.deb` 100 MB, Fedora/RHEL `.rpm` 88.7 MB.
- The site says the Chrome extension is available for Chrome and other Chromium browsers, including Edge, Brave, and Arc. Firefox is marked coming soon.

## Warnings and maturity statements

- The site says Plexo is a pre-release. The core download flow works, but users may encounter bugs or rough edges.
- The FAQ says the Windows installer is not code-signed yet and may trigger a Windows security warning.
- The FAQ says the Mac app is signed with an Apple Developer ID provided by Dhananjay Bhosale and notarized by Apple. These are publisher claims; I did not verify signatures or notarization.
- The site says code-signing licenses cost money and asks for sponsorship to help cover them.

## Evidence limits

I did not download or run Plexo, install the browser extension, start a download, verify any release artifact, or test connection aggregation. The product's speed and security statements remain website claims.

Source: https://github.com/Lakr233/vphone-cli
Title: vphone-cli — Boot a virtual iPhone via Apple's Virtualization.framework
Author: Lakr233
Retrieved: 2026-07-21
Stars: 7.3k | Forks: 1.1k | License: MIT

---

vphone-cli boots a virtual iPhone on macOS (host must be physical, not nested VM) using Apple's Virtualization.framework and PCC (Private Cloud Compute) research VM infrastructure.

## Firmware Patch Variants

| Variant | Patches | Phases | Description |
|---------|---------|--------|-------------|
| Patchless | 4 | 2 | -AMFI, SSV, Img4, TXM bypasses |
| Regular | 42 | 10 | Standard boot chain patches |
| Development | 53 | 12 | + TXM entitlement/debug bypasses |
| Jailbreak | 113 | 14 | + full security bypass (Sileo, apt, TrollStore via LaunchDaemon) |
| Experimental | 141 | 18 | JB + kernel/DSC patches to hide VM identity |

## Prerequisites
- macOS 15+ (Sequoia) for PV=3 virtualization
- SIP/AMFI configuration (either full disable or debug-restrictions-only + amfidont/amfree)
- Brew deps: aria2, wget, gnu-tar, openssl@3, ldid-procursus, sshpass, keystone, libusb, ipsw, zstd

## Key Features
- Make-based workflow: make setup_machine for full automation through first boot
- VM configuration stored in config.plist (CPU, memory, disk, screen, ROMs, storage)
- Compatible with Apple's security-pcc VMBundle.Config format
- Supports restore (DFU mode boot + pymobiledevice3 restore) and offline restore (AEA decryption)
- VM backup/switch via vm_backup, vm_switch commands
- Host control socket (vm/vphone.sock) for programmatic VM interaction: screenshots, touch injection, swipe gestures, hardware keys, clipboard
- vphone-mcp MCP server for AI agent integration (Claude Code, Claude Desktop)

## Tested Environments
Multiple Mac models (Mac16,6 through Mac16,12) across macOS 25.4.1–27.0b2, iOS 18.6.2–27.0, CloudOS 26.1–26.4.

## Limitations
- GPU/Metal acceleration does not work on iOS 18.x (no paravirtualized GPU implementation)
- Cannot run on nested VMs (Virtualization.framework unavailable)
- Japan/EU region causes system app download issues during setup

## Automation
- Touch injection, swipe, hardware keys, clipboard via control socket
- AI-driven E2E testing workflows via vphone-mcp
- Returns grayscale screenshots for visual verification

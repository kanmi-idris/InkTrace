---
title: "ZapFast: Native unofficial WhatsApp client in Rust"
kind: "web capture"
captured_at: "2026-10-01 22:06"
tags: ["zapfast", "whatsapp", "rust", "egui", "native-app", "messaging", "linux", "macos", "windows", "performance", "account-safety"]
source_url: "https://zapfast.rocks/what-is-zapfast/"
status: "inbox"
---

# ZapFast: Native unofficial WhatsApp client in Rust

## Product summary
ZapFast describes itself as an unofficial native WhatsApp client written in Rust with egui. It links as a companion device through the WhatsApp Web protocol and runs on Linux, macOS, and Windows. The project says it has no browser engine and stores local chat history in a SQLite file. The website showed version 0.18.2 when inspected on 2026-10-01. The linked source repository is https://github.com/crmne/zapfast.

The site lists common messaging features, including text formatting, replies, edits, reactions, forwards, attachments, stickers, GIFs, recorded voice messages, notifications, chat search, and message copying. It lists calls, status posts, communities, newsletters, group administration, ordinary in-app video playback, and several interactive commerce/message flows as unsupported.

## Account and privacy risks
The website warns that ZapFast is unofficial and may violate WhatsApp's terms of service. It says WhatsApp may restrict accounts that use unofficial clients and recommends official clients for users who cannot accept that risk. The project states that it is independent and not affiliated with or endorsed by WhatsApp or Meta. No account was linked or tested.

## Performance claims and limits
The site headline reports about 200 MB idle RAM for ZapFast versus 1.13 GB for WhatsApp Web and Chromium, and an opening time under one second. Its detailed measurements page clarifies that the table measures ZapFast 0.13.1 on one Linux desktop in four paired runs on September 15, 2026. The measured idle PSS median is 150.0 MB for ZapFast and 1,127.6 MB for WhatsApp Web plus Chromium. Process start to first window is 152 ms versus 528 ms. A separate observation of chat UI display is 0.69 seconds versus 4.13 seconds, but the two detectors differ and are not equivalent readiness tests.

The site says ZapFast 0.16, with additional media features, uses about 200 MB on that same desktop. It states the comparison does not cover macOS or Windows, does not include an empty-browser baseline, and does not measure fully synchronized or usable chat readiness. These are developer-published measurements, not an independent test.

## Evidence limits
The overview and measurements pages were inspected on 2026-10-01. The performance figures come from the project's own test record. The software was not installed, and no WhatsApp account was linked.

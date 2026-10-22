---
title: nanoMuse open-source cross-device personal agent
kind: article
captured_at: 2026-10-10 05:25
tags: [nanoMuse, personal-agent, cross-device, open-source, automation, GPL-3.0]
source_url: https://github.com/nano-muse/nanoMuse
status: raw
---

# nanoMuse open-source cross-device personal agent

## Source scope
The user supplied `https://t.co/F4HcZivUeB'`. I treated the final apostrophe as punctuation. The short link opened the public GitHub repository `https://github.com/nano-muse/nanoMuse`. This capture summarizes the repository README. Product features, performance, privacy, and safety statements below are project claims, not an independent audit.

## Project description and license
- The README calls nanoMuse an open-source personal agent for a user's phone, computer, and browser. It says the agent performs tasks, continues scheduled work while apps are closed, remembers the user, and asks before actions that cannot be undone.
- The README says the phone app, desktop app, web console, and connecting relay are in the repository under GPL-3.0-or-later. It describes nanoMuse as a non-profit community project. I did not verify its organizational status.
- The README lists Android 8+, iPhone/iPad beta, macOS 12+, Windows 10+, Linux x64, browser demo, and self-hosted deployment options. I did not install or test any build.

## Features claimed by the README
- The agent can use a Linux shell, browser, MCP servers, and skills. With screen-control features enabled, it can operate apps on Android and desktop computers. The README says iOS does not allow this form of screen access.
- It says users can send a task from one device to another and approve it on the device they hold. It describes scheduled goals, routines, and a morning feed.
- It says memory, identity, and wake-up settings are Markdown files. It lists Feishu, DingTalk, WeCom, and Telegram integrations.
- The README says users can use a community model allowance, their own key across 18 providers, or selected paid model plans. It says the community relay offers ¥10 of model use per account, with additional allowance tied to invitations. Treat prices and limits as time-sensitive project statements.
- The README says each device runs its own agent. Devices connect through a relay. Conversation text travels through the relay; files and screenshots stay on the device where they were made. The privacy document gives important exceptions and defaults in `src-2026-10-10-002`.
- The README presents approval tiers: some software installation runs and reports afterward; deletion and sending can be approved for a chat or remembered; buying, ordering, booking, trading, and transfers require an approval at the time. It says passwords, verification codes, and card numbers are not typed by the agent.

## Architecture and alternatives
The README says the phone agent runs in an app-private Linux environment with proot and Alpine Linux. The desktop agent uses DeepSeek Harness. The README compares nanoMuse with Meta Muse and OpenMinis, and says nanoMuse combines local device agents with a cross-device relay. These are project descriptions, not independent comparisons.

## Release details and uncertainty
The README's top section names release `1.0.1 Ballast`, while its dated News section says `1.0.0 Keel` was released on 2026-10-09. The release labels differ on the same page. I did not resolve which label is current. The repository showed active commits during capture; claims and downloads may change.

## Limits
I read the README and linked privacy document. I did not clone the repository, inspect source code, install packages, run binaries, or test the agent. The README's claims about safety, self-hosting, local storage, and cross-device behavior remain unverified here.

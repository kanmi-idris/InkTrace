---
title: nanoMuse privacy and data controls
kind: article
captured_at: 2026-10-10 05:25
tags: [nanoMuse, privacy, data-retention, relay, consent, permissions]
source_url: https://github.com/nano-muse/nanoMuse/blob/main/docs/privacy.md
status: raw
---

# nanoMuse privacy and data controls

## Source scope
This is the project's `docs/privacy.md`, linked from the nanoMuse README. Its statements describe the project's published policy and behavior. I did not verify the implementation or the relay's actual configuration. The details refer to versioned relay and app behavior, so they may change.

## Local operation and provider data
- The policy says conversations, memory, files written by the agent, scheduled tasks, skills, and settings are stored on the device or in user-mounted folders. It says the apps have no analytics, crash reporting, or telemetry, and can work without the optional nanoMuse relay.
- Messages, attached images, and tool results are sent to the model endpoint the user configured. The policy says the API key stays on the device.
- If a user signs in to nanoMuse Cloud, the relay forwards messages to Alibaba Cloud Model Studio. The policy says the relay records account and request metadata, including hashed/encrypted account identifiers, model and token counts, invite data, client software, and network addresses. The operator can see account and address records. The policy says it does not receive device location.

## Two cloud data controls
- “Help improve nanoMuse's AI models” controls collection of chat text for model training. While enabled, the relay stores user messages, model answers, and selected tool calls. The policy says it excludes system prompts, tool results, images, audio, and video content. It says this switch is on by default for accounts created on `cloud.nanomuse.cn` from relay 0.9 onward. Users can turn it off and delete previously stored data.
- “Synced conversations” is described as on by default for signed-in users from relay 0.19. The policy says the cloud stores conversation titles and message role, text, time, and device, plus attachment names and sizes. It says files, images, and tool results are not stored in this sync. Users can turn sync off and delete stored chats. The policy says the operator sees counts, not text.
- Since app version 0.1.38, the policy says only the main conversation syncs by default. Side chats need a separate setting. It states a maximum of 20,000 messages per account and a 16 KB limit per message.
- The policy says nothing about the model-improvement allowance depends on that training-data switch. These are vendor statements; I did not test the settings or storage.

## Other data and permissions
- The policy says the website keeps access logs for seven days, then turns them into daily aggregate counts. It says the site uses no cookies or third-party analytics.
- It says update checks contact GitHub, web and MCP tools contact their target services, and remote backups go to the user's chosen destination encrypted with the user's password.
- It says permissions are requested when needed. Accessibility is off until enabled. It says contacts, calendar, location, and microphone tools run only after permission is granted and nothing is read in the background.

## Approval model described by the policy
- The policy says the agent stops before deleting, sending, or paying. Deleting and sending approvals can be remembered for a chat or a specific target.
- Software installation may run without asking first, with a notice afterward.
- Buying, ordering, booking, trading, and transferring require approval at the time. A remembered payment approval is limited to one app or site and requires the device screen lock.
- The policy says the agent does not type passwords, verification codes, or card numbers. Login and CAPTCHA screens are handed to the user.

## Limits
This is a project-authored privacy policy, not a security audit. It describes optional relay behavior and default-on cloud settings. A user's actual data flow depends on whether they use their own model key, sign in to the cloud relay, enable model-improvement collection, enable conversation sync, and self-host. Verify current settings before use.

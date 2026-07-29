---
title: brrr API Reference — Webhook Format, Payload, Architecture & Privacy
kind: paste
captured_at: 2026-07-21 09:23
tags: [notifications, push, webhook, api, architecture, cloudkit, apns, devtools]
source_url: 
status: inbox
---

# brrr API Reference — Webhook Format, Payload, Architecture & Privacy

# brrr — API Reference & Architecture

## API
**Base URL**: api.brrr.now/v1

### Webhook Types
- **Shared webhook**: sends to all devices at once
- **Device-specific webhook**: targets one device
- Format: `https://api.brrr.now/v1/br_usr_<secret>` (or `/v1/send` with Authorization header)

### Authentication
- URL-embedded secret: `https://api.brrr.now/v1/<secret>`
- Authorization header: `Authorization: Bearer <secret>` at endpoint `/v1/send`

### Payload Fields (JSON body)
| Field | Type | Description |
|-------|------|-------------|
| title | String | First line of notification |
| subtitle | String | Second line |
| message | String | Primary content (plain text body also accepted) |
| thread_id | String | Grouping in Notification Center |
| sound | String | `default`, `system`, or one of 20+ named sounds (iPhone/iPad only) |
| volume | Number | Critical alert volume 0–1 |
| open_url | String | URL to open on tap |
| image_url | String | Image in notification |
| expiration_date | ISO 8601 | APNs retry deadline |
| filter_criteria | String | Focus filter match criterion |
| interruption_level | String | `passive`, `active`, `time-sensitive`, `critical` |

### Sound Options (20+)
brrr, bell_ringing, bubble_ding, bubbly_success_ding, cat_meow, calm1, calm2, cha_ching, dog_barking, door_bell, duck_quack, emergency, short_triple_blink, upbeat_bells, warm_soft_error, default, system

### Interruption Levels
- **passive**: notification list only, no screen/sound
- **active**: normal presentation (lights up + sound)
- **time-sensitive**: breaks through Notification Summary & Focus
- **critical**: critical alert (requires app permission)

### GET Support
Notifications also via GET (query params: message, title, etc.) for browser testing or limited HTTP clients.

## Architecture
- **Cloudflare Worker**: verifies webhooks, sends via APNs
- **Cloudflare KV**: push tokens + secret digests
- **CloudKit**: user authentication + private metadata (device names)
- **On-device secret generation**: webhook secrets generated locally, only digests stored server-side
- **No raw secret storage**: backend stores only SHA-derived digest
- **No notification content persistence**: contents not logged or stored remotely
- **On-device history**: up to 14 days, including cached images (not synced)
- **APNs**: Apple Push Notification Service handles delivery + retries

## Focus Filters
- `filter_criteria` string matched against device Focus configuration
- Only matching notifications break through during active Focus

## Secret Rotation
- On-device generation → only digest synced
- Rotate shared + device-specific secrets independently

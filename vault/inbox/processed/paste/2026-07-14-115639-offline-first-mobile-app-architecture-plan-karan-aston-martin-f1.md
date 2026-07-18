---
title: Offline-First Mobile App Architecture Plan — Karan (Aston Martin F1)
kind: paste
captured_at: 2026-07-14 11:56
tags: [offline-first, react-native, architecture, sqlite, event-sourcing, drizzle, watermelondb, optimistic-ui, mobile]
source_url: 
status: inbox
---

# Offline-First Mobile App Architecture Plan — Karan (Aston Martin F1)

## Offline-First Mobile App — Architecture Plan

**Source:** Karan (Aston Martin F1 / India startup experience), talk on resilient offline React Native

### Core Thesis
Most apps store *what things are* (final state). Offline-first apps must store *what happened* (events). What survives offline is what remembers what happened.

### Goals
- Fully usable with zero connectivity
- Instant UI feedback regardless of network
- Local data layer handles 100k+ records without memory blowups
- Multi-step flows survive crashes, calls, and mid-flow network drops
- Sync to server is optional and async

### Problem Statement
- Relationship managers (car inventory) worked in dead zones → constant API timeouts
- Naive fix (Redux + AsyncStorage/MMKV) failed: too much data in memory, no efficient query path for filtered inventory
- Multi-step writes were fragile — partial/inconsistent state after crash or dropout

### Design Principles
1. Local state is the source of truth; server is optional async sync target
2. Optimistic by default — UI updates instantly
3. Store events, not just snapshots — append-only, immutable, replayable history
4. Don't lift complexity early — event sourcing only when multi-step/offline writes demand it (~10% of cases)
5. Tell users the truth — show "not connected" instead of generic errors

### Connectivity State Model
| State | Condition | Behavior |
|---|---|---|
| Online | Full connectivity | Immediate sync, realtime updates |
| Degraded | Slow / intermittent | Batch sync jobs, reduce payload |
| Offline | No connectivity | All local ops; no server dependency |
| Reconnecting | Back online | Drain queue, resolve conflicts |

### Architecture Layers
- **UI Layer** — optimistic rendering; never blocks on network
- **Local State (in-memory)** — fast app state for active screens; sourced from local DB
- **Persistence Layer (SQLite)** — on-device, zero server dependency, handles large datasets. Filters 100k records in ~7ms vs ~360ms with local-storage scan. Recommended: Drizzle ORM or WatermelonDB
- **Event Store (append-only)** — every user action recorded as immutable event with payload
- **Sync / Queue Layer** — on reconnect, replay events, retry failed ops

### Data Modeling: State vs Event
**Don't:** single `bookings` row — on dropout you lose context
**Do:** `events` table — append-only, immutable, replayable:
```
event_id | booking_id | event_type      | payload       | created_at
1        | bk_123     | ADD_TO_CART     | {carId, ...}  | t1
2        | bk_123     | SELECT_SLOT     | {slotId, ...} | t2
3        | bk_123     | ATTEMPT_PAYMENT | {amount, ...} | t3
```
Benefits: replayable, recoverable, retryable, syncable

### Recommended Stack
- React Native + SQLite + Drizzle ORM (or WatermelonDB)
- Lightweight in-memory state; persisted via SQLite (not AsyncStorage snapshots)
- Locally-queued mutations + mocked server responses for optimistic UI
- Expo SQLite plugin for dev inspection

### Implementation Roadmap
1. Phase 0 — Connectivity honesty: replace loaders with explicit online/offline/degraded/reconnecting states
2. Phase 1 — Local-first reads: migrate heavy data from local-storage to SQLite + ORM
3. Phase 2 — Optimistic writes: queue mutations locally; mock responses; sync on reconnect
4. Phase 3 — Event sourcing (only if multi-step flows need it)
5. Phase 4 — Conflict handling: CRDT-style resolution

### One-line summary
Capture intent as events, store them in SQLite, render optimistically, and treat the server as an optional async guest.

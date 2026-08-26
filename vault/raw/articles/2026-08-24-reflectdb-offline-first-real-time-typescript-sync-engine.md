---
title: "ReflectDB: Offline-First Real-Time TypeScript Sync Engine"
kind: "paste"
captured_at: "2026-08-24 10:38"
tags: ["reflectdb", "typescript", "realtime", "sync-engine", "offline-first", "optimistic-ui", "websocket", "sse", "indexeddb", "postgres", "sqlite", "drizzle", "bun"]
source_url: "https://reflectdb.dev/"
status: "inbox"
---

# ReflectDB: Offline-First Real-Time TypeScript Sync Engine

## Source overview
reflectdb is a beta real-time sync engine for keeping a server-side database synchronized with browser clients. It supports TypeScript, React, Svelte, vanilla JavaScript, Bun, Node, Postgres, SQLite, Drizzle, Kysely, WebSocket, SSE, polling, Vercel, and custom stacks.

The project is designed to let developers bring their own types and database. The public site links to its GitHub repository, https://github.com/reflectdb/reflectdb, through the page's GitHub control.

## Core model
Clients hold optimistic local copies. The server owns the authoritative database and operation log. The server is the only component that decides what a write means and the only component that talks to the database.

A client write updates the local row immediately. The client stores the pending operation in an IndexedDB queue before sending it. The server later acknowledges or rejects it. A rejection carries a reason and the server row, allowing the client to revert to the exact pre-operation state.

Each operation is a row-scoped insert, update, or delete. Operations carry an ID, hybrid logical clock, table, row ID, and payload.

## Ordering and conflicts
ReflectDB uses hybrid logical clocks. An HLC contains milliseconds, a same-millisecond counter, and a node ID. The values are packed into a zero-padded string, so causal ordering can use a plain string comparison without synchronized clocks.

Remote clocks more than five minutes ahead of local wall time are refused or clamped according to the documented clock-safety behavior.

Conflict resolution is declared per table. The documented policies are:
- lww: last writer wins for the whole row.
- merge: newest write per column.
- server: first write creates the row and later writes are refused.
- custom: an application function receives the operation, row, and clocks and returns the resolved row.

## Offline and delivery guarantees
Writes continue while the socket is down. Pending operations survive the tab in IndexedDB. Reconnection resumes the queue through a hello, sync_declare, and resume flow.

The queue sends batches of up to 100 operations. Operation IDs are reserved with a compare-and-set step, so a resend after a dropped frame is acknowledged but not applied twice. Operations in a batch can be grouped with a batch ID and fail together. The documented client does not split a batch across messages.

The writer does not receive its own delta because it already applied the write optimistically. Other subscribers receive insert, changed-column update, or delete deltas.

## Query fan-out
A write triggers the dependency index for affected queries. Subscribers can be grouped by an application-defined key such as user, parameters, or room. The server runs each query once per group, diffs the cached result against the fresh result, and sends only changed state.

Deltas describe state, not events. An update carries only columns that changed. A failed send leaves the cache stale so the next broadcast re-emits the current state instead of silently skipping it.

## Security and server gates
The documented write path includes authentication, authorization, rate limits, batch-size limits, readonly-field stripping, server-owned field injection, conflict resolution, and application mutation logic.

Schema declarations can mark fields as server-owned. The server removes readonly fields from client payloads and can overwrite them through serverSet functions. The quickstart example uses server-owned createdAt values.

The site describes authentication and authorization hooks, but this capture does not independently audit an implementation's security.

## Transports and integration
The site documents WebSocket, server-sent events, polling, and custom fetch-compatible transports. The quickstart shows a Bun WebSocket transport, but the engine is intended to work with a developer-owned server and routes.

The quickstart uses a shared schema definition with typed rows, conflict policy, and server-owned fields. A server implements query and mutate functions against a Map. A React client uses SyncProvider and useSync to receive typed rows and typed insert, update, and remove mutators.

The database can be swapped for Drizzle, Kysely, Prisma, or raw SQL without changing the client according to the site.

## Demonstrations
The site presents three live demos:
- Presence: shared cursors through a public presence service, with server-sent events down and plain POSTs up. State is stored in Postgres.
- Infinite multiplayer Tetris: optimistic inputs reconciled against Bun SQLite and broadcast to connected players.
- Collaborative whiteboard: shared strokes, peer cursors, chat, Pictionary rounds, guest sign-in, and temporary room cleanup. The site says rooms and drawings are deleted 30 minutes after creation.

These demos illustrate the documented system behavior. They are not an independent performance benchmark.

## User-provided source
https://reflectdb.dev/

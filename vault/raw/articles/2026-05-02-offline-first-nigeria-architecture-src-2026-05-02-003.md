# Building for Real Nigeria: Offline-First Architecture

Captured from a user-supplied X/Twitter article transcription on 2026-05-02.

Canonical URL:
https://x.com/Akintola_steve/status/2036367648737398911

---

Source positioning captured from the supplied text:

- Author: Akintola Steve
- Framed as a technical follow-up to an earlier fictional story about a startup that lost users because its app could not handle poor network conditions outside Lagos.
- Presented as implementation-level guidance for building systems that survive weak or unstable Nigerian internet conditions at scale.

High-level architecture captured from the supplied text:

- The UI layer talks to a local data layer first instead of relying on the network.
- The local data layer is backed by IndexedDB.
- A service worker sits between the app and the network and intercepts requests.
- A sync engine manages a queue of pending operations.
- When connectivity returns, the sync engine pushes queued operations and pulls updates from the server through delta syncing.

Service worker guidance captured from the supplied text:

- Correct handling of install, activate, and fetch lifecycle stages is emphasized.
- Install is used for app-shell pre-caching.
- Activate is used for cache cleanup.
- Fetch is used to choose between cache, network, or stale-while-revalidate behavior.
- Stale-while-revalidate is framed as especially important under unstable network conditions.

Local storage and encryption guidance captured from the supplied text:

- `localStorage` is presented as insufficient for serious offline-first apps.
- IndexedDB is recommended instead.
- The text emphasizes that IndexedDB is unencrypted by default.
- Recommended approach:
  - derive or generate per-user keys with the Web Crypto API
  - encrypt records before writing with AES-GCM
  - decrypt on read
  - avoid storing highly sensitive data such as card details, PINs, and passwords locally at all
- It also recommends deleting locally stored records after successful sync to reduce risk surface and storage growth.

Background sync guidance captured from the supplied text:

- Every offline-capable user action should first be written to an outbox in IndexedDB before network calls.
- Suggested outbox fields:
  - full operation payload
  - timestamp
  - retry count
  - status
- On connectivity restoration, pending entries are processed in order.
- Successful entries are deleted.
- Failed entries increment retry count.
- Entries beyond a retry threshold are flagged for manual review.
- Every operation sent to the server should include an idempotency key.

Delta-sync guidance captured from the supplied text:

- The article recommends delta syncing instead of full re-syncs.
- Server-side records should have `last_modified` and a version number.
- The client sends its last sync timestamp.
- The server returns only changed records after that point.
- The client updates local IndexedDB and advances its sync cursor.
- For conflicts, the text says last-write-wins is the simplest option, but sensitive data should use stricter conflict handling and manual review.

Compression and loading guidance captured from the supplied text:

- Enable Brotli compression for API responses.
- Use WebP and responsive image sizing.
- Split bundles aggressively and load code on demand.
- Use cursor-based pagination for API data.
- Use Intersection Observer for image lazy loading.

Interpretive note:

- This source is best treated as architecture guidance and systems-design heuristics for hostile-network environments, especially consumer apps targeting unreliable mobile connectivity and expensive bandwidth.

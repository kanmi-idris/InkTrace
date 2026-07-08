---
title: The Problem with Using a UUID Primary Key in MySQL — PlanetScale
kind: paste
captured_at: 2026-07-03 17:59
tags: [uuid, mysql, primary-key, database-performance, b-tree, planetscale, indexing]
source_url: https://planetscale.com/blog/btrees-and-database-indexes
status: inbox
---

# The Problem with Using a UUID Primary Key in MySQL — PlanetScale

Blog post by Brian Morrison II, March 19, 2024. Companion to the B-trees article by Ben Dicken.

UUID versions covered:
- v1: time-based (Gregorian calendar Oct 10, 1568), 100ns increments, node = system MAC address
- v2: v1 with low_time replaced by POSIX user ID — rarely used, higher collision risk
- v3/v5: deterministic — namespace UUID + name → hashed (v3=MD5, v5=SHA1)
- v4: random (most common) — entirely random except version nibble
- v6: same as v1 but timestamp MSB-first for better sortability
- v7: time-based with Unix epoch timestamp + randomness instead of node — good balance
- v8: vendor-specific, only requirement is version nibble

Problems with UUIDs as MySQL primary keys:

1. Insert performance: B+Tree page splitting is expensive with random UUIDs. Sequential inserts follow right-most path; random UUIDs cause unpredictable splits and rebalancing.

2. Storage utilization:
   - BIGINT (auto-increment): 32 bits (4 bytes)
   - UUID as BINARY(16): 128 bits (16 bytes) — 4x bigger
   - UUID as CHAR(36): 288 bits (36 bytes) — 9x bigger
   - Secondary indexes also store PK as pointer — amplifies storage
   - Random UUIDs cause page fill rate to drop from ~94% to ~50% (InnoDB assumes sequential PK)

Best practices for UUID PK in MySQL:
1. Use BINARY(16) with UUID_TO_BIN() instead of CHAR(36) — 9x storage savings
2. Use ordered UUID variants (v6, v7) — more sequential, less page splitting
3. Use MySQL's UUID_TO_BIN() with swap flag to reorder timestamp for sequential binary
4. Consider alternatives: Snowflake IDs, ULIDs, NanoIDs

Note: URL is same as the B-trees article but the actual path is different (/blog/uuid-primary-key-mysql vs /blog/btrees-and-database-indexes). This is the companion piece.

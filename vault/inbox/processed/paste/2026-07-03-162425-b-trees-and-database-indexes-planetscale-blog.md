---
title: B-trees and Database Indexes — PlanetScale Blog
kind: paste
captured_at: 2026-07-03 16:24
tags: [b-tree, b+tree, database-indexes, mysql, innodb, primary-key, performance, uuid, planetscale]
source_url: https://planetscale.com/blog/btrees-and-database-indexes
status: inbox
---

# B-trees and Database Indexes — PlanetScale Blog

Blog post by Ben Dicken (@BenjDicken), September 9, 2024. Interactive article covering B-trees, B+trees, and how MySQL/InnoDB uses them for indexes.

Key topics:

What is a B-tree?:
- Tree of nodes (root, internal, leaf) with key/value pairs and child pointers
- Properties: order K, each node up to K pairs, internal nodes have >= N/2, N+1 children, all leaves at same level
- Ordered: children left of key are less, right are greater
- Searching visits one node per level
- Nodes sized to match disk blocks (4k/8k/16k) — fixed-size per node

B+Tree (fancier variant used by databases):
- Key/value pairs stored only at leaf nodes
- Non-leaf nodes store only keys + child pointers
- MySQL variant: non-leaf nodes store N child pointers (not N+1)
- All nodes have next/prev pointers — each level acts as doubly-linked list
- Benefits: more keys per inner node (shallower tree), values at same level traversable via linked list

MySQL / InnoDB specifics:
- Stores ALL table data in a B+tree with primary key as tree key
- Each new InnoDB table creates a B+tree: keys = PK, values = remaining columns (leaf nodes only)
- Default node/page size: 16k
- Secondary indexes create additional B+trees: key = indexed column, value = PK
- Queries on secondary index do two B+tree lookups (secondary index → PK → main table)

Primary key choice implications:
- Sequential (BIGINT AUTO_INCREMENT): inserts always go to right-most path, leaves added on right, in-order, fewer unique nodes visited → fewer I/O operations
- UUIDv4 (random): unpredictable leaf destinations, more nodes visited, leaves out of order
- UUIDv7 is better than v4/v5 but still not as good as sequential
- Key size matters: BIGINT (8 bytes) vs UUID (16 bytes) — smaller keys = more per node = shallower tree

Buffer pool:
- In-memory cache for InnoDB pages (16k B+tree nodes)
- First checks cache before disk I/O
- Even with buffer pool, minimizing node visits helps performance

Interactive visualizations accompany each section (B-tree builder, B+tree builder, insertion patterns, range queries).
Special thanks to Sam Rose for early review.

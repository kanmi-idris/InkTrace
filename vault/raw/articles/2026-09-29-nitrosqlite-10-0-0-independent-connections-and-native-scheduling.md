---
title: "NitroSQLite 10.0.0: Independent connections and native scheduling"
kind: "paste"
captured_at: "2026-09-29 14:13"
tags: ["react-native", "sqlite", "nitro-modules", "database", "concurrency", "prepared-statements", "wal", "macos", "sqlite-vec", "native-queue", "typescript", "github", "release", "site-reported"]
source_url: "https://github.com/margelo/react-native-nitro-sqlite/releases/tag/v10.0.0"
status: "inbox"
---

# NitroSQLite 10.0.0: Independent connections and native scheduling

Source checked: 2026-09-29.

## Release identity
- The supplied release note describes NitroSQLite 10.0.0, the React Native SQLite library from Margelo.
- The official release page is https://github.com/margelo/react-native-nitro-sqlite/releases/tag/v10.0.0.
- NitroSQLite is a Nitro Modules library for SQLite on iOS, macOS, visionOS, and Android. The repository README documents synchronous and asynchronous queries, transactions, and batches.
- Version 10 is a major release focused on connection control, repeated queries, native scheduling, and macOS support.

## Independent connections
- Applications can open separate handles to the same database file by selecting an independent connection.
- Each handle owns a native SQLite connection and its own operation queue. A read-only handle is supported.
- A reader can run while another handle has a writer transaction, but SQLite still permits only one writer for a database file.
- The release guide recommends initializing the database and enabling WAL on the writer before using concurrent readers and writers.
- Readers observe committed data according to their transaction snapshot.
- Independent connections require SQLite mutex support. Builds compiled with SQLITE_THREADSAFE=0 reject this mode.

## Reusable prepared statements
- db.prepare(query) creates a reusable prepared statement for repeated synchronous or asynchronous execution with new parameters.
- Prepared work uses the connection's managed queue and lock.
- Applications must finalize a statement before closing its connection.
- Database deletion now rejects a file that another connection or attachment still uses.
- A closed session object cannot operate on a replacement connection opened under the same name.

## Native scheduling and platform support
- Async queries, batches, and file imports enter a per-connection native FIFO without waiting for an earlier result to cross back through JavaScript.
- Transaction callbacks continue to reserve their connection until commit or rollback.
- Batches and imports remain atomic native jobs.
- The core SQLite package and the optional sqlite-vec package now support macOS. The repository includes a desktop example and macOS integration workflows for the shared test suite.

## Earlier project direction
- The project moved from react-native-quick-sqlite to the Nitro Modules implementation in the 9.0.0 release.
- Later releases added nullable SQL handling, clearer errors, a JavaScript TypeORM driver, managed transaction and batch queues, result materialization improvements, vector search through react-native-nitro-sqlite-vec, Android 16 KB page-size support, configurable iOS storage, and configurable SQLite build settings.
- Version 10 extends this line with independent connections, prepared statements, native scheduling, and macOS.

## Upgrade constraints
- Native applications must be rebuilt after upgrading. A JavaScript-only update cannot add the new native methods.
- Existing single-connection calls remain supported. Independent connections are opt-in.
- Custom native integrations may need changes for updated C++ signatures.
- The release also adds project-owned C++ filename prefixes, expanded API documentation, and release lockfile checks.

## Evidence limits and relevance
- Release capabilities and upgrade requirements are taken from the official release page and repository README.
- No package installation, native rebuild, concurrency test, or benchmark was run for this capture.
- NitroSQLite 10.0.0 is relevant to React Native database architecture, concurrent read and write routing, prepared-query reuse, native queue design, desktop support, and sqlite-vec integration.

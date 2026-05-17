# TypeScript Binary Format Comparison Note

Captured from a user-supplied architectural note on 2026-05-17.

Source provenance:
- User-supplied synthesis in chat
- Inline references included in the note:
  - https://protobuf.dev
  - https://cbor.io
  - https://avro.apache.org

---

Core framing captured from the supplied note:

- The note argues that binary serialization formats become relevant when JSON becomes too:
  - verbose
  - slow
  - bandwidth-heavy
  - schema-loose
- It frames the main benefits of these systems as:
  - smaller payloads
  - faster serialization
  - typed schemas
  - cross-language compatibility

Main comparison structure captured from the supplied note:

- The note distinguishes three families:
  - Protobuf for high-performance RPC and data exchange
  - CBOR for compact JSON-like binary representation
  - Avro for big-data and schema-evolution-heavy event systems
- It explicitly argues that these formats solve different architectural problems rather than competing as perfect substitutes.

Protobuf notes captured from the supplied text:

- Protobuf is presented as the most important first format to learn.
- The note explains Protobuf as a schema-first system where a `.proto` definition is compiled into typed structures.
- It emphasizes:
  - compact binary encoding
  - field-number-based representation rather than repeated field names
  - strong TypeScript support
  - strong schema evolution for services
- TypeScript tooling mentioned:
  - `protobufjs`
  - `buf`
  - `ts-proto`
  - `@bufbuild/protobuf`
- Recommended use cases listed in the note:
  - APIs
  - gRPC
  - microservices
  - mobile apps
  - realtime systems
  - websocket payloads
  - multiplayer games
- The note also calls out the debugging downside: binary payloads are hard to inspect without tooling.

CBOR notes captured from the supplied text:

- CBOR is framed as “binary JSON,” but more compact and more native to binary values than ordinary JSON.
- The note emphasizes that CBOR does not require a schema, which it treats as a major distinction from Protobuf.
- TypeScript packages mentioned:
  - `cbor`
  - `cborg`
- Suggested strengths listed in the note:
  - IoT
  - edge systems
  - cryptographic protocols
  - flexible APIs
  - local storage
  - browser/server transport
- A major advantage highlighted in the note is native support for binary values such as encrypted blobs, signatures, and hashes without Base64 overhead.

Avro notes captured from the supplied text:

- Avro is framed as a format optimized less for service RPC and more for large-scale data and event evolution.
- The note associates it with:
  - Kafka
  - Hadoop
  - analytics pipelines
  - event streaming
  - event sourcing
- The TypeScript package explicitly mentioned is:
  - `avsc`
- Its strongest differentiator in the note is schema evolution for long-lived event streams and replayable data systems.

Architecture guidance captured from the supplied text:

- The note recommends that most systems use multiple formats rather than trying to pick one winner for every layer.
- Its suggested default stack is:
  - public external APIs: JSON
  - internal high-performance systems: Protobuf
  - realtime or websocket optimization: CBOR or Protobuf
  - analytics or event streaming: Avro
- It explicitly suggests that Avro is often overkill initially for a typical application backend.

Interpretive note:

- This source is strongest as architecture guidance for TypeScript backends rather than as a formal benchmark or vendor-neutral specification comparison. Its durable value is the layered decision model: keep JSON where readability and compatibility matter, adopt Protobuf for typed service boundaries, use CBOR where schema flexibility and compact binary transport matter, and reserve Avro for streaming and schema-evolving event systems.

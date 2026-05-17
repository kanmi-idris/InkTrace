# Base64 Media Architecture Note

Captured from a user-supplied architectural note on 2026-05-17.

Source provenance:
- User-supplied synthesis in chat
- Inline references included in the note:
  - https://msgpack.org
  - https://protobuf.dev
  - https://cbor.io

---

Core framing captured from the supplied note:

- The note explains that any binary media can be represented as Base64 because Base64 is only an encoding of raw bytes into text.
- It explicitly lists examples such as:
  - images
  - videos
  - audio
  - PDFs
  - ZIPs
  - encrypted blobs
- The note emphasizes that this does not make Base64 a storage or performance optimization.

Key architectural warning captured from the supplied note:

- The note repeatedly frames Base64 as a transport convenience rather than an efficiency strategy.
- It explicitly says Base64 is:
  - larger
  - slower
  - not secure
  - sometimes convenient

Security framing captured from the supplied note:

- The note warns that Base64 is not encryption.
- It says Base64 provides:
  - no confidentiality
  - no integrity
  - no authentication
- It also calls out a common mistake: treating Base64-encoded secrets as hidden values.

Performance and size claims captured from the supplied note:

- The note states that Base64 adds about thirty-three percent overhead because every three bytes become four ASCII characters.
- It gives concrete examples such as:
  - a 3 MB image becoming roughly 4 MB in Base64
  - a 300 MB video becoming roughly 400 MB in Base64
- It also highlights CPU and memory overhead from the repeated encode and decode steps.

Historical rationale captured from the supplied note:

- The note explains Base64 as a compatibility tool for text-oriented systems such as:
  - JSON
  - XML
  - email protocols
  - older HTTP flows
- Its mental model is “binary to text wrapper,” not compression or security.

Recommended modern backend direction captured from the supplied note:

- The note strongly argues that media generally should not be serialized into normal API payloads.
- It recommends:
  - direct binary uploads
  - object storage
  - CDN delivery
  - JSON metadata containing URLs or hashes
- The note’s preferred flow is:
  - client uploads binary directly
  - storage returns a URL or hash
  - backend stores metadata

Alternatives explicitly recommended in the supplied note:

- For media transfer:
  - raw binary uploads
  - multipart form uploads
  - streaming
- For structured compact serialization:
  - MessagePack
  - Protocol Buffers
  - CBOR
  - Avro
  - FlatBuffers
  - Cap’n Proto
- For realtime media:
  - WebRTC

Use cases where the note still considers Base64 reasonable:

- small inline assets
- cryptographic outputs such as signatures, keys, and hashes
- small prototype payloads
- embedding small binary blobs into JSON when convenience matters more than efficiency

Interpretive note:

- This source is strongest as backend and API design guidance rather than as a formal encoding reference. Its durable value is the clear separation between compatibility encoding and actual transport, storage, performance, or security decisions.

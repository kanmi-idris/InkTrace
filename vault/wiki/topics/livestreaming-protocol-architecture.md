---
id: livestreaming-protocol-architecture
type: topic
status: active
confidence: high
source_ids:
  - src-2026-06-12-001
updated_at: 2026-06-12
---

# Livestreaming Protocol Architecture

## Summary

Livestreaming infrastructure faces a fundamental trilemma: simultaneously optimizing for **scale** (concurrent viewers), **latency** (time-to-viewer), and **cost** (operational expense). Historical protocols each optimized two of the three. HLS/DASH achieve scale and cost-efficiency via CDN infrastructure but sacrifice latency (10-30 seconds). WebRTC achieves low latency (< 200ms) but sacrifices scale and cost due to per-viewer Selective Forwarding Unit (SFU) overhead. Media over QUIC (MoQ), a new IETF draft protocol, aims to optimize all three simultaneously through a publish-subscribe relay model that combines HLS's CDN scalability pattern with WebRTC's real-time transport semantics.

## Key Ideas

### 1. The Livestreaming Trilemma

Three competing objectives in live video architecture:
- **Scale**: How many concurrent viewers can infrastructure support economically?
- **Latency**: How quickly do viewers experience the broadcast relative to capture?
- **Cost**: What operational expense is required per viewer or globally?

Until MoQ, conventional wisdom required choosing two of three. [src-2026-06-12-001]

### 2. HLS/DASH Model: Scale + Cost

- **Architecture**: Publisher → origin server → CDN edge caches → subscriber pulls chunks
- **Why it scales**: CDN already optimized for static file distribution; marginal cost per additional viewer ≈ zero
- **Latency penalty**: Chunking + buffering model introduces 10-30 second delays; even with Low-Latency HLS (LL-HLS) and CMAF optimizations, practical latency ~3-5 seconds
- **Ideal for**: Large sporting events, news broadcasts, any scenario where scale >> latency
- **Infrastructure leverage**: Rides free on commodity CDN backbone (same as web assets) [src-2026-06-12-001]

### 3. WebRTC Model: Latency + Interaction

- **Architecture**: Publisher ↔ SFU (Selective Forwarding Unit) ↔ subscriber via peer-like connections
- **Why it's fast**: Bidirectional real-time protocol, no chunking, sub-200ms achievable
- **Why it doesn't scale**: Each SFU must:
  - Hold encrypted, stateful connection with every viewer
  - Parse RTP packets per viewer
  - React to each viewer's bandwidth in real-time
  - This is CPU/memory intensive; requires cascaded custom SFU networks (vendor-specific), not commodity CDN [src-2026-06-12-001]
- **Cost penalty**: Infrastructure cost grows linearly with viewers, not logarithmically
- **Ideal for**: Video calls, conferences, small broadcasts requiring synchronization [src-2026-06-12-001]

### 4. Historical Evolution to MoQ

| Era | Protocol | Scale | Latency | Cost | Limitation |
|-----|----------|-------|---------|------|------------|
| ~2008 | RTMP | Poor | Low | High | Browser plugin dependency, poor scalability |
| ~2010s | HLS/DASH | Excellent | Poor (10-30s) | Low | Chunking inherent latency; sync impossible |
| Concurrent | WebRTC | Poor | Excellent (<200ms) | High | SFU overhead; not built for 1-to-many |
| ~2020s | LL-HLS | Excellent | Moderate (3-5s) | Low | Still chunking-based, latency ceiling |
| ~2026+ | Media over QUIC | Excellent | Excellent (<1s) | Low | (theoretical; deployments nascent) |

[src-2026-06-12-001]

### 5. Use Cases Demanding All Three Properties

Scenarios where traditional trilemma constraint breaks:
- **Online betting**: 5-second latency = line moves before viewer can act [src-2026-06-12-001]
- **Live shopping/auctions**: Early viewers see items first, unfair advantage [src-2026-06-12-001]
- **Watch parties**: Real-time group reaction requires synchronization; latency > 1-2s breaks illusion [src-2026-06-12-001]
- **Live sports/concerts**: Audience needs to feel unified, not fractured by staggered feeds [src-2026-06-12-001]

### 6. Media over QUIC (MoQ)

- **Foundation**: Built on QUIC (HTTP/3 transport layer, modern congestion control, connection migration)
- **Model**: Publish/subscribe with named paths
  - Publisher exposes stream under path (e.g., `my-room/alice`)
  - Subscribers request paths they want
  - Relays in middle bridge publisher to subscribers at scale
  - Subscribers don't need to know exact paths in advance [src-2026-06-12-001]
- **Key innovation**: Relays can be placed in existing CDN infrastructure; path-based subscription doesn't require per-subscriber stateful tracking like SFU
- **Combines**: HLS's CDN-like scalability + WebRTC's real-time latency [src-2026-06-12-001]
- **Not**: Codec, player, or magic replacement; rather "plumbing" that bridges gap [src-2026-06-12-001]

### 7. Standardization & Industry Momentum

- **Status**: IETF working group draft (same standardization process as HTTP, TLS)
- **Participants**: Meta, Google, Cisco, Akamai actively involved
- **Signal**: Streaming startups racing to ship first production deployments [src-2026-06-12-001]
- **Sentiment**: Genuine engineering excitement, not dismissal [src-2026-06-12-001]
- **Implementations**: Multiple running prototypes available; not purely theoretical [src-2026-06-12-001]

## Contradictions & Tensions

### 1. Maturity vs. Hype

MoQ is draft-stage with nascent deployments (as of 2026-06). Claims about simultaneous scale/latency/cost optimization are theoretical; no production-scale performance benchmarks yet comparing all three protocols directly. Implementation details may reveal new tradeoffs once deployed at scale.

### 2. Infrastructure Lock-in Question

HLS succeeded partially because it leveraged existing CDN infrastructure for free. Does MoQ still benefit from CDN placement, or does it require new infrastructure? If the latter, adoption barrier is much higher.

### 3. Codec & Player Ecosystem

HLS and WebRTC have mature codec negotiation and player ecosystems (VLC, browsers, dedicated apps). MoQ's player/codec story is less clear. Switching cost may be substantial.

## Open Questions

1. **When will production MoQ deployments report real-world latency/cost numbers?** Theoretical claims need empirical validation at scale. What latencies are actually achieved with video at 1080p+ and 10k+ concurrent viewers?

2. **Will MoQ adoption require new CDN infrastructure, or can existing CDN nodes act as relays?** This determines whether adoption barrier is low (retrofit existing networks) or high (new infrastructure required).

3. **What codec/player standardization emerges around MoQ?** Browser support? Streaming service adoption timeline? Does fragmented player ecosystem slow adoption?

4. **Will older protocols (HLS, WebRTC) co-exist with MoQ, or is replacement expected?** Likely outcome is coexistence, each optimized for different use cases, but boundary may shift as MoQ matures.

5. **How does MoQ handle geographic distribution and relay placement?** HLS benefit from CDN edge nodes everywhere. If MoQ requires custom relays, does geographic distribution penalty outweigh latency gains?

## Related Topics

- [[cdn-infrastructure]] - Context on how HLS leverages CDN
- [[http-protocol-evolution]] - QUIC/HTTP/3 foundation for MoQ
- [[protocol-design-tradeoffs]] - General principle of architectural constraints
- [[real-time-communication-systems]] - WebRTC context and alternatives
- [[video-codec-standardization]] - Codec story for streaming

## Related Entities

- [[Media over QUIC (MoQ)]] - Protocol
- [[HLS (HTTP Live Streaming)]] - Legacy competitor
- [[WebRTC]] - Latency alternative
- [[IETF]] - Standardization body
- [[Software Mansion]] - Source author organization

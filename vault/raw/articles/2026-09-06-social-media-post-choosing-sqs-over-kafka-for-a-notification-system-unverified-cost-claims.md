---
title: "Social Media Post: Choosing SQS Over Kafka for a Notification System (Unverified Cost Claims)"
kind: "paste"
captured_at: "2026-09-06 06:27"
tags: ["sqs", "kafka", "message-queue", "infrastructure-cost", "engineering-decision", "opinion", "unverified"]
source_url: "user-provided://social-post-2026-09-sqs-vs-kafka-notifications"
status: "inbox"
---

# Social Media Post: Choosing SQS Over Kafka for a Notification System (Unverified Cost Claims)

## Source overview
An unsourced, unattributed social-media post (no company name, author, or external link provided) describing a 2023 decision to build a notification system on Amazon SQS instead of Apache Kafka, framed as a contrarian choice that paid off against conventional wisdom favoring Kafka.

## Claims made in the post
- The team chose SQS over Kafka in 2023 despite what the post describes as widespread pushback ('Kafka is the standard, SQS does not scale').
- Two years later, the system is stated to process 4 million notifications per day on SQS.
- The stated monthly SQS bill is $180.
- The post estimates that an equivalent Kafka setup would have cost approximately $2,400 per month, plus an estimated 40 hours of ongoing maintenance work (unit of time not specified as monthly or otherwise, though monthly is implied by context).
- The post claims zero outages, zero consumer-group rebalancing issues, and zero broker failures over the stated period.
- The post's closing framing: 'Sometimes boring technology wins.'

## Evidence status
This is an anonymous, unverified social-media claim with no company name, no link to a technical write-up, no architecture diagram, and no way to independently confirm the throughput figure, the cost figures, or the zero-incident claim. SQS and Kafka serve genuinely different messaging patterns in practice (SQS is a fully managed, simpler point-to-point/fan-out queue service with usage-based pricing; Kafka is a self-hosted or managed log-based streaming platform with different guarantees around ordering, replay, and consumer-group semantics), so a cost and reliability comparison between the two depends heavily on the specific workload shape, retention needs, and whether Kafka would have been self-hosted versus using a managed Kafka service, none of which are specified in the post. This record treats the specific dollar figures, the 4-million-per-day throughput number, and the zero-incident claim as unverified anecdote, not as an independently confirmed case study or benchmark.

## Sources
User-provided social media post shared in conversation; no external URL, company name, or author attribution was included with the original post.

---
title: graph-engineering
kind: paste
captured_at: 2026-07-24 06:40
tags: []
source_url: 
status: inbox
---

# graph-engineering

GitHub - codejunkie99/graph-engineering: The discipline of designing the structures AI agents work through — not the prompts.

Two halves:
1) Knowledge graphs — what agents remember. Nodes are entities and facts, edges are relationships with time and provenance. Ontology → extraction → fusion → serving.
2) Task graphs — how agents work. Nodes are jobs, edges are execution dependencies. Parallel fan-out, separate verifiers, the stop rule, the human gate.

9-stage pipeline: scope → representation → ontology → entities → relations → events → quality gate → fusion → serve to LLMs.

Task graph rules: delete fake edges; the diamond (split → parallel workers → separate verifier contexts → one owned merge); the stop rule (teams win ~80% on work that splits, lose on sequential work); the human gate.

Based on Southeast University's graduate Knowledge Graph course (npubird/KnowledgeGraphCourse, 4.4K★) + modern agent-orchestration research.

Contents: skill file, references (curriculum map, modeling, extraction, fusion + GraphRAG, task graphs), WORKFLOWS.md with 9 paste-ready prompt blocks (/kg-tutor, /kg-scope → /kg-rag), packaged skill.

Install: git clone, cp -r to ~/.claude/skills/, then ask agent to build or teach.

Credits: Southeast University KG course (Prof. Peng Wang), Google DeepMind × MIT scaling research, Anthropic multi-agent work. MIT licensed. Built by @Av1dlive.

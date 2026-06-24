# TarotTALKS Development Dossier

## Original Problem And Audience

**Observed:** TarotTALKS combines tarot-card structure, TED/TEDx talk content, public storytelling, generated imagery, talk/card pages, social campaigns, and campaign/content tooling.

**Inferred:** The audience is public: readers, viewers, and people encountering the project through shared cards, social images, talks, submissions, and storytelling assets.

## Earliest Prototype

**Observed:** The repository starts on 2025-12-07 and immediately enters Vercel deployment, database implementation, and content upload work. This was not a long local-only prototype; it was public/deployed from the start.

## Major Milestones

- **Deployment:** Phase 0 Vercel deployment setup on day one.
- **Persistence/content:** Database implementation and Supabase schema push in the first two days.
- **Bulk content:** 75 talks uploaded; 22 Major Arcana and suit content added through JSON/JSONL.
- **Presentation:** Design integration, high-res cards, aspect ratio, metadata, favicon, and README/backstory.
- **External APIs:** YouTube API setup and TED canonical links.
- **Social distribution:** Static social share images, Supabase Storage, social tab pack, campaign downloads, UGC/IG tooling, Bluesky metrics cron.
- **Admin/ops:** Admin card/talk pages, diagnostics, performance fixes, platform quota monitor.
- **Security/observability:** Snyk fixes and Sentry instrumentation.

## Deployment History

**Observed:** Vercel deployment work begins on the first day. Later commits show Vercel/Supabase optimization, platform quota monitoring, Sentry, and route instrumentation.

## Architectural Decisions

**Observed:** There is no obvious ADR trail in the inspected evidence. Process is encoded through phased commits, docs archives, completion-drive plans, workflow docs, and release tags.

## Admin And Operations Evolution

**Observed:** Admin surfaces become a major focus by February/March 2026, including card/talk admin pages, diagnostics, performance fixes, and one-round-trip dashboard optimizations.

## Testing And Reliability Evolution

**Observed:** Early lint/type validity was disabled under pressure. Later commits include campaign tests, Vercel optimization tests, admin fixes/tests, Snyk security fixes, Sentry instrumentation, and performance fixes.

## Presentation And Distribution Evolution

**Observed:** This is the dominant dimension: metadata, favicon, high-res imagery, social share images, social campaign assets, videos for marketing, public submissions, and Content Lab all appear as core product work.

## Major Direction Changes

- Technical prototype -> public visual/content product.
- Static card/talk content -> social campaign/tooling system.
- Public site -> admin/diagnostics/performance-managed system.
- Campaign assets -> social metrics and observability.

## Current State

**Observed:** TarotTALKS is a mature public/content application with extensive docs, campaign tooling, social distribution, admin diagnostics, and observability/security work.

## Process Lessons

**Inferred:** TarotTALKS demonstrates that in Brett's process, "presentation" can be a core product phase, not final polish. The project becomes real when content, imagery, metadata, share assets, and social campaign operations are all wired together.

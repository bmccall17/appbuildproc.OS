# AVLmc Development Dossier

## Original Problem And Audience

**Observed:** AVLmc is an Asheville music companion for event discovery, listener personalization, Spotify connection, public event cards, and curator/community features.

**Inferred:** The audience begins as local music listeners and quickly expands to signed-in listeners, curators, and the operator/admin who manages event quality and system health.

## Earliest Prototype

**Observed:** The first commit on 2026-06-04 is already labeled "100% built by Codex." Within a day it has community persistence, live-event work, deployment docs, feed guards, and event upserts. This looks less like a sketch and more like a compressed MVP sprint.

## Major Milestones

- **Persistence:** Aiven persistence lands the first day.
- **Deployment:** Vercel URL and Aiven deployment docs land on 2026-06-05.
- **Auth:** Auth build lands 2026-06-05; Spotify auth works on 2026-06-06.
- **Personalization:** Personalized discovery and impression tracking land on 2026-06-06.
- **Admin:** Admin portal v1 lands on 2026-06-08; later evolves into a living operating system.
- **Presentation:** Logo, public header, icons, OG/Twitter images land on 2026-06-08.
- **Storage:** Vercel Blob stores event image tiles by 2026-06-08.
- **Migration/hardening:** Connection exhaustion and Aiven -> Neon schema consolidation land on 2026-06-16.
- **Reliability:** Real SQL and cross-browser account-loop tests land on 2026-06-18.

## Deployment History

**Observed:** AVLmc becomes live by 2026-06-05 (`new URL avlmc.vercel.app`). The project later records production database migration and deployment/auth investigation details in docs.

## Architectural Decisions

Unlike agent828/repOptics, AVLmc's early process evidence is mostly commit/PRD/roadmap rather than a long ADR directory. Product docs define phase structure:

- Deployment and auth investigation.
- MVP event discovery board.
- Community contributions and reactions.
- Admin moderation.
- Personalized discovery.
- Admin portal and operations.
- Saved/favorites and richer genre matching.
- Social music sharing.
- Discovery benchmarking.
- Curator onboarding.
- Reliable account sign-in and Spotify connection.

## Admin And Operations Evolution

**Observed:** The admin portal appears after personalization and auth are working, then becomes a "living operating system." This is strong evidence that admin tooling follows the moment the product has enough live state to inspect and correct.

## Testing And Reliability Evolution

**Observed:** Current scripts include many focused tests: discovery, dedupe, taxonomy, shared songs, insight, social graph, curators, account linking, Spotify access, auth failures, auth email, feedback, e2e, account loop, social guardrails, benchmarks, registry, and typecheck. Later commits show real SQL and Playwright/cross-browser harnesses for the account loop.

## Presentation And Distribution Evolution

**Observed:** Branding, public header fixes, icons, and OG/Twitter images land within four days. Per-event OG/Twitter image fixes continue later.

## Major Direction Changes

- Aiven persistence to Neon migration.
- Admin panel to living operating system.
- Event discovery to personalized discovery.
- Personal discovery to social/curator graph.
- Spotify-first auth to reliable multi-email account spine.

## Current State

**Observed:** AVLmc is a compressed, highly operated product with live data, auth, Spotify, admin, benchmarks, system-map generation, and reliability tests.

## Process Lessons

**Inferred:** AVLmc is the distilled instinct sample: go live early, attach real data, add auth/external identity, measure behavior, expose admin controls, polish public shareability, then harden the account/data loop once production friction appears.

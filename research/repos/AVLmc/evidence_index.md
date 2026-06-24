# AVLmc Evidence Index

Repository: `/home/bam/projects/AVLmc`

## Repository State

- **Observed:** Git repository with 112 commits at inspection time.
- **Observed:** First commit: `2ebcf07|2026-06-04 07:51:06 -0400|initial commit! 100% built by Codex`.
- **Observed:** Working tree clean during inspection.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-06-04 | `2ebcf07` initial commit | Git | Repository birth and Codex-built seed. |
| 2026-06-04 | `6ca2c1e` Converted community persistence to Aiven | Git | Persistence is added within the first day. |
| 2026-06-05 | `e94cba2` long second sprint to make it live | Git | Explicit push from prototype to live app. |
| 2026-06-05 | `9bef8c6` deployment docs for Aiven launch; `c11d9af` new URL `avlmc.vercel.app` | Git | Deployment target becomes concrete. |
| 2026-06-05 | `241cefe` auth build | Git | Identity arrives on day two. |
| 2026-06-06 | `212781e` Spotify auth and backlink working | Git | External service integration becomes a core product loop. |
| 2026-06-06 | `83d0728` Personalized Discovery Phase 5 | Git | Recommendation/personalization becomes a named phase. |
| 2026-06-06 | `bca888a` impression tracking | Git | Behavioral measurement arrives immediately after personalization. |
| 2026-06-08 | `db88f6b` admin portal v1 | Git | Admin operations follow core discovery/auth quickly. |
| 2026-06-08 | `c0a6cdf`, `b20ce52`, `2c02b2b` logo, public header/branding, OG/Twitter images | Git | Public shareability and brand arrive within four days. |
| 2026-06-08 | `0ee784c` Vercel Blob storage for event image tiles | Git | Asset storage becomes product infrastructure. |
| 2026-06-15 | `/ship adrs/0001-real-time-taste-signals-and-state-persistence.md` | Git | A formal decision trail appears after the system has real behavior. |
| 2026-06-15 | `2b15c24` evolve `/admin` into a living operating system | Git | Admin changes from panel to operating surface. |
| 2026-06-16 | `0c3531f` stop Postgres connection exhaustion; `e2ebf64` consolidate DB schema; `9e5334e` Aiven -> Neon refs | Git | Production pressure triggers migration/hardening. |
| 2026-06-17 | Phase 10/12/13 commits: discovery benchmark, social graph, curator onboarding | Git | Product moves from personal discovery to social/curator system. |
| 2026-06-18 | PRD 35-38 account identity/reliability commits; Playwright/cross-browser and real SQL tests | Git | Account loop hardening becomes explicit after auth complexity. |

## Supporting Files

- `docs/product/master-roadmap.md` includes phased roadmap through reliable account sign-in and Spotify connection.
- `docs/product/architecture-reference.md` and `docs/product/system-map.generated.md` document system structure.
- `docs/product/deployment-auth-investigation.md` records Aiven to Neon migration on June 16, 2026.
- `docs/product/workflow.md` defines a Plan -> Build -> Ship workflow and status vocabulary.
- `package.json` includes Next.js, NextAuth, Postgres, Vercel Blob, Spotify-facing tests, Playwright, and registry/system-map scripts.

## Evidence Gaps

- **Gap:** The plan describes "Next.js + Supabase + Vercel," but current evidence shows Postgres/Aiven/Neon and NextAuth. Supabase may be absent or superseded; do not force it into the dossier without direct evidence.

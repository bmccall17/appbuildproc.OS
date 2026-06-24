# TarotTALKS Evidence Index

Repository: `/home/bam/projects/TarotTALKS`

## Repository State

- **Observed:** Git repository with 548 commits at inspection time.
- **Observed:** First commit: `ca5fdf5|2025-12-07 11:17:40 -0500|Initial commit`.
- **Observed:** Working tree clean during inspection.
- **Observed:** Tags exist from `v0.1.0` through `v1.6.5`.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2025-12-07 | `ca5fdf5` Initial commit | Git | Repository birth. |
| 2025-12-07 | `eabcf21` Phase 0 Vercel Deployment Setup | Git | Deployment is a first-day concern. |
| 2025-12-07 | `33042b6` implementing database and uploading cards & talks | Git | Persistence/content loading arrives immediately. |
| 2025-12-07 | `dc95f0e` turned off linting; `f04a5f4` turned off type validity | Git | Early speed-over-rigor tradeoff is explicit. |
| 2025-12-08 | `7339840` Database schema pushed to Supabase | Git | Database is operational by day two. |
| 2025-12-08 | `d055822` Design Integration Complete | Git | Visual/presentation layer is early product work. |
| 2025-12-08 | `44c4edc` upload 75 talks into the DB | Git | Bulk content ingestion is a major milestone. |
| 2025-12-08 | `22263bb` metadata update; `c0cad16` favicon | Git | Public metadata and favicon appear within first two days. |
| 2025-12-10 | README/backstory commits | Git | Narrative/framing becomes part of the public product. |
| 2025-12-11 | YouTube API setup and talk thumbnails | Git | External content integration and media enrichment. |
| 2026-02-06 | `bfd1b7e` static social share images via Supabase Storage; `a392d48` v1.6.2 release | Git | Social sharing and asset distribution become major release work. |
| 2026-02-08 | `500e7c7` Supabase egress reduction; `0d1458a` platform quotas monitor | Git | Cost/platform constraints trigger operational work. |
| 2026-02-26 | `df67f1a` Content Lab for social posting campaign | Git | Public distribution becomes an internal tooling surface. |
| 2026-02-27 | `bab75d6` Bluesky social metrics cron job | Git | Social publishing gets measurement/automation. |
| 2026-03-01 | `372f8ae` security fixes based on Snyk report | Git | Security hardening appears after product maturity. |
| 2026-03-04 | Admin diagnostics/performance commits | Git | Admin tooling and diagnostics become a focus. |
| 2026-04-07 to 2026-04-13 | Sentry config and route instrumentation | Git | Observability is added to admin/public routes. |
| Current | `docs/socialcampaign/*`, `docs/vidsformarketing/*`, `docs/completion_drive_plans/*` | Files | Distribution/promotion work is deeply embedded in repository docs. |

## Supporting Files

- `package.json`: Next.js, Supabase, Vercel Postgres, Drizzle, Sentry, Vercel Analytics, Speed Insights, Replicate, AT Protocol, campaign scripts.
- `drizzle.config.ts`, `.env.example`, and docs archives show database and deployment operations.
- `docs/CONTENT-SOURCING-RULES.md`, `docs/THEME-MANAGEMENT.md`, `docs/ContentLabWorkflowCheatsheet.md`, and campaign docs show content/publishing process.

## Evidence Gaps

- **Gap:** Early commits show lint/type checks disabled; later restoration state was not fully traced in this pass.
- **Gap:** Some content source files predate the repo and are archived/imported; commit dates show repository ingestion, not original material creation.

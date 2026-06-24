# agent828 Evidence Index

Repository: `/home/bam/projects/agent828`

## Repository State

- **Observed:** Git repository with 444 commits at inspection time.
- **Observed:** First commit: `7f76fd7|2026-03-12 12:06:12 -0400|Initial commit`.
- **Observed:** Working tree was dirty during inspection: modified `agent/scheduler.ts`, `docs/BACKLOG.md`, `scripts/cu-hr-log.jsonl`; untracked screenshot and `docs/runbooks/d3-cryo-recovery-2026-06-04.md`. Treat uncommitted files as current-state evidence, not chronology.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-03-12 | `7f76fd7` Initial commit | Git | Repository birth. |
| 2026-03-12 | `b8efd4d` Configure local deployment and AI Studio | Git | Deployment and AI-provider concerns appear immediately after repo creation. |
| 2026-03-12 | `e2124a3` Dockerfile setup and `7bf790b` Cloud Run port fix | Git | Deployment friction appears on day one; early move from local app to hosted service. |
| 2026-03-12 | `425123d` ADR from AI Studio; `a9dcc3b` ADR-002 Cloud Run region mismatch | Git + ADR | Decision documentation begins during the first day, tied to concrete deployment incidents. |
| 2026-03-13 | `93c1ac4` docs, CI, hygiene | Git | Governance and CI arrive within the first 24 hours. |
| 2026-03-13 | `05b5269` architecture diagram and security hardening + ADR | Git | Security and architecture documentation are early operated-product concerns. |
| 2026-03-13 | `c86bbae` ship v0.2.1 dual-voice activation | Git | Product voice becomes a formal release dimension. |
| 2026-03-14 | `e903c7a` ship v0.2.3 Cal.com migration | Git | External service migration appears as named release work. |
| 2026-03-15 | `499c1ea` ship v0.2.4 declassified brand kit | Git | Public presentation/brand work follows initial deployment and scheduling. |
| 2026-04 to 2026-06 | `migrations/202604_*.sql`, `migrations/202605_*.sql`, `migrations/202606_*.sql` | Files | Persistence expands from contact submissions into CRM, email, account team, operator runs, and AI telemetry. |
| 2026-05-18 | `7453c20` operator runs panel; `a310121` admin-api helper | Git | Admin visibility becomes a concrete response to manual catch-up and operations. |
| 2026-05-19 | `f4ec3e2` ADR-034 content_queue Neon-authoritative | Git + ADR | Source-of-truth consolidation becomes a recurring operational pattern. |
| 2026-05-20 | `8a08186` lane benchmarking + observability; `e3ba2fb` content freshness gate | Git | AI-lane observability and freshness gates appear after the marketing/content engine is running. |
| 2026-05-21 | `b0c0464` Neon CU-hr emergency throttle | Git | Cost pressure produces scheduler gates and monitoring. |
| 2026-05-22 | `9b2b28a` integrity audit ledger | Git | Integrity auditing becomes visible in the admin/operator surface. |
| 2026-05-24 | `a89092f` inbound email autoresponder cryo-bridge; `045681b` Resend delivery-events bypass | Git | Inbound email and third-party delivery issues lead to durable fallback paths. |
| 2026-06-01 | `50a53f5` scheduler cadences dialed for Neon autosuspend | Git | Operational cost and uptime are actively tuned. |
| 2026-06-03 | `ff6536c` Neon CU-hr measuring stick + visibility-gated admin polling | Git | Monitoring becomes both quantitative and UI-aware. |

## Architectural Evidence

- `docs/adr/001-initial-sprint-baseline.md` through `docs/adr/035-content-freshness-gate.md`.
- `docs/adr/026-persistence-migration-neon.md` documents SQLite to Neon Postgres migration.
- `docs/adr/028-single-writer-context-lake.md` documents a proposal queue/single-writer pattern, natural keys, sync resilience, observability, tests, and rejected alternatives.
- `.github/workflows/ci.yml`, `Dockerfile`, `agent/Dockerfile`, `.env.example`, and `agent/.env.example` prove deployment and CI surfaces.
- `package.json` includes React/Vite, Express, SQLite/Postgres, Resend, AI providers, Zod, and Vitest.

## Evidence Gaps

- **Gap:** The dirty working tree means the newest scheduler/backlog/cryo-recovery evidence cannot be dated from Git without further commit history.
- **Gap:** Some operational facts may live in external systems such as Cloud Run, Neon, Resend, Discord, or admin ledgers; this index uses local repository evidence only.

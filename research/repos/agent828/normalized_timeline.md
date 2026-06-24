# agent828 Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-03-12 or earlier | `7f76fd7` initial commit; `docs/adr/001-initial-sprint-baseline.md` | Medium |
| First working prototype | 2026-03-12 | Early app commits from initial commit through modal/routing/system logs | Medium |
| Repository creation | 2026-03-12 | `7f76fd7 Initial commit` | High |
| Initial deployment | 2026-03-12 to 2026-03-13 | Dockerfile, Cloud Run port fix, `ship v0.2.0 - east1 consolidation` | High |
| Persistence / data modeling | 2026-04 onward | `migrations/202604_*.sql`; later Neon migration ADR-026 | High |
| Authentication / identity | 2026-04 onward | Account lifecycle migrations and admin/CRM records | Medium |
| External services | 2026-03 onward | AI Studio, Cal.com, Resend, Cloud Run, Neon, AI providers | High |
| ADRs / architecture docs | 2026-03-12 onward | ADR-001 through ADR-035 | High |
| Admin / operational tooling | 2026-04 to 2026-05 | Admin data integrity ADR-018, admin API helpers, operator-run panels | High |
| Testing / reliability | 2026-03 onward | CI commit, Vitest scripts, CI fixes, rollup coverage, fallback work | High |
| Analytics / observability | 2026-03 to 2026-06 | GA4 ADR, lane observability, Bench Lab, CU-hour measuring stick | High |
| Social / public presentation | 2026-03-13 to 2026-03-15 | Dual voice, brand kit, public copy, later content queue work | High |
| Feedback / stakeholder pressure | 2026-04 to 2026-05 | CRM, lead pipeline, email composing, warming program, inbound email | Medium |
| Scaling / migration / correction | 2026-05 | SQLite to Neon, single-writer context lake, Neon CU-hour throttles | High |
| Documentation / handoff | 2026-03 onward | ADRs, runbooks, backlog, AI workload handoff docs | High |

## Phase Interpretation

agent828 follows an accelerated operated-product path:

1. Public/deployed seed.
2. Deployment and region stabilization.
3. Voice, brand, scheduling, and public usability.
4. Persistence and CRM expansion.
5. Admin/operator visibility.
6. AI/content pipeline authority.
7. Cost, freshness, and integrity guardrails.

The dominant loop is operational friction -> ADR/runbook -> schema or admin change -> release note -> new guardrail.

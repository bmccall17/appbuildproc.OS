# AVLmc Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-06-04 or earlier | Initial commit plus product docs/roadmap | Medium |
| First working prototype | 2026-06-04 to 2026-06-05 | Initial commit; second sprint to make live | High |
| Repository creation | 2026-06-04 | `2ebcf07 initial commit! 100% built by Codex` | High |
| Initial deployment | 2026-06-05 | `c11d9af new URL avlmc.vercel.app` | High |
| Persistence / data modeling | 2026-06-04 | `6ca2c1e Converted community persistence to Aiven`; later Neon migration | High |
| Authentication / identity | 2026-06-05 | `241cefe auth build`; later account spine PRDs | High |
| External services | 2026-06-06 | Spotify auth; Vercel Blob by 2026-06-08 | High |
| ADRs / architecture docs | 2026-06-15 onward | ADR commit for real-time taste/state; architecture reference/system map | Medium |
| Admin / operational tooling | 2026-06-08 | `db88f6b admin portal v1`; later living OS | High |
| Testing / reliability | 2026-06-17 to 2026-06-18 | Discovery benchmarks, real SQL, Playwright/cross-browser tests | High |
| Analytics / observability | 2026-06-06 to 2026-06-14 | Impression tracking; Umami setup | High |
| Social / public presentation | 2026-06-08 | Logo, imagery, public header, OG/Twitter images | High |
| Feedback / stakeholder pressure | 2026-06-16 to 2026-06-18 | Connection exhaustion, schema drift, sign-in issue triage | High |
| Scaling / migration / correction | 2026-06-16 | Stop Postgres connection exhaustion; Aiven -> Neon docs | High |
| Documentation / handoff | 2026-06-15 onward | Product workflow, master roadmap, PRDs, backlog | High |

## Phase Interpretation

AVLmc follows a compressed productization path:

1. Codex-built seed.
2. Persistence and live deployment.
3. Auth and Spotify integration.
4. Personalized discovery and measurement.
5. Admin and public presentation.
6. Migration/hardening under production pressure.
7. Social/curator and account-loop reliability.

The dominant loop is live feature -> behavioral signal -> admin visibility -> benchmark/test -> migration or guardrail.

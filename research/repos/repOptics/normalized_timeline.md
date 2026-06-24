# repOptics Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-01-20 or earlier | `1ad8a02 manual commit`; early scan/report code | Medium |
| First working prototype | 2026-01-21 | Code alignment, tests, scan hang fixes, file tree view | High |
| Repository creation | 2026-01-20 | `1ad8a02` | High |
| Initial deployment | 2026-01 to 2026-02 | Next.js app plus GitHub workflows; deployment target not fully verified locally | Medium |
| Persistence / data modeling | By current state; stronger by research lake phase | `lib/research/schema.sql`, Neon dependency, research migration SQL | High |
| Authentication / identity | By ADR-0012/current manifest | `next-auth`, GitHub OAuth/private repo scanning ADR | High |
| External services | 2026-01 onward | Octokit; later Port.io, Vertex/Gemini, Sentry, Neon, Upstash, Snyk | High |
| ADRs / architecture docs | 2026-01-22 | `ebdd22e` ADR log; `53b1ef3` architecture diagram | High |
| Admin / operational tooling | 2026-03 onward | Port dashboards, owner indexes, architecture graph, research lake panels | High |
| Testing / reliability | 2026-01-21 onward | Early tests; later `arch:check`, `research:validate-publication`, `verify:precommit` | High |
| Analytics / observability | 2026-06 | Research lake, run history, source freshness, Sentry dependency | Medium |
| Social / public presentation | 2026-05 to 2026-06 | Public briefs, publication drafts, public owner index | High |
| Feedback / stakeholder pressure | 2026-02 onward | Report-quality fixes, Port integration pain, claim hygiene, bulk-scan review findings | Medium |
| Scaling / migration / correction | 2026-06 | Unified scan execution, lake reads, capture throttle, snapshot integrity | High |
| Documentation / handoff | 2026-01 onward | ADRs, architecture reference, generated graph, runbooks | High |

## Phase Interpretation

repOptics follows a self-observation path:

1. Scanner/report prototype.
2. Reliability fixes and tests.
3. Governance and architecture documentation.
4. Generator and decision intelligence.
5. Platform integrations.
6. Security and pentest expansion.
7. Evidence-aware scoring and research lake.
8. Public claim hygiene and snapshot integrity.

The dominant loop is evidence ambiguity -> product semantics -> validator/architecture update -> public claim discipline.

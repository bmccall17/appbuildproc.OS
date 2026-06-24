# Submission Cockpit Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-06-07 | ADR-0001 invisible scraper leads for visual operator | High |
| First working prototype | Around 2026-06-05 | `dashboard/run.sh` mtime in export | Medium |
| Repository creation | 2026-03-20 upstream; local Cockpit around 2026-06-05 | Export caveat | Medium |
| Initial deployment | None | Local-only loopback design | High |
| Persistence / data modeling | 2026-06-04 to 2026-06-07 | Tracker CSV, per-role JSON, scraper JSON, reconcile ADR | High |
| Authentication / identity | None | No auth by design | High |
| External services | 2026-06-06 | MCP registration; LaTeX/Poppler shell tools | High |
| ADRs / architecture docs | 2026-06-07 | ADR-0001 through ADR-0007 | High |
| Admin / operational tooling | 2026-06-05 onward | Cockpit dashboard itself | High |
| Testing / reliability | 2026-06-21 | ADR-0006 and unittest files | High |
| Analytics / observability | Partial | Logs/LEARNINGS/scraper logs, no telemetry | Medium |
| Social / public presentation | Not applicable | Local tool; upstream README only | High |
| Feedback / stakeholder pressure | 2026-06-07 onward | Drift and duplicate-application risk | High |
| Scaling / migration / correction | 2026-06-13 to 2026-06-21 | Retire queue mirror; shared definitions backbone | High |
| Documentation / handoff | 2026-06-07 onward | ADRs, queue archives, runbooks | High |

## Phase Interpretation

Submission Cockpit follows a local-operations path:

1. Inherited framework.
2. Local dashboard prototype.
3. Agent/MCP exposure.
4. Source-of-truth repair.
5. Manual artifact reversal.
6. Shared definitions and tests.
7. Action-oriented status UI.

The dominant loop is operational invisibility -> dashboard -> drift discovered -> one source of truth -> guardrail test.

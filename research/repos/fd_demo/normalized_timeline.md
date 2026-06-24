# fd_demo Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-01-27 or earlier | Official rules PDF mtime | Medium |
| First working prototype | 2026-01-31 | Vite scaffold, changelog v0.1.0/v0.2.0 | Medium |
| Repository creation | Unknown | No Git repository; scaffold files mtime 2026-01-31 | Low |
| Initial deployment | 2026-01-31 | `partykit.json`; changelog PartyKit deployment pipeline | Medium |
| Persistence / data modeling | Not central | No DB evidence in inspected files; Zustand/client state in manifest | Medium |
| Authentication / identity | Not found | No auth evidence in inspected files | Medium |
| External services | 2026-01-31 | PartyKit, WebXR/browser APIs | High |
| ADRs / architecture docs | 2026-02-01 | Architecture plan, PRD phase docs, agent workflows | Medium |
| Admin / operational tooling | 2026-02-01 onward | Release checklist, XR testing workflow, rules audit, asset inventory | High |
| Testing / reliability | 2026-01-31 onward | Quest 3 testing, known limitations, rules audit | Medium |
| Analytics / observability | Not found | No telemetry evidence in inspected files | Low |
| Social / public presentation | 2026-02-01 | README, live demo section, release checklist | Medium |
| Feedback / stakeholder pressure | 2026-02-10 onward | XR capability notes, rules audit, game audit doubts | Medium |
| Scaling / migration / correction | 2026-02-02 to 2026-02-18 | Asset decoupling and 3D asset pipeline | High |
| Documentation / handoff | 2026-01-31 onward | Agent workflows, changelog, project status, devnotes | High |

## Phase Interpretation

fd_demo follows a rules-to-XR path:

1. Source rule ingestion.
2. Foundation scaffold and core rules engine.
3. Multiplayer/PartyKit infrastructure.
4. XR interaction layer.
5. Manual testing/release checklist.
6. Asset decoupling.
7. Rules audit and asset pipeline.

The dominant loop is fidelity risk -> audit/checklist -> pipeline or implementation correction.

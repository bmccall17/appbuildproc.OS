# KintsugiBlackjack Normalized Timeline

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| Idea / problem recognition | 2026-05-28 | Original Blackjack Victory GDD | High |
| First working prototype | 2026-05-27 to 2026-05-31 | Vite scaffold, DeckManager, combat loop/components by mtime | Medium |
| Repository creation | Around 2026-05-27 | Scaffold mtimes; no Git | Medium |
| Initial deployment | By 2026-06-03 | PartyKit config/compatibility date and OG host | Medium |
| Persistence / data modeling | Deferred/absent | In-memory PartyKit and localStorage only | High |
| Authentication / identity | None | No auth evidence | High |
| External services | Build-time art only; PartyKit runtime | PartyKit, Pixelcut/Pixa MCP prompts out-of-band | High |
| ADRs / architecture docs | 2026-05-28 to 2026-06-03 | ADR-0001 through ADR-0012 | High |
| Admin / operational tooling | 2026-06-02 to 2026-06-06 | Audio admin, koan editor, balance dashboards | High |
| Testing / reliability | Not automated | Manual live-server testing; no test files | High |
| Analytics / observability | Partial | Balance dashboards, not runtime telemetry | Medium |
| Social / public presentation | By 2026-06-06 | OG/Twitter metadata, favicon, generated imagery | High |
| Feedback / stakeholder pressure | 2026-05-31 to 2026-06-03 | ADR reversals, reward de-stubbing, responsive strategy reversal | Medium |
| Scaling / migration / correction | 2026-05-31 to 2026-06-06 | Theme pivot, CSS strategy reversal, admin instrumentation | High |
| Documentation / handoff | 2026-05-28 onward | GDD, ADRs, backlog, AGENTS-style docs in export | High |

## Phase Interpretation

KintsugiBlackjack follows a creative game path:

1. Scaffold and core combat.
2. Multiplayer race.
3. Engine extensibility.
4. Creative pivot through reversible theme layer.
5. Narrative/presentation/audio.
6. Systems depth.
7. Balance/admin instrumentation.

The dominant loop is playable mechanic -> creative reframing -> reversible architecture -> tuning instrumentation.

# KintsugiBlackjack Evidence Index

Source export: `/home/bam/academy/playbook/applicationbuildingprocess/BlackjackVictory_research_export.md`

## Evidence Basis

- **Observed:** Satellite export generated 2026-06-23.
- **Observed:** Export says the project is not a Git repository.
- **Observed:** Chronology is reconstructed from file mtimes, ADRs, backlog completed log, and in-file evidence.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| Around 2026-05-27 | Vite scaffold and `DeckManager.ts` mtimes | Export/mtime | Project/scaffold birth. |
| 2026-05-28 | `archive/Blackjack_Victory_GDD.md` | Export/file | Original Blackjack Victory concept. |
| 2026-05-28 | ADR-0001 mobile responsive adaptation | Export/ADR | Early UX/layout decision. |
| 2026-05-28 | ADR-0002 multiplayer victory race | Export/ADR | PartyKit multiplayer enters early. |
| 2026-05-30 | ADR-0003 enemy modifier hooks; ADR-0004 mid-turn combat hooks | Export/ADR | Engine extensibility is formalized. |
| 2026-05-31 | ADR-0005 RunEngine state machine | Export/ADR | Core engine architecture. |
| 2026-05-31 | ADR-0006 unified responsive CSS strategy | Export/ADR | Mobile layout strategy reverses ADR-0001. |
| 2026-05-31 | ADR-0007 Kintsugi skin theme layer | Export/ADR | Creative pivot executed as reversible theme layer. |
| 2026-06-01 | ADR-0008 living background; ADR-0009 apprenticeship flow | Export/ADR | Presentation and narrative flow become system decisions. |
| 2026-06-02 | ADR-0010 audio engine singleton | Export/ADR | Audio infrastructure. |
| 2026-06-03 | ADR-0011 build slots; ADR-0012 mastery/refinement rewards | Export/ADR | Systems depth and reward architecture. |
| 2026-06-06 | Admin/balance dashboards and build artifacts | Export/mtime | Instrumentation and tuning arrive after core systems. |

## Supporting Evidence

- Tech stack: React/Vite, TypeScript, PartyKit/PartyServer/PartySocket, CSS Modules.
- Persistence: no server-side database; in-memory PartyKit room scores and client localStorage.
- Auth: none.
- Deployment: PartyKit with static frontend and WebSocket server.
- Testing/CI/security: no evidence; manual live-server testing explicitly preferred in export.
- Presentation: OG/Twitter metadata, generated images, favicon, Kintsugi visual identity.

## Evidence Gaps

- **Gap:** No Git history.
- **Gap:** README remains stock Vite template; human-facing project README is missing.
- **Gap:** Persistence, auth, automated tests, CI, and security hardening are absent/deferred.

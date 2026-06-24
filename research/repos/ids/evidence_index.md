# ids Evidence Index

Repository: `/home/bam/projects/ids`

## Repository State

- **Observed:** Git repository with 10 commits at inspection time.
- **Observed:** First commit: `fc522a3|2026-02-15 07:20:46 -0500|Scaffold Vite + TypeScript + Three.js project`.
- **Observed:** Working tree was heavily dirty during inspection, with many modified/untracked files including `party/`, `partykit.json`, tests, VR files, devnotes, and agent workflows. Treat those as current/uncommitted evidence unless dated by file mtime.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-02-14 | `devnotes/gdd.md` mtime | File mtime | Game design document predates Git scaffold. |
| 2026-02-15 | `fc522a3` Vite + TypeScript + Three.js scaffold | Git | Repository birth. |
| 2026-02-15 | `87941e1` constants with tuning knobs | Git | Mechanics are parameterized immediately. |
| 2026-02-15 | `1da6ae8` boid data; `7b862b5` fixed-timestep flock simulation | Git | Core simulation is built before UI polish. |
| 2026-02-15 | `f318fba` arena/camera; `81ed5fd` renderer | Git | Rendering follows simulation. |
| 2026-02-15 | `d8a46eb` input abstraction | Git | Control model becomes its own layer. |
| 2026-02-15 | `72d4400` allegiance conversion mechanic | Git | Core game mechanic. |
| 2026-02-15 | `bc8c263` HUD, timer, win overlay, mute toggle | Git | Playable loop and feedback layer. |
| 2026-02-15 | `ce384a4` Tone.js generative soundscape | Git | Atmosphere/audio is added once core loop exists. |
| 2026-02-16 | `party/server.ts`, `network.ts`, `protocol.ts` mtimes | File mtime | Network/PartyKit layer appears after the committed local prototype. |
| 2026-02-17 to 2026-02-18 | 3D/VR files and tests mtimes | File mtime | Later uncommitted expansion into 3D/VR. |
| 2026-02-18 | `partykit.json` mtime | File mtime | Deployment/multiplayer config appears after the initial Git commits. |
| 2026-02-19 | `devnotes/SHIP_LOG.md` mtime | File mtime | Handoff/release log exists, but not committed in inspected Git state. |

## Supporting Files

- `package.json`: Three.js, Tone.js, PartySocket; dev deps include PartyKit, Vitest, Vite, TypeScript.
- `src/*.test.ts`: current tree includes broad tests for simulation, rendering, protocol, VR, audio, and wiring, but many are uncommitted.
- `.agent/workflows/*`, `CLAUDE.md`, `GEMINI.md`, and devnotes show agent workflow layering.

## Evidence Gaps

- **Gap:** Git captures only the first 10 commits. Later network, VR, test, and PartyKit work is mostly uncommitted in this checkout.
- **Gap:** File mtimes are weaker chronology than commits.

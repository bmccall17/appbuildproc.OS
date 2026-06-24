# ids Development Dossier

## Original Problem And Audience

**Observed:** ids is a flock-based strategy/game prototype using Three.js, boid simulation, conversion mechanics, HUD, generative audio, and later network/VR evidence.

**Inferred:** The audience is initially the builder/tester exploring a mechanic, then potentially multiplayer/VR players as PartyKit and XR files appear.

## Earliest Prototype

**Observed:** A GDD predates the Git scaffold by file mtime. The committed prototype is built in a clean sequence on 2026-02-15: scaffold -> constants -> boid -> flock simulation -> arena -> renderer -> input -> conversion -> HUD -> audio.

## Major Milestones

- **Concept/GDD:** `devnotes/gdd.md` mtime 2026-02-14.
- **Scaffold:** Vite/TypeScript/Three.js on 2026-02-15.
- **Simulation:** Boid data and fixed-timestep flock simulation.
- **Rendering/input:** Arena/camera, instanced renderer, unified pointer abstraction.
- **Game mechanic:** Proximity-based allegiance conversion.
- **Feedback:** HUD, timer, win overlay, mute toggle.
- **Atmosphere:** Tone.js generative soundscape.
- **Uncommitted expansion:** Network protocol, PartyKit server, 3D/VR renderer, XR input/session, debug overlays, and many tests by file mtime.

## Deployment History

**Observed:** `partykit.json` exists as uncommitted/current evidence with mtime 2026-02-18. The committed history does not include deployment config.

## Architectural Decisions

**Observed:** No ADR directory was found. Architecture appears through very small sequential commits and later devnotes/agent workflow files.

## Admin And Operations Evolution

**Observed:** No admin surface evidence. Operational equivalents are debug overlay/view, tests, and agent workflows.

## Testing And Reliability Evolution

**Observed:** The current tree contains many Vitest test files, but most are uncommitted relative to the 10-commit Git history. This is evidence of later hardening but not fully committed chronology.

## Presentation And Distribution Evolution

**Observed:** Presentation is mainly experiential: renderer, HUD, audio, 3D/VR expansion, screenshots. No public landing/social layer was inspected.

## Major Direction Changes

- Local boid prototype to networked/PartyKit direction.
- 2D/orthographic rendering to 3D/VR expansion.
- Minimal committed prototype to test-heavy uncommitted working tree.

## Current State

**Observed:** ids has a clean seed commit history but a much larger uncommitted current state. It should be analyzed as a prototype whose real later evolution is partly outside Git.

## Process Lessons

**Inferred:** ids shows a compact mechanic-first game pattern: isolate simulation and tuning knobs, then add input, feedback, and atmosphere. Later, when the concept has life, network/VR/test layers grow around it.

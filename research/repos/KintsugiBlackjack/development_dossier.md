# KintsugiBlackjack Development Dossier

## Original Problem And Audience

**Observed:** The original concept was Blackjack Victory, later reframed as Kintsugi with Morty: a roguelike card battler and an experiment in agentic game development.

**Inferred:** The audience is initially the builder and observers/testers of the experiment; multiplayer participants are ephemeral.

## Earliest Prototype

**Observed:** Vite/React scaffold and first game-logic file appear around 2026-05-27. The original GDD is dated 2026-05-28.

## Major Milestones

- **Scaffold and card logic:** Vite scaffold and DeckManager.
- **Mobile/responsive decision:** ADR-0001.
- **Multiplayer:** ADR-0002 PartyKit victory race.
- **Combat extensibility:** Modifier hooks and mid-turn hooks.
- **State machine:** RunEngine functional state machine.
- **Responsive reversal:** Unified CSS strategy replaces earlier mobile hook strategy.
- **Creative pivot:** Kintsugi skin/theme layer preserves original mode rather than rewriting.
- **Narrative/presentation:** Living background and apprenticeship flow.
- **Audio:** Singleton audio engine.
- **Systems depth:** Build slots, active techniques, mastery/refinement rewards.
- **Instrumentation:** Admin audio, koan editor, balance heatmap, damage calculator, discipline comparator, vessel catalogue, background/cross-section sandboxes.

## Deployment History

**Observed:** PartyKit deployment is the single target. `partykit.json` carries a 2026-06-03 compatibility date in the export, and OG tags point to the PartyKit host.

## Architectural Decisions

**Observed:** The project has 12 ADRs in about one week, despite no Git repository. Decisions are concentrated around engine shape, multiplayer, responsive strategy, creative theme, audio, and reward systems.

## Admin And Operations Evolution

**Observed:** Admin tooling is game-design instrumentation rather than product operations: balance dashboards, audio mixer, koan editor, sandboxes, calculators, and catalogues.

## Testing And Reliability Evolution

**Observed:** Export reports no automated tests or CI, and says local testing is manual on the live server.

## Presentation And Distribution Evolution

**Observed:** The Kintsugi pivot, living background, OG/Twitter images, favicon, generated art prompts, and visual theme are central. Public presentation matters even while backend persistence/auth are deferred.

## Major Direction Changes

- Blackjack Victory -> Kintsugi with Morty.
- JS mobile hook + media query strategy -> CSS container query strategy.
- Static background/breathe effect -> living canvas cinemagraph.
- Stub reward -> refinement technique-level reward.
- React Native Web direction abandoned.

## Current State

**Observed:** KintsugiBlackjack is a process-rich creative game experiment with strong ADR/backlog discipline, PartyKit deployment, no DB/auth/tests/CI, and substantial instrumentation ahead of full content completion.

## Process Lessons

**Inferred:** KintsugiBlackjack shows Brett using reversible architecture to protect generative exploration. The creative pivot is not a rewrite; it is a theme layer that preserves optionality.

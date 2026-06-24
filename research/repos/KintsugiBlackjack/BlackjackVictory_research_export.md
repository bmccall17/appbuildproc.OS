# Research Export — KintsugiBlackjack

> **Export type:** Satellite repository research export, generated per `satellite_export_prompt.md`.
> **Generated:** 2026-06-23
> **Consumer:** Cross-project analysis of Brett's application-building process ("Brett Build OS" research).
> **Method note:** This export is *archaeological* — it extracts dated evidence of how the project evolved, not a description of what it does today.

---

## ⚠️ Critical Methodology Caveat — No Git History

**This repository is NOT a git repository.** `git rev-parse` fails (`fatal: not a git repository`); there is no `.git/` directory, no remotes, no commit log, no tags, no branches. Every git-based command in the source prompt (Sections 3, 7, 8 and most of Section 5) has **no data to return**.

To compensate, all dating in this export is reconstructed from **filesystem modification timestamps** (`find -printf %T`), **in-file content evidence** (comments, doc dates, ADR sequence numbers), and the **`backlog.md` Completed log** which functions as a hand-maintained changelog. This is a meaningfully weaker evidence base than a commit graph:

- **[Gap]** Timestamps reflect *last modification*, not creation — a file edited last week shows last week's date even if it was authored in May. Earliest-seen dates are therefore *upper bounds* on age (the file is at least that old), not authorship dates.
- **[Gap]** No way to see reverted work, abandoned branches, or the granular sequence of changes within a single day.
- **[Observed]** The ADR directory (`0001`…`0012`) and the `backlog.md` Completed section are the strongest chronological signals available and are treated as primary sources throughout.

Confidence levels below are calibrated to this weaker basis.

---

## Section 1: Repository Identity

```
Project Name:    KintsugiBlackjack (a.k.a. "Kintsugi with Morty" / "Kintsugi BlackJack")
                 — package.json still reads "temp_app"; partykit.json reads "kintsugiblackjack"
Local Path:      /home/brett/projects/BlackjackVictory
Remote URL:      [No evidence] — not a git repo, no remotes.
                 Deploy target host: kintsugiblackjack.bmccall17.partykit.dev (from index.html OG tags)
Creation Date:   [Inferred] ~2026-05-27 (earliest source-tree timestamp: tsconfig/vite/eslint
                 scaffold + src/game/DeckManager.ts at 2026-05-27 14:22–14:25).
                 An older asset (scratch/kenney_audio zip) dates to 2026-05-15 but is a downloaded
                 third-party pack, not project authorship.
Latest Activity: [Inferred] 2026-06-06 (newest non-build source: EventDatabase.ts, RunEndScreen.tsx,
                 admin dashboards; dist/ build artifacts also stamped 2026-06-06 15:26).
Total Commits:   [No evidence] — not a git repo.
Branch Count:    [No evidence] — not a git repo.
Tag Count:       [No evidence] — not a git repo.
```

**Fork lineage [Observed]:** `partykit.json` carries an inline comment revealing the project's origin:
```json
{ "name": "kintsugiblackjack", //originnal blackjack-victory-multiplayer  (sic)
```
The project began as **"blackjack-victory-multiplayer"** and was renamed to **kintsugiblackjack**. The `archive/Blackjack_Victory_GDD.md` (dated 2026-05-28) is the *original* game design document, now superseded by `KintsugiwithMorty_GDD.md`. The repo directory itself is still named `BlackjackVictory`, and `package.json` was never renamed off the Vite scaffold default (`"temp_app"`). So three naming epochs coexist in the tree: `temp_app` (scaffold) → `blackjack-victory-multiplayer` (original concept) → `kintsugiblackjack` (current reskin).

---

## Section 2: Tech Stack Snapshot

| Dimension | Finding |
|---|---|
| **Language** | TypeScript (~5.6.2), strict project refs (`tsconfig.app.json` + `tsconfig.node.json`) |
| **Framework** | React 18.3.1 + React DOM 18.3.1, built with Vite 5.4.10 (`@vitejs/plugin-react`, Babel Fast Refresh) |
| **Backend / Networking** | **PartyKit** — `partykit ^0.0.115`, `partyserver ^0.5.6`, `partysocket ^1.1.19`. Single WebSocket server at `src/party/server.ts`. |
| **Persistence** | **None server-side (ephemeral).** Scores live in-memory in the PartyKit room (`scores: Record<...>`), wiped when the room empties. Client-side state uses `localStorage` (theme skin, audio config, koans). No database, no ORM, no migrations. |
| **Deployment target** | PartyKit (single target — hosts both the static `dist/` frontend via `"serve": "dist"` and the WebSocket backend via `"main": "src/party/server.ts"`). `compatibilityDate` pinned to `2026-06-03`. |
| **Authentication** | **None.** No auth library, no sessions, no tokens. "Admin" surfaces are unauthenticated, gated only by URL/query (`?admin=audio`, `public/admin*.html`). |
| **External APIs** | No runtime API integrations. Art was generated out-of-band via the **Pixelcut/Pixa MCP** (Imagen 4) — documented in `docs/kintsugi_asset_prompts.md`, not called from app code. |
| **Styling** | Standard CSS + CSS Modules (`*.module.css`). Tailwind explicitly rejected (AGENTS.md). React Native Web explicitly deprecated. |
| **Linting** | ESLint 9 flat config (`eslint.config.js`) + `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. |

**Top dependencies (all of them — the manifest is lean):**
`partykit`, `partyserver`, `partysocket`, `react`, `react-dom` (runtime); `typescript`, `vite`, `@vitejs/plugin-react`, `eslint` + plugins, `@types/react(-dom)`, `globals` (dev).

```
package.json scripts:
  dev     → vite                 (frontend dev server, :5173)
  build   → tsc -b && vite build (typecheck + static build to dist/)
  lint    → eslint .
  preview → vite preview
  party   → partykit dev         (backend WebSocket server, :1999)
```

---

## Section 3: Chronological Archaeology (Filesystem-Reconstructed)

> **[Gap]** No `git log`. The following is reconstructed from file mtimes + the ADR sequence + the `backlog.md` Completed log. Dates are last-modified (upper-bound ages).

### "Birth" window — earliest-stamped files (the scaffold)
```
2026-05-27 14:22 | .gitignore, README.md (stock Vite template), eslint.config.js,
                  | tsconfig.*.json, vite.config.ts, src/vite-env.d.ts, src/assets/react.svg
2026-05-27 14:25 | src/game/DeckManager.ts            ← first game-logic file
2026-05-28 10:31 | archive/Blackjack_Victory_GDD.md   ← original GDD ("blackjack-victory-multiplayer")
2026-05-28 12:00 | package-lock.json
2026-05-28 12:04 | package.json
```

### ADR timeline (strongest dated decision record — [Observed])
```
2026-05-28 | 0001 Mobile responsive adaptation
2026-05-28 | 0002 Multiplayer victory race
2026-05-30 | 0003 Enemy modifier hooks
2026-05-30 | 0004 Mid-turn combat hooks
2026-05-31 | 0005 RunEngine functional state machine
2026-05-31 | 0006 Unified responsive CSS strategy   ← reverses 0001 (see Section 6)
2026-05-31 | 0007 Kintsugi skin theme layer          ← the pivot to "Kintsugi with Morty"
2026-06-01 | 0008 Living background cinemagraph
2026-06-01 | 0009 Apprenticeship flow / stageIntro phase
2026-06-02 | 0010 Audio engine singleton
2026-06-03 | 0011 Build slots and active technique
2026-06-03 | 0012 Core action mastery and refinement rewards
```

### Latest frontier — newest-stamped source
```
2026-06-06 | src/game/EventDatabase.ts, src/components/RunEndScreen.tsx,
           | public/admin-balance.html, admin-calculator.html, admin-disciplines.html,
           | admin-vessels.html, admin.html   ← the analytics/admin-dashboard wave
2026-06-06 15:26 | dist/* (last production build)
```

### Lifecycle-keyword scan (run against `backlog.md` Completed + ADRs in lieu of `git log --grep`)
- **deploy / ship / launch:** No deploy commits (no git). Deployment is procedural via the `/ship` skill (`.agents/ship-procedure.md`) → `npx partykit deploy`. Live host confirmed in OG tags.
- **multiplayer / race:** ADR 0002 (2026-05-28); backlog "Multiplayer Victory Race" + "Multiplayer Combat Feed" Completed.
- **refactor:** ADR 0005 "RunEngine Refactor"; ADR 0006 reverses the mobile strategy of 0001.
- **scaffold / init / MVP:** Stock Vite template at 2026-05-27 (README never replaced).
- **admin / dashboard / analytics:** Admin audio mixer (ADR 0010, 2026-06-02); five admin HTML dashboards + `AdminDashboard.tsx` (2026-06-03 → 2026-06-06).
- **test / ci / docker / db / migration / security / monitor / env:** **No evidence found** for any of these (see Section 5).

---

## Section 4: File Structure Snapshot

### Top-level
```
.agents/                ← tool-neutral canonical procedures (ship-procedure.md)
.claude/  .gemini/       ← per-agent thin-wrapper skill dirs pointing at .agents/
.partykit/              ← local PartyKit dev state cache
AGENTS.md               ← single source of truth for AI agents (CLAUDE.md & .gemini defer to it)
CLAUDE.md               ← 2-line redirect to AGENTS.md
Kintsugi_Storyline.md
Kintsugi_The_Golden_Seam_slidedeck.pdf
KintsugiwithMorty_GDD.md ← canonical current GDD
README.md               ← STOCK VITE TEMPLATE, never customized
archive/                ← superseded original docs (Blackjack_Victory_GDD.md, Storyline_Ideas.md)
backlog.md              ← prioritized work queue + Completed changelog (primary chronology source)
docs/                   ← Game_Systems_Reference, style guide, design concepts, adr/
eslint.config.js  index.html  package.json  partykit.json  vite.config.ts  tsconfig.*.json
public/                 ← static assets, admin dashboards, sandboxes, OG/favicon
scratch/                ← downloaded third-party audio (kenney_ui-audio)
src/                    ← application source
dist/                   ← last production build (2026-06-06)
```

### Source organization (`src/`) — clean engine/UI separation
```
src/
  game/        ← PURE functional game logic (no React, no side effects)
    Types.ts, CombatEngine.ts, HandResolver.ts, ModifierEngine.ts,
    RunEngine.ts, ShopEngine.ts, RestEngine.ts, DeckManager.ts,
    EnemyDatabase.ts (25 enemies), ItemDatabase.ts (5/54), UpgradeDatabase.ts (4/45),
    ContractDatabase.ts (6 contracts), EventDatabase.ts, EventEngine.ts,
    AudioEngine.ts, AudioLibrary.ts, KoanEngine.ts
  components/  ← declarative React UI (reads RunState/CombatState)
    ~22 screen/widget components + CSS modules; includes Admin*, LivingBackground,
    SeamCrossSection, MastersBriefing, StageIntro, ShatteredVessel
  party/
    server.ts  ← the ENTIRE backend (84 lines)
  theme/       ← runtime reskin layer (ADR 0007): ThemeContext, labels, content,
                 narrative, resolve, useLabels, themes.css
  App.tsx      ← "dumb router" switching on runState.phase
```

**Architectural principle [Observed]:** `src/game/` is pure functional state machines (state in → new state out, no mutation); `src/components/` is declarative and reads that state; `App.tsx` is a phase router. Enemies/items/upgrades/contracts all plug into one event-driven `ModifierEngine` hook system rather than engine-level `if (id === ...)` branches (AGENTS.md dev rules #6–7).

---

## Section 5: Key Lifecycle Milestones

| Milestone | Date | Evidence | Confidence |
|---|---|---|---|
| **Idea / Problem Recognition** | ≤2026-05-28 | `archive/Blackjack_Victory_GDD.md` — original "blackjack-victory-multiplayer" GDD. OG description frames it as "an experiment in game design and agentic development... how far can this go?" | High |
| **Repository Creation** | ~2026-05-27 | Vite scaffold + `DeckManager.ts` stamped 2026-05-27. No git commit to confirm. | Medium |
| **First Working Prototype** | ~2026-05-27→31 | `dev`/`party` scripts present from scaffold; core combat loop (Hit/Stand/Bust) is the oldest Completed backlog block; first components (`ActionMenu`, `Hand`) stamped 2026-05-31. | Medium |
| **First Deployment** | ≤2026-06-03 | `partykit.json` `compatibilityDate: 2026-06-03` ("pinned so deploys are reproducible"); live host `kintsugiblackjack.bmccall17.partykit.dev` in OG tags; `/ship` deploy procedure. No CI, no dated deploy log. | Medium |
| **Persistence / Database** | — | **No evidence found.** Deliberately ephemeral (ADR 0002): in-memory PartyKit room scores + client `localStorage`. Listed as tech debt to fix later (D1/Postgres). | High (absence) |
| **Authentication** | — | **No evidence found.** No auth libs/routes/sessions. Admin surfaces are unauthenticated. | High (absence) |
| **External API Integration** | n/a (build-time) | No runtime APIs. Art generated via Pixelcut/Pixa MCP (Imagen 4) out-of-band; prompts in `docs/kintsugi_asset_prompts.md`. | High |
| **ADRs / Decision Docs** | 2026-05-28 → 06-03 | `docs/adr/0001`–`0012` (12 ADRs). Plus design docs in `docs/`. Strongest decision trail in the repo. | High |
| **Admin / Operational Tooling** | 2026-06-02 → 06-06 | In-app `AdminDashboard.tsx` (audio mixer ADR 0010 + koan editor); five standalone analyst dashboards in `public/` (balance heatmap, damage calculator, discipline comparator, vessel catalogue, hub). See Section "Dashboards". | High |
| **Testing** | — | **No evidence found.** No test files, no jest/vitest/playwright. AGENTS.md explicitly: *"Do not write or run tests locally. All testing is done manually on the live server."* | High (intentional absence) |
| **Analytics / Monitoring / Logging** | partial | No telemetry/Sentry. The admin **balance heatmap / damage calculator** dashboards are the de-facto "analytics" — design-time balance inspection, not runtime monitoring. | Medium |
| **Social / Public Presentation** | ≤2026-06-06 | `index.html` OpenGraph + Twitter Card meta; `public/og_image.png`, `og_image_original.png`, `favicon.png/ico`. Reskinned to Kintsugi (gold-seamed bowl, workshop hero) per backlog. | High |
| **Security Hardening** | — | **No evidence found.** No rate limiting, CORS config, input validation hardening, helmet/CSP. WebSocket server parses messages with bare `JSON.parse` and trusts client payloads. | High (absence) |
| **CI/CD** | — | **No evidence found.** No `.github/`, no workflows. "CD" is the manual `/ship` skill. | High (absence) |
| **Documentation** | 2026-05-28 → ongoing | Heavy *internal* docs (AGENTS.md, GDD, Game_Systems_Reference, 12 ADRs, design concepts). But user-facing `README.md` is still the **stock Vite template** — never written. | High |

---

## Section 6: Decision Reversals & Direction Changes

1. **The Kintsugi reskin pivot (the defining direction change) [Observed].** ADR 0007 (2026-05-31) + the new `KintsugiwithMorty_GDD.md` reframe the entire project from a generic "Blackjack Victory" roguelike into **"Kintsugi with Morty"** — a Zen, pottery-repair–themed apprenticeship game (vessels instead of enemies, "repair damage," gold-seam aesthetic, Morty Bachar the master). Crucially this was done as a **runtime theme layer** (`src/theme/`) rather than a rewrite: the original Blackjack mode is preserved behind a `localStorage`-persisted homepage toggle, engine untouched. The original GDD was moved to `archive/`. This is a reskin-without-fork — a reversible bet on a new creative direction.

2. **Mobile layout strategy reversal [Observed].** ADR 0001 (2026-05-28) introduced a dual desktop/mobile layout via an `isMobile` JS hook + media queries. ADR 0006 (2026-05-31) **reverses it**: the `useIsMobile` hook was *removed* and all layout moved to CSS Container Queries (backlog: *"[ADR 0001] Mobile Layout Complexity: Resolved via ADR 0006. useIsMobile hook removed."*). A documented swap of approach within days.

3. **Living-background replacement [Observed].** ADR 0008 (2026-06-01) replaced the earlier `.backgroundLayer` 25s Ken-Burns "breathe" effect with a canvas-particle cinemagraph (`LivingBackground.tsx`), and fixed a `z-index:-1` blank-screen regression in the process.

4. **Boss reward de-stubbing [Observed].** ADR 0012: the `golden_ace` reward was a dead stub (never existed in `ItemDatabase`, rendered as a nameless effectless button) and was replaced by the "Refinement" technique-level reward.

5. **React Native Web abandoned [Observed].** AGENTS.md flags RNW as **DEPRECATED** — "we will not be staying with React Native Web... this is a web-first game." Evidence of an earlier cross-platform ambition that was dropped (no RNW deps remain in `package.json`, so the removal is complete).

6. **Naming drift (unresolved) [Observed].** Three names coexist: dir `BlackjackVictory`, `package.json` `temp_app`, `partykit.json` `kintsugiblackjack`. The scaffold identity was never cleaned up.

---

## Section 7: README History

> **[Gap]** No `git log --follow`. **Finding [Observed]:** `README.md` (stamped 2026-05-27, the scaffold date) is still the **unmodified stock "React + TypeScript + Vite" template**. It has *never been written for this project*. The real onboarding/"README" function is served entirely by `AGENTS.md` (project orientation), `KintsugiwithMorty_GDD.md` (design), and `docs/Game_Systems_Reference.md` (implementation reality). This is a notable inversion: rich agent-facing docs, zero human-facing README.

---

## Section 8: Package.json History (Dependency Evolution)

> **[Gap]** No `git log --follow -- package.json`. `package.json` last modified 2026-05-28 12:04 (one day after scaffold), suggesting the dependency set was established very early and has been **stable since** — consistent with the lean 5-runtime-dep manifest. No database driver, auth lib, test runner, analytics SDK, or state-management lib was ever added; all later features (theme layer, audio engine, admin tools, multiplayer) were built on the original React+PartyKit foundation with **zero new runtime dependencies**.

```
Current dependencies:
  partykit ^0.0.115   partyserver ^0.5.6   partysocket ^1.1.19
  react ^18.3.1       react-dom ^18.3.1
devDependencies: typescript ~5.6.2, vite ^5.4.10, @vitejs/plugin-react ^4.3.3,
  eslint ^9.13.0 (+ react-hooks, react-refresh plugins), typescript-eslint ^8.11.0,
  @types/react(-dom), globals ^15.11.0, @eslint/js ^9.13.0
```

---

## Focus Topics (per export request)

### A) Networking Functions — `src/party/server.ts` (84 lines, the entire backend)
[Observed] A single `VictoryRaceServer implements PartyServer`. Design (ADR 0002): **ephemeral, server-authoritative "Victory Race" multiplayer**.
- **State:** `scores: Record<connId, PlayerScore>` (playerName, score, stage, isDead, isRunComplete, isMobile) held in room memory; `lastActiveRoom` tracked on a special `global-lobby` room.
- **Message protocol (string JSON):**
  - `updateScore` → stores a player's score, then `checkAndBroadcast()`.
  - `broadcastEvents` → relays a combat-event feed to all peers (`networkEventsFeed`) — the live multiplayer combat ticker.
  - `leave` / `onClose` → if the room is now empty, **wipe all scores** (the ephemerality mechanism).
  - `global-lobby` special case → `activeGame`/`roomId` matchmaking pointer so newcomers find the live race.
- **Server-authoritative conclusion [Observed]:** `checkAndBroadcast()` computes `allFinished = every player isDead || isRunComplete`; when true it broadcasts `raceConcluded` (final standings) instead of a `sync`. The *server* decides when the race is over, not any client.
- **Known limits (ADR 0002 + backlog):** no persistence (scores lost on empty room); "Multiplayer Pressure/Sabotage" from the GDD is unimplemented — only score broadcast + leaderboard + event feed exist. Messages are trusted (`JSON.parse`, no validation/auth) → see Security gap.

### B) Dashboards / Admin & Operational Tooling
[Observed] Two tiers of tooling, all **unauthenticated**:

**In-app admin (`AdminDashboard.tsx`, tabbed):**
- **Audio mixer** (`AdminAudioPanel.tsx`, ADR 0010) — maps Zen instrument samples to game audio categories (perfectSeam, bustShatter, masterpiece…), `localStorage`-synced; reached via `?admin=audio`.
- **Koan editor** (`AdminKoanPanel.tsx`) — live-edits the `KoanEngine` koan pool.

**Standalone analyst dashboards (`public/*.html`, the 2026-06-06 wave):**
| File | Purpose |
|---|---|
| `admin.html` | "KintsugiBlackJack — Admin Dashboard" hub |
| `admin-balance.html` | Balance Heatmap — design-time balance visualization |
| `admin-calculator.html` | Damage/"Repair" Calculator — models per-technique scaling incl. proficiency Lv 1–8 (ADR 0012) |
| `admin-disciplines.html` | Discipline Comparator — compares starting loadouts/classes |
| `admin-vessels.html` | Vessel (enemy) Catalogue — all 25 enemies |
| `sandbox-backgrounds.html` | Living-background tuning sandbox (image-anchored model, "Stage 5" preset, debug overlay) |
| `sandbox-cross-section.html` | Seam cross-section progress-indicator sandbox |

These are **design/balance instrumentation**, not runtime ops monitoring — the project's "analytics" is offline game-balance inspection.

### C) File Organization & Agent Tooling
[Observed] A deliberate **multi-agent, single-source-of-truth** layout: `AGENTS.md` is canonical; `CLAUDE.md` and `.gemini` defer to it. The `/ship` end-of-sprint procedure lives once in `.agents/ship-procedure.md`, with `.claude/commands/ship.md` and `.gemini/skills/ship/SKILL.md` as thin wrappers. Docs are stratified by role: **GDD** (intent) vs **Game_Systems_Reference** (built reality, with explicit GDD-deviation tracking) vs **backlog.md** (work queue + changelog) vs **ADRs** (decisions). This is unusually disciplined process scaffolding for a solo creative experiment.

### D) Interviewing Support — talking points for a process interview
This export is intended to feed an interview about Brett's build process. Highest-signal threads to probe:
1. **"How far can agentic development go?"** — the OG tag states the explicit thesis: the game is an *experiment in agentic development*. The repo is as much a process artifact as a product.
2. **Docs-first, git-absent.** Brett invests heavily in ADRs/GDD/backlog/AGENTS.md but runs **no version control, no tests, no CI** — testing is manual on the live server by deliberate choice. Worth probing: why is the decision record so rigorous while the safety net (VCS/tests) is absent? Is the ADR+backlog log a *substitute* for git?
3. **Reskin-as-pivot.** The Kintsugi pivot was executed as a reversible runtime theme layer preserving the original mode — a notable risk-management instinct (change creative direction without burning the prior work).
4. **Documented reversals.** ADR 0001→0006 (mobile strategy) and the RNW deprecation show Brett *documents* direction changes rather than silently overwriting — a strong interview artifact for "how do you handle being wrong?"
5. **Tooling-before-content.** Admin/analyst dashboards and tuning sandboxes appear *before* most content is implemented (5/54 items, 4/45 upgrades). Brett builds instruments to reason about balance early, then fills content — worth contrasting with the content-gap reality.

---

## Section 9: Project Narrative (Agent's Interpretation)

**[Observed]** KintsugiBlackjack is a solo-built **roguelike card battler** in which Blackjack hand-building is the combat engine, deployed entirely on PartyKit (one host for both static frontend and a ~84-line WebSocket backend). Its OpenGraph copy states the real purpose plainly: *"an experiment in game design and agentic development... how far can this go?"* — this is a vehicle for testing AI-agent-driven development as much as it is a game. The audience is effectively the builder himself (and observers of the experiment); there is no auth, no accounts, no persistence, and the only "users" are ephemeral multiplayer-race participants.

**[Inferred]** The evolution, read through ADRs + the `backlog.md` changelog (the de-facto commit log), runs in three arcs over ~two weeks (late May–early June 2026). **Arc 1 (≈05-27→05-31): the mechanical core** — Vite scaffold, pure-functional game engine (`RunEngine`/`CombatEngine`/`ModifierEngine`), the 25-enemy hook system, ephemeral PartyKit multiplayer (ADR 0002), and an early mobile-layout decision (0001) that was *reversed days later* (0006). **Arc 2 (≈05-31→06-03): the Kintsugi pivot** — the project reframes itself as "Kintsugi with Morty," a Zen pottery-repair apprenticeship, implemented as a reversible runtime theme layer (ADR 0007) plus living-background cinemagraph, apprenticeship flow, and a singleton audio engine. **Arc 3 (≈06-03→06-06): systems depth + instrumentation** — build slots/active techniques (0011), core-action mastery & refinement rewards (0012), the event system, and a wave of admin/analyst dashboards and tuning sandboxes for balancing.

**[Inferred]** The visible lifecycle phases are: *scaffold → prototype → architectural hardening (ADR discipline) → creative pivot → systems depth → operational/analytical tooling.* A clear phase-transition signal is the **tooling wave of 2026-06-06**: after the engine and reskin stabilized, Brett built balance heatmaps, a damage calculator, and discipline/vessel catalogues — i.e. he moved from "make the game work" to "reason about whether the game is *balanced*," the hallmark of crossing from prototype into product-tuning. The reskin pivot (preserving the old mode behind a toggle) and the documented mobile-strategy reversal both signal a builder who treats direction changes as first-class, recorded decisions.

**[Gap]** What is conspicuously missing or late: (1) **all of version control** — there is no git history at all, which for a process-research subject is the single largest evidence hole; (2) **persistence and auth** — deliberately deferred to tech-debt (ADR 0002), so all multiplayer results are ephemeral; (3) **automated testing and CI** — explicitly rejected in favor of manual live-server testing; (4) **security hardening** — the WebSocket server trusts all client input; (5) **a human-facing README** — never written, while agent-facing docs are extensive. And the content itself substantially trails the GDD (5/54 items, 4/45 upgrades, 0/6 elites, stage modifiers hardcoded to 1.0) — the *systems* are built out far ahead of the *content* that would fill them. The throughline: this is a process-rich, instrumentation-heavy, deliberately-ephemeral creative experiment whose documentation rigor (ADRs, GDD, backlog) stands in sharp contrast to its absent engineering safety net (no VCS, tests, or CI).

---

## Companion Export Note

The source prompt requests exports for **two** repositories: **Submission Cockpit** and this one (**KintsugiBlackjack**). This run was scoped (per the user's goal) to **KintsugiBlackjack only**, and this is its `_research_export.md`. The companion **Submission Cockpit** repo *does* exist on this machine at **`/home/brett/career`** (confirmed; MCP logs reference `submission-cockpit`) but its export was not produced here. To complete the pair, re-run the satellite prompt against `/home/brett/career` to generate that repo's `_research_export.md`.

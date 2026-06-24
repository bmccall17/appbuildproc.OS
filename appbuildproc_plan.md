# Epic: Reconstruct Application-Building Process (Brett Build OS)

## Goal Description

Conduct an evidence-based investigation across a curated collection of your software repositories to identify how you instinctively move from an initial idea to a functioning, deployed, and evolving application. The outcome is the **AppBuildProcOS** — a defensible, evidence-backed model of your real process that is explainable, teachable, and usable by both humans and AI agents without sacrificing the generative exploration that makes your work strong.

this file: \\wsl.localhost\Ubuntu\home\bam\academy\playbook\applicationbuildingprocess\appbuildproc_plan.md

---

## Confirmed Research Corpus

> [!NOTE]
> Corpus finalized per user direction. Ghost Job Detector, thirtysix, YESYESNO Bot, and sidexside are **excluded** — they are prototypes or single-instruction sets, not rich sources of process evidence.

### Primary Research Projects (deepest process archaeology)

| # | Project | Location | Research Value |
|---|---------|----------|----------------|
| 1 | **agent828** | `/home/bam/projects/agent828` | Richest ADR trail. Intake → scheduling → CRM → email → persistence → deployment → security → analytics → admin review. Full lifecycle. |
| 2 | **repOptics** | `/home/bam/projects/repOptics` | The product *about* project operations. Evolution from scanner → reports → playbooks → research → repository intelligence reveals meta-awareness of process. |
| 3 | **AVLmc** | `/home/bam/projects/AVLmc` | **Control project.** Your strongest, most efficient build. Next.js + Supabase + Vercel. Event discovery, Spotify integration, email auth, personalization, analytics, admin, DB migration. Compressed timeline = distilled instincts. |
| 4 | **morethanone** | `/home/bam/projects/morethanone` | Ranked-choice group decision tool. v0.0.11 across 11 releases. Full host-to-player loop, realtime (Supabase), animated reveals, admin suite, analytics. Shows a product taken to operational maturity. |

### Secondary Research Projects (valuable partial evidence)

| # | Project | Location | Research Value |
|---|---------|----------|----------------|
| 5 | **TarotTALKS** | `/home/bam/projects/TarotTALKS` | Public presentation, deployment, visual identity, hero imagery, social previews — the moment a working app becomes something intended to be *shared*. |
| 6 | **fd_demo** (Forbidden Desert XR) | `/home/bam/projects/fd_demo` | Cross-platform XR multiplayer tabletop. React Three Fiber + PartyKit. Reveals how you handle rapid prototyping → XR → multiplayer infrastructure → game polish. Rich CHANGELOG. |
| 7 | **ids** | `/home/bam/projects/ids` | Multiplayer flock-based strategy game. Three.js + PartyKit. Server-authoritative networking, generative audio, VR input. Shows concept → prototype → networked product pipeline for games. |
| 8 | **bmccall17.github.io** (darketype) | `/home/bam/projects/bmccall17.github.io` | Your portfolio/weblog. GitHub Pages. Reveals meta-process: how you present, publish, and reflect on your own work. Includes orchestrator/ship workflows that are themselves process artifacts. |

### Satellite Projects (local-agent export required)

| # | Project | Location | Research Value |
|---|---------|----------|----------------|
| 9 | **Submission Cockpit** | *Other machine — `/career`* | **Separate from agent828.** Job submission workflow/automation tool. Interesting for understanding workflow tooling, local data management, and human-in-the-loop agent behavior. |
| 10 | **KintsugiBlackjack** | *Other machine* | Additional contrast/comparison project on a different machine. |

> [!IMPORTANT]
> **For Submission Cockpit and KintsugiBlackjack**: Since these live on another machine, I will provide you with a structured prompt you can give to the local agent on that machine. The local agent will produce a standardized research export that we can ingest into this analysis.

---

## Deliverable Map

Each numbered deliverable maps to the `researchinstructions.md` requirements:

| # | Deliverable | Cycle | File |
|---|-------------|-------|------|
| D1 | Research Method & Evidence Standard | Cycle 1 | `methodology.md` |
| D2 | Repository Evidence Index | Cycle 2 | `repos/<name>/evidence_index.md` |
| D3 | Project Development Dossier | Cycle 2 | `repos/<name>/development_dossier.md` |
| D4 | Normalized Timeline | Cycle 2 | `repos/<name>/normalized_timeline.md` |
| D5 | Cross-Project Pattern Analysis | Cycle 3 | `cross_project_patterns.md` |
| D6 | Transition Map | Cycle 3 | `transition_map.md` |
| D7 | Variation & Exception Analysis | Cycle 3 | `variation_and_exceptions.md` |
| D8 | Chaos & Rework Analysis | Cycle 3 | `chaos_and_rework.md` |
| D9 | Brett Build OS (human-readable) | Cycle 4 | `brett_build_os.md` |
| D10 | Agent-Readable Specification | Cycle 4 | `brett_build_os_agent.md` (Markdown) |
| D11 | Presentation | Cycle 5 | `presentation.md` |

All deliverables will be created under: `/home/bam/academy/playbook/applicationbuildingprocess/research/`

---

## Cycle PRDs

### Cycle 1: Foundation & Methodology

**Objective:** Establish research ground rules, verify corpus boundaries, and produce the local-agent export prompt for satellite repos.

**Deliverables:**
- **`methodology.md`** (D1): How repositories are inspected, how dates are established (git log, blame, ADRs, package.json diffs), how conflicting evidence is handled, and how confidence is assigned (Observed / Inferred / Recommended).
- **`corpus_index.md`**: Final verified corpus with repo paths, creation dates, tech stacks, deployment targets, and accessibility notes.
- **`satellite_export_prompt.md`**: A structured prompt that the user can hand to local agents on other machines to produce standardized research exports for Submission Cockpit and KintsugiBlackjack.

**Exit Criteria:** Methodology approved. Corpus verified. Satellite prompt ready.

---

### Cycle 2: Deep Dive Data Extraction

**Objective:** Iterate through every repo in the corpus to extract structured chronological evidence. This is the heavy archaeology cycle.

**Per-repo deliverables (for all 8 locally accessible repos):**
- **`repos/<name>/evidence_index.md`** (D2): Structured index of significant evidence — commit hashes, file paths, dates, and a short explanation of why each item matters.
- **`repos/<name>/development_dossier.md`** (D3): Case study covering original problem, earliest prototype, milestones, deployment history, architectural decisions, admin/ops evolution, testing evolution, presentation/distribution evolution, direction changes, current state, and evidence gaps.
- **`repos/<name>/normalized_timeline.md`** (D4): Timeline mapped to standard milestone categories (idea → prototype → repo creation → deployment → persistence → auth → external services → ADRs → admin tooling → testing → social/presentation → feedback → scaling → documentation) so projects can be compared directly.

**Repo execution order** (richest evidence first):
1. agent828
2. repOptics
3. AVLmc (control)
4. morethanone
5. TarotTALKS
6. fd_demo
7. ids
8. bmccall17.github.io (darketype)

**Satellite repos** (Submission Cockpit, KintsugiBlackjack): Ingested from the local-agent export produced via the Cycle 1 prompt.

**Exit Criteria:** All 8+ repos have evidence indexes, dossiers, and normalized timelines. Satellite data ingested.

---

### Cycle 3: Pattern Analysis & Synthesis

**Objective:** Analyze the extracted data cross-project to find recurring behaviors, transition signals, productive chaos, and avoidable rework.

**Deliverables:**
- **`cross_project_patterns.md`** (D5): Recurring phases, sequences, loops, decisions, transition triggers, artifacts, tech choices, operational problems, sources of rework, late-arriving concerns, and improvements across successive projects. Includes frequency and confidence.
- **`transition_map.md`** (D6): For every major phase transition → previous state → triggering condition → evidence → new work that began → deliberate vs. reactive vs. ambiguous → future early-warning signals.
- **`variation_and_exceptions.md`** (D7): Projects that broke the pattern and why (product type, audience, collaboration model, infra, realtime, mobile vs web, self-built vs managed).
- **`chaos_and_rework.md`** (D8): Distinguishing generative exploration from avoidable confusion. Identifying where missing structure caused unnecessary rework vs. where nonlinearity was productive.

**Exit Criteria:** Synthesis complete. User review checkpoint — does the synthesis feel true to how you actually work?

---

### Cycle 4: Framework Production (The Brett Build OS)

**Objective:** Convert the synthesis into the final reusable framework in two formats.

**Deliverables:**
- **`brett_build_os.md`** (D9): The human-readable operating system.
  - Named phases/states (not forced from a template — emerged from evidence)
  - Purpose of each phase
  - Entry signals
  - Exit criteria
  - Required vs. optional artifacts
  - Key questions to answer
  - Common risks
  - Decisions that should stay reversible vs. require explicit docs
  - Signals that the project should switch gears
  - Suggested human and agent responsibilities
  - **Lightweight version** (solo weekend project) and **full version** (operated product)

- **`brett_build_os_agent.md`** (D10): Agent-readable specification in **Markdown** format. Structured so an AI agent can:
  - Determine the likely current phase of a project
  - Explain the evidence for that classification
  - Identify missing artifacts or unresolved decisions
  - Recommend the next appropriate kind of work
  - Avoid prematurely adding infrastructure
  - Recognize when a prototype has become an operated product
  - Recognize when admin visibility, docs, testing, or distribution work is warranted

**Exit Criteria:** Both documents produced and internally consistent with the Cycle 3 synthesis.

---

### Cycle 5: Storytelling & Final Presentation

**Objective:** Package the findings into a narrative that can be shared with collaborators, students, or prospective employers.

**Deliverables:**
- **`presentation.md`** (D11): A slide-by-slide narrative covering:
  - How the investigation was performed
  - What the projects reveal
  - The recurring development pattern
  - The role of intuition
  - Productive vs. unproductive chaos
  - Important transition signals
  - How the Brett Build OS improves future work
  - How another person or agent can participate in the process

**Exit Criteria:** Presentation tells a compelling, evidence-backed story. All 11 deliverables complete.

---

## Verification Plan

### Tool-assisted Verification
- `git log`, `git blame`, `git show`, and file timestamps used programmatically throughout Cycle 2 to ground all timelines in evidence.
- Cross-reference between normalized timelines and actual git history during Cycle 3.
- Definition of Done checklist from `researchinstructions.md` verified point-by-point in a final audit.

### User Review Checkpoints
- **End of Cycle 1**: Methodology approved before heavy data extraction.
- **End of Cycle 3**: Synthesis reviewed — does this feel like how you actually work, or is it an academic abstraction?
- **End of Cycle 4**: Brett Build OS reviewed for practical usability before the presentation is built on top of it.

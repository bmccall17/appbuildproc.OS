# Research Export — Submission Cockpit (`ai-job-search`)

> Produced for cross-project analysis of Brett's application-building process.
> Archaeological intent: dated evidence of how the project evolved, not a summary of today.
> Generated 2026-06-23.

---

## ⚠️ Reading this export: where the history actually lives

This repository is a **fork** of `MadsLorentzen/ai-job-search` (MIT, © 2026 Mads Lorentzen),
an upstream "AI job-search framework" for the Danish market. **Git is the wrong lens here.**
The committed history (14 commits, last 2026-06-07) captures the *upstream framework plus a few
of Brett's early tweaks*. The thing this export is about — the **Submission Cockpit** and its
sibling subsystems (`dashboard/`, `job_scraper/`, `sidedoor/`, `tests/`, the ADR log) — is
**almost entirely uncommitted** in the working tree (23 modified + 23 untracked paths at export
time). Brett operates this as a local-only, live-edit tool with "nowhere to commit" and a strict
"main only, commit only when asked" convention, so the durable dated record is **not** `git log`.

**The real timeline is reconstructed from three other sources, used throughout this export:**
1. **ADRs** (`devnotes/adr/0001…0007`) — self-dated decision records, 2026-06-07 → 2026-06-22.
2. **File mtimes** — the subsystem files (the 2026-06-04 17:02 bulk timestamp is the local
   checkout/clone moment; everything after it is genuine edit dates).
3. **Queue-archive retro snapshots** (`devnotes/queue-archive/`) — dated batch retros, 06-09 & 06-13.

Where this export cites a git commit it is labeled `[git]`; where it cites an ADR, mtime, or
archive snapshot it is labeled accordingly. **[Gap]** markers flag missing evidence a normal
Git-centric project would have.

---

## Section 1: Repository Identity

```
Project Name:    AI Job Search  /  "Submission Cockpit" (Brett's name for the dashboard subsystem)
Local Path:      /home/brett/career/ai-job-search
Remote URL:      origin    https://github.com/bmccall17/ai-job-search.git
                 upstream  https://github.com/MadsLorentzen/ai-job-search.git   (fork parent)
Creation Date:   2026-03-20 19:53:16 +0100  "Initial release: AI-powered job application framework"
                 (this is the UPSTREAM framework's first commit, inherited by the fork)
Latest Commit:   2026-06-07 07:31:06 -0400  "feat(cockpit): add Found Jobs leads view from scraper"
Total Commits:   14
Branch Count:    4  (master / origin/master / origin/HEAD / upstream/master — no feature branches)
Tag Count:       0
License:         MIT, © 2026 Mads Lorentzen (upstream author)
```

**[Observed]** The repo is a fork. The committed lineage belongs to the upstream Danish-market
framework; Brett's `origin` adds a thin layer of commits and then goes quiet at 2026-06-07 while
work continues uncommitted. **[Observed]** No tags, no release process, no feature branches —
consistent with the documented "main only, commit only when asked" solo-dev convention
(`devnotes/README.md`).

---

## Section 2: Tech Stack Snapshot

**There is no `package.json`, `requirements.txt`, `pyproject.toml`, or `setup.py`.** This is a
deliberately **zero-dependency Python-stdlib** project. Stack determined from source imports,
config files, and run scripts:

- **Languages / frameworks:**
  - **Python 3** (stdlib only) — the entire Submission Cockpit, scraper intake, and sidedoor.
    The web app is built on `http.server.ThreadingHTTPServer` + `BaseHTTPRequestHandler`
    (`dashboard/server.py`) — no Flask/FastAPI/Django.
  - **HTML/CSS/JS** — single-file front end `dashboard/index.html` (~69 KB, vanilla, no build step).
  - **LaTeX** (moderncv "banking" + a custom `cover.cls`) — the actual CV/cover-letter artifacts
    in `cv/` and `cover_letters/`, compiled with **lualatex** (CV) / **xelatex** (cover letters).
  - **TypeScript** — only in the inherited upstream Danish job-board CLIs under
    `.agents/skills/*/cli/` (the one place `package.json` files exist; not part of the Cockpit).
- **Persistence layer:** **flat files, no database.** Source of truth is
  `job_search_tracker.csv` (13-column tracker) + a per-role JSON archive
  (`documents/applications/.../cockpit.json`). Scraper state is `job_scraper/seen_jobs.json`;
  relationship state is `sidedoor/campaign_queue.json` + `_contacts/<company>.json`. Append-only
  `*.jsonl` inboxes feed intake.
- **Deployment target:** **none — local-only.** `dashboard/run.sh` launches
  `python3 dashboard/server.py` on `127.0.0.1:8765` and opens the Windows browser via `cmd.exe`
  (WSL). No Vercel/Render/Docker/CI deploy anywhere. **[Gap]** No deployment config of any kind.
- **Authentication:** **none.** Binds to loopback only; single local operator. **[Gap]** No auth
  libraries, sessions, or tokens (appropriate for a localhost personal tool).
- **Agent integration:** **MCP server** (`dashboard/mcp_server.py`) registered in `.mcp.json`
  under server name `submission-cockpit`, exposing the same `data_layer.py` to Claude/MCP agents
  (create_application, mark_submitted, package, compile, contacts, sidedoor logging, etc.).
- **External tooling shelled out to:** `pdfinfo` / `pdftotext` (Poppler) for PDF page-count &
  ATS-extraction checks; `lualatex`/`xelatex` for compile; `git`, `cmd.exe` (WSL bridge).
- **Testing:** Python **`unittest`** (stdlib), 4 files under `tests/` with `tests/fixtures/`.

**Key "dependencies" (there is no manifest; these are the significant stdlib modules in use):**
`http.server`, `json`, `csv`, `pathlib`, `subprocess`, `tempfile`, `re`, `datetime`,
`urllib.parse`, `hashlib`, `shutil`, `io`, `unittest`. **[Observed]** The conscious absence of a
dependency manifest is itself the design statement: zero-install, runs anywhere Python 3 + a TeX
toolchain + Poppler exist.

---

## Section 3: Chronological Git Archaeology

### First 20 commits (birth of the project — note: this is the *upstream framework's* birth)

```
2026-03-20 19:53:16 +0100 | Initial release: AI-powered job application framework
2026-04-24 19:34:46 +0200 | feat(apply): add mandatory PDF compile-and-inspect step and relevance-weighted cutting
2026-04-24 19:36:45 +0200 | docs: document PDF verification loop and relevance-weighted cutting
2026-04-24 20:12:39 +0200 | fix(apply): restore QC coverage dropped during earlier token-efficiency refactor
2026-04-24 20:14:59 +0200 | feat(apply): restore 02-behavioral-profile.md to reviewer reading list
2026-04-25 13:56:41 +0200 | docs(README): soften "token-efficient" bullet to match reality
2026-04-25 13:57:45 +0200 | Merge pull request #7 from MadsLorentzen/feat/compile-verify-and-relevance-weighted-cutting
2026-04-28 20:46:32 +0200 | fix(cv): override moderncv banking colors and remove inter-item \vspace
2026-04-28 21:03:02 +0200 | docs(skill): document moderncv color overrides and itemize spacing rule
2026-04-28 21:03:20 +0200 | docs(setup): fix stale pdflatex references to lualatex
2026-04-28 21:08:20 +0200 | Merge pull request #8 from MadsLorentzen/feat/moderncv-color-overrides-and-itemize-cleanup
2026-04-29 09:30:08 +0200 | feat: add /setup_docs, /reset, /expand commands and /upskill skill
2026-04-29 09:57:33 +0200 | refactor: fold /setup_docs into /setup as third onboarding path (#9)
2026-06-07 07:31:06 -0400 | feat(cockpit): add Found Jobs leads view from scraper
```

(Only 14 commits exist total, so "first 20" and "last 20" overlap completely.)

### Last 20 commits (current frontier)

```
2026-06-07 07:31:06 -0400 | feat(cockpit): add Found Jobs leads view from scraper
2026-04-29 09:57:33 +0200 | refactor: fold /setup_docs into /setup as third onboarding path (#9)
2026-04-29 09:30:08 +0200 | feat: add /setup_docs, /reset, /expand commands and /upskill skill
2026-04-28 21:08:20 +0200 | Merge pull request #8 …moderncv-color-overrides-and-itemize-cleanup
2026-04-28 21:03:20 +0200 | docs(setup): fix stale pdflatex references to lualatex
2026-04-28 21:03:02 +0200 | docs(skill): document moderncv color overrides and itemize spacing rule
2026-04-28 20:46:32 +0200 | fix(cv): override moderncv banking colors and remove inter-item \vspace
2026-04-25 13:57:45 +0200 | Merge pull request #7 …compile-verify-and-relevance-weighted-cutting
2026-04-25 13:56:41 +0200 | docs(README): soften "token-efficient" bullet to match reality
2026-04-24 20:14:59 +0200 | feat(apply): restore 02-behavioral-profile.md to reviewer reading list
2026-04-24 20:12:39 +0200 | fix(apply): restore QC coverage dropped during earlier token-efficiency refactor
2026-04-24 19:36:45 +0200 | docs: document PDF verification loop and relevance-weighted cutting
2026-04-24 19:34:46 +0200 | feat(apply): add mandatory PDF compile-and-inspect step and relevance-weighted cutting
2026-03-20 19:53:16 +0100 | Initial release: AI-powered job application framework
```

### Lifecycle-keyword commit scan

Only a handful of keywords matched (most matches are incidental substrings of the same 14 commits).
The substantive signal:

- **`release` / `init`** → `2026-03-20  Initial release` (the only genuine init/release event, upstream).
- **`refactor`** → `2026-04-29 fold /setup_docs into /setup`; `2026-04-24 restore QC coverage dropped
  during earlier token-efficiency refactor` (a *reversal* — see Section 6).
- **`cockpit` / `scraper` / `ADR`** → all resolve to the single `2026-06-07 feat(cockpit): add Found
  Jobs leads view from scraper` commit. **This is the only commit that touches the Cockpit at all.**
- **`deploy`, `auth`(genuine), `database`/`db`, `migration`, `docker`, `security`, `ci`(genuine),
  `analytics`, `monitor`, `MVP`, `prototype`, `launch`** → **No commits.**

**[Observed]** The keyword scan confirms the central finding: the Cockpit's entire lifecycle is
invisible to Git. One commit ("Found Jobs leads view") is the lone committed trace of a subsystem
that the ADRs show went through seven dated architectural decisions.

---

## Section 4: File Structure Snapshot

### Top-level

```
./.agents              # inherited upstream Danish job-board search CLIs (TS) + skills
./.claude              # Claude Code config: agents/, commands/, skills/  (the workflow engine)
./.codex               # Codex agent configs (parallel agent surface)
./.mcp.json            # registers the submission-cockpit MCP server
./AGENTS.md            # agent-facing operating contract
./CHEATSHEET.md        # one-page operator quick-ref
./CLAUDE.md            # the master project/role instructions (candidate profile + workflow + QC)
./LEARNINGS.md         # 167 KB running log of session learnings (largest single doc)
./LICENSE              # MIT (upstream)
./PUBLIC_EVIDENCE_LINKS.md
./README.md            # upstream-facing framework readme
./REPOPTICS_STATS.md   # single source of truth for repOptics figures
./SETUP.md
./avlmc_TECHNICAL-RIGOR-REPORT.md
./cover_letters        # LaTeX cover letters (custom cover.cls) + OpenFonts/
./cv                   # LaTeX CV variants (moderncv banking)
./dashboard            # *** THE SUBMISSION COCKPIT ***
./devnotes             # planning / ADRs / runbooks / queue archive
./documents            # applications/ (per-role archive), cv/, diplomas/, references/, linkedin/
./inbox
./interview_prep       # interview support materials
./job_scraper          # job-finding lane (Cowork drops -> intake.py -> seen_jobs.json)
./job_search_common.py # shared definitions backbone (fit normalization, reconcile) — ADR 0006
./job_search_tracker.csv  # 13-column tracker — the durable system of record
./salary_lookup.py     # inherited salary benchmarking helper
./sidedoor             # relationship-development lane (sibling of job_scraper)
./tests                # unittest suite + fixtures
./tools
./upskill
./Screenshot 2026-06-22 190524.png   # cockpit screenshot (UI evidence)
./claude_animation.gif
```

### Directories two levels deep (noise excluded)

```
./.agents/skills
./.claude/{agents,commands,skills}
./.codex/agents
./cover_letters/OpenFonts
./dashboard            (server.py, mcp_server.py, data_layer.py, index.html, profile_fields.json, run.sh)
./devnotes/{adr,queue-archive}
./documents/{applications,cv,diplomas,linkedin,references}
./job_scraper
./sidedoor
./tests/fixtures
./tools
./upskill
```

**[Observed]** Clean separation of concerns: production workspace (root + `dashboard/`, `cv/`,
`cover_letters/`, `documents/`) vs. meta layer (`devnotes/`), enforced by an explicit documented
convention in `devnotes/README.md`. **[Observed]** Three parallel "agent surfaces" coexist
(`.claude/`, `.codex/`, `.agents/`), and two cooperating Cowork lanes (`job_scraper/` finds jobs,
`sidedoor/` develops relationships) share the same data layer.

---

## Section 5: Evidence of Key Lifecycle Milestones

| Milestone | Date | Evidence | Confidence |
|-----------|------|----------|------------|
| **Idea / Problem Recognition** | 2026-06-07 | ADR 0001 states the problem in its own words: scraper leads "invisible to the operator… no at-a-glance answer to *what has the scraper found that I haven't acted on?*"; ties it to "Brett is a visual operator." | High |
| **First Working Prototype** | 2026-06-05 21:56 | `dashboard/run.sh` mtime — the earliest Cockpit artifact; launches `server.py` on :8765. Cockpit work began ~06-05. | Medium (mtime) |
| **Repository Creation (fork base)** | 2026-03-20 | `[git]` first commit "Initial release" (upstream framework). Local checkout bulk-stamped 2026-06-04 17:02. | High |
| **First Deployment** | — | **No evidence found.** Local-only; `run.sh` binds loopback. No vercel/render/docker/CI. Deployment is "run the script." | High (absence confirmed) |
| **Persistence / Database** | 2026-06-04→07 | No DB. Flat-file persistence: `job_search_tracker.csv` (13-col), `job_scraper/seen_jobs.json`, per-role `cockpit.json`. Reconcile-on-submit added in ADR 0002 (2026-06-07). | High |
| **Authentication** | — | **No evidence found** (by design — localhost single-operator tool). | High (absence confirmed) |
| **External API Integration** | 2026-06-06 | `.mcp.json` (mtime 2026-06-06 09:00) registers the `submission-cockpit` MCP server. Job-board APIs (Greenhouse/Ashby) are reached by the Cowork/scraper lane, not by committed SDKs. Shells out to `pdfinfo`, `lualatex`. | High |
| **ADRs / Decision Docs** | 2026-06-07 | `devnotes/adr/0001-scraper-leads-in-cockpit.md` is the first ADR. Series runs 0001→0007, 06-07 → 06-22. Plus `BACKLOG.md`, `QueueRunbook.md`, `SubmissionCockpit.md`. | High |
| **Admin / Operational Tooling** | 2026-06-05→22 | The Cockpit *is* the operational tool: gauge cluster, validation, auto-package, Reveal-in-Explorer, Compile, Quick-Fill, Mark-submitted (`server.py`/`data_layer.py`/`index.html`). MCP server mirrors it for agents. | High |
| **Testing** | 2026-06-21 16:09 | `tests/test_fit.py`, `test_matching.py`, `test_overview.py`, `test_reconcile.py` + `tests/fixtures/` (unittest). Arrived **late** — ~2 weeks after the Cockpit, alongside the ADR 0006 "shared definitions backbone" refactor that needed a parity guard. | High |
| **Analytics / Monitoring / Logging** | partial | No app telemetry on the Cockpit itself. `LEARNINGS.md` (167 KB) is a hand-kept session log; `job_scraper/scrape_log.jsonl` logs scraper runs. The *candidate's* product work references PostHog/Sentry, but the Cockpit has none. | Medium |
| **Social / Public Presentation** | 2026-03-20 | Upstream README has a centered hero GIF (`claude_animation.gif`); it's a GitHub-readme presentation, not a deployed landing page / OG tags. | Medium |
| **Security Hardening** | — | **No evidence found.** No rate limiting / CORS / CSP / helmet. Loopback-only binding is the entire threat model. | High (absence confirmed) |
| **CI/CD** | — | **No evidence found.** No `.github/workflows`, no pipeline. | High (absence confirmed) |
| **Documentation** | 2026-03-20 → 2026-06-22 | Heaviest dimension. Upstream README/SETUP (03-20), then Brett's CLAUDE.md, CHEATSHEET.md, AGENTS.md, devnotes/ runbooks, and the 7-entry ADR log. Docs precede and outweigh code commits. | High |

---

## Section 6: Decision Reversals and Direction Changes

The ADR log is itself a chain of reversals — unusually legible for a personal project:

1. **Token-efficiency refactor, partially reversed (2026-04-24)** `[git]`
   `fix(apply): restore QC coverage dropped during earlier token-efficiency refactor` and
   `restore 02-behavioral-profile.md to reviewer reading list`. An earlier optimization had
   silently dropped quality-control coverage from the apply pipeline; two commits walk it back.
   Followed by `docs(README): soften "token-efficient" bullet to match reality` (2026-04-25) — the
   marketing claim was corrected to match the rolled-back behavior.

2. **The "two sources of truth" reconcile saga (ADR 0001 → 0002 → 0003, 06-07→06-08).**
   ADR 0001 added the Found Jobs view and *deliberately left a drift unfixed* (already-applied jobs
   stayed `open`). ADR 0002 (same day, 06-07) fixed exactly that open consequence: `mark_submitted`
   now writes status back to the scraper so leads self-heal `open→tracked`. ADR 0003 (06-08) then
   reversed the *UI* decision — tracked/ruled-out leads were no longer rendered as collapsed
   `<details>` inside Found Jobs, because "collapsed ≠ hidden from Ctrl+F"; each lead now lives in
   exactly one home. Three ADRs in two days iterating the same surface.

3. **APPLICATION_QUEUE.md introduced then retired (ADR 0004 → 0005, 06-09→06-13).** The clearest
   reversal. ADR 0004 (06-09) formalized `APPLICATION_QUEUE.md` as a per-batch worksheet mirrored
   from the tracker. Four days later ADR 0005 (06-13) **retired the file entirely**, declaring the
   cockpit Found Jobs panel the live queue — because the markdown mirror "kept drifting… structural,
   not discipline" (its columns duplicated already-live cockpit data). The file's last two states
   are preserved in `devnotes/queue-archive/` (06-09, 06-13 snapshots); the 06-13 snapshot is
   explicitly tagged "last `APPLICATION_QUEUE`-named file."

4. **Divergent reconcilers unified (ADR 0006, 06-21).** Two systems had independently implemented
   "is this the same role?" and "how good a fit?" and **disagreed** (`slugify("Jerry.ai")` ≠
   `slugify("Jerry")` surfaced an already-applied role as open — a duplicate-application risk).
   Resolved by extracting a shared `job_search_common.py` backbone, with `tests/` added as a parity
   guard so ranking "can't silently drift."

5. **Frozen submission-age pill replaced (ADR 0007, 06-22).** The single In-Play date pill (bound to
   `age_days`, frozen at submission) was replaced by two activity-driven pills (last-touch +
   next-step), because the old one "looked stale and said nothing about what's owed next."

**Abandoned/quarantined artifacts:** `APPLICATION_QUEUE.md` (root) removed → archived;
`job_scraper/*.archive.jsonl` and `COWORK-feedback-archive.md` are explicitly quarantined rollups
of superseded inbox data.

---

## Section 7: README History

```
2026-04-29 09:57:33 +0200 | refactor: fold /setup_docs into /setup as third onboarding path (#9)
2026-04-29 09:30:08 +0200 | feat: add /setup_docs, /reset, /expand commands and /upskill skill
2026-04-25 13:56:41 +0200 | docs(README): soften "token-efficient" bullet to match reality
2026-04-24 19:36:45 +0200 | docs: document PDF verification loop and relevance-weighted cutting
2026-03-20 19:53:16 +0100 | Initial release: AI-powered job application framework
```

**[Observed]** The committed README is the **upstream framework's** README and stops evolving on
2026-04-29 — *before* the Cockpit existed. It still describes the project as a Danish-market,
fork-and-fill-in Claude Code framework with a `/setup → /scrape → /apply` flow and an ASCII
pipeline diagram. **[Gap]** It contains **no mention of the Submission Cockpit, the MCP server, the
ADR process, or the sidedoor lane** — the entire system this export documents. The current,
accurate "README" of the live system is effectively `CLAUDE.md` + `devnotes/SubmissionCockpit.md` +
`CHEATSHEET.md`, none of which are the committed `README.md`.

---

## Section 8: Package.json History (Dependency Evolution)

**There is no `package.json` for this project** (the only `package.json` files are inside the
inherited upstream Danish job-board CLIs under `.agents/skills/*/cli/`, which are not part of the
Cockpit). There is also no `requirements.txt`, `pyproject.toml`, or `setup.py`.

```
git log --follow --format="%ai | %s" -- package.json   →   (no project-level package.json)
```

**[Observed]** Dependency evolution is therefore *null by design*: the Cockpit, scraper, and
sidedoor are pure Python stdlib, so there is no manifest to evolve. The closest analog to a
"dependency surface" is the set of external binaries shelled out to (`lualatex`, `xelatex`,
`pdfinfo`/`pdftotext`, `git`, `cmd.exe`), and the MCP registration in `.mcp.json`. The zero-manifest
choice is a stable decision across the whole observed window — there is no point at which a framework
or DB was added and later swapped.

---

## Section 9: Project Narrative (Agent's Interpretation)

**[Observed]** This repository is two projects wearing one Git history. The committed layer is an
upstream, MIT-licensed "AI job-search framework" by Mads Lorentzen — a Danish-market, fork-and-fill
Claude Code workflow (`/setup → /scrape → /apply`) whose README, license, and 14 commits span
2026-03-20 to 2026-06-07. Brett forked it, used its drafter-reviewer apply pipeline and LaTeX CV
machinery, and made a few committed tweaks (PDF compile-verify loop, moderncv color overrides, the
`/setup`/`/reset`/`/expand` commands) through late April. **[Inferred]** At that point it was still
*someone else's framework* he was configuring.

**[Observed]** Around 2026-06-05 the project changes character and stops being a Git project. Brett
builds the **Submission Cockpit** — a zero-dependency, stdlib-Python local web app
(`http.server` + a single 69 KB `index.html`, no framework, no DB, no auth, loopback-only) that
reads the tracker CSV and a per-role JSON archive live and renders a "gauge cluster" plus a Found
Jobs queue, for a self-described **visual operator** who needs at-a-glance pipeline status. From
2026-06-07 to 2026-06-22 the subsystem goes through **seven dated ADRs** and grows two cooperating
Cowork lanes (`job_scraper/` to find jobs, `sidedoor/` to develop relationships), an MCP server that
re-exposes the same `data_layer.py` to agents, and — late, on 2026-06-21 — a `unittest` suite plus a
shared `job_search_common.py` backbone. **[Observed]** Almost none of this is committed; the
authoritative timeline is the ADRs, file mtimes, and queue-archive retros, not `git log`.

**[Observed]** The visible lifecycle phases are: (1) *inherited framework* (Mar–Apr, committed);
(2) *Cockpit prototype* (~Jun 5, run.sh + server); (3) *rapid iteration on truthfulness* (Jun 7–8,
ADRs 0001–0003 — making the leads view stop lying about what's already applied); (4) *process
consolidation* (Jun 9–13, ADRs 0004–0005 — a hand-maintained queue file introduced and then retired
in favor of the live panel); (5) *hardening/unification* (Jun 21–22, ADR 0006–0007 — a shared
definitions backbone with tests, and activity-aware UI). **[Inferred]** The recurring engine across
phases 3–5 is the same failure mode — *two sources of truth drifting* (tracker vs. scraper JSON vs.
a markdown mirror vs. two reconcilers) — and each ADR collapses one duplication back toward a single
self-healing source. The developer is visibly recognizing phase transitions in writing: ADR 0005
explicitly diagnoses drift as "structural, not discipline," which is the moment a hand-maintained
worksheet is retired in favor of a live view.

**[Gap]** What a conventional product would have and this does not: any deployment, CI/CD,
authentication, security hardening, telemetry on the tool itself, a dependency manifest, and a
README that describes the actual system (the committed README still documents the pre-Cockpit
framework). **[Inferred]** None of these are oversights so much as scope decisions for a single-user,
localhost, live-edit personal tool — the operative constraints are "nowhere to commit," "main only,"
and "edits go live on save." **[Observed]** Testing and a shared abstraction layer arrived only after
a concrete bug (a `slugify` mismatch that risked a duplicate application), which is the one place the
project clearly moved from "prototype" to "needs a guardrail" in response to a real incident. The
honest one-line summary: a heavily-documented, ADR-disciplined, **uncommitted** operational tool whose
engineering rigor lives almost entirely outside its version control.

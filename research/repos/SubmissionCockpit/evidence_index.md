# Submission Cockpit Evidence Index

Source export: `/home/bam/academy/playbook/applicationbuildingprocess/SubmissionCockpit_research_export.md`

## Evidence Basis

- **Observed:** Satellite export generated 2026-06-23.
- **Observed:** Export says Git is misleading because the repo is a fork of `MadsLorentzen/ai-job-search` and the meaningful Cockpit work is mostly uncommitted.
- **Observed:** The reliable chronology comes from ADRs, file mtimes, and queue archives.

## Significant Evidence

| Date | Evidence | Type | Why It Matters |
|---|---|---|---|
| 2026-03-20 | Upstream initial release of AI job-search framework | Export/git | Inherited base, not Cockpit birth. |
| 2026-04-24 | PDF compile/inspect and QC restoration commits | Export/git | Upstream/fork layer already values output verification. |
| 2026-06-04 | Local checkout bulk timestamp | Export/mtime | Lower-confidence local starting boundary. |
| 2026-06-05 | `dashboard/run.sh` earliest Cockpit artifact | Export/mtime | Cockpit prototype begins around this date. |
| 2026-06-06 | `.mcp.json` registers `submission-cockpit` MCP server | Export/mtime | Agent access is added early. |
| 2026-06-07 | ADR-0001 scraper leads in Cockpit | Export/ADR | Problem is invisible scraper leads for a visual operator. |
| 2026-06-07 | ADR-0002 reconcile mark-submitted to scraper status | Export/ADR | Two-source drift is addressed with self-healing writeback. |
| 2026-06-08 | ADR-0003 tracked/ruled-out leads no longer collapsed in Found Jobs | Export/ADR | UI truthfulness replaces collapsed-but-searchable ambiguity. |
| 2026-06-09 | ADR-0004 `APPLICATION_QUEUE.md` formalized | Export/ADR | Manual queue mirror introduced. |
| 2026-06-13 | ADR-0005 retires `APPLICATION_QUEUE.md` | Export/ADR | Manual queue mirror removed because drift was structural. |
| 2026-06-21 | ADR-0006 shared `job_search_common.py` and tests | Export/ADR | Duplicate matching bug drives shared abstraction and tests. |
| 2026-06-22 | ADR-0007 frozen age pill replaced by activity/next-step pills | Export/ADR | UI moves from stale status to owed-action signal. |

## Supporting Evidence

- Tech stack: Python stdlib `http.server`, single `dashboard/index.html`, flat files, LaTeX/Poppler, MCP server.
- Persistence: `job_search_tracker.csv`, per-role `cockpit.json`, scraper `seen_jobs.json`, sidedoor JSON.
- No deployment, auth, CI/CD, telemetry, or database by design.

## Evidence Gaps

- **Gap:** Main Cockpit work is uncommitted, so commit chronology is weak.
- **Gap:** File mtimes are weaker than commits.
- **Gap:** External job-board/Cowork context is summarized by export, not inspected directly.

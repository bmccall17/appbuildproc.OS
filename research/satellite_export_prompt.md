# Satellite Export Prompt and Ingestion Notes

## Current Status

The two satellite exports requested by `appbuildproc_plan.md` have already been supplied:

- `/home/bam/academy/playbook/applicationbuildingprocess/SubmissionCockpit_research_export.md`
- `/home/bam/academy/playbook/applicationbuildingprocess/BlackjackVictory_research_export.md`

These should be ingested as evidence for:

- **Submission Cockpit**
- **KintsugiBlackjack**

Both exports are acceptable for Cycle 2. No additional offsite-agent prompt is required unless the user wants a refreshed export.

## Ingestion Rules

Treat each export as a self-contained evidence packet from another machine. Preserve its method caveats:

- Submission Cockpit: Git history is misleading because the project is a fork and the meaningful Cockpit work is mostly uncommitted. Use ADRs, file mtimes, and queue archives as the main timeline.
- KintsugiBlackjack: no Git repository exists in the exported source. Use file mtimes, ADRs, backlog completed items, and in-file content evidence.

Do not convert weak dates into strong dates. If an export labels a date as mtime-based or inferred, keep that uncertainty in the dossier and normalized timeline.

## Prompt for Future Refresh

Use this prompt only if the satellite exports need to be regenerated.

```text
You are producing a research export for the AppBuildProcOS investigation. Your task is archaeological: extract dated evidence of how the project evolved, not a current product summary.

For the target repository, produce one markdown file named `_research_export.md` with these sections:

1. Repository identity
   - Project name
   - Local path
   - Remote URL, if Git exists
   - First commit or earliest available evidence
   - Latest commit or latest available evidence
   - Commit count, branch count, tag count, if Git exists
   - Explicit note if Git is absent or misleading

2. Tech stack snapshot
   - Language/framework
   - Persistence
   - Deployment target
   - Authentication
   - External services
   - Testing
   - Key dependencies or deliberate absence of dependencies

3. Chronological archaeology
   - First 20 commits and last 20 commits if Git exists
   - Lifecycle keyword commit scan if Git exists
   - If Git does not exist, reconstruct chronology from mtimes, ADRs, changelog, backlog, and in-file dates

4. File structure snapshot
   - Top-level files/directories
   - Key directories two levels deep, excluding dependency/build output

5. Key lifecycle milestones
   For each milestone, provide date, evidence, confidence, and gap notes:
   - idea/problem recognition
   - first working prototype
   - repository creation
   - first deployment
   - persistence/database
   - authentication
   - external APIs/services
   - ADRs/decision docs
   - admin/operational tooling
   - testing
   - analytics/monitoring/logging
   - social/public presentation
   - security hardening
   - CI/CD
   - documentation

6. Decision reversals and direction changes
   - Refactors
   - Rewrites
   - dependency swaps
   - abandoned artifacts
   - ADRs that reverse earlier decisions

7. README/history evidence
   - README commit history if Git exists
   - Otherwise identify whether README is project-specific, stale, stock scaffold, or absent

8. Dependency evolution
   - package/manifest history if Git exists
   - Current dependency list
   - Deliberate absence of dependency manifest, if applicable

9. Project narrative
   Write 2-4 paragraphs using labels:
   - [Observed]
   - [Inferred]
   - [Gap]

Keep the export self-contained. Include exact file paths, commit hashes where available, and explicit confidence levels. Do not rely on memory.
```

## Satellite Evidence To Carry Forward

### Submission Cockpit

- Fork of `MadsLorentzen/ai-job-search`; committed history does not represent the Cockpit.
- Cockpit work begins around 2026-06-05 by mtime.
- Seven ADRs from 2026-06-07 to 2026-06-22 document live operational decisions.
- Local-only Python stdlib web app with flat-file persistence and MCP exposure.
- Testing arrives after reconciliation drift creates duplicate-application risk.
- Key process signal: retire hand-maintained queue mirrors when they structurally drift from live source-of-truth views.

### KintsugiBlackjack

- No Git repository; history reconstructed from mtimes, ADRs, and backlog.
- Vite/React/PartyKit scaffold around 2026-05-27.
- Twelve ADRs from 2026-05-28 to 2026-06-03.
- Major creative pivot from Blackjack Victory to Kintsugi with Morty preserved through a reversible theme layer.
- Admin/balance dashboards appear by 2026-06-06.
- Persistence, auth, tests, CI, and security are absent by design or deferred.
- Key process signal: after the playable system stabilizes, Brett builds instrumentation to reason about balance before filling all content.

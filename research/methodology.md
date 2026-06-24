# AppBuildProcOS Research Methodology

## Purpose

This research reconstructs Brett's real application-building process from dated project evidence. It is not a portfolio summary, technical audit, or generic software lifecycle template. The goal is to identify the recurring states, transition signals, artifacts, decisions, omissions, and productive forms of exploration that appear across Brett's own projects.

The working outcome is **AppBuildProcOS**: a model that can be explained to humans and followed by AI agents without flattening the exploratory behavior that makes the work strong.

## Corpus Boundary

The authoritative corpus boundary is `appbuildproc_plan.md`, not the older ranked list embedded in `researchinstructions.md`.

Included local repositories:

- `agent828` at `/home/bam/projects/agent828`
- `repOptics` at `/home/bam/projects/repOptics`
- `AVLmc` at `/home/bam/projects/AVLmc`
- `morethanone` at `/home/bam/projects/morethanone`
- `TarotTALKS` at `/home/bam/projects/TarotTALKS`
- `fd_demo` at `/home/bam/projects/fd_demo`
- `ids` at `/home/bam/projects/ids`
- `bmccall17.github.io` at `/home/bam/projects/bmccall17.github.io`

Included satellite exports:

- Submission Cockpit export at `/home/bam/academy/playbook/applicationbuildingprocess/SubmissionCockpit_research_export.md`
- KintsugiBlackjack export at `/home/bam/academy/playbook/applicationbuildingprocess/BlackjackVictory_research_export.md`

Excluded by the current plan:

- Ghost Job Detector
- thirtysix
- YESYESNO Bot
- sidexside

Rationale: the plan explicitly says these are prototypes, single-instruction sets, or contrast cases outside the finalized research corpus. If later evidence shows one of them is necessary for an exception case, it should be added as an appendix rather than silently folded into the primary comparison.

## Evidence Types

Primary evidence is any artifact with a date, sequence, or durable location:

- Git commits, tags, branches, and release logs
- ADRs, PRDs, runbooks, backlog entries, devnotes, changelogs, and generated architecture references
- Deployment config such as `Dockerfile`, `partykit.json`, Vercel/GitHub Actions config, and environment examples
- Package manifests and dependency changes
- Database schemas, migrations, persistence config, and storage adapters
- Admin routes, dashboards, inspection tools, operator run ledgers, and internal APIs
- Tests, CI, security scans, observability config, and monitoring notes
- Social metadata, favicons, Open Graph images, landing pages, and publication workflows
- File modification times when Git is absent or misleading
- Satellite research exports produced by local agents on other machines

Current repository structure is not enough by itself. It can prove what exists now, but not when it appeared.

## Dating Rules

Use the strongest available date source in this order:

1. Git commit date and hash, preferably the earliest commit that introduced the capability.
2. ADR, changelog, backlog, runbook, release note, or self-dated document.
3. File modification timestamp, only when Git is absent or known to be misleading.
4. Inferred date range from surrounding commits or dependency/config history.
5. Undated current-state evidence, clearly labeled as a gap for chronology.

If a repository has no Git history, state that up front and treat all dates as weaker. For example, `fd_demo` is not a Git repository in the current local checkout, so its chronology must be reconstructed from file mtimes, `CHANGELOG.md`, `PROJECT_STATUS.md`, `README.md`, PartyKit config, and devnotes.

If a repository has Git history but the meaningful work is uncommitted, do not pretend the commit graph is authoritative. The Submission Cockpit export explicitly warns that the Cockpit's real history lives in ADRs, mtimes, and queue archives rather than commits.

## Confidence Labels

Every meaningful claim should carry one of these labels:

- **Observed:** directly supported by dated repository evidence or a supplied satellite export.
- **Inferred:** a reasonable interpretation supported by multiple observed facts.
- **Recommended:** a proposed improvement to future process, not a claim about what happened.
- **Gap:** expected evidence is missing, contradictory, unavailable, or too weak to date.

Use these labels inside dossiers and synthesis documents, not only in summaries.

## Per-Repository Extraction Procedure

For each included repository or satellite export:

1. Confirm repository identity, path, Git availability, first commit/date, latest evidence, commit count, tags, and branch model.
2. Capture stack and infrastructure from `package.json`, config files, imports, deployment files, and environment examples.
3. Extract first/last Git commits where available.
4. Scan lifecycle keywords in commits: `deploy`, `auth`, `admin`, `database`, `db`, `migration`, `test`, `analytics`, `monitor`, `security`, `ci`, `docker`, `env`, `config`, `ADR`, `decision`, `refactor`, `breaking`, `release`, `ship`, `launch`, `MVP`, `prototype`, `scaffold`, `init`.
5. Inspect ADRs, PRDs, backlog, changelog, runbooks, and release notes for decision sequence and phase transitions.
6. Identify first dated evidence for standard milestones:
   - idea/problem recognition
   - first working prototype
   - repository creation
   - first deployment
   - persistence/database
   - authentication/identity
   - external services
   - ADRs/decision docs
   - admin/operational tooling
   - testing/reliability
   - analytics/monitoring/logging
   - social/public presentation
   - security hardening
   - CI/CD
   - documentation/handoff
7. Record reversals, migrations, abandoned artifacts, late-arriving work, and guardrails added after incidents.
8. Produce three files:
   - `repos/<name>/evidence_index.md`
   - `repos/<name>/development_dossier.md`
   - `repos/<name>/normalized_timeline.md`

## Cross-Project Analysis Procedure

After per-repo extraction:

1. Normalize all milestones into a comparison matrix.
2. Count recurring phase/state appearances by project.
3. Separate universal patterns from product-type patterns.
4. Identify transition triggers: friction, drift, public sharing, user feedback, cost, deployment failure, schema drift, operational blind spots, or agent handoff needs.
5. Distinguish productive exploration from avoidable rework.
6. Preserve exceptions, especially:
   - local-only tools with no deployment/auth
   - no-Git creative experiments
   - public presentation projects where social/distribution appears early
   - games where balance/instrumentation matters more than CRUD administration
   - meta-tools where the product itself causes the process to become more explicit

## Conflict Handling

When evidence conflicts:

- Prefer dated primary artifacts over current files.
- Prefer a commit introducing a capability over a later doc describing it.
- Treat satellite exports as authoritative for offsite projects unless contradicted by later supplied evidence.
- For uncommitted or no-Git projects, state the chronology weakness rather than smoothing it away.
- Do not erase contradictions. They are process evidence, especially when naming drift, unused scaffolds, abandoned queue files, or late README work appear.

## Definition of Done for Final Model

The final AppBuildProcOS model is acceptable only if:

- Every included project has been examined with the same method.
- Major claims cite concrete project evidence.
- Observed facts, inferences, recommendations, and gaps remain separated.
- Cross-project patterns are supported by multiple projects.
- Exceptions are explained rather than discarded.
- The model explains transition conditions, not just phase names.
- The agent-readable version can classify a new project state and recommend appropriate next work without prematurely adding infrastructure.
- The human-readable version preserves generative exploration as a strength while naming avoidable rework.

# Cycle 1 Review Packet

## What Was Completed

Cycle 1 deliverables are now present under `/home/bam/academy/playbook/applicationbuildingprocess/research/`:

- `methodology.md`
- `corpus_index.md`
- `satellite_export_prompt.md`

## Boundary Decision

The finalized plan excludes Ghost Job Detector, thirtysix, YESYESNO Bot, and sidexside. The older `researchinstructions.md` still lists them as possible research projects, but Cycle 1 follows the newer plan file. This is documented in `methodology.md`.

## Corpus Status

Local projects verified as present:

- `/home/bam/projects/agent828`
- `/home/bam/projects/repOptics`
- `/home/bam/projects/AVLmc`
- `/home/bam/projects/morethanone`
- `/home/bam/projects/TarotTALKS`
- `/home/bam/projects/fd_demo`
- `/home/bam/projects/ids`
- `/home/bam/projects/bmccall17.github.io`

Satellite exports verified as present:

- `/home/bam/academy/playbook/applicationbuildingprocess/SubmissionCockpit_research_export.md`
- `/home/bam/academy/playbook/applicationbuildingprocess/BlackjackVictory_research_export.md`

## Method Caveats

- `fd_demo` is not a Git repository in the current local checkout. Cycle 2 should use file mtimes, changelog, project status, PartyKit config, release checklist, and devnotes.
- Submission Cockpit's export says Git is misleading because the meaningful Cockpit work is mostly uncommitted.
- KintsugiBlackjack's export says Git is absent.
- Several projects include dependency/build directories, so broad scans must exclude `node_modules`, `.next`, `dist`, and generated artifacts.

## Preliminary Pattern Signals

These are not final conclusions yet, but they are strong enough to guide Cycle 2 extraction:

- Infrastructure often arrives very early when the project is meant to become public or operational. Examples: agent828 Cloud Run/Docker on day one; AVLmc Aiven/Vercel within the first two days; TarotTALKS Vercel/Supabase on day one.
- Admin/operator visibility tends to arrive after friction or drift appears. Examples: agent828 admin data integrity and lead pipeline ADRs; morethanone admin panel and test rounds after live round complexity; AVLmc admin portal after personalization/auth; Submission Cockpit itself as a response to invisible scraper leads.
- Documentation appears in two forms: explicit ADR/runbook discipline for operated products, and design/backlog/GDD discipline for games/creative experiments.
- Testing and security often arrive after a concrete risk, failure, or publicness threshold, not necessarily at scaffold time.
- Presentation/social work can be a first-class phase. TarotTALKS and AVLmc show OG/social/brand work as a transition into shareability; darketype shows publication/reflection as an application layer.
- Naming drift and stale scaffold artifacts are meaningful evidence in creative/no-Git projects, not cleanup trivia.

## Approval Question

Before Cycle 2 deep extraction, confirm whether the corpus boundary should remain exactly as the plan states:

- Include the eight local projects and two satellite exports.
- Keep Ghost Job Detector, thirtysix, YESYESNO Bot, and sidexside excluded unless later added as appendices.

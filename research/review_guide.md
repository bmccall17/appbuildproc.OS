# AppBuildProcOS Review Guide

## Purpose

This guide turns the remaining human review checkpoints from `appbuildproc_plan.md` into concrete review questions.

The file audit can prove that the deliverables exist. Only Brett can validate whether the synthesis feels true, useful, and appropriately non-constraining.

## Fast Review Path

Estimated time: 20 to 30 minutes.

Read these files in order:

1. `executive_summary.md`
2. `evidence_traceability_matrix.md`
3. `cross_project_patterns.md`
4. `brett_build_os.md`
5. `visual_model.md`
6. `application_checklist.md`
7. `brett_build_os_agent.md`
8. `completion_audit.md`
9. `definition_of_done_audit.md`

Then answer the three checkpoint decisions below.

## Full Review Path

Estimated time: 60 to 120 minutes.

Read the fast-review files, then sample evidence from at least four project dossiers:

1. `repos/agent828/development_dossier.md`
2. `repos/repOptics/development_dossier.md`
3. `repos/AVLmc/development_dossier.md`
4. `repos/morethanone/development_dossier.md`

For contrast, add at least two of:

1. `repos/fd_demo/development_dossier.md`
2. `repos/ids/development_dossier.md`
3. `repos/SubmissionCockpit/development_dossier.md`
4. `repos/KintsugiBlackjack/development_dossier.md`
5. `repos/bmccall17.github.io/development_dossier.md`

## Checkpoint 1: Cycle 3 Truth Check

Source files:

- `evidence_traceability_matrix.md`
- `cross_project_patterns.md`
- `transition_map.md`
- `variation_and_exceptions.md`
- `chaos_and_rework.md`

Decision question:

Does the synthesis feel like Brett's actual process, or does it read like an academic abstraction imposed on the projects?

Specific checks:

- Are the strongest recurring patterns actually the ones Brett recognizes?
- Are any important instincts missing?
- Are any patterns overstated based on weak evidence?
- Does the traceability matrix make each state defensible without overstating weaker evidence?
- Does the productive-chaos distinction protect exploration rather than flatten it?
- Do the variations and exceptions explain why different project types behave differently?

Accept when:

- The pattern language feels recognizable.
- The caveats are honest.
- The model names both strengths and recurring friction without turning the process into a rigid sequence.

## Checkpoint 2: Human OS Usability

Source file:

- `brett_build_os.md`
- `visual_model.md`
- `application_checklist.md`

Decision question:

Is the human-readable AppBuildProcOS practical enough to guide a real project without over-constraining exploration?

Specific checks:

- Are the nine states named in a way Brett would actually use?
- Do entry signals and exit criteria help decide what to do next?
- Are required artifacts clearly separated from optional artifacts?
- Does the lightweight version fit a solo weekend build?
- Does the full version fit an operated product?
- Does the visual model make the loop and switch signals teachable?
- Does the application checklist make the workflow usable on a new repo?
- Does the model preserve the right to stay exploratory while the idea is still forming?

Accept when:

- Brett can imagine using the file during a real build.
- The model increases clarity without making every project feel like enterprise process.
- The final rule is operational: build fast where uncertain, become rigorous where truth is at risk.

## Checkpoint 3: Agent Spec Usability

Source file:

- `brett_build_os_agent.md`

Decision question:

Is the agent-readable spec specific enough for an AI agent to act on without prematurely adding infrastructure?

Specific checks:

- Does the inspection order match how an agent should enter an unfamiliar repo?
- Are evidence labels clear enough to prevent unsupported claims?
- Are the state classifications actionable?
- Do the infrastructure restraint rules prevent template-driven overbuilding?
- Would the agent know when admin, auth, database, tests, docs, or public packaging are warranted?
- Is anything missing that would help an agent avoid damaging Brett's exploratory process?

Accept when:

- An agent can classify a repo, explain its evidence, and recommend next work.
- The agent is biased toward evidence and restraint.
- The agent can still help accelerate implementation once a real pressure is identified.

## Reviewer Decision

Choose one:

- Accept as complete.
- Accept with small edits.
- Needs targeted rework before presentation.
- Needs deeper evidence review.

## Useful Edit Requests

If the model is close but not finished, request edits in one of these forms:

- Rename or merge specific states.
- Add a missing transition signal.
- Downgrade a pattern from strong to tentative.
- Add a missing exception.
- Make the agent rules stricter about infrastructure restraint.
- Make the human OS lighter and less procedural.
- Add a concrete example from a named project.

## Completion Decision

The AppBuildProcOS package should be considered complete when:

1. All planned deliverables exist.
2. The Cycle 3 synthesis passes the truth check.
3. The human OS is usable.
4. The agent spec is usable and restrained.
5. Any requested review edits have been applied.

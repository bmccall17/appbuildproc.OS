# AppBuildProcOS Visual Model

## Purpose

This file provides a teachable visual representation of AppBuildProcOS. It complements `brett_build_os.md`, `brett_build_os_agent.md`, and `application_checklist.md`.

The diagrams are intentionally loops and decision paths, not a waterfall. They show how Brett's process preserves exploration while adding structure when the project creates evidence that structure is needed.

## Core Reality-Seeking Loop

```mermaid
flowchart LR
  A["Idea, GDD, need, or workflow pain"] --> B["Executable seed"]
  B --> C{"Does real pressure require runtime?"}
  C -- "yes" --> D["Real runtime"]
  C -- "no" --> E["Local proof loop"]
  D --> F{"What stops telling the truth?"}
  E --> F
  F -- "state must survive" --> G["Durable state"]
  F -- "person or private data matters" --> H["Identity and access"]
  F -- "operator cannot inspect status" --> I["Operational visibility"]
  F -- "two facts disagree" --> J["Truth consolidation"]
  F -- "known failure is costly" --> K["Guardrails after evidence"]
  F -- "outsider must understand it" --> L["Public object"]
  G --> M["Record decision"]
  H --> M
  I --> M
  J --> M
  K --> M
  L --> M
  M --> N["Reflection and transfer"]
  N --> B
```

## State Relationship Map

```mermaid
flowchart TB
  S1["1. Spark To Executable Seed"] --> S2["2. Real Runtime"]
  S1 --> S3["3. Durable State"]
  S2 --> S3
  S3 --> S4["4. Identity And Access"]
  S2 --> S5["5. Operational Visibility"]
  S3 --> S5
  S5 --> S6["6. Truth Consolidation"]
  S3 --> S6
  S4 --> S7["7. Guardrails After Evidence"]
  S5 --> S7
  S6 --> S7
  S2 --> S8["8. Public Object"]
  S7 --> S8
  S5 --> S9["9. Reflection And Transfer"]
  S6 --> S9
  S7 --> S9
  S8 --> S9
  S9 -. "new insight or next project" .-> S1
```

## Decision Tree For The Next Artifact

```mermaid
flowchart TD
  A["Start with current evidence"] --> B{"Is the core loop executable?"}
  B -- "no" --> B1["Build smaller proof, run command, or GDD clarification"]
  B -- "yes" --> C{"Does local-only behavior answer the next question?"}
  C -- "no" --> C1["Add real runtime: deploy, callback, room, or local operator run path"]
  C -- "yes" --> D{"Must state survive sessions, users, or agents?"}
  D -- "yes" --> D1["Define durable state and source of truth"]
  D -- "no" --> E{"Does state belong to a person or private identity?"}
  E -- "yes" --> E1["Add identity/access model and recovery cases"]
  E -- "no" --> F{"Can the operator see what happened and what is owed?"}
  F -- "no" --> F1["Add admin, dashboard, diagnostic script, or status vocabulary"]
  F -- "yes" --> G{"Can two surfaces disagree about the same fact?"}
  G -- "yes" --> G1["Consolidate truth with shared definition, authority, or validator"]
  G -- "no" --> H{"Is a known failure now costly?"}
  H -- "yes" --> H1["Add focused guardrail tied to that risk"]
  H -- "no" --> I{"Will an outsider see or judge this?"}
  I -- "yes" --> I1["Add public object: README, demo, metadata, image, or launch copy"]
  I -- "no" --> J{"Will a future human or agent need this context?"}
  J -- "yes" --> J1["Record ADR, runbook, ship note, or workflow"]
  J -- "no" --> J2["Keep exploring; avoid ceremony"]
```

## Pressure To Artifact Map

| Pressure | AppBuildProcOS State | Smallest Useful Artifact |
|---|---|---|
| The idea cannot be evaluated abstractly. | Spark To Executable Seed | Smaller runnable proof or first interaction. |
| Local behavior hides the real constraint. | Real Runtime | Deployment, callback, PartyKit room, or local operator runtime. |
| Facts can be lost or duplicated. | Durable State | Schema, migration, flat-file contract, or source-of-truth note. |
| Ownership or privacy matters. | Identity And Access | Auth model, account table, OAuth flow, or recovery path. |
| Status is invisible. | Operational Visibility | Admin view, dashboard, diagnostic script, or status vocabulary. |
| Two surfaces can disagree. | Truth Consolidation | Shared definition, authoritative source, retired mirror, or validator. |
| A known failure is now expensive. | Guardrails After Evidence | Focused test, CI/Snyk/Sentry check, cost guard, or incident runbook. |
| Someone outside the build loop must understand it. | Public Object | README, metadata, demo, favicon, OG image, or launch copy. |
| The lesson will be needed again. | Reflection And Transfer | ADR, runbook, ship log, agent workflow, or reflection artifact. |

## Teaching Summary

The simplest visual explanation is:

1. Build the smallest loop.
2. Expose it to the right reality.
3. Notice which kind of truth is now under pressure.
4. Add the smallest artifact that carries that truth.
5. Record enough context for the next human or agent.

This preserves the generative part of Brett's process: early work stays loose until the evidence shows which kind of structure is actually needed.

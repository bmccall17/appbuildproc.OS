# morethanone Development Dossier

## Original Problem And Audience

**Observed:** morethanone is a ranked-choice group decision tool with host/player flow, realtime participation, ranking submissions, processing/reveal views, demos, admin tooling, and analytics.

**Inferred:** The audience is groups using a live decision session, plus a host/operator who needs setup controls, moderation, explainable processing, and replay/demo support.

## Earliest Prototype

**Observed:** The first full sprint lands on 2026-02-08, one day after initial commit. The first named release appears as "phase 1 complete for v0.0.1"; Supabase Realtime work follows immediately.

## Major Milestones

- **Core host/player loop:** Initial sprint and v0.0.1.
- **Realtime:** Supabase Realtime helpers replace polling for round status, participant joins, and ranking submissions.
- **Processing/reveal:** Host participation, show-processing state, stepped ranked-choice API, live round-by-round reveal.
- **Demo/public explanation:** `/demo` and demo scenarios land by 2026-02-09/10.
- **Moderation:** Host participant/option removal, profanity filter, ranking timer, auto-close.
- **Analytics/retention:** Analytics, mobile haptics/sounds, quality, and Run It Again land on 2026-02-11.
- **Admin:** Admin panel, admin cheatsheet, dashboard improvements, and admin test rounds land 2026-02-21/22.
- **Security:** Supabase security policies land on 2026-03-03.

## Deployment History

**Observed:** A new Vercel deployment URL is committed on 2026-02-12. The app likely deployed earlier as a Next/Vercel app, but the precise first deployment is not yet proven.

## Architectural Decisions

**Observed:** The project uses schema/migrations rather than a visible ADR log. The architecture evolves through Supabase migrations and commit series:

- Realtime helper extraction.
- Host settings migrations.
- Processing columns and reveal state.
- Round privacy.
- Share URLs and replay columns.
- Admin tables.
- Security policies.

## Admin And Operations Evolution

**Observed:** Admin arrives after the public/realtime loop becomes complex. Admin test rounds are added after dashboard build, which suggests the operator needed controlled scenarios to validate behavior.

## Testing And Reliability Evolution

**Observed:** Jest config and test script exist. Reliability work appears in race condition fixes, polling fallback, reveal edge-case fixes, heartbeat/keepalive updates, and Supabase security policies.

## Presentation And Distribution Evolution

**Observed:** `/demo`, "how it works" navigation, FAQ/RCV world links, real election scenarios, and README updates show public education and shareability becoming product work.

## Major Direction Changes

- Polling to realtime subscriptions.
- Basic voting to explainable stepped processing/reveal.
- Private session tool to public demo/RCV education surface.
- Manual operation to admin test rounds and security policy.

## Current State

**Observed:** morethanone is an operated realtime group-decision app with migrations, admin tools, analytics, demos, and security policies.

## Process Lessons

**Inferred:** morethanone shows Brett building the social loop first, then adding reliability and explanation layers once live multi-user behavior creates edge cases.

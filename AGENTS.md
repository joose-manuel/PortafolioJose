# AGENTS.md

## What this is

Greenfield **personal portfolio** project (owner: Jose Manuel Hernandez Donado). There is **no application code, no git repo, and no framework installed yet** — do not assume a build/test/lint toolchain exists. Do not run `npm run build`/`test`/etc. unless you create it.

## Design skills (already installed — USE them for UI work)

Loaded skills live here; activate by name rather than building from scratch:

- `.opencode/skills/` — UI/UX Pro Max suite: `ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `brand`, `banner-design`, `slides`
- `.agents/skills/` + `.claude/skills/` — `design-taste-frontend` (anti-slop design, tune via `DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY` dials in its `SKILL.md`)

## Required portfolio deliverables

- Deploy target: **Vercel** (project imported from a git repo; free HTTPS handled by Vercel automatically).
- Domain: a free domain from **DigitalPlat/FreeDomain** (e.g. `.us.kg`) delegated to Vercel's nameservers (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Delegate in DigitalPlat dashboard, not in Vercel.
- SEO rules are the source of truth in **`REGLAS_SEO_PORTAFOLIO.txt`** (Spanish). Must-haves when scaffolding the site: unique `<title>`/meta-description per page, single `<h1>`, real body text (not image-only), `sitemap.xml`, `robots.txt`, and a schema.org `Person` JSON-LD block with the owner's full name.
- After deploy: submit sitemap in Google Search Console (verify via file upload in Vercel, since free `.us.kg` domains can flag as spam on CNAME/DNS verification).

## Workflow conventions

- `skills-lock.json` is managed by the `skills` CLI (tracks `design-taste-frontend`). Do not hand-edit; update via `npx skills add`.
- OpenCode skill installs go under `.opencode/skills/`; taste-skill is installed only under `.agents/skills` + `.claude/skills` and is exposed to OpenCode through `.agents`.
- Nx monorepo at `mi-Portafolio/` with Angular frontend (`apps/client`) and NestJS backend (`apps/api`, generated with `@nx/nest:app`). Commands run from `mi-Portafolio/` via `npx nx …`:
  - `npx nx build api` — build NestJS backend (webpack).
  - `npx nx lint api` — eslint backend.
  - `npx nx serve api` — run backend (default http://localhost:3000).
  - `npx nx serve client` — run Angular frontend; `apps/client/proxy.conf.json` proxies `/api` to the backend.

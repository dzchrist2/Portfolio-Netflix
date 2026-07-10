# Portfolio-Netflix

A personal portfolio site styled as a Netflix profile browser. Visitors pick a "profile" (recruiter or developer) and get a tailored home page, banner CTAs, and content ordering for that audience.

Live site: https://drewzc.me

## Stack

- React 19 + TypeScript, built with Vite
- React Router (route-based code splitting via `React.lazy`)
- Plain CSS per component (no CSS framework)

## Development

```bash
npm install
npm run dev       # start dev server with HMR
npm run build     # type-check + production build to dist/
npm run lint      # ESLint
npm run preview   # preview the production build locally
```

## Architecture

- `src/data/*.ts` — all site content (skills, experience, projects, certifications, banner copy, profile definitions). Components import from here rather than hard-coding content, so content changes don't touch component code.
- `src/data/profiles.ts` — the two profiles (`recruiter` | `developer`), persisted to `localStorage` so a refresh keeps the selected profile. `banner.ts` and `TopPicks.tsx` key their content off `ProfileType` to vary copy/CTAs/ordering per profile.
- `src/pages/` — one folder per route, each with its own CSS.
- `src/components/` — shared UI (nav bar, profile card, buttons).

## Deploy

Deploys to GitHub Pages automatically via `.github/workflows/deploy.yml` on every push to `main` — no manual `gh-pages` step. The workflow builds with `npm run build` and publishes `dist/` through the `actions/deploy-pages` action.

## Known open items

- No CMS yet — content lives in `src/data/*.ts` and changes require a code commit.
- `Projects.tsx` has a couple of placeholder `githubUrl`s pointing at the GitHub profile rather than the specific repo, and a cosmetic icon mismatch for the C++ tech tag.
- No accessibility (Lighthouse/axe) audit has been run yet.

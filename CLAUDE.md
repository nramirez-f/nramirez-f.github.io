# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (ES/EN) academic homepage of José Ignacio Ramírez Fuentes, PhD student in applied mathematics (EDANYA group, University of Málaga). Astro 7 + Tailwind CSS v4, static output, deployed to GitHub Pages under the custom domain `www.nramirez.es` (`public/CNAME`). Originally scaffolded from the MIT template astro-starter-portfolio (`LICENSE-template`).

## Commands

pnpm only. Node is pinned through `devEngines.runtime` in `package.json`: pnpm downloads Node 24 for the project, so no system Node is needed (use `pnpm exec node …` to run scripts).

- `pnpm dev`: dev server
- `pnpm build`: `astro check` (types) + `astro build`. Type errors fail the build.
- `pnpm preview`: serve `dist/`
- `pnpm check`: type check only

There is no test suite or linter.

## Privacy rule

`meritos/` (git-ignored) holds the owner's certificates, which include their national ID number, phone, birth date and home address. Use it only as a local source of data. Never copy those files into `public/`, and never write those personal details into any source file. After building, grep `dist/` for the ID number and phone (read them from `meritos/CVN.pdf`, never write them down): there must be no match.

## Architecture

- **Routing / i18n.** `src/pages/[...path].astro` generates every page in both languages from `ROUTES` in `src/i18n.ts`. Spanish lives at `/`, English under `/en/`, and the slugs differ per language (`/investigacion/` ↔ `/en/research/`). Each page is a view in `src/views/` that receives `lang`. To add a page:
  1. Add a key to `PAGES`, `ROUTES` and `NAV_LABELS`.
  2. Create the view.
  3. Register it in `VIEWS` in the route file.

  Fixed UI strings live in `UI` in `src/i18n.ts`. Longer copy is written inline in each view as `lang === 'es' ? … : …`.
- **Data.** Academic records are YAML content collections in `src/data/*.yaml` (talks, teaching, publications, projects, videos), with schemas in `src/content.config.ts` and file-loader maps keyed by entry id. A text field is either a plain string or `{ es, en }` (`Localized`), resolved with `l(value, lang)`. Data with heterogeneous shapes (education, positions, training, EDANYA seminars, service) lives in `src/data/cv.ts`. Sorted and grouped accessors are in `src/lib/data.ts`. The CV page (`src/views/Cv.astro`) re-renders the same collections through shared components (`TalkItem`, `ProjectItem`, `PublicationItem`, `TeachingTable`, `CvList`), so each fact is entered once.
- **Talks vs attendance.** The `talks` collection holds only talks given. Conferences, schools, courses and seminars attended without a talk go in `src/data/cv.ts` and appear under "Formación complementaria" in the CV.
- **Code page.** `src/views/Code.astro` fetches repos client-side from the GitHub and GitLab public APIs for `SITE.github` / `SITE.gitlab`. It keeps only repos tagged with the topic `SITE.codeTopic` (`research`), merges them by last activity and caches them for 30 min in `sessionStorage`. To show a repo, add that topic to it on GitHub or GitLab.
- **Personal data and profiles.** These live in `src/site.config.ts`. Empty `orcid`, `scholar`, `arxiv` and `cvPdf` values hide the corresponding links and buttons.

## Typography and styling

- Fonts are self-hosted through the Astro Fonts API with the `local` provider: Latin Modern Roman (`src/assets/fonts/LM-*.woff2`) as `--ff-serif`, and KaTeX's Computer Modern Typewriter as `--ff-mono`. These fonts have no small-caps glyphs, so don't use `font-variant: small-caps`.
- Math: use `<Tex tex="…" display? />` (`src/components/Tex.astro`), which renders with KaTeX at build time and ships no client JS. Astro 7's default Markdown processor is Sätteri. Markdown math would need `satteri({ features: { math: true } })` plus KaTeX rendering. It is not set up because there is no Markdown content yet.
- Colours are tokens in `src/styles/global.css` (`--paper`, `--ink`, `--ink-soft`, `--signal`, `--line`, `--surface`), redefined under `.dark`. Dark mode is class-based, set before paint in `BaseHead.astro`.
- `.section-title` headings are auto-numbered with a CSS counter (LaTeX `\section` style). `.entries` / `.entry` are the date-column list layout used across pages.
- The CV page has print styles: the browser's print to PDF produces a clean CV.

## Workflow

Work happens on `dev`. Every push to `main` deploys the live site (`.github/workflows/deploy.yml`, `withastro/action`, Node 24). Commit messages follow `type(scope): message`.

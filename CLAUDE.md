# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Production build → build/
npm run lint       # ESLint check
npm run preview    # Preview production build
```

Node version: `lts/jod` (see `.nvmrc`). Copy `.env.example` → `.env` before running.

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_NAVER_MAP_CLIENT_ID` | Naver Maps API key |
| `VITE_KAKAO_SDK_JS_KEY` | Kakao Talk SDK key |
| `VITE_SERVER_URL` | Backend URL (optional) |
| `VITE_STATIC_ONLY` | Set `true` to disable server features |

## Architecture

**Mobile-first wedding invitation web app** built with React 19 + TypeScript + Vite. All customizable wedding data lives in [src/const.ts](src/const.ts); environment access is centralized in [src/env.ts](src/env.ts).

### Component Structure

[src/App.tsx](src/App.tsx) composes sections in scroll order, each wrapped by `LazyDiv` for deferred rendering:

```
Cover → Invitation → Calendar → Gallery → Location → Information → GuestBook
```

Two React Context providers wrap the app: `StoreProvider` (global state) and `ModalProvider` (modal visibility). Modals render via a Portal in [src/component/modal/](src/component/modal/).

### Key Patterns

- **Styling**: SCSS modules per component; root `font-size` scales dynamically for rem-based mobile layout
- **SVGs**: Imported as React components via `vite-plugin-svgr`
- **HTML injection**: `vite-plugin-html` injects wedding names/date into `index.html` at build time from `const.ts`
- **Map integration**: Naver Maps rendered in `location/` component; Kakao SDK loaded from `public/kakao_js_sdk/`
- **Guestbook**: Requires `VITE_SERVER_URL`; disabled when `VITE_STATIC_ONLY=true`

### Deployment

GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) builds and deploys to GitHub Pages on push to `main`. API keys are injected as GitHub Actions secrets/variables.

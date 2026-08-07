---
name: Vercel npm registry
description: External deployment installs for imported projects with Replit-generated npm lockfile URLs
---

Imported projects can have `package-lock.json` entries pointing at Replit's internal package registry. External builders such as Vercel cannot resolve those hosts.

**Why:** A clean external install failed while the same dependency tree worked inside Replit; forcing the public npm registry made both `npm install` and `npm ci` succeed without changing the dependency lock.

**How to apply:** Keep a project-level `.npmrc` with `registry=https://registry.npmjs.org/` and `replace-registry-host=always` when an imported lockfile contains internal registry URLs.

Imported apps may also expose `attached_assets` through the development server only. If production uses `/attached_assets/...` URLs, the production build must copy the referenced public media into `dist/public/attached_assets`; Vercel rewrites do not provide those files.

**Why:** Vercel serves only the configured output directory, while the Replit Express development server separately exposes `attached_assets`.

**How to apply:** Preserve existing asset URLs when possible, and copy image files into the matching output subdirectory during the build rather than adding a database or changing runtime routing.
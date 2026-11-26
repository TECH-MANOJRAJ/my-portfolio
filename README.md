# Manojraj G — Portfolio (React + Vite + TypeScript + Tailwind v4 + Framer Motion)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
    npm run preview

## Replace assets
- Resume: overwrite `public/Manojraj-G-Resume.pdf` (keep the file name).
- Photo: overwrite `public/profile.webp` (3:4 portrait works best).

## Update content
Everything lives in `src/data.ts`: `profile`, `education`, `skills`, `projects`, `experience`, `certs`.
- Add a project: append an object to `projects` (set `status` to "COMPLETED" or "IN PROGRESS").
- Add a skill: add a string to a group in `skills`. If its name also appears in a project's `tech`, hover links update automatically.
- When a NEXLIMA internship ends, set `current: false` on that entry.

## Deploy
- Vercel / Netlify: import the repo; build `npm run build`; output `dist`.
- GitHub Pages: set `base: "/repo-name/"` in `vite.config.ts`, build, publish `dist`.
- After deploying, add a canonical link, `og:url` and `og:image` in `index.html`.

## View My Live Portfolio

[Click here to visit my portfolio website](https://manojraj-portfolio-2026.s3.eu-north-1.amazonaws.com/index.html)

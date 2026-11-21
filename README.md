# Ishaka Cornelius — Developer Portfolio

A responsive, single-page portfolio introducing Ishaka Cornelius Soghenekparobor, an aspiring software engineer seeking an internship. It presents a short introduction, technical skills, background, selected projects, and ways to get in touch.

The portfolio is a client-side React application. It has no application backend or database; project demos and contact destinations are external links configured in the source.

## What’s in the portfolio

- **Home:** name, software engineer role, and locally stored portrait.
- **Skills:** a horizontally scrollable carousel with controls and a progress indicator. It lists HTML, CSS, JavaScript, React, GSAP, Node.js, Express, PostgreSQL, SQL, REST APIs, Git, Postman, and responsive design.
- **About:** an introduction, current learning goals, and a link to the skills section.
- **Projects:** four project cards—Real Estate Platform, Barber Salon, Movie Site, and Creative Studio Website. The first three have live demo links; the Creative Studio card does not yet have one.
- **Contact:** links to WhatsApp, Instagram, LinkedIn, and GitHub.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Desktop navigation links switch to a hamburger menu at widths of 760px and below. The menu can be toggled and closes after a navigation link is selected.
- GSAP, SplitText, and ScrollTrigger animate the introduction and section content as it enters the viewport. Animations are skipped when the user has enabled reduced motion.
- Project cards, skills, contact destinations, and page content are maintained as data or markup in their corresponding components.

## Tech stack

- React 19 and JavaScript (ES modules)
- Vite 8 for local development and production builds
- CSS, with stylesheets organized by page section
- GSAP, SplitText, and ScrollTrigger for motion
- ESLint for code linting

## Project structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                 # Local portfolio images
│   ├── components/
│   │   ├── Header.jsx          # Desktop navigation and mobile menu
│   │   ├── hero.jsx            # Home introduction
│   │   ├── skills.jsx          # Skills carousel
│   │   ├── skills.css
│   │   ├── about.jsx
│   │   ├── about.css
│   │   ├── projects.jsx
│   │   ├── projects.css
│   │   ├── contact.jsx
│   │   └── contact.css
│   ├── App.jsx                 # Page composition and GSAP animations
│   ├── App.css                 # Global, hero, and navbar styles
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── package-lock.json
```

## Requirements

- Node.js and npm

## Run locally

From the project directory:

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally after running `npm run build`. |
| `npm run lint` | Run ESLint across the project. |

## Updating portfolio content

- **Projects:** edit the `projects` array in `src/components/projects.jsx`. Update titles, descriptions, technologies, image URLs, and `demoUrl` values. A card only displays its live-project link when it has a `demoUrl`.
- **Contact:** edit the `contactLinks` array in `src/components/contact.jsx` to update contact names, details, and destinations. Check that the URLs are correct before publishing.
- **Skills:** edit the `skills` array in `src/components/skills.jsx` to add or change a skill and its icon.
- **About and introduction:** edit `src/components/about.jsx` and `src/components/hero.jsx`.
- **Images:** the portrait is stored in `src/assets/` and imported by the Home and About sections. Project photos are loaded from Unsplash; skill icons are loaded from Devicon and Simple Icons CDNs.
- **Styling:** global and hero styles are in `src/App.css`; section styles are in the matching CSS files under `src/components/`.

The remote project photos and skill icons require an internet connection to load.

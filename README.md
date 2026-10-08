# HelChris Portfolio


🔗 **Live site**

[HelChris portfolio](https://helchris.netlify.app/)

📁 **Source code**

[GitHub repository](https://github.com/HelChris/portfolio2)

---

## About

This responsive portfolio presents HelChris's front-end development work, technical skills, and selected project case studies.

The site is built as a small React application with reusable layout, navigation, project-preview, contact, and skills components. It uses a centralized token-based theme for consistent light and dark mode styling.

## Features

- Responsive portfolio homepage
- About Me and Languages & Tools sections
- Project cards with screenshots and descriptions
- Individual project case-study pages
- Responsive navigation with hash-link scrolling
- Contact links for LinkedIn, Instagram, Discord, GitHub, and homepage
- Light and dark color themes

---

## Tech Stack

- React 19
- React DOM
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Tailwind CSS Vite plugin
- ESLint
- Husky
- Commitlint
- pnpm

---

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm run dev
```

Vite will print the local development URL in the terminal.

---

## Scripts

```bash
pnpm run dev       # start the development server
pnpm run build     # create a production build
pnpm run preview   # preview the production build locally
pnpm run lint      # run ESLint
```

---

## Project Structure

- `src/components` - reusable interface, layout, and homepage components
- `src/config` - navigation and project data
- `src/pages` - homepage and project case-study pages
- `src/styles` - fonts, design tokens, and global styles
- `src/assets/projects` - project screenshots
- `public` - static deployment files

---

## Project Pages

- [Readers Realm](https://helchris.netlify.app/readersrealm)
- [Spirit Bid](https://helchris.netlify.app/spiritbid)
- [HelTech](https://helchris.netlify.app/heltech)

## Notes

- The app uses `pnpm` as its package manager.
- Color, typography, and semantic UI values are centralized in `src/styles/tokens.css`.
- Project content is configured in `src/config/projects.ts`.

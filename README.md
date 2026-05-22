# Abdul Hakim — Portfolio Website

Personal portfolio website built with vanilla HTML, CSS and JavaScript. The original single-file HTML has been refactored into a cleaner project structure for GitHub and Vercel deployment.

## Project Structure

```txt
.
├── index.html
├── package.json
├── vercel.json
├── README.md
└── src/
    ├── styles.css
    └── main.js
```

## Features

- Live GitHub repositories pulled via GitHub API
- Language filters for repositories
- 3D card tilt effects on hover
- Custom cursor with lag ring
- Typing animation in hero section
- Animated counters
- Scroll reveal animations
- Scroll progress bar
- Responsive layout for desktop and mobile

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Import from GitHub

1. Create a new GitHub repository.
2. Upload all files from this project folder.
3. Go to Vercel and click **Add New Project**.
4. Import your GitHub repo.
5. Vercel should detect the project automatically.
6. Use these settings if needed:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Where to Edit

### Main content
Edit the page sections in:

```txt
index.html
```

Use this file to change:

- Name and headline
- About section
- Projects
- Experience
- Contact links
- Footer

### Styling / colors / layout
Edit:

```txt
src/styles.css
```

Main color tokens are at the top of the file:

```css
:root {
  --bg: #070B12;
  --surface: #0D1420;
  --teal: #00C8A0;
  --blue: #4F8EF7;
}
```

### Animations and GitHub API
Edit:

```txt
src/main.js
```

Use this file to change:

- Typing animation phrases
- Counter animation
- Card tilt behavior
- GitHub username
- Repo language colors

To change the GitHub account used for the live repo section, update:

```js
const GITHUB = 'Hakimcorleone';
```

## Notes

This project uses Google Fonts and GitHub API, so an internet connection is needed for fonts and live repositories to load properly.

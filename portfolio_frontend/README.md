# Nashim K N — Portfolio Frontend

A modern Next.js portfolio site for Nashim K N (Senior Full Stack Developer), designed with the Ocean Professional theme (blue primary, amber accents), built using Next.js App Router and Tailwind CSS v4 utilities. The site is statically exported for simple hosting.

## Quick Start

- Development server:
  ```bash
  npm install
  npm run dev
  # open http://localhost:3000
  ```
- Production build (server):
  ```bash
  npm run build
  npm start
  ```
- Static export (recommended for deployment):
  ```bash
  npm run build
  # Output is generated in ./out because next.config.ts sets: output: "export"
  # Deploy the contents of the out/ directory to any static host (e.g., Vercel static, Netlify, GitHub Pages, Cloudflare Pages, S3).
  ```

Notes:
- The project is configured for static export via next.config.ts:
  ```ts
  // next.config.ts
  export default {
    output: "export",
  }
  ```
- Smooth scrolling is enabled in the theme styles. Navigation uses section anchors with IDs:
  - #about
  - #experience
  - #education
  - #contact

## Editing Content

All profile content for the UI is sourced from a single file:

- File: src/data/profile.ts
- Export: profile of type ProfileData
- Fields to edit:
  - name, role, summary, about
  - resumeLink (string): set to a hosted URL or local asset path (e.g., "/resume.pdf")
  - social: { github?, linkedin?, twitter? }
  - experience: array of roles with company, role, period, optional location, highlights[], optional tech[]
  - education: array with institution, degree, period, optional details[]
  - contact: { email, phone?, location? }

Example snippet:
```ts
export const profile: ProfileData = {
  name: "Your Name",
  role: "Your Role",
  summary: "One-liner or two about you.",
  about: "Longer personal summary...",
  resumeLink: "/resume.pdf",
  social: {
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    twitter: "https://twitter.com/your-handle",
  },
  experience: [
    {
      company: "Company",
      role: "Senior Full Stack Developer",
      period: "2022 — Present",
      location: "Remote",
      highlights: ["Thing you led or shipped", "Impact you drove"],
      tech: ["TypeScript", "Next.js", "Node.js"],
    },
  ],
  education: [
    { institution: "University", degree: "B.Tech", period: "2015 — 2019" },
  ],
  contact: { email: "hello@example.com", location: "City, Country" },
};
```

## Replacing the Profile Image

- Replace the image file used in the hero and metadata:
  - Path to replace: public/images/profile.jpg
- Provide a JPEG with a reasonable size (e.g., 800×800). After replacement, rebuild/export.
- If you change the file name or path, update:
  - src/app/layout.tsx (OpenGraph/Twitter image URL)
  - Any component hardcoded references (the default uses /images/profile.jpg)

## Ocean Professional Theme

The Ocean Professional theme applies:
- A blue primary color for key actions and highlights.
- Amber as a secondary/accent color for emphasis.
- Subtle gradient backgrounds and smooth shadows.
- Clean, modern layout with rounded cards.

These styles are implemented via Tailwind CSS v4 utility classes in components such as:
- src/components/Hero.tsx
- src/components/Section.tsx
- src/components/ExperienceCard.tsx
- src/components/EducationCard.tsx
- src/components/ContactCard.tsx
- src/components/Header.tsx
- src/components/Footer.tsx

You can customize look-and-feel by adjusting class names in these components or by extending Tailwind configuration as needed.

## Tailwind CSS v4 Utilities

This project uses Tailwind v4 with the new PostCSS plugin. Utility classes drive the layout, spacing, colors, and typography. Common classes appear in:
- src/app/globals.css (global resets and base styles)
- Components listed above

If you introduce new components, follow the same utility-first approach and the established Ocean Professional palette.

## Navigation, Anchors, and Smooth Scrolling

The homepage includes sections with IDs used for anchor navigation and smooth scrolling:
- About: id="about"
- Experience: id="experience"
- Education: id="education"
- Contact: id="contact"

Ensure header navigation links reference these anchors (e.g., /#experience). Smooth scrolling is handled via CSS/behavior in the theme styles.

## SEO Metadata and Deployed URL

- The site metadata is configured in src/app/layout.tsx via the Next.js Metadata API.
- Update metadataBase to the final deployed URL once known to ensure correct absolute URLs for Open Graph and Twitter cards:
  ```ts
  export const metadata = {
    // ...
    metadataBase: new URL("https://your-deployed-domain.com"),
  }
  ```
- Also consider updating openGraph.url and social image references if your domain changes.

## File Structure Highlights

- next.config.ts — sets static export via output: "export"
- src/data/profile.ts — single source of truth for profile content
- src/app/page.tsx — main page with section anchors
- src/app/layout.tsx — global metadata, header/footer
- public/images/profile.jpg — profile image used in UI and social previews
- out/ — static export output after build

## Deployment

Because the app is configured for static export, you can deploy the contents of the out/ directory to any static hosting provider:
- Vercel (static), Netlify, GitHub Pages, Cloudflare Pages, AWS S3 + CloudFront, etc.

Typical flow:
```bash
npm ci
npm run build
# Upload ./out to your host
```

## Troubleshooting

- If anchors do not scroll smoothly, verify that global CSS includes smooth scroll behavior and that the Header links reference the correct section IDs.
- If social preview images are incorrect, confirm metadataBase and the image paths in src/app/layout.tsx, then rebuild and redeploy.

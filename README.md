# Rakesh Shrestha — Personal Portfolio

A neobrutalist personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Motion (Framer Motion v12)**. Designed and developed by Rakesh Shrestha — UI/UX & Product Designer based in Kathmandu, Nepal.

🌐 **Live Site:** [rakeshshrestha.vercel.app](https://rakeshshrestha.vercel.app)

---

## Preview

> Bold borders. Flat shadows. Loud colors. Zero compromise.

The portfolio follows a **neobrutalist design system** with a consistent color palette, thick borders, and scroll-driven animations.

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | [Next.js](https://nextjs.org/) | 15.5.18 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.8.3 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 4.1.12 |
| Animation | [Motion](https://motion.dev/) | 12.23.24 |
| Icons | [Lucide React](https://lucide.dev/) | 0.487.0 |
| Runtime | [React](https://react.dev/) | 19.0.0 |
| Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.1.1 / 3.2.0 |

---

## Features

- **Scroll-driven animations** — every section animates in/out on scroll using `useScroll` + `useTransform`
- **Neobrutalist UI** — thick black borders, flat box shadows, bold typography, loud accent colors
- **SEO optimized** — full `metadata` API, Open Graph, Twitter cards, sitemap, robots.txt, structured data (JSON-LD)
- **Google Analytics** — integrated via `NEXT_PUBLIC_GA_ID` env variable
- **CV download** — direct PDF download from the contact section
- **Fully responsive** — mobile-first layout across all sections
- **No hydration errors** — icons resolved at render time, not stored as JSX in data arrays

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with metadata, GA script
│   ├── page.tsx             # Home page with JSON-LD structured data
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/
│   ├── SeoKeywords.tsx      # Hidden SEO keyword block
│   └── story/
│       ├── Navigation.tsx        # Sticky top nav with section links
│       ├── HeroStory.tsx         # Hero section with name & CTA
│       ├── JourneyTimeline.tsx   # Alternating timeline of milestones
│       ├── SkillsShowcase.tsx    # Tabbed skills categories
│       ├── ProjectsGallery.tsx   # Featured work + practice projects
│       ├── AchievementsSection.tsx # Hackathon wins & education
│       ├── ScrollProgress.tsx    # Scroll progress bar
│       └── ContactStory.tsx      # Contact cards + CV download
public/
├── favicon.png
├── profile.png
├── og.png                   # Open Graph image (1200×630)
└── RAKESH_SHRESTHA_CV.pdf   # Downloadable resume
```

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Yellow | `#FFE500` | Gunasho card, TechSpark, Journey steps |
| Hot Pink | `#FF006B` | RelayHack x Tumlet, BigAI card, Soft Skills |
| Cyan | `#00F0FF` | RelayHack x Aqore, E Library card, Tools & Tech |
| Lime Green | `#B4FF00` | JunctionX, Internship step, Development skills |
| Black | `#000000` | Borders, shadows, status badges |
| White | `#FFFFFF` | Backgrounds, cards |

---

## Getting Started

### Prerequisites

- Node.js `18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rakeshshresthaa7/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://rakeshshrestha.vercel.app`) | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (e.g. `G-XXXXXXXXXX`) | No |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification token | No |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION_2` | Second GSC verification token | No |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#hero` | Name, title, CTA buttons |
| Journey | `#journey` | Timeline from Figma basics → internship → future |
| Skills | `#skills` | Tabbed: Design Craft, Tools & Tech, Development, Soft Skills |
| Projects | `#projects` | Featured work (e-Suchana, BigAI, E Library) + practice projects |
| Achievements | `#achievements` | RelayHack wins, JunctionX Kathmandu, TechSpark 2.0, education |
| Contact | `#contact` | Email, phone, location, LinkedIn, GitHub, CV download |

---

## Featured Projects

### Gunasho (e-Suchana)
- **Category:** Gov-Tech Platform
- **Type:** Web + Mobile
- **Status:** Deployed
- **Web:** [gulmikaligandaki.gunasho.com](https://gulmikaligandaki.gunasho.com/)
- **App:** [Play Store](https://play.google.com/store/apps/details?id=com.mspsolution.new_gunaso_app)

### BigAI Portfolio
- **Category:** Corporate Website
- **Type:** Web
- **Status:** In Development

### E Library System
- **Category:** Education Platform
- **Type:** Web App
- **Status:** In Development

---

## Deployment

The site is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rakeshshresthaa7/MyPortfolio)

---

## Contact

**Rakesh Shrestha**
- 📧 [rakesh.shresthaa7@gmail.com](mailto:rakesh.shresthaa7@gmail.com)
- 📞 +977-9863664362
- 📍 Kathmandu, Nepal
- 💼 [LinkedIn](https://www.linkedin.com/in/rakesh-shrestha-2b9b34286)
- 🐙 [GitHub](https://github.com/rakeshshresthaa7)

---

## License

This project is personal portfolio work. Feel free to use it as inspiration, but please do not copy the content or design directly.

---

*Designed & Developed by Rakesh Shrestha • © 2026*

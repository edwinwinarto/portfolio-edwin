# Personal Portfolio — Next.js 15

A clean, modern, minimal personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Features

- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Animated sections with Framer Motion
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO metadata + OpenGraph + Twitter Card
- ✅ Next.js Image optimization
- ✅ Sticky blur navbar
- ✅ Scroll to top button
- ✅ Project cards with tech tags
- ✅ Timeline experience section
- ✅ Contact section with links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

### Replace content in these files:
- `components/Hero.tsx` — name, role, description, links
- `components/About.tsx` — bio text
- `components/Skills.tsx` — skill categories
- `components/Projects.tsx` — project data
- `components/Experience.tsx` — work history
- `components/Contact.tsx` — contact details
- `components/Footer.tsx` — name, social links
- `app/layout.tsx` — SEO metadata

### Add your images to `public/assets/`:
- `profile.jpg` — hero profile photo
- `eventra.png`, `payment.png`, `mst.png`, etc. — project screenshots

## Folder Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── ScrollToTop.tsx
│   ├── Skills.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── public/
│   └── assets/
│       ├── profile.jpg
│       └── [project screenshots]
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

MIT

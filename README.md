# Yousef Fahem Al-Hayafi — Portfolio

Cinematic Full-Stack portfolio built with **Next.js 14 App Router**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add the background video

Place your Kling AI portal video at:

```
/public/portal.mp4
```

The `<video>` element in `Hero` references `/portal.mp4` which Next.js serves from the `/public` folder.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Production build

```bash
npm run build
npm start
```

---

## File Structure

```
/app
  layout.tsx        ← Root layout, metadata, Google Fonts (Inter)
  page.tsx          ← Full single-page portfolio (Nav, Hero, Projects, Stack, About, Contact, Footer)
  globals.css       ← Tailwind directives + custom scrollbar + motion tokens

tailwind.config.ts  ← Extended palette, keyframes, shadow tokens
next.config.js      ← Next.js config
tsconfig.json       ← TypeScript config
package.json        ← Dependencies (Next 14, GSAP 3, Tailwind 3)
```

---

## Sections

| Section | Key Feature |
|---------|-------------|
| **Nav** | Glassmorphic fixed header · GSAP magnetic glow on hover |
| **Hero** | Full-screen Kling AI video bg · staggered 3D word-reveal timeline |
| **Projects** | 6-card obsidian grid · ScrollTrigger stagger fade-in |
| **Stack** | 4-column tech arsenal · ScrollTrigger column reveal |
| **About** | Split layout · stat cards · ambient neon glow |
| **Contact** | Centered CTA · radial ambient glow |
| **Footer** | Cinematic dark layout · tech stack credits · neon radial blobs |

---

## Customization

- **Email**: Replace `yousef@architect.dev` in `Contact` and `Footer`
- **Social links**: Update `href` values in `Footer`
- **Projects**: Edit the `PROJECTS` array in `page.tsx`
- **Video**: Swap `/public/portal.mp4` with any looping background video

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first styling
- [GSAP 3 + ScrollTrigger](https://gsap.com/) — Cinematic animations
- [Inter](https://fonts.google.com/specimen/Inter) — Typography (via `next/font`)

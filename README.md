# Atheer — Property Services Landing (Next.js 15)

Pixel-driven, mobile-first static frontend for a property-services platform.
Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and
**Tailwind CSS**. Icons via `lucide-react`. All imagery uses `next/image`.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Folder structure

```
.
├── app/
│   ├── layout.tsx              # Root layout (sticky Header + Footer, fonts, metadata)
│   ├── page.tsx                # Landing page (composes all sections)
│   ├── globals.css             # Tailwind base + design tokens
│   ├── terms/page.tsx          # /terms — Terms & Conditions (static)
│   └── privacy/page.tsx        # /privacy — Privacy Policy (static)
├── components/
│   ├── Header.tsx              # Sticky nav + responsive mobile menu
│   ├── Footer.tsx              # Multi-column footer with social icons
│   ├── Logo.tsx                # SVG company mark
│   ├── SocialIcons.tsx         # Facebook / LinkedIn / Instagram / Snapchat / X
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx        # 6-card grid + target audience
│       ├── BuildingOwners.tsx  # "How it works" + benefits
│       ├── ServiceProviders.tsx# "How to join" + vetting process
│       ├── Testimonials.tsx    # Reviews + Case Studies
│       ├── Blog.tsx            # Featured article + 6-post grid
│       ├── FAQ.tsx             # Interactive accordion
│       └── Contact.tsx         # Form with Tailwind validation messages
├── tailwind.config.ts          # Navy / Gold / accent palette
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Design tokens

- Navy: `#0B2F46` (primary background / typography)
- Gold: `#E2A93A` (accents, ratings, hover)
- Accent red: `#C8102E` (eyebrows, required markers)

## Pages & routes

| Route       | Source                         |
| ----------- | ------------------------------ |
| `/`         | `app/page.tsx`                 |
| `/terms`    | `app/terms/page.tsx`           |
| `/privacy`  | `app/privacy/page.tsx`         |

## Interactive (frontend-only) logic

- **Mobile nav** — `useState` toggle in `Header.tsx`.
- **FAQ accordion** — single-open accordion with smooth grid-rows transition.
- **Contact form** — client-side validation (required fields, email regex,
  min message length) with red-bordered inputs and inline error messages.

## Notes

- All hero / blog imagery uses `next/image` with remote patterns whitelisted in
  `next.config.ts`.
- The original `Landing_page-*.jpg` source comps stay in the repo root for
  reference but are not bundled.

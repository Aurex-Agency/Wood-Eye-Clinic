# Wood Eye Clinic Website

Marketing website for Wood Eye Clinic, 26 S Main Street, Pontotoc, MS.
Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Home page with interactive blurry-to-clear vision demo |
| `/about` | About the clinic |
| `/about/meet-the-doctors` | Optometrist overview |
| `/about/meet-the-team` | Full team overview |
| `/team/[slug]` | Dedicated landing page for each doctor and team group |
| `/services` | Eyecare services overview |
| `/services/[slug]` | Dedicated page for each of the 11 services |
| `/insurance` | Vision and medical insurance plans, coverage explainer |
| `/contact` | Contact form, location, hours, and FAQs |

All copy and structured data live in `lib/site.ts` so content edits do not
require touching page components.

## Before launch

- Replace placeholder portrait initials with real photography (doctors,
  team, office).
- Swap the text-mark logo in `components/Logo.tsx` for the official logo
  asset.
- Wire the contact form (`components/ContactForm.tsx`) to a real endpoint
  (Formspree, Netlify Forms, or an API route with email delivery).
- Replace the placeholder staff groups in `lib/site.ts` with real staff
  names, roles, and bios.
- Add a Google Maps embed on the contact page if desired.

## Style notes

- Brand palette: `#080808` (ink), `#0075A1` (brand blue), `#FFFFFF`,
  `#EDEDED` (mist), `#BCEDFF` (sky). Defined in `app/globals.css`.
- Fonts: Plus Jakarta Sans (headings) and Figtree (body) via `next/font`.
- Glass/frosted panels are the core visual motif, echoing the blurry vision
  vs. clear vision story. See `components/Glass.tsx` and `FocusDemo.tsx`.
- House style: no em dashes anywhere in site copy.

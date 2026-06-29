# Discovery Haven Kids Co. — Project Memory

## Brand
- **Name:** Discovery Haven Kids Co. Ltd
- **Tagline:** Where Intellectual Curiosity Meets Radical Confidence.
- **Short tagline:** Where Children Come Alive.
- **Email:** info@discoveryhaven.org
- **Website:** discoveryhaven.org

## Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `aqua` | `#05c3dd` | Primary CTA buttons, nav CTA, section labels, links |
| `yellow` | `#ffec00` | Secondary CTA, dates, newsletter section, badges |
| `dark` | `#1a1a1a` | Hero backgrounds, dark sections, body text |
| `crimson` | `#de2d10` | Summit/flagship event date bars |
| `cream` | `#f9f6f0` | Light background sections |
| `white` | `#ffffff` | Cards, testimonials |

## Typography
- **Headings (display):** `font-cherry` = Cherry Bomb One, cursive
- **Body / UI:** `font-body` = Nunito (400/500/600/700/800/900)
- **Text hierarchy:** font-cherry for H1/H2 (large), font-body bold for H3/labels, font-body regular for body/descriptions

## Tech Stack
- **Framework:** Vite + React
- **Styling:** Tailwind CSS v3
- **Routing:** React Router DOM v6
- **Payments:** Paystack (via window.PaystackPop, CDN in index.html)
- **Icons:** Lucide React
- **Components:** Custom shadcn-style components in src/components/ui/

## File Structure
```
src/
├── components/
│   ├── ui/          # Button, Badge, Card, SectionLabel, EnrollModal
│   └── layout/      # Navbar, Footer, Layout
├── pages/           # One file per route
├── hooks/           # usePaystack.js
├── lib/             # utils.js (cn helper)
└── data/            # content.js (all copy, events, courses, etc.)
```

## Pages & Routes
| Route | Page |
|-------|------|
| `/` | Home |
| `/haven-academy` | Haven Academy (4 courses) |
| `/haven-tribe` | Haven Tribe (community) |
| `/events` | Events (cohorts + summit) |
| `/about` | About Us |
| `/explorers` | Explorers (child-facing) |
| `/arts-culture` | Arts & Culture |
| `/impact` | Reports & Impact |
| `/advocacy` | Advocacy & SDGs |
| `/friends` | Friends of Discovery Haven |
| `/community-hour` | Community Hour (Calendly) |
| `/contact` | Contact |

## Courses
1. Creative Quest — Writing & Storytelling — Ages 8–14 — ₦45,000
2. Loud & Fearless — Public Speaking — Ages 9–15 — ₦45,000
3. The Curiosity Box — Critical Thinking — Ages 7–13 — ₦45,000
4. The EQ Lab — Emotional Intelligence — Ages 6–12 — ₦40,000

## Events
1. The EQ Lab cohort — June 2026 — 4 Weeks — ₦40,000
2. Creative Quest summer — August 2026 — 6 Weeks — ₦45,000
3. Children's Summit — November 2026 — Annual Flagship — ₦15,000

## Paystack
- Public key in `.env` as `VITE_PAYSTACK_PUBLIC_KEY`
- Hook: `src/hooks/usePaystack.js`
- Modal: `src/components/ui/EnrollModal.jsx`
- Script loaded in `index.html` via CDN

## Navigation (max 6 items)
About Us · Haven Academy · Haven Tribe · Events · Arts & Culture · Impact
Nav CTA: "Enrol Your Child" — aqua background, white text

## Design Principles
- Use `font-cherry` for all large display headings only
- Use `font-body` with `font-bold` for labels, CTAs, UI
- Cards: `rounded-2xl` with `shadow-sm`, `border border-gray-100`
- Buttons: `rounded-full` with `font-body font-bold`
- Section padding: `py-20` or `py-24` for major sections
- Max content width: `max-w-7xl mx-auto`
- SectionLabel: small caps, aqua, tracking-widest, uppercase

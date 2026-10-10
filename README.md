# IndeMove

An original, responsive mobility and home-accessibility website built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Lucide React. All catalog data is local. No database, authentication, analytics, or form backend is included.

## Run locally

Use Node.js 20.9 or newer (validated with Node 24).

```sh
npm install
npm run dev
```

The development server listens on port 3000. For a production check:

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Use `npm ci` to reproduce the committed lockfile. No environment variables or credentials are required. Local assets avoid image-host configuration and third-party requests.

## Project structure

- `app/`: homepage, products, eight category routes, services, rentals, home accessibility, about, resources, contact, privacy, terms, accessibility, sitemap, robots, loading and not-found states.
- `components/`: shared header/mobile navigation, footer, hero, cards, finder, catalog filters, forms, accordions, process, testimonials, service-area map, and mobile actions.
- `config/site.ts`: centralized company/contact details, hours, communities, team roles, canonical URL, social links, and lifestyle image references.
- `data/`: typed mock categories and 14 products, navigation, services, FAQs, and resource guides. Product imagery is referenced in product data.
- `public/images/`: original equipment SVG illustrations and an AI-generated lifestyle image used as an illustrative placeholder.
- `app/globals.css`: responsive styling, focus treatment, accessible controls, and reduced-motion support.

## Interactive behavior

The product finder uses three answers to suggest a non-medical starting point. Search and filters update the category grid with a helpful empty state. Consultation, service, and rental forms validate names, contact fields, and demo consent, then show a local success state. They make **no submission request** and persist no entered information. Prefer sample details. Rental and service links prefill the relevant inquiry. FAQ accordions use native HTML controls.

## Before launch

Replace or verify all of the following:

- Company name, tagline, phone, email, full address, hours, service area, and communities in `config/site.ts`.
- Reserved `.example` canonical URL and Open Graph content. The generated sitemap and JSON-LD currently contain placeholder information. Update the real business details before indexing.
- Mock product names, features, images, availability, rental terms, prices (`From $—`), delivery fees, and service capabilities.
- AI-generated lifestyle image and illustrated equipment placeholders with consented, licensed imagery of the real business and actual equipment. The people shown are not customers or staff.
- All three visibly labeled sample testimonials with verified customer reviews. Do not publish them as real reviews.
- Placeholder company story, values, technician/training claims, team roles, and social links. Social links currently open the contact demo rather than invent social accounts.
- Privacy, terms, consent wording, and accessibility statement after legal and accessibility review.
- Demo forms with a secure production submission flow, retention policy, spam protection, and monitored contact channel. Avoid collecting unnecessary health information.
- LocalBusiness/MedicalBusiness schema type to match the actual business; no awards, certifications, ratings, or reimbursement promises are claimed.
- `app/robots.ts` currently disallows indexing to protect placeholder business data. Enable crawling only after launch content is reviewed.

WCAG 2.2 AA is the design target, not a claim of certification. Complete manual keyboard, screen-reader, zoom, and assistive-technology review with the final content before launch. Insurance benefits vary and must be verified with the insurer. This company is not an emergency medical provider.

## Validation performed

- Locked dependency installation (`npm ci`), strict lint, TypeScript checking, and production build passed.
- Chromium checks passed on all 19 content routes: unique page titles, loaded images, 320px layout, and 720px reflow (equivalent layout width for 200% zoom on a 1440px desktop).
- Automated axe WCAG A/AA checks reported no violations on those routes. This does not establish complete WCAG conformance.
- Tested desktop and mobile navigation, Escape focus return, catalog search/filter/reset/empty state, all finder steps and restart, FAQ expansion, and validation plus local success for consultation, service, and rental forms.
- Verified homepage links, category 404 behavior, sitemap, robots, and the production server. No page execution errors occurred.
- Manual screen-reader testing and a full accessibility audit remain launch checks.

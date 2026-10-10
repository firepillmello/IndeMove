# Indemove

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

## Deploy a shareable preview from the private GitHub repository

The source repository can stay private while the deployed website is publicly viewable. A repository URL displays source code; it is not a running website.

1. Create a Vercel account at https://vercel.com/signup using your GitHub account.
2. Open https://vercel.com/new and authorize the Vercel GitHub integration for `firepillmello/IndeMove`. Grant access only to this repository if you prefer.
3. Import `firepillmello/IndeMove`, select branch `main`, and leave the root directory at the repository root.
4. Keep the detected **Next.js** framework and default build/output settings. No environment variables are needed. Click **Deploy**.
5. Open the deployment URL shown by Vercel and test the homepage, `/products`, a category page, and `/contact`.
6. In the project's Deployment Protection settings, confirm the deployment you intend to share does not require Vercel sign-in. Share its generated HTTPS URL. Protection defaults and available options can vary by plan.

Future pushes to `main` will redeploy when the GitHub integration is connected. The source stays private; anyone allowed to access the deployment can see the rendered website and its public assets. Demo forms still do not send requests, and placeholder content remains labeled. Search indexing is intentionally disabled by `robots.ts`.

A live preview has not been created until Vercel reports a successful deployment. No hosting account or deployment credentials are configured in this cloud workspace.

## GitHub Pages preview

A Pages workflow is included in `.github/workflows/pages.yml`. It builds a static export and deploys it when `main` changes. The expected project URL is `https://firepillmello.github.io/IndeMove/`.

For this **private repository**, GitHub Pages requires GitHub Pro, Team, or Enterprise as applicable. If Pages is unavailable on your plan, upgrade, deliberately make the repository public, or use another host; this setup does not change repository visibility.

To activate it:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy website to GitHub Pages** and choose **Run workflow** on `main` if no deployment is already running.
4. Wait for both build and deploy jobs to succeed, then open the URL reported by the deployment. A private source repository does not by itself restrict access to the published site.

```sh
npm run build:pages
```

This generates `out/` for Pages with the `/IndeMove` path prefix, local unoptimized images, and directory-style URLs. All interactive features run in the browser, so no server is needed. Standard `npm run dev` and `npm run build` retain the normal Next.js configuration for other hosts. If the repository or owner changes, update the path and URL in the `build:pages` command. The workflow needs Actions enabled and permission to deploy to the `github-pages` environment.

## Indemove profile and easier navigation

The profile is now based in Allentown, Pennsylvania, with Allentown and the Lehigh Valley as the service-area label. Bethlehem, Easton, Whitehall, Emmaus, and Macungie remain sample communities whose actual coverage must be confirmed. The street address, ZIP, phone, email, hours, and other business-specific details still require verification. The email is now `hello@indemove.example`, a reserved placeholder that cannot be mistaken for another company’s real address.

The interface uses larger everyday text, prominent phone help, four direct primary navigation choices, visual need cards, large form/finder controls, and responsive picture-and-label category rows. Validation passed: lint, TypeScript, the Pages production build, 19-route responsive checks at 320/375/720/1024/1440px, automated WCAG A/AA scans, and navigation/form/finder checks. A separate browser check verified the final Allentown/PA address, Indemove titles and email, JSON-LD, and mobile layouts.

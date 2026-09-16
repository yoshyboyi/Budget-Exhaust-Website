# Budget Exhaust — Website Rebuild

A modern rebuild of the Budget Exhaust (Bankstown, Sydney) website, preserving the
business's real history, services and NAP data while replacing the outdated WordPress
site with a fast, mobile-first Next.js site.

**This is a foundation, built to become the production site — not a mockup.** It has
been installed and build-tested (`npm run build` passes cleanly). It does **not**
touch the live site at `budgetexhaust.net.au`; deploy it to a separate staging URL
first (see Deployment below).

---

## 1. What's real vs. placeholder

Everything in `lib/business.ts` (name, address, phones, email, hours, 1980
establishment date, 2005 relocation, owner name, services list, brand list) was
sourced directly from the live site at budgetexhaust.net.au. Nothing was invented.

Placeholders that need real content before launch:
- **All photography** — every image slot is a clearly labelled `ImagePlaceholder`
  component (dashed border, "Image needed" tag) rather than a stock photo. See
  §6 "Assets needed from the owner" below.
- **Reviews** — the reviews section is intentionally empty with a link to the
  business's Google listing, because no reviews were supplied.
- **Weekend hours** — the current site only lists Mon–Fri 8am–5pm. If the shop is
  open Saturdays, that needs confirming (flagged in `lib/business.ts`).
- **Brand dealer status** — only XForce is stated as an "authorised dealer" on the
  existing site. Every other brand is listed as "brands we work with," not as a
  dealer/partner claim, until confirmed otherwise.
- **ABN** — footer has a placeholder note; add once supplied.

## 2. Sitemap (proposed)

```
/                     Home
/services             All services, card grid
/performance-exhaust  Performance exhaust deep-dive + quote form
/mufflers             Standard & classic muffler repair/replacement
/4wd-exhaust          4WD & light truck exhaust
/about                History, timeline, owner
/gallery              Workshop photos + before/after
/brands               Brands & suppliers
/contact              NAP, hours, map, quote form
/privacy, /terms      Legal placeholders
```

Deliberately **not** rebuilding the old site's dozens of thin per-suburb "area"
blog pages (e.g. `/area/best-exhaust-shop-sydney-in-como/`). Recommendation: 301
redirect the suburb pages that have any real search traffic/backlinks to the most
relevant service page, and let the rest drop — see §5 SEO migration.

## 3. Design system

- **Colour**: near-black `#0E0F12` (base), navy `#171C29` (panels), orange
  `#FF5A2E` (brand accent, derived from the existing logo), white/off-white
  `#F5F5F3`, steel greys for muted text and hairline borders. No gradients, no
  glassmorphism, sharp corners with 1px borders rather than shadow-and-radius
  "SaaS card" styling.
- **Type**: Oswald (condensed, industrial) for headings/display, Inter for body
  — a deliberate automotive-dashboard pairing, not a generic sans/serif combo.
- **Layout**: angled ("panel-cut") hero image edge referencing automotive body
  panels; a genuine chronological timeline for the About/history section (not a
  decorative numbered list); hairline-bordered service cards instead of soft
  drop-shadow cards.
- Full token definitions live in `tailwind.config.ts`.

## 4. Tech stack

- **Next.js 14 (App Router) + TypeScript** — static generation for every
  marketing page (fast, cheap to host, great SEO), one dynamic API route for the
  quote form.
- **Tailwind CSS** for styling, tokens defined once in `tailwind.config.ts`.
- No CMS for v1 — content lives in `lib/business.ts` as a single typed source of
  truth. This keeps the site fast and cheap to run. If the owner wants to edit
  copy/photos themselves without a developer, revisit adding a lightweight
  headless CMS (e.g. Sanity) — flagged as a future option, not built by default.

## 5. SEO migration strategy

1. **Preserve indexed value**: before launch, export the current site's indexed
   URLs (Google Search Console → Pages) and any pages with real backlinks or
   traffic.
2. **Redirect map**: `next.config.mjs` already 301-redirects `/about-us`,
   `/contact-us`, and `/muffler-brands/:slug` to their new equivalents. Extend
   this list with every indexed old URL once the export from step 1 is available
   — this is the single most important step for not losing rankings.
3. **Structured data**: `AutomotiveBusiness` (LocalBusiness) schema is injected
   site-wide (`lib/schema.ts`), plus `Service` schema available per service page.
   FAQ schema was intentionally left out — the old site had no genuine FAQ
   content to source it from.
4. **On-page SEO**: unique `<title>`/meta description per route (see each
   `page.tsx`), canonical URLs, `sitemap.xml` and `robots.txt` generated
   automatically (`app/sitemap.ts`, `app/robots.ts`).
5. **Content**: rewritten in plain, customer-facing language rather than the
   repetitive "muffler shop Sydney" keyword strings on the old site. Keywords
   are still present naturally (suburb, service names) without stuffing.
6. **Don't rebuild the thin suburb pages.** Redirect the handful with real
   value; let the rest 410/404 gracefully.

## 6. Assets & information needed from the owner

- [ ] Real photography: workshop exterior, workshop bays, welding/install
      close-ups, 4WD/performance/classic jobs, before-and-after pairs, chrome
      tips — see `/public/images/{hero,services,gallery,brands,about}` for
      where each should live.
- [ ] Confirmation of Saturday/Sunday opening hours (or confirm closed).
- [ ] ABN / business registration number for the footer.
- [ ] Permission + source for displaying real Google reviews (or a Google
      Places API key to pull them live).
- [ ] Confirmation of current authorised-dealer status for any brand beyond
      XForce.
- [ ] A logo file (current site logo is a low-res JPEG — a vector or high-res
      PNG/SVG would look far sharper in the new nav/footer).
- [ ] Decision on `cheapexhausts.net.au` — not used anywhere in this build; the
      site is fully brand- and domain-agnostic via `NEXT_PUBLIC_SITE_URL`.
- [ ] Quote-form destination: an email address or a form-relay service
      (Formspree/Resend/etc.) to set as `QUOTE_FORM_ENDPOINT` in `.env.local`.

## 7. Project structure

```
app/            Routes (App Router) — one folder per page, plus app/api/quote
components/     Reusable UI (Navbar, Footer, QuoteForm, ServiceCard, etc.)
lib/            business.ts (single source of truth for all facts), schema.ts
public/images/  Placeholder folders for real photography
```

## 8. Running locally

```bash
npm install
cp .env.example .env.local   # fill in QUOTE_FORM_ENDPOINT etc. when ready
npm run dev                  # http://localhost:3000
npm run build && npm run start   # production build
```

## 9. Deployment plan

1. Push this repo to GitHub (private, until launch).
2. Connect the repo to Vercel (or similar) → this gives an automatic **staging
   URL** (e.g. `budget-exhaust-xyz.vercel.app`) with every push previewed
   automatically. The live production domain is **not** touched at this stage.
3. Set environment variables in the hosting dashboard from `.env.example`.
4. Share the staging URL with the owner for approval.
5. Once approved: point `budgetexhaust.net.au` DNS at the new host, re-verify
   Search Console, submit the new sitemap, and confirm all redirects from §5
   are live *before* switching the domain over.
6. Keep the old WordPress site's hosting active (read-only) for a few weeks
   after cutover as a safety net.

## 10. Git commit suggestions (already structured this way conceptually)

```
Initial project architecture
Add design tokens and global styles
Build homepage sections
Add responsive navigation and mobile CTA bar
Add service, performance, mufflers and 4WD pages
Add about page and history timeline
Add gallery and before/after sections
Add contact page, quote form and API route
Implement SEO (metadata, schema, sitemap, robots, redirects)
```

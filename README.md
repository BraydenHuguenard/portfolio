# Brayden Huguenard’s portfolio

React + Vite portfolio at [braydenhuguenard.com](https://braydenhuguenard.com/).

## Development

Use Node 22.19+ (Node 24 LTS recommended for the audit tools).

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Deploy the `dist/` directory through the existing hosting provider. This update does not deploy or change the live domain.

## Content

Professional experience and skills live in `src/data/experience.js`; education, coursework, and projects live in the neighboring data files. The active resume is `public/assets/Fall-2026-Resume.pdf`. Update the navbar and footer when replacing that file.

The September 2026 refresh uses the supplied Fall 2026 resume and September 14, 2026 transcript, plus the publicly readable [LinkedIn profile](https://www.linkedin.com/in/brayden-huguenard/). The newer resume takes precedence over the older LinkedIn graduation date. Current courses are explicitly marked in progress. Existing project and high-school details were retained. No transcript, date of birth, or student identifiers were copied into the website.

## Repeatable checks

With the production preview running on port 4173, run the Lighthouse audits one at a time:

```sh
npm run audit:mobile
npm run audit:desktop
npm audit
```

The commands save HTML and JSON reports in `reports/`. Lighthouse requires Chrome. A score is a measurement of that build, browser, and environment; hosting and network conditions can change results.

For additional tests, run:

```sh
npm run audit:browser
```

Open `http://127.0.0.1:4174/__audit` and press **Run accessibility tests**. The local-only harness tests the production build with axe-core (WCAG 2.0/2.1/2.2 A/AA tags and best practices), opens every dialog, checks focus entry and restoration, exercises the gallery, checks local resources, and verifies no horizontal overflow at 1280, 768, 390, and 320 CSS pixels. It saves `reports/browser-audit.json`. The harness and audit library are not included in the production build.

Also manually verify Tab and Shift+Tab, the skip link, Escape dismissal, gallery buttons, zoom/reflow, and screen-reader announcements. Native `<dialog>` provides modal semantics and makes the background inert; explicit Tab handling wraps focus and closing restores the trigger. Reduced-motion preferences disable smooth scrolling. Controls have visible focus outlines and meaningful accessible names matching their visible labels.

## Accessibility scope

See `reports/verification.md` for the recorded results and limits. These checks are not a legal certification of ADA compliance or a full WCAG conformance evaluation. The linked resume PDF and external sites have separate accessibility characteristics. A full screen-reader and PDF accessibility review remains appropriate. The website itself uses no analytics, forms, cookies, embedded video, or third-party fonts; links to external sites load only when followed.

The production host must separately provide HTTPS, appropriate security headers, correct caching, and a real 404 response for missing pages. Local Lighthouse results do not establish those deployment properties.

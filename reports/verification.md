# Portfolio verification

Verified September 17, 2026 (America/New_York), against the local production build. Changes are not deployed.

## Lighthouse 13.4.1

| Category | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Agentic Browsing | 100 | 100 |

Mobile run: 2026-09-18T00:50:05.049Z. Desktop run: 2026-09-18T00:50:43.425Z. Reports: [mobile](lighthouse-mobile.report.html), [desktop](lighthouse-desktop.report.html). Default mobile simulated throttling and desktop preset; no audit rules disabled.

## Accessibility and interactions

- 165 checks passed; 0 failed.
- 29 axe-core 4.13.0 scans with zero automatically detected violations: four page widths and all 25 dialogs. WCAG A/AA through 2.2 and best-practice tags.
- No horizontal page overflow at 1280, 768, 390, or 320 CSS pixels, including 200% text size and WCAG text-spacing settings at 320 pixels.
- Every dialog opens modally, receives focus, fits the narrow viewport, restores the trigger's focus, and restores scrolling on close.
- Gallery next/previous and wrapping, and local resume/image URLs passed.
- Separate real keyboard checks verified the skip link focuses main content, Shift+Tab and Tab wrap within the Nomad dialog, and Escape closes the dialog and restores focus.
- Desktop and narrow-screen layout inspected visually. Portrait and screenshot descriptions checked against the actual images.
- Build, ESLint, git diff whitespace check, and npm audit passed; zero reported dependency vulnerabilities.

### Manual-review items

Axe returned color-contrast items as incomplete for gradient backgrounds and some dialog text. Source colors were checked separately using WCAG relative luminance calculations: the tested body/heading/muted/link text colors have minimum ratios between 5.87:1 and 13.42:1 against the darkest hero gradient endpoint; these colors also pass on the white dialog backgrounds. No ARIA manual-review findings remain. This is not a substitute for a full assistive-technology evaluation.

### Scope and limits

A score of 100 is specific to this checker, build, and environment. It does not certify compliance with every accessibility or privacy law. A full screen-reader assessment, PDF accessibility audit of the supplied resume, and checks of the deployed HTTPS configuration, response headers, cache behavior, missing-page responses, and external content remain outside this local audit. See the [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/) for conformance requirements.

## Content decisions

The Fall 2026 resume supplies current roles, project results, skills, and expected graduation dates (B.S. December 2026; M.S. May 2028). The September 14 transcript verifies the 4.0 GPA and distinguishes completed coursework from Fall 2026 Computer Vision, Deep Learning, and Cognitive Science. The publicly readable LinkedIn profile corroborates project awards and prior background; its older 2027 undergraduate date was superseded by the newer resume. Signed-in browser access was unavailable; no private LinkedIn fields were used. Existing high-school and earlier project details were retained. The transcript itself was not published.

## Build fingerprints

- `index-D6tL593q.css`: `1ad195c2bda551d86671cb5b04108d2675559585d51c8cccfd4cea8a66370676`
- `index-TSGs7ZHB.js`: `982da899329caac596becad79c1622e1e64e0c263238e5270d0896fba877e8ba`

## Reproduction

See [README](../README.md) for Node requirements and the Lighthouse and browser-audit commands. The audit harness stays outside the deployed build.

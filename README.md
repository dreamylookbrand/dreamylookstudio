# Dreamy Look Studio & Academy: Website

Black-and-gold website for **Dreamy Look Studio & Academy**, Firozabad, Uttar Pradesh.
Built with HTML, CSS, vanilla JavaScript (ES modules) and Vite. No backend, database or paid service is needed.

## What was tested
Performed while building: production build (`npm run build`), every image/link path in the built page exists, no horizontal overflow at 320 / 390 / 768 / 1024 / 1440 px, gallery filters, "View all photos", lightbox (arrows + Escape), form validation, WhatsApp links (number + encoded message), mobile menu, floating WhatsApp button fixed bottom-left.
**Not tested / not possible here:** the Google Maps embed and live Google reviews (no internet in the build environment), your Facebook and YouTube URLs, Lighthouse scores, real deployment, DNS, Search Console, indexing. Please check those yourself after deploying.

## 1. Run locally
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder: `npm install`
3. `npm run dev` then open the URL shown (usually http://localhost:5173)
4. Production build: `npm run build` (output goes to `dist/`), preview it with `npm run preview`

## 2. Where to change things
| What | File |
|---|---|
| Phone, WhatsApp number, email, address, hours, Maps link, social links, WhatsApp messages | `src/config/business.js` |
| Services (names, chips, WhatsApp text) | `src/data/services.js` |
| Gallery photos and categories | `src/data/gallery.js` |
| Google reviews text (optional) | `src/data/reviews.js` |
| SEO title / description / structured data | `src/seo.js` |
| FAQ questions | `src/sections/faq.js` |
| Colours and fonts | `src/styles/variables.css` |
| Domain in canonical / sitemap / robots | `src/config/business.js`, `public/sitemap.xml`, `public/robots.txt` |

### Add a photo
1. Make three WebP copies of the photo (3:4 portrait works best) named `my-photo-480.webp`, `my-photo-800.webp`, `my-photo-1200.webp` (widths in pixels) and put them in `public/images/bridal/` (or `makeup`, `hairstyles`, `nail-art`, `academy`, `studio`).
2. Add one line to `src/data/gallery.js`: `item('bridal', 'my-photo', 'bridal', 'Describe the photo for screen readers and Google')`.
3. Categories: `bridal`, `reception`, `party`, `haldi`, `studio`.

### Replace the logo
Replace `public/images/logo/dreamy-look-logo-gold-*.webp` (120, 240, 480, 800 px wide), `public/favicon.png` and `public/apple-touch-icon.png`, and the social image `public/images/social/og-dreamy-look-studio.jpg` (1200x630).

### Change a WhatsApp message
Edit `waMessages` in `src/config/business.js`. Messages are encoded automatically with `encodeURIComponent`.

### Instagram QR
`public/images/social/instagram-dreamylookstudio-qr.svg` points to https://www.instagram.com/dreamylookstudio/. If the profile URL changes, generate a new QR and replace this file.

## 3. Asset map (what was used from the uploaded files)
| Upload | Used as |
|---|---|
| Golden DL logo (square JPEG) | `public/images/logo/`, favicon, social image |
| Portrait of Lovely | `public/images/owner/` ("Meet Lovely") |
| Red lehenga bride set | `public/images/bridal/` (gallery + hero + services) |
| Red saree bride set | `public/images/bridal/` |
| Lavender lehenga set | `public/images/makeup/`, `hairstyles/` (category "Reception & Engagement") |
| Black dress set | `public/images/makeup/`, `hairstyles/` ("Party Makeup") |
| Pink haldi/mehndi set | `public/images/makeup/` ("Haldi & Mehndi") |
| Photos with another person beside the client | `public/images/studio/` ("At the Studio"), no names are claimed |
| Google services screenshots | Service names in `src/data/services.js` |

Full-size originals are kept untouched in `originals/` (not uploaded to GitHub, see `.gitignore`). No nail-art or academy photos were supplied, so those folders are empty and the Academy section uses the logo. Add real photos later.

## 4. Google reviews
Showing live Google reviews inside the page needs Google's paid/keyed Places API or a third-party widget, which this project avoids. Instead:
- The map embed and the "See Google reviews" / "Leave a review" buttons open your real Google listing.
- To show specific reviews on the page, paste the exact text with the reviewer's name in `src/data/reviews.js`. Do not edit or invent reviews.

## 5. Deploy: GitHub + Cloudflare Pages + custom domain

This project is a static Vite site. Cloudflare Pages builds it from the GitHub repository.

### Build settings
- Production branch: `main`
- Framework preset: `None` (this is Vanilla JavaScript + Vite, not React)
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank when `package.json` is in the repository root
- Environment variables: none are required for the current static site

### Connect GitHub to Cloudflare Pages
1. Push the complete contents of this project to the root of the GitHub repository. The `index.html`, `package.json`, `vite.config.js`, `src/` and `public/` must all be at the repository root level.
2. In Cloudflare Dashboard, open **Workers & Pages > Create application > Pages > Import an existing Git repository**.
3. Authorize the GitHub account and select the repository.
4. Enter the build settings above, then choose **Save and Deploy**.
5. After a successful deployment, Cloudflare provides a `*.pages.dev` URL for checking the site.
6. In the Pages project, open **Custom domains** and add `dreamylookstudio.in` (also add `www.dreamylookstudio.in` if you want both hostnames).
7. Follow the exact DNS instructions Cloudflare displays. Do not guess or delete existing mail-related MX/TXT records. HTTPS is provisioned after the domain is correctly connected.

New commits to the connected `main` branch trigger automatic deployments. The `vercel.json` file, if present, is not used by Cloudflare Pages.

## 6. Google Search Console
1. Open https://search.google.com/search-console/ and sign in with the Google account that should own the site.
2. **Add property > Domain** and enter `dreamylookstudio.in`.
3. Google shows a TXT record. Add exactly that record in the active DNS provider, then click Verify.
4. Under **Sitemaps**, submit `sitemap.xml` (the full URL is `https://dreamylookstudio.in/sitemap.xml`).
5. Under **URL inspection**, test `https://dreamylookstudio.in/`, then request indexing if the live test succeeds.
6. Review the **Pages** and **Performance** reports over time. Indexing and ranking are not immediate or guaranteed.

## 7. Local SEO: Google Business Profile checklist (for Lovely)
Official: https://business.google.com/
- [ ] Search for "Dreamy Look Studio & Academy" and **claim/verify the existing profile** (do not create a duplicate).
- [ ] Name, address, phone (+91 9368707072), hours (daily 8 AM to 10 PM) and website (https://dreamylookstudio.in/) match this site exactly.
- [ ] Pick the right primary category (for example Beauty salon or Makeup artist) and add secondary ones that really apply.
- [ ] Upload genuine photos: bridal work, Lovely, the studio. Ask clients before posting their photos.
- [ ] Keep the services list up to date.
- [ ] Ask happy customers for honest reviews (no payment, gifts or fake reviews). Reply to every review politely.
- [ ] Link the official website and keep the Instagram link consistent.

Rankings depend on relevance, distance and prominence among other things. No position can be promised.

## 8. Notes and things to confirm with the owner
- Facebook and YouTube links come from the original brief; only Instagram was confirmed by you. Open them to check they work, or remove them in `business.js` and `footer.js`.
- Prices, offers, course fees, certificates and batch dates are intentionally **not** shown. Add only what the owner confirms.
- The domain is assumed to be `https://dreamylookstudio.in/`. Change it in `business.js`, `sitemap.xml` and `robots.txt` if different.
- Coordinates in the structured data come from your Google Maps link.
- WhatsApp opening does not confirm an appointment; the form says so.

## Project structure
```
public/            static files: robots.txt, sitemap.xml, favicon, images
src/config/        business.js (central details)
src/components/    header, footer, whatsapp, lightbox, gallery filter, accordion, form ...
src/sections/      hero, owner, about, services, gallery, academy, testimonials, appointment, location, faq
src/data/          services.js, gallery.js, reviews.js
src/styles/        variables, reset, global, layout, components, sections, responsive
src/render.js      builds the page HTML (pre-rendered at build time for SEO)
vite.config.js     injects pre-rendered HTML and SEO tags
```

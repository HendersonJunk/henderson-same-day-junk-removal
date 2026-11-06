# Henderson Same Day Junk Removal — website

Static site for Henderson's Junk Removal (Fort Lauderdale & Broward County), deployed with GitHub Pages.

- **Live site (after Pages is enabled):** `https://<github-username>.github.io/henderson-same-day-junk-removal/`
- **Phone:** 443-925-1267 — `tel:+14439251267`
- **Email:** devanteh36@gmail.com
- **Hours:** Mon–Sat 7 AM–7 PM, Sunday closed
- **Service areas:** Fort Lauderdale, Plantation, Lauderhill, Coral Springs, Davie, Sunrise, Oakland Park, Wilton Manors, Pompano Beach
- **Services:** furniture removal, appliance removal, full property cleanouts, construction debris, yard debris. No hazardous waste / chemicals / asbestos / medical waste.
- **Pricing:** typical ranges on the site match the Oct 29, 2026 price reference card (`workspace/goals/more-jobs-for-henderson-s-junk-removal/files/price-reference-card.md`). Exact quote is always free, confirmed before work starts.

## Files

- `index.html` — the whole site (hero, quote form, services, pricing, areas, FAQ)
- `styles.css`, `script.js` — styling + quote form (opens a pre-filled SMS to Devante; no backend, no data stored)
- `.nojekyll` — tells GitHub Pages to serve files as-is
- `.github/workflows/pages.yml` — deploys on every push to `main`

## Deploy / update

1. Push to the `main` branch of the GitHub repo.
2. In GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**. The workflow deploys automatically.
3. Edits: change the files here, push again, Pages rebuilds in ~1 minute.

## What still needs Devante

- Google Business review link (not public yet) — add it to the site once he pastes it from the Google Business app, so customers can leave a review in one tap.
- Real photos of jobs/truck — swap in when he shares them.

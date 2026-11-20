# aimeetup.tech

Static website for **AI Meetup Community (AI Keralam)**. Plain HTML/CSS/JS, no build step.

## Deploy on GitHub Pages
1. Create a repo (e.g. `aimeetup-site`) and push these files to the `main` branch root.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. The `CNAME` file already contains `aimeetup.tech`. At your DNS provider add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
4. In Settings → Pages, tick **Enforce HTTPS** once the certificate is issued.

## Edit content
- Join link & share URL: `js/main.js` (`CONFIG`)
- Events: the *Sessions* section of `index.html` (copy the `.event` block per session)
- Colours: CSS variables at the top of `css/style.css`

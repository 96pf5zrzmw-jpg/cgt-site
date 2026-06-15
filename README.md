# CGT — Marketing Site

Static HTML/CSS/JS site for CGT solar-still technology.

## Structure
```
cgt-site/
├─ index.html    # page structure + content
├─ styles.css    # all design tokens (CSS variables) + components
├─ script.js     # minimal interactivity (nav, form, year)
├─ assets/       # images, logo
└─ README.md
```

## Run locally
Open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)
1. Create a GitHub repo named `cgt-site` and push this folder.
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`.
3. Live at `https://<username>.github.io/cgt-site/` in ~1 minute.

## Editing tips (token-efficient with Claude)
- **Restyle** → edit only the `:root` variables in `styles.css`.
- **Change copy** → edit only `index.html` text, or ask Claude for changed lines only.
- **One concern per request.** See Notion → CGT → "04 Build & Token Strategy".

## Git quick start
```
git init
git add .
git commit -m "feat: initial CGT site"
git branch -M main
git remote add origin https://github.com/<username>/cgt-site.git
git push -u origin main
```

# Spanish Classes Singapore

Website for [spanishclasses.sg](https://spanishclasses.sg). Plain HTML, CSS and JavaScript. No build step, no framework, no dependencies.

## What's in here

```
index.html               the site
404.html                 page-not-found page
assets/css/styles.css    all styles
assets/js/main.js        settings, translations, language detection, interactions
assets/img/              photos (hero.jpg, home.jpg, classroom.jpg)
assets/brand/            logo files, favicon, Apple touch icon
robots.txt, sitemap.xml, site.webmanifest
.do/app.yaml             DigitalOcean App Platform spec
```

## Before going live

1. Open `assets/js/main.js` and edit the `CONFIG` block at the top:
   - `whatsapp`: country code and number, no `+` or spaces (for example `6591234567`)
   - `calendarUrl`: the booking link for a free call or trial
   - `classroomAddress`: the classroom address, or leave `''` to hide it
   - `email` is already set to `support@spanishclasses.sg`
2. Put three photos in `assets/img/` with exactly these names:
   - `hero.jpg` (portrait, about 1136 x 1408)
   - `home.jpg` (landscape 2:1, about 1600 x 800)
   - `classroom.jpg` (landscape 2:1, about 1600 x 800, also used as the social share image)

   Keep each under about 300 KB (export at JPG quality 75 to 80). If a photo is missing, the site shows a neat placeholder instead of a broken image.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Paths start with `/`, so open it through a server rather than double-clicking the file.

## Deploy on DigitalOcean App Platform

1. Push this folder to a GitHub repo named `spanishclasses-sg`.
2. In DigitalOcean: **Create > Apps > GitHub**, pick the repo and the `main` branch, and tick **Autodeploy**.
3. DigitalOcean detects a static site. Leave the build command empty and the output directory as `/`. Set the error document to `404.html`.
4. Choose the **Singapore (sgp)** region.
5. Under **Settings > Domains**, add `spanishclasses.sg` and `www.spanishclasses.sg`, then add the DNS records DigitalOcean shows you at your domain registrar. HTTPS is issued automatically.

Or use the spec instead: replace `YOUR-GITHUB-USERNAME` in `.do/app.yaml`, then run `doctl apps create --spec .do/app.yaml`.

Every push to `main` redeploys the site.

## Editing text and translations

All visible text lives in the `T` object in `assets/js/main.js`, one block per language: `en`, `zh`, `ms`, `id`, `ja`, `es`. Change the English and the matching line in each other language. The FAQ is the `faq` list inside each block.

The site picks a language automatically: a saved choice first, then the visitor's time zone (Singapore always gets English), then their browser language, then English. Visitors can switch with the globe button.

## Prices

Prices appear in `index.html` (the price cards and the level ladder) and in the translations (FAQ answers, `lv_note`). Update both if they change.

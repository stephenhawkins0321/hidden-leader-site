# The Hidden Leader

Static affiliate site. Edit `/assets/affiliates.js` to paste your real affiliate links.

## Quick Launch (GitHub Pages)
1. Create a new repo and upload these files.
2. Push to `main`.
3. In **Settings → Pages**, set **Source: GitHub Actions** (or just push and the included workflow will deploy).
4. Your site will appear at `https://<your-username>.github.io/<repo>/`.

## Where to put your affiliate links
Open **/assets/affiliates.js** and replace the placeholder links:
```js
window.LINKS = {
  "adjustable-dumbbells": "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20",
  "dayspring-devotionals": "https://your-impact-or-shareasale-link"
};
```
Every `<a data-aff="slug">` will be swapped automatically.

## Write more posts
Add new `.html` files in `/posts/` and they will be listed on `/posts/`.

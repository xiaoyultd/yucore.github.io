# Yucore Industrial Website and Private Lead System

This package is ready for GitHub Pages.

Files:

- `index.html` - public display website for Russian industrial buyers.
- `system.html` - private lead system for your own use.
- `styles.css` - shared visual design.
- `app.js` - product keywords, lead library, dedupe logic and sales messages.

## How to use locally

Open `index.html` for the public website.

Open `system.html` for the private system.

Default password:

```text
summer2026
```

Change password in `app.js`:

```js
const PRIVATE_PASSWORD = "summer2026";
```

## Private system functions

- Generate 30 research targets.
- Open Yandex Maps and Yandex Search by city, industry and product.
- Import real leads in bulk.
- Compare new leads with the saved library before importing.
- Deduplicate by email, website and phone.
- Store company profile fields: company, website, email, phone, city, industry, product, contact person, position, INN/tax number, address, source and notes.
- Export the full lead library as CSV.
- Copy greeting, expansion and maintenance sales messages.

Import format:

```text
Company | Website | Email | WhatsApp/Phone | City | Industry | Products | Contact person | Position | Source | Notes
```

## Important privacy note

This is a static GitHub Pages website. The password is a front-end local lock, not a real server login. For stronger privacy, use a private GitHub repository or host `system.html` somewhere only you can access.

The system stores data in your browser local storage. If you clear browser data or use another computer, the local library will not automatically follow you. Use `Export CSV` regularly as backup.

Static GitHub Pages cannot automatically crawl Yandex Maps or customs databases. It provides search links, storage, dedupe, workflow and sales copy. Real automated crawling requires a backend server, proper APIs and compliance handling.

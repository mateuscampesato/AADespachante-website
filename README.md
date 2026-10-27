# Airton Vieira & Andrea Pedroso — static website

A guided starter for React, Vite and Tailwind CSS. We will build the page and its interactions together in small steps; this project currently contains the setup and an intentionally empty page entry point.

## Start here

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local address shown by Vite. To generate and preview the static site:

```bash
npm run build
npm run preview
```

## Our build sequence

1. **Structure:** add the header, hero, services, team introduction and footer in `src/App.jsx`. We will start with one page and anchor links.
2. **Visual identity:** apply navy `#062B55`, night blue `#08172C`, gold `#CBA34F` and ivory `#F7F4EC`. Use Montserrat for body copy and Oswald for short headings. The fonts still need to be loaded in the styling step.
3. **Content and images:** refine the copy and choose images approved by the business. The pack names São Caetano do Sul - SP and lists licensing, vehicle transfer, first registration and driver's licence renewal.
4. **Interactions:** connect contact buttons to the official WhatsApp/phone details and make the small-screen menu work. This is a static site, so it will not need a server or database.
5. **Review:** check responsive behavior, basic accessibility and links, then generate the `dist` folder.

## Where to work

- `src/App.jsx`: page sections and components.
- `src/index.css`: Tailwind import and initial brand tokens.
- `index.html`: language, page title and search description.
- `public/`: add approved logos and photos here; files in this folder are published as-is.

## Direction from the brand pack

The pack recommends blue as the base, gold for accents, and ivory for breathing room, with generous margins, high contrast and few elements per composition. It identifies the business as “Airton Vieira & Andrea Pedroso — Despachante” in São Caetano do Sul - SP. Confirm the official phone, WhatsApp, full address, opening hours and services before publishing.

## Official setup references

- Vite: https://vite.dev/guide/
- Tailwind CSS with Vite: https://tailwindcss.com/docs/installation/using-vite

## Extracted brand assets

The PDF artwork is in `public/images/` and can be referenced from React with root-relative URLs:

```jsx
<img src="/images/logo-airton-andrea.png" alt="Airton Vieira & Andrea Pedroso Despachante" />
```

- `logo-airton-andrea.png`: circular logo extracted from the identity page, with its outer white background made transparent.
- `brand-kit-feed-template.png`: feed post composition from the kit (includes its original promotional copy).
- `brand-kit-story-template.png`: story composition from the kit (includes the existing frame and branding).

The feed and story files are social media templates, not general-purpose photos. For the website, use the logo and build page sections with editable HTML text so they remain responsive and accessible.

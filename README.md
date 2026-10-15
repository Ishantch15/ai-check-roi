# ROI Spectrum — 2027 AEO Performance Checklist

Simple React (Vite) page: an interactive checklist with a sticky consultation form.

## Run locally
    npm install
    npm run dev

## Build for hosting
    npm run build      # output in /dist — upload to any static host (Netlify, Vercel, cPanel, etc.)

## Things to edit
- **Checklist text, expert bio, email:** `src/data.js`
- **Logo:** `public/logo.png`
- **Expert photo:** add `public/zeeshan.jpg` (portrait, ~600x750). Until then, "ZS" initials show.
- **Colours / layout:** `src/index.css`

## Form emails
Submissions are sent through FormSubmit.co to `digvijay@roispectrum.com` (no backend).
The FIRST submission from the live domain triggers a one-time activation email to that
address — click "Activate Form" in it, then all later submissions arrive normally.

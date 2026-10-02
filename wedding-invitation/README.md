# Wedding Invitation

Frontend-only wedding invitation built with React + TypeScript + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite. With the configured GitHub Pages base, the invitation route is:

`http://localhost:5175/wedding-invitation/#/invite/kasun`

Other sample guests:

- `#/invite/kasun`
- `#/invite/kasun-nadeesha`
- `#/invite/perera-family`

## Important asset fix

Images are stored in `public/images` and are referenced with `import.meta.env.BASE_URL`. Therefore they work both locally and under the GitHub Pages repository path `/wedding-invitation/`.

## Change wedding details

Edit `src/config/wedding.config.ts`.

## Add guests

Edit `src/data/invitations.ts`.

Example:

```ts
{
  slug: 'perera-family',
  displayName: 'Perera Family',
  invitationType: 'family',
  maxGuests: 5
}
```

## Add music

Place the file at `public/music/wedding-music.mp3`.

## RSVP email

`src/services/rsvpService.ts` is currently a safe placeholder. Connect it to a client-side email/form provider such as EmailJS, Formspree, or Web3Forms. Never expose private SMTP credentials or secret API keys in a frontend app.

## GitHub Pages

The Vite base is `/wedding-invitation/`. If your GitHub repository has another name, change `base` in `vite.config.ts`.

HashRouter is used so invitation links work on GitHub Pages without a server-side route configuration.

Example deployed URL:

`https://YOUR_USERNAME.github.io/wedding-invitation/#/invite/kasun`

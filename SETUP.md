# Running this project in Google Antigravity (or any editor)

1. Unzip `shafaf-portfolio-code.zip`.
2. Open the extracted folder in Google Antigravity (File → Open Folder).
3. Copy `.env.example` to `.env` (the values are already filled in — they are
   public, publishable keys, safe to use).
4. Install dependencies and start the dev server:

   ```sh
   bun install
   bun run dev
   ```

   (Node.js + npm also works: `npm install` then `npm run dev`.)

5. Open http://localhost:8080 in your browser.

## Notes

- The portfolio images live under `src/assets/` as small pointer files that
  reference the hosted images. Keep the `.env` URL settings as-is and the
  images will load.
- The contact form saves enquiries to the Lovable Cloud database. That keeps
  working from your local dev server as long as the `.env` values are present.
- Database migrations are in `supabase/` for reference; the live database is
  managed by Lovable Cloud.

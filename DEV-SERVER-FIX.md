# Dev server fix

- `server.ts` now honors `process.env.PORT` and falls back to `3000`.
- The Express listener reports startup errors instead of leaving an unhandled promise.
- The listener remains on `0.0.0.0`, suitable for hosted development environments.
- The existing Vite middleware remains unchanged as the SPA development layer.

Start with `npm run dev`. If the platform provides `PORT`, that port is used automatically.

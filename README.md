# SORI:ON Homepage

SORI:ON homepage for YULLAB's ESE-based analysis app platform.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Vercel deployment target

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
public/
  pansorigo-app-icon-square.png
  voxgo-symbol-icon-square.png
  ...
package.json
vercel.json
next.config.ts
```

## Local Development

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
pnpm run build
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. In Vercel, choose `Add New Project`.
3. Import the GitHub repository.
4. Use these settings:
   - Framework Preset: `Next.js`
   - Install Command: `pnpm install`
   - Build Command: `pnpm run build`
   - Output Directory: leave empty
5. Deploy.

## Domains

After the Vercel project is deployed, add both domains in Vercel:

- `sori-on.com`
- `www.sori-on.com`

Recommended primary domain:

- `www.sori-on.com`

Set `sori-on.com` to redirect to `www.sori-on.com` in Vercel.

## Gabia DNS Records

Use these DNS records after the domains have been added to the Vercel project.

```text
Type: A
Host: @
Value: 76.76.21.21
TTL: default or 600
```

```text
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: default or 600
```

If Vercel asks for domain ownership verification, add the TXT record shown in
the Vercel dashboard exactly as provided.

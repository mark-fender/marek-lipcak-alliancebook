This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

## Testing & quality

```bash
npm run lint
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Full-text search** – type a name or trait to discover characters instantly (press `/` anywhere on the page to focus the search field).
- **Accessible filtering** – narrow down the listing by gender, whether the character pilots starships, and sort results by name or height.
- **Pagination with caching** – all character data is fetched server-side with incremental static regeneration and paginated into a 12-card grid for an easy-to-scan layout.
- **Rich character cards** – responsive cards with imagery, key stats, and badges highlighting film appearances, vehicles and starships.
- **Insight panel (original feature)** – an analytics panel summarises matching results, including averages for height and mass, total starship pilots and unique homeworlds.


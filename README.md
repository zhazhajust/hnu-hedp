This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages. There are two ways to deploy:

### Method 1: GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch. The workflow is located at `.github/workflows/deploy.yml`.

To enable GitHub Pages deployment:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Push to the `main` branch to trigger the deployment

### Method 2: Manual Deployment

You can also deploy manually using the deploy script:

```bash
npm run deploy
```

Note: For manual deployment, you'll need to:
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`
2. Make sure your GitHub repository is named `hnu-hedp`
3. Update the `homepage` field in `package.json` with your GitHub username

## Configuration Details

The deployment configuration includes:

- `basePath`: Set to `/hnu-hedp` for proper routing
- `assetPrefix`: Set to `/hnu-hedp/` for static assets
- `output`: Set to `export` for static HTML generation


const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  process.env.SITE_URL || (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
).origin;

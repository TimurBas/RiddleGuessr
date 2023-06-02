const httpOrHttps =
  process.env.NEXT_PUBLIC_VERCEL_URL === "localhost:3000" ? "http" : "https";
export const baseUrl = `${httpOrHttps}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

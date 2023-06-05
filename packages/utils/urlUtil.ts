const productionBaseUrl = "riddleguessr.com";
const stagingBaseUrl = "staging.riddleguessr.com";
const localBaseUrl = "localhost:3000";

export const resolveBaseUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  if (env === "production") return `https://${productionBaseUrl}`;
  if (env === "preview") return `https://${stagingBaseUrl}`;
  return `http://${localBaseUrl}`;
};

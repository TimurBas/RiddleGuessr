const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

const publicProductionBaseUrl = "riddleguessr.com";
const publicStagingBaseUrl = "staging.riddleguessr.com";
const publicLocalBaseUrl = "localhost:3000";

const privateProductionBaseUrl = "app.riddleguessr.com";
const privateStagingBaseUrl = "staging-app.riddleguessr.com";
const privateLocalBaseUrl = "localhost:3000";

export const resolvePublicBaseUrl = () => {
  if (env === "production") return `https://${publicProductionBaseUrl}`;
  if (env === "preview") return `https://${publicStagingBaseUrl}`;
  return `http://${publicLocalBaseUrl}`;
};

export const resolvePrivateBaseUrl = () => {
  if (env === "production") return `https://${privateProductionBaseUrl}`;
  if (env === "preview") return `https://${privateStagingBaseUrl}`;
  return `http://${privateLocalBaseUrl}`;
};

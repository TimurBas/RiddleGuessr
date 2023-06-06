const AuthRedirect = async (): Promise<boolean> => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  const publicProductionBaseUrl = "riddleguessr.com";
  const publicStagingBaseUrl = "staging.riddleguessr.com";
  const publicLocalBaseUrl = "localhost:3000";
  const resolvePublicBaseUrl = () => {
    if (env === "production") return `https://${publicProductionBaseUrl}`;
    if (env === "preview") return `https://${publicStagingBaseUrl}`;
    return `http://${publicLocalBaseUrl}`;
  };
  const completeUrl = `${resolvePublicBaseUrl()}/api/auth`;
  const response = await fetch(completeUrl, {
    redirect: "follow",
  });

  console.log(response);

  return response.redirected;
};

export { AuthRedirect };

import { resolveBaseUrl } from "utils/urlUtil";

const AuthRedirect = async (): Promise<boolean> => {
  const completeUrl = `${resolveBaseUrl()}/api/auth`;
  const response = await fetch(completeUrl, {
    redirect: "follow",
  });

  return response.redirected;
};

export { AuthRedirect };

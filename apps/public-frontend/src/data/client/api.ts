import { resolvePublicBaseUrl } from "utils/urlUtil";

const AuthRedirect = async (): Promise<boolean> => {
  const completeUrl = `${resolvePublicBaseUrl()}/api/auth`;
  const response = await fetch(completeUrl, {
    redirect: "follow",
  });

  return response.redirected;
};

export { AuthRedirect };

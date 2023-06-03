import { NextResponse } from "next/server";

// const resolveRedirectUrl = () => {
//   const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
//   if (env === "production") return process.env.PROD_PRIVATE_FRONTEND_URL;
//   if (env === "preview")
//     `https://private-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
//       "/",
//       "-"
//     )}-timurbas.vercel.app`;
//   return process.env.LOCAL_PRIVATE_FRONTEND_URL;
// };

export async function POST(request: Request) {
  try {
    // const redirectUrl = resolveRedirectUrl();
    // console.log(redirectUrl);

    // Clone the request headers and set a new header `x-hello-from-middleware1`
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-hello-from-middleware1", "hello");

    return NextResponse.redirect(
      "https://private-frontend-git-feature-login-with-turborepo-timurbas.vercel.app/",
      {
        status: 301,
        headers: requestHeaders,
      } as ResponseInit
    );
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

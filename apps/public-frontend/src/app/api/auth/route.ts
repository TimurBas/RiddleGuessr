import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const resolveRedirectUrl = () => {
    const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

    if (env === "production")
      return `https://${process.env.PROD_PRIVATE_FRONTEND_URL}`;
    if (env === "preview")
      return `https://private-frontend-git-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
        "/",
        "-"
      )}-timurbas.vercel.app`;

    return process.env.LOCAL_PRIVATE_FRONTEND_URL;
  };

  try {
    return NextResponse.redirect(new URL("/", resolveRedirectUrl()));
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const resolveRedirectUrl = () => {
    const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

    if (env === "production") return `${process.env.PROD_ADMIN_URL}`;
    if (env === "preview") return `${process.env.STAGING_ADMIN_URL}`;
    return "http://localhost:3002";
  };

  try {
    return NextResponse.redirect(new URL("/platform", resolveRedirectUrl()));
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

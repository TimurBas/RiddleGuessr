import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.redirect(
      "https://private-frontend-git-feature-login-with-turborepo-timurbas.vercel.app"
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

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
  console.log(env);
  console.log(
    `private-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
      "/",
      "-"
    )}-timurbas.vercel.app`
  );
  if (env === "production") return process.env.PROD_PRIVATE_FRONTEND_URL;
  if (env === "preview")
    `private-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
      "/",
      "-"
    )}-timurbas.vercel.app`;
  return process.env.LOCAL_PRIVATE_FRONTEND_URL;
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) return NextResponse.redirect(resolveRedirectUrl());

  return res;
}

export const config = {
  matcher: "/login/:path*",
};

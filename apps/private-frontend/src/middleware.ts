import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
  console.log(env);
  if (env === "production") return process.env.PROD_PUBLIC_FRONTEND_URL;
  if (env === "preview")
    return `https://public-frontend-git-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
      "/",
      "-"
    )}-timurbas.vercel.app`;
  return process.env.LOCAL_PUBLIC_FRONTEND_URL;
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return NextResponse.redirect(new URL("/login", resolveRedirectUrl()));
  return res;
}

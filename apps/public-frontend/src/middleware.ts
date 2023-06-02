import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    console.log("Redirecting to private FE");
    const privateFrontendVercelEnvironment = process.env.NEXT_PUBLIC_VERCEL_ENV;

    if (privateFrontendVercelEnvironment === "production") {
      return NextResponse.redirect(
        process.env.PROD_PUBLIC_PRIVATE_FRONTEND_URL
      );
    } else if (privateFrontendVercelEnvironment === "preview") {
      return NextResponse.redirect(
        `https://private-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
          "/",
          "-"
        )}-timurbas.vercel.app`
      );
    } else {
      return NextResponse.redirect(
        process.env.LOCAL_PUBLIC_PRIVATE_FRONTEND_URL
      );
    }
  }
}

export const config = {
  matcher: ["/login/:path*"],
};

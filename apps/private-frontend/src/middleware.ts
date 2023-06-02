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

  if (!session) {
    console.log("Redirecting to public FE");
    const publicFrontendVercelEnvironment = process.env.NEXT_PUBLIC_VERCEL_ENV;

    if (publicFrontendVercelEnvironment === "production") {
      return NextResponse.redirect(
        process.env.PROD_PUBLIC_FRONTEND_REDIRECT_URL
      );
    } else if (publicFrontendVercelEnvironment === "preview") {
      return NextResponse.redirect(
        `public-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}-timurbas.vercel.app`
      );
    } else {
      return NextResponse.redirect(
        process.env.LOCAL_PUBLIC_FRONTEND_REDIRECT_URL
      );
    }
  }
}

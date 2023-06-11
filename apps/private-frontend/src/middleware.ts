import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  if (env === "production") return process.env.PROD_PUBLIC_FRONTEND_URL;
  if (env === "preview") return process.env.STAGING_PUBLIC_FRONTEND_URL;
  return process.env.LOCAL_PUBLIC_FRONTEND_URL;
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.method === "OPTIONS") {
    console.log("OPTIONS CALLED");
    return new Response(null, { status: 204 });
  }

  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return NextResponse.redirect(new URL("/login", resolveRedirectUrl()));

  if (session?.user) {
    res.cookies.delete("sb-czznftpbupwdynazsvoq-auth-token");
    res.cookies.delete("supabase-auth-token");
  }

  return res;
}

export const config = {
  matcher: ["/", "/riddle", "/riddle2"],
};

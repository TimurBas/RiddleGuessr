import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  if (env === "production") return process.env.PROD_PRIVATE_FRONTEND_URL;
  if (env === "preview") return process.env.STAGING_PRIVATE_FRONTEND_URL;
  return process.env.LOCAL_PRIVATE_FRONTEND_URL;
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.method === "OPTIONS") {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.forEach((a) => console.log(a));
    console.log(requestHeaders);
    return NextResponse.next({ headers: requestHeaders });
  }
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const baseUrl = resolveRedirectUrl();
  if (session) return NextResponse.redirect(new URL("/", baseUrl));
  return res;
}

export const config = {
  matcher: ["/login"],
};

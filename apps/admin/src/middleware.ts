import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

  if (env === "production") return process.env.PROD_ADMIN_URL;
  if (env === "preview") return process.env.STAGING_ADMIN_URL;
  return process.env.LOCAL_PRIVATE_FRONTEND_URL;
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const redirectRes = NextResponse.redirect("https://riddleguessr.com");
  const isLoginPage = req.nextUrl.pathname === "/login";

  if (!session && !isLoginPage) return redirectRes;
  if (session.user.email !== "timurbas1@hotmail.com") return redirectRes;

  if (session && isLoginPage)
    return NextResponse.redirect(new URL("/platform", resolveRedirectUrl()));

  return res;
}

export const config = {
  matcher: ["/", "/login", "/platform", "/upload-image"],
};

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "supa";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return NextResponse.redirect("https://riddleguessr.com");

  if (session?.user) {
    res.cookies.delete("sb-czznftpbupwdynazsvoq-auth-token");
    res.cookies.delete("supabase-auth-token");
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/",
    "/((?!_next/static|_next/image|favicon.ico|login|api).*)",
  ],
};

import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "supa";

export async function GET(request: Request) {
  try {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const res = await supabase.auth.admin.createUser({
      email: "timurbas1@hotmail.com",
      password: "kolpol123987K",
    });
    console.log(res.data.user);
    console.log(res.error);
    return NextResponse.json({ error: res.error, user: res.data.user });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

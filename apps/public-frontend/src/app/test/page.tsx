import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "supa";

export default async function ServerComponent() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase
    .from("images")
    .select("movie_id")
    .eq("movie_id", "interstellar");

  console.log(data);
  return <div>Test</div>;
}

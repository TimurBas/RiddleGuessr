import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "supa";
import Base64Image from "../../components/ui/atomic/Base64Image";

export const dynamic = "force-dynamic";

export default async function ServerComponent() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("images").select();
  const first = data[0];
  return (
    <div>
      <Base64Image base64Image={first.image_base64} />
      {first.movie_id}
      {first.created_at}
      {first.id}
    </div>
  );
}

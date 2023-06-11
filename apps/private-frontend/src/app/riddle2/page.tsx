import { Database } from "supa";
import Base64Image from "ui/atomic/Base64Image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function ServerComponent() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("images").select();
  console.log(data);
  const first = data[0];
  console.log(first);

  return (
    <div>
      <Base64Image base64Image={first.storage_image_path} />
      {first.movie_id}
      {first.created_at}
      {first.id}
    </div>
  );
}

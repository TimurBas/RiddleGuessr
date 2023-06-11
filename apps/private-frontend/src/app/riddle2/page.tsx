import { Database } from "supa";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MovieImage from "ui/atomic/MovieImage";

export const dynamic = "force-dynamic";

export default async function ServerComponent() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("images").select();
  console.log(data);
  const first = data[0];
  console.log(first);

  return (
    <div className="flex flex-col items-center justify-center">
      <MovieImage url={first.storage_image_path} />
      <p>{first.movie_id}</p>
      <p>{first.created_at}</p>
      <p>{first.id}</p>
    </div>
  );
}

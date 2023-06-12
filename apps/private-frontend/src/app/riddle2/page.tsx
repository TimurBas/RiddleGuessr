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

  const {
    data: { publicUrl },
  } = await supabase.storage
    .from("images")
    .getPublicUrl(first.storage_image_path);

  return (
    <div className="flex flex-col items-center justify-center">
      <MovieImage url={publicUrl} />
      <p className="text-slate-50">{first.movie_id}</p>
      <p className="text-slate-50">{first.created_at}</p>
      <p className="text-slate-50">{first.id}</p>
    </div>
  );
}

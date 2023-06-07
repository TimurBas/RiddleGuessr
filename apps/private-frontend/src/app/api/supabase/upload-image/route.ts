import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "supa";
import { randomUUID } from "crypto";
import { decode } from "base64-arraybuffer";
import { GetStabilityAnswer } from "../../../../data/client/api";

export async function POST(request: Request) {
  try {
    const movieTitle = await request.json();

    const stabilityResponse = await GetStabilityAnswer(movieTitle);
    const base64List = stabilityResponse.base64List;
    const firstBase64Element = base64List[0];

    const id = randomUUID();
    const fileName = `${movieTitle}/${id}.png`;

    const supabase = createRouteHandlerClient<Database>({ cookies });
    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, decode(firstBase64Element), {
        contentType: "image/png",
      });

    const {
      data: insertData,
      count,
      error: insertError,
      status,
      statusText,
    } = await supabase.from("images").insert({
      image_base64: fileName,
      movie_id: movieTitle,
    });

    const imageDbRes = await supabase
      .from("images")
      .select("*")
      .eq("movie_id", movieTitle)
      .single();

    const a = await supabase
      .from("images")
      .select("*")
      .eq("movie_id", movieTitle);

    console.log(imageDbRes);
    console.log(a);

    const {
      data: { publicUrl },
    } = await supabase.storage
      .from("images")
      .getPublicUrl(imageDbRes.data.image_base64);

    return NextResponse.json({ publicUrl });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

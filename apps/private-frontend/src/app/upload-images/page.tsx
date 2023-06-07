import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "supa";
import { decode } from "base64-arraybuffer";
import useStabilityEndpoint from "../../hooks/useStabilityEndpoint";
import { resolvePrivateBaseUrl, throwErrorOnEmptyList } from "utils";

export const dynamic = "force-dynamic";

const UploadImages = async () => {
  const { base64List } = await GetStabilityAnswer("Interstellar");
  console.log("*****base64*****");

  console.log("base64list:", base64List);
  console.log("*****base64*****");

  const supabase = createServerComponentClient<Database>({ cookies });

  base64List.map(async (base64Image) => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload("public/interstellar1.png", decode(base64Image), {
        contentType: "image/png",
      });

    console.log("*****storage*****");
    console.log("data:", data);
    console.log("error:", error);
    console.log("*****storage*****");

    const {
      data: insertData,
      count,
      error: insertError,
      status,
      statusText,
    } = await supabase.from("images").insert({
      image_base64: data.path,
      movie_id: "Interstellar",
    });

    console.log("*****table*****");
    console.log("data:", insertData);
    console.log("error:", insertError);
    console.log("count:", count);
    console.log("status:", status);
    console.log("statusText:", statusText);
    console.log("*****table*****");
  });

  return <div>UploadImages</div>;
};

export default UploadImages;
type StabilityResponse = {
  base64List: string[];
};

const GetStabilityAnswer = async (
  input: string
): Promise<StabilityResponse> => {
  const completeUrl = `${resolvePrivateBaseUrl()}/api/stability`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  };

  const response = await fetch(completeUrl, options);
  const json: StabilityResponse = await response.json();

  throwErrorOnEmptyList(json.base64List);

  return json;
};

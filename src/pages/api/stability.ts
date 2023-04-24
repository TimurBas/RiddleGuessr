import { NextApiRequest, NextApiResponse } from "next";

type GenerationResponse = {
  artifacts: Array<{
    base64: string;
    seed: number;
    finishReason: string;
  }>;
};

type Data = {
  base64List: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const input = req.body;
    const apiKey = process.env.STABILITY_API_KEY;
    if (!apiKey) throw new Error("Missing Stability API key.");

    const response = await fetch(
      `${process.env.STABILITY_BASE_URL}/v1/generation/${process.env.STABILITY_ENGINE_ID}/text-to-image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: input,
            },
          ],
          cfg_scale: 7,
          clip_guidance_preset: "FAST_BLUE",
          height: 512,
          width: 512,
          samples: 1,
          steps: 30,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Non-200 response: ${await response.text()}`);
    }

    const json = (await response.json()) as GenerationResponse;
    const base64List = json.artifacts.map((artifact) => artifact.base64);

    res.status(200).json({ base64List });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

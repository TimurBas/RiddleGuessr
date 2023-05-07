import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_ID,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const input = request.body;
    const prompt = `Convert the movie ${input} into a sequence of 4 emojis.`;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const choices = completion.data.choices;
    const message = choices[0].message!;

    return NextResponse.json({ answer: message.content });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

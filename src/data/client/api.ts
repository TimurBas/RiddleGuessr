import { throwErrorOnEmptyList } from "../../utils/listUtil";
import { handleNullOrEmptyString } from "../../utils/nullUtil";
import throwErrorOnEmptyString from "../../utils/stringUtil";

type ChatGptResponse = {
  answer: string;
};

type StabilityResponse = {
  base64List: string[];
};

const httpOrHttps =
  process.env.NEXT_PUBLIC_VERCEL_URL === "localhost:3000" ? "http" : "https";
const baseUrl = `${httpOrHttps}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const GetChatGptAnswer = async (input: string): Promise<ChatGptResponse> => {
  const completeUrl = `${baseUrl}/api/chatgpt`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  };

  const response = await fetch(completeUrl, options);
  const json: ChatGptResponse = await response.json();

  const resolvedAnswer = handleNullOrEmptyString(json.answer);
  throwErrorOnEmptyString(resolvedAnswer)

  return { answer: resolvedAnswer };
};

const GetStabilityAnswer = async (
  input: string
): Promise<StabilityResponse> => {
  const completeUrl = `${baseUrl}/api/stability`;
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

export { GetChatGptAnswer, GetStabilityAnswer };

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
  const json = await response.json();

  const answer = json as ChatGptResponse;
  return answer;
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
  const json = await response.json();

  const base64List = json as StabilityResponse;
  return base64List;
};

export { GetChatGptAnswer, GetStabilityAnswer };

import {
  handleNullOrEmptyString,
  throwErrorOnEmptyList,
  throwErrorOnEmptyString,
  resolvePrivateBaseUrl,
} from "utils";

type ChatGptResponse = {
  answer: string;
};

type StabilityResponse = {
  base64List: string[];
};

export const GetChatGptAnswer = async (
  input: string
): Promise<ChatGptResponse> => {
  const completeUrl = `${resolvePrivateBaseUrl()}/api/chatgpt`;
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
  throwErrorOnEmptyString(resolvedAnswer);

  return { answer: resolvedAnswer };
};

export const GetStabilityAnswer = async (
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

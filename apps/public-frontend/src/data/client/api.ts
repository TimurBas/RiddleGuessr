import { throwErrorOnEmptyList } from "../../utils/listUtil";
import { handleNullOrEmptyString } from "../../utils/nullUtil";
import throwErrorOnEmptyString from "../../utils/stringUtil";
import { resolveBaseUrl } from "../../utils/urlUtil";

type ChatGptResponse = {
  answer: string;
};

type StabilityResponse = {
  base64List: string[];
};

const GetChatGptAnswer = async (input: string): Promise<ChatGptResponse> => {
  const completeUrl = `${resolveBaseUrl()}/api/chatgpt`;
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

const GetStabilityAnswer = async (
  input: string
): Promise<StabilityResponse> => {
  const completeUrl = `${resolveBaseUrl()}/api/stability`;
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

const AuthRedirect = async (): Promise<boolean> => {
  const completeUrl = `${resolveBaseUrl()}/api/auth`;
  const response = await fetch(completeUrl, {
    redirect: "follow",
  });

  return response.redirected;
};

export { GetChatGptAnswer, GetStabilityAnswer, AuthRedirect };

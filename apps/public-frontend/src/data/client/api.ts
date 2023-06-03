import { throwErrorOnEmptyList } from "../../utils/listUtil";
import { handleNullOrEmptyString } from "../../utils/nullUtil";
import throwErrorOnEmptyString from "../../utils/stringUtil";
import { baseUrl } from "../../utils/urlUtil";

type ChatGptResponse = {
  answer: string;
};

type StabilityResponse = {
  base64List: string[];
};

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
  throwErrorOnEmptyString(resolvedAnswer);

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

const AuthRedirect = async (): Promise<boolean> => {
  const completeUrl = `${baseUrl}/api/auth`;
  const response = await fetch(completeUrl);

  return response.redirected;
};

export { GetChatGptAnswer, GetStabilityAnswer, AuthRedirect };

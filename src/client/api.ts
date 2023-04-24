type ChatGptResponse = {
  answer: string;
};

export default async function GetChatGptAnswer(
  input: string
): Promise<ChatGptResponse> {
  const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/chatgpt`;
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  };

  const response = await fetch(url, options);
  const json = await response.json();

  const answer = json as ChatGptResponse;
  return answer;
}

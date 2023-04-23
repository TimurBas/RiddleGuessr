import { useState, useEffect } from "react";
import GetChatGptAnswer from "../client/api";

type Props = {
  input: string;
};

type Response<Data> = {
  data: Data | null;
  error: Error | null;
  isLoading: boolean;
};

export default function useChatGptEndpoint({ input }: Props): Response<string> {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetChatGptAnswer(input);
        console.log(response);
        const answer = response.answer;
        console.log(answer);
        setData(answer);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
}

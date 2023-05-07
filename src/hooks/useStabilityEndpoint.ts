"use client";

import { useState, useEffect } from "react";
import { GetStabilityAnswer } from "../data/client/api";

type Props = {
  input: string;
};

type Response<Data> = {
  data: Data;
  error: Error | null;
  isLoading: boolean;
};

export default function useStabilityEndpoint({
  input,
}: Props): Response<string[]> {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetStabilityAnswer(input);
        const base64List = response.base64List;
        setData(base64List);
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

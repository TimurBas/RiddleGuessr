"use client";

import { useState, useEffect } from "react";
import { GetUploadImageAnswer } from "../data/client/api";

type Props = {
  movieTitle: string;
};

type Response<Data> = {
  data: Data | null;
  error: Error | null;
  isLoading: boolean;
};

export default function useUploadImageEndpoint({
  movieTitle,
}: Props): Response<string> {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetUploadImageAnswer(movieTitle);
        console.log(response);
        setData(response);
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

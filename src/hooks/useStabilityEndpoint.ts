import { useState, useEffect } from "react";
import { GetStabilityAnswer } from "../data/client/api";

type Props = {
  input: string;
};

export default function useStabilityEndpoint({ input }: Props): string[] {
  const [base64Images, setBase64Images] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetStabilityAnswer(input);
      const base64List = response.base64List;

      setBase64Images(base64List);
    };

    fetchData();
  }, []);

  return base64Images;
}

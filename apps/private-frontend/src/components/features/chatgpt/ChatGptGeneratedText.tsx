"use client";

import React, { FC } from "react";
import useChatGptEndpoint from "../../../hooks/useChatGptEndpoint";
import Emoji from "../../ui/Emoji";

type Props = {
  title: string;
};
const ChatGptGeneratedText: FC<Props> = ({ title }: Props) => {
  const { data, error, isLoading } = useChatGptEndpoint({ input: title });

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-white">Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <p className="text-5xl text-gray-100">{title}</p>
      <Emoji data={data} />
    </div>
  );
};

export default ChatGptGeneratedText;

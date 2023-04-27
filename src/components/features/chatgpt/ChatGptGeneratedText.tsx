import React, { FC } from "react";
import useChatGptEndpoint from "../../../hooks/useChatGptEndpoint";
import Emoji from "../../ui/Emoji";

type ChatGptGeneratedTextProps = {
  title: string;
};
const ChatGptGeneratedText: FC<ChatGptGeneratedTextProps> = ({
  title,
}: ChatGptGeneratedTextProps) => {
  const { data, error, isLoading } = useChatGptEndpoint({ input: title });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6">
      <p className="text-5xl text-gray-100">{title}</p>
      <Emoji data={data} />
    </div>
  );
};

export default ChatGptGeneratedText;

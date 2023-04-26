import React from "react";
import useChatGptEndpoint from "../../hooks/useChatGptEndpoint";
import Emoji from "../../components/Emoji";
import handleNull from "../../utils/nullUtil";
import handleEmptyString from "../../utils/stringUtil";

type ChatGptGeneratedTextProps = {
  title: string;
};

const ChatGptGeneratedText = ({ title }: ChatGptGeneratedTextProps) => {
  const { data, error, isLoading } = useChatGptEndpoint({ input: title });

  const resolvedData = handleNull(data, () => "");

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

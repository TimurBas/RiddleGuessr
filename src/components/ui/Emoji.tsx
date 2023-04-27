import React from "react";

type EmojiProps = {
  data: string | null;
};

const Emoji = ({ data }: EmojiProps) => {
  return <span className="text-7xl ">{data}</span>;
};

export default Emoji;

import React, { FC } from "react";

type Props = {
  data: string | null;
};

const Emoji: FC<Props> = ({ data }: Props) => {
  return <span className="text-7xl">{data}</span>;
};

export default Emoji;

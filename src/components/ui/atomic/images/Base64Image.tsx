import Image from "next/image";
import React, { FC } from "react";

type Props = {
  base64Image: string;
};

const Base64Image: FC<Props> = ({ base64Image }: Props) => {
  return (
    <Image
      src={`data:image/png;base64,${base64Image}`}
      alt="AI Generated Image"
      height="192px"
      width="192px"
    />
  );
};

export default Base64Image;

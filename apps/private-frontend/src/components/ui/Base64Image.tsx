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
      width={192}
      height={192}
    />
  );
};

export default Base64Image;

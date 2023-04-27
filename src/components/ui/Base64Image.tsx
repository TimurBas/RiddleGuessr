import Image from "next/image";
import React from "react";

type Base64ImageProps = {
  base64Image: string;
};

const Base64Image = ({ base64Image }: Base64ImageProps) => {
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

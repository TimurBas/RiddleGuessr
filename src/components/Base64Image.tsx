import React from "react";

type Base64ImageProps = {
  base64Image: string;
};

const Base64Image = ({ base64Image }: Base64ImageProps) => {
  return (
    <img src={`data:image/png;base64,${base64Image}`} className="w-48 h-48" />
  );
};

export default Base64Image;

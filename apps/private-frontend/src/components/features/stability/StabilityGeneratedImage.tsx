"use client";

import React, { FC } from "react";
import Base64Image from "ui/atomic/Base64Image";
import useStabilityEndpoint from "../../../hooks/useStabilityEndpoint";

type Props = {
  title: string;
};

const StabilityGeneratedImage: FC<Props> = ({ title }: Props) => {
  const { data, error, isLoading } = useStabilityEndpoint({ input: title });

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-white">Error: {error.message}</p>;
  }

  return (
    <div>
      {data.map((base64Image, index) => (
        <Base64Image key={index} base64Image={base64Image} />
      ))}
    </div>
  );
};

export default StabilityGeneratedImage;

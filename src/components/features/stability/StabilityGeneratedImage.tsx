import React, { FC } from "react";
import useStabilityEndpoint from "../../../hooks/useStabilityEndpoint";
import Base64Image from "../../ui/Base64Image";

type StabilityGeneratedImageProps = {
  title: string;
};

const StabilityGeneratedImage: FC<StabilityGeneratedImageProps> = ({
  title,
}: StabilityGeneratedImageProps) => {
  const { data, error, isLoading } = useStabilityEndpoint({ input: title });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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

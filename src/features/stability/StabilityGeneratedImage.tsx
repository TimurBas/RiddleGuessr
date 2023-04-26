import React from "react";
import useStabilityEndpoint from "../../hooks/useStabilityEndpoint";
import Base64Image from "../../components/Base64Image";

type StabilityGeneratedImageProps = {
  title: string;
};

const StabilityGeneratedImage = ({ title }: StabilityGeneratedImageProps) => {
  const base64Images = useStabilityEndpoint({ input: title });

  return (
    <div>
      {base64Images.map((base64Image, index) => (
        <Base64Image key={index} base64Image={base64Image} />
      ))}
    </div>
  );
};

export default StabilityGeneratedImage;

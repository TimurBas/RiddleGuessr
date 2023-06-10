"use client";

import React from "react";
import Image from "next/image";
import useUploadImageEndpoint from "../../hooks/useUploadImageEndpoint";

const UploadImages = () => {
  const { data, error, isLoading } = useUploadImageEndpoint({
    movieTitle: "Prison Break",
  });
  console.log(data);
  return (
    <div>
      {data && (
        <Image src={data} alt="AI Generated Image" width={192} height={192} />
      )}
      {!isLoading && (
        <Image src={data} alt="AI Generated Image" width={192} height={192} />
      )}
      <img src={data} aria-aria-label="asd" />
      <p>{data}</p>
    </div>
  );
};

export default UploadImages;

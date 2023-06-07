"use client";

import React from "react";
import Image from "next/image";
import useUploadImageEndpoint from "../../hooks/useUploadImageEndpoint";

const UploadImages = async () => {
  const { data, error, isLoading } = useUploadImageEndpoint({
    movieTitle: "Prison Break",
  });
  return (
    <div>
      {data && (
        <Image src={data} alt="AI Generated Image" width={192} height={192} />
      )}
    </div>
  );
};

export default UploadImages;

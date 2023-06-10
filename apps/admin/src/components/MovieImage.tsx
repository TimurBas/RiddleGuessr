"use client";

import React, { FC } from "react";
import useUploadImageEndpoint from "../hooks/useUploadImageEndpoint";
import Image from "next/image";

type Props = {
  movieTitle: string;
};

const MovieImage: FC<Props> = ({ movieTitle }) => {
  const { data, error, isLoading } = useUploadImageEndpoint({
    movieTitle,
  });

  return (
    <div>
      {isLoading && <p>Generating & uploading an image of {movieTitle}...</p>}
      {error && (
        <p>
          There was an error with the upload of {movieTitle}. Payload --
          Message:{error.message}, Name:{error.name}
        </p>
      )}
      {data && (
        <Image
          src={data}
          alt={`AI Generated Image of ${movieTitle}`}
          width={192}
          height={192}
        />
      )}
    </div>
  );
};

export default MovieImage;

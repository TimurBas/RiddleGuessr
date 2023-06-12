"use client";

import React, { FC, useState } from "react";
import MovieImage from "../../components/MovieImage";
import InputField from "ui/atomic/InputField";

const UploadImages: FC = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [hasPressedEnter, setHasPressedEnter] = useState(false);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setHasPressedEnter(true);
    }
  };

  return (
    <div>
      <InputField
        value={movieTitle}
        setValue={setMovieTitle}
        placeholder={"Some movie title"}
        type={"text"}
        onKeyDown={handleKeyDown}
      />
      {hasPressedEnter && <MovieImage movieTitle={movieTitle} />}
    </div>
  );
};

export default UploadImages;

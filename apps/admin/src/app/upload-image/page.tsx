"use client";

import React, { FC, useState } from "react";
import InputField from "ui/InputField";
import MovieImage from "../../components/MovieImage";

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
        value={""}
        setValue={setMovieTitle}
        placeholder={""}
        type={"text"}
        onKeyDown={handleKeyDown}
      />
      {hasPressedEnter && <MovieImage movieTitle={movieTitle} />}
    </div>
  );
};

export default UploadImages;

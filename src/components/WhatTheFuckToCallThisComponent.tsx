import React from "react";
import useChatGptEndpoint from "../hooks/useChatGptEndpoint";
import movieTitles from "../../movie-titles.json";

const WhatTheFuckToCallThisComponent = () => {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;

  const { data, error, isLoading } = useChatGptEndpoint({ input: title });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-y-6">
      <p className="text-5xl text-gray-100">{title}</p>
      <span className="text-7xl ">{data}</span>
    </div>
  );
};

export default WhatTheFuckToCallThisComponent;

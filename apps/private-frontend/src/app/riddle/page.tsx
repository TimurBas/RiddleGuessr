import React from "react";
import movieTitles from "../../data/json/movie-titles.json";
import ChatGptGeneratedText from "../../components/features/chatgpt/ChatGptGeneratedText";
import StabilityGeneratedImage from "../../components/features/stability/StabilityGeneratedImage";

const Riddle = () => {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;
  return (
    <div className="flex flex-col items-center justify-center gap-y-20 pt-24">
      <ChatGptGeneratedText title={title} />
      <StabilityGeneratedImage title={title} />
    </div>
  );
};

export default Riddle;

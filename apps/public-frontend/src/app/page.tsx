"use client";

import ChatGptGeneratedText from "../components/features/chatgpt/ChatGptGeneratedText";
import HeroSection from "../components/features/hero/HeroSection";
import StabilityGeneratedImage from "../components/features/stability/StabilityGeneratedImage";
import movieTitles from "../data/json/movie-titles.json";
import useIsAuthenticated from "../supabase/useIsAuthenticated";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;

  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated)
    return (
      <>
        <p>FUCK YEA</p>
      </>
    );

  return (
    <>
      <div className="flex-col justify-between">
        <HeroSection />
      </div>
      <div className="flex flex-col gap-y-20 items-center justify-center pt-24">
        <ChatGptGeneratedText title={title} />
        <StabilityGeneratedImage title={title} />
      </div>
    </>
  );
}

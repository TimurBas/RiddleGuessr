import ChatGptGeneratedText from "../components/features/chatgpt/ChatGptGeneratedText";
import HeroSection from "../components/features/hero/HeroSection";
import StabilityGeneratedImage from "../components/features/stability/StabilityGeneratedImage";
import movieTitles from "../data/json/movie-titles.json";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;
  const test = 2;
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

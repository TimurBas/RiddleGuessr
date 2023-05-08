import HeaderSection from "../components/features/header/HeaderSection";
import ChatGptGeneratedText from "../components/features/chatgpt/ChatGptGeneratedText";
import StabilityGeneratedImage from "../components/features/stability/StabilityGeneratedImage";
import movieTitles from "../data/json/movie-titles.json";
import HeroSection from "../components/features/hero/HeroSection";
import TopBar from "../components/ui/atomic/top-bar/TopBar";
import FooterSection from "@/components/features/footer/FooterSection";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;

  return (
    <>
      <TopBar />
      <div className="flex flex-col p-5">
        <HeaderSection />
      </div>
      <main>
        <div className="flex-col justify-between">
          <HeroSection />
        </div>
        <div className="flex flex-col gap-y-20 items-center justify-center pt-24">
          {/* <ChatGptGeneratedText title={title} />
          <StabilityGeneratedImage title={title} /> */}
        </div>
        <FooterSection />
      </main>
    </>
  );
}

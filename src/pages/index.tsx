import HeaderSection from "../components/features/header/HeaderSection";
import ChatGptGeneratedText from "../components/features/chatgpt/ChatGptGeneratedText";
import StabilityGeneratedImage from "../components/features/stability/StabilityGeneratedImage";
import movieTitles from "../data/json/movie-titles.json";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;

  return (
    <main className="bg-blue-900 w-screen min-h-screen ">
      <div className="flex p-5">
        <HeaderSection />
      </div>
      {/* <div className="flex flex-col gap-y-20 items-center justify-center">
        <ChatGptGeneratedText title={title} />
        <StabilityGeneratedImage title={title} />
      </div> */}
    </main>
  );
}

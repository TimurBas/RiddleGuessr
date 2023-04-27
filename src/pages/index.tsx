import ChatGptGeneratedText from "../components/features/chatgpt/ChatGptGeneratedText";
import StabilityGeneratedImage from "../components/features/stability/StabilityGeneratedImage";
import movieTitles from "../data/json/movie-titles.json";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;

  return (
    <main className="bg-slate-600 w-screen h-screen flex items-center justify-center">
      <ChatGptGeneratedText title={title} />
      <StabilityGeneratedImage title={title} />
    </main>
  );
}

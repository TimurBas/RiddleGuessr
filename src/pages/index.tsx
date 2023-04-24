import WhatTheFuckToCallThisComponent from "../components/WhatTheFuckToCallThisComponent";
import WhatTheFuckToCallThisComponent2 from "../components/WhatTheFuckToCallThisComponent2";
import movieTitles from "../../movie-titles.json";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  const movieTitleObj = movieTitles[randomIndex];
  const title = movieTitleObj.title;
  console.log(title);
  console.log("HEJ");
  return (
    <main className="bg-slate-600 w-screen h-screen flex items-center justify-center">
      <WhatTheFuckToCallThisComponent title={title} />
      <WhatTheFuckToCallThisComponent2 title={title} />
    </main>
  );
}

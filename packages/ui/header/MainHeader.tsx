import { FC } from "react";
import HomeLogoContent from "./HomeLogoContent";

type Props = {
  children: React.ReactNode;
};

const MainHeader: FC<Props> = ({ children }) => {
  return (
    <header className="flex flex-grow items-center justify-between lg:mx-48 lg:gap-x-8">
      <HomeLogoContent />
      {children}
    </header>
  );
};

export default MainHeader;

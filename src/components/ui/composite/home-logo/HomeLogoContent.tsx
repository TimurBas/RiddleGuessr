import React, { FC } from "react";
import HomeLogoIcon from "../../atomic/icons/HomeLogoIcon";

const HomeLogoContent: FC = () => {
  return (
    <a href="/">
      <div className="flex items-center justify-center w-max text-white select-none">
        <HomeLogoIcon />
        <h1 className="text-lg font-bold">Project-1</h1>
      </div>
    </a>
  );
};

export default HomeLogoContent;

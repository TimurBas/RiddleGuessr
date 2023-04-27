import React from "react";
import HomeLogoIcon from "./HomeLogoIcon";

const HomeLogoContent = () => {
  return (
    <a href="/">
      <div className="flex items-center justify-center hover:text-gray-300">
        <HomeLogoIcon />
        <h1 className="text-lg font-bold">Project-1</h1>
      </div>
    </a>
  );
};

export default HomeLogoContent;

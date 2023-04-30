import React, { FC } from "react";

const TopBar: FC = () => {
  return (
    <div className="left-0 top-0 flex items-center justify-center w-full px-4 h-8 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold">
      <p>
        Use <span className="font-bold">LAUNCH10</span> for 10% off! 🥳
      </p>
    </div>
  );
};

export default TopBar;

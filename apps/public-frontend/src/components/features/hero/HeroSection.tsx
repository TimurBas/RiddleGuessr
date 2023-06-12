import React, { FC } from "react";
import HeroHeading from "./HeroHeading";
import ButtonLink from "ui/links/ButtonLink";
import HeroSubHeading from "./HeroSubHeading";

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 px-5 pt-14">
      <HeroHeading />
      <HeroSubHeading />
      <div className="flex w-full flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4">
        <ButtonLink
          label="Sign up for free"
          link="/sign-up"
          textColor="text-white"
        />
        <ButtonLink
          label="Learn more"
          link="/learn-more"
          textColor="text-white"
          bgColor="bg-gradient-to-r from-pink-400 to-purple-400"
        />
      </div>
    </div>
  );
};

export default HeroSection;

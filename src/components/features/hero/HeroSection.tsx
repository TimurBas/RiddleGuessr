import HeroHeading from "@/components/ui/atomic/hero/HeroHeading";
import HeroSubHeading from "@/components/ui/atomic/hero/HeroSubHeading";
import ButtonLink from "@/components/ui/composite/link/ButtonLink";
import React, { FC } from "react";

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-14 px-5 gap-y-10">
      <HeroHeading />
      <HeroSubHeading />
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-4 md:gap-x-4">
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

import HamburgerMenu from "@/components/ui-smart/HamburgerMenu";
import NavigationLinks from "@/components/ui-smart/NavigationLinks";
import HomeLogoContent from "@/components/ui/composite/home-logo/HomeLogoContent";
import React, { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <header className="flex items-center justify-between flex-grow lg:mx-48 lg:gap-x-8">
      <HomeLogoContent />
      <HamburgerMenu />
      <NavigationLinks />
    </header>
  );
};

export default HeaderSection;

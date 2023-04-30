import React, { FC } from "react";
import HomeLogoContent from "../../ui/composite/home-logo/HomeLogoContent";
import HamburgerMenu from "../../ui-smart/HamburgerMenu";
import NavigationLinks from "../../ui-smart/NavigationLinks";

const HeaderSection: FC = () => {
  return (
    <header className="flex items-center justify-between flex-grow lg:mx-24 lg:gap-x-8">
      <HomeLogoContent />
      <HamburgerMenu />
      <NavigationLinks />
    </header>
  );
};

export default HeaderSection;

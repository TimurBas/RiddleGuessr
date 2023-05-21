import React, { FC } from "react";
import HamburgerMenu from "../../ui-smart/HamburgerMenu";
import NavigationLinks from "../../ui-smart/NavigationLinks";
import HomeLogoContent from "../../ui/composite/home-logo/HomeLogoContent";

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

import React, { FC, useState } from "react";
import HomeLogoContent from "../../ui/HomeLogo/HomeLogoContent";
import HamburgerMenu from "../../ui/Hamburger/HamburgerMenu";
import HeaderLinks from "../../ui/HeaderLinks";

interface MenuItem {
  label: string;
  link: string;
}

const HeaderSection: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between flex-grow lg:items-start lg:justify-start lg:">
      <>
        <HomeLogoContent />
        <HamburgerMenu
          menuItems={menuItems}
          isOpen={isOpen}
          onToggle={toggleMenu}
        />
        <HeaderLinks menuItems={menuItems} />
      </>
    </header>
  );
};

export default HeaderSection;

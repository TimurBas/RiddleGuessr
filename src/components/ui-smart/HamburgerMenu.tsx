import React, { FC, useState } from "react";
import HamburgerButton from "../ui/composite/hamburger/HamburgerButton";
import HamburgerOpenedScreen from "../ui/composite/hamburger/HamburgerOpenedScreen";

interface Link {
  label: string;
  link: string;
}

const HamburgerMenu: FC = () => {
  const menuItems: Link[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const loginItems: Link[] = [
    { label: "Login", link: "/login" },
    { label: "Sign up", link: "/sign-up" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden flex items-center justify-center">
      {isOpen ? (
        <HamburgerOpenedScreen
          menuItems={menuItems}
          loginItems={loginItems}
          onToggle={toggleMenu}
        />
      ) : (
        <HamburgerButton onToggle={toggleMenu} />
      )}
    </div>
  );
};

export default HamburgerMenu;

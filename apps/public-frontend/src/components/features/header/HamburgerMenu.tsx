"use client";

import { FC, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HamburgerOpenedScreen from "./HamburgerOpenedScreen";

interface Link {
  label: string;
  link: string;
}

const HamburgerMenu: FC = () => {
  const menuItems: Link[] = [
    { label: "Use cases", link: "/use-cases" },
    { label: "Pricing", link: "/pricing" },
    { label: "Community", link: "/community" },
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
    <div className="flex items-center justify-center lg:hidden">
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

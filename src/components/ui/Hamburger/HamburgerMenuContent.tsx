import React from "react";
import LinkButton from "../LinkButton";

interface MenuItem {
  label: string;
  link: string;
}

interface HamburgerMenuContentProps {
  menuItems: MenuItem[];
}

const HamburgerMenuContent = ({ menuItems }: HamburgerMenuContentProps) => {
  return (
    <nav className={`flex-col pt-4 pb-2 `}>
      {menuItems.map((item) => (
        <LinkButton key={item.label} label={item.label} link={item.link} />
      ))}
    </nav>
  );
};

export default HamburgerMenuContent;

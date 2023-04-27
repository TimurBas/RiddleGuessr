import React from "react";
import HamburgerButton from "./HamburgerButton";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ menuItems, isOpen, onToggle }) => {
  return (
    <div className="lg:hidden">
      <HamburgerButton
        menuItems={menuItems}
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </div>
  );
};

export default HamburgerMenu;

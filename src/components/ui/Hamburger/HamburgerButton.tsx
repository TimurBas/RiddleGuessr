import React, { FC } from "react";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import HamburgerOpenedScreen from "./HamburgerOpenedScreen";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const HamburgerButton: FC<Props> = ({ menuItems, isOpen, onToggle }: Props) => {
  return (
    <>
      {isOpen ? (
        <HamburgerOpenedScreen menuItems={menuItems} onToggle={onToggle} />
      ) : (
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={onToggle}
        >
          <HamburgerMenuIcon />
        </button>
      )}
    </>
  );
};

export default HamburgerButton;

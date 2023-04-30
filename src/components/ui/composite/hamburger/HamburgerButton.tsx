import React, { FC } from "react";
import HamburgerMenuIcon from "../../atomic/icons/HamburgerMenuIcon";

interface Props {
  onToggle: () => void;
}

const HamburgerButton: FC<Props> = ({ onToggle }: Props) => {
  return (
    <button
      className="text-white hover:text-gray-300 focus:outline-none"
      onClick={onToggle}
    >
      <HamburgerMenuIcon />
    </button>
  );
};

export default HamburgerButton;

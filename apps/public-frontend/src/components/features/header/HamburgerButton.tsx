import { FC } from "react";
import HamburgerMenuIcon from "ui/icons/HamburgerMenuIcon";

interface Props {
  onToggle: () => void;
}

const HamburgerButton: FC<Props> = ({ onToggle }: Props) => {
  return (
    <button
      className="text-darkerGray hover:text-white focus:outline-none"
      onClick={onToggle}
    >
      <HamburgerMenuIcon />
    </button>
  );
};

export default HamburgerButton;

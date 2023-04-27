import React, { FC } from "react";
import CloseIcon from "../CloseIcon";
import HamburgerMenuContent from "./HamburgerMenuContent";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  onToggle: () => void;
}

const HamburgerOpenedScreen: FC<Props> = ({ menuItems, onToggle }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-zinc-800">
      <div className="fixed right-0 top-0 pt-7 pr-5">
        <CloseIcon onToggle={onToggle} />
      </div>
      <div className="flex items-center justify-center h-full pt-10 ">
        <HamburgerMenuContent menuItems={menuItems} />
      </div>
    </div>
  );
};

export default HamburgerOpenedScreen;

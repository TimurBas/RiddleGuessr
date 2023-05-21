import React, { FC } from "react";
import HamburgerMenuContent from "./HamburgerMenuContent";
import CloseIcon from "../../atomic/icons/CloseIcon";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  loginItems: MenuItem[];
  onToggle: () => void;
}

const HamburgerOpenedScreen: FC<Props> = ({
  menuItems,
  loginItems,
  onToggle,
}: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-darkerPrimary">
      <div className="fixed right-0 top-0 pt-7 pr-5">
        <CloseIcon onToggle={onToggle} />
      </div>
      <div className="flex items-center justify-center pt-10 ">
        <HamburgerMenuContent menuItems={menuItems} loginItems={loginItems} />
      </div>
    </div>
  );
};

export default HamburgerOpenedScreen;

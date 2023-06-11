import { FC } from "react";
import HamburgerMenuContent from "./HamburgerMenuContent";
import CloseIcon from "ui/icons/CloseIcon";

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
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-darkerPrimary">
      <div className="fixed right-0 top-0 pr-5 pt-7">
        <CloseIcon onToggle={onToggle} />
      </div>
      <div className="flex items-center justify-center pt-10 ">
        <HamburgerMenuContent menuItems={menuItems} loginItems={loginItems} />
      </div>
    </div>
  );
};

export default HamburgerOpenedScreen;

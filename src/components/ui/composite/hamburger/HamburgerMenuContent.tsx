import React, { FC } from "react";
import ButtonLink from "../link/ButtonLink";
import StandardLink from "../../atomic/StandardLink";
import Divider from "../../atomic/Divider";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  loginItems: MenuItem[];
}

const HamburgerMenuContent: FC<Props> = ({ menuItems, loginItems }: Props) => {
  return (
    <nav className="flex flex-col pt-4">
      <div className="flex flex-col items-start justify-center px-7">
        {menuItems.map((item) => (
          <StandardLink key={item.label} label={item.label} link={item.link} />
        ))}
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center w-screen gap-y-4 px-10">
        {loginItems.map((item) =>
          item.label === "Login" ? (
            <ButtonLink
              key={item.label}
              label={item.label}
              link={item.link}
              bgColor="bg-gray-500"
              textColor="text-white"
            />
          ) : (
            <ButtonLink
              key={item.label}
              label={item.label}
              link={item.link}
              textColor="text-white"
            />
          )
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenuContent;

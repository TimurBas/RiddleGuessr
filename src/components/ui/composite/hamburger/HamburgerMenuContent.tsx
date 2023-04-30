import React, { FC } from "react";
import StandardLink from "../../atomic/StandardLink";
import ButtonLink from "../link/ButtonLink";
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
    <nav className="flex flex-col items-start justify-center pt-4 pl-10 ">
      {menuItems.map((item) => (
        <StandardLink key={item.label} label={item.label} link={item.link} />
      ))}
      <Divider />
      <div className="flex flex-col items-center justify-center w-screen gap-y-4">
        {loginItems.map((item) =>
          item.label === "Login" ? (
            <ButtonLink
              key={item.label}
              label={item.label}
              link={item.link}
              color="bg-gray-500"
            />
          ) : (
            <ButtonLink key={item.label} label={item.label} link={item.link} />
          )
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenuContent;

import React, { FC } from "react";
import LinkButton from "./LinkButton";

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
}

const HeaderLinks: FC<Props> = ({ menuItems }) => {
  return (
    <div className="hidden lg:flex">
      {menuItems.map((item) => (
        <LinkButton key={item.label} label={item.label} link={item.link} />
      ))}
    </div>
  );
};

export default HeaderLinks;

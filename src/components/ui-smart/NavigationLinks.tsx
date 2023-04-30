import React, { FC } from "react";
import StandardLink from "../ui/atomic/StandardLink";
import ButtonLink from "../ui/composite/link/ButtonLink";

interface Link {
  label: string;
  link: string;
}

const NavigationLinks: FC = () => {
  const menuItems: Link[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const loginItems: Link[] = [
    { label: "Login", link: "/login" },
    { label: "Sign up", link: "/sign-up" },
  ];

  return (
    <div className="hidden lg:flex w-full">
      {menuItems.map((item) => (
        <StandardLink key={item.label} label={item.label} link={item.link} />
      ))}
      <div className="flex items-center justify-center ml-auto">
        {loginItems.map((item) =>
          item.label === "Login" ? (
            <StandardLink
              key={item.label}
              label={item.label}
              link={item.link}
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
    </div>
  );
};

export default NavigationLinks;

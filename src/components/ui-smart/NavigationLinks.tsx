import React, { FC } from "react";
import ButtonLink from "../ui/composite/link/ButtonLink";
import StandardLink from "../ui/atomic/StandardLink";

interface Link {
  label: string;
  link: string;
}

const NavigationLinks: FC = () => {
  const menuItems: Link[] = [
    { label: "Use cases", link: "/use-cases" },
    { label: "Pricing", link: "/pricing" },
    { label: "Community", link: "/community" },
    { label: "Contact", link: "/contact" },
  ];

  const loginItems: Link[] = [
    { label: "Login", link: "/login" },
    { label: "Sign up", link: "/sign-up" },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center w-full">
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
              height="h-8"
            />
          )
        )}
      </div>
    </div>
  );
};

export default NavigationLinks;

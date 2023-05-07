import React, { FC } from "react";
import StandardLink from "../ui/atomic/StandardLink";

interface Link {
  label: string;
  link: string;
}

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

const socialMediaItems: Link[] = [
  { label: "Instagram", link: "instagram.com/project-1" },
  { label: "Facebook", link: "facebook.com/project-1" },
];

const FooterLinks: FC = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-10 ">
      <div className="flex flex-col items-start  h-48">
        {menuItems.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-white"
          />
        ))}
      </div>
      <div className="flex flex-col items-start  h-48">
        {loginItems.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-white"
          />
        ))}
      </div>
      <div className="flex flex-col items-start h-48">
        {socialMediaItems.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;

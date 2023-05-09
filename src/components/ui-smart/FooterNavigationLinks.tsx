import React, { FC } from "react";
import Link from "next/link";
import HomeLogoIcon from "../ui/atomic/icons/HomeLogoIcon";
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

const FooterNavigationLinks: FC = () => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-x-24 md:gap-x-5">
      <div className="h-48 pt-2">
        <Link href="/" className="h-10 text-white">
          <HomeLogoIcon />
        </Link>
      </div>
      <div className="flex flex-col items-start h-48 text-sm lg:text-base">
        {menuItems.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-white"
          />
        ))}
      </div>
      <div className="flex flex-col items-start h-48 text-sm lg:text-base">
        {loginItems.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-white"
          />
        ))}
      </div>
      <div className="flex flex-col items-start h-48 text-sm lg:text-base">
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

export default FooterNavigationLinks;

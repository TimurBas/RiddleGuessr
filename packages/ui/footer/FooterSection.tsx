import { FC } from "react";
import FooterNavigationLinks from "ui/footer/FooterNavigationLinks";
import StandardLink from "ui/links/StandardLink";

interface Link {
  label: string;
  link: string;
}

const links: Link[] = [
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Terms of Use", link: "/terms-of-use" },
];

const FooterSection: FC = () => {
  return (
    <footer className="left-0 right-0 ml-14 mr-14 pb-16 pt-16 md:ml-28 md:mr-28 lg:ml-48 lg:mr-48">
      <FooterNavigationLinks />
      <div className="flex flex-row items-center justify-center gap-x-2 text-xs">
        <p className="text-gray-600">
          Copyright © {new Date().getFullYear()} Project-1 Inc. All rights
          reserved.
        </p>
        {links.map((item) => (
          <StandardLink
            key={item.label}
            label={item.label}
            link={item.link}
            textColor="text-gray-600"
          />
        ))}
      </div>
    </footer>
  );
};

export default FooterSection;

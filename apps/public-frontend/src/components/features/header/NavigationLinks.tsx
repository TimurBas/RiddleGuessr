import { FC } from "react";
import StandardLink from "ui/links/StandardLink";
import ButtonLink from "ui/links/ButtonLink";

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
  {
    label: "Login",
    link: "/login",
  },
  { label: "Sign up", link: "/sign-up" },
];

const NavigationLinks: FC = () => {
  return (
    <div className="hidden w-full items-center justify-center lg:flex">
      {menuItems.map((item) => (
        <StandardLink key={item.label} label={item.label} link={item.link} />
      ))}
      <div className="ml-auto flex items-center justify-center">
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

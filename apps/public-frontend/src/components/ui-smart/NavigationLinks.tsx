import React, { FC } from "react";
import ButtonLink from "../ui/composite/link/ButtonLink";
import StandardLink from "../ui/atomic/StandardLink";

interface Link {
  label: string;
  link: string;
}

const resolveLoginRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
  if (env === "production")
    return process.env.PROD_PUBLIC_PRIVATE_FRONTEND_URL_LOGIN;
  if (env === "preview")
    `https://private-frontend-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
      "/",
      "-"
    )}-timurbas.vercel.app`;
  return process.env.LOCAL_PUBLIC_PRIVATE_FRONTEND_URL_LOGIN;
};

const menuItems: Link[] = [
  { label: "Use cases", link: "/use-cases" },
  { label: "Pricing", link: "/pricing" },
  { label: "Community", link: "/community" },
  { label: "Contact", link: "/contact" },
];

const loginItems: Link[] = [
  {
    label: "Login",
    link: resolveLoginRedirectUrl(),
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

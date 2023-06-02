import React, { FC } from "react";
import StandardLink from "../../atomic/StandardLink";

interface Props {
  label: string;
  link: string;
  bgColor?: string;
  textColor?: string;
  height?: string;
}

const ButtonLink: FC<Props> = ({
  label,
  link,
  bgColor,
  textColor,
  height,
}: Props) => {
  return (
    <button
      className={`w-full rounded-md px-4 font-medium md:w-max ${
        bgColor ? bgColor : "bg-sky-500"
      }
      ${height ? height : "h-12 "}`}
    >
      <StandardLink label={label} link={link} textColor={textColor} />
    </button>
  );
};

export default ButtonLink;

import React, { FC } from "react";
import StandardLink from "../../atomic/StandardLink";

interface Props {
  label: string;
  link: string;
  bgColor?: string;
  textColor?: string;
}

const ButtonLink: FC<Props> = ({ label, link, bgColor, textColor }: Props) => {
  return (
    <button
      className={`rounded-md px-1 h-8 ${bgColor ? bgColor : "bg-sky-500"}`}
    >
      <StandardLink label={label} link={link} textColor={textColor} />
    </button>
  );
};

export default ButtonLink;

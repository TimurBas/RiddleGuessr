import React, { FC } from "react";
import StandardLink from "../../atomic/StandardLink";

interface Props {
  label: string;
  link: string;
  color?: string;
}

const ButtonLink: FC<Props> = ({ label, link, color }: Props) => {
  return (
    <button className={`rounded-md px-1 h-8 ${color ? color : "bg-sky-500"}`}>
      <StandardLink label={label} link={link} />
    </button>
  );
};

export default ButtonLink;

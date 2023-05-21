import React, { FC } from "react";

interface Props {
  label: string;
  link: string;
  textColor?: string;
}

const StandardLink: FC<Props> = ({ label, link, textColor }: Props) => {
  return (
    <a
      key={label}
      href={link}
      className={`pl-3 pr-4 py-2 font-medium ${
        textColor ? textColor : "text-darkerGray"
      } select-none hover:text-white`}
    >
      {label}
    </a>
  );
};

export default StandardLink;

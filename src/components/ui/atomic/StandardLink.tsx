import React, { FC } from "react";

interface Props {
  label: string;
  link: string;
}

const StandardLink: FC<Props> = ({ label, link }: Props) => {
  return (
    <a
      key={label}
      href={link}
      className="pl-3 pr-4 py-2 font-medium text-white select-none hover:text-slate-100 "
    >
      {label}
    </a>
  );
};

export default StandardLink;

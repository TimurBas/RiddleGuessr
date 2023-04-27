import React from "react";

interface LinkButtonProps {
  label: string;
  link: string;
}

const LinkButton = ({ label, link }: LinkButtonProps) => {
  return (
    <a
      key={label}
      href={link}
      className="flex items-start pl-3 pr-4 py-2 font-medium text-white text-xl select-none hover:text-gray-300"
    >
      {label}
    </a>
  );
};

export default LinkButton;

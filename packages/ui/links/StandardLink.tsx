import { FC } from "react";
import Link from "next/link";

interface Props {
  label: string;
  link: string;
  textColor?: string;
}

const StandardLink: FC<Props> = ({ label, link, textColor }: Props) => {
  return (
    <Link
      key={label}
      href={link}
      className={`py-2 pl-3 pr-4 font-medium ${
        textColor ? textColor : "text-darkerGray"
      } select-none hover:text-white`}
    >
      {label}
    </Link>
  );
};

export default StandardLink;

import { FC } from "react";
import HomeLogoIcon from "../icons/HomeLogoIcon";
import Link from "next/link";

const HomeLogoContent: FC = () => {
  return (
    <Link href="/">
      <div className="flex w-max select-none items-center justify-center text-white">
        <HomeLogoIcon />
        <h1 className="text-lg font-bold">RiddleGuessr</h1>
      </div>
    </Link>
  );
};

export default HomeLogoContent;

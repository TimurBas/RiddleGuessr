import { FC } from "react";

interface Props {
  onToggle: () => void;
}

const CloseIcon: FC<Props> = ({ onToggle }: Props) => {
  return (
    <svg
      onClick={onToggle}
      className="h-6 w-6 fill-current text-white hover:cursor-pointer hover:bg-red-600"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;

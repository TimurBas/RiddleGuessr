import React, { FC, KeyboardEvent } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const InputField: FC<Props> = ({
  value,
  setValue,
  placeholder,
  type,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      className="block w-1/2 rounded-md border p-2 md:w-1/3 lg:w-1/4"
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      value={value}
      onKeyDown={onKeyDown}
    ></input>
  );
};

export default InputField;

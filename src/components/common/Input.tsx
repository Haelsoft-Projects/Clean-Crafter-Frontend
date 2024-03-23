import { error } from "console";
import React from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  name: string;
  error: any;
  errorName: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
};
const Input = ({
  label,
  value,
  type,
  className,
  name,
  error,
  errorName,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div>
      <div className="mb-3">
        <label className="float-left text-gray-700 text-sm font-medium  mb-2">
          {label}
        </label>
        <input
          className={`appearance-none border ${className} ${
            error ? "border-red-500" : "border-[#717171]"
          } rounded-[10px] w-full py-2 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline`}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs font-poppins">{errorName}</p>
      )}
    </div>
  );
};

export default Input;

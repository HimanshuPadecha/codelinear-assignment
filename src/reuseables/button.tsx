import { inter } from "@/app/fonts";
import React from "react";

interface buttonProps {
  className?: string;
  children: string;
}

const Button = ({
  className = "",
  children,
}: buttonProps) => {
  return (
    <button className={`flex items-center justify-center text-center cursor-pointer ${inter.className} ${className || "border px-9 py-2 rounded-md"}`}>
      {children}
    </button>
  );
};

export default Button;

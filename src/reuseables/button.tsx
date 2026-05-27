import { inter } from "@/app/layout";
import React from "react";

interface buttonProps {
  className?: string;
  children: string;
}

const Button = ({
  className = "",
  children,
}: buttonProps) => {
  return <button className={`${className} ${inter.className} border px-9 py-1 rounded-md`}>{children}</button>;
};

export default Button;

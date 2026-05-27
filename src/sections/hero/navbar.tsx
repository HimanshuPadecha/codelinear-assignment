import { inter } from "@/app/layout";
import Button from "@/reuseables/button";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  const items = [
    { text: "SOLUTIONS", haveIcon: true },
    { text: "RESOURCES", haveIcon: true },
    {
      text: "ABOUT US",
      haveIcon: false,
    },
  ];
  return (
    <nav className="flex items-center justify-between min-w-[50%] rounded-md mt-5 px-3 py-2 bg-[#212526] text-xs">
      <span className="text-xl">N7</span>
      <div
        className={`flex items-center justify-center gap-4 ${inter.className}`}
      >
        {items.map(({ text, haveIcon }, index) => (
          <span key={index} className="flex items-center gap-1">{text} {haveIcon && <ChevronDownIcon className="size-5"/>}</span>
        ))}
      </div>
      <Button>REQUEST DEMO</Button>
    </nav>
  );
};

export default Navbar;

import { inter } from "@/app/fonts";
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
    <nav className="flex items-center justify-between w-[95%] md:w-auto md:min-w-[65%] lg:min-w-[60%] rounded-xl mt-6 px-4 md:px-5 py-2.5 bg-[#212526] text-white z-50">
      <span className="text-[22px]">N7</span>
      <div
        className={`hidden md:flex items-center justify-center gap-8 ${inter.className}`}
      >
        {items.map(({ text, haveIcon }, index) => (
          <span key={index} className="flex items-center gap-1.5 text-gray-100 hover:text-white cursor-pointer transition-colors text-[13px] tracking-wide">
            {text} {haveIcon && <ChevronDownIcon strokeWidth={1.5} className="size-4 opacity-90"/>}
          </span>
        ))}
      </div>
      <div className="hidden md:block">
        <Button className="border border-gray-400 text-white bg-transparent hover:bg-white/10 py-1.5 px-6 rounded-lg transition-colors text-[12px] tracking-wider">REQUEST DEMO</Button>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

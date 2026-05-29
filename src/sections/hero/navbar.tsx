"use client";

import { inter } from "@/app/fonts";
import Button from "@/reuseables/button";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { text: "SOLUTIONS", haveIcon: true },
    { text: "RESOURCES", haveIcon: true },
    {
      text: "ABOUT US",
      haveIcon: false,
    },
  ];
  return (
    <nav className="relative flex items-center justify-between w-[95%] lg:w-[85%] xl:w-[65%] rounded-xl mt-6 px-4 md:px-5 py-2.5 bg-[#212526] text-white z-50">
      <span className="text-[22px]">N7</span>
      <div
        className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 ${inter.className}`}
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
      <div className="md:hidden flex items-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#212526] rounded-xl flex flex-col p-4 gap-4 md:hidden shadow-lg border border-white/10">
          {items.map(({ text, haveIcon }, index) => (
            <span key={index} className={`flex items-center justify-between text-gray-100 hover:text-white cursor-pointer transition-colors text-[14px] tracking-wide ${inter.className} py-2 border-b border-white/5 last:border-0`}>
              {text} {haveIcon && <ChevronDownIcon strokeWidth={1.5} className="size-5 opacity-90"/>}
            </span>
          ))}
          <Button className="w-full mt-2 bg-linear-to-r from-[#00b4fd] to-[#0047b8] text-white py-2.5 rounded-lg transition-colors text-[13px] tracking-wider hover:opacity-90 border-none">
            REQUEST DEMO
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import Button from "@/reuseables/button";
import React from "react";
import Image from "next/image";

const HeroInfo = () => {
  const buttons = [
    {
      children: "REQUEST DEMO",
      className:
        "bg-gradient-to-r from-blue-500 to-blue-700 text-white uppercase tracking-wide px-8 py-3 rounded-xl font-medium text-sm shadow-md",
    },
    {
      children: "CONTACT US",
      className:
        "border border-cyan-200/70 text-gray-200 uppercase tracking-wide px-8 py-3 rounded-xl font-medium text-sm bg-[#02131b]",
    },
  ];

  return (
    <div className="flex w-full py-24">
      {/* info holder */}
      <div className="flex justify-center items-start flex-col w-[50%] px-24 py-20 gap-5">
        <h2 className="text-7xl">The new foundation of morden banking</h2>
        <span className="text-md text-gray-400">
          We drive innovation and growth, provide seamless <br /> customer
          experience and operational excellence
        </span>
        <div className="flex gap-2 mt-4">
          {buttons.map(({ children, className: buttonClassnames }, index) => (
            <Button className={buttonClassnames} key={index}>
              {children}
            </Button>
          ))}
        </div>
      </div>

      {/* image holder */}
      <div className="w-[50%] flex items-center justify-center">
        <Image
          src={"/hero/heroinfo.svg"}
          alt="Hero info"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default HeroInfo;

import React from "react";
import Navbar from "./navbar";
import HeroFooter from "./hero-footer";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import Button from "@/reuseables/button";
import { inter } from "@/app/fonts";

const HeroMain = () => {
  const middleButtons = [
    {
      children: "REQUEST DEMO",
      className:
        "bg-linear-to-r from-[#00b4fd] to-[#0047b8] text-white uppercase tracking-wide px-8 py-3 rounded-xl text-sm shadow-md hover:opacity-90 transition-opacity border-none",
    },
    {
      children: "CONTACT US",
      className:
        "border border-cyan-200/70 text-gray-200 uppercase tracking-wide px-8 py-3 rounded-xl font-medium text-sm bg-[#02131b]",
    },
  ];

  return (
    <div
      className={`flex items-center flex-col min-h-screen ${inter.className}`}
    >
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full py-12 lg:py-24 relative overflow-hidden">
        {/* info holder */}
        <FadeIn className="flex justify-center items-start flex-col w-full lg:w-[50%] px-6 md:px-12 lg:px-24 py-10 lg:py-20 gap-5 z-10">
          <h2 className="text-5xl md:text-6xl  font-medium tracking-tight leading-[1.1]">
            The new foundation of modern banking
          </h2>
          <span className="text-base md:text-lg text-gray-400 mt-2">
            We drive innovation and growth, provide seamless customer experience
            and operational excellence
          </span>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            {middleButtons.map(
              ({ children, className: buttonClassnames }, index) => (
                <Button
                  className={`w-full sm:w-auto whitespace-nowrap ${buttonClassnames}`}
                  key={index}
                >
                  {children}
                </Button>
              ),
            )}
          </div>
        </FadeIn>

        {/* image holder */}
        <FadeIn
          delay={0.2}
          className="w-full lg:w-[50%] flex items-center justify-center mt-12 lg:mt-0 relative px-6 md:px-12 lg:px-0"
        >
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          {/* Mobile Image */}
          <Image
            src={"/hero/heroinfo(small).svg"}
            alt="Hero info"
            width={700}
            height={700}
            className="w-full max-w-[500px] h-auto object-contain relative z-10 md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src={"/hero/heroinfo.svg"}
            alt="Hero info"
            width={700}
            height={700}
            className="hidden md:block w-full lg:max-w-none lg:w-[90%] h-auto object-contain relative z-10"
          />
        </FadeIn>
      </div>
      <HeroFooter />
    </div>
  );
};

export default HeroMain;

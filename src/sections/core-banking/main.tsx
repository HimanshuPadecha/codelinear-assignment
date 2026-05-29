"use client";
import Button from "@/reuseables/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/fade-in";

const CoreBankingMain = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full px-6 md:px-12 lg:px-24 xl:px-[140px] pt-8 lg:pt-14 pb-16 lg:pb-24 gap-12 bg-[#000d12] overflow-hidden min-h-[80vh]">
      {/* Huge Background Logo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[2%] w-[60%] h-[60%] opacity-50 pointer-events-none z-0 flex items-center justify-start">
        <Image
          src="/CB7-logo.svg"
          alt="CB7 Background Logo"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Left Content */}
      <FadeIn className="flex flex-col items-start gap-8 lg:w-[45%] z-10 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-100 font-medium tracking-tight leading-[1.15]">
          A complete cloud-based <br className="hidden lg:block" /> core
          banking.
        </h2>
        <p className="text-[#a1a1aa] text-[17px] leading-relaxed max-w-md">
          Faster time to market with our cloud-based core banking services
        </p>

        <div className="flex flex-col items-start gap-8 mt-2">
          <Button className="bg-linear-to-r from-[#00b4fd] to-[#0047b8] text-white py-3.5 px-8 rounded-lg transition-colors text-[13px] font-medium tracking-wide hover:opacity-90 border-none">
            REQUEST DEMO
          </Button>
          <button className="flex items-center gap-2 text-[#00a8e8] text-[13px] font-semibold tracking-wider hover:opacity-80 transition-opacity uppercase">
            <span className="underline underline-offset-4 decoration-[1.5px]">LEARN</span> MORE <ArrowRight strokeWidth={2} className="size-4" />
          </button>
        </div>
      </FadeIn>

      {/* Right Content - Laptop Image */}
      <FadeIn
        delay={0.2}
        className="lg:w-[55%] h-[280px] sm:mt-16 md:mt-20 md:h-[400px] lg:h-[600px] z-10 relative mt-5 lg:mt-0 w-full flex items-center"
      >
        {/* Made it larger and pulled it leftwards as requested */}
        <div className="absolute left-[5%] lg:left-[10%] xl:left-[15%] top-1/2 -translate-y-1/2 w-[110%] lg:w-[115%] xl:w-[125%] flex flex-col items-center">
          {/* Laptop Screen Frame */}
          <div className="relative w-full aspect-16/10 bg-[#000d12] border-[1.5px] border-[#0c2747] rounded-t-2xl rounded-b-sm p-1.5 md:p-2 pb-2 md:pb-3 shadow-2xl">
            <div className="relative w-full h-full bg-white overflow-hidden rounded-sm">
              <Image
                src="/core-banking/dashboard.svg"
                alt="Core Banking Dashboard"
                fill
                className="object-cover object-top-left"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="w-[105%] h-3 md:h-4 bg-[#000d12] border-[1.5px] border-[#0c2747] rounded-b-2xl rounded-t-sm ml-[-2.5%] -mt-px md:-mt-px z-20 shadow-2xl"></div>
        </div>
      </FadeIn>
    </div>
  );
};

export default CoreBankingMain;

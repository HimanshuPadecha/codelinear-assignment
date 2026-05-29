import React from "react";
import { inter } from "@/app/fonts";
import Button from "@/reuseables/button";
import InsightCard from "./insight-card";

import { FadeIn } from "@/components/fade-in";

const insightsData = [
  {
    isFeatured: true,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    imageSrc: "/insights/featured.svg",
  },
  {
    isFeatured: false,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    isFeatured: false,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const InsightsMain = () => {
  return (
    <section className={`relative w-full bg-[#010910] py-20 px-6 md:px-12 lg:px-24 xl:px-[140px] overflow-hidden lg:py-28 ${inter.className}`}>
      {/* Subtle blue glow on the left */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[40%] h-[60%] bg-[#0063f5] opacity-5 blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Heading & Button */}
        <FadeIn className="w-full lg:w-[40%] xl:w-[45%] flex flex-col items-start gap-12 lg:sticky lg:top-40 h-fit">
          <h2 className="text-[#eef1f6] text-4xl md:text-[44px] leading-[1.15] font-normal tracking-[-0.02em]">
            Get yourself up-to-speed on <br className="hidden lg:block" />
            all the things happening in <br className="hidden lg:block" />
            fintech
          </h2>
          
          <Button
            className="
              inline-flex items-center justify-center
              border border-[#2a3c4d] bg-transparent
              hover:bg-white/0.05 hover:border-white/30
              text-[#dde6f0] text-[11px] font-medium tracking-[0.15em] uppercase
              px-10 py-4 rounded-[10px]
              transition-all duration-200 cursor-pointer
            "
          >
            INSIGHTS
          </Button>
        </FadeIn>

        {/* Right Column: Grid of Cards */}
        <div className="w-full lg:w-[60%] xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {insightsData.map((data, index) => (
            <FadeIn
              key={index}
              delay={0.1 * index}
              className={data.isFeatured ? "md:col-span-2" : ""}
            >
              <InsightCard
                isFeatured={data.isFeatured}
                category={data.category}
                title={data.title}
                author={data.author}
                date={data.date}
                imageSrc={data.imageSrc}
              />
            </FadeIn>
          ))}

          {/* Bottom Right Link */}
          <FadeIn delay={0.3} className="md:col-span-2 flex justify-end mt-4">
            <a
              href="#"
              className="text-[#008cff] hover:text-[#33a3ff] transition-colors text-[11px] font-semibold tracking-widest uppercase flex items-center gap-2"
            >
              READ ALL INSIGHTS 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default InsightsMain;

"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CaseStudyCard, { CaseStudyData } from "./case-study-card";

interface CarouselProps {
  data: CaseStudyData[];
}

const CaseStudiesCarousel: React.FC<CarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Cards Container */}
      <div className="relative w-full max-w-[1200px] xl:max-w-[1400px] h-[450px] lg:h-[500px] flex justify-center items-center perspective-distant">
        {data.map((item, index) => {
          // Determine position relative to activeIndex
          let offset = index - activeIndex;
          
          // Handle wrap-around for infinite carousel feel
          if (offset < -1 && activeIndex === data.length - 1 && index === 0) {
            offset = 1;
          }
          if (offset > 1 && activeIndex === 0 && index === data.length - 1) {
            offset = -1;
          }

          // Calculate styles based on offset
          let translate = "0%";
          let scale = 1;
          let opacity = 0;
          let zIndex = 0;

          if (offset === 0) {
            // Active Card
            translate = "0%";
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (offset === -1 || (offset < 0 && Math.abs(offset) !== data.length - 1)) {
            // Left Card
            translate = "-15%";
            scale = 0.85;
            opacity = 0.3;
            zIndex = 20;
          } else if (offset === 1 || (offset > 0 && Math.abs(offset) !== data.length - 1)) {
            // Right Card
            translate = "15%";
            scale = 0.85;
            opacity = 0.3;
            zIndex = 20;
          }

          return (
            <div
              key={index}
              className="absolute w-[95%] md:w-[850px] lg:w-[1000px] xl:w-[1100px] h-full max-h-[400px] lg:max-h-[450px] transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${translate}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <CaseStudyCard data={item} />
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="mt-12 flex items-center justify-between w-full max-w-[850px] lg:max-w-[1000px] xl:max-w-[1100px] px-4 md:px-0 relative">
        {/* Empty space for flex alignment to center the dots exactly */}
        <div className="w-24 hidden md:block"></div>

        {/* Center: Arrows and Dots */}
        <div className="flex items-center gap-8 mx-auto">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#008cff] flex items-center justify-center text-[#008cff] hover:bg-[#008cff]/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-3">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full border border-[#2a3c4d] ${
                  idx === activeIndex
                    ? "w-8 h-2.5 bg-[#005bb5] border-transparent"
                    : "w-2.5 h-2.5 bg-transparent hover:bg-white/10"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#008cff] flex items-center justify-center text-[#008cff] hover:bg-[#008cff]/10 transition-colors"
          >
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Right: View All */}
        <div className="absolute right-4 md:right-0">
          <a href="#" className="text-[#008cff] hover:text-[#33a3ff] transition-colors text-[11px] font-semibold tracking-widest uppercase flex items-center gap-2">
            VIEW ALL 
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;

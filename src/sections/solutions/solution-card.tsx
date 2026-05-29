"use client"
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  iconPath: string;
  tag?: string;
}

const SolutionCard = ({ title, description, iconPath, tag }: SolutionCardProps) => {
  return (
    <div className="flex flex-col items-start pr-4">
      <div className="flex justify-between items-start w-full mb-6 md:mb-8">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          {/* Fallback styling for when SVG is missing */}
          <div className="absolute inset-0 rounded animate-pulse -z-10" />
          <Image 
            src={iconPath} 
            alt={title} 
            fill 
            className="object-contain" 
            onError={(e) => {
              // Hide image if it fails to load so the fallback shows
              e.currentTarget.style.opacity = '0';
            }}
          />
        </div>
        {tag && (
          <span className="text-gray-400 text-[11px] tracking-widest uppercase font-medium mt-1">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-[20px] md:text-[22px] text-gray-100 font-normal tracking-wide mb-5">
        {title}
      </h3>
      <p className="text-[#a1a1aa] text-[14px] leading-[1.8] mb-8">
        {description}
      </p>
      <button className="flex items-center gap-2 text-[#00a8e8] text-[12px] font-semibold tracking-wider hover:opacity-80 transition-opacity uppercase">
        <span className="underline underline-offset-4 decoration-[1.5px]">LEARN</span> MORE <ArrowRight strokeWidth={2} className="size-4" />
      </button>
    </div>
  );
};

export default SolutionCard;

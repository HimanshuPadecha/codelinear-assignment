import React from "react";
import Image from "next/image";

interface FeatureRowProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="12" fill="#0063f5" />
    <path
      d="M7.5 12L10.5 15L16.5 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FeatureRow: React.FC<FeatureRowProps> = ({
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 w-full ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <h3 className="text-[#0a1420] text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-[#4b5b6d] text-sm md:text-base leading-relaxed max-w-[400px]">
          {description}
        </p>
        <div className="flex flex-col gap-4 mt-2">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-[#324050] text-sm md:text-[15px] font-medium">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureRow;

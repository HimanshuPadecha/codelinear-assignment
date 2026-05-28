import Image from "next/image";
import React from "react";

interface InsightCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  imageSrc?: string;
  isFeatured?: boolean;
}

const InsightCard: React.FC<InsightCardProps> = ({
  category,
  title,
  author,
  date,
  imageSrc,
  isFeatured = false,
}) => {
  return (
    <div
      className={`bg-[#051119] rounded-[24px] overflow-hidden flex flex-col ${
        isFeatured ? "md:flex-row md:col-span-2" : "col-span-1"
      } h-full`}
    >
      {/* Image Area (only for featured) */}
      {isFeatured && imageSrc && (
        <div className="w-full md:w-[45%] p-4 lg:p-6 flex">
          <div className="relative w-full h-[200px] md:h-auto md:flex-1 rounded-[16px] overflow-hidden bg-[#081729]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div
        className={`flex flex-col justify-between w-full ${
          isFeatured ? "md:w-[55%] p-6 lg:p-8 lg:pl-2" : "p-8 lg:p-10"
        }`}
      >
        <div>
          <span className="text-[#008cff] text-[10px] font-semibold tracking-widest uppercase mb-3 block">
            {category}
          </span>
          <h3 className="text-[#f0f4f8] text-[18px] lg:text-[22px] leading-[1.3] font-normal mb-5">
            {title}
          </h3>

          <div className="flex items-center justify-start gap-4 text-[#5c7389] text-[11px] font-medium mb-8">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>

        <button className="w-full py-3 md:py-4 rounded-xl border border-[#2a3c4d] hover:border-[#40566b] bg-transparent text-[#8e9ba8] hover:text-[#d3dce6] text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-200">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default InsightCard;

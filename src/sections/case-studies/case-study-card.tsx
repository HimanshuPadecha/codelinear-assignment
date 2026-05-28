import React from "react";
import Image from "next/image";

export interface CaseStudyData {
  category: string;
  title: string;
  clientName: string;
  clientLogoSrc?: string;
  imageSrc: string;
}

interface CaseStudyCardProps {
  data: CaseStudyData;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ data }) => {
  return (
    <div className="w-full h-full bg-[#051119] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
      {/* Image Area */}
      <div className="w-full md:w-[45%] h-[250px] md:h-full relative bg-[#071321]">
        <Image
          src={data.imageSrc}
          alt={data.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-between w-full md:w-[55%] p-8 lg:p-12">
        <div>
          <span className="text-[#005bb5] text-[10px] font-semibold tracking-widest uppercase mb-4 block">
            {data.category}
          </span>
          <h3 className="text-[#eef1f6] text-[24px] lg:text-[32px] leading-[1.25] font-normal mb-8">
            {data.title}
          </h3>
          
          <div className="flex items-center justify-start gap-2 text-[#7d92a8] text-sm font-medium mb-10">
            {data.clientLogoSrc ? (
              <div className="relative h-6 w-32">
                <Image src={data.clientLogoSrc} alt={data.clientName} fill className="object-contain object-left" unoptimized />
              </div>
            ) : (
              <span className="text-white text-base font-semibold flex items-center gap-2">
                {/* Fallback Icon */}
                <div className="w-5 h-5 rounded-full bg-[#7d92a8] flex items-center justify-center text-[10px] text-white">
                  {data.clientName.charAt(0)}
                </div>
                {data.clientName}
              </span>
            )}
          </div>
        </div>

        <button className="w-full py-4 rounded-[12px] border border-[#2a3c4d] hover:border-[#40566b] bg-[#020b12] text-[#8e9ba8] hover:text-[#d3dce6] text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-200 mt-auto shadow-inner">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;

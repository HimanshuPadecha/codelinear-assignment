import Image from "next/image";
import React from "react";

const ImageHolder = ({ path, alt }: { path: string; alt: string }) => {
  return (
    <div className="relative w-[100px] md:w-[120px] lg:w-[140px] h-[30px] md:h-[40px] opacity-70 hover:opacity-100 transition-opacity">
      <Image src={path} alt={alt} fill className="object-contain" />
    </div>
  );
};

const HeroFooter = () => {
  const images = [
    { path: "/hero/shells.svg", alt: "shells" },
    { path: "/hero/smartfinder.svg", alt: "smart-finder" },
    { path: "/hero/zoomerr.svg", alt: "zoomerr" },
    { path: "/hero/artvenue.svg", alt: "artvenue" },
    { path: "/hero/kontrastr.svg", alt: "kontrastr" },
    { path: "/hero/wavesmarathon.svg", alt: "wavesmarathon" },
  ];
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col gap-4 pb-12 mt-4 lg:mt-0">
      <span className="text-gray-400 text-sm md:text-base font-medium">Trusted By:</span>
      <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 md:gap-x-10 lg:gap-x-12">
        {images.map(({ path, alt }, index) => (
          <ImageHolder key={index} path={path} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default HeroFooter;

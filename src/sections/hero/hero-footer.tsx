import Image from "next/image";
import React from "react";

const ImageHolder = ({ path, alt }: { path: string; alt: string }) => {
  return <Image src={path} alt={alt} height={100} width={100} />;
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
    <div className="w-[90%] flex flex-col gap-3">
      <span>Trusted By:</span>
      <div className="flex items-center justify-start gap-6">
        {images.map(({ path, alt }, index) => (
          <ImageHolder key={index} path={path} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default HeroFooter;

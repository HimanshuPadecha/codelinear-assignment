import React from "react";
import { inter } from "@/app/fonts";
import CaseStudiesCarousel from "./carousel";
import { CaseStudyData } from "./case-study-card";

const caseStudiesData: CaseStudyData[] = [
  {
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    clientName: "Zoomerr",
    clientLogoSrc: "/hero/zoomerr.svg", // Ensure this exists or use fallback
    imageSrc: "/insights/featured.svg", // Reusing the pattern for now
  },
  {
    category: "MARKETING",
    title: "Boosting conversions with targeted email campaigns",
    clientName: "Fintechify",
    imageSrc: "/insights/featured.svg",
    clientLogoSrc : "/hero/shells.svg"
  },
  {
    category: "STRATEGY",
    title: "Revamping the digital banking experience",
    clientName: "BankNext",
    imageSrc: "/insights/featured.svg",
    clientLogoSrc : "/hero/artvenue.svg"
  },
  {
    category: "DESIGN",
    title: "Creating an accessible platform for everyone",
    clientName: "Inclusiv",
    imageSrc: "/insights/featured.svg",
    clientLogoSrc: "/hero/smartfinder.svg"
  },
];

const CaseStudiesMain = () => {
  return (
    <section className={`relative w-full bg-[#010b14] py-20 lg:py-32 overflow-hidden ${inter.className}`}>
      <div className="w-full flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[#f0f4f8] text-4xl md:text-[50px] font-normal tracking-tight mb-20 text-center">
          Our Case Studies
        </h2>

        {/* Carousel */}
        <CaseStudiesCarousel data={caseStudiesData} />
      </div>
    </section>
  );
};

export default CaseStudiesMain;

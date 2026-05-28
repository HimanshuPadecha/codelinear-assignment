import React from "react";
import { inter } from "@/app/fonts";

const Star = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b0c4d9"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0"
  >
    <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1l14.2-14.2" />
  </svg>
);

const MarqueeItem = ({ title }: { title: string }) => (
  <React.Fragment>
    <Star />
    <span className="text-[#0063f5] text-[32px] sm:text-[40px] md:text-[50px] font-medium tracking-[-0.02em] whitespace-nowrap">
      {title}
    </span>
    <Star />
    <span className="text-[#08131e] text-[32px] sm:text-[40px] md:text-[50px] font-medium tracking-[-0.02em] whitespace-nowrap">
      Say 👋 to the new way of banking
    </span>
  </React.Fragment>
);

const MarqueeMain = () => {
  return (
    <section className={`w-full bg-white py-12 md:py-9 overflow-hidden ${inter.className}`}>
      <div className="relative flex w-full">
        {/* We use an inline style to define the animation keyframes. In Tailwind v4 standard this can also be done via CSS */}
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-x 30s linear infinite;
            display: flex;
            width: max-content;
          }
        `}</style>
        <div className="animate-marquee flex items-center gap-8 md:gap-12 pl-8 md:pl-12">
          {/* Double the content for seamless infinite scrolling */}
          <div className="flex items-center gap-8 md:gap-12">
            <MarqueeItem title="N7" />
            <MarqueeItem title="CB7" />
            <MarqueeItem title="N7" />
            <MarqueeItem title="CB7" />
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <MarqueeItem title="N7" />
            <MarqueeItem title="CB7" />
            <MarqueeItem title="N7" />
            <MarqueeItem title="CB7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeMain;

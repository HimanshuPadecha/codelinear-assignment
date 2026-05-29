import React from "react";
import Image from "next/image";
import { inter } from "@/app/fonts";
import Button from "@/reuseables/button";
import { FadeIn } from "@/components/fade-in";

interface CTAMainProps {
  description?: string;
  logoSrc?: string;
  wrapperClassName?: string;
  showLogo?: boolean;
  variant?: "default" | "transparent";
}

const CTAMain: React.FC<CTAMainProps> = ({
  description = "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  logoSrc = "/CB7-logo.svg",
  wrapperClassName = "w-full bg-[#000d12] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20 md:pt-14 md:pb-32 lg:pb-40",
  showLogo = true,
  variant = "default",
}) => {
  const cardBg =
    variant === "transparent"
      ? "bg-transparent"
      : "bg-linear-to-r from-[#031626] to-[#010b14]";

  return (
    <section className={`${wrapperClassName} ${inter.className}`}>
      <FadeIn
        className={`relative w-full rounded-[28px] md:rounded-[36px] ${cardBg} overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 px-8 sm:px-12 md:px-16 lg:px-16 xl:px-24 py-14 md:py-[80px]`}
      >
        {/* Background SVG Logo */}
        {showLogo && (
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-0 top-0 z-0 h-full w-[80%]"
          >
            <Image
              src={logoSrc}
              alt=""
              fill
              className="object-contain object-right-center opacity-40 mix-blend-screen"
              priority
            />
          </div>
        )}

        {/* Left: Copy */}
        <div className="relative z-10 flex flex-col gap-5 w-full lg:w-[52%] xl:w-[48%]">
          <h2
            className="text-[#eef1f6] font-normal leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
          >
            Take the full advantage of 
            going paper-less now.
          </h2>
          <p
            className="text-[14.5px] md:text-[15.5px] leading-[1.7] font-normal max-w-[440px]"
            style={{ color: "rgba(160, 185, 215, 0.70)" }}
          >
            {description}
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto lg:shrink-0">
          <Button
            className="
              inline-flex items-center justify-center
              border border-white/0.18 bg-transparent
              hover:bg-white/0.05 hover:border-white/30
              text-[#dde6f0] text-[11.5px] font-medium tracking-[0.13em] uppercase
              px-9 py-[15px] rounded-[10px]
              transition-all duration-200 cursor-pointer
              whitespace-nowrap
            "
          >
            CONTACT US
          </Button>

          <Button
            className="
              inline-flex items-center justify-center
              bg-linear-to-r from-[#00b4fd] to-[#0047b8] text-white text-[11.5px] font-medium tracking-[0.13em] uppercase
              px-9 py-[15px] rounded-[10px]
              transition-all duration-200 cursor-pointer hover:opacity-90 border-none
              whitespace-nowrap
            "
          >
            REQUEST DEMO
          </Button>
        </div>
      </FadeIn>
    </section>
  );
};

export default CTAMain;

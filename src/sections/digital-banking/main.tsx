import { inter } from "@/app/fonts";
import Button from "@/reuseables/button";
import CTAMain from "@/sections/cta/main";
import FeatureRow from "./feature-row";

import { FadeIn } from "@/components/fade-in";

const featureRowsData = [
  {
    title: "Fully compliant with regulatory requirement",
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    bullets: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
    imageSrc: "/digital-banking/phone-mockup-1.svg",
    imageAlt: "Dashboard mockup showing balances",
    reverse: false,
  },
  {
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
    imageSrc: "/digital-banking/phone-mockup-2.svg",
    imageAlt: "Chart mockup showing metrics",
    reverse: true,
  },
  {
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adoptable and Scalable",
    ],
    imageSrc: "/digital-banking/phone-mockup-3.svg",
    imageAlt: "Profile settings mockup",
    reverse: false,
  },
];

const DigitalBankingMain = () => {
  return (
    <section
      className={`relative w-full bg-[#f4f8fc] py-20 lg:py-32 ${inter.className}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Spiral Vector — behind left sticky column */}
        <img
          src="/digital-banking/Vector.svg"
          alt=""
          className="absolute top-[20%] left-[3%] w-[28%] h-auto opacity-35"
        />

        <img
          src="/digital-banking/7.svg"
          alt=""
          className="absolute right-[-2%] top-[25%] w-[35%] h-auto opacity-100 pointer-events-none"
        />

        {/* Blue glow — bottom left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0063f5] opacity-10 rounded-full blur-[120px]" />
      </div>

      {/* Background container to hide overflow without breaking sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-center">
        {/* Background SVG - large N7 outline */}
        <div className="relative w-full px-6 md:px-12 lg:px-24 xl:px-[140px] opacity-100 pt-10">
          <img
            src="/N7.svg"
            alt="background n7"
            className="w-full max-w-[75%] md:max-w-[65%] lg:max-w-[800px] h-auto object-top-left ml-8 md:ml-16 lg:ml-24"
          />
        </div>

        {/* Blue Glow Effect */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0063f5] opacity-10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full px-6 md:px-12 lg:px-24 xl:px-[140px] gap-12 lg:gap-24">
        {/* Sticky Left Column: Title Area */}
        <FadeIn className="relative w-full lg:w-[40%] flex flex-col items-start  lg:top-40 h-fit">
          <h2 className="text-[#0a1420] text-4xl md:text-[50px] font-normal leading-[1.1] tracking-tight mb-6">
            Digital banking <br />
            out-of-the-box
          </h2>
          <p className="text-[#4b5b6d] text-sm md:text-[15px] leading-relaxed mb-8">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button className="bg-[#0063f5] hover:bg-[#0054d4] text-white text-[11.5px] font-medium tracking-[0.13em] uppercase px-9 py-[15px] rounded-[10px] whitespace-nowrap transition-all duration-200 cursor-pointer">
              REQUEST DEMO
            </Button>
            <a
              href="#"
              className="text-[#0063f5] text-[11.5px] font-medium tracking-[0.13em] uppercase hover:underline flex items-center gap-2"
            >
              LEARN MORE
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Right Column: Feature Rows */}
        <div className="w-full lg:w-[60%] flex flex-col gap-24 md:gap-32 items-center">
          {featureRowsData.map((data, index) => (
            <FadeIn key={index} delay={0.1}>
              <FeatureRow
                title={data.title}
                description={data.description}
                bullets={data.bullets}
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
                reverse={data.reverse}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <FadeIn className="relative z-10 w-full mt-24 md:mt-32 pb-10">
        <CTAMain
          description="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
          logoSrc="/N7.svg"
          wrapperClassName="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        />
      </FadeIn>
    </section>
  );
};

export default DigitalBankingMain;

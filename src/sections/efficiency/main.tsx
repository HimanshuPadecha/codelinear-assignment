"use client"
import Image from "next/image";
import { Check } from "lucide-react";
import { inter } from "@/app/fonts";

import { FadeIn } from "@/components/fade-in";

const EfficiencyMain = () => {
  const leftFeatures = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ];

  const rightFeatures = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
      <div className="w-[18px] h-[18px] rounded-full bg-[#0066ff] flex items-center justify-center shrink-0 mt-1">
        <Check strokeWidth={3} className="text-white size-[12px]" />
      </div>
      <p className="text-[#a1a1aa] text-[15px] leading-[1.6] font-normal">{text}</p>
    </div>
  );

  return (
    <div className={`relative flex flex-col-reverse lg:flex-row items-center w-full px-6 md:px-12 lg:px-24 xl:px-[140px] py-20 lg:py-32 gap-16 lg:gap-12 bg-[#000d12] overflow-hidden min-h-[80vh] ${inter.className}`}>
      
      {/* Left Content - Laptop Image */}
      <FadeIn className="lg:w-[50%] h-[400px] lg:h-[600px] z-10 relative mt-16 lg:mt-0 w-full flex items-center">
        <div className="absolute right-[5%] lg:right-[15%] xl:right-[20%] top-1/2 -translate-y-1/2 w-[110%] lg:w-[125%] xl:w-[130%] flex flex-col items-center">
           
           {/* Laptop Screen Frame */}
           <div className="relative w-full aspect-16/10 bg-[#000d12] border-[1.5px] border-[#0c2747] rounded-t-2xl rounded-b-sm p-1.5 md:p-2 pb-2 md:pb-3 shadow-2xl">
             <div className="relative w-full h-full bg-white overflow-hidden rounded-sm">
               <Image
                 src="/efficiency/dashboard.svg"
                 alt="KYC Dashboard"
                 fill
                 className="object-cover object-top-right"
                 onError={(e) => {
                   e.currentTarget.style.opacity = '0';
                 }}
               />
             </div>
           </div>
           
           <div className="w-[105%] h-3 md:h-4 bg-[#000d12] border-[1.5px] border-[#0c2747] rounded-b-2xl rounded-t-sm ml-[-2.5%] -mt-px md:-mt-px z-20 shadow-2xl"></div>
           
        </div>
      </FadeIn>

      {/* Right Content - Text and Features Grid */}
      <FadeIn delay={0.2} className="flex flex-col items-start gap-8 lg:w-[50%] z-10 relative lg:pl-10">
        <h2 className="text-[32px] md:text-4xl lg:text-[40px] text-gray-100 font-medium tracking-tight leading-tight">
          Run a more efficient, flexible,and digitally <br className="hidden xl:block" /> connected corebanking system
        </h2>
        
        <div className="flex flex-col gap-6 w-full mt-2">
          <h3 className="text-gray-100 font-semibold text-[17px]">
            What you will get:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <div className="flex flex-col gap-5 pr-2">
              {leftFeatures.map(  (text, i) => (
                <FeatureItem key={`left-${i}`} text={text} />
              ))}
            </div>
            <div className="flex flex-col gap-5 pr-2">
              {rightFeatures.map((text, i) => (
                <FeatureItem key={`right-${i}`} text={text} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
      
    </div>
  );
};

export default EfficiencyMain;

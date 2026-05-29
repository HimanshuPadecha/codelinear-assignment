import React from "react";
import Button from "@/reuseables/button";
import SolutionCard from "./solution-card";
import { inter } from "@/app/fonts";

import { FadeIn } from "@/components/fade-in";

const SolutionsMain = () => {
  const solutions = [
    {
      title: "Core Banking CB7",
      description:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      iconPath: "/solutions/core-banking.svg",
    },
    {
      title: "Digital Banking N7",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      iconPath: "/solutions/digital-banking.svg",
    },
    {
      title: "Open Banking",
      description:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      iconPath: "/solutions/open-banking.svg",
    },
    {
      title: "Loan Origination System",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      iconPath: "/solutions/loan-origination.svg",
      tag: "NBFC",
    },
    {
      title: "Loan Management System",
      description:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      iconPath: "/solutions/loan-management.svg",
      tag: "NBFC",
    },
  ];

  return (
    <div className={`flex flex-col lg:flex-row w-full px-6 md:px-12 lg:px-24 xl:px-[140px] pt-16 lg:pt-24 pb-8 lg:pb-8 gap-12 lg:gap-24 bg-transparent ${inter.className}`}>
      {/* Header Side */}
      <FadeIn className="flex flex-col items-start gap-12 lg:w-[40%] lg:sticky lg:top-40 h-fit">
        <h2 className="text-4xl md:text-5xl text-gray-100 font-normal tracking-tight leading-tight">
          All of our solutions are <br className="hidden lg:block" /> tailor-made to your needs
        </h2>
        <Button className="border border-white/50 text-gray-100 bg-transparent hover:bg-white/10 py-3 px-10 rounded-lg transition-colors text-[12px] font-medium tracking-wider">
          REQUEST DEMO
        </Button>
      </FadeIn>

      {/* Grid Side */}
      <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {solutions.map((solution, index) => (
          <FadeIn key={index} delay={0.1 * (index % 4)}>
            <SolutionCard {...solution} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default SolutionsMain;

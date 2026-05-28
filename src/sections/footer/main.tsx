import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { inter } from "@/app/fonts";

const FooterMain = () => {
  return (
    <footer
      className={`bg-[#020b12] text-[#f0f4f8] pt-20 lg:pt-32 pb-12 px-6 md:px-12 lg:px-24 xl:px-[140px] ${inter.className}`}
    >
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
        {/* Left Side: Large N7 Logo */}
        <div className="w-full lg:w-[40%] flex items-start">
          <div className="relative w-full max-w-[300px] h-[150px] lg:max-w-[400px] lg:h-[200px]">
            <Image
              src="/footer/n7-footer.svg"
              alt="N7 Logo"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>
        </div>

        {/* Right Side: Grid of Links and Addresses */}
        <div className="w-full lg:w-[60%] flex flex-col gap-16">
          
          {/* Top Row: Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-base font-medium mb-6">London</h4>
              <p className="text-[#a3b1c6] text-sm leading-relaxed max-w-[250px]">
                Linktia Infosystems Ltd – CB7, <br />
                26 Main Road Sundridge, TN14 6EP, <br />
                England, United Kingdom.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-base font-medium mb-6">Dubai</h4>
              <p className="text-[#a3b1c6] text-sm leading-relaxed max-w-[250px]">
                Linktia Infosystems Ltd – <br />
                CB7, Jumeirah Business, Center 5 <br />
                Cluster W, Jumeirah Lakes Towers, <br />
                Dubai, United Arab Emirates
              </p>
            </div>

            {/* Column 3 */}
            <div>
              {/* Note: The image shows London but the address is Pune, India. Kept exact wording from image. */}
              <h4 className="text-white text-base font-medium mb-6">London</h4>
              <p className="text-[#a3b1c6] text-sm leading-relaxed max-w-[250px]">
                Linktia Infosystems Ltd – <br />
                CB7, Nirmal, Anand Nagar, <br />
                Suncity Road, Pune, <br />
                Maharashtra, 411041, India
              </p>
            </div>
          </div>

          {/* Bottom Row: Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-base font-medium mb-6">Solutions</h4>
              <ul className="flex flex-col gap-4">
                <li><FooterLink href="#">Core Banking CB7</FooterLink></li>
                <li><FooterLink href="#">Digital Banking N7</FooterLink></li>
                <li><FooterLink href="#">Open Banking</FooterLink></li>
                <li><FooterLink href="#">Loan Origination System</FooterLink></li>
                <li><FooterLink href="#">Loan Management System</FooterLink></li>
                <li><FooterLink href="#">Digital Transformation</FooterLink></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-base font-medium mb-6">N7 Banking</h4>
              <ul className="flex flex-col gap-4">
                <li><FooterLink href="#">About Us</FooterLink></li>
                <li><FooterLink href="#">Solutions</FooterLink></li>
                <li><FooterLink href="#">Contact</FooterLink></li>
                <li><FooterLink href="#">Company</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
                <li><FooterLink href="#">Insights</FooterLink></li>
                <li><FooterLink href="#">Core Team</FooterLink></li>
                <li><FooterLink href="#">Brand Center</FooterLink></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white text-base font-medium mb-6">Our Socials</h4>
              <ul className="flex flex-col gap-4">
                <li><FooterLink href="#">LinkedIn</FooterLink></li>
                <li><FooterLink href="#">X</FooterLink></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 text-[#5c7389] text-xs font-medium leading-[1.8] max-w-[900px] xl:max-w-[1000px] border-t border-[#1e2d3d]/50 lg:ml-auto">
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
        Commercial Brand] — [Registered under the Companies Act 2006 in England
        and Wales | Number of Incorporation 13100992]
      </div>
    </footer>
  );
};

// Helper component for links
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="group flex items-center justify-between text-[#a3b1c6] hover:text-[#008cff] transition-colors text-sm w-full md:w-[90%] lg:w-[85%]"
  >
    <span>{children}</span>
    <ArrowRight className="w-4 h-4 text-[#008cff] group-hover:translate-x-1 transition-transform" />
  </a>
);

export default FooterMain;

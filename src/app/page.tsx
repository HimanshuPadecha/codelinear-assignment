import HeroMain from "@/sections/hero/main";
import SolutionsMain from "@/sections/solutions/main";
import CoreBankingMain from "@/sections/core-banking/main";
import EfficiencyMain from "@/sections/efficiency/main";
import DigitalBankingMain from "@/sections/digital-banking/main";
import CTAMain from "@/sections/cta/main";
import MarqueeMain from "@/sections/marquee/main";
import CaseStudiesMain from "@/sections/case-studies/main";
import InsightsMain from "@/sections/insights/main";
import FooterMain from "@/sections/footer/main";
import CTAMainHolder from "@/sections/cta/cta-main-holder";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <SolutionsMain />
      <CoreBankingMain />
      <EfficiencyMain />
      <CTAMain />
      <MarqueeMain />
      <DigitalBankingMain />
      <InsightsMain />
      <CaseStudiesMain />
      <CTAMainHolder />
      <FooterMain />
    </main>
  );
}

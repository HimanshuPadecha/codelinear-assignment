import HeroMain from "@/sections/hero/main";
import SolutionsMain from "@/sections/solutions/main";
import CoreBankingMain from "@/sections/core-banking/main";
import EfficiencyMain from "@/sections/efficiency/main";
import CTAMain from "@/sections/cta/main";
import MarqueeMain from "@/sections/marquee/main";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <SolutionsMain />
      <CoreBankingMain />
      <EfficiencyMain />
      <CTAMain />
      <MarqueeMain />
    </main>
  );
}

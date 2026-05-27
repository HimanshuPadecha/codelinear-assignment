import React from "react";
import Navbar from "./navbar";
import HeroInfo from "./hero-info";
import HeroFooter from "./hero-footer";

const HeroMain = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Navbar />
      <HeroInfo />
      <HeroFooter />
    </div>
  );
};

export default HeroMain;

import React from "react";
import Wrapper from "../../components/Wrapper";
// import HeroImage from "../assets/images/home-hero-bg.png";
import SocialHandles from "../../components/SocialHandles";

import HomeSlider from "./HomeSlider";
import TextShadow from "../../components/TextShadow";

export default function Home() {
  return (
    <section className="h-[calc(100vh-64px)] relative overflow-hidden bg-theme-blue-dark flex items-center">
      {/* Text Shadow Flow */}

      <div
        className="transform  origin-right -rotate-90 top-0
        absolute  right-10"
      >
        <TextShadow text="developer" />
      </div>

      {/* <h1
        className=" text-[190px] font-extrabold
        -bottom-16
        z-10
        absolute -left-9 text-theme-blue-dark filter drop-shadow-lg drop-shadow-cyan-500/10"
      >
        ER
      </h1> */}

      <Wrapper properties="">
        <section className=" relative mt-2 space-y-20">
          {/* Bio */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h1 className="text-3xl max-mobile-sm:text-2xl font-bold text-theme-camel-light">
                I'm <span className="">Tayyaba Bhatti</span>
              </h1>
              <h3 className="font-medium max-mobile-sm:text-sm text-theme-camel-light">
                React JS Developer
              </h3>
            </div>
            {/* Socials */}
            <SocialHandles />
          </div>

          {/* Home Slider */}
          <div className="relative w-50 home-slider py-2 rounded-2xl z-10">
            <HomeSlider />
          </div>
        </section>
      </Wrapper>
    </section>
  );
}

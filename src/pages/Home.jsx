import React from "react";
import Wrapper from "../components/Wrapper";
// import HeroImage from "../assets/images/home-hero-bg.png";
import SocialHandles from "../components/SocialHandles";
import TailwindIcon from "../assets/images/tailwind-icon.png";
import ReactIcon from "../assets/images/react-icon.png";
import ViteIcon from "../assets/images/vite-icon.png";
import FirebaseIcon from "../assets/images/firebase-icon.png";

export default function Home() {
  return (
    <section className="h-[calc(100vh-64px)] relative overflow-hidden bg-theme-blue-dark flex items-center">
      {/*Icons flow  */}

      <h1
        className=" text-5xl max-mobile-sm:text-4xl font-extrabold
        transform  origin-right -rotate-90 top-0
        absolute  right-10 text-theme-blue-dark filter drop-shadow-lg drop-shadow-cyan-500/20"
      >
        DEVELOPER
      </h1>

      <h1
        className=" text-[190px] font-extrabold
        -bottom-16
        z-20
        absolute -left-9 text-theme-blue-dark filter drop-shadow-lg drop-shadow-cyan-500/10"
      >
        ER
      </h1>

      <Wrapper properties="">
        <section className=" relative mt-16 space-y-14">
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
          <div className="w-[calc(100vw-190px)] h-56 relative z-30">
            <div className="relative h-full">
              <img
                src={TailwindIcon}
                alt=""
                className="absolute h-10 max-mobile-sm:h-8 top-24 left-26 transform "
              />
              <img
                src={ReactIcon}
                alt=""
                className="absolute h-12 max-mobile-sm:h-10 bottom-0 left-24 transform "
              />
              <img
                src={ViteIcon}
                alt=""
                className="absolute h-8 max-mobile-sm:h-10 top-36 left-10 transform "
              />
              <img
                src={FirebaseIcon}
                alt=""
                className="absolute h-12 max-mobile-sm:h-10 top-28 left-40 transform "
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </section>
  );
}

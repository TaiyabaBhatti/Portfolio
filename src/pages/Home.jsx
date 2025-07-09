import React from "react";
import Wrapper from "../components/Wrapper";
import HeroImage from "../assets/images/home-hero-bg.png";
import SocialHandles from "../components/SocialHandles";

export default function Home() {
  return (
    <section className="h-[calc(100vh-64px)] relative flex items-center justify-center overflow-hidden">
      <img
        src={HeroImage}
        alt=""
        className="w-56 absolute -z-10 -bottom-10 -right-10 rotate-12"
      />
      <Wrapper>
        <section className="space-y-8">
          {/* Bio */}
          <div className="space-y-1">
            <h1 className="text-3xl max-mobile-sm:text-2xl font-bold text-gray-900">
              I'm <span className="">Tayyaba Bhatti</span>
            </h1>
            <h3 className="font-medium max-mobile-sm:text-sm text-theme">
              React JS Developer
            </h3>
          </div>
          {/* Socials */}
          <SocialHandles />
        </section>
      </Wrapper>
    </section>
  );
}

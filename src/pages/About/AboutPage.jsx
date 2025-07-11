import React from "react";
import Wrapper from "../../components/Wrapper";
import CardOutline from "../../components/CardOutline";
import CardTab from "../../components/CardTab";
import PageTag from "../../components/PageTag";
import { aboutInfo } from "../../data/pageData";
import SectionHeading from "../../components/SectionHeading";
import Heading from "../../components/Heading";
import AboutBg from "../../assets/images/about-bg.jpeg";
import TextShadow from "../../components/TextShadow";

export default function AboutPage() {
  return (
    <section className="relative mt-10 overflow-hidden">
      <PageTag text="About Me" />
      <div className="fixed top-[calc(100vh-200px)]">
        <h1
          className=" text-[100px] font-extrabold
         text-white filter drop-shadow-md drop-shadow-theme-blue-dark-500/40 uppercase"
        >
          Developer
        </h1>
      </div>

      <Wrapper properties="mt-16 relative z-40">
        {/* About Info */}
        <div className="space-y-1.5 mb-10">
          {/* About Hero Heading */}
          <Heading text="who am i?" />

          {/* ABout Hero Headline */}
          <h6 className="text-center font-medium text-theme-blue-light">
            Passinate Frontend Developer and Explorer
          </h6>
        </div>

        <div className="space-y-8 pb-10">
          <CardOutline delay="300">
            <p className="">{aboutInfo.aboutDesc}</p>
          </CardOutline>
          {/* Interest */}

          <CardOutline>
            <div className="flex flex-row items-center justify-between gap-5">
              <div className="h-full border-r-2 border-r-gray-400 pr-5">
                {/* sub-Heading */}
                <SectionHeading text="Interests" />
              </div>
              <div className="flex flex-row flex-wrap gap-1.5 ">
                {aboutInfo.interests.map((item, index) => {
                  return (
                    <CardTab key={index} text={item} properties="!text-xsm" />
                  );
                })}
              </div>
            </div>
          </CardOutline>

          {/* Freelencer */}

          <CardOutline>
            <div
              className="flex flex-row items-center justify-between
            "
            >
              <div>
                <SectionHeading text="Freelancer" />

                <p className="text-sm">React Developer</p>
              </div>

              <CardTab text="2024-now" />
            </div>
            <hr className="text-gray-400 border-[1px] my-6" />
            <ul className="list-disc m-0 list-outside text-sm pl-4">
              <li>Developed a versitile Skill set.</li>
              <li>Worked on real world projects.</li>
              <li>Collaborated with clients and build with peers.</li>
              <li>Adapted unique challenges and requirements.</li>
            </ul>
          </CardOutline>

          {/* Education */}

          <CardOutline>
            <div
              className="flex flex-row items-start  justify-between
            "
            >
              <div>
                <SectionHeading text="Undergraduate" properties="mb-2" />
                <p className="text-sm">Software Engineer</p>
                <p className="text-sm">MUET, Jamshoro</p>
              </div>

              <CardTab text="2022-2026" />
            </div>
          </CardOutline>
        </div>
      </Wrapper>
    </section>
  );
}

import React from "react";
import Wrapper from "../../components/Wrapper";
import CardOutline from "../../components/CardOutline";
import CardTab from "../../components/CardTab";
import PageTag from "../../components/PageTag";
import { aboutInfo } from "../../data/pageData";

export default function AboutPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] relative mt-10">
      <PageTag text="About Me" />
      <Wrapper properties="mt-16">
        {/* About Hero */}
        <div className="space-y-8">
          <div className="space-y-1.5">
            <h1 className="text-center uppercase text-theme font-bold text-4xl">
              who am i?
            </h1>
            <h6 className="text-center font-medium text-theme">
              Passinate Frontend Developer and Explorer
            </h6>
          </div>
          <CardOutline>
            <p className="">{aboutInfo.aboutDesc}</p>
          </CardOutline>
        </div>

        {/* About Interest */}
        <div className="mt-10">
          <CardOutline>
            <div className="flex flex-row items-center justify-between gap-5">
              <div className="border-r-2 pr-5">
                {/* sub-Heading */}
                <h4 className="text-lg font-semibold">Interests</h4>
              </div>
              <div className="flex flex-row gap-x-1.5">
                <CardTab text="Cloud" />
                <CardTab text="Sports" />
                <CardTab text="Speaking" />
              </div>
            </div>
          </CardOutline>
        </div>

        {/* Freelencer */}

        <div className="mt-10 mb-10">
          <CardOutline>
            <div
              className="flex flex-row items-center justify-between
            "
            >
              <div>
                <h1 className="text-lg font-semibold">Freelancer</h1>
                <p className="text-sm">React Developer</p>
              </div>

              <CardTab text="2024-now" />
            </div>
            <hr className="text-gray-400 border-[1px] my-6" />
            <ul className="list-disc m-0 list-inside text-sm">
              <li>Developed a versitile Skill set.</li>
              <li>Worked on real world projects.</li>
              <li>Collaborated with clients and build with peers.</li>
              <li>Adapted unique challenges and requirements.</li>
            </ul>
          </CardOutline>
        </div>

        <div className="my-10">
          <CardOutline>
            <div
              className="flex flex-row items-center justify-between
            "
            >
              <div>
                <h1 className="text-lg font-semibold mb-2">Undergraduate</h1>
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

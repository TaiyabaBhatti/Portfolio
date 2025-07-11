import React from "react";
import Wrapper from "../../components/Wrapper";

import PageTag from "../../components/PageTag";
import { projects } from "../../data/pageData";
import { FaGithub } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section className=" relative mt-10">
      <PageTag text="Portfolio" />

      <Wrapper properties="my-16 space-y-5">
        {projects.map((project, index) => {
          const livePreview = project.livePreview != null ? true : false;
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-theme-camel-light rounded-md group p-3 space-y-8"
              key={index}
            >
              {/* Original card */}
              <PortfolioCard data={project} />

              {/* Link to Resource */}
              <div className="flex flex-row gap-1.5 items-center justify-end">
                <div>
                  <a
                    href={project.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-2xl max-mobile-sm:text-lg text-gray-900" />
                  </a>
                </div>
                <div>
                  {livePreview && (
                    <a
                      href={project.livePreview}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LuEye className="text-2xl max-mobile-sm:text-lg text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </section>
  );
}

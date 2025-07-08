import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import CardOutline from "../../components/CardOutline";
import CardTab from "../../components/CardTab";

import { FaGithub } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { projects } from "../../data/pageData";

export default function ProjectCarousel() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        id="blog-carousel"
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="w-full !pb-10 "
        spaceBetween={5}
      >
        {projects.map((project, index) => {
          const livePreview = project.livePreview != null ? true : false;

          return (
            <SwiperSlide
              className="bg-theme-camel-light rounded-md mb-10 group"
              key={index}
              onClick={handleOverlay}
            >
              {/* Original card */}
              <div className="p-4">
                <div>
                  <h1 className="text-black text-lg font-medium">
                    {project.title}
                  </h1>
                  <p>{project.desc}</p>
                </div>
                <div className="flex flex-row items-center gap-2 mt-5">
                  {project.tags.map((tag, index) => {
                    return (
                      <CardTab key={index} text={tag} properties="text-xsm" />
                    );
                  })}
                </div>
              </div>

              {/* Overlay Card */}
              <div
                className={`absolute rounded-md bg-theme opacity-95 items-center justify-center gap-6 transition-opacity duration-300 z-40  group-hover:flex group-hover:inset-0
                
                
                ${isOverlayVisible ? "flex bg-amber-200 inset-0" : "hidden"}`}
              >
                <div>
                  <a
                    href={project.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-5xl text-gray-900" />
                  </a>
                </div>
                <div>
                  {livePreview && (
                    <a
                      href={project.livePreview}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LuEye className="text-5xl text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

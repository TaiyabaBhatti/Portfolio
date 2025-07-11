import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Grid,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
Autoplay;

import { homeSliderIcons } from "../../data/pageData";

export default function HomeSlider() {
  console.log(homeSliderIcons[0]);

  return (
    <>
      <Swiper
        id="home-slider"
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        speed={5000}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        spaceBetween={5}
        autoplay={{
          delay: 0, // Time in ms between slides (e.g., 2.5 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction (e.g., drag)
          pauseOnMouseEnter: false, // Pause autoplay when the mouse pointer enters the swiper container
        }}
        className="relative z-10 !m-0"
      >
        {homeSliderIcons.map((icon, index) => {
          return (
            <SwiperSlide key={index} className="!w-14 !max-mobile-sm:w-10">
              <img
                src={icon}
                alt=""
                className=" h-10 max-mobile-sm:h-8 opacity-55"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

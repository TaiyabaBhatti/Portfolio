import React from "react";
import Wrapper from "../components/Wrapper";
import ProjectCarousel from "./Carousel/ProjectCarousel";
import PageTag from "../components/PageTag";

export default function Portfolio() {
  return (
    <section className="min-h-[calc(100vh-64px)] relative mt-10">
      <PageTag text="Portfolio" />

      <Wrapper properties="mt-16">
        <ProjectCarousel />
      </Wrapper>
    </section>
  );
}

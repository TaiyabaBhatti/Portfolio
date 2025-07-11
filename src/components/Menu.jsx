import React from "react";
import { IoClose } from "react-icons/io5";
import TabLink from "./TabLink";

export default function Menu({ setFunc, visibility }) {
  return (
    <div
      className={`bg-theme-blue-light w-[calc(100vw-60px)] fixed top-0 right-0 h-screen p-6 z-50 transition duration-300 ease-in-out ${
        visibility ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full space-y-16">
        <div className="ml-auto w-fit">
          <button onClick={setFunc}>
            <IoClose className="text-5xl text-theme-camel-light ml-auto" />
          </button>
        </div>

        <nav className="space-y-5">
          <div>
            <TabLink text="home" path="home" hamburger={true} />
          </div>
          <div>
            {" "}
            <TabLink text="about" path="about" hamburger={true} />
          </div>
          <div>
            {" "}
            <TabLink text="portfolio" path="portfolio" hamburger={true} />
          </div>
          <div>
            {" "}
            <TabLink text="contact" path="contact" hamburger={true} />
          </div>
        </nav>
      </div>
    </div>
  );
}

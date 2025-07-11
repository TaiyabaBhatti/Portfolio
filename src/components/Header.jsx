import React, { useEffect, useState } from "react";
import TabLink from "./TabLink";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/images/main-logo.png";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuActive, setMenuActive] = useState(false);
  const breakpoint = 425; //L-mobile breakpoint

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenu = () => {
    console.log(menuActive);
    setMenuActive(!menuActive);
  };

  return (
    <header className="flex  items-center py-5 px-5 relative overflow-hidden bg-theme-blue-dark">
      <div className="flex flex-row items-center gap-x-3">
        {/* <img src={logo} alt="" className="h-12 w-fit" /> */}
        {/* <h1
          className=" text-5xl font-extrabold
        
        z-20
        text-theme-blue-dark filter drop-shadow-sm drop-shadow-cyan-500/100"
        >
          TB
        </h1> */}
      </div>
      {screenWidth > breakpoint ? (
        <nav className="space-x-2">
          <TabLink text="home" path="home" />
          <TabLink text="about" path="about" />
          <TabLink text="portfolio" path="portfolio" />
          <TabLink text="contact" path="contact" />
        </nav>
      ) : (
        <>
          <Menu setFunc={handleMenu} visibility={menuActive} />
          <button
            onClick={handleMenu}
            className="ml-auto bg-theme-blue-light p-3 rounded-full"
          >
            <FaBars className="text-2xl text-theme-light" />
          </button>
        </>
      )}
    </header>
  );
}

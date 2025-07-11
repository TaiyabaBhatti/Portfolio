import React, { useEffect, useState } from "react";
import TabLink from "./TabLink";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa6";
import Profilelogo from "../assets/images/profile.png";

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
        <img
          src={Profilelogo}
          alt="Profile logo"
          className="h-12 w-12 max-mobile-sm:h-7 max-mobile-sm:w-7 object-cover rounded-full"
        />
        <h1
          className="text-base max-mobile-sm:text-xsm font-medium
        z-20
        text-theme-camel-light"
        >
          Tayyaba Bhatti
        </h1>
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

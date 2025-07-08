import React, { useEffect, useState } from "react";
import TabLink from "./TabLink";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa6";

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
    <header className="flex h-16 items-center py-3 px-5 relative">
      {screenWidth > breakpoint ? (
        <nav className="space-x-2">
          <TabLink text="home" path="home" />
          <TabLink text="about" path="about" />
          <TabLink text="portfolio" path="portfolio" />
          <TabLink text="contact" path="contact" />
        </nav>
      ) : (
        <>
          {menuActive ? (
            <Menu setFunc={handleMenu} />
          ) : (
            <button
              onClick={handleMenu}
              className="ml-auto bg-theme p-3 rounded-full"
            >
              <FaBars className="text-2xl text-theme-light" />
            </button>
          )}
        </>
      )}
    </header>
  );
}

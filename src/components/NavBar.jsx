import React from "react";
import TabLink from "./TabLink";

export default function NavBar() {
  return (
    <nav className="space-x-2">
      <TabLink text="home" path="home" />
      <TabLink text="about" path="about" />
      <TabLink text="portfolio" path="portfolio" />
      <TabLink text="contact" path="contact" />
    </nav>
  );
}

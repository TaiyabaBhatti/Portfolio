import React from "react";
import { Link } from "react-router";

export default function TabLink({ text, path, hamburger = false }) {
  return (
    <Link
      to={path}
      className={`uppercase ${
        hamburger ? "text-theme-light font-semibold text-2xl" : "text-black"
      }`}
    >
      {text}
    </Link>
  );
}

import React from "react";

export default function PageTag({ text }) {
  return (
    <div
      data-aos="fade-right"
      className="bg-theme-blue-dark px-5 py-2 w-fit text-theme-camel-light font-bold rounded-r-2xl text-lg max-mobile-sm:text-medium"
    >
      <p>{text}</p>
    </div>
  );
}

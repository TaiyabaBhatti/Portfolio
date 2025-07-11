import React from "react";

export default function CardTab({ text, properties }) {
  return (
    <div
      className={` rounded-2xl py-2 px-3 font-medium tab-shadow bg-theme-blue-dark  text-theme-camel-light border-theme-blue-dark border-[1px]  max-mobile-sm:text-sm ${properties}`}
    >
      {text}
    </div>
  );
}

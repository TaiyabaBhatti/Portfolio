import React from "react";

export default function CardTab({ text, properties }) {
  return (
    <div
      className={`rounded-2xl py-2 px-3 font-medium tab-shadow bg-theme  text-theme-light border-theme border-[1px] ${properties}`}
    >
      {text}
    </div>
  );
}

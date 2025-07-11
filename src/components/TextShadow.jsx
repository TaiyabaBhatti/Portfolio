import React from "react";

export default function TextShadow({ text }) {
  return (
    <h1
      className=" text-5xl max-mobile-sm:text-4xl font-extrabold
         text-theme-blue-dark filter drop-shadow-lg drop-shadow-cyan-500/10 uppercase"
    >
      {text}
    </h1>
  );
}

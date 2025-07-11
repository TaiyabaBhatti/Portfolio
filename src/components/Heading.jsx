import React from "react";

export default function Heading({ text, properties }) {
  return (
    <h1
      className={`uppercase text-center text-theme-blue-dark font-bold text-4xl ${properties} max-mobile-sm:text-3xl`}
    >
      {text}
    </h1>
  );
}

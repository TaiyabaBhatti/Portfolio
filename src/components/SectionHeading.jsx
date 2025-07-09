import React from "react";

export default function SectionHeading({ text, properties }) {
  return (
    <h3
      className={`text-lg max-mobile-sm:text-medium font-semibold text-gray-900 ${properties}`}
    >
      {text}
    </h3>
  );
}

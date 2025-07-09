import React from "react";

export default function PageTag({ text }) {
  return (
    <div className="bg-theme px-5 py-2 w-fit text-white font-bold rounded-r-2xl text-lg max-mobile-sm:text-medium">
      <p>{text}</p>
    </div>
  );
}

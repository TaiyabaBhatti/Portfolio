import React from "react";

export default function CardOutline({ children, delay, properties }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className={`bg-white p-4 rounded-2xl card-shadow ${properties}`}
    >
      {children}
    </div>
  );
}

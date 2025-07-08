import React from "react";

export default function Wrapper({ children, properties }) {
  return (
    <section className={`px-5 w-full  m-auto ${properties}`}>
      {children}
    </section>
  );
}

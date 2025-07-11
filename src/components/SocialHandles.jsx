import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function SocialHandles({ properties }) {
  return (
    <div
      className={`flex flex-row gap-2.5 items-center text-theme-blue-light ${properties}`}
    >
      <a href=" https://www.linkedin.com/in/tayyaba-bhatti-955a3725b">
        <FaLinkedinIn className="text-2xl" />
      </a>
      <a href="https://github.com/TaiyabaBhatti ">
        <FaGithub className="text-2xl" />
      </a>
    </div>
  );
}

import React from "react";
import CardTab from "./CardTab";

export default function ContactBox({ heading, Icon, information }) {
  const copyToClipBoard = async (text) => {
    console.log(text);
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard: " + text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy. Please copy manually: " + text);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between gap-x-5 gap-y-2  ">
      <div className=" bg-theme-blue-dark p-3 max-mobile-sm:p-2 rounded-full ">
        {/* Icon */}
        <Icon className="text-lg max-mobile-sm:text-sm  text-theme-camel-light  " />
      </div>

      {/* Info */}
      <button
        className="w-full text-start text-sm"
        onClick={() => copyToClipBoard(information)}
      >
        {information}
      </button>
    </div>
  );
}

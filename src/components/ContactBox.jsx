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
    <div className="flex flex-row items-center justify-between gap-x-5 gap-y-2 max-mobile-medium:flex-col max-mobile-medium:items-start max-mobile-medium:mb-8">
      <div className="border-r-2 max-mobile-medium:border-r-0 pr-5 flex flex-row items-center gap-x-1.5 max-mobile-medium:text-gray-900">
        {/* sub-Heading */}
        <h6 className="text-sm font-medium max-mobile-medium:block hidden">
          {heading}
        </h6>
        {/* Icon */}
        <Icon className="text-2xl  max-mobile-medium:text-lg" />
      </div>

      {/* Info */}
      <button
        className="w-full text-start"
        onClick={() => copyToClipBoard(information)}
      >
        <CardTab text={information} properties="w-full" />
      </button>
    </div>
  );
}

import React from "react";
import CardTab from "../../components/CardTab";
import SectionHeading from "../../components/SectionHeading";

export default function PortfolioCard({ data }) {
  return (
    <div>
      <div>
        <SectionHeading text={data.title} properties="mb-2" />
        <p className="text-gray-900 max-mobile-sm:text-sm">{data.desc}</p>
      </div>
      <div className="flex flex-row items-center gap-2 mt-5">
        {data.tags.map((tag, index) => {
          return <CardTab key={index} text={tag} properties="text-xsm" />;
        })}
      </div>
    </div>
  );
}

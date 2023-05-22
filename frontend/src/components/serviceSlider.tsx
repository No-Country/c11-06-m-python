import React, { FC } from "react";
import { ServiceCard } from "./serviceCard";

interface ServiceSliderProps {
  title: string;
}

export const ServiceSlider: FC<ServiceSliderProps> = ({ title }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold my-11">{title}</h2>
      <div className="grid grid-cols-12 gap-5">
        {/* TODO: fetch api cards */}
        {[...Array(4)].map((card,inx) => (
          <ServiceCard key={inx}/>
        ))}
      </div>
    </section>
  );
};

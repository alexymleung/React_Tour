import React from "react";
import Title from "./Title";
import { Service } from "./Service";
import { services } from "../data";

const Services = () => {
  return (
    <main className="services" id="services">
      <Title title="our" subtitle="services" />

      <div className="services-content">
        {services.map((item) => {
          return <Service key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};

export default Services;

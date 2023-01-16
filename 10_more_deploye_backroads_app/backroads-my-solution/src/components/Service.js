import React from "react";
import Title from "./Title";
import { serviceData } from "../data/servicesData";
import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <section className="section services" id="services">
      <Title title="our" spanTitle="services" />

      <div className="section-center services-center">
        {serviceData.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Service;

import React from "react";
import Title from "./Title";
import { toursData } from "../data/toursData";
import TourItem from "./TourItem";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" spanTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <TourItem key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;

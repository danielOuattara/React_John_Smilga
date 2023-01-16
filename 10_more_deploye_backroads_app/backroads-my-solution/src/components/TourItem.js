import React from "react";

function TourItem(props) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={props.image} className="tour-img" alt={props.title} />
        <p className="tour-date">{props.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{props.title}</h4>
        </div>
        <p>{props.description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {props.location}
          </p>
          <p>{props.duration} days</p>
          <p>from ${props.price}</p>
        </div>
      </div>
    </article>
  );
}

export default TourItem;

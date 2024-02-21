import React from "react";

function EventCard({ month, date }) {
  return (
    <div className="event-card">
      <time className="card-time" dateTime="01-05">
        <span className="month">{month}</span>
        <span className="date">{date}</span>
      </time>
      <div className="wrapper">
        <div className="card-content">
          <p className="card-subtitle">Ocean Water</p>
          <h3 className="card-title">
            Far from the countries Vokalia and Consonantia 2022
          </h3>
          <p className="card-text">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor
          </p>
        </div>
        <button className="btn btn-white">
          <span>View Events</span>
          <ion-icon name="arrow-forward" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default EventCard;

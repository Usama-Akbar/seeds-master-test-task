import React from "react";
import "../style/Event.css";
import EventCard from "../components/EventCard";
import HeadingSideImg from "../components/HeadingSideImg";

function Event() {
  return (
    <>
      <section className="section event" id="event">
        <div className="container">
          <p className="section-subtitle">
            {/* <img
              src="/images/subtitle-img-green.png"
              width={32}
              height={7}
              alt="Wavy line"
            /> */}
            <HeadingSideImg />
            <span>Event &amp; Program</span>
            <HeadingSideImg />
          </p>
          <h2 className="h2 section-title">
            Our Most Popular Causes For <strong>Building Fund</strong>
          </h2>
          <ul className="event-list">
            <li>
              <EventCard month={"Jan"} date={"05"} />
            </li>
            <li>
              <EventCard month={"Feb"} date={"23"} />
            </li>
            <li>
              <EventCard month={"Mar"} date={"27"} />
            </li>
          </ul>
          <button className="btn btn-secondary">
            <span>Learn More Us</span>
            <ion-icon name="heart-outline" aria-hidden="true" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Event;

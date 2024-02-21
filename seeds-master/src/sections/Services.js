import React from "react";
import "../style/Services.css";
import ServiceCard from "../components/ServiceCard";
import HeadingSideImg from "../components/HeadingSideImg";

function Services() {
  return (
    <>
      <section
        className="section service"
        id="service"
        style={{ backgroundImage: 'url("./assets/images/service-map.png")' }}
      >
        <div className="container">
          <p className="section-subtitle">
            <HeadingSideImg />
            <span>What We Do</span>
          </p>
          <h2 className="h2 section-title">
            We Work Differently to <strong>keep The World Safe</strong>
          </h2>
          <ul className="service-list">
            <li>
              <ServiceCard title={"Save Nature"} iconName={"leaf-outline"} />
            </li>
            <li>
              <ServiceCard title={"Save Ecology"} iconName={"earth-outline"} />
            </li>
            <li>
              <ServiceCard
                title={"Tree Plantation"}
                iconName={"flower-outline"}
              />
            </li>
            <li>
              <ServiceCard title={"Clear Ocean"} iconName={"boat-outline"} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Services;

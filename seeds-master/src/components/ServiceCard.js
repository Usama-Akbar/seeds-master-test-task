import React from "react";

function ServiceCard({ title, iconName }) {
  return (
    <div className="service-card">
      <div className="card-icon">
        <ion-icon name={iconName} />
      </div>
      <h3 className="h3 card-title">{title}</h3>
      <p className="card-text">
        Tempor incididunt ut labores dolore magna suspene
      </p>
      <a href="/" className="btn-link">
        <span>Read More</span>
        <ion-icon name="arrow-forward" aria-hidden="true" />
      </a>
    </div>
  );
}

export default ServiceCard;

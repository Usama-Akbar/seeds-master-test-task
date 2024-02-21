import React from "react";

function FeaturesList({ title, iconName }) {
  return (
    <li className="features-item">
      <div className="item-icon">
        <ion-icon name={iconName}></ion-icon>
      </div>
      <div>
        <h3 className="h4 item-title">{title}</h3>
        <p className="item-text">
          Sit amet consecte adiscine eiusm temor ultrices.
        </p>
      </div>
    </li>
  );
}

export default FeaturesList;

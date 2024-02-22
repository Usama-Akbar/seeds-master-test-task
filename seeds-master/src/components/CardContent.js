import React from "react";

function CardContent() {
  return (
    <div className="card-content">
      <div className="progress-wrapper">
        <p className="progress-text">
          <span>Raised</span>
          <data value={256}>$256</data>
        </p>
        <data className="progress-value" value={83}>
          83%
        </data>
      </div>
      <div className="progress-box">
        <div className="progress" />
      </div>
      <h3 className="h3 card-title">Raise Hand To Save Plants</h3>
      <div className="card-wrapper">
        <p className="card-wrapper-text">
          <span>Goal</span>
          <data className="green" value={34562}>
            $34562
          </data>
        </p>
        <p className="card-wrapper-text">
          <span>Raise</span>
          <data className="yellow" value={562}>
            $562
          </data>
        </p>
        <p className="card-wrapper-text">
          <span>To Go</span>
          <data className="cyan" value={864}>
            $864
          </data>
        </p>
      </div>
      <button className="btn btn-secondary">
        <span>Donation</span>
        <ion-icon name="heart-outline" aria-hidden="true" />
      </button>
    </div>
  );
}

export default CardContent;

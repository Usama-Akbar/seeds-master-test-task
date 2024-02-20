import React from "react";
import "../style/Cta.css";

function Cta() {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="h2 section-title">324+ Trusted Global Partners</h2>
            <button className="btn btn-outline">
              <span>Become a Partner</span>
              <ion-icon name="heart-outline" aria-hidden="true" />
            </button>
          </div>
          <figure className="cta-banner">
            <img
              src="/images/cta-banner.jpg"
              width={520}
              height={228}
              loading="lazy"
              alt="Fox"
              className="img-cover"
            />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Cta;

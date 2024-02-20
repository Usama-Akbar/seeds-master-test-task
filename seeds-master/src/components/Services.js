import React from "react";
import "../style/Services.css";

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
            <img
              src="/images/subtitle-img-green.png"
              width={32}
              height={7}
              alt="Wavy line"
            />
            <span>What We Do</span>
          </p>
          <h2 className="h2 section-title">
            We Work Differently to <strong>keep The World Safe</strong>
          </h2>
          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="leaf-outline" />
                </div>
                <h3 className="h3 card-title">Save Nature</h3>
                <p className="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
                <a href="/" className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="earth-outline" />
                </div>
                <h3 className="h3 card-title">Save Ecology</h3>
                <p className="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
                <a href="/" className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="flower-outline" />
                </div>
                <h3 className="h3 card-title">Tree Plantation</h3>
                <p className="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
                <a href="/" className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="boat-outline" />
                </div>
                <h3 className="h3 card-title">Clear Ocean</h3>
                <p className="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
                <a href="/" className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Services;

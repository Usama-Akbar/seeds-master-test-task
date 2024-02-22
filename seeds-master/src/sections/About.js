import React from "react";
import "../style/About.css";
import HeadingSideImg from "../components/HeadingSideImg";

function About() {
  return (
    <>
      <section className="section about" id="about">
        <div className="container">
          <div className="about-banner">
            <h2 className="deco-title">About Us</h2>
            <img
              src="/images/deco-img.png"
              width={58}
              height={261}
              alt=""
              className="deco-img"
            />
            <div className="banner-row">
              <div className="banner-col">
                <img
                  src="/images/about-banner-1.jpg"
                  width={315}
                  height={380}
                  loading="lazy"
                  alt="Tiger"
                  className="about-img w-100"
                />
                <img
                  src="/images/about-banner-2.jpg"
                  width={386}
                  height={250}
                  loading="lazy"
                  alt="Panda"
                  className="about-img about-img-2 w-100"
                />
              </div>
              <div className="banner-col">
                <img
                  src="/images/about-banner-3.jpg"
                  width={250}
                  height={277}
                  loading="lazy"
                  alt="Elephant"
                  className="about-img about-img-3 w-100"
                />
                <img
                  src="/images/about-banner-4.jpg"
                  width={315}
                  height={380}
                  loading="lazy"
                  alt="Deer"
                  className="about-img w-100"
                />
              </div>
            </div>
          </div>
          <div className="about-content">
            <p className="section-subtitle">
              <HeadingSideImg />
              <span>Why Choose Us</span>
            </p>
            <h2 className="h2 section-title">
              Rise Your Hand to Save <strong>World Plants</strong>
            </h2>
            <ul className="tab-nav">
              <li>
                <button className="tab-btn active">Our Mission</button>
              </li>
              <li>
                <button className="tab-btn">Our Vision</button>
              </li>
              <li>
                <button className="tab-btn">Next Plan</button>
              </li>
            </ul>
            <div className="tab-content">
              <p className="section-text">
                But I must explain to you how all this mistaken denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system expoundmaster
              </p>
              <ul className="tab-list">
                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle" />
                  </div>
                  <p className="tab-text">Charity For Foods</p>
                </li>
                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle" />
                  </div>
                  <p className="tab-text">Charity For Education</p>
                </li>
                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle" />
                  </div>
                  <p className="tab-text">Charity For Water</p>
                </li>
                <li className="tab-item">
                  <div className="item-icon">
                    <ion-icon name="checkmark-circle" />
                  </div>
                  <p className="tab-text">Charity For Medical</p>
                </li>
              </ul>
              <button className="btn btn-secondary">
                <span>Learn More Us</span>
                <ion-icon name="heart-outline" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

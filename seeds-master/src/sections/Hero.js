import React from "react";
import "../style/Hero.css";
import FeaturesList from "../components/FeaturesList";
import HeadingSideImg from "../components/HeadingSideImg";

function Hero() {
  return (
    <>
      <div>
        <section className="hero" id="home">
          <div className="container">
            <p className="section-subtitle">
              <HeadingSideImg />
              <span>Welcome to natural world</span>
            </p>
            <h2 className="h1 hero-title">
              Give Love for nature <strong>World and organic foods</strong>
            </h2>
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo minus aliquid eius? Cupiditate mollitia sit rerum, nisi
              repudiandae ipsum, unde quam facere rem qui quae adipisci omnis
              tempora obcaecati.
            </p>
            <button className="btn btn-primary">
              <span>plants</span>
              <ion-icon name="heart-outline" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
      {/* Feature section */}
      <section className="section features">
        <div className="container">
          <ul className="features-list">
            {/* List one */}
            <FeaturesList
              title={"Safe Shelter"}
              iconName={"shield-checkmark-outline"}
            />
            {/* List Two */}
            <FeaturesList title={"Safe Water"} iconName={"water-outline"} />
            {/* List Three */}
            <FeaturesList title={"Ecology Save"} iconName={"leaf-outline"} />

            {/* List fore */}
            <FeaturesList title={"Environment"} iconName={"snow-outline"} />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;

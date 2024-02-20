import React from "react";
import "../style/Hero.css";

function Hero() {
  return (
    <>
      <div>
        <section className="hero" id="home">
          <div className="container">
            <p className="section-subtitle">
              <img
                src="../../public/images/subtitle-img-green.png"
                width={32}
                height={7}
                alt="Wavy line"
              />
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
            <li className="features-item">
              <div className="item-icon">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
              </div>
              <div>
                <h3 className="h4 item-title">Safe Shelter</h3>
                <p className="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
            <li className="features-item">
              <div className="item-icon">
                <ion-icon name="water-outline" />
              </div>
              <div>
                <h3 className="h4 item-title">Safe Water</h3>
                <p className="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
            <li className="features-item">
              <div className="item-icon">
                <ion-icon name="leaf-outline" />
              </div>
              <div>
                <h3 className="h4 item-title">Ecology Save</h3>
                <p className="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
            <li className="features-item">
              <div className="item-icon">
                <ion-icon name="snow-outline" />
              </div>
              <div>
                <h3 className="h4 item-title">Environment</h3>
                <p className="item-text">
                  Sit amet consecte adiscine eiusm temor ultrices.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;

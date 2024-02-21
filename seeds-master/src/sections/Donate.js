import React from "react";
import "../style/Donate.css";
import CardContent from "../components/CardContent";
import CardBanner from "../components/CardBanner";

function Donate() {
  return (
    <>
      <section className="section donate" id="donate">
        <div className="container">
          <ul className="donate-list">
            <li>
              <div className="donate-card">
                <CardBanner img={"/images/donate-1.jpg"} />
                <CardContent />
              </div>
            </li>
            <li>
              <div className="donate-card">
                <CardBanner img="/images/donate-2.jpg" />
                <CardContent />
              </div>
            </li>
            <li>
              <div className="donate-card">
                <CardBanner img="/images/donate-3.jpg" />
                <CardContent />
              </div>
            </li>
            <li>
              <div className="donate-card">
                <CardBanner img="/images/donate-4.jpg" />
                <CardContent />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Donate;

import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container" style={{ marginRight: "93px" }}>
          <ul className="footer-list">
            <li>
              <a href="/" className="footer-link">
                Terms of use
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Privacy &amp; Policy
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright 2023{" "}
            <a href="/" className="copyright-link">
              fuyaram dewasi
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

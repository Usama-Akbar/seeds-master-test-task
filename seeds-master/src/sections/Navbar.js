import React, { useState, useEffect } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const toggleNavbar = () => setIsNavbarActive(!isNavbarActive);
  const closeNavbar = () => setIsNavbarActive(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <h1>
          <a href="/" className="logo">
            FARMFOOD
          </a>
        </h1>

        <select name="language" className="lang-switch">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>

        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          onClick={toggleNavbar}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            onClick={closeNavbar}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <a href="/" className="logo">
            NATURAL FOOD
          </a>

          <ul className="navbar-list">
            {/* Add the closeNavbar function to onClick for each navbar-link */}
            {["home", "about", "service", "nature", "plants", "contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item}`}
                    className="navbar-link"
                    onClick={closeNavbar}
                  >
                    <span>{item}</span>
                    <ion-icon
                      name="chevron-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="header-action">
          <button className="search-btn" aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="btn btn-primary">
            <span>foods serve</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

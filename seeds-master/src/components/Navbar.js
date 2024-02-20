import "../style/Navbar.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled scrolled-animation" : ""}`}
    >
      <div className="navbar-container">
        <div className="logo">FARMFOOD</div>
        <select
          name="language"
          id="language-select"
          style={{
            fontSize: "18px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            marginLeft: "30px",
            fontWeight: "600",
          }}
        >
          <option value="english" style={{ color: "black" }}>
            English
          </option>
          <option value="french" style={{ color: "black" }}>
            French
          </option>
          <option value="spanish" style={{ color: "black" }}>
            Spanish
          </option>
        </select>

        <div className="menu">
          <button
            style={{ color: "white", fontSize: "35px" }}
            className="menu-icon"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {isNavExpanded ? "✕" : "☰"}
          </button>
          <div className={isNavExpanded ? "nav-links expanded" : "nav-links"}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
            <a href="/nature">Nature</a>
            <a href="/plants">Plants</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="nav-search">
          <button className="search-btn" aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button
            className="btn btn-primary display"
            style={{ backgroundColor: "hsl(86, 45%, 54%)" }}
          >
            <span>foods serve</span>
            <ion-icon name="heart-outline" aria-hidden="true" />
          </button>
        </div>
      </div>
      <hr class="hr-line"></hr>
    </nav>
  );
};

export default Navbar;

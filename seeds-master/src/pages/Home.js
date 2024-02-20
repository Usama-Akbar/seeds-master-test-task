import React from "react";
import "../style/Navbar.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Cta from "../components/Cta";
import Services from "../components/Services";
import Donate from "../components/Donate";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <Services />
      <Donate />
    </div>
  );
}

export default Home;

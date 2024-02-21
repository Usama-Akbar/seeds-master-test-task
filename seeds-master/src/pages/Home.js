import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Cta from "../sections/Cta";
import Services from "../sections/Services";
import Donate from "../sections/Donate";
import Testimonials from "../sections/Testimonials";
import Partner from "../sections/Partner";
import Event from "../sections/Event";
import Post from "../sections/Post";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <Services />
      <Donate />
      <Testimonials />
      <Partner />
      <Event />
      <Post />
      <Footer />
    </>
  );
}

export default Home;

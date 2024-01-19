import React from "react";
import AboutHero from "./_components/AboutHero";
import Stats from "./_components/Stats";
import Mission from "./_components/Mission";
import Team from "./_components/Team";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <AboutHero />
        <Stats />
        <Mission />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default About;

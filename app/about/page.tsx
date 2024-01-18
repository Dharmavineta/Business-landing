import React from "react";
import AboutHero from "./_components/AboutHero";
import Stats from "./_components/Stats";
import Mission from "./_components/Mission";
import Team from "./_components/Team";
import Footer from "@/components/common/Footer";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Stats />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
};

export default About;

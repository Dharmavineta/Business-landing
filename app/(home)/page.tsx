import React from "react";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import ProcessHero from "./_components/ProcessHero";
import Process from "./_components/Process";
import Showcase from "./_components/Showcase";
import Testimonials from "./_components/Testimonials";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const Home = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="pt-16">
        <Hero />
        <Services />
        <ProcessHero />
        <Process />
        <Showcase />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

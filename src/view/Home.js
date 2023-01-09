import React from "react";
import HeroSection from "../components/HeroSection";
import SampleCard from "../components/SampleCard";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="card_container">
        <SampleCard />
        <SampleCard />
        <SampleCard />
        <SampleCard />
      </div>
    </div>
  );
};

export default Home;

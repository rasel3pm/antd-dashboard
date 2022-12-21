import React from "react";
import SalesRate from "../components/SalesRate";
import SampleCard from "../components/SampleCard";

const Home = () => {
  return (
    <div>
      <div className="card_container">
        <SampleCard />
        <SampleCard />
        <SampleCard />
        <SampleCard />
      </div>
      <SalesRate />
    </div>
  );
};

export default Home;

import { Button } from "antd";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="HeroSection_container">
        <div className="HeroSection_banner">
          <h2>Explore The Online World</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            massa lacus, ornare non mollis eu, faucibus non mauris. Praesent
            bibendum pulvinar semper. Vivamus ante dui, consequat et lorem ac,
            tempus tincidunt purus. Curabitur sodales ullamcorper lectus quis
            gravida. Pellentesque pellentesque gravida lectus, eget hendrerit
            elit malesuada ut. In nec massa blandit, semper est nec, varius
            elit. Etiam commodo sem sed eros mollis, ultrices rhoncus ex mollis.
          </p>
        </div>
        <Button>Explore</Button>
      </div>
    </div>
  );
};

export default HeroSection;

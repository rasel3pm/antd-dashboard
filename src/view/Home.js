import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SampleCard from "../components/SampleCard";

const Home = () => {
  const tranckString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const [post, setPost] = useState([]);
  const fatchData = () => {
    axios
      .get("/posts")
      .then((res) => setPost(res.data.post))
      .catch((err) => console.log("not found"));
  };

  useEffect(() => {
    fatchData();
  }, []);
  console.log(post);
  return (
    <div>
      <HeroSection />
      <div className="card_container">
        {post.map((item) => (
          <SampleCard
            id={item._id}
            title={item.title}
            description={tranckString(item.description, 100)}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

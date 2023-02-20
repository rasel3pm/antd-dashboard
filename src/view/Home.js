import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SampleCard from "../components/SampleCard";
import { Alert, Space, Spin } from "antd";

const Home = () => {
  const tranckString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const fatchData = () => {
    axios
      .get("/posts")
      .then((res) => {
        setPost(res.data.post);
        setLoading(true);
      })
      .catch((err) => console.log("not found", err));
  };

  useEffect(() => {
    fatchData();
  }, []);
  console.log(post);
  return (
    <div>
      <HeroSection />
      <div className="card_container">
        {loading ? (
          post.map((item) => (
            <SampleCard
              id={item._id}
              title={item.title}
              description={tranckString(item.description, 100)}
              category={item.category}
            />
          ))
        ) : (
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Space>
              <Spin tip="Loading Post" size="large">
                <div className="content" />
              </Spin>
            </Space>
          </Space>
        )}
      </div>
    </div>
  );
};

export default Home;

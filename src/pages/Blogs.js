import React, { useState } from "react";
// import CreatePost from "./CreatePost";
import { blogData } from "../asset/Data";
import {} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Blogs = () => {
  const [data, setData] = useState(blogData);
  const tranckString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {data.map((blog) => {
        const { id, title, body } = blog;
        return (
          <div>
            <Card
              key={id}
              style={{ width: 400 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button>
                  <Link to={title}>Learn More</Link>
                </Button>,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={title}
                description={tranckString(body, 100)}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;

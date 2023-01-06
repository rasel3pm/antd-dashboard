import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../asset/Data";

const Blog = () => {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");
  useEffect(() => {
    const items = blogData.filter((blog) => blog.title === title);
    setBodyData(items[0].body);
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 200)}</p>
      <p>{bodyData.slice(201, 500)}</p>
    </div>
  );
};

export default Blog;

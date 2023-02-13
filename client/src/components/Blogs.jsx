import React from "react";
import Blog from "./Blog";
import { BASE_URL } from "../helper/ref";
import axios from "axios";
import BlogImage from "../images/blog1.jpg";
import { useState, useEffect } from "react";

import "../styles/Blogs.css";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // make your API call here...
    axios
      .get(`${BASE_URL}/blog/getblogs`)
      .then((response) => {
        setAllBlogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Blogs">
      <h1> All Blogs </h1>
      <div className="allBlogs">
        {allBlogs.map((value, index) => {
          return (
            <Blog
              blogImage={BlogImage}
              heading={value.blogHeading}
              uploadTime={value.blogSaveTime}
              authorName={value.userName}
              minuteRead={value.minuteRead}
              blogPreview={value.blogText}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

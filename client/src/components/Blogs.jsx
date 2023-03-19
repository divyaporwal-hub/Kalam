import React from "react";
import Blog from "./Blog";
import { BASE_URL } from "../helper/ref";
import axios from "axios";
import BlogImage from "../images/blog1.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Blogs.css";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    // make your API call here...
    axios
      .get(`${BASE_URL}/blog/getblogs`)
      .then((response) => {
        console.log("Blogs response: ", response);
        setAllBlogs(response.data);
      })
      .catch((err) => {
        setFetchError(true);
        console.log("Blogs Error: ", err);
      });
  }, []);

  return (
    <div className="Blogs">
      <h1> All Blogs </h1>
      <div className="allBlogs">
        {fetchError && allBlogs ? (
          <div>Please wait, Trying to fetch the blogs...</div>
        ) : (
          allBlogs.map((value, index) => {
            return (
              <Blog
                blogImage={BlogImage}
                heading={value.blogHeading}
                uploadTime={value.blogSaveTime}
                authorName={value.userName}
                minuteRead={value.minuteRead}
                blogPreview={value.blogText}
                blogId = {value._id}
                key={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import Blog from "./Blog";
import { BASE_URL } from "../helper/ref";
import axios from "axios";
import BlogImage from "../images/blog1.jpg";
import { useState, useEffect } from "react";

import "../styles/Blogs.css";

const Blogs = ({ searchTitle, setSearchTitle }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    // make your API call here...
    console.log(searchTitle);
    if (searchTitle.length > 0) {
      axios
        .get(`${BASE_URL}/blog/getsearchblogs`, {
          params: {
            searchTitle,
          },
        })
        .then((response) => {
          setAllBlogs(response.data.reverse());
        })
        .catch((err) => {
          setFetchError(true);
        });
    } else {
      console.log("2");
      axios
        .get(`${BASE_URL}/blog/getblogs`)
        .then((response) => {
          setAllBlogs(response.data.reverse());
        })
        .catch((err) => {
          setFetchError(true);
        });
    }
  }, [searchTitle]);

  return (
    <div className="Blogs">
      <h1 className="mainHeading"> Recent Articles </h1>
      <div className="allBlogs">
        {fetchError && allBlogs ? (
          <div>Please wait, Trying to fetch the blogs...</div>
        ) : (
          allBlogs &&
          allBlogs.map((value, index) => {
            return (
              <div key={index}>
                <div className="blogLine"></div>
                <Blog
                  blogImage={BlogImage}
                  heading={value.blogHeading}
                  blogTags={value.blogTags}
                  uploadTime={value.blogSaveTime}
                  userId={value.userId}
                  minuteRead={value.minuteRead}
                  blogPreview={value.blogText}
                  blogId={value._id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blogs;

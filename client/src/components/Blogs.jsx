import React from "react";
import Blog from "./Blog";
import { BASE_URL } from "../helper/ref";
import axios from "axios";
import BlogImage from "../images/blog1.jpg";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";

import "../styles/Blogs.css";
import NoBlogs from "./NoBlogs";

const Blogs = ({ searchTitle, setSearchTitle }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // make your API call here...
    setLoading(true);
    if (searchTitle.length > 0) {
      axios
        .get(`${BASE_URL}/blog/getsearchblogs`, {
          params: {
            searchTitle,
          },
        })
        .then((response) => {
          setAllBlogs(response.data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          setFetchError(true);
          setLoading(false);
        });
    } else {
      axios
        .get(`${BASE_URL}/blog/getblogs`)
        .then((response) => {
          setAllBlogs(response.data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          setFetchError(true);
          setLoading(false);
        });
    }
  }, [searchTitle]);
  // console.log(allBlogs, fetchError);
  return (
    <div className="Blogs">
      <h1 className="mainHeading"> Recent Articles </h1>
      {loading ? (
        <div className="loaderContainer">
          <ReactLoading
            type={"spin"}
            color={"#45aaff"}
            height={50}
            width={50}
          />
          <div className="loadingText">Getting the blogs...</div>
        </div>
      ) : (
        <div className="allBlogs">
          {fetchError ? (
            <div>Please wait, Trying to fetch the blogs...</div>
          ) : allBlogs.length > 0 ? (
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
          ) : (
            <NoBlogs />
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;

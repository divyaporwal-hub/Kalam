import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import "../styles/BlogInfo.css";

import BlogUser from "../components/blog/BlogUser";
import BlogContent from "../components/blog/BlogContent";
import BlogFooter from "../components/blog/BlogFooter";
import BlogImage from "../components/blog/BlogImage";
import BlogHeading from "../components/blog/BlogHeading";

import Header from "../components/Header";

const BlogInfo = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/blog/getBlogInfo`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        setBlogData(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="BlogInfoContainer">
        <div className="left">
          <div className="blogDetailContainer">
            <BlogUser
              userName={blogData.userName}
              blogSaveTime={blogData.blogSaveTime}
              minuteRead={blogData.minuteRead}
            />
            <BlogImage />
            <BlogHeading blogHeading={blogData.blogHeading} />
            {/* <BlogTags /> */}
            <BlogContent blogText={blogData.blogText} />
            <BlogFooter />
          </div>
        </div>
        <div className="right">nothing</div>
      </div>
    </div>
  );
};

export default BlogInfo;

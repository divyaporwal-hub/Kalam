import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../styles/Blog.css";

const Blog = ({
  blogImage,
  heading,
  uploadTime,
  authorName,
  minuteRead,
  blogPreview,
  blogId
}) => {
  return (
    <div className="Blog" >
      <div className="blogImage">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="blogDetails">
        <h1>{heading}</h1>
        <div className="blogInfo">
          <div>{uploadTime}</div> • <div>{authorName}</div> •
          <div>{minuteRead}</div>
        </div>
        <div className="blogPreview">{blogPreview.slice(150,0) + "..."}</div>
      </div>
    </div>
  );
};

export default Blog;

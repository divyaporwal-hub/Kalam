import React from "react";

import "../styles/Blog.css";

const Blog = ({
  blogImage,
  heading,
  uploadTime,
  authorName,
  minuteRead,
  blogPreview,
}) => {
  return (
    <div className="Blog">
      <div className="blogImage">
        <img src={blogImage} alt="blogImage" />
      </div>
      <div className="blogDetails">
        <h1>{heading}</h1>
        <div className="blogInfo">
          <div>{uploadTime}</div> ●<div>{authorName}</div> ●
          <div>{minuteRead} min read</div>
        </div>
        <div className="blogPreview">{blogPreview}</div>
      </div>
    </div>
  );
};

export default Blog;

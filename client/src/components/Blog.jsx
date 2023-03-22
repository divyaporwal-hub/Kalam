import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
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

  // console.log(parse(blogPreview))

  return (
    <div className="Blog" >
      <NavLink to={`/bloginfo/${blogId}`}>
        <div className="blogImage">
          <img src={blogImage} alt="blogImage" />
        </div>
        <div className="blogDetails">
          <h1>{heading}</h1>
          <div className="blogInfo">
            <div>{uploadTime}</div> • <div>{authorName}</div> •
            <div>{minuteRead}</div>
          </div>
          <div className="blogPreview">{(blogPreview.slice(0, 150)) + "..."}</div>
        </div>
      </NavLink>
    </div>
      );
};

export default Blog;

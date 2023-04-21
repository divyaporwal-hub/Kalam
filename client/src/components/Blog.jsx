import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import "../styles/Blog.css";
import parse from "html-react-parser";
import TagSuggestion from "./TagSuggestion";

const Blog = ({
  blogImage,
  heading,
  uploadTime,
  userId,
  minuteRead,
  blogTags,
  blogPreview,
  blogId,
}) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/userInfoById`, {
        params: {
          userId: userId,
        },
      })
      .then((response) => {
        setUserName(response.data[0].userName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Blog">
      <NavLink to={`/bloginfo/${blogId}`}>
        <div className="blogImage">
          <img src={blogImage} alt="blogImage" />
        </div>
        <div className="blogDetails">
          <h1>{heading}</h1>
          <div className="blogInfo">
            <div>{uploadTime}</div> • <div>{userName ? userName : ""}</div> •
            <div>{minuteRead}</div>
          </div>
          {blogTags ? (
            <div className="blogTagsContainer">
              {blogTags.map((tag, index) => {
                return (
                  <div className="blogTag" key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className="blogPreview">{parse(blogPreview.slice(0, 100))}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Blog;

import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/BlogUser.css";

const BlogUser = ({ userName, blogSaveTime, minuteRead }) => {
  return (
    <>
      <div className="BlogUserContainer">
        <div className="imageContainer">
          <NavLink to={`/profile/${userName}`}><img
            src="https://cdn3.vectorstock.com/i/1000x1000/23/22/new-woman-avatar-icon-flat-vector-19152322.jpg"
            alt="blog"
          /></NavLink>
        </div>
        <div className="userInfoContainer">
          <div className="blogPrimaryInfo"><NavLink to={`/profile/${userName}`}>{userName}</NavLink></div>
          <div className="blogSecondaryInfo">
            <div>{blogSaveTime}</div> ・<div>{minuteRead}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogUser;

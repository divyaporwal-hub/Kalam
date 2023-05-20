import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import "../styles/Blog.css";
import parse from "html-react-parser";
import TagSuggestion from "./TagSuggestion";
import Avatar from "react-avatar";
import randomColor from "randomcolor";

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
  const [fullName, setFullName] = useState("");
  // console.log("PRS: ", parse(blogPreview.slice(0, 100)));

  let blogContentPreview = "";
  // remove the new line objects
  if (blogPreview) {
    // added "<p><br/></p>" because, if there is only one element in the blogPreview then parse will not return array, and then we can't use the .filter() method inside the function.
    let allData = parse(blogPreview + "<p><br/></p>");

    blogContentPreview = allData.filter((data) => {
      return data.props.children.type !== "br";
    });

    // concatnated the strings to make the string longer in preview
    blogContentPreview = blogContentPreview
      .map((tag) => tag.props.children)
      .join(" ");

    // slice the string upto 100 characters
    blogContentPreview = blogContentPreview.slice(0, 100) + "...";
  }

  useEffect(() => {
    if (userId) {
      axios
        .get(`${BASE_URL}/user/userInfoById`, {
          params: {
            userId: userId,
          },
        })
        .then((response) => {
          setFullName(response.data[0].fullName);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="Blog">
      <NavLink to={`/bloginfo/${blogId}`}>
        <div className="blogImage">
          {/* <img src={blogImage} alt="blogImage" /> */}
          {/* <Avatar name={headingName} size="200" /> */}
          <div
            className="headingContainer"
            style={{
              backgroundColor: randomColor({
                luminosity: "dark",
                format: "rgba",
                alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
              }),
            }}
          >
            {heading[0].length > 30
              ? heading[0].slice(0, 30) + "..."
              : heading[0]}
          </div>
        </div>
        <div className="blogDetails">
          <h1>{heading}</h1>
          <div className="blogInfo">
            <div>{uploadTime}</div> • <div>{fullName && fullName}</div> •
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
          <div className="blogPreview">
            {blogContentPreview && blogContentPreview}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Blog;

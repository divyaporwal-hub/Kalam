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
  const [userName, setUserName] = useState("");
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/blog/getBlogInfo`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setBlogData(response.data[0]);
        setBlogId(response.data[0]._id);
        let userId = response.data[0].userId;
        // to get the username by userId
        // why? because the username may be change during the profile edit
        axios
          .get(`${BASE_URL}/user/userInfoById`, {
            params: {
              userId: userId,
            },
          })
          .then((userResponse) => {
            setUserName(userResponse.data[0].userName);
          })
          .catch((err) => {
            console.log(err);
          });
        // end userInfo request
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
              userName={userName}
              blogSaveTime={blogData.blogSaveTime}
              minuteRead={blogData.minuteRead}
              blogId={blogId}
            />
            <BlogImage />
            <BlogHeading blogHeading={blogData.blogHeading} />
            <BlogContent blogText={blogData.blogText} />
            {blogData.blogTags ? (
              <div className="blogTagsContainer">
                {blogData.blogTags.map((tag, index) => {
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
            {blogId && <BlogFooter id={blogId} />}
          </div>
        </div>
        <div className="right">nothing</div>
      </div>
    </div>
  );
};

export default BlogInfo;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/BlogUser.css";
import axios from "axios";
import { BASE_URL } from "../../helper/ref";
import { useNavigate } from "react-router-dom";

const BlogUser = ({ blogId, userName, blogSaveTime, minuteRead }) => {
  const [follow, setFollow] = useState(false);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  let localData = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    async function fetchUserInfo() {
      let userResult = await axios.get(`${BASE_URL}/user/userInfo`, {
        params: {
          userName: userName,
        },
      });

      try {
        if (userResult.data.length) {
          let followerResult = await axios.get(
            `${BASE_URL}/follower/getFollowers`,
            {
              params: {
                userId: userResult.data[0]._id,
              },
            }
          );

          if (followerResult.data.length) {
            setFollow(
              followerResult.data[0].followers.includes(localData.userId)
            );
          }
          setUserId(userResult.data[0]._id);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserInfo();
  }, [userName]);

  async function handleFollow(e) {
    e.preventDefault();
    setFollow(!follow);

    let localData = JSON.parse(localStorage.getItem("userInfo"));
    // followed by
    let followerId = localData.userId;

    // request to update the followers of the user

    let result = await axios.put(`${BASE_URL}/follower/setFollower`, {
      userId: userId,
      followerId: followerId,
      follow: follow,
    });

    try {
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    // let sure = confirm("Are you sure want to delete");
    if (window.confirm("Are you sure want to delete") === true) {
      let response = await axios.delete(`${BASE_URL}/blog/deleteBlog`, {
        params: {
          blogId: blogId,
        },
      });

      console.log(response);
      navigate("/");
    }
  }


  function handleEdit() {
    navigate("/editblog/"+blogId);
  }

  return (
    <>
      <div className="BlogUserContainer">
        <div className="imageContainer">
          <NavLink to={`/profile/${userName}`}>
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/23/22/new-woman-avatar-icon-flat-vector-19152322.jpg"
              alt="blog"
            />
          </NavLink>
        </div>
        <div className="userInfoContainer">
          <div className="blogPrimaryInfo">
            <NavLink to={`/profile/${userName}`}>{userName}</NavLink>
          </div>
          <div className="blogSecondaryInfo">
            <div>{blogSaveTime}</div> ・<div>{minuteRead}</div>
          </div>
        </div>
        {localData.userName !== userName && (
          <div className="followButtonContainer" onClick={handleFollow}>
            <button className={follow ? "follow" : "unfollow"}>
              {follow ? "Followed" : "Follow"}
            </button>
          </div>
        )}

        {localData.userName === userName && (
          <>
            <div className="followButtonContainer" onClick={handleDelete}>
              <button className="deleteButton">Delete</button>
            </div>

            <div className="followButtonContainer" onClick={handleEdit}>
              <button className="editButton">Edit</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogUser;

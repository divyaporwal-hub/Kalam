import React, { useState, useEffect } from "react";
import "../../styles/BlogFooter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComments,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   InstapaperShareButton,
//   LinkedinShareButton,
//   TelegramShareButton,
//   TwitterShareButton,
// } from "react-share";

import { BASE_URL } from "../../helper/ref.js";
import axios from "axios";

const BlogFooter = ({ id }) => {
  console.log(id);

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // getting local data from localStorage

  let localData = JSON.parse(localStorage.getItem("userInfo"));
  let userId = localData.userId;

  useEffect(() => {
    const fetchLikes = async () => {
      let response = await axios.get(`${BASE_URL}/like/getLikes`, {
        params: {
          blogId: id,
        },
      });

      try {
        setLike(response.data[0].likes.includes(userId));
        setLikeCount(response.data[0].likes.length);
      } catch (e) {
        console.log(e);
      }
    };
    fetchLikes();
  }, []);

  async function handleLike() {
    // changes current state
    setLike(!like);

    // database work
    let response = await axios.put(`${BASE_URL}/like/addLike`, {
      blogId: id,
      userId: userId,
      like: like,
    });

    try {
      console.log(response);
      setLikeCount(!like ? likeCount+1 : likeCount-1);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="footerContainer">
        <div className="likeContainer">
          <div className="likeCount">{likeCount}</div>
          <div className="likeIcon" onClick={handleLike}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className={like ? "liked" : "notliked"}
            />
          </div>
        </div>
        <div className="commentSection">
          <div className="commentCount">0</div>
          <FontAwesomeIcon icon={faComments} />
        </div>
        <div className="shareSection">
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </>
  );
};

export default BlogFooter;

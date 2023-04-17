import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../helper/ref.js";
import axios from "axios";
import DisplayComment from "./DisplayComment.jsx";
import "../../styles/Comment.css";
import { useNavigate } from "react-router-dom";

function Comment({ blogId, allComments, setCommentCount }) {
  const [comment, setComment] = useState("");
  let localData = JSON.parse(localStorage.getItem("userInfo"));
  let userId = localData ? localData.userId : "-1";

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userId === "-1") {
      let userConfirm = window.confirm("Please login to comment");
      if (userConfirm) {
        navigate("/login");
      }
    }

    // Post request to save comment in DB
    else if (comment.length) {
      axios
        .post(`${BASE_URL}/comment/saveComment`, {
          comment: comment,
          userId: userId,
          blogId: blogId,
        })
        .then((res) => {
          setComment("");
          //append new comment
          allComments.push(res.data);
          setCommentCount(allComments.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //get request to fetch all the comments
  }

  return (
    <>
      <div className="commentInput">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your comment..."
            name=""
            id=""
            cols="30"
            rows="2"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            disabled={comment.length ? false : true}
            style={
              comment.length
                ? { backgroundColor: "blue" }
                : { backgroundColor: "grey" }
            }
          >
            comment
          </button>
        </form>
      </div>
      <div className="displayComment">
        {allComments.map((comment, index) => {
          return (
            <DisplayComment
              comment={comment}
              key={index}
              setCommentCount={setCommentCount}
            />
          );
        })}
      </div>
    </>
  );
}
export default Comment;

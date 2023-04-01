import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../helper/ref.js";
import axios from "axios"
import DisplayComment from "./DisplayComment.jsx";
import "../../styles/Comment.css"

function Comment({ blogId, allComments,setCommentCount }) {
    const [comment, setComment] = useState('');

    
    function handleSubmit(e) {
        e.preventDefault();

        // Post request to save comment in DB

        axios.post(`${BASE_URL}/comment/saveComment`, {
            comment: comment,
            userId: userId,
            blogId: blogId,

        }).then(res => {
            setComment("");
            //append new comment 
            allComments.push(res.data);
            setCommentCount(allComments.length)
        }).catch(err => {
            console.log(err);
        })

        //get request to fetch all the comments
    }

    let localData = JSON.parse(localStorage.getItem("userInfo"));
    let userId = localData.userId;

    return (
        <>
            <div className="commentInput">
                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Write your comment..." name="" id="" cols="30" rows="2" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <button type="submit">comment</button>
                </form>
            </div>
            <div className="displayComment">
                {
                    allComments.map((comment, index) => {
                        return (
                            <DisplayComment comment={comment} key={index} setCommentCount ={setCommentCount }/>
                        )
                    })
                }
            </div>
        </>


    )
}
export default Comment;
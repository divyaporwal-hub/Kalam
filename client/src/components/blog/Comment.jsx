import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../helper/ref.js";
import axios from "axios"
function Comment({blogId}) {
    const [comment, setComment] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        axios.post(`${BASE_URL}/comment/saveComment`,{
            comment:comment,
            userId:userId,
            blogId:blogId,
    
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    let localData=JSON.parse(localStorage.getItem("userInfo"));
    let userId=localData.userId;
    
    return (
        <div className="commentInput">
            <form onSubmit={handleSubmit}>
                <textarea name="" id="" cols="30" rows="10" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button type="submit">comment</button>
            </form>
        </div>
    )
}
export default Comment;
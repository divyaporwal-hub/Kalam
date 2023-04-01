import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../helper/ref';
import moment from "moment"

import "../../styles/DisplayComment.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function DisplayComment({ comment, setCommentCount  }) {
    const [fullName, setFullName] = useState('');
    const [isDeleted, setIsDeleted] = useState(false)

    //get request to display the fullname of user who did the comment
    useEffect(() => {
        axios.get(`${BASE_URL}/user/userInfoById`, {
            params: {
                userId: comment.postId,
            }
        }).then((response) => {
            setFullName(response.data[0].fullName);
        }).catch(e => {
            console.log(e);
        })
    }, []);

    //delete the comment

    function handleDelete(){
        axios.delete(`${BASE_URL}/comment/deleteComment`,{
            params:{
                userId:JSON.parse(localStorage.getItem("userInfo")).userId
            }
        }).then((response)=>{
            setIsDeleted(true);
            setCommentCount ((prev) => {
                return prev - 1;
            })
        }).catch((e)=>{
            console.log(e);
        })
    }


    return (
        <div className='DisplayComment' style={isDeleted ? {display: "none"} : {display: "flex"}}>
            <div className='container'>
                <div className="infoContainer">
                <p className='fullName'>{fullName} </p>
                <p className='timerEmoji'>🕑 </p>
                <p className='postedTime'>{moment(comment.postedDate).fromNow()}</p>
                </div>
                <div className="deleteButtonContainer">
                    {
                        (comment.postId === JSON.parse(localStorage.getItem("userInfo")).userId) && <FontAwesomeIcon icon={faTrashCan} className="fa-2x icon-hover" onClick={handleDelete}/>
                    }
                </div>
            </div>
            <p className='comment'>{comment.commentText}</p>
        </div>
    )
}

export default DisplayComment

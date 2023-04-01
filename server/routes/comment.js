const express = require("express");
const router = express.Router();

//import Schema
const CommentModel = require("../models/Comment.js");
//post req to save the comment
router.post("/saveComment",async (req,res)=>{
   const userId=req.body.userId;
   const comment=req.body.comment;
   const blogId=req.body.blogId;

   //make comment model object

   console.log(userId, comment, blogId)

   const commentSchema=new CommentModel({
    commentText:comment,
    postId:userId,
    blogId:blogId,
   });

  try{
    let result=await commentSchema.save();
    res.send("ok");
   }
   catch(err){
    console.log(err);
   }
} 
 )


//get all comments



module.exports = router;
const express = require("express");
const router = express.Router();

//import Schema
const CommentModel = require("../models/Comment.js");
//post req to save the comment
router.post("/saveComment", async (req, res) => {
   const userId = req.body.userId;
   const comment = req.body.comment;
   const blogId = req.body.blogId;

   //make comment model object


   const commentSchema = new CommentModel({
      commentText: comment,
      postId: userId,
      blogId: blogId,
   });

   try {
      let result = await commentSchema.save();
      res.send(result);
   }
   catch (err) {
      console.log(err);
   }
}
)


//get all comments

router.get("/getComment", async (req, res) => {
   const blogId = req.query.blogId;
   let result = await CommentModel.find({ blogId: blogId });
   
   try {
      res.send(result);
   }
   catch (err) {
      console.log(err);
   }
})

//delete comment
router.delete("/deleteComment",async(req,res)=>{
   const userId=req.query.userId;
   let result=await CommentModel.deleteOne({postId:userId});
   res.send(result.acknowledged);
})



module.exports = router;
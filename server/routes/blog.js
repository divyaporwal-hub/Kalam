const express = require("express");
const router = express.Router();

const BlogModel = require("../models/Blog.js");
const LikeModel = require("../models/Like.js");
const readingTime = require("reading-time");

router.post("/saveBlog", async (req, res) => {
  const blogHeading = req.body.blogHeading;
  const blogText = req.body.blogText;
  const saveDate = req.body.saveDate;
  const userId = req.body.userId;

  const stats = readingTime(blogText);

  const blog = new BlogModel({
    blogHeading: blogHeading,
    blogText: blogText,
    blogSaveTime: saveDate,
    userId: userId,
    minuteRead: stats.text,
  });

  

  try {
    let result = await blog.save();
    const like = new LikeModel({
      blogId: result._id,
      likes: [],
    });
    await like.save();
    res.send("blog saved");
  } catch (err) {
    console.log(err);
    res.send("No");
  }
});

// to show all the blogs
router.get("/getblogs", (req, res) => {
  BlogModel.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

// to send information about specific blog by its ID

router.get("/getBlogInfo", async (req, res) => {
  const blogId = req.query.id;  

  await BlogModel.find({ _id: blogId })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/blogFindByUserId", async (req, res) => {
  let userId = req.query.userId;

  let result = await BlogModel.find({ userId: userId });
  try {
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.put("/updateBlog", async (req, res) => {
  let blogId = req.body.blogId;
  let blogHeading = req.body.blogHeading;
  let blogText = req.body.blogText;
  let saveDate = req.body.saveDate;

  let result = await BlogModel.find({_id: blogId});
  const stats = readingTime(blogText);

  result[0].blogHeading = blogHeading;
  result[0].blogText = blogText;
  result[0].minuteRead = stats.text;
  result[0].blogSaveTime = saveDate; 
  
  let updatedData = await result[0].save();
  res.send(updatedData);
})

router.delete("/deleteBlog", async (req, res) => {
  let blogId = req.query.blogId;

  let result = await BlogModel.findByIdAndDelete({_id: blogId});
  res.send(result);
})

module.exports = router;

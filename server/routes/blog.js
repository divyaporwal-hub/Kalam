const express = require("express");
const router = express.Router();

const BlogModel = require("../models/Blog.js");

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
    await blog.save();
    res.send("Blog Stored Successfully");
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

router.get("/getBlogInfo" ,(req, res) => {
  const blogId = req.query.id;

  BlogModel.find({_id: blogId})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });

})


router.get("/blogFindByUserId", async (req, res) => {
  let userId = req.query.userId;

  let result = await BlogModel.find({ userId: userId });
  try{
    res.send(result);
  }catch(err) { 
    console.log(err);
  }
});

module.exports = router;

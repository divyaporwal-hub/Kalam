const express = require("express");
const router = express.Router();

const BlogModel = require("../models/Blog.js");

const readingTime = require("reading-time");

router.post("/saveBlog", async (req, res) => {
  const blogHeading = req.body.blogHeading;
  const blogText = req.body.blogText;
  const saveDate = req.body.saveDate;
  const userName = req.body.userName;

  const stats = readingTime(blogText);

  const blog = new BlogModel({
    blogHeading: blogHeading,
    blogText: blogText,
    blogSaveTime: saveDate,
    userName: userName,
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

router.get("/getblogs", (req, res) => {
  BlogModel.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

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
router.post("/blogFindByUserId", (req, res) => {
  let userId = req.body.userId;

  BlogModel.find({ userId: userId }, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;

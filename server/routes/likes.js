const express = require("express");
const router = express.Router();

// import the Schema
const LikeModel = require("../models/Like.js");

router.put("/addLike", async (req, res) => {
  // blogId is required to update the likes for a particular blog
  const blogId = req.body.blogId;

  // these both are used to store as LIKE, {user, like}
  const userId = req.body.userId;
  const like = req.body.like;

  // find the blog
  let result = await LikeModel.find({ blogId: blogId });

  try {
    if (!like) {
      let newLikeArray = result[0].likes;
      newLikeArray.push(userId);
      result[0].likes = newLikeArray;
      result[0].save();
    } else {
      let newLikeArray = result[0].likes;
      let updatedLikeArray = newLikeArray.filter((uID) => uID !== userId);
      result[0].likes = updatedLikeArray;
      result[0].save();
    }
    res.send("OK");
  } catch (e) {
    res.send(e);
  }
});

// to get the all likes of a blog
router.get("/getLikes", async (req, res) => {
  let result = await LikeModel.find({ blogId: req.query.blogId });
  try {
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

// export this router
module.exports = router;

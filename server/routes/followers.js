const express = require("express");
const router = express.Router();

// import the Schema
const FollowerModel = require("../models/Followers.js");

router.put("/setFollower", async (req, res) => {
  const userId = req.body.userId;
  const followerId = req.body.followerId;
  const follow = req.body.follow;

  let result = await FollowerModel.find({ userId: userId });

  try {
    if (!follow) {
      let newFollowerArray = result[0].followers;
      newFollowerArray.push(followerId);
      result[0].followers = newFollowerArray;
      result[0].save();
    } else {
      let newFollowerArray = result[0].followers;
      let updatedFollowerArray = newFollowerArray.filter((fID) => fID !== followerId)
      result[0].followers = updatedFollowerArray;
      result[0].save();
    }

    res.send("OK");
  } catch (e) {
    res.send(e);
  }
});

// to get the all followers of the user
router.get("/getFollowers", async (req, res) => {
  let result = await FollowerModel.find({ userId: req.query.userId });
  console.log(result);
  try {
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

// export this router
module.exports = router;

// 10 9 8...7...6...5...4...3...2...1...0

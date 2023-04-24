const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
  },
});

const Likes = mongoose.model("likes", LikeSchema);
module.exports = Likes;

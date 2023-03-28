const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
    blogId: {
        type: String, 
    },
    likes: {
        type: Array,
    }
});

const Likes = mongoose.model("likes", LikeSchema);
module.exports = Likes;
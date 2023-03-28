const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
    userId: {
        type: String, 
    },
    Likes: {
        type: Array,
    }
});

const Likes = mongoose.model("likes", Likeschema);
module.exports = Like;
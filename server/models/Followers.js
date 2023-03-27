const mongoose = require("mongoose");
const FollowerSchema = new mongoose.Schema({
    userId: {
        type: String, 
    },
    followers: {
        type: Array,
    }
});

const Follower = mongoose.model("followers", FollowerSchema);
module.exports = Follower;



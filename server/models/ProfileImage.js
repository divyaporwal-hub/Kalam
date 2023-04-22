const mongoose = require("mongoose");
const UserImage = new mongoose.Schema({
    userId: {
        type: String, 
        required:true, 
    },
    username: {
        type: String, 
        required:true, 
    },
    userImage: {
        data:Buffer,
        type: String, 
    },
});

const profileImage = mongoose.model("profileimage",UserImage );
module.exports = profileImage;

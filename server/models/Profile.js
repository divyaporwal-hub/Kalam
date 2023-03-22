const mongoose = require("mongoose");
const UserProfile = new mongoose.Schema({
    userName: {
        type: String, 
        required: true,
    },
    fullName: {
        type: String, 
        required: true,
    },
    userBio: {
        type: String, 
    }, 
    userSocialLinks: {
        type: Array,
    }, 
    userPostcount:{
        type: Number,
    },
    userCountry:{
        type:String,
    },
    userFollower:{
        type: Number,
    },

});

const Profile = mongoose.model("profiles", UserProfile);
module.exports = Profile;

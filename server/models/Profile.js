const mongoose = require("mongoose");
const UserProfile = new mongoose.Schema({
    userName: {
        type: String, 
    },
    fullName: {
        type: String, 
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
        type:Object,
    },
    userFollower:{
        type: Number,
    },
});

const Profile = mongoose.model("profiles", UserProfile);
module.exports = Profile;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userOtp: {
    type: String,
  },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;

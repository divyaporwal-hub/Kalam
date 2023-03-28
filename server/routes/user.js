const express = require("express");
const router = express.Router();

// import the Schema
const UserModel = require("../models/User.js");
const ProfileModel = require("../models/Profile.js");
const FollowerModel = require("../models/Followers.js");

// post request to save the user registration in the DB
router.post("/saveUser", async (req, res) => {
  // store the values from front-end
  const userName = req.body.userName;
  const fullName = req.body.fullName;
  const userPassword = req.body.userPassword;
  const userEmail = req.body.userEmail;

  console.log(userName, fullName, userPassword, userEmail);

  // make a object-model to save the data
  const user = new UserModel({
    userName: userName,
    fullName: fullName,
    userEmail: userEmail,
    userPassword: userPassword,
    userOtp: "",
  });

  const updatedProfile = new ProfileModel({
    fullName: fullName,
    userName: userName,
    userBio: "",
    userCountry: "",
    userSocialLinks: [],
    userFollower: 0,
  })

  // save the data
  try {
    let userSaveResult = await user.save();
    await updatedProfile.save();
    const userFollowers = new FollowerModel({
      userId: userSaveResult._id,
      followers: [],
    });
    await userFollowers.save();
    res.send("OK");
  } catch (err) {
    res.send("NO");
  }
});

//post request for loin....

router.post("/login", (req, res) => {
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;

  UserModel.find({ userEmail: userEmail, userPassword: userPassword })
    .then((result) => {
      // ok response (user found)
      res.status(200).send(result); 
    })
    .catch((err) => {
      res.send("ERR");
      console.log(err);
    });
});

router.post("/userInfo", (req, res) => {
  let userEmail = req.body.userEmail;

  UserModel.find({ userEmail: userEmail }, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

router.get("/userInfo", async (req, res) => {
  let userName = req.query.userName;
  try{
    const user = await UserModel.find({ userName: userName });
    res.send(user);
  }
  catch(err){
    console.log(err);
  }
});

router.get("/userInfoById", async (req, res) => {
  let userId = req.query.userId;
  try{
    const user = await UserModel.find({ _id: userId });
    res.send(user);
  }
  catch(err){
    console.log(err);
  }
});

// export this router
module.exports = router;

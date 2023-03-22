const express = require("express");
const router = express.Router();


// import the Schema
const ProfileModel = require("../models/Profile.js");
router.put("/updateProfile", async (req,res)=>{
 const fullName=req.body.fullName;
 const userName=req.body.userName;
 const newUserName=req.body.newUserName;
 const userBio=req.body.userBio;
 const userCountry=req.body.userCountry;
 const userFacebook=req.body.userSocialLinks;
 const userInstagram=req.body.userInstagram;
 const userGithub=req.body.userGithub;
  

 // creating a new object to store the data
 /*const updatedProfile=new ProfileModel({
  fullName:fullName,
  userName: userName,
  userBio: userBio,
  userCountry:userCountry,
  userFacebook:userFacebook,
  userInstagram: userInstagram,
  userGithub: userGithub,
})*/


ProfileModel.find({userName: userName}, (err, result) => {
  if(err) res.send("err");
 result[0].fullName = fullName;
 result[0].userName = newUserName;
 result[0].userBio = userBio;
 result[0].userCountry = userCountry;

 // ab hmko social links ko array me convert krke update krna hai...
 let socialMedialinks=[userFacebook, userInstagram, userGithub];
 result[0].userSocialLinks=socialMedialinks;
})
result[0].save();
})
// export this router
module.exports = router;

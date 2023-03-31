const express = require("express");
const router = express.Router();


// import the Schema
const ProfileModel = require("../models/Profile.js");
const UserModel = require("../models/User.js");


router.put("/updateProfile", async (req, res) => {
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const newUserName = req.body.newUserName;
  const userBio = req.body.userBio;
  const userCountry = req.body.userCountry;
  const userFacebook = req.body.userFacebook;
  const userInstagram = req.body.userInstagram;
  const userGithub = req.body.userGithub;

  const socialMediaLinks = [userFacebook, userInstagram, userGithub];

  console.log(userName)
  try {
    console.log("shikha ma'am")
    let result = await ProfileModel.find({ userName: userName });
    if (result.length) {
      result[0].fullName = fullName;
      result[0].userName = newUserName;
      result[0].userBio = userBio;
      result[0].userCountry = userCountry;
      result[0].userSocialLinks = socialMediaLinks;
      await result[0].save();

      // update user name and fullname of user model
      let userResult = await UserModel.find({userName: userName});
      userResult[0].userName = newUserName;
      userResult[0].fullName = fullName;
      await userResult[0].save();

      res.send("user updated");
    } else {
      const updatedProfile = new ProfileModel({
        fullName: fullName,
        userName: newUserName,
        userBio: userBio,
        userCountry: userCountry,
        userSocialLinks: socialMediaLinks,
      })

      await updatedProfile.save();
      console.log("save kr lia")

      // update user name and fullname of user model
      let userResult = await UserModel.find({userName: userName})
      userResult[0].userName = newUserName;
      userResult[0].fullName = fullName;
      await userResult[0].save();
      res.send("user added")
    }
  } catch (err) {
    console.log("kuchh error hai...")
  }

})

//get request for display the latest information of user profile 
router.get("/getProfile",async (req,res)=>{
  const userName=req.query.userName;
 const result= await ProfileModel.find({userName:userName});
 res.send(result);
})

router.put("/updateFollow", async (req, res) => {
  const follow = req.body.follower;
  const userName = req.body.userName;
  console.log(follow)
  let result = await ProfileModel.find({userName: userName});
  try{
    if(follow)
      result[0].userFollower = result[0].userFollower - 1;
    else 
      result[0].userFollower = result[0].userFollower + 1;

    result[0].save();
    res.send(result);
  }catch(e) {
    console.log(e);  
    res.send(e);
  }
})

// export this router
module.exports = router;

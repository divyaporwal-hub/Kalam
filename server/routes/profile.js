const express = require("express");
const router = express.Router();


// import the Schema
const ProfileModel = require("../models/Profile.js");
router.put("/updateProfile", async (req, res) => {
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const newUserName = req.body.newUserName;
  const userBio = req.body.userBio;
  const userCountry = req.body.userCountry;
  const userFacebook = req.body.userFacebook;
  const userInstagram = req.body.userInstagram;
  const userGithub = req.body.userGithub;


  console.log(userName, newUserName)

  const socialMediaLinks = [userFacebook, userInstagram, userGithub];
  try {
    let result = await ProfileModel.find({ userName: userName });
    console.log(result)
    if (result.length) {
      console.log("exist");
      result[0].fullName = fullName;
      result[0].userName = newUserName;
      result[0].userBio = userBio;
      result[0].userCountry = userCountry;

      result[0].userSocialLinks = socialMediaLinks;
      await result[0].save();
      res.send("user updated");
    } else {
      console.log("else part...")
      const updatedProfile = new ProfileModel({
        fullName: fullName,
        userName: newUserName,
        userBio: userBio,
        userCountry: userCountry,
        userSocialLinks: socialMediaLinks,
      })
      console.log("just phle")
      updatedProfile.save();
      // res.send("user added")
    }
  } catch (err) {
    console.log("kuchh error hai...")
  }

})
// export this router
module.exports = router;

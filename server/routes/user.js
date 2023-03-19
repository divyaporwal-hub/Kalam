const express = require("express");
const router = express.Router();

// import the Schema
const UserModel = require("../models/User.js");

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

  // save the data
  try {
    await user.save();
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
  let userName = req.params.userName;

  try{
    const blogs = await UserModel.find({ userName: userName });
    res.send(blogs);
  }
  catch(err){
    console.log(err);
  }
});

// export this router
module.exports = router;

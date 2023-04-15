const express = require("express");
const router = express.Router();
const ForgetModel = require("../models/User.js");
const UserModel = require("../models/User.js");
const nodemailer = require("nodemailer");
//post request

router.get("/checkUser", async(req, res) => {
  ForgetModel.find({ userEmail: req.query.userEmail })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

const sendMail = "authenticinfo2008@gmail.com";
const sendPassword = "kaniyqfmvzhkuoba";

// post req to save the generated otp
router.post("/generate", async (req, res) => {
  const userEmail = req.body.userEmail;
  try {
    // main code of nodemailer to send OTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: sendMail,
        pass: sendPassword,
      },
    });

    // generate the OTP
    const generateOtp = "6383";

    // initialize the object and add the otp in message
    const mailOptions = {
      from: sendMail,
      to: userEmail,
      subject: "OTP for reset password",
      html: `Your OTP is: ${generateOtp}`,
    };

    // send the OTP
    let otpResponse = await transporter.sendMail(mailOptions)
    console.log(otpResponse)


    let userResponse = await UserModel.find({userEmail: userEmail});
    userResponse[0].userOtp = generateOtp;
    userResponse[0].save();


  } catch (e) {
    console.log("e", "sorry we can't send OTP");
  }   
});
const generateOtp = () => {
  return Math.floor(Math.random() * (9999 - 1000)) + 1000 + "";
};

module.exports = router;

// nodemailer

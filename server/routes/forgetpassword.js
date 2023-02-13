const express = require("express");
const router = express.Router();
const ForgetModel = require("../models/User.js");
const nodemailer = require("nodemailer");
//post request

router.post("/checkUser", (req, res) => {
  ForgetModel.find({ userEmail: req.body.userEmail })
    .then((result) => {
      if (result.length) {
        res.send("OK");
      } else res.send("NO");
    })
    .catch((err) => {
      console.log(err);
    });
});

const sendMail = "shikhapandey0238@gmail.com";
const sendPassword = "";

// post req to save the generated otp
router.post("/generate", (req, res) => {
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
    const generateOtp = generateOtp();

    // initialize the object and add the otp in message
    const mailOptions = {
      from: sendMail,
      to: userEmail,
      subject: "OTP for reset password",
      html: `Your OTP is: ${generateOtp}`,
    };

    // send the OTP
    transporter.sendMail(mailOptions).then((response) => {
      ForgrtetModel.find({ userEmail: userEmail }, (err, result) => {
        result[0].userOtp = generateOtp;
        result[0].save();
        res.send(generateOtp);
      });
    });
  } catch (e) {
    console.log("e", "sorry we can't send OTP");
  }
});
const generateOtp = () => {
  return Math.floor(Math.random() * (9999 - 1000)) + 1000 + "";
};

module.exports = router;

// nodemailer

require("dotenv").config();
const express = require("express");
const router = express.Router();
const ForgetModel = require("../models/User.js");
const UserModel = require("../models/User.js");
const nodemailer = require("nodemailer");
const mailFrom = process.env.MAIL_USER;
const mailPassword = process.env.MAIL_PASSWORD;

//post request

router.get("/checkUser", async (req, res) => {
  ForgetModel.find({ userEmail: req.query.userEmail })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

const sendMail = mailFrom;
const sendPassword = mailPassword;

// post req to save the generated otp
router.post("/generate", async (req, res) => {
  const userEmail = req.body.userEmail;
  try {
    // main code of nodemailer to send OTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      requireTLS: true,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: true,
      },
      auth: {
        user: sendMail,
        pass: sendPassword,
      },
    });

    // generate the OTP
    const generateOtp = generateOTP();

    // initialize the object and add the otp in message
    const mailOptions = {
      from: sendMail,
      to: userEmail,
      subject: "reset password",
      html: `<div  style="text-align: center;">
      <h1> blogging with KALAM </h1>
      <br/> 
      <p> Hi, Let's reset your password. </p>
      <p> To reset the password, use the given OTP <p>
      <h2>${generateOtp}</h2>
    </div>`,
    };

    // send the OTP
    let otpResponse = await transporter.sendMail(mailOptions);
    res.send(generateOtp);
  } catch (e) {
    console.log(e, "sorry we can't send OTP");
  }
});
const generateOTP = () => {
  return Math.floor(Math.random() * (9999 - 1000)) + 1000 + "";
};

//update users password after changing the password

router.put("/updatepassword", async (req, res) => {
  const userEmail = req.body.userEmail;
  const updatedPassword = req.body.updatedPassword;
  //find the user to update the password

  let result = await UserModel.find({ userEmail: userEmail });
  result[0].userPassword = updatedPassword;

  result[0].save();

  res.send("OK");
});

module.exports = router;

// nodemailer

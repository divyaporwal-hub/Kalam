const express = require("express");
const router = express.Router();
const ForgetModel = require("../models/User.js");
const UserModel = require("../models/User.js");
const nodemailer = require("nodemailer");
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
      subject: "OTP for reset password",
      html: `Your OTP is: ${generateOtp}`,
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

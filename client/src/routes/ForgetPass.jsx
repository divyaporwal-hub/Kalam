import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../helper/ref.js";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
function ForgetPass() {
  const [userEmail, setEmail] = useState("");
  const navigate = useNavigate();

  // Get request to check whether a user is registered or not

  function handleSubmit(e) {
    e.preventDefault();
    //post req to check the entered email for reset the password is valid or not
    Axios.post(`${BASE_URL}/forget/checkUser`, {
      userEmail: userEmail,
    })
      .then((response) => {
        if (response.data === "OK") {
          //navigate to otp component

          localStorage.setItem("userEmailForOtp", userEmail);
          navigate("/otp");
          // make a post request to generate & save the OTP

          //
          //
          // // Axios.post(`${BASE_URL}/forget/generateOTP`, {
          ////    userEmail: userEmail,
          // // })
          // //   .then((response) => {
          // //     console.log("otp send...");
          ////    })
          // //   .catch((err) => {
          //     console.log("err");
          //   });
        } else {
          alert("Invalid Email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <form className="forget" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter your registered email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Sumbit</button>
      </form>
    </>
  );
}
export default ForgetPass;

//////
// Axios.get(`${BASE_URL}/profile/getProfile`, {
//       userName: userName,
//     })
//       .then((response) => {
//         if (response.data.length !== 0) {
//           console.log(response.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });

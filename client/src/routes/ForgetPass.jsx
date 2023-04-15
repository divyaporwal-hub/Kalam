import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BASE_URL } from "../helper/ref.js";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const ForgetPass = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    // API call
    e.preventDefault();

    Axios.get(`${BASE_URL}/forget/checkUser`, {
      params: {
        userEmail: userEmail,
      }
    })
      //email/password verification
      .then((response) => {
        if (response.data.length) {
          Axios.post(`${BASE_URL}/forget/generate`, {
            userEmail: userEmail,
          })
        } else {
          alert("Email is not registered.");
        }
      })
      .catch((err) => {
        alert("We're sorry, something went wrong");
        console.log(err);
      });
  }

  return (
    <>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="formHeading">Registered email ✍</h1>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button type="submit"> Send OTP </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPass;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BASE_URL } from "../helper/ref.js";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const ConfirmForget = ({ userEmail }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
   if(userPassword === confirmPassword) {
    Axios.put(`${BASE_URL}/forget/updatepassword`, {
      userEmail: userEmail,
      updatedPassword: userPassword,
    })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
   } else {
    alert("Password not matched.");
   }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="formHeading">Update password 🔑</h1>
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit"> Update </button>
      </form>
    </>
  );
};

export default ConfirmForget;

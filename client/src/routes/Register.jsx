import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("https://7nvyfh-8000.preview.csb.app/user/saveUser", {
      userEmail: userEmail,
      userName: userName,
      fullName: fullName,
      userPassword: password,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="formContainer">
        <form className="register" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="FullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userEmail">Email</label>
          <input
            id="userEmail"
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            id="cpassword"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};
export default Register;

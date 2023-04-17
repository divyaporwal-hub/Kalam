import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/ref.js";
import "../styles/Login.css";
import { passwordStrength } from "check-password-strength";
// import { off } from "../../../server/models/User.js";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // checking for password strength

    if (validPass && password === confirmPassword) {
      Axios.post(`${BASE_URL}/user/saveUser`, {
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
    } else if(!validPass) {
      setWarningMsg("password should be strong.")
    }else if(password!==confirmPassword){
     setWarningMsg("confirm password is not matched")
    }
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
            onChange={(e) => {
              setPassword(e.target.value);
              setValidPass(passwordStrength(e.target.value).value === "Medium" || passwordStrength(e.target.value).value === "Strong");
            }}
            style={password ? (validPass ? {
              borderBottom: "2px solid green"
            } : {
              borderBottom: "2px solid red"
            }) : {
              borderBottom: "2px solid white"
            }}
          />
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            id="cpassword"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{warningMsg}</p>
          <button type="submit">Sign Up</button>
          <p>already have a account?</p>
          <button type="button" onClick={() => {
            navigate("/login");
          }}>Login</button>
        </form>
      </div>
    </>
  );
};
export default Register;

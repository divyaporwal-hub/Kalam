import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/ref.js";
import "../styles/Login.css";
import { passwordStrength } from "check-password-strength";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfpassword, setShowCnfpassword] = useState(false);
  const navigate = useNavigate();
  function handlepassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
  function handelCnfpassword(e) {
    e.preventDefault();
    setShowCnfpassword(!showCnfpassword);
  }
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
    } else if (!validPass) {
      setWarningMsg("password should be strong.");
    } else if (password !== confirmPassword) {
      setWarningMsg("confirm password is not matched");
    }
  }

  return (
    <>
      <div className="formContainer">
        <form className="register" onSubmit={handleSubmit}>
          <h1 className="formHeading">Register</h1>
          <div className="formGroup">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="userEmail">Email</label>
            <input
              id="userEmail"
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPass(
                  passwordStrength(e.target.value).value === "Medium" ||
                    passwordStrength(e.target.value).value === "Strong"
                );
              }}
              style={
                password
                  ? validPass
                    ? {
                        borderBottom: "2px solid green",
                      }
                    : {
                        borderBottom: "2px solid red",
                      }
                  : {
                      borderBottom: "2px solid white",
                    }
              }
            />
            <button onClick={handlepassword}>
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          <div className="formGroup">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              type={showCnfpassword ? "text" : "password"}
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button onClick={handelCnfpassword}>
              {showCnfpassword ? "hide" : "show"}
            </button>
          </div>

          <div className="formGroup">
            <p className="warningMsg">{warningMsg}</p>
            <button type="submit">Sign Up</button>
            <p>already have a account?</p>
            <button
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;

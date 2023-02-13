import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BASE_URL } from "../helper/ref.js";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    // API call
    e.preventDefault();
    Axios.post(`${BASE_URL}/user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
      //email/password verification
      .then((response) => {
        if (response.status === 200) {
          // save information in localstorage before moving to home page
          
          console.log(responsee);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userEmail: userEmail,
              userName: response.data[0].userName,
              fullName: response.data[0].fullName,
            })
          );

          // navigating to home page
          navigate("/");
        } else {
          alert("Email/Password is incorrect");
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
          <h1 className="formHeading">Login ✍</h1>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Link to={"/forgetPass"}>
            <p>Forget Password?</p>
          </Link>
          <button type="submit"> Login </button>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;

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
  const [showPassword, setshowPassword]=useState(false);
  
  function handleShowhide(e){
    e.preventDefault();
    setshowPassword(!showPassword);

 }

  function handleSubmit(e) {
    // API call
    e.preventDefault();
    
    Axios.post(`${BASE_URL}/user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
      //email/password verification
      .then((response) => {
        if (response.data.length) {
          // save information in localstorage before moving to home page
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userEmail: userEmail,
              userName: response.data[0].userName,
              fullName: response.data[0].fullName,
              userId: response.data[0]._id,
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
          <div className="formGroup">
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          </div>
          <button className="formGroup">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button onClick={handleShowhide}>{showPassword ? "Hide" : "Show"}</button>
           </button>
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

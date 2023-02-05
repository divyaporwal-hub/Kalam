import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form class="login">
        <h2>Login</h2>
        <input type="text" placeholder="email/username" />
        <input type="password" placeholder="Password" />
        <Link to={"/"}>
          <button type="submit"> Home </button>
        </Link>
      </form>
    </>
  );
};

export default Login;

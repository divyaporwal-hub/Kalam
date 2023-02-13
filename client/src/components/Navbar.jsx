import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const localData = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <nav className="Navbar">
      <ul className="navbarContainer">
        <Link className="itemLink" to={"/"}>
          <li className="menuItem">Home</li>
        </Link>
        <Link className="itemLink" to={"/write"}>
          <li className="menuItem">Write</li>
        </Link>

        {localData === null ? (
          <>
            <Link className="itemLink" to={"/login"}>
              <li className="menuItem">Login</li>
            </Link>
            <Link className="itemLink" to={"/register"}>
              <li className="menuItem">Sign Up</li>
            </Link>
          </>
        ) : (
          <Link className="itemLink" to={"/logout"}>
            <li className="menuItem">Logout</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

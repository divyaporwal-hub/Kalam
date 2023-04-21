import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPenAlt,
  faRegistered,
  faSignIn,
  faSignInAlt,
  faSignOut,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const localData = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <nav className="Navbar">
      <ul className="navbarContainer">
        <Link className="itemLink" to={"/"}>
          <li className="menuItem">
            <FontAwesomeIcon icon={faHouseUser} />
            <div className="menuItemText">Home</div>
          </li>
        </Link>
        <Link className="itemLink" to={localData ? "/write" : "/login"}>
          <li className="menuItem">
            <FontAwesomeIcon icon={faPenAlt} />
            <div className="menuItemText">Write</div>
          </li>
        </Link>

        {localData === null ? (
          <>
            <Link className="itemLink" to={"/login"}>
              <li className="menuItem">
                <FontAwesomeIcon icon={faSignInAlt} />
                <div className="menuItemText">Signup</div>
              </li>
            </Link>
            <Link className="itemLink" to={"/register"}>
              <li className="menuItem">
                <FontAwesomeIcon icon={faUserLock} />
                <div className="menuItemText">Login</div>
              </li>
            </Link>
          </>
        ) : (
          <Link className="itemLink" to={"/logout"}>
            <li className="menuItem">
              <FontAwesomeIcon icon={faSignOut} />
              <div className="menuItemText">Logout</div>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

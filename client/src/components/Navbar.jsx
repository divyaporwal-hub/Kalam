import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPenAlt,
  faPenFancy,
  faRegistered,
  faSignIn,
  faSignInAlt,
  faSignOut,
  faUser,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import LogoImage from "../helper/kalamlogo2.png";

const Navbar = ({ active }) => {
  const localData = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <nav className="Navbar">
      <ul className="navbarContainer">
        <Link className="itemLink" to={"/"}>
          <li className="menuItem menuItemLogo">
            {/* <FontAwesomeIcon icon={faPenFancy} /> */}
            <div className="menuItemText">
              <img src={LogoImage} alt="" height={50} />
            </div>
          </li>
        </Link>
        <Link className="itemLink" to={"/"}>
          <li className="menuItem">
            <FontAwesomeIcon icon={faHouseUser} />
            <div
              className={
                active === "home" ? "menuItemText activeNav" : "menuItemText"
              }
            >
              Home
            </div>
          </li>
        </Link>
        <Link className="itemLink" to={localData ? "/write" : "/login"}>
          <li className="menuItem">
            <FontAwesomeIcon icon={faPenAlt} />
            <div
              className={
                active === "write" ? "menuItemText activeNav" : "menuItemText"
              }
            >
              Write
            </div>
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
        {localData && (
          <Link
            className="itemLink itemLinkUser"
            to={`/profile/${localData.userName}`}
          >
            <li className="menuItem">
              <FontAwesomeIcon icon={faUser} />
              <div
                className={
                  active === "profile"
                    ? "menuItemText activeNav"
                    : "menuItemText"
                }
              >
                {localData.fullName}
              </div>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

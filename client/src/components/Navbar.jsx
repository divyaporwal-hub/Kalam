import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPenAlt,
  faSignInAlt,
  faSignOut,
  faUser,
  faUserLock,
  faHamburger,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "./useWindowDimensions";
import LogoImage from "../helper/kalamlogo2.png";

const Navbar = ({ active }) => {
  const { height, width } = useWindowDimensions();
  const [navOpen, setNavOpen] = useState(false);
  const localData = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <nav className={navOpen ? "Navbar showNav" : "Navbar hideNav"}>
      <ul className="navbarContainer">
        <Link className="itemLink" to={"/"}>
          <li className="menuItem menuItemLogo">
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
            <Link className="itemLink" to={"/register"}>
              <li className="menuItem">
                <FontAwesomeIcon icon={faSignInAlt} />
                <div className="menuItemText">Signup</div>
              </li>
            </Link>
            <Link className="itemLink" to={"/login"}>
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
        {width < 481 && (
          <div
            className="itemLink hamburger menuItem"
            onClick={() => setNavOpen(!navOpen)}
          >
            <li>
              {navOpen ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </li>
          </div>
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

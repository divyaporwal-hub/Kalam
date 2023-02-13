import React from "react";
import "../styles/Header.css";

import { RiQuillPenLine } from "react-icons/ri";
import Avatar from "../images/userAvatar.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let localData = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="main__header">
      <div className="header">
        <Link to={"/"}>
          <h1>
            Kalam
            <RiQuillPenLine size={40} />
          </h1>
        </Link>
        <div className="userInfo">
          {/* <Link className="login" to {/login}> */}
          <NavLink to={`/profile/${localData.userName}`}>
            <img src={Avatar} alt="user" />
          </NavLink>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

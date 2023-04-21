import React from "react";
import "../styles/Header.css";

import { RiQuillPenLine } from "react-icons/ri";
import Avatar from "../images/userAvatar.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let localData = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="main__header">
      <div className="header">
        <div className="leftSection">
          <Link to={"/"}>
            <h1 className="logoName">Kalam</h1>
          </Link>
          <input type="search" name="" id="" placeholder="Search a blog..." />
        </div>
        <div className="rightSection">
          <NavLink to={localData ? `/write` : "/login"} className={"writeLink"}>
            <FontAwesomeIcon icon={faPenAlt} style={{ fontSize: "1rem" }} />
            Write
          </NavLink>
          <NavLink to={localData ? `/profile/${localData.userName}` : "/login"}>
            <img src={Avatar} alt="user" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

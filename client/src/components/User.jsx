import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Avatar from "../images/userAvatar.png";


import "../styles/User.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const User = (props) => {
  return (
    <div className="profileContainer">
      <img src={Avatar} alt="user" />
      <h2 className="fullname">{props.fullName}</h2>
      <p className="username">{props.userName}</p>
      <p className="bio">{props.userBio}</p>
      <div className="secondaryInfo">
        <p className="location">{props.location} </p>
        <p>●</p>
        <p className="postCount">{props.postCount} posts</p>
        <p>●</p>
        <p className="followers">{props.followers} followers</p>
      </div>
      <div className="socialMedia">
        <Link to={"https://www.google.com"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to={"https://www.google.com"}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link to={"https://www.google.com"}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </div>
  );
};

export default User;

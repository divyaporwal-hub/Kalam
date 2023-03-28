import React from "react";
import Avatar from "../images/userAvatar.png";
import { NavLink } from "react-router-dom";

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
      <p className="username">@{props.userName}</p>
      <p className="bio">{props.userBio}</p>
      <div className="secondaryInfo">
        <p className="location">{props.location.label} </p>
        <p>●</p>
        <p className="postCount">{props.postCount} posts</p>
        <p>●</p>
        <p className="followers">{props.followers} followers</p>
      </div>
      <div className="socialMedia">
        {props.userSocialLinks[0] && (
          <Link to={props.userSocialLinks[0]}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        )}
        {props.userSocialLinks[1] && (
          <Link to={props.userSocialLinks[1]}>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        )}
        {props.userSocialLinks[2] && (
          <Link to={props.userSocialLinks[2]}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        )}
      </div>
      <NavLink
        to={`/profile/edit/${props.userName}`}
        className="editButtonLink"
      >
        <button>edit</button>
      </NavLink>
    </div>
  );
};

export default User;

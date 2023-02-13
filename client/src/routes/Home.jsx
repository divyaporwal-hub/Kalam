import React from "react";
import Tags from "../components/Tags";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import { RiQuillPenLine } from "react-icons/ri";
// import Login from "./Login";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import Avatar from "../images/userAvatar.png";

const Home = () => {
  return (
    <div className="Home">
      {/* Header will contain userprofile icons and name of the website */}
      <div className="header">
        <h1>
          Kalam se! right xyz someting  and thsis simply thisis cool
          <RiQuillPenLine size={40} />
        </h1>
        <div className="userInfo">
          {/* <Link className="login" to {/login}> */}
          <Link to={"/profile"}>
            <img src={Avatar} alt="user" />
          </Link>
          {/* </Link> */}
        </div>
      </div>
      {/* main will contain entire page information */}
      <div className="main">
        {/* Left seciton will contain the Navbar */}
        <div className="left">
          <Navbar />
        </div>

        {/* Right section will contain Blog + Tags */}
        <div className="right">
          <div className="informationContainer">
            <div className="introContainer">
              {/* Here may be a slider or just a image to introduce the website */}
              <Intro />
            </div>
            <div className="blogsContainer">
              {/* We have to map all the blogs here... */}
              <Blogs />
            </div>
          </div>
          <div className="tagContainer">
            {/* Render a component of tags */}
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

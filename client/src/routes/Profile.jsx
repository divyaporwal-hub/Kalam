import React from "react";
import Avatar from "../images/userAvatar.png";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

// everything fine...
// link it to that page
// okay, mtlb icon se? HOME PAGE? (thik hai)
// avatar se link karo profile page ko home par jo avatar h
// abhi link nhi hua I think yaha se navigate use katna padega kya
// ho gya...

const Profile = () => {
  return (
    <>
      <div className="main__container">
        <div className="avatar">
          <img src={Avatar} alt="user" />
        </div>
        <h1>Divya Porwal</h1>
        <h3> Biography </h3>
        <BiUpvote size={30} color={"blue"} />
        <br />
        <h4>40</h4>
        <br />
        <BiDownvote size={30} color={"blue"} />
        <br />
        <h4>40</h4>
        <h2>Number of Blogs : 5</h2>
        <h2> Most Liked Blog : React Projects </h2>
      </div>
    </>
  );
};
export default Profile;

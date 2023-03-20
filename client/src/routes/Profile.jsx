import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import Header from "../components/Header";
import User from "../components/User";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import {RiFileEditFill} from "react-icons/ri";

const Profile = () => {
  const { userName } = useParams();
  const [userData, setUserData] = useState([]);
  const [userBlog,setAllBlog] =useState([]);
  let localData = JSON.parse(localStorage.getItem("userInfo"));
  const userEmail=localData.userEmail;
  const fullName=localData.fullName;


  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/userInfo`, {
        params: {
          userName: userName,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return (
    <>
      <Header />
      <div className="Profile">
        <section className="userSection">
          <User
            fullname={fullName}
            username={userEmail}
            userBio={
              "lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences."
            }
            location={"India"}
            postCount={10}
            followers={78}
          />
        </section>
        <section className="blogSection">BLOGS</section>
      </div>
    </>
  );
};
export default Profile;

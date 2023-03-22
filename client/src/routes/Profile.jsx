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
  const [userData, setUserData] = useState({});
  const [userBlog,setAllBlog] =useState([]);
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/userInfo`, {
        params: {
          userName: userName,
        },
      })
      .then((res) => {
        setUserData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="Profile">
        <section className="userSection">
          <User
            fullName={userData.fullName}
            userName={userData.userName}
            userBio={userData.userBio}
            location={userData.userCountry}
            postCount={userData.userPostcount}
            followers={userData.userFollower}
            userSocialLinks={userData.userSocialLinks}
          />
        </section>
        <section className="blogSection">BLOGS</section>
      </div>
    </>
  );
};
export default Profile;

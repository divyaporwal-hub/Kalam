import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import Header from "../components/Header";
import User from "../components/User";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import Blog from "../components/Blog";

const Profile = () => {
  const { userName } = useParams();
  const [userData, setUserData] = useState({});
  const [userBlogs, setUserBlogs] =useState([]);
  
  useEffect(() => {

    axios.get(`${BASE_URL}/profile/getProfile`, {
      params:{
        userName: userName,
      }
    }).then((response) => {
      if(response.data.length) {
        setUserData(response.data[0]);

      } 
    }).catch((err) => {
      console.log(err);
    })
    
  }, [userName]);



  return (
    <>
      <Header />
      <div className="Profile">
        <section className="userSection">
          {
            userData && <User
            fullName={userData.fullName}
            userName={userData.userName}
            userBio={userData.userBio}
            location={userData.userCountry}
            postCount={userData.userPostcount}
            followers={userData.userFollower}
            userSocialLinks={userData.userSocialLinks}
          />
          }
        </section>
        <section className="blogSection">
         
        </section>
      </div>
    </>
  );
};
export default Profile;

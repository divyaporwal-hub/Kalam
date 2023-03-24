import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import Header from "../components/Header";
import User from "../components/User";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
// import Blog from "../components/Blog";

const Profile = () => {
  const { userName } = useParams();
  const [userData, setUserData] = useState({});
  const [profileData, setProfileData] = useState({});
  // const [userBlogs, setUserBlogs] =useState([]);

  useEffect(() => {

    async function fetchUserInfo() {
      let userResult = await axios.get(`${BASE_URL}/user/userInfo`, {
        params: {
          userName: userName,
        },
      });

      try{
        setUserData(userResult.data[0]);
      }
      catch(err) {
        console.log("Error: User can't be fetched due to", err);
      }
    }

    async function fetchUserProfile() {
      let profileResult = await axios.get(`${BASE_URL}/profile/getProfile`, {
        params: {
          userName: userName,
        },
      });
      try {
        if (profileResult.data.length) {
          setProfileData(profileResult.data[0]);
        }
      } catch (err) {
        console.log("Error: Profile can't be feched due to", err);
      }
    }
    fetchUserInfo();
    fetchUserProfile();

  }, [userName]);

  return (
    <>
      <Header />
      <div className="Profile">
        <section className="userSection">
          {Object.keys(profileData).length !== 0 ? (
            <User
              fullName={profileData.fullName}
              userName={profileData.userName}
              userBio={profileData.userBio}
              location={profileData.userCountry}
              postCount={profileData.userPostcount}
              followers={profileData.userFollower}
              userSocialLinks={profileData.userSocialLinks}
            />
          ) : (
            <User
              fullName={userData.fullName}
              userName={userData.userName}
              userBio={""}
              location={""}
              postCount={""}
              followers={""}
              userSocialLinks={""}
            />
          )}
        </section>
        <section className="blogSection">
          
        </section>
      </div>
    </>
  );
};
export default Profile;

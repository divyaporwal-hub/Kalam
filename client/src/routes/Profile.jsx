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
  const [userBlog,setAllBlog] =useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);

    axios.post(`${BASE_URL}/user/userInfo`, {
      userName: userName,
    })
      .then((userIdResponse) => {
        axios.get(`${BASE_URL}/profile/getProfile`, {
          params: {
            userName: userName,
          },
        })
          .then((userResponse) => {
            axios.post(`${BASE_URL}/blog/blogFindByUserId`, {
              userId: userIdResponse.data[0]._id,
            }).then((blogResponse) => {
              setUserData(userResponse.data[0]);
              setAllBlog(blogResponse.data);
              setLoading(false);
            });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);
  


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
        <section className="blogSection">
          <Blog blogHeading={setAllBlog.blogHeading}
                uploadTime={setAllBlog.blogSaveTime}
                authorName={setAllBlog.userName}
                minuteRead={setAllBlog.minuteRead}
                blogPreview={setAllBlog.blogText}
                blogId = {setAllBlog._id}
          />
        </section>
      </div>
    </>
  );
};
export default Profile;

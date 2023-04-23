import React, { useEffect, useState } from "react";
import "../../styles/BlogInfoUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../helper/ref";
import { NavLink } from "react-router-dom";

function BlogInfoUser({ userName, userIdForFollowers }) {
  const [follow, setFollow] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [userFollower, setUserFollower] = useState(0);

  let localData = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    async function fetchUserFollowers() {
      let followerResult = await axios.get(
        `${BASE_URL}/follower/getFollowers`,
        {
          params: {
            userId: userIdForFollowers,
          },
        }
      );
      setUserFollower(followerResult.data[0].followers.length);
      setFollow(followerResult.data[0].followers.includes(localData.userId));
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
    fetchUserProfile();
    fetchUserFollowers();
  }, [userName]);

  async function handleFollow(e) {
    e.preventDefault();

    // followed by
    let followerId = localData.userId;

    // request to update the followers of the user
    let result = await axios.put(`${BASE_URL}/follower/setFollower`, {
      userId: userIdForFollowers,
      followerId: followerId,
      follow: follow,
    });
    setUserFollower(result.data[0].followers.length);
    setFollow(!follow);

    try {
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="BlogInfoUser">
      <section className="top">
        <div className="imageContainer">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/23/22/new-woman-avatar-icon-flat-vector-19152322.jpg"
            alt="blog"
          />
        </div>
        <div className="userInfoContainer">
          <div className="fullName">
            <NavLink to={`/profile/${profileData.userName}`}>
              {profileData.fullName}
            </NavLink>
          </div>
          <div className="followers">{userFollower} Followers</div>
        </div>
      </section>
      <section className="middle">
        {localData && localData.userName !== userName && (
          <div className="followButtonContainer" onClick={handleFollow}>
            <button className={follow ? "follow" : "unfollow"}>
              {follow ? "Following" : "Follow"}
            </button>
          </div>
        )}
        <div className="socialMediaLinkContainer">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </section>
      <div className="bottom">
        <div className="userBio">{profileData.userBio}</div>
      </div>
    </div>
  );
}

export default BlogInfoUser;

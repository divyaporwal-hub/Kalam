import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import Header from "./Header";
import User from "../components/User";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../helper/ref";

const Profile = () => {
  const { userName } = useParams();

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
            fullname={"Shikha Pandey"}
            username={"shikha@2803"}
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

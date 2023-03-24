import React, { useState, useMemo,useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { BASE_URL } from "../helper/ref.js";
import Axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


import "../styles/EditProfile.css"


function Editprofile() {
    const userData= JSON.parse(localStorage.getItem("userInfo"));

    const [newUserName, setNewuserName] = useState(userData.userName);
    const [fullName, setFullName] = useState(userData.fullName);
    const [userBio, setUserBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [github, setGithub] = useState("");
    const [country, setCountry] = useState("");


    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        setCountry(country)
    }


    function handleSubmit(e) {
        e.preventDefault();
    
        Axios.put(`${BASE_URL}/profile/updateProfile`,{
          userName:userData.userName,
          newUserName: newUserName,
          fullName:fullName,
          userBio:userBio,
          userCountry:country,
          userInstagram:instagram,
          userFacebook:facebook,
          userGithub:github,
        })
        .then((response)=>{
            // update the username and ufullname from localstorage
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            userInfo.userName = newUserName;
            userInfo.fullName = fullName;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    useEffect(()=>{
        Axios.get(`${BASE_URL}/profile/getProfile`, {
            params:{
                userName:userData.userName,
            }
        })
        .then((response)=>{
            if(response.data.length) {
                let user = response.data[0];
                setNewuserName(user.newUserName);
                setFullName(user.fullName);
                setUserBio(user.userBio);
                setCountry(user.userCountry);
                setFacebook(user.userSocialLinks[0]);
                setInstagram(user.userSocialLinks[1]);
                setGithub(user.userSocialLinks[2]);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [userData.userName])

    return (
        <>
            <Header />
            <Navbar />
            <div className="EditProfile">
                <form onSubmit={handleSubmit}>
                <div className="formGroup">
                        <label htmlFor="Image">Profile</label>
                        <input
                            type="file"
                            id="Image"
                            placeholder="UserName"
                            onChange={(e) => setNewuserName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            placeholder="User Name"
                            value={newUserName}
                            onChange={(e) => setNewuserName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="userBio">Bio</label>
                        <textarea
                            id="userBio"
                            placeholder="write about yourself"
                            value={userBio}
                            onChange={(e) => setUserBio(e.target.value)}></textarea>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="countryName">Country</label>
                        <Select options={options} value={country} onChange={changeHandler}  id="countryName"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="facebook"></label>
                        <input
                            type="text"
                            id="facebook"
                            placeholder="facebook url"
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Instagram"></label>
                        <input
                            type="text"
                            id="Instagram"
                            placeholder="instagram url"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Github"></label>
                        <input
                            type="text"
                            id="Github"
                            placeholder="github url"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}></input>
                    </div>

                    <div className="formGroup">
                        <label htmlFor=""></label>
                        <input
                            type="submit"
                            id="submit"
                            value={"Update"}></input>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Editprofile;
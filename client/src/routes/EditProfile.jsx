import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { BASE_URL } from "../helper/ref.js";
import Axios from "axios";
import isUrl from "is-url";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "../styles/EditProfile.css"


function Editprofile() {
    const userData= JSON.parse(localStorage.getItem("userInfo"));

    const [newUserName, setNewuserName] = useState(userData.userName);
    const [fullName, setFullName] = useState("");
    const [userBio, setUserBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [github, setGithub] = useState("");
    const [country, setCountry] = useState("");


    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        console.log(country)
        setCountry(country)
    }


    function handleSubmit(e) {
        e.preventDefault();
    
        Axios.put(`${BASE_URL}/profile/updateProfile`,{
          userName:userData.userName,
          newUserName: newUserName,
          fullName:fullName,
          userBio:userBio,
          userCountry:country.label,
          userInstagram:instagram,
          userFacebook:facebook,
          userGithub:github,
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
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
                            onChange={(e) => setFullName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="userBio">Bio</label>
                        <textarea
                            id="userBio"
                            placeholder="write about yourself"
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
                            onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Instagram"></label>
                        <input
                            type="text"
                            id="Instagram"
                            placeholder="instagram url"
                            onChange={(e) => setInstagram(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Github"></label>
                        <input
                            type="text"
                            id="Github"
                            placeholder="github url"
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
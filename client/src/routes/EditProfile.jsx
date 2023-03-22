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
    const [newuserName, setNewuserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [userBio, setUserBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [github, setGithub] = useState("");
    const [country, setCountry] = useState("");


    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setCountry(value)
    }

    function handleSubmit(e) {
        e.preventdefault();
    }
    return (
        <>
            <Header />
            <Navbar />
            <div className="EditProfile">
                <form onSubmit={handleSubmit}>
                <div className="formGroup">
                        <label htmlFor="userName">Upload Image</label>
                        <input
                            type="file"
                            id="userName"
                            placeholder="UserName"
                            onChange={(e) => setNewuserName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            placeholder="UserName"
                            onChange={(e) => setNewuserName(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="UserName"
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
                        <Select options={options} value={value} onChange={changeHandler}  id="countryName"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="facebook"></label>
                        <input
                            type="text"
                            id="facebook"
                            placeholder="your facebook url"
                            onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Instagram"></label>
                        <input
                            type="text"
                            id="Instagram"
                            placeholder="your Instagram url"
                            onChange={(e) => setInstagram(e.target.value)}></input>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Github"></label>
                        <input
                            type="text"
                            id="Github"
                            placeholder="your Github url"
                            onChange={(e) => setGithub(e.target.value)}></input>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Editprofile;